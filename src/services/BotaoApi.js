const urlbotao = 'Ingresso/';

import ConfigServices from "@/services/ConfigServices";

export default {

    getOne: (callback) => {
        ConfigServices.get(urlbotao, callback);
    },

}