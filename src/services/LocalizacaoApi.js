const urllocalizacao = 'Localizacao/';

import ConfigServices from "@/services/ConfigServices";

export default {

    getOne: (id, callback) => {
        var url = urllocalizacao + id;
        ConfigServices.get(url, callback);
    },

    post: (dados, callback) => {
        ConfigServices.post(urllocalizacao, dados, callback);
    }
}