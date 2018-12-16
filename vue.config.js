const { unescape } = require(`lodash`);
const fs = require(`fs`);
const nodeSassMagicImporter = require(`node-sass-magic-importer`);
const path = require(`path`);
const PrerenderSpaPlugin = require(`prerender-spa-plugin`);

const productionPlugins = [
  new PrerenderSpaPlugin({
    postProcess(renderedRoute) {
      // Remove all JavaScript <script> tags.
      renderedRoute.html = renderedRoute.html
        .replace(/<script(.*?)<\/script>/g, ``);

      const componentData = renderedRoute.html
        .match(/data-dynamic-component="(.*?)"/g)
        .map(result => unescape(result.match(/"(.*?)"/)[1]))
        .map(json => JSON.parse(json));
      const uniqueComponentNames = [...new Set(componentData.map(x => x.name))];
      let script = `import Vue from 'vue';`;

      uniqueComponentNames.forEach((name) => {
        const componentPath = `../src/components/${name}.vue`;
        script = `${script}import ${name} from '${componentPath}';`;
      });
      uniqueComponentNames.forEach((name) => {
        script = `${script}const ${name}Constructor = Vue.extend(${name});`;
      });

      componentData.forEach(({ id, name, propsData }) => {
        script = `
          ${script}
          new ${name}Constructor({
            ...${JSON.stringify({ propsData })},
          }).$mount('[data-dynamic-component-id="${id}"]');
        `;
      });

      // Remove all inlined dynamic component data.
      renderedRoute.html = renderedRoute.html
        .replace(/data-dynamic-component="(.*?)"/g, ``);

      const scriptTags = `
        <script src="https://cdn.jsdelivr.net/npm/vue?pjkofi" defer></script>
        <script src="/js/script.umd.min.js" defer></script>
      `;
      renderedRoute.html = renderedRoute.html
        .replace(/<\/body>/, `${scriptTags}</body>`);

      const dir = `${__dirname}/.abomination`;
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      fs.writeFile(`${dir}/script.js`, script, (error) => { console.log(error); });

      return renderedRoute;
    },
    staticDir: path.join(__dirname, `dist`),
    routes: [`/`],
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer(),
  }),
];

module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete(`preload`);
  },
  configureWebpack: (config) => {
    if (!config.output.libraryTarget && process.env.NODE_ENV === `production`) {
      config.plugins.push(...productionPlugins);
    }
  },
  css: {
    loaderOptions: {
      sass: {
        importer: nodeSassMagicImporter(),
      },
    },
  },
  lintOnSave: false,
};
