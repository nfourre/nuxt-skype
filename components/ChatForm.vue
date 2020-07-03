<template>
  <div class="chat-form">
    <div class="input-wrapper">
      <input type="text" name="" v-model="message" />
      <span class="send material-icons" @click="checkMessage">
        send
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    message: '',
  }),
  methods: {
    ...mapActions(['sendMessage']),
    checkMessage() {
      if (this.message !== null || this.message !== '') {
        this.sendMessage(this.message)
        this.message = ''
      }
    },
  },
}
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
