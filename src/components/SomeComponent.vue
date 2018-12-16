<template>
  <div class="SomeComponent">
    Hello World, {{ name }}
    <button @click="test">test</button>
  </div>
</template>

<script>
export default {
  name: `SomeComponent`,
  props: {
    name: {
      type: String,
    },
  },
  methods: {
    test() {
      console.log('test');
    },
  },
};
</script>
