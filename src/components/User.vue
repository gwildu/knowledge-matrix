<template>
  <section id="user" class="user">
    <div class="fields">
      <input v-model="email" type="text" name="email" id="email" placeholder="email"/>
      <input v-model="password" type="password" name="password" id="password" placeholder="password"/>
    </div>
    <div class="actions">
      <button @click.prevent="registerByEmail({email, password})">register</button>
      <button @click.prevent="signInByEmail({email, password})">login</button>
      <button @click.prevent="signOut()">logout</button>
    </div>
  </section>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'user',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      ...mapGetters({
        user: 'user/user'
      })
    },
    methods: {
      ...mapActions({
        registerByEmail: 'user/registerByEmail',
        signInByEmail: 'user/signInByEmail',
        signOut: 'user/singOut',
        bindFirebase: 'user/bindFirebase',
        deleteUser: 'user/deleteUser'
      })
    },
    mounted() {
      console.info(typeof this.bindFirebase)
      this.bindFirebase()
    }
  }
</script>

<style scoped>

  .user {
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
  }

  .fields {
    display: flex;
  }

</style>
