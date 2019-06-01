<template>
    <div class="sobre">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 my-auto">
                    <Secao titulo="Sobre o #EGPM3"
                           descricao="Realizado na FAPAM, o Encontro Gamer de Pará de Minas é o maior evento de videogames da cidade.
           Com campeonatos, palestras e free play, são dois dias de muito aprendizado, competição e diversão!
           Temos jogo de esporte, musicais, de dança, de luta... traga toda a família e se divirta!
           Acompanhe a hashtag oficial do evento nas redes sociais e fique por dentro de datas e atrações! #EGMP3">
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

    export default {
        name: 'Sobre',
        components: {BlocoIcons, Secao}
    }

</script>

<style lang="scss" scoped>
    .sobre {
        background: $bg-light;
        padding: 5% 0;
        color: #545457;
    }
</style>