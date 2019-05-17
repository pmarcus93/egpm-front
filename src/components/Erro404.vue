<template>
    <div class="pagina-duvidas animate">
        <FundoFixo></FundoFixo>
        <Navbar></Navbar>
        <div class="container-fluid">
            <Rainbow></Rainbow>
        </div>

        <ItemErro
        erro="Erro 404"
        subtitulo="A página procurada não foi encontrada!"
        descricao="Separamos para você alguns links que podem lhe ajudar!"
        ></ItemErro>
        <Links></Links>
        <Patrocinadores></Patrocinadores>

        <div class="container-fluid">
            <Rodape></Rodape>
        </div>

    </div>
</template>

<script>
    import Rainbow from "./itens/Rainbow";
    import Navbar from "./itens/Navbar";
    import FundoFixo from "./itens/FundoFixo";
    import Rodape from "./telas/Rodape";
    import Patrocinadores from "./telas/Patrocinadores";
    import Links from "./itens/Links";
    import ItemErro from "./itens/ItemErro";

    export default {
        name: "Erro404",
        components: {ItemErro, Links, Patrocinadores, Rodape, FundoFixo, Navbar, Rainbow}
    }
</script>

<style scoped>

</style>