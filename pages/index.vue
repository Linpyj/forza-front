<template>
  <div class="container">
    <section class="section">
      <div class="title" style="padding: 0.4em 0.5em; color: #494949;  background: #f4f4f4; border-bottom: solid 3px #d7d7d7;">
        Welcome to Rinapp!
      </div>
      <div class="title has-text-centered">
        Sign Up
      </div>
      <div class="columns">
        <div class="column is-6 is-offset-3">
          <div class="box">
            <div class="field">
              <p class="control">
                <input v-model="name" class="input" type="name" placeholder="ユーザー名">
              </p>
            </div>
            <div class="field">
              <p class="control">
                <input v-model="email" class="input" type="email" placeholder="メールアドレス">
              </p>
            </div>
            <div class="field">
              <p class="control">
                <input v-model="password" class="input" type="password" placeholder="パスワード">
              </p>
            </div>
            <div class="field">
              <p class="control">
                <a class="button is-warning is-fullwidth" @click="signUp">
                  新規登録
                </a>
              </p>
            </div>
          </div>　
        </div>
      </div>
      <div class="title has-text-centered">
        登録済みの方はこちら
      </div>
      <div class="columns">
        <div class="column is-6 is-offset-3">
          <div class="box">
            <div class="field">
              <p class="control has-text-centered">
                <nuxt-link to="/signin" class="button is-large is-success">
                  Sign in
                </nuxt-link>
              </p>
            </div>
          </div>　
        </div>
      </div>
    </section>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

@Component
export default class Mypage extends Vue {

  name: string = ""
  email: string = ""
  password: string = ""

  async signUp(name, email, password) {
    try {
      await this.$store.dispatch('user/signUp', {
        name: this.name,
        email: this.email,
        password: this.password
      })
      await this.$router.push('/mypage')
    } catch {
      console.log('errorですよ')
    }
  }

}

</script>
