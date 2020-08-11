<template>
  <div id="app">
    <layout />
  </div>
</template>
<script>
import layout from './views/layout/layout'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    layout
  },
  name: 'app',
  data () {
    return {
    }
  },
  created () {

  },
  methods: {

  }
}
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
