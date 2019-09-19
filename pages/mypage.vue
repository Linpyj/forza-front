<template>
  <h1>Hi, {{currentUser.name}}</h1>
</template>



<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

@Component
export default class Mypage extends Vue {
  get currentUser() {
    return this.$store.state.user.current
  }
}
</script>
