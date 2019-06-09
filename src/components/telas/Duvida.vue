<template>
    <div class="container duvida">
        <div class="row no-gutters">

            <div class="col-12">
                <h1 class="mt-4 titulo-secao text-center">FAQ</h1>
                <h2 class="mt-2 subtitulo text-center">Respostas para as dúvidas mais frequentes</h2>

                <div class="my-5">
                    <ItemDuvida v-for="(item) in duvidas"
                                :duvida="item.st_duvida"
                                :resposta="item.st_resposta"
                                :id_duvida="item.id_duvida"
                    ></ItemDuvida>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DuvidaApi from "@/services/DuvidaApi";
    import ItemDuvida from "../itens/ItemDuvida";

    export default {
        name: "Duvida",
        components: {ItemDuvida},
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

    .secao-duvidas {
        display: flex;
        align-self: center;
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
