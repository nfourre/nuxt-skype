<template>
  <div class="chat-app">
    <div class="contact">
      <ContactHeader />
      <ContactList :chats="chats" />
    </div>
    <div class="chat">
      <ChatHeader />
      <ChatWindow />
      <ChatForm />
    </div>
  </div>
</template>

<script>
import { fireDb } from '~/plugins/firebase'
export default {
  data: () => ({
    chats: [],
  }),
  mounted() {
    fireDb.collection('chats').onSnapshot((snapshot) => {
      let chats = []
      console.log(snapshot)
      snapshot.docChanges().forEach((change) => {
        const chat = { id: change.doc.id, ...change.doc.data() }
        chats = [...chats, chat]
        this.chats = chats
      })
    })
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
