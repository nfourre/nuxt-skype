<template>
  <div class="contact-header">
    <span class="back material-icons" @click="logout">
      exit_to_app
    </span>
    <img class="logo" src="~/assets/logo.png" alt="Skype" />
    <span class="back material-icons">
      menu
    </span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['logout']),
  },
}
</script>

<style scoped>
.contact-header {
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.contact-header .back {
  color: #ffffff;
  font-size: 2rem;
  padding: 0rem 1rem;
}

.contact-header .logo {
  width: auto;
  height: 50px;
}
</style>
