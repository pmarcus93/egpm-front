import axios from 'axios';
const urlbase = 'http://egpmdeveloper.lucasjunior.com.br/';

export default {
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


}