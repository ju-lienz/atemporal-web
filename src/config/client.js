import axios from "axios";
import recuperarToken from "./recuperarToken";

async function client(path, method, data = null) {
  const uriBase = import.meta.env.VITE_API_URL + "/api";

  const token = recuperarToken();

  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
    withCredentials: true,
  };

  switch (method.toUpperCase()) {
    case "GET":
      return await axios.get(uriBase + path, config);
      break;

    case "POST":
      return await axios.post(uriBase + path, data, config);
  }
}

export default client;
