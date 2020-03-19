<template>
    <div class="sideNav navbar-dark bg-dark" v-if="toggleNavState">
        <b-nav>
            <b-nav-item v-if="me['nickname']">
                <font-awesome-icon icon="user" />
                {{  me['nickname']}}
            </b-nav-item>
            <b-nav-item v-else @click="redirect('login')" >
                <font-awesome-icon icon="walking" />
                {{this.$root.$options['languageSet']['LOGIN_TXT']}}/
                {{this.$root.$options['languageSet']['REGISTER']}}
            </b-nav-item>
            <b-nav-item>
                <font-awesome-icon icon="yen-sign" />
                {{this.$root.$options['languageSet']['DEPOSIT']}}
            </b-nav-item>
            <b-nav-item @click="redirect('tradeBuy')">
                <font-awesome-icon icon="money-bill-alt" />
                {{this.$root.$options['languageSet']['WANNABUY']}}
            </b-nav-item>
             <b-nav-item @click="redirect('tradeSell')">
                <font-awesome-icon icon="money-bill-alt" />
                {{this.$root.$options['languageSet']['WANNASELL']}}
            </b-nav-item>
            <b-nav-item @click="redirect('mission')">
                <font-awesome-icon icon="bell" />
                {{this.$root.$options['languageSet']['MISSION']}}
            </b-nav-item>
            <b-nav-item @click="showQR()">
                <font-awesome-icon icon="qrcode" />
                {{this.$root.$options['languageSet']['QRCODE_MAKE']}}
            </b-nav-item>
            <b-nav-item v-if="me['nickname']" @click="logout()">
                <font-awesome-icon icon="sign-out-alt" />
                {{this.$root.$options['languageSet']['LOGOUT']}}
            </b-nav-item>
            <b-nav-item-dropdown
                :text="this.$root.$options['languageSet']['LANGUAGE']"
                toggle-class="nav-link-custom"
                right
            >
                <b-dropdown-item @click="language('ch-tw')">- 中文</b-dropdown-item>
                <b-dropdown-item @click="language('JP')">- 日本語</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-nav>
    </div>
</template>

<script>
const modal = require('../../../alertModal')

export default {
    name: 'sideNav',
    data() {
        return {
        }
    },
    methods: {
        language(lang) {
            if(this.lang == 'jp'){
                localStorage.setItem('ULG_LANG', lang)
            } else {
                localStorage.setItem('ULG_LANG', lang)
            }
            location.reload()
        },
        showQR() {
            this.$store.dispatch('showQR', true)
        },
        logout() {
            let data = {};
            data['url'] = this.$root.$options.apiUrl['api5']
            this.$store.dispatch('postApi', data)
            let msg = {}
            msg['modalTitle'] = '成功'
            msg['modalText'] = this.$root.$options['languageSet']['SUCCESSLOGOUT']
            msg['modalIcon'] = 'success',
            msg['modalButtonText'] = '確定',
            msg['modelRedirectUrl'] = '/'
            modal.modal(msg)
        },
        redirect(url) {
            this.$store.dispatch('toggleNav', false)
            this.$router.push(url)
        }
    },
    computed: {
        toggleNavState() {
            return this.$store.state.control.toggleSide
        },
        me() {
            return  this.$store.state.user.userInfo? this.$store.state.user.userInfo : {
                nickname: ''
            }
        }
    },
    mounted() {
    }
}
</script>