import axios from 'axios';

const urlbase = 'https://blooming-springs-31144.herokuapp.com/Api/';
let header = "";

function setTokenHeader() {
    header = { Authorization: `Bearer ${localStorage.getItem("st_token")}` };
}

export default {

    getUrl() {
        return urlbase;
    },

    get(rota, callback) {
        setTokenHeader();
        axios.get(urlbase + rota, { headers: header }).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },

    post(rota, data, callback) {
        setTokenHeader();
        axios.post(urlbase + rota, data, { headers: header }).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },

    delete(rota, callback) {
        setTokenHeader();
        axios.delete(urlbase + rota, { headers: header }).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },

    uploadFormData(rota, data, callback) {

        const cabecalho = {
            'Authorization': header.Authorization,
            'Content-Type': 'multipart/form-data'
        };

        axios.post(urlbase + rota, data, { headers: cabecalho }).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })

    }

}
