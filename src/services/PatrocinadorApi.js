const urlpatrocinador = 'Patrocinador/';

import ConfigServices from "@/services/ConfigServices";

export default {

    getAll: (callback) => {
        ConfigServices.get(urlpatrocinador, callback)
    },

    // Realizador: 1
    getRealizadores: (callback) => {
        var url = urlpatrocinador + "1/getAllTipo";
        ConfigServices.get(url, callback);
    },

    // Patrocinadores: 2
    getApoiadores: (callback) => {
        var url = urlpatrocinador + "2/getAllTipo";
        ConfigServices.get(url, callback);
    },

    // Patrocinadores: 3
    getPatrocinadores: (callback) => {
        var url = urlpatrocinador + "3/getAllTipo";
        ConfigServices.get(url, callback);
    },

    getOne: (id_patrocinador, callback) => {
        var url = urlpatrocinador + id_patrocinador;
        ConfigServices.get(url, callback);
    },

}
