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
        var url = urlbase + "Botao/" + id;
        axios.get(url).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },
    post: (patrocinador, callback) => {
        var url = urlbase + "Botao/";
        axios.post(url, patrocinador).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    }
}