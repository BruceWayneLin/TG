<template>
  <section class="everydayCheckIn">
    <div class="content" >
            <div class="moneyFly">
                <!-- <img id="del-icon" src="~@/assets/images/icon-cancel.png" alt="" @click="closeModal()"> -->
                <img class="fallImg" v-show="showFallMoney" src="~@/assets/images/checkIn/moneyfall.gif" alt="">
                    <div class="container p-0">
                        <div class="row justify-content-center text-center">
                            <div class="col-12">
                                <h4 class="text-center">{{this.$root.$options['languageSet']['ALREADYSIGNIN']}}<b>{{day}}</b>{{this.$root.$options['languageSet']['DAY']}}</h4>
                            </div>
                          <div v-for="(item, index) in count" class="col-3 p-0 text-center" @click="showFall()">
                                <h6>第{{index == 0 ? 1 : index+1}}{{txt['DAY']}}</h6>
                                <img v-if="index < count-1 && !checked" class="img-responsive" src="~@/assets/images/checkIn/sign-normal-done.png" alt="">
                                <img v-if="index+1 == count && index+1 < 7 && !checked" class="img-responsive" src="~@/assets/images/checkIn/sign-normal-now.gif" alt="">
                                <img v-if="index < count-1 && checked" class="img-responsive" src="~@/assets/images/checkIn/sign-normal-done.png" alt="">
                                <img v-if="index+1 == count && checked && index+1 < 7" class="img-responsive" src="~@/assets/images/checkIn/sign-normal-done.png" alt="">
                                <img v-if="index+1 == 7 && !checked" class="img-responsive" src="~@/assets/images/checkIn/sign-final-now.gif" alt="">
                                <img v-if="index+1 == 7 && checked" class="img-responsive" src="~@/assets/images/checkIn/sign-final-done.png" alt="">
                                <p class="text-danger text-center" v-if="index < 6">+8800</p>
                                <p class="text-danger text-center" v-if="index+1 == 7">+16800</p>
                            </div>
                            <div v-for="(item, index) in 7" class="col-3 p-0 text-center" v-if="item > count">
                                <h6>第{{index == 0 ? 1 : index+1}}{{txt['DAY']}}</h6>
                                <img v-if="index+1 < 7" class="img-responsive" src="~@/assets/images/checkIn/sign-normal-undone.png" alt="">
                                <img v-if="index+1 == 7" class="img-responsive" src="~@/assets/images/checkIn/sign-final-undone.png" alt="">
                                <p class="text-danger text-center" v-if="index < 6">+8800</p>
                                <p class="text-danger text-center" v-if="index+1 == 7">+16800</p>
                            </div>
                            
                            <div class="col-12 text-center">
                                <h4>{{this.$root.$options['languageSet']['REMEMBERSIGN']}}</h4>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <audio id="myAudio">
            <source src="~@/assets/images/checkIn/money.mp3" type="audio/mp3">
        </audio>
  </section>

</template>

<script>
  const modal = require('../../alertModal.js')
  export default  {
    name: 'everydayCheckIn',
    props: {
      count: 0
    },
    async mounted () {
      await this.countDays()
    },
    data () {
      return {
        showFallMoney: false,
        checked: false,
        day: 0
      }
    },
    methods: {
      showFall() {
            if(this.count < 7){
                this.day++
            }
            this.checked = true
            this.showFallMoney = !this.showFallMoney
            var audio = document.getElementById("myAudio")
            audio.play() 
            this.sign()
        },
        sign(item){
            let data = {};
            data['url'] = this.$root.$options.apiUrl['api10']
            this.$store.dispatch('getApi', data).then((result)=>{
                setTimeout(()=>{
                  let msg = {}
                  msg['modalTitle'] = '成功'
                  msg['modalText'] =　this.$root.$options['languageSet']['YOURALREADISUCCESS']
                  msg['modalIcon'] = 'success',
                  msg['modalButtonText'] = '確定',
                  msg['modelRedirectUrl'] = '/'
                  modal.modal(msg)
                }, 2500)
            })
        },
        countDays() {
          this.day = this.count == 1 ? 0 : this.count-1
        }
    },
    computed: {
      txt() {
        return this.$root.$options['languageSet']
      }
    }
}


</script>
