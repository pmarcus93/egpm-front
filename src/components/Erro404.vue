<template>
    <div class="pagina-duvidas animate">
        <FundoFixo></FundoFixo>
        <div class="fixed">
            <Navbar></Navbar>
            <Rainbow></Rainbow>
        </div>
        <div class="animate">
            <div class="container-fluid conteudo">
                <ItemErro
                        erro="Erro 404"
                        subtitulo="A página procurada não foi encontrada!"
                        descricao="Separamos para você alguns links que podem lhe ajudar!"
                ></ItemErro>
                <Links></Links>
            </div>
            <BlocoRodape></BlocoRodape>
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
    import BlocoRodape from "./itens/BlocoRodape";

    export default {
        name: "Erro404",
        components: {BlocoRodape, ItemErro, Links, Patrocinadores, Rodape, FundoFixo, Navbar, Rainbow}
    }
</script>

<style scoped>

</style>