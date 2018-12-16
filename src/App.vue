<template>
  <div class="App o-container o-container--s o-vertical-spacing o-vertical-spacing--xl">
    <h1>abomination: a Concept for a Static HTML / Dynamic JavaScript Hybrid Application</h1>

    <section class="o-vertical-spacing o-vertical-spacing--l">
      <h2>Dynamic Image Slider</h2>

      <DynamicComponent>
        <ImageSlider :slides="imageSlides"/>
      </DynamicComponent>
    </section>

    <section class="o-vertical-spacing o-vertical-spacing--l">
      <h2>Static content</h2>

      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua.
      </p>
    </section>

    <section class="o-vertical-spacing o-vertical-spacing--l">
      <h2>Static Image Component</h2>

      <AppImage
        image="https://images.unsplash.com/photo-1483119624769-b1a73c256500?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjExMDk0fQ&s=1f605cd0d214c866787dc3c2924ba07f&auto=format&fit=crop&w=400&h=300&q=80"
      />
    </section>

    <section class="o-vertical-spacing o-vertical-spacing--l">
      <h2>Static Markdown Component</h2>

      <AppMarkdown
        :md="mdText"
      />
    </section>

    <section class="o-vertical-spacing o-vertical-spacing--l">
      <h2>More static content</h2>

      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua.
      </p>
    </section>
  </div>
</template>

<script>
import AppImage from './components/AppImage';
import AppMarkdown from './components/AppMarkdown';
import DynamicComponent from './components/DynamicComponent';
import ImageSlider from './components/ImageSlider';

export default {
  name: `App`,
  components: {
    AppImage,
    AppMarkdown,
    DynamicComponent,
    ImageSlider,
  },
  data() {
    return {
      imageSlides: [
        {
          headline: `Lorem Ipsum`,
          image: `https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=36540868671b0e7942ab946c0e44503d&auto=format&fit=crop&w=400&h=300&q=80`,
        },
        {
          headline: `Dolor sit`,
          image: `https://images.unsplash.com/photo-1483119624769-b1a73c256500?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjExMDk0fQ&s=1f605cd0d214c866787dc3c2924ba07f&auto=format&fit=crop&w=400&h=300&q=80`,
        },
        {
          headline: `Lorem Dolor`,
          image: `https://images.unsplash.com/photo-1517362302400-873b4e30f5c0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fbd75d3010ba4abe9a4e747b96f57c93&auto=format&fit=crop&w=400&h=300&q=80`,
        },
        {
          headline: `Dolor Lorem sit`,
          image: `https://images.unsplash.com/photo-1516750930166-ed88ab1adb61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=65c8f6fcafaf68f5fa434b5f076780fd&auto=format&fit=crop&w=400&h=300&q=80`,
        },
      ],
      mdText: `
## Hello World

This is some Markdown formatted text.
      `,
    };
  },
};
</script>

<style lang="scss">
@import './assets/scss/settings/**/*';
@import './assets/scss/generic/**/*';
@import '{
  .o-container,
  .o-container--s,
} from ~@avalanche/object-container';
@import '{
  .o-vertical-spacing,
  .o-vertical-spacing--l,
  .o-vertical-spacing--xl,
} from ~@avalanche/object-vertical-spacing';

.App {
  padding-top: setting-spacing(xl);
  padding-bottom: setting-spacing(xl);

  h1 {
    text-align: center;
  }
}
</style>
