<template>
  <div id="app">
    <navbar />
    <sideNav />
    <router-view />
    <everydayCheckIn v-if="checkIn" :count="count"/>
    <qrCode :imgUrl="qrImg" v-if="showQR" />
  </div>
</template>
<script>
import navbar from '@/components/UI/navibar/navbar.vue'
import sideNav from '@/components/UI/navibar/sideNav.vue'
import everydayCheckIn from '@/components/mission/everydayCheckIn'
import qrCode from '@/components/modals/qrCode'

export default {
  name: 'app',
  components: {
    navbar,
    sideNav,
    everydayCheckIn,
    qrCode
  },
  data() {
    return {
      count: null,
      qrImg: ''
    }
  },
  computed:{
    showQR() {
      return this.$store.state.control.showQR
    },
    checkIn() {
      return this.$store.state.control.checkIn
    }
  },
  methods: {
    toTrigger() {
      let data = {};
      data['url'] = this.$root.$options.apiUrl['api2']
      data['client_id'] = process.env.VUE_APP_CLIENT_ID
      data['client_secret'] = process.env.VUE_APP_CLIENT_SECRET
      let i = this.$store.dispatch('postApi', data);
      i.then((result)=>{
      })
    },
    me() {
      let data = {}
      data['url'] = this.$root.$options.apiUrl['api4']
      this.$store.dispatch('postApi', data).then((result)=>{
          this.$store.dispatch('updateUser', result['data']['data'])
      })
    },
    buff() {
      let data = {}
      data['url'] = this.$root.$options.apiUrl['api6']
      this.$store.dispatch('getApi', data).then((result)=>{
        this.$store.dispatch('updateBuff', result['data']['data'])
      })
    },
    getCount() {
      let data = {}
      data['url'] = this.$root.$options.apiUrl['api7']
      this.$store.dispatch('getApi', data).then((item)=>{
        this.count = item['data']['data']['count']
        if(this.count !== null && this.count <= 7) {
          this.$store.dispatch('checkIn', true)
        }
      })
    },
    getQr() {
      let data = {}
      data['url'] = this.$root.$options.apiUrl['api20']
      data['text'] = `${process.env.VUE_APP_API_URL}?auth=${localStorage.getItem('TG_AUTH_TOKEN')}`
      this.$store.dispatch('postApi', data).then((result)=>{
        this.qrImg = result['data']['base64encode']
      })
    },
  },
  async mounted() {
    // await this.toTrigger()
    if(localStorage.getItem('TG_LOGIN'))
    await this.me()
    await this.buff()
    await this.getCount()
    await this.getQr()
  }
}
</script>
<style lang="scss">
  @import "./style/main.scss";
</style>
