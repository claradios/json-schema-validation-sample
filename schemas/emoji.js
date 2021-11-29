module.exports = {
    title: "Emoji - English translator schema",
    description :"Here you can add some info about the schema",
    type: "object",
    required: [ "emojiName", "polite", "meanings", "emotionalIntensity", "symbol"],
    additionalProperties: false,
    properties: {
      emojiName: {
        type: "string",
        description: "The emoji's official name"
      },
      polite: {
        type: "boolean",
        description: "If the emoji can be used without fear in a formal context"
      },
      meanings: {
        type: "array",
        description: "The different interpretations of that emoji"
      },
      emotionalIntensity: {
        type: "integer",
        description: "Emotional intensity from 0 - 5",
        minimum: 0,
        maximum: 5
      },
      symbol: {
        type: "string"
      }
    },
    errorMessage: {
        type: "should be an object", // will not replace internal "type" error for the properties listed above
        required: {
            emojiName: "should have a string property 'emojiName'",
            polite: "should have a boolean property 'polite'",
            meanings: "should have an array of strings property 'meanings'",
            emotionalIntensity: "should have an integer property 'emotionalIntensity'",
            symbol: "should have a string property 'symbol'"
        },
        additionalProperties: "should not have properties other than emojiName, polite, meanings, emotionalIntensity, symbol",
      },
  };