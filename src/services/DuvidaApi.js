const urlduvida = 'Duvida/';

import ConfigServices from "@/services/ConfigServices";

export default {
  getAllDuvidas: (callback) => {
    ConfigServices.get(urlduvida, callback);
  }
}
