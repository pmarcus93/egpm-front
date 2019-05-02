<template>
    <div class="campeonatos">
        <div class="container-fluid">
            <div class="row">
                <ItemCampeonato titulo="Mortal Kombat 11"
                                texto="Texto de exemplo talvez não necessário"
                                imagem="https://www.trueachievements.com/customimages/093902.jpg"
                                data-animation
                                data-animation-from="opacity: 0; transform: translateX(50px)"
                                data-animation-to="opacity: 1; transform: translateX(0)"
                ></ItemCampeonato>

                <ItemCampeonato titulo="FIFA"
                                texto="Texto de exemplo talvez não necessário"
                                imagem="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_EASportsFifa19_image1600w.jpg"
                                data-animation
                                data-animation-from="opacity: 0; transform: translateX(50px)"
                                data-animation-to="opacity: 1; transform: translateX(0)"
                ></ItemCampeonato>

                <ItemCampeonato titulo="Street Fighter v"
                                texto="Texto de exemplo talvez não necessário"
                                imagem="https://www.grabpcgames.com/wp-content/uploads/2018/05/street-fighter-5-pc-version-download-now-780x405.jpg"
                                data-animation
                                data-animation-from="opacity: 0; transform: translateX(50px)"
                                data-animation-to="opacity: 1; transform: translateX(0)"
                ></ItemCampeonato>

                <ItemCampeonato titulo="FortNite"
                                texto="Texto de exemplo talvez não necessário"
                                imagem="https://media.playstation.com/is/image/SCEA/fortnite-season-8-key-art-01-ps4-us-27feb19?$native_nt$"
                                data-animation
                                data-animation-from="opacity: 0; transform: translateX(50px)"
                                data-animation-to="opacity: 1; transform: translateX(0)"
                ></ItemCampeonato>

                <ItemCampeonato titulo="Counter Strike"
                                texto="Texto de exemplo talvez não necessário"
                                imagem="http://poageekweek.com.br/wp-content/uploads/2019/02/counter-strike-global-offensive-uhd-4k-wallpaper-3840x1920.jpg"
                                data-animation
                                data-animation-from="opacity: 0; transform: translateX(50px)"
                                data-animation-to="opacity: 1; transform: translateX(0)"
                ></ItemCampeonato>

                <ItemCampeonato titulo="League of Legends"
                                texto="Texto de exemplo talvez não necessário"
                                imagem="https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2018/08/12040711/6623d71f-7154-4cad-bcc5-4d9719ab5f6c.jpg"
                                data-animation
                                data-animation-from="opacity: 0; transform: translateX(50px)"
                                data-animation-to="opacity: 1; transform: translateX(0)"
                ></ItemCampeonato>


                <ItemCampeonato titulo="PUBG"
                                texto="Texto de exemplo talvez não necessário"
                                imagem="https://storage.googleapis.com/kaggle-media/competitions/PUBG/PUBG%20Inlay.jpg"
                                data-animation
                                data-animation-from="opacity: 0; transform: translateX(50px)"
                                data-animation-to="opacity: 1; transform: translateX(0)"
                ></ItemCampeonato>


                <ItemCampeonato titulo="Just Dance 2020"
                                texto="Texto de exemplo talvez não necessário"
                                imagem="http://www.gamersegames.com.br/newwpress/wp-content/uploads/2018/12/Just-Dance-Capa.jpg"
                                data-animation
                                data-animation-from="opacity: 0; transform: translateX(50px)"
                                data-animation-to="opacity: 1; transform: translateX(0)"
                ></ItemCampeonato>


                <ItemCampeonato titulo="The King Of Fighters"
                                texto="Texto de exemplo talvez não necessário"
                                imagem="https://i.ytimg.com/vi/3nfdHDhT6UQ/maxresdefault.jpg"
                                data-animation
                                data-animation-from="opacity: 0; transform: translateX(50px)"
                                data-animation-to="opacity: 1; transform: translateX(0)"
                ></ItemCampeonato>


            </div>
        </div>
    </div>
</template>

<script>
    import ItemCampeonato from "../itens/ItemCampeonato";

    export default {
        name: "Campeonatos",
        components: {ItemCampeonato}
    }
</script>

<style scoped>
    .campeonatos {
        background: whitesmoke;
    }
    .titulo-campeonatos {
        color: #545457;
    }
</style>