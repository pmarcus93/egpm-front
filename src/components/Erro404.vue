<template>
    <div class="pagina-duvidas">
        <FundoFixo
        sobreimagem="rgba(0,0,0,0)"></FundoFixo>
        <div>
            <div class="container-fluid conteudo">
                <ItemErro
                        erro="Erro 404"
                        subtitulo="A página procurada não foi encontrada. :("
                        descricao="Separamos alguns links que podem te ajudar!"
                ></ItemErro>
                <Links></Links>
            </div>
        </div>
    </div>
</template>

<script>
    import FundoFixo from "./itens/FundoFixo";
    import Links from "./itens/Links";
    import ItemErro from "./itens/ItemErro";

    export default {
        name: "Erro404",
        components: {ItemErro, Links, FundoFixo}
    }
</script>

<style scoped>

</style>
