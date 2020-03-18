<template >

  <section class="sell">
    <div class="row">
      <div class="container text-center mt-5">
        <button class="btn btn-primary" @click="goSell()">
          {{this.$root.$options['languageSet']['SELL']}}
        </button>
      </div>
    </div>
  </section>

</template>

<script>
  
  export default  {
    name: 'sell',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      goSell() {
        this.$store.dispatch('sellModal', true)
      }
    },
    computed: {

    }
}


</script>
