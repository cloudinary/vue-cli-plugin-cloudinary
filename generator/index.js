/** Generator */
module.exports = (api, opts) => {
    console.log(opts);
    api.render('./template', {
        cloudName: opts.inputCloudnameToUse,
        treeshakingMode: opts.enableTreeshakingMode,
        components: opts.selectComponentCloudinaryPluginToUse
    });
//  api.injectImports(api.entryFile, `import cloudinary from 'cloudinary-vue'`);   
}