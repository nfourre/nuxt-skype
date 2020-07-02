<template>
  <div class="contact-list">
    <ContactCard v-for="chat in chats" :key="chat.id" :chat="chat" />
  </div>
</template>

<script>
export default {
  props: ['chats'],
}
</script>

<style scoped>
.contact-list {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: calc(100vh - 60px);
}
</style>
