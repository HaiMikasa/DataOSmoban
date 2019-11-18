<template>
  <div id="app">
    <noAuthorityLayout v-if="appFrom === 'noAuthority'" />
    <layout v-else />
  </div>
</template>
<script>
import layout from './views/layout/layout'
import noAuthorityLayout from './views/layout/noAuthorityLayout'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    layout,
    noAuthorityLayout
  },
  name: 'app',
  data () {
    return {
      appFrom: '' // 来源
    }
  },
  created () {
    if (this.getQueryString('accountToken')) {
      localStorage.setItem('appManagerToken', JSON.stringify({
        accessToken: this.getQueryString('accountToken'),
        accountId: this.getQueryString('accountId')
      }))
    }
  },
  methods: {
    getQueryString (name) {
      const url = window.location.href.substring(window.location.href.indexOf('?'))
      const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
      const r = url.substr(1).match(reg)
      if (r != null) {
        return unescape(r[2])
      }
      return null
    },
    ...mapActions([
      'getSystemFrom'
    ])
  },
  computed: {
    ...mapState([
      'systemFrom'
    ])
  },
  watch: {
    systemFrom: function (now, old) {
      this.appFrom = now
    }
  }
}
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
