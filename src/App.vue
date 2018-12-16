<template>
  <div class="App">
    <DynamicComponent>
      <SomeComponent name="Markus"/>
    </DynamicComponent>
  </div>
</template>

<script>
import DynamicComponent from './components/DynamicComponent';
import SomeComponent from './components/SomeComponent.vue';

export default {
  name: `App`,
  components: {
    DynamicComponent,
    SomeComponent,
  },
};
</script>

<style lang="scss">
@import './assets/scss/settings/**/*';
@import './assets/scss/generic/**/*';
</style>
