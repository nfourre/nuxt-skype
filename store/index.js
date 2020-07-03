import { fireDb, fireAuth } from '~/plugins/firebase'

export const state = () => ({
  chats: [],
  currentChat: null,
  currentUser: null,
})

export const getters = {
  chats: (state) => state.chats,
  currentChat: (state) => state.currentChat,
  currentUser: (state) => state.currentUser,
}

export const mutations = {
  updateChats(state, payload) {
    state.chats = [...payload]
    if (state.currentChat === null) {
      const sortedMessages = [...state.chats[0].messages]
      sortedMessages.sort((a, b) => b.created.seconds - a.created.seconds)
      state.currentChat = { ...state.chats[0], messages: sortedMessages }
    }
  },
  updateChat(state, payload) {
    const chats = [...state.chats]
    const updatedChats = chats.map((chat) =>
      chat.id === payload.id ? payload : chat
    )
    state.chats = [...updatedChats]
  },
  setCurrentChat(state, payload) {
    state.currentChat = {
      ...state.chats.find((chat) => chat.id === payload),
    }
    state.currentChat.messages.sort(
      (a, b) => b.created.seconds - a.created.seconds
    )
  },
  updateCurrentChat(state, payload) {
    const sortedMessages = [...payload.messages]
    sortedMessages.sort((a, b) => b.created.seconds - a.created.seconds)
    state.currentChat = { ...payload, messages: sortedMessages }
  },
  setCurrentUser(state, payload) {
    state.currentUser = payload
  },
}

export const actions = {
  updateChats({ commit }, payload) {
    commit('updateChats', payload)
  },
  setCurrentChat({ commit }, payload) {
    commit('setCurrentChat', payload)
  },
  async sendMessage({ commit }, payload) {
    const newMessage = {
      content: payload,
      created: new Date(),
      senderId: this.state.currentUser.authId,
    }

    const messages = [...this.state.currentChat.messages, newMessage]
    const ref = fireDb.collection('chats').doc(this.state.currentChat.id)

    try {
      await ref.update({ messages, updated: new Date() })
      console.log('New message added')
    } catch (error) {
      console.log(error)
    }
  },
  updateChat({ commit }, payload) {
    commit('updateCurrentChat', payload)
    commit('updateChat', payload)
  },
  async autoLogin({ commit }, payload) {
    console.log(payload)
    const loggedUser = await fireDb
      .collection('users')
      .where('authId', '==', payload)
      .get()
    commit('setCurrentUser', loggedUser.docs[0].data())
  },
  async login({ commit }, payload) {
    try {
      const authUser = await fireAuth.signInWithEmailAndPassword(
        payload.email,
        payload.password
      )

      const loggedUser = await fireDb
        .collection('users')
        .where('authId', '==', fireAuth.currentUser.uid)
        .get()

      commit('setCurrentUser', loggedUser.docs[0].data())
      this.$router.push('/home')
    } catch (error) {
      console.log('bad credentials')
    }
  },
  logout({ commit }) {
    try {
      fireAuth.signOut()
      commit('setCurrentUser', null)
      this.$router.push('/')
    } catch (error) {
      console.log(error)
    }
  },
  async sigin({ commit }, payload) {
    try {
      const userCredential = await fireAuth.createUserWithEmailAndPassword(
        payload.email,
        payload.password
      )
      const userAuthId = userCredential.user.uid
      const newUser = {
        authId: userAuthId,
        mail: payload.email,
        firstname: payload.firstname,
        lastname: payload.lastname,
      }
      const registeredUser = await fireDb.collection('users').add(newUser)
      const user = await registeredUser.get()
      commit('setCurrentUser', user.data())
      this.$router.push('/home')
    } catch (error) {
      console.log(error)
    }
  },
}
