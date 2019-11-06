/** main UI */
module.exports = api => {
    api.describeConfig({
        id: 'com.cloudinary',
        name: 'Cloudinary SDK configuration for Vue',
        description: 'Component setup',
        link: 'https://cloudinary.com',
        icon: '/_plugin/vue-cli-plugin-cloudinary/logo.png',
        onRead: () => ({
            prompts: require(resolve('./prompts'))
        }),
        onWrite: () => {}
    })
}