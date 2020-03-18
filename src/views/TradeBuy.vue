<template>
  <div class="tradeBuy">
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
    <buy />
    <buyModal v-if="modalShow" />
  </div>
</template>

<script>
import buy from '@/components/trade/buy.vue'
import buyModal from '@/components/modals/trade/buyModal.vue'

export default {
  name: 'TradeBuy',
  data() {
    return {
      currency: 0,
      balance: 0
    }
  },
  components: {
    buy,
    buyModal
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
      return this.$store.state.control.buyModal
    }
  },
  async mounted(){
    // await this.getMap()
    await this.getCurrency()
  }
}
</script>
