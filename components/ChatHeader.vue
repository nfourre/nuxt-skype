<template>
  <div class="chat-header">
    <div class="message">
      <span class="notification">
        2
      </span>
      <span class="grey material-icons">
        email
      </span>
    </div>

    <div class="search">
      <input id="search" type="text" name="" />
      <span class="white material-icons">
        search
      </span>
    </div>

    <div class="contact-account">
      <span class="grey material-icons">
        person
      </span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.chat-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 1rem;
}

.chat-header .message {
  position: relative;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
}

.chat-header .grey {
  color: #dde0fa;
}

.chat-header .white {
  color: #ffffff;
}

.chat-header .message .notification {
  position: absolute;
  top: -4px;
  right: -8px;
  width: 16px;
  height: 16px;
  line-height: 16px;
  border-radius: 8px;
  text-align: center;
  color: #ffffff;
  background: #ff1f78;
  font-size: 0.75rem;
}

.chat-header .search {
  min-width: 250px;
  max-width: 450px;
  background: #dde0fa;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 4px;
}

.chat-header .search input {
  flex: 1;
  background: none;
  border: none;
  outline: none;
}
</style>
