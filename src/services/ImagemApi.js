const urlimagem = 'Imagem/';

import ConfigServices from "@/services/ConfigServices";

export default {
  get: (id, callback) => {
    const url = urlimagem + id;
    ConfigServices.get(url, callback);
  },

  getAll: (callback) => {
    ConfigServices.get(urlimagem, callback);
  },

}
