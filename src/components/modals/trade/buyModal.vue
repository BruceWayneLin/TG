<template>

  <section class="buyModal">
    <div class="content">
      <img id="del-icon" src="~@/assets/images/icon-cancel.png" alt="" @click="closeModal()">
      <div class="form-group">
        <label for="buyCoin">{{this.$root.$options['languageSet']['BUY_UCOIN']}}</label>
        <input type="text" class="form-control" :placeholder="this.$root.$options['languageSet']['BUY_UCOIN']" v-model="gold">
      </div>
      <div class="row">
        <div class="container text-center">
          <button class="btn btn-primary" @click="buyCoin()">
            {{this.$root.$options['languageSet']['BUY']}}
          </button>
        </div>
      </div>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'buyModal',
    props: [],
    mounted () {

    },
    data () {
      return {
        gold: 0
      }
    },
    methods: {
      closeModal() {
        this.$store.dispatch('buyModal', false)
      },
      buyCoin() {
        let data = {}
        data['url'] = this.$root.$options.apiUrl['api19']
        data['Gold'] = this.gold
        this.$store.dispatch('getApi', data).then((item)=>{
          console.log(item)
        })
      }

    },
    computed: {

    }
}


</script>
