export default {
  name: `DynamicComponent`,
  mounted() {
    const data = {
      id: this.$children[0]._uid,
      name: this.$children[0].$options.name,
      propsData: this.$children[0].$options.propsData,
    };

    this.$children[0].$el.setAttribute(`data-dynamic-component`, JSON.stringify(data));
    this.$children[0].$el.setAttribute(`data-dynamic-component-id`, data.id);
    this.$children[0].$el.setAttribute(`data-server-rendered`, true);
  },
  render() {
    return this.$slots.default[0];
  },
};
