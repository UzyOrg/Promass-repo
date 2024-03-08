const dataStructureIfLogged = () => {
    const user = {
      idRappiCard: '123ABC4',
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
async function getIfLogged(){
    const configuration = dataStructureIfLogged();
    const response = await fetch(
        "https://apirappicarddev.tiprotec.com/api/v1/customer-show",
        configuration
      );
      const data = await response.json();
      return data
}