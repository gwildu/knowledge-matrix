<template>
  <section id="template">
    <h2>template</h2>
    <div>selected template: {{template}}</div>
    <input type="text" v-model="newTemplate" placeholder="New template name" />
    <button @click="addTemplate(newTemplate)">add template</button>
    <ul>
      <li @click="selectTemplate(t)" v-for="t in templates" >{{t}}</li>
    </ul>
  </section>

</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'template',
    data() {
      return {
        newTemplate: ''
      }
    },
    computed: {
      ...mapGetters({
        template: 'knowledgeMatrix/template',
        templates: 'knowledgeMatrix/templates'
      })
    },
    methods: {
      ...mapActions({
        selectTemplate: 'knowledgeMatrix/selectTemplate',
        addTemplate: 'knowledgeMatrix/addTemplate'
      })
    }
  }
</script>

<style scoped>

</style>
