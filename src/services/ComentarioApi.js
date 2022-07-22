const urlcomentario = 'Comentario/';

import ConfigServices from "@/services/ConfigServices";

export default {
  getAllComentarios: (callback) => {
    ConfigServices.get(urlcomentario, callback);
  }
}
