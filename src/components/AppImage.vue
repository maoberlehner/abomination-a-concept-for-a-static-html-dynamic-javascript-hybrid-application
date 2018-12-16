<template>
  <img class="AppImage" :src="image">
</template>

<script>
export default {
  name: `AppImage`,
  props: {
    image: {
      required: true,
      type: String,
    },
  },
};
</script>
