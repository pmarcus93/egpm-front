<template>

    <div class="sobre">

        <Secao titulo="Sobre o #EGPM20"
               descricao="Realizado na FAPAM, o Encontro Gamer de Pará de Minas é o maior evento de videogames da cidade.
           Com campeonatos, palestras e free play, são dois dias de muito aprendizado, competição e diversão!
           Temos jogo de esporte, musicais, de dança, de luta... traga toda a família e se divirta!
           Acompanhe a hashtag oficial do evento nas redes sociais e fique por dentro de datas e atrações! #EGMP3">
        </Secao>

        <div class="container">
            <div class="row">

                <div class="col-sm-12 col-md-6 col-lg-4">
                    <Card titulo="Campeonatos"
                          urlimagem="https://images.alphacoders.com/983/983650.jpg"
                          descricao="Mortal Kombat 11, Just Dance 2020, Pro Evolution Soccer 2020, Street Fighter V e muitos outros. Confira!"></Card>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-4">
                    <Card titulo="Palestras"
                          urlimagem="https://media.vanityfair.com/photos/550b398a2bf4321c29315562/master/w_960,c_limit/monica-lewinsky-ted-talk.jpg"
                          descricao="Quer saber como funciona a indústria dos games? Nossos palestrantes contam os segredos dos bastidores!"></Card>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-4">
                    <Card titulo="Free Play"
                          urlimagem="https://cdn.sega.com/sonicmania03_0.png"
                          descricao="Não importa se você quer experimentar os últimos lançamentos ou reviver os clássicos. Aqui temos o melhor dos dois mundos!"></Card>
                </div>

            </div>
        </div>
    </div>

</template>

<script>

    import Secao from "../itens/Secao";
    import Card from "../itens/Card";

    export default {
        name: 'Sobre',
        components: {Card, Secao}
    }

</script>

<style scoped>

    .sobre {
        background: #FCD347;
    }

</style>