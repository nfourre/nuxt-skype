<template>
  <div class="chat-form">
    <div class="input-wrapper">
      <input type="text" name="" />
      <span class="send material-icons">
        send
      </span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.chat-form {
  height: 80px;
  padding: 1rem 10px;
  box-sizing: border-box;
}

.chat-form .input-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 25px;
  height: 50px;
  background: #dde0fa;
  padding: 0 10px;
}

.chat-form .input-wrapper input {
  flex: 1;
  height: 30px;
  border: none;
  background: none;
  outline: none;
}

.chat-form .input-wrapper .send {
  color: #9a98dc;
  cursor: pointer;
}
</style>
