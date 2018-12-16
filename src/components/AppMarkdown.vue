<template>
  <div
    v-html="html"
    class="AppMarkdown"
  />
</template>

<script>
import marked from 'marked';

export default {
  name: `AppMarkdown`,
  props: {
    md: {
      required: true,
      type: String,
    },
  },
  computed: {
    html() {
      return marked(this.md);
    },
  },
};
</script>
