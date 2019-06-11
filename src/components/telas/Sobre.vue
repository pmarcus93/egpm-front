<template>
    <div class="sobre">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 my-auto">
                    <Secao titulo="Sobre o #EGPM3"
                           :descricao="secao.st_texto">
                    </Secao>
                </div>
                <div class="col-lg-6">
                    <BlocoIcons>
                    </BlocoIcons>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import BlocoIcons from "../itens/IconesSobre";
    import Secao from "../itens/Secao";
    import EgpmApi from "@/services/EgpmApi";

    export default {
        name: 'Sobre',
        components: {BlocoIcons, Secao},
        created() {
            EgpmApi.getSecao(1, result => {
                this.secao = result.data;
            })
        },
        data() {
            return {
                secao: {
                    st_texto : "Carregando..."
                }
            }
        }
    }

</script>

<style lang="scss" scoped>
    .sobre {
        background: $bg-light;
        padding: 5% 0;
        color: #545457;
    }
</style>