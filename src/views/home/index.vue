<template>
  <div class="home">

  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'index',
    data () {
      return {

      }
    },
    computed: {
      ...mapState(['menuList'])
    },
    mounted () {
      // menuList存在时（之后所有跳转到home页时触发）
      if (this.menuList.length > 0) {
        _.forEach(this.menuList, (value, index) => {
          if (index === 0) {
            // 跳转第一个地址
            this.$router.push({ name: this.menuList[index].pageName })
          }
        })
      }
    },
    watch: {
      menuList: {
        handler (obj) {
          // 第一次进入页面，layout.vue里面初始菜单时触发
          if (obj.length > 0) {
            _.forEach(obj, (value, index) => {
              if (index === 0) {
                // 跳转第一个地址
                this.$router.push({ name: obj[index].pageName })
              }
            })
          } else {
            this.$router.push({ name: 'noJurisdiction' })
          }
        },
        deep: true
      }
    }
  }
</script>

<style scoped>

</style>
