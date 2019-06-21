// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                @import "@/styles/_variables.scss";
                @import "@/styles/_mixins.scss";
                `
            }
        }
    },
    devServer: {
        port: 9000
    }

    // // modify the location of the generated HTML file.
    // // make sure to do this only in production.
    // chainWebpack: (config) => {
    //     if (process.env.NODE_ENV === 'production') {
    //         config.plugin('html').tap((opts) => {
    //             opts[0].filename = './painel.html';
    //             return opts;
    //         });
    //     }
    // },
};