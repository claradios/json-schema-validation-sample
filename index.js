
const emoji  = require('./schemas/emoji.js')
const emojiCollection = require('./emojiCollection.js')

const Ajv = require("ajv")
const ajv = new Ajv({ allErrors: true })
const schema = {
    type: "object",
    properties: {
      foo: {type: "integer"},
      bar: {type: "string"}
    },
    required: ["foo"],
    additionalProperties: false
  }

// we verify loop our collection to check if each element follows the expected schema rules

emojiCollection.forEach( emojiItem => {
    const validation = ajv.validate(emoji, emojiItem)
    console.log('VALIDATION', validation)
    validation
    ? console.log(`emoji: ${emojiItem.symbol} is correctly builded`)
    : console.log(`emoji: ${emojiItem.symbol} has the following errors: ${JSON.stringify(ajv.errors, null, 2)}`)
});