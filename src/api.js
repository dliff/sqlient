const baseUrl = 'http://localhost:5000/api'

function post(url, data) {
  return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
}

export function apiPost(endpoint, data) {
  return (async () => {
    const rawResponse = await post(baseUrl + endpoint, data)
    const content = await rawResponse.json();
    return content;
  })();
}
