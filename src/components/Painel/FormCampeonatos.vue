<template>
    <div class="animate row">
        <div class="modal fade" id="modalimg" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Imagem</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img :src="campeonato.st_imagem" :alt="'Imagem do jogo'+campeonato.st_nome" width="100%">
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modalvideo" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Vídeo</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <iframe width="100%" height="315" :src="campeonato.st_video"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>

        <BarraTitulo
                titulo="JOGO"
                icon="check"
                texto-botao="Salvar"
                action="save"
        >
        </BarraTitulo>

        <div class="col-12 pt-3">
            <form>
                <div class="row">
                    <div class="col-6">
                        <h4>Dados básicos:</h4>
                        <div class="form-group">
                            <label for="st_jogo">Nome do jogo:</label>
                            <input required
                                   v-model="campeonato.st_nome"
                                   name="st_jogo"
                                   type="text"
                                   class="form-control"
                                   id="st_jogo">
                        </div>

                        <div class="form-group">
                            <label for="st_descricao">Descição do jogo:</label>
                            <textarea required
                                      v-model="campeonato.st_descricao"
                                      name="st_descricao"
                                      id="st_descricao"
                                      class="form-control"
                                      style="height: 124px">
                        </textarea>
                        </div>

                        <div class="form-group">
                            <label for="st_estilo">Estilo de jogo:</label>
                            <input required v-model="campeonato.st_estilo"
                                   name="st_estilo"
                                   type="text"
                                   id="st_estilo"
                                   class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="nu_quantidadejogadores">Número de Jogadores:</label>
                            <input required v-model="campeonato.nu_quantidadejogadores"
                                   name="st_estilo"
                                   type="number"
                                   id="nu_quantidadejogadores"
                                   class="form-control">
                        </div>

                        <div class="form-group datepicker">
                            <label for="dt_lancamento">Lançamento do Jogo:</label>
                            <input required v-model="campeonato.dt_lancamento"
                                   id="dt_lancamento"
                                   name="dt_lancamento"
                                   type="date"
                                   class="form-control ">
                        </div>

                        <div class="form-group">
                            <label for="st_classificacaoindicativa">Classificação indicativa:</label>
                            <input required v-model="campeonato.st_classificacaoindicativa"
                                   id="st_classificacaoindicativa"
                                   name="st_classificacaoindicativa"
                                   type="text"
                                   class="form-control ">
                        </div>

                        <div class="form-group">
                            <label for="st_imagem">Imagem (url):</label>
                            <div class="input-group">
                                <input id="st_imagem"
                                       required
                                       v-model="campeonato.st_imagem"
                                       type="text"
                                       class="form-control">
                                <div class="input-group-append">
                                    <span v-if="campeonato.st_imagem" v-on:click.prevent="abremodal"
                                          class="input-group-text p-0">
                                        <button class="btn btn-success">
                                            <i class="fa fa-eye"></i>
                                        </button>
                                    </span>
                                    <span v-else class="input-group-text p-0">
                                        <button disabled class="btn btn-success disabled">
                                            <i class="fa fa-eye"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="st_video">Video (Youtube):</label>
                            <div class="input-group">
                                <input required
                                       v-model="campeonato.st_video"
                                       type="text"
                                       class="form-control"
                                       id="st_video">
                                <div class="input-group-append">
                                    <span v-if="campeonato.st_video" class="input-group-text p-0">
                                        <button v-on:click.prevent="abremodalvideo" class="btn btn-success">
                                            <i class="fa fa-eye"></i>
                                        </button>
                                    </span>
                                    <span v-else class="input-group-text p-0">
                                        <button disabled class="btn btn-success disabled">
                                            <i class="fa fa-eye"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-6">
                        <h4>Detalhes de Campeonatos:</h4>

                        <div class="custom-control custom-checkbox my-2">
                            <input v-if="+campeonato.bl_campeonato === 1" v-on:change="marcacheckbox" checked
                                   ref="bl_campeonato"
                                   type="checkbox" class="custom-control-input" id="bl_campeonato">

                            <input v-else type="checkbox" class="custom-control-input" v-on:change="marcacheckbox"
                                   ref="bl_campeonato" id="bl_campeonato">
                            <label class="custom-control-label" for="bl_campeonato">Campeonato</label>
                        </div>

                        <div class="form-group">
                            <label for="st_ingresso">Local de inscrição:</label>
                            <input id="st_ingresso"
                                   v-model="campeonato.st_ingresso"
                                   name="st_inscricao"
                                   type="text"
                                   class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="nu_vagas">Vagas:</label>
                            <input id="nu_vagas"
                                   v-model="campeonato.nu_vaga"
                                   name="nu_vagas"
                                   type="number"
                                   class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="st_plataforma">Plataforma:</label>
                            <input id="st_plataforma"
                                   v-model="campeonato.st_plataforma"
                                   name="st_plataforma"
                                   type="text"
                                   class="form-control">
                        </div>

                        <h4>Dias e horários:</h4>

                        <button v-if="!campeonato.datahorario[0]" v-on:click.prevent="adicionadatahorario" class=" btn btn-primary"><i
                                class="fa fa-plus"></i></button>

                        <div v-for="(datahora, indice) in campeonato.datahorario" class="row">
                            <div class="form-group col-4">
                                <div class="input-group">
                                    <div class="input-group-append">
                                    <span class="input-group-text">
                                            <i class="fa fa-calendar"></i>
                                    </span>
                                    </div>
                                    <input required
                                           v-model="campeonato.datahorario[indice].st_diasemana"
                                           type="text"
                                           class="form-control">
                                </div>
                            </div>

                            <div class="form-group col-4">
                                <div class="input-group">
                                    <div class="input-group-append">
                                    <span class="input-group-text">
                                            <i class="fa fa-clock"></i>
                                    </span>
                                    </div>
                                    <input required
                                           v-model="campeonato.datahorario[indice].st_hora"
                                           type="text"
                                           class="form-control">
                                </div>
                            </div>

                            <div class="form-group col-4">
                                <div class="btn-group">
                                    <button v-on:click.prevent="adicionadatahorario" class=" btn btn-primary"><i
                                            class="fa fa-plus"></i></button>
                                    <button v-on:click.prevent="removedatahorario(indice)" class=" btn btn-danger"><i
                                            class="fa fa-trash"></i></button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <h4>Informações:</h4>
                        <div class="form-group">
                            <label>Regras:</label>
                            <ckeditor v-model="campeonato.st_regra"
                                      :editor="editor"
                                      :config="editorConfig">
                            </ckeditor>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import BarraTitulo from "./BarraTitulo";
    import EgpmApi from "@/services/EgpmApi";
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {
        name: "FormCampeonatos",
        components: {BarraTitulo},
        created() {
            if (this.$route.params.id_jogo) {
                EgpmApi.getCampeonato(this.$route.params.id_jogo, campeonato => {
                    this.campeonato = campeonato.data;
                })
            }
        },
        data() {
            return {
                campeonato: {
                    dt_jogo: null,
                    dt_lancamento: null,
                    hr_jogo: null,
                    id_jogo: null,
                    nu_vaga: null,
                    st_descricao: null,
                    st_estilo: null,
                    st_imagem: null,
                    st_ingresso: null,
                    st_nome: null,
                    st_observacao: null,
                    st_plataforma: null,
                    st_regra: null,
                    st_video: null,
                    bl_campeonato: null,
                    st_classificacaoindicativa: null,
                    datahorario: [{
                        id_jogo: "",
                        st_diasemana: "",
                        st_hora: ""
                    }]
                },
                editor: ClassicEditor,
                editorConfig: {},
                datahorariocampeonatoremover: [],
                nu_quantidadejogadores: ""

            }
        },
        methods: {
            adicionadatahorario: function () {
                this.campeonato.datahorario.push({});
            },

            removedatahorario: function (indice) {
                if (this.campeonato.datahorario[indice].id_datahorariocampeonato) {
                    this.datahorariocampeonatoremover.push(this.campeonato.datahorario[indice].id_datahorariocampeonato);
                }
                this.campeonato.datahorario.splice(indice, 1);
            },

            marcacheckbox: function () {
                this.campeonato.bl_campeonato = this.$refs.bl_campeonato.checked;
            },
            save: function () {
                var data = this.campeonato;
                data.datahorariocampeonatoremover = this.datahorariocampeonatoremover;
                EgpmApi.postCampeonato(EgpmApi.pushAutenticationobject(this.campeonato), result => {
                    var opts = {};
                    if (result.data.status) {
                        opts.title = 'Sucesso';
                        opts.text = "Campeonato salvo com sucesso.";
                        opts.type = 'success';
                        PNotify.alert(opts);
                        this.$router.push({
                            name: 'viewcampeonato',
                        });

                        this.datahorariocampeonatoremover = [];

                    } else {
                        opts.title = 'Erro';
                        opts.text = result.data.erro.message;
                        opts.type = 'error';
                        PNotify.alert(opts);

                    }
                })
            },
            abremodal: function () {
                $('#modalimg').modal('show');

            },
            abremodalvideo: function () {
                $('#modalvideo').modal('show');

            }
        }
    }
</script>

<style scoped>

</style>