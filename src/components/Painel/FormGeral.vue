<template>
    <div class="animate row">
        <BarraTitulo
                titulo="CONFIGURAÇÕES GERAIS"
        ></BarraTitulo>
        <div class="col-12 pt-3">
            <ItemFormBotaoFlutuante></ItemFormBotaoFlutuante>
            <ItemFormRedesSociais></ItemFormRedesSociais>
            <ItemFormLocalizacao></ItemFormLocalizacao>
            <ItemFormDiaHorario></ItemFormDiaHorario>
        </div>
    </div>
</template>

<script>
    import BarraTitulo from "./BarraTitulo";
    import ItemFormBotaoFlutuante from "./ItemFormBotaoFlutuante";
    import ItemFormRedesSociais from "./ItemFormRedesSociais";
    import ItemFormLocalizacao from "./ItemFormLocalizacao";
    import ItemFormDiaHorario from "./ItemFormDiaHorario";

    export default {
        name: "FormGeral",
        components: {ItemFormDiaHorario, ItemFormLocalizacao, ItemFormRedesSociais, ItemFormBotaoFlutuante, BarraTitulo},
    }

</script>

<style scoped>

</style>