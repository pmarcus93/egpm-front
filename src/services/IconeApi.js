const urlicone = 'Icone/';

import ConfigServices from "@/services/ConfigServices";

export default {

    getIconeSecao: (id_secao, callback) => {
        var url = urlicone + id_secao + "/secao";
        ConfigServices.get(url, callback);
    },

}