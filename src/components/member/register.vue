<template>
  <section class="register">
    <div class="container">
        <div class="form-group">
          <label for="account">{{this.$root.$options['languageSet']['ACCOUNT']}}</label>
          <input v-model="account" type="text" class="form-control" name="account" /> 
        </div>
        <div class="form-group">
          <label for="password">{{this.$root.$options['languageSet']['PASSWORD']}}</label>
          <input v-model="password" type="password" class="form-control" name="password" /> 
        </div>

        <div class="form-group">
          <label for="phone">{{this.$root.$options['languageSet']['MOBILE']}}*</label>
          <div class="col-8 mb-1 p-0">
            <select v-model="country_codes" class="form-control" name="country_codes" id="country_codes">
              <option value="">選擇國碼</option>
              <option value="+886">{{this.$root.$options['languageSet']['TAIWAN']}}(+886)</option>
              <option value="+86">{{this.$root.$options['languageSet']['CHINA']}}(+86)</option>
              <option value="+1">{{this.$root.$options['languageSet']['USA']}}(+1)</option>
              <option value="+60">{{this.$root.$options['languageSet']['MALAYSIA']}}(+60)</option>
            </select>
          </div>
          <div class="col-12 p-0">
              <input v-model="phone" type="Number" class="form-control" name="phone" maxlength="20" :placeholder="this.$root.$options['languageSet']['PLZMOBILE']" />
              <b class="text-danger">電話為註冊帳號(最少十碼,需輸入0)</b>
          </div>
           <div class="row">
            <div class="col-4">
              <button class="btn btn-primary" @click="getCode()">{{this.$root.$options['languageSet']['GETCODE']}}</button>
            </div>
            <div class="col-8">
              <input v-model="verifyCode" :placeholder="this.$root.$options['languageSet']['VERIFYCODE']" type="text" class="form-control" name="verifyCode" /> 
            </div>
          </div>
        </div>

        <div class="form-group">
         
        </div>
      </div>
      <div class="container text-center mt-3">
          <button class="btn btn-info" @click="back()">
            {{this.$root.$options['languageSet']['PREVIOUSPAGE']}}
          </button>
          <button class="btn btn-primary ml-3" @click="register()">
            {{this.$root.$options['languageSet']['SUBMIT']}}
          </button>
      </div>
  </section>
</template>

<script>
  const modal = require('../../alertModal.js')
  export default  {
    name: 'register',
    props: [],
    mounted () {

    },
    data () {
      return {
        account: '',
        password: '',
        country_codes: '',
        phone: '',
        verifyCode: ''
      }
    },
    methods: {
      back() {
        this.$store.dispatch('register', false)
      },
      getCode() {
        let data = {}
        data['url'] = this.$root.$options.apiUrl['api11']                
        data['phone'] = `${this.country_codes}${this.phone}`
        this.$store.dispatch('postApi', data).then((val)=>{
          let msg = {}
          msg['modalTitle'] = '成功'
          msg['modalText'] =　this.$root.$options['languageSet']['SUCCESS_LOGIN']
          msg['modalIcon'] = 'success',
          msg['modalButtonText'] = '確定',
          msg['modelRedirectUrl'] = '/'
          modal.modal(msg)
        })
      },
      register() {
        let data = {}
        data['url'] = this.$root.$options.apiUrl['api12']
        data['account'] = this.account
        data['password'] = this.password
        data['confirm_password'] = this.password
        data['number'] = this.verifyCode
        data['phone'] = `${this.country_codes}${this.phone}`
        this.$store.dispatch('postApi', data).then((val)=>{
          let msg = {}
          if(val['data']['error']) {
            msg['modalTitle'] = '錯誤'
            msg['modalText'] =　val['data']['desc']
            msg['modalIcon'] = 'error',
            msg['modalButtonText'] = '確定'
          } else {
            msg['modalTitle'] = '成功'
            msg['modalText'] =　this.$root.$options['languageSet']['YOURALREADISUCCESS']
            msg['modalIcon'] = 'success',
            msg['modalButtonText'] = '確定',
            msg['modelRedirectUrl'] = '/'
          }
          modal.modal(msg)
        })
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .register {

  }
</style>
