import { defineConfig } from '@vue/cli-service';
import webpack from 'webpack';

export default defineConfig({
  transpileDependencies: true,

  // Extend Webpack config
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,  // Set to false if not using the Options API
        __VUE_PROD_DEVTOOLS__: false // Set to true if you want devtools in production
      })
    ]
  }
});
