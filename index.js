
const emoji  = require('./schemas/emoji.js')
const emojiCollection = require('./emojiCollection.js')

const Ajv = require("ajv")
const ajv = new Ajv({ allErrors: true })

emojiCollection.forEach( emojiItem => {
    // loop collection elements for validation
    const validation = ajv.validate(emoji, emojiItem)
    console.log('VALIDATION', validation)
    validation
    ? console.log(`emoji: ${emojiItem.symbol} is correctly builded`)
    : console.log(`emoji: ${emojiItem.symbol} has the following errors: ${JSON.stringify(ajv.errors, null, 2)}`)
});