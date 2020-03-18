<template>

  <section class="buy">
    <div class="row">
      <div class="container text-center mt-5">
        <button class="btn btn-primary" @click="goBuy()">
          {{this.$root.$options['languageSet']['BUY']}}
        </button>
      </div>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'buy',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      goBuy() {
        this.$store.dispatch('buyModal', true)
      }
    },
    computed: {

    }
}


</script>
