<template>
  <div class="chat-app">
    <div class="contact">
      <ContactHeader />
      <ContactList :chats="chats" :currentChat="currentChat" />
    </div>
    <div class="chat">
      <ChatHeader />
      <ChatWindow />
      <ChatForm />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { fireDb } from '~/plugins/firebase'
export default {
  computed: {
    ...mapGetters(['chats', 'currentChat']),
  },
  mounted() {
    fireDb.collection('chats').onSnapshot((snapshot) => {
      let chats = []
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const chat = { id: change.doc.id, ...change.doc.data() }
          chats = [...chats, chat]
          this.updateChats(chats)
        }

        if (change.type === 'modified') {
          const updatedChat = { id: change.doc.id, ...change.doc.data() }
          this.updateChat(updatedChat)
        }
      })
    })
  },
  methods: {
    ...mapActions(['updateChats', 'updateChat']),
  },
}
</script>

<style scoped>
.chat-app {
  display: flex;
  flex-direction: row;
  font-family: 'Roboto', sans-serif;
}

.contact {
  width: 30vw;
  min-width: 450px;
  display: flex;
  flex-direction: column;
}

.chat {
  width: 70vw;
  height: 100vh;
  background: white;
}
</style>
