const urlcomentario = 'Comentario/';

import ConfigServices from "@/services/ConfigServices";

export default {

    getAllComentarios: (callback) => {
        ConfigServices.get(urlcomentario, callback);
    },

    getComentario: (id_comentario, callback) => {
        var url = urlcomentario + id_comentario;
        ConfigServices.get(url, callback);
    },

}