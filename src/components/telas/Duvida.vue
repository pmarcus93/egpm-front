<template>
    <div class="pt-4 container duvida">
        <div class="row">
            <div class="col-12">
                <Secao
                        titulo="FAQ"
                        descricao="Respostas para as dúvidas mais frequentes"
                ></Secao>
                <div class="row mb-5 mt-3">
                    <ItemDuvida v-for="(item) in duvidas"
                                v-bind:duvida="item.st_duvida"
                                v-bind:resposta="item.st_resposta"
                                v-bind:id_duvida="item.id_duvida"
                    ></ItemDuvida>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DuvidaApi from "@/services/DuvidaApi";
    import ItemDuvida from "../itens/Question";
    import Secao from "../itens/Section";

    export default {
        name: "Duvida",
        components: {Secao, ItemDuvida},
        data() {
            return {
                duvidas: []
            }
        },
        created() {
            DuvidaApi.getAllDuvidas(retorno => {
                this.duvidas = retorno.data;
            })
        },
    }
</script>

<style lang="scss" scoped>

    .duvida {
        color: $color-title;
    }

    .subtitulo {
        @include sm {
            text-align: center;
        }
    }

    .titulo-secao {
        font-family: $font-archive;
        font-size: 3em;
        text-align: center;
    }

</style>
