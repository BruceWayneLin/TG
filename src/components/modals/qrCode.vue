<template>
    <div class="qrCode">
        <div class="content">
            <img id="del-icon" src="~@/assets/images/icon-cancel.png" alt="" @click="closeModal()">
            <div class="row">
                <div class="container text-center">
                    <img class="img-responsive" :src="imgUrl" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'qrCode',
    props:{
        imgUrl: String
    },
    methods: {
        closeModal() {
            this.$store.dispatch('showQR', false)
        }
    }

}
</script>