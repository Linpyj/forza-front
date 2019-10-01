<template>
  <div class="container">
    <section class="section">
      <div class="title" style="padding: 0.4em 0.5em; color: #494949;  background: #f4f4f4; border-bottom: solid 3px #d7d7d7;">
        Welcome to {{currentUser.user.name}}'s Page !
      </div>
      


      <div class="title">
        What to Do
      </div>
      <table class="table" style="width: 100%;">
        <thead>
          <tr>
            <th class="has-text-centered">
            </th>
            <th class="has-text-centered">
              Content
            </th>
            <th class="has-text-centered">
              Detail
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td class="has-text-centered">
              <a class="button is-warning" @click="destroyTask(task.id)">
                Done
              </a>
            </td>
            <td class="has-text-centered">
              {{ task.content }}
            </td>
            <td class="has-text-centered">
              {{ task.detail }}
            </td>
          </tr>
        </tbody>
      </table>



      <div class="title">
        New Task
      </div>
      <div class="columns">
        <div class="column is-6 is-offset-3">
          <div class="box">
            <div class="field">
              <p class="control">
                <input v-model="content" class="input" type="content" placeholder="やること">
              </p>
            </div>
            <div class="field">
              <p class="control">
                <input v-model="detail" class="input" type="detail" placeholder="詳細">
              </p>
            </div>
            <div class="field">
              <p class="control">
                <a class="button is-primary is-fullwidth" @click="createTask">
                  Todoを追加
                </a>
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
  get currentUser() {
    return this.$store.state.user.current
  }

  get tasks() {
    return this.$store.state.task.tasks
  }

  content: string = ""
  detail: string = ""


  async createTask(content, detail) {
    try {
      await this.$store.dispatch('task/createTask', {
        content: this.content,
        detail: this.detail
      })
      await this.$store.dispatch('task/fetchTasks')
    } catch {
      console.log('errorですよ')
    }
  }

  async destroyTask(id) {
    await this.$store.dispatch('task/destroyTask', {id: id})
    await this.$store.dispatch('task/fetchTasks')
  }

  async mounted() {
    await this.$store.dispatch('task/fetchTasks')
  }

}

</script>
