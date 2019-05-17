<template>
    <div class="pagina-duvidas animate">
        <FundoFixo></FundoFixo>
        <Navbar></Navbar>
        <div class="container-fluid">
            <Rainbow></Rainbow>
        </div>

        <div class="col-12 text-center py-4">
            <h1 class="py-3">ERRO 404</h1>
            <h3>A página procurada não foi encontrada!<br>
                Separamos para você alguns links que podem lhe ajudar!</h3>
        </div>

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

    export default {
        name: "Erro404",
        components: {Links, Patrocinadores, Rodape, FundoFixo, Navbar, Rainbow}
    }
</script>

<style scoped>
    h1 {
        font-family: Archive;
        font-size: 5em;
    }

    h1, h3 {
        color: yellow;
    }

    .links {

    }

</style>