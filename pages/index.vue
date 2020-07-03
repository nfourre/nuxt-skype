<template>
  <div class="login-wrapper">
    <div class="login-modale">
      <div class="login-side"></div>
      <form id="ident" class="ident" method="post" @submit="checkForm">
        <div class="field">
          <label class="label" for="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="email"
            placeholder=""
            aria-label="email"
            v-model="credentials.email"
          />
          <p v-if="errors.emptyEmail" class="error">
            Ce champ est obligatoire
          </p>
        </div>
        <div class="field">
          <label class="label" for="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            class="password"
            placeholder=""
            aria-label="password"
            v-model="credentials.password"
          />
          <p v-if="errors.emptyPassword" class="error">
            Ce champ est obligatoire
          </p>
        </div>
        <button class="button" type="submit">Se connecter</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    credentials: {
      email: null,
      password: null,
    },
    errors: {
      emptyEmail: false,
      emptyPassword: false,
    },
  }),
  methods: {
    ...mapActions(['login']),
    checkForm(event) {
      event.preventDefault()
      if (this.credentials.email === null || this.credentials.email === '') {
        this.errors.emptyEmail = true
      } else {
        this.errors.emptyEmail = false
      }
      if (
        this.credentials.password === null ||
        this.credentials.password === ''
      ) {
        this.errors.emptyPassword = true
      } else {
        this.errors.emptyPassword = false
      }

      if (
        this.errors.emptyPassword === false &&
        this.errors.emptyEmail === false
      ) {
        this.login(this.credentials)
      }
    },
  },
}
</script>

<style>
.login-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
}

.login-modale {
  width: 450px;
  height: 350px;
  display: flex;
  border: 1px solid #3b3a9e;
  display: flex;
  flex-direction: row;
  border-radius: 12px;
  overflow: hidden;
}

.login-side {
  width: 150px;
  height: 350px;
  background: #3b3a9e;
}

.error {
  color: red;
  margin-top: 0.5rem;
}

.ident {
  position: relative;
  width: 300px;
  margin: 1rem;
}

.button {
  width: 100%;
  box-shadow: none;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #3b3a9e;
  font-family: LeroyMerlin, sans-serif;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1;
  padding: 0.25rem 2rem;
  min-height: 3rem;
  min-width: 3rem;
  height: 0;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
  border: 2px solid transparent;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  box-sizing: border-box;
  fill: currentColor;
}

.field {
  margin: 1rem 0;
}

.label {
  width: 100%;
  display: block;
  margin-bottom: 1rem;
}

input {
  font-weight: 400;
  box-sizing: border-box;
  outline: none;
  -webkit-appearance: none;
  box-shadow: none;
  border-radius: 4px;
  border: 1px solid #6f676c;
  display: block;
  width: 100%;
  font-size: 1rem;
  line-height: 1.375;
  background: #fff;
  color: #222020;
  position: relative;
  -webkit-transform: translateZ(0);
  padding: 1rem;
}
</style>
