<template>
  <div class="tradeSell">
    <table class="table table-dark">
        <tbody>
            <tr>
                <td></td>
                <td>{{Number(currency).toLocaleString()}}</td>
            </tr>
            <tr>
                <td></td>
                <td>{{Number(balance).toLocaleString()}}</td>
            </tr>
        </tbody>
    </table>
    <sell />
    <sellModal v-if="modalShow" />
  </div>
</template>

<script>
import sell from '@/components/trade/sell.vue'
import sellModal from '@/components/modals/trade/sellModal.vue'

export default {
  name: 'TradeSell',
  data() {
    return {
      currency: 0,
      balance: 0
    }
  },
  components: {
      sell,
      sellModal
  },
  methods: {
    getMap() {
      let data = {}
      data['url'] = this.$root.$options.apiUrl['api17']
      this.$store.dispatch('getApi', data).then((item)=>{
        console.log(item)
      })
    },
    getCurrency() {
      let data = {}
      data['url'] = this.$root.$options.apiUrl['api18']
      this.$store.dispatch('getApi', data).then((item)=>{
        this.currency = item['data']['currency']
        this.balance = item['data']['balance']
      })
    }
  },
  computed: {
    modalShow() {
        return this.$store.state.control.sellModal
    }
  },
  async mounted(){
    // await this.getMap()
    await this.getCurrency()
  }
}
</script>
