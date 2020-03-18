<template>
  <div class="login">
      <loginForm v-if="!toggleForm" />
      <register v-if="toggleForm" />
  </div>
</template>

<script>
import loginForm from '@/components/member/loginForm.vue'
import register from '@/components/member/register.vue'

export default {
  name: 'Login',
  data() {
    return {
    }
  },
  components: {
      loginForm,
      register
  },
  methods: {
  },
  computed: {
      toggleForm() {
          return this.$store.state.control.register
      }
  },
  async mounted(){
  }
}
</script>
