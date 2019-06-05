<template>
    <div class="row">
        <div class="col-12 py-2">
            <div class="col-12 titulo mb-3">
                <h4>Redes Sociais:</h4>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <label for="st_linkfacebook">Facebook:</label>
                        <input v-if="social[0].st_link" v-model="social[0].st_link" id="st_linkfacebook" class="form-control">
                    </div>
                </div>

                <div class="col-6">
                    <div class="form-group">
                        <label for="st_linkinstagram">Instagram:</label>
                        <input v-if="social[1].st_link" v-model="social[1].st_link" id="st_linkinstagram" class="form-control">
                    </div>
                </div>

                <div class="col-12">
                    <div class="form-group">
                        <button class="btn btn-success float-right" v-on:click="save"> <i class="fa fa-check"></i> Salvar </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import SocialApi from "@/services/SocialApi";

    export default {
        name: "ItemFormRedesSociais",
        data: function () {
            return {
                social: [
                    {
                        st_link: ""
                    },
                    {
                        st_link: ""
                    }
                ],
            }
        },
        methods: {

            save: function () {
                SocialApi.post( SocialApi.pushAutenticationobject(this.social), result => {

                    var opts = {};
                    if (result.data.status) {
                        opts.title = 'Sucesso';
                        opts.text = "Informações salvas com sucesso.";
                        opts.type = 'success';
                        PNotify.alert(opts);

                        SocialApi.getOne(1, result => {
                            this.social = result.data;
                        });

                    } else {
                        opts.title = 'Erro';
                        opts.text = result.data.erro.message;
                        opts.type = 'error';
                        PNotify.alert(opts);

                    }

                });
            }
        },
        created() {
            SocialApi.getAll(result => {
                this.social = result.data;
            });

        }

    }
</script>

<style scoped>

</style>