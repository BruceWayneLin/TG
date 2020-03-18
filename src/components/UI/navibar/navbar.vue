<template>
  <div id="navbar" class="navbar">
      <navbarMb />
      <navbarPc />
  </div>
</template>

<script>
import navbarMb from '@/components/UI/navibar/navbarMb.vue'
import navbarPc from '@/components/UI/navibar/navbarPc.vue'

export default {
  name: 'navbar',
  props: {
  },
  components: {
      navbarMb,
      navbarPc
  },
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>
