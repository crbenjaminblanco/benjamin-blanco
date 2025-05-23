const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  outputDir: 'docs',
  filenameHashing: true,
  productionSourceMap: false,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "Benjamin Blanco Calendars"
        return args
      })
    
    // Add DefinePlugin configuration for Vue 3 feature flags
    config
      .plugin('define')
      .tap(args => {
        Object.assign(args[0], {
          __VUE_OPTIONS_API__: true,
          __VUE_PROD_DEVTOOLS__: false,
          __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
          'process.env': {
            HTTPS: JSON.stringify(true),
            VUE_APP_WIFI_PASSWORD: JSON.stringify(process.env.VUE_APP_WIFI_PASSWORD || '')
          }
        })
        return args
      })
  }
})
