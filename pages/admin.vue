<template>

  <div class="container">
    <section class="section" v-if="currentUser.is_manager = true">
      <div class="title" style="padding: 0.4em 0.5em; color: #494949;  background: #f4f4f4; border-bottom: solid 3px #d7d7d7;">
        管理者ページ
      </div>
      <div>
        {{ currentUser }}
      </div>
      <div class="title">
        User Index
      </div>
      <table class="table" style="width: 100%;">
        <tr>
          <th class="has-text-centered">
            Name
          </th>
          <th class="has-text-centered">
            ユーザー削除
          </th>
        </tr>
        <tr v-for="user in fetchUsers" :key="user.id">
          <td class="has-text-centered">
            {{ user.name }}
          </td>
          <td>
            <a class="button is-warning" @click="destroyUser(user.id)">
              削除
            </a>
          </td>
        </tr>
      </table>
    </section>


    <section  v-else="currentUser.is_manager = false">
      <nuxt-link to="/mypage" class="button is-success">
        マイページに戻る
      </nuxt-link>
    </section>


  </div>


</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
@Component

export default class Admin extends Vue {

  get currentUser() {
    return this.$store.state.user.current
  }

  get fetchUsers() {
    return this.$store.state.admin.users
  }

  async destroyUser(id) {
    await this.$store.dispatch('admin/destroyUser', {id: id})
    await this.$store.dispatch('admin/fetchUsers')
  }

  async mounted() {
    await this.$store.dispatch('admin/fetchUsers')
  }

}
</script>
