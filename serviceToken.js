const dataStructureToken = () => {
  const user = {
    username: "rappi_dev",
    password: ")n+Wk=[K5D4£1.6",
  };
  const configuration = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  return configuration;
};
async function getToken() {
  const configuration = dataStructureToken();
  const response = await fetch(
    "https://apirappicarddev.tiprotec.com/api/v1/login",
    configuration
  );
  const data = await response.json();
  return data.token;
}
