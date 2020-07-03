<template>
  <div class="chat-window" v-if="currentChat">
    <ChatMessage
      v-for="message in currentChat.messages"
      :key="message.created.seconds"
      :message="message"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    sortedMessages: [],
  }),
  computed: {
    ...mapGetters(['currentChat']),
  },
}
</script>

<style>
.chat-window {
  width: 100%;
  height: calc(100vh - 140px);
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
}
</style>
