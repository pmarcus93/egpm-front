const url = 'Agenda/';

import ConfigServices from "@/services/ConfigServices";

export default {

    retornarAgenda: (callback) => {
        ConfigServices.get(url + "retorna-agendamentos-ativos", callback);
    },

}