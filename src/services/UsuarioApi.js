const urlusuario = 'Usuario/';

import ConfigServices from "@/services/ConfigServices";

export default {

    get: (id, callback) => {
        const url = urlusuario + id;
        ConfigServices.get(url, callback);
    },

    post: (usuario, callback) => {
        ConfigServices.post(urlusuario, usuario, callback);
    }

}
