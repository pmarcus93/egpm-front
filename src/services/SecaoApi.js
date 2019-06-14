const urlsecao = 'Secao/';

import ConfigServices from "@/services/ConfigServices";

export default {

    getAllSecao: (callback) => {
        ConfigServices.get(urlsecao, callback);
    },

    getSecao: (id, callback) => {
        var url = urlsecao + id;
        ConfigServices.get(url, callback);
    },

    salvarsessao: (data, callback) => {
        ConfigServices.post(urlsecao, data, callback);
    },

}