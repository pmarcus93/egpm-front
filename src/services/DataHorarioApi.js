const urlbase = 'DataHorario/';

import ConfigServices from "@/services/ConfigServices";

export default {

    post: (dados, callback) => {
        ConfigServices.post(urlbase, dados, callback);
    }
}