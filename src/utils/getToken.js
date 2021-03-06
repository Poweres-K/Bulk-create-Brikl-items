export default async function getToken() {
  const username = process.env.REACT_APP_USERNAME;
  const password = process.env.REACT_APP_PASSWORD;
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const client_secret = process.env.REACT_APP_CLIENT_SECRET;
  const audience = process.env.REACT_APP_AUDIENCE;

  const rsp = await fetch(`/oauth/token`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      grant_type: "password",
      username,
      password,
      audience,
      client_id,
      client_secret,
    }),
  });
  const data = await rsp.json();
  return `Bearer ${data.access_token}`;
}
