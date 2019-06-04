<template>
    <div class="animate">
        <div class="row">
            <BarraTitulo
                    titulo="IMAGENS"
                    icon="plus"
                    texto-botao="Adicionar"
                    rota="/painel/imagens/adicionar"
            >
            </BarraTitulo>

            <div class="col-12">
                <table class="table">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>Link</th>
                        <th>Copiar</th>
                        <th>Excluir</th>
                    </tr>
                    </thead>
                    <tbody>

                    <!--<ItemTrCampeonato v-for="(item) in campeonatos"-->
                                      <!--:nome="item.st_nome"-->
                                      <!--:descricao="item.st_descricao"-->
                                      <!--:id="item.id_jogo"-->
                                      <!--:imagem="item.st_imagem">-->
                    <!--</ItemTrCampeonato>-->

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import BarraTitulo from "./BarraTitulo";
    export default {
        name: "ViewImagem",
        components: {BarraTitulo}
    }
</script>

<style scoped>

</style>