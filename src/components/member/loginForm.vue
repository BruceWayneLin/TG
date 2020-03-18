<template>
  <div class="loginForm">
    <div class="row">
      <div class="container">
        <div class="form-group">
          <label for="account">{{this.$root.$options['languageSet']['ACCOUNT']}}</label>
          <input class="form-control" v-model="account" type="text" :placeholder="this.$root.$options['languageSet']['PRESETMOBILE']" name="username" id="username" required /> 
        </div>

        <div class="form-group">
          <label for="password">{{this.$root.$options['languageSet']['PASSWORD']}}</label>
          <input class="form-control" v-model="password" type="password" :placeholder="this.$root.$options['languageSet']['PASSWORD']" name="password" id="password" required /> 
        </div>

        <div class="form-group">
          <div>
            <input @click="clickRemeberMe()" type="checkbox" id="remember" name="remember" value="1">
            <span class="remember-word ml-1">{{this.$root.$options['languageSet']['REMEMBER_ME']}}</span>
          </div>
        </div>

      </div>

      <div class="container text-center mt-3">
          <button class="btn btn-info" @click="register()">
            註冊
          </button>
          <button class="btn btn-primary ml-3" @click="login()">
            送出
          </button>
      </div>
    </div>
  </div>
</template>

<script lang="js">
  import { createCookie, accessCookie } from '../../cookie.js'
  const modal = require('../../alertModal.js')
  export default  {
    name: 'loginForm',
    props: [],
    data () {
      return {
        account: '',
        password: '',
        rememberMe: false,
      }
    },
    methods: {
      register() {
        this.$store.dispatch('register', true)
      },
      clickRemeberMe() {
        this.rememberMe = !this.rememberMe
      },
      login: function() {
          if(this.rememberMe) {
            createCookie('account', this.account, 999);
          }
          let data = {}
          data['url'] = this.$root.$options.apiUrl['api3']
          data['account'] = this.account
          data['password'] = this.password
          this.$store.dispatch('postApi', data).then((val)=>{
            localStorage.setItem('TG_LOGIN', true)
            localStorage.setItem('TG_AUTH_TOKEN',  val['data']['data']['identity_token'])
            let msg = {}
            msg['modalTitle'] = '成功'
            msg['modalText'] =　this.$root.$options['languageSet']['SUCCESS_LOGIN']
            msg['modalIcon'] = 'success',
            msg['modalButtonText'] = '確定',
            msg['modelRedirectUrl'] = '/'
            modal.modal(msg)
          })
      }
    },
    computed: {

    },
    mounted() {

    }
}


</script>
