<template>
    <div class="pagina-duvidas animate">
        <FundoFixo
        sobreimagem="rgba(0,0,0,0)"></FundoFixo>
        <div class="animate">
            <div class="container-fluid conteudo">
                <ItemErro
                        erro="Erro 404"
                        subtitulo="Ops, parece que você entrou em uma página de campeonato inválida."
                        descricao="Separamos para você alguns links que podem lhe ajudar!"
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
    import BlocoRodape from "./itens/BlocoRodape";

    export default {
        name: "Erro404Campeonato",
        components: {BlocoRodape, ItemErro, Links, FundoFixo}
    }
</script>

<style scoped>

</style>