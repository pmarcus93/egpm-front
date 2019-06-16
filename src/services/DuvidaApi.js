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

    postDuvida: (duvida, callback) => {
        ConfigServices.post(urlduvida, duvida, callback);
    },

    deleteDuvida: (id, callback) => {
        var url = urlduvida + id;
        ConfigServices.delete(url, callback);
    },

}