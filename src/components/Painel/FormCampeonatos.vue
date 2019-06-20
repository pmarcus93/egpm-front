<template>
    <div class="row">
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
                        <img loading="lazy" v-if="this.campeonato.imagens[0]"
                             :src="this.campeonato.imagens[0].st_arquivo"
                             :alt="'Imagem do jogo'+campeonato.st_nome"
                             width="100%">
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
                :loadingbutton="loadingbutton"
        >
        </BarraTitulo>

        <div class="col-12 pt-3">
            <form>
                <div class="row">
                    <div class="col-6">
                        <h4>Dados básicos:</h4>
                        <div class="form-group">
                            <label for="st_nome">Nome do jogo:</label>
                            <input required
                                   v-model="campeonato.st_nome"
                                   name="st_nome"
                                   type="text"
                                   class="form-control"
                                   id="st_nome">
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
                            <label for="st_plataforma">Plataformas:</label>
                            <input id="st_plataforma"
                                   v-model="campeonato.st_plataforma"
                                   name="st_plataforma"
                                   type="text"
                                   class="form-control">
                        </div>

                        <div v-if="campeonato.imagens[0] === undefined " class="form-group">
                            <label for="st_plataforma">Imagem:</label>
                            <div class="custom-file">
                                <input v-on:change="handleFileUpload()" type="file" ref="file"
                                       class="custom-file-input" id="st_arquivo" required>
                                <label class="custom-file-label" for="st_arquivo">{{labelimputfile}}</label>
                            </div>
                        </div>

                        <div v-else class="form-group">
                            <label for="st_imagem">Imagem (url):</label>
                            <div class="input-group">
                                <input id="st_imagem"
                                       required
                                       type="text"
                                       class="form-control"
                                       :value="campeonato.imagens[0].st_arquivo">
                                <div class="input-group-append">
                                        <span v-on:click.prevent="abremodal"
                                              class=" btn btn-success">
                                                <i class="fa fa-eye"></i>
                                        </span>
                                    <span v-on:click.prevent="removeimagem"
                                          class="btn btn-danger">
                                                <i class="fa fa-trash"></i>
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
                            <label for="st_plataformacampeonato">Plataforma:</label>
                            <input id="st_plataformacampeonato"
                                   v-model="campeonato.st_plataformacampeonato"
                                   name="st_plataforma"
                                   type="text"
                                   class="form-control">
                        </div>

                        <h4>Dias e horários:</h4>

                        <button v-if="!campeonato.datahorario[0]" v-on:click.prevent="adicionadatahorario"
                                class=" btn btn-primary"><i
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
    import JogoApi from "@/services/JogoApi";
    import DataHorario from "@/services/DataHorarioApi";
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    import PNotify from "@/services/PNotifyService";

    export default {
        name: "FormCampeonatos",
        components: {BarraTitulo},
        created() {
            if (this.$route.params.id_jogo) {
                JogoApi.getOne(this.$route.params.id_jogo, campeonato => {
                    this.campeonato = campeonato.data;
                })
            }
        },
        data() {
            return {
                file: '',
                labelimputfile: "Escolher Arquivo...",
                loadingbutton: false,
                campeonato: {
                    dt_jogo: "",
                    dt_lancamento: "",
                    hr_jogo: "",
                    id_jogo: "",
                    nu_vaga: "",
                    st_descricao: "",
                    st_estilo: "",
                    st_imagem: "",
                    st_ingresso: "",
                    st_nome: "",
                    st_observacao: "",
                    st_plataforma: "",
                    st_regra: "",
                    st_video: "",
                    bl_campeonato: "",
                    st_classificacaoindicativa: "",
                    st_plataformacampeonato: "",
                    nu_quantidadejogadores: "",
                    datahorario: [],
                    imagens: [

                    ]
                },
                editor: ClassicEditor,
                editorConfig: {},
                datahorariocampeonatoremover: [],
                uploadimagem: 0,

            }
        },
        methods: {
            removeimagem: function () {
                this.campeonato.imagens = [];
                this.uploadimagem = 1;
            },

            handleFileUpload() {
                this.file = this.$refs.file.files[0];
                this.labelimputfile = this.$refs.file.files[0].name;
                this.uploadimagem = 1;
            },

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
                if (this.$refs.bl_campeonato.checked) {
                    this.campeonato.bl_campeonato = 1;
                    return true;
                }

                this.campeonato.bl_campeonato = 0;
                return true;
            },

            validaformulario: function () {
                if (this.file === "" && this.campeonato.imagens[0] == undefined) {
                    PNotify.fail("É obrigatório informar uma imagem para o Jogo.");
                    return false;
                }

                return true;
            },

            save: function () {

                if (!this.validaformulario()) {
                    return false;
                }

                let formData = new FormData();
                formData.append('st_file', this.file);
                formData.append('dt_jogo', this.campeonato.dt_jogo);
                formData.append('dt_lancamento', this.campeonato.dt_lancamento);
                formData.append('hr_jogo', this.campeonato.hr_jogo);
                formData.append('id_jogo', this.campeonato.id_jogo);
                formData.append('nu_vaga', this.campeonato.nu_vaga);
                formData.append('st_descricao', this.campeonato.st_descricao);
                formData.append('st_estilo', this.campeonato.st_estilo);
                formData.append('st_imagem', this.campeonato.st_imagem);
                formData.append('st_ingresso', this.campeonato.st_ingresso);
                formData.append('st_nome', this.campeonato.st_nome);
                formData.append('st_observacao', this.campeonato.st_observacao);
                formData.append('st_plataforma', this.campeonato.st_plataforma);
                formData.append('nu_quantidadejogadores', this.campeonato.nu_quantidadejogadores);
                formData.append('st_regra', this.campeonato.st_regra);
                formData.append('st_video', this.campeonato.st_video);
                formData.append('bl_campeonato', this.campeonato.bl_campeonato);
                formData.append('st_classificacaoindicativa', this.campeonato.st_classificacaoindicativa);
                formData.append('st_plataformacampeonato', this.campeonato.st_plataformacampeonato);
                formData.append('uploadimagem', this.uploadimagem);

                this.loadingbutton = true;

                JogoApi.post(formData, result => {
                    if (result.data.status) {
                        PNotify.success("Campeonato salvo com sucesso.");

                        if (this.salvadatahorario(result.data.data.id_jogo)) {
                            this.$router.push({
                                name: 'viewcampeonato',
                            });

                            this.datahorariocampeonatoremover = [];
                        }

                    } else {
                        PNotify.fail(result.data.erro.message);
                        this.loadingbutton = false;
                        if (result.data.erro.data.classe) {
                            $("#" + result.data.erro.data.classe).focus();
                        }

                    }
                })
            },

            salvadatahorario: function (id_jogo) {
                let data = {
                    datahorario: this.campeonato.datahorario,
                    datahorariocampeonatoremover: this.datahorariocampeonatoremover,
                    id_jogo: id_jogo
                };

                DataHorario.post(data, result => {
                    if (result.data.status) {
                        PNotify.success("Data e Horários salvos com sucesso.");
                    } else {
                        PNotify.fail(result.data.erro.message);
                        return false;
                    }

                });

                return true;

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
