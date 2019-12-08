/** Generator */
module.exports = (api, opts) => {
  api.extendPackage({
    dependencies: {
        'cloudinary-vue': '^1.0.0'
    }
  });

  api.render('./template', {
    cloudName: opts.inputCloudnameToUse,
    treeshakingMode: opts.enableTreeshakingMode,
    components: opts.selectComponentCloudinaryPluginToUse
  });

  api.injectImports(api.entryFile, `import './cloudinary.js'`);   

  api.onCreateComplete(() => {
    api.exitLog('🖼️ Learn more: https://cloudinary.com')
    api.exitLog('👩‍💻 Github: https://github.com/cloudinary/vue-cli-plugin-cloudinary')
    api.exitLog('❤️ Have fun optimizing your images and videos with Cloudinary ❤️')
  })
}