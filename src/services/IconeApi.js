const urlicone = 'Icone/';

import ConfigServices from "@/services/ConfigServices";

export default {
  getIconeSecao: (id_secao, callback) => {
    const url = urlicone + id_secao + "/secao";
    ConfigServices.get(url, callback);
  },
}
