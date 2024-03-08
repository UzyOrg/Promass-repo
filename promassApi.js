let urlSSO = "";
let pruebaTexto = "prueba"
const dataStructureRegister = ( nombre, apellidoPaterno,apellidoMaterno,telefono,correo, idRappiCard, TOKEN) => {
  const user = {
    nombres: `${nombre}`,
    apellidoPaterno: `${apellidoPaterno}`,
    apellidoMaterno: `${apellidoMaterno}`,
    telefono: `${telefono}`,
    correo: `${correo}`,
    producto: `1`,
    idRappiCard: `${idRappiCard}`,
  };

  const configuration = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify(user),
  };
  return configuration;
};

const fetchDataRegister = async (nombre, apellidoPaterno,apellidoMaterno,telefono,correo, idRappiCard,) => {
  const TOKEN = await getToken();
  console.log(nombre, apellidoPaterno,apellidoMaterno,telefono,correo, idRappiCard)
  const configuration = dataStructureRegister(nombre, apellidoPaterno,apellidoMaterno,telefono,correo, idRappiCard, TOKEN);
  const response = await fetch(
    "https://apirappicard.tiprotec.com/api/v1/customer-register",
    configuration
  );
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    urlSSO = data.linkSSO;
    isDragging = false;
    openNewPage("page4");
  } else {
    console.log(response);
  }
};

prueba(pruebaTexto);
 

