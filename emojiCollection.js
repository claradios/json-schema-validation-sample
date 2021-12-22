module.exports = [
  {
    emojiName: ':smiling_face_with_tear:',
    symbol: '😂',
    polite: true,
    emotionalIntensity: 3,
    meanings: ['someone is laughing to tears']
  },
  {
    emojiName: ':slightly_smiling_face:',
    symbol: '🙂',
    polite: true,
    emotionalIntensity: 2,
    meanings: [
      'someone is happy',
      'someone wants to make a passive aggressive statement'
    ] 
  },
  {
    emojiName: ':face_with_symbols_on_mouth:',
    symbol: '🤬',
    polite: false,
    emotionalIntensity: 4,
    meanings: [ 
       'swearing or being vulgar', 
       'convey an outburst of anger, frustration, or rage'
    ]
  },
  { 
    // this element will fail because of: extraProperty (color), polite is not boolean, meanings is not array, emotionalIntensity is not a number.
    emojiName: ':middle_finger:',
    symbol: '💎',
    polite: 'true',
    meanings: 'disagreement in a strong way with someone or something',
    color: 'blue'
  }
];