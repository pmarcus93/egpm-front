const urlapoio = 'Apoio/';

import ConfigServices from "@/services/ConfigServices";

export default {

    getAll: (callback) => {
        ConfigServices.get(urlapoio, callback);
    },

    getOne: (id, callback) => {
        var url = urlapoio + id;
        ConfigServices.get(url, callback);
    },

    post: (patrocinador, callback) => {
        ConfigServices.post(urlapoio, patrocinador, callback);
    },

    delete: (id, callback) => {
        var url = urlapoio + id;
        ConfigServices.delete(url, callback);
    },

    analisar: (id, callback) => {
        var url = urlapoio + id + "/analisar";
        ConfigServices.post(url, null, callback);
    },

}