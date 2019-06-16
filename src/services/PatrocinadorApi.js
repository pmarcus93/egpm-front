const urlpatrocinador = 'Patrocinador/';

import ConfigServices from "@/services/ConfigServices";

export default {

    getAll: (callback) => {
        ConfigServices.get(urlpatrocinador, callback)
    },

    getPatrocinadores: (callback) => {
        var url = urlpatrocinador + "/2/getAllTipo";
        ConfigServices.get(url, callback);
    },

    getApoiadores: (callback) => {
        var url = urlpatrocinador + "/1/getAllTipo";
        ConfigServices.get(url, callback);
    },

    getOne: (id_patrocinador, callback) => {
        var url = urlpatrocinador + id_patrocinador;
        ConfigServices.get(url, callback);
    },

    postPatrocinador: (patrocinador, callback) => {
        ConfigServices.post(urlpatrocinador, patrocinador, callback);
    },

    deletePatrocinador: (id, callback) => {
        var url = urlpatrocinador + id;
        ConfigServices.delete(url, callback);
    },

}