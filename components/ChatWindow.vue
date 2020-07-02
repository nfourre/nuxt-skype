<template>
  <div class="chat-window">
    <ChatMessage />
  </div>
</template>

<script>
export default {}
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
