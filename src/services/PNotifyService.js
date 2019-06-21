

export default {

    success: function (message, title = "Sucesso!") {
        let opts = {};
        opts.title = title;
        opts.text = message;
        opts.type = 'success';
        PNotify.alert(opts);
    },

    fail: function (message, title = "Erro!") {
        let opts = {};
        opts.title = title;
        opts.text = message;
        opts.type = 'error';
        PNotify.alert(opts);
    }



}
