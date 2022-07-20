<template>
    <div class="sobre">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 my-auto">
                    <Secao titulo="Sobre o #EGPM3">
                    </Secao>
                    <p class="text-justify">{{secao.st_texto}}</p>
                    <a class="whatsapp btn btn-block" href="https://chat.whatsapp.com/CEibDiGSwKiLrixb4KQgbF" target="_blank">
                        <i class="fab fa-whatsapp fa-2x"></i>
                        <span class="ml-2 text-whatsapp">PARTICIPE DO NOSSO GRUPO</span>
                    </a>
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
    import Secao from "../itens/Section";
    import {sobreData} from "../../demodata/DemoData";

    export default {
        name: 'Sobre',
        components: {BlocoIcons, Secao},
        data() {
            return {
                secao: sobreData
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

    .whatsapp {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #28a745;
    }

    .btn {
        border: 1px solid #28a745;
    }

    .btn:hover {
        color: #28a745;
    }

</style>
