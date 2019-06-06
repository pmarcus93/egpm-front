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

    getAll: (callback) => {
        axios.get(urlbase + "DiaHorario/").then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },
    post: (dados, callback) => {
        axios.post(urlbase + "DiaHorario/", dados).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    }
}