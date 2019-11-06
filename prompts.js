/** prompts.js */
module.exports = [{
    type: 'input',
    name: 'inputCloudnameToUse',
    message: '☁️ What is your cloud name?',
    validate: input => !!input
},{
    type: 'confirm',
    name: 'enableTreeshakingMode',
    message: '👨‍🍳 A-la-carte mode?',
    default: false
},{
    type: 'checkbox',
    name: 'selectComponentCloudinaryPluginToUse',
    message: '🍪 Which component you would like to use?',
    default: ['CldImage'],
    choices: ['CldImage', 'CldTransformation', 'CldVideo', 'CldContext'],
    when: (response) => response.enableTreeshakingMode
}]