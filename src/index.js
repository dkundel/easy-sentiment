import got from 'got';

export default function easySentiment(key, options = { region: 'westus' }) {
  const azureUrl = `https://${
    options.region
  }.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment`;

  return async function(text, language = 'en') {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Ocp-Apim-Subscription-Key': key,
    };
    const body = {
      documents: [{ id: '1', language, text }],
    };
    const method = 'POST';
    const response = await got(azureUrl, { method, headers, body, json: true });
    const { documents } = response.body;

    return documents[0].score;
  };
}
