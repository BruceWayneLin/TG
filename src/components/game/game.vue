<template lang="html">
  <section class="game">
    <b-container class="text-center">
      <b-row>
        <b-col @click="gameStart(item)" class="game-box col-4" v-for="(item, index) in games">
          {{item['name']}}
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>

  export default  {
    name: 'game',
    props: [],
    async mounted () {
      await this.getGames()
    },
    data () {
      return {
        games: []
      }
    },
    methods: {
      getGames() {
        let data = {}
        data['url'] = this.$root.$options.apiUrl['api15']
        this.$store.dispatch('getApi', data).then((item)=>{
          this.games = item['data']['data']
        })
      }, 
      gameStart(game) {
        let data = {}
        data['url'] = `${this.$root.$options.apiUrl['api16']}${game['id']}`
        data['id'] = game['id']
        data['coin_type'] = 'gold'
        this.$store.dispatch('postApi', data).then((item)=>{
          console.log('1234',item)
        })
      }
    },
    computed: {

    }
}


</script>
