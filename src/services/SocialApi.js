const urlsocial = 'Social/';

import ConfigServices from "@/services/ConfigServices";

export default {

    getAll: (callback) => {
        ConfigServices.get(urlsocial, callback);
    },

}