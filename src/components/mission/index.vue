<template>
  <section class="index">
    <div class="row pt-5">
      <div class="container">
        <div class="row d-md-none">
          <b-table stacked responsive 
                :items="missions" 
                :fields="fields"
            >
            <template v-slot:cell(btn)="data">
              <button class="btn btn-primary"  @click="trigger(data)">
                  執行
              </button>
            </template>
          </b-table>
        </div>
        <div class="row d-none d-md-block">
          <b-table
              striped responsive 
              :items="missions" 
              :fields="fields"
          >
            <template v-slot:cell(btn)="data">
              <button class="btn btn-primary"  @click="trigger(data)">
                  執行
              </button>
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

  export default  {
    name: 'index',
    props: [],
    mounted () {
      this.getAllMission()
    },
    data () {
      return {
        fields: [
          {
              id: {
                  label: 'id',
                  sortable: false
              }
          },
          {
              title: {
                  label: '標題',
                  sortable: false
              }
          },
          {
              description: {
                  label: '內容',
                  sortable: false
              }
          },
          {
              btn: {
                  label: '觸發',
                  sortable: false
              }
          }
        ],
        missions: []
      }
    },
    methods: {
      trigger(mission) {
        console.log(mission)
        let data = {}
        data['url'] = this.$root.$options.apiUrl['api9']
        data['url'] = `${this.$root.$options.apiUrl['api9']}/${mission['item']['action_code']}`
        this.$store.dispatch('postApi', data).then((result)=>{
          let msg = {}
          msg['modalTitle'] = '成功'
          msg['modalText'] =　this.$root.$options['languageSet']['MISSION_COMPLETE']
          msg['modalIcon'] = 'success',
          msg['modalButtonText'] = '確定',
          msg['modelRedirectUrl'] = '/'
          modal.modal(msg)
        })
      },
      getAllMission() {
        let data = {}
        data['url'] = this.$root.$options.apiUrl['api8']
        this.$store.dispatch('getApi', data).then((item)=>{
          this.missions = item['data']['data']
        })
      }

    },
    computed: {

    }
}


</script>
