import axios from 'axios';

const urlbase = 'http://egpmdeveloper.lucasjunior.com.br/';

export default {
    pushAutenticationobject: (object) => {
        if (object === null) {
            object = {};
        }
        object.st_token = localStorage.getItem('st_token');
        object.id_usuario = localStorage.getItem('id_usuario');
        return object;
    },


    getCampeonatos: (callback) => {
        axios.get(urlbase + "Campeonato/").then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },


}