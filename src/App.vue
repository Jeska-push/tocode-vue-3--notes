<template>
  <div class="wapper">
    <the-header />
    <div class="wrapper-content">
      <div class="container">
      
        <router-view />
      </div>
    </div>
    <the-footer />
  </div>
</template>
<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,

    TheFooter
  }
}
</script>

<style>


</style>
