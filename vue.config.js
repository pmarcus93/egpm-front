// vue.config.js
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias.set('vue', '@vue/compat')

        config.module
            .rule('vue')
            .use('vue-loader')
            .tap((options) => {
                return {
                    ...options,
                    compilerOptions: {
                        compatConfig: {
                            MODE: 2
                        }
                    }
                }
            })
    },
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
