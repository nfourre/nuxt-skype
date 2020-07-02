<template>
  <div class="chat-message">
    <div class="message-wrapper">
      <div class="circle-avatar">
        <div class="avatar">
          <img src="~/assets/avatar.png" alt="" />
        </div>
      </div>
      <div class="message-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias illo
        obcaecati modi pariatur repellat dolore, porro incidunt quo eius,
        numquam dicta minima fugit, omnis nobis voluptas inventore atque
        consequatur eveniet!
      </div>
    </div>
    <div class="time">
      12:54
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.chat-message {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  padding: 1rem;
}

.chat-message .message-wrapper {
  display: flex;
  flex-direction: row;
}

.chat-message .message-wrapper .circle-avatar {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: red;
  text-align: center;
}

.chat-message .message-wrapper .circle-avatar .avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}

.chat-message .message-wrapper .circle-avatar .avatar img {
  width: 100%;
  height: 100%;
}

.chat-message .message-wrapper .message-content {
  flex: 1;
  padding: 1rem;
  margin: 0 0.5rem;
  max-width: 450px;
  background: #9a98dc;
  color: white;
  border-radius: 8px;
  font-weight: 300;
}

.chat-message .time {
  align-self: flex-end;
  padding: 0.5rem 1rem;
  color: #9a98dc;
  font-size: 0.75rem;
}

.chat-message.mine {
  align-self: flex-end;
}

.chat-message.mine .message-wrapper {
  flex-direction: row-reverse;
}

.chat-message.mine .message-wrapper .message-content {
  background: #dde0fa;
  color: #323232;
}

.chat-message.mine .time {
  align-self: flex-start;
}
</style>
