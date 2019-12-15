const urlduvida = 'Duvida/';

import ConfigServices from "@/services/ConfigServices";

export default {

    getAllDuvidas: (callback) => {
        ConfigServices.get(urlduvida, callback);
    },

    getDuvida: (id_duvida, callback) => {
        var url = urlduvida + id_duvida;
        ConfigServices.get(url, callback);
    },

}