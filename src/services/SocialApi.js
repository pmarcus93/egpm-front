const urlsocial = 'Social/';

import ConfigServices from "@/services/ConfigServices";

export default {

    getAll: (callback) => {
        ConfigServices.get(urlsocial, callback);
    },

    post: (social, callback) => {
        ConfigServices.post(urlsocial, social, callback);
    }
}