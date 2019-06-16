const urldiahorario = 'DiaHorario/';

import ConfigServices from "@/services/ConfigServices";

export default {

    getAll: (callback) => {
        ConfigServices.get(urldiahorario, callback);
    },

    post: (dados, callback) => {
        ConfigServices.post(urldiahorario, dados, callback);
    }
}