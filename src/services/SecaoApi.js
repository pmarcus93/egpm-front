const urlsecao = 'Secao/';

import ConfigServices from "@/services/ConfigServices";

export default {
    getSecao: (st_rota, callback) => {
        const url = urlsecao + st_rota;
        ConfigServices.get(url, callback);
    },
}
