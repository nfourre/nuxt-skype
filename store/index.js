import { fireDb } from '~/plugins/firebase'

export const state = () => ({
  chats: [],
  currentChat: null,
})

export const getters = {
  chats: (state) => state.chats,
  currentChat: (state) => state.currentChat,
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
      senderId: '1',
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
}
