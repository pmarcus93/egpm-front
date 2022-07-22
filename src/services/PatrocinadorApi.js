const urlpatrocinador = 'Patrocinador/';

import ConfigServices from "@/services/ConfigServices";

export default {

  getAll: (callback) => {
    ConfigServices.get(urlpatrocinador, callback)
  },

  getRealizadores: (callback) => {
    const url = urlpatrocinador + "getRealizadores";
    ConfigServices.get(url, callback);
  },

  getApoiadores: (callback) => {
    const url = urlpatrocinador + "getApoiadores";
    ConfigServices.get(url, callback);
  },

  getPatrocinadores: (callback) => {
    const url = urlpatrocinador + "getPatrocinadores";
    ConfigServices.get(url, callback);
  },

  getOne: (id_patrocinador, callback) => {
    const url = urlpatrocinador + id_patrocinador;
    ConfigServices.get(url, callback);
  },

}
