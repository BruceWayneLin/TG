<template>
  <div class="navbarPc navbar-dark bg-dark">
        <div class="logo float-left" @click="redirect('/')">TG</div>
        <div class="icons d-none">tab1</div>
        <div class="icons d-none">tab2</div>
        <div class="icons"><burger/></div>
  </div>
</template>

<script>
import burger from '@/components/UI/navibar/burger.vue'

export default {
  name: 'navbarPc',
  props: {
  },
  components: {
      burger
  },
  data() {
    return {
    }
  },
  methods: {
    redirect(url) {
      this.$router.push(url)
    }
  },
  mounted() {
  }
}
</script>
