<template>
  <div class="navbarMb navbar-dark bg-dark">
        <div class="logo float-left" @click="redirect('/')">TG</div>
        <burger />
  </div>
</template>

<script>
import burger from '@/components/UI/navibar/burger.vue'

export default {
  name: 'navbarMb',
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
  computed:  {
  },
  mounted() {
  }
}
</script>
