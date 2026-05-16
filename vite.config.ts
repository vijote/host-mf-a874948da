import { federation } from '@module-federation/vite';
module.exports = {
  plugins: [
    federation({
      name: 'vite_provider',
      manifest: true,
      remotes: {
        recipes: {
          type: "module",
          name: "recipes",
          entry: "/apps/recipes/remoteEntry.js",
        },
      },
      shared: {
        react: {
          singleton: true,
        },
        'react/': {
          singleton: true,
        },
      },
    }),
  ],
  // Do you need to support build targets lower than chrome89?
  // You can use 'vite-plugin-top-level-await' plugin for that.
  build: {
    target: 'chrome89',
  },
};