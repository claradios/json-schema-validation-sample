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
  };