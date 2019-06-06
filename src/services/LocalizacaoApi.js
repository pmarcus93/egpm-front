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

    getOne: (id, callback) => {
        axios.get(urlbase + "Localizacao/" + id).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },
    post: (dados, callback) => {
        axios.post(urlbase + "Localizacao/", dados).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    }
}