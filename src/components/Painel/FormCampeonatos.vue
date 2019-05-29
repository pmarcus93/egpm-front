<template>
    <div class="animate row">
        <BarraTitulo
                titulo="CAMPEONATO"
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
                            <label for="st_jogo">Nome do campeonato:</label>
                            <input required v-model="campeonato.st_nome" name="st_jogo" type="text" class="form-control"
                                   id="st_jogo">
                        </div>

                        <div class="form-group">
                            <label for="">Descição do campeonato:</label>
                            <textarea required v-model="campeonato.st_descricao" name="st_descricao" class="form-control"
                                      style="height: 124px">
                        </textarea>
                        </div>

                        <div class="form-group">
                            <label for="">Estilo campeonato:</label>
                            <input required v-model="campeonato.st_estilo" name="st_estilo" type="text" class="form-control"
                                   id="exampleInputEmail1">
                        </div>

                        <div class="form-group">
                            <label for="">Lançamento do campeonato:</label>
                            <input required v-model="campeonato.dt_lancamento" name="dt_lancamento" type="text "
                                   class="form-control datepicker" id="datepicker">
                        </div>

                        <div class="form-group">
                            <label for="">Imagem (url):</label>
                            <div class="input-group">
                                <input required v-model="campeonato.st_imagem" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                                <div class="input-group-append">
                                    <span v-if="campeonato.st_imagem" class="input-group-text p-0"> <button class="btn btn-success"> <i class="fa fa-eye"></i> </button></span>
                                    <span v-else class="input-group-text p-0"> <button disabled class="btn btn-success disabled"> <i
                                            class="fa fa-eye"></i> </button></span>
                                </div>
                            </div>
                        </div>


                        <div class="form-group">
                            <label for="">Video (Youtube):</label>
                            <div class="input-group">
                                <input required v-model="campeonato.st_video" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                                <div class="input-group-append">
                                    <span v-if="campeonato.st_video" class="input-group-text p-0"> <button class="btn btn-success"> <i
                                            class="fa fa-eye"></i> </button></span>
                                    <span v-else class="input-group-text p-0"> <button disabled class="btn btn-success disabled"> <i
                                            class="fa fa-eye"></i> </button></span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="col-6">
                        <h4>Detalhes:</h4>
                        <div class="form-group">
                            <label for="">Local de inscrição:</label>
                            <input v-model="campeonato.st_ingresso" name="st_inscricao" type="text "
                                   class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="">Vagas:</label>
                            <input v-model="campeonato.nu_vaga" name="nu_vagas" type="number" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="">Plataforma:</label>
                            <input v-model="campeonato.st_plataforma" name="st_plataforma" type="text "
                                   class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="">Data do Campeonato:</label>
                            <input v-model="campeonato.dt_jogo" name="dt_campeonato" type="text " class="form-control"
                            >
                        </div>

                        <div class="form-group">
                            <label for="">Horário do Campeonato:</label>
                            <input v-model="campeonato.hr_jogo" name="st_horario" type="text " class="form-control">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <h4>Informações:</h4>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Regras:</label>
                            <textarea v-model="campeonato.st_regra" class="form-control" style="height: 124px">
                                </textarea>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1">Observações:</label>
                            <textarea v-model="campeonato.st_observacao" class="form-control" style="height: 124px">
                                </textarea>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import BarraTitulo from "./BarraTitulo";
    import EgpmApi from "../../services/EgpmApi";

    export default {
        name: "FormCampeonatos",
        components: {BarraTitulo},
        created() {
            if (this.$route.params.id_jogo) {
                var self = this;
                EgpmApi.getCampeonato(this.$route.params.id_jogo, campeonato => {
                    self.campeonato = campeonato.data;
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
                    st_video: null
                },
            }
        },
        methods: {
            save: function () {
                var self = this;
                EgpmApi.postCampeonato(EgpmApi.pushAutenticationobject(self.campeonato), result => {
                    if (result.data.status) {
                        alert("Sucesso!" + result.data.message);
                    } else {
                        alert("Erro!" + result.data.erro.message);
                    }
                })


            }
        }
    }
</script>

<style scoped>

</style>