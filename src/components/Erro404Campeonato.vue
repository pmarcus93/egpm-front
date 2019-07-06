<template>
    <div class="pagina-duvidas">
        <FundoFixo
        sobreimagem="rgba(0,0,0,0)"></FundoFixo>
        <div>
            <div class="container-fluid conteudo">
                <Error
                        erro="Erro 404"
                        subtitulo="Ops, parece que você acessou uma página de campeonato inválida."
                        descricao="Separamos alguns links que podem te ajudar!"
                ></Error>
                <Links></Links>
            </div>
        </div>
    </div>
</template>

<script>
    import FundoFixo from "./itens/FundoFixo";
    import Links from "./itens/Links";
    import Error from "./itens/Error";

    export default {
        name: "Erro404Campeonato",
        components: {Error, Links, FundoFixo}
    }
</script>

<style scoped>

</style>
