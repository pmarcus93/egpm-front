<template>
    <div class="animate row">
        <BarraTitulo
                titulo="CONFIGURAÇÕES GERAIS"
        >
        </BarraTitulo>

        <div class="col-12 pt-3">

            <ItemFormBotaoFlutuante></ItemFormBotaoFlutuante>

            <ItemFormRedesSociais></ItemFormRedesSociais>


            <div class="row">
                <div class="col-12 py-2">
                    <div class="col-12 titulo mb-3">
                        <h4>Localização:</h4>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <div class="form-group">
                                <label for="st_nome">Local:</label>
                                <input id="st_nome" class="form-control">
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="form-group">
                                <label for="st_nome">Endereço:</label>
                                <input id="st_nome" class="form-control">
                            </div>
                        </div>

                        <div class="col-3">
                            <div class="form-group">
                                <label for="st_nome">CEP:</label>
                                <input id="st_nome" class="form-control">
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 py-2">
                    <div class="col-12 titulo mb-3">
                        <h4>Dias e Horários:</h4>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label for="st_nome">Dia e Horário:</label>
                                <input id="st_nome" class="form-control">
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import BarraTitulo from "./BarraTitulo";
    import ItemFormBotaoFlutuante from "./ItemFormBotaoFlutuante";
    import ItemFormRedesSociais from "./ItemFormRedesSociais";


    export default {
        name: "FormGeral",
        components: {ItemFormRedesSociais, ItemFormBotaoFlutuante, BarraTitulo},
            }
</script>

<style scoped>

    .titulo {
        border-bottom: whitesmoke 2px solid;
    }

</style>