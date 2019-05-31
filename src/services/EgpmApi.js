import axios from 'axios';
const urlbase = 'http://egpmdeveloper.lucasjunior.com.br/';

export default {

    pushAutenticationobject: (object) => {
        if (object === null){
            object = {};
        }
        object.st_token = localStorage.getItem('st_token');
        object.id_usuario = localStorage.getItem('id_usuario');
        return object;
    },

    getAllCampeonatos: (callback) => {
        var urlcampeonatos = urlbase + "Jogo/";
        axios.get(urlcampeonatos).then((campeonatos) => {
            if (callback) {
                callback(campeonatos);
            }
        })
    },

    getCampeonato: (id_jogo, callback) => {
        var urlcampeonato = urlbase + "Jogo/" + id_jogo;
        axios.get(urlcampeonato).then((campeonato) => {
            if (callback) {
                callback(campeonato);
            }
        })
    },

    postLogin: (usuario, callback) => {
        var urlcampeonato = urlbase + "Login/";
        axios.post(urlcampeonato, usuario).then((campeonato) => {
            if (callback) {
                callback(campeonato);
            }
        })
    },

    verificaLogin: (credenciais, callback) => {
        var urlcampeonato = urlbase + "Login/" + credenciais.id_usuario + "/verificalogin";
        axios.post(urlcampeonato, credenciais).then((result) => {
            if (callback) {
                callback(result);
            }
        })
    },

    postCampeonato: (campeonato, callback) => {
        var urlcampeonato = urlbase + "Jogo/";
        axios.post(urlcampeonato, campeonato).then((campeonato) => {
            if (callback) {
                callback(campeonato);
            }
        })
    },

    deleteCampeonato: (id, token, callback) => {
        var urlcampeonato = urlbase + "Jogo/" + id;
        axios.delete(urlcampeonato, token).then((campeonato) => {
            if (callback) {
                callback(campeonato);
            }
        })
    },
    getAllPatrocinadore: (callback) => {
        var url = urlbase + "Patrocinador/";
        axios.get(url).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },
    getPatrocinador: (id_patrocinador, callback) => {
        var url = urlbase + "Patrocinador/" + id_patrocinador;
        axios.get(url).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },
    postPatrocinador: (patrocinador, callback) => {
        var url = urlbase + "Patrocinador/";
        axios.post(url, patrocinador).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },
    getAllDuvidas: (callback) => {
        var url = urlbase + "Duvida/";
        axios.get(url).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },
    getDuvida: (id_duvida, callback) => {
        var url = urlbase + "Duvida/" + id_duvida;
        axios.get(url).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },
    postDuvida: (duvida, callback) => {
        var url = urlbase + "Duvida/";
        axios.post(url, duvida).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },
    deleteDuvida: (id, token, callback) => {
        var url = urlbase + "Duvida/" + id;
        axios.delete(url, token).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },
    deletePatrocinador: (id, token, callback) => {
        var url = urlbase + "Patrocinador/" + id;
        axios.delete(url, token).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },

}