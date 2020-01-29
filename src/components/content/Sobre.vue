<template>
    <div class="sobre">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 my-auto">
                    <Secao titulo="Sobre o #EGPM3">
                    </Secao>
                    <p class="text-justify">{{secao.st_texto}}</p>
                    <a class="whatsapp btn btn-block" href="https://chat.whatsapp.com/CEibDiGSwKiLrixb4KQgbF" target="_blank">
                        <img class="whatsapp-svg" src="../../assets/icons/whatsapp.svg">
                        <span class="ml-2 text-whatsapp">PARTICIPE DE NOSSO GRUPO NO WHATSAPP</span>
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
    import SecaoApi from "@/services/SecaoApi";

    export default {
        name: 'Sobre',
        components: {BlocoIcons, Secao},
        created() {
            SecaoApi.getSecao("sobre-o-egpm", result => {
                this.secao = result.data.data;
            })
        },
        data() {
            return {
                secao: {
                    st_texto :
                        'Realizado na FAPAM pelos alunos do curso de Gestão da Tecnologia da Informação, o Encontro ' +
                        'Gamer de Pará de Minas é o maior evento de videogames da cidade. Com campeonatos, palestras ' +
                        'e free play, são dois dias de muito aprendizado, competição e diversão. Traga a família' +
                        ' para se divertir com os últimos lançamentos ou reviver os clássicos. Acompanhe a hashtag' +
                        ' #EGMP3 nas redes sociais e fique por dentro de datas e atrações!'
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
