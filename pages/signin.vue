<template>
  <section class="section is-medium">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <div class="box">
          <h3 class="subtitle is-3 has-text-centered">
            ログイン
          </h3>
          <div class="field">
            <p class="control">
              <input
                v-model="email"
                class="input"
                type="email"
                placeholder="Email"
              >
            </p>
          </div>
          <div class="field">
            <p class="control">
              <input v-model="password" class="input" type="password" placeholder="Password">
            </p>
          </div>
          <div class="field">
            <p class="control">
              <a class="button is-warning is-fullwidth" @click="signin">
                Sign In
              </a>
            </p>
          </div>
        </div>　
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
@Component

export default class Signin extends Vue {

  get currentUser() {
    return this.$store.state.user.current
  }

  email: string = ""
  password: string = ""

  async signin(email, password) {
    try {
      await this.$store.dispatch('user/signin', {
        email: this.email,
        password: this.password
        }
      )
      const currentUser = this.$store.state.user.current
      if (!currentUser) {
        this.$router.push('/login');
      } else if (currentUser.user.is_manager) {
        this.$router.push('/admin');
      } else {
        this.$router.push('/mypage');
      }
    } catch(e) {
      console.log('errorです')
    }
  
}


}




</script>
