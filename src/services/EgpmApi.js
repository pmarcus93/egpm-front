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
    }
}