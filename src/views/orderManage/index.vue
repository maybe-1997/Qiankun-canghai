<template>
  <div>
    <div>订单管理</div>
    <div>{{ user }}</div>
    <button @click="update">按钮</button>
    <button @click="jump">跳转到好课联盟</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState('global', {
      user: state => state.user
    })
  },
  methods: {
    ...mapActions('global', ['setGlobalState']),
    update() {
      this.setGlobalState({
        user: {
          name: 'wangwu'
        }
      });
    },
    jump() {
      history.pushState(null, '/vue-haoke', '/vue-haoke/orderCenter')
    }
  }
}
</script>

<style>

</style>