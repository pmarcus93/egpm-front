const urlapoio = 'Apoio/';

import ConfigServices from "@/services/ConfigServices";

export default {
  post: (patrocinador, callback) => {
    ConfigServices.post(urlapoio, patrocinador, callback);
  },
}
