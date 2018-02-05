<template>
  <div>
    <header>
      <h1>knowledge matrix</h1>
    </header>
    <section id="main">
      <User />
      <section>
        <h2>user</h2>
        <div>{{JSON.stringify(user, null, 2)}}</div>
      </section>
      <Template />
      <section id="areas">
        <h2>areas</h2>
        <div>{{JSON.stringify(areas, null, 2)}}</div>
      </section>
      <section id="items">
        <h2>items</h2>
        <div>{{JSON.stringify(items, null, 2)}}</div>
      </section>
      <section id="values">
        <h2>values</h2>
        <div>{{JSON.stringify(values, null, 2)}}</div>
      </section>

    </section>
  </div>
</template>

<script>
  import User from './User'
  import Template from './Template'
  import {mapActions, mapGetters} from 'vuex'
  export default {
    name: 'index',
    components: {User, Template},
    computed: {
      ...mapGetters({
        user: 'user/user',
        template: 'knowledgeMatrix/template',
        areas: 'knowledgeMatrix/areas',
        items: 'knowledgeMatrix/items',
        values: 'knowledgeMatrix/values'
      })
    },
    methods: {
      ...mapActions({
        bindFirebase: 'knowledgeMatrix/bindFirebase'
      })
    },
    mounted() {
      console.log(typeof this.bindFirebase)
      this.bindFirebase()
    }
  }
</script>

<style scoped>

</style>
