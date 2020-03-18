<template>
  <div class="home">
    <carousel :items="bannerItem"/>
    <game />
  </div>
</template>

<script>
// @ is an alias to /src
import carousel from '@/components/UI/carousel.vue'
import game from '@/components/game/game.vue'
export default {
  name: 'Home',
  data() {
    return {
      bannerItem: []
    }
  },
  components: {
    carousel,
    game
  },
  methods: {
    getBanner() {
      let data = {}
      data['url'] = this.$root.$options.apiUrl['api1']
      this.$store.dispatch('getApi', data).then((item)=>{
        this.bannerItem = item['data']['data']['index']
      })
    }
  },
  async mounted(){
    this.getBanner()
  }
}
</script>
