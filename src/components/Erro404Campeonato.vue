<template>
    <div class="pagina-duvidas animate">
        <FundoFixo
        sobreimagem="rgba(0,0,0,0)"></FundoFixo>
        <div class="animate">
            <div class="container-fluid conteudo">
                <ItemErro
                        erro="Erro 404"
                        subtitulo="Ops, parece que você acessou uma página de campeonato inválida."
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
        name: "Erro404Campeonato",
        components: {ItemErro, Links, FundoFixo}
    }
</script>

<style scoped>

</style>
