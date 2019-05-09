<template>
    
        <div class="sobre">
            <div class="container">
                <div class="row">
                <Secao titulo="Sobre o #EGPM20"
                       descricao="Realizado na FAPAM, o Encontro Gamer de Pará de Minas é o maior evento de videogames da cidade.
           Com campeonatos, palestras e free play, são dois dias de muito aprendizado, competição e diversão!
           Temos jogo de esporte, musicais, de dança, de luta... traga toda a família e se divirta!
           Acompanhe a hashtag oficial do evento nas redes sociais e fique por dentro de datas e atrações! #EGMP3">
                </Secao>

                <BlocoIcons>

                </BlocoIcons>

            </div>
        </div>
    </div>
</template>

<script>

    import Card from "../itens/Card";
    import BlocoIcons from "../itens/BlocoIcons";
    import Secao from "../itens/Secao";

    export default {
        name: 'Sobre',
        components: {BlocoIcons, Card, Secao}
    }

</script>

<style scoped>

    .sobre {
        background: whitesmoke;
        padding-top: 10%;
        padding-bottom: 10%;
        color: #545457;
    }


</style>