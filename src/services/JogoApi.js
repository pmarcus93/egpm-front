const urljogo = 'Jogo/';

import ConfigServices from "@/services/ConfigServices";

export default {

    getCampeonatos: (callback) => {
        ConfigServices.get("Campeonato", callback);
    },

    getAll: (callback) => {
        ConfigServices.get(urljogo, callback);
    },

    getOne: (id_jogo, callback) => {
        var url = urljogo + id_jogo;
        ConfigServices.get(url, callback);
    },

    post: (jogo, callback) => {
        ConfigServices.post(urljogo, jogo, callback);
    },

    delete: (id, callback) => {
        var url = urljogo + id;
        ConfigServices.delete(url, callback);
    },


}