// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                @import "@/styles/_variables.scss";
                @import "@/styles/_mixins.scss";
                @import "@/styles/_typography.scss";
                `
            }
        }
    },
    devServer: {
        port: 9000
    }
};