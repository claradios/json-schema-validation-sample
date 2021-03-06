const emoji  = require('./schemas/emoji.js');
const emojiCollection = require('./emojiCollection.js');

const Ajv = require("ajv").default;
const ajv = new Ajv({ allErrors: true });
require("ajv-errors")(ajv /*, {singleError: true} */)

emojiCollection.forEach( emojiItem => {
  // loop collection elements for validation
  const validation = ajv.validate(emoji, emojiItem);
  validation
    ? console.log(`emoji: ${emojiItem.symbol} is correctly built`)
    : console.log(`emoji: ${emojiItem.symbol} has the following errors: ${JSON.stringify(ajv.errors, null, 2)}`);
});
