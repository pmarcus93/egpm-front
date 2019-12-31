const urlpatrocinador = 'Patrocinador/';

import ConfigServices from "@/services/ConfigServices";

export default {

    getAll: (callback) => {
        ConfigServices.get(urlpatrocinador, callback)
    },

    getRealizadores: (callback) => {
        var url = urlpatrocinador + "getRealizadores";
        ConfigServices.get(url, callback);
    },

    getApoiadores: (callback) => {
        var url = urlpatrocinador + "getApoiadores";
        ConfigServices.get(url, callback);
    },

    getPatrocinadores: (callback) => {
        var url = urlpatrocinador + "getPatrocinadores";
        ConfigServices.get(url, callback);
    },

    getOne: (id_patrocinador, callback) => {
        var url = urlpatrocinador + id_patrocinador;
        ConfigServices.get(url, callback);
    },

}
