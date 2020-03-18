<template>

  <section class="sellModal">
    <div class="content">
      <img id="del-icon" src="~@/assets/images/icon-cancel.png" alt="" @click="closeModal()">

    </div>
  </section>

</template>

<script>

  export default  {
    name: 'sellModal',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      closeModal() {
        this.$store.dispatch('sellModal', false)
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .sell-modal {

  }
</style>
