const urlbotao = 'Botao/';

import ConfigServices from "@/services/ConfigServices";

export default {

    getOne: (id, callback) => {
        var url = urlbotao + id;
        ConfigServices.get(url, callback);
    },

    post: (botao, callback) => {
        ConfigServices.post(urlbotao, botao, callback);
    },
}