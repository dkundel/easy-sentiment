const easySentiment = require('./dist/easy-sentiment');

const sentiment = easySentiment(process.env.AZURE_COGNITIVE_SERVICES);

(async function() {
  const sentences = [
    `You are great`,
    `I don't like you`,
    `The weather is okay`,
  ].map(async text => {
    const result = await sentiment(text);
    console.log(`%s: %d`, text, result);
  });
})();
