<template>
  <h1>Hi, {{currentUser.user.name}}</h1>
  

</template>



<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

@Component
export default class Mypage extends Vue {
  get currentUser() {
    return this.$store.state.user.current
  }

  content: string = ""
  detail: string = ""


  async createTask(content, detail) {
    try {
      await this.$store.dispatch('task/createTask', {
        content: content,
        detail: detail
      })
      await this.$store.dispatch('task/fetchTasks')
    } catch {
      console.log('errorですよ')
    }
  }
}

</script>
