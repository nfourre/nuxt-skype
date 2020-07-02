<template>
  <div
    class="contact-card"
    @click="setCurrentChat(chat.id)"
    :class="{ active: currentChat && currentChat.id === chat.id }"
  >
    <div class="circle-avatar">
      <div class="notification">99</div>
      <div class="avatar">
        <img src="~/assets/avatar.png" alt="" />
      </div>
    </div>

    <div class="content">
      <span class="contact-name" v-if="contact"
        >{{ contact.firstname }} {{ contact.lastname }}</span
      >
      <div class="message" v-if="lastMessage">
        <p>
          {{ lastMessage.content }}
        </p>
      </div>
    </div>

    <div class="time" v-if="lastMessage">
      {{ lastMessage.created | dateTime }}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    currentUserId: '1',
    contact: null,
    lastMessage: null,
  }),
  props: ['chat', 'currentChat'],
  mounted() {
    this.contact = this.chat.people.find(
      (contact) => contact.id !== this.currentUserId
    )
    this.lastMessage = this.chat.messages.slice(-1)[0]
  },
  methods: {
    ...mapActions(['setCurrentChat']),
  },
}
</script>

<style scoped>
.contact-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
}

.contact-card .circle-avatar {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: red;
  text-align: center;
}

.contact-card .circle-avatar .avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}

.contact-card .circle-avatar .avatar img {
  width: 100%;
  height: 100%;
}

.contact-card .circle-avatar .notification {
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 10px;
  text-align: center;
  color: #ffffff;
  background: #ff1f78;
  font-size: 0.75rem;
}

.contact-card .content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  flex: 1;
  padding: 1rem;
}

.contact-card .content .contact-name {
  color: #ffffff;
  padding: 0.25rem 0;
}

.contact-card .content .message {
  color: rgba(255, 255, 255, 0.6);
  padding: 0.25rem 0;
  width: 100%;
  box-sizing: border-box;
  display: block;
}

.contact-card .content .message p {
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.contact-card .time {
  width: 40px;
  height: 20px;
  border-radius: 15px;
  background: #383792;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
  line-height: 20px;
  text-align: center;
}

.contact-card.active {
  background: #ff1f78;
  box-shadow: 4px 0px 4px #ff1f78;
}

.contact-card.active .time {
  background: #ffffff;
  color: #ff1f78;
}
</style>
