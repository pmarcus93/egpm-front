<template>
    <div class="pagina-duvidas animate">
        <FundoFixo></FundoFixo>
        <Navbar></Navbar>
        <div class="container-fluid">
            <Rainbow></Rainbow>
            <BannerJogo
                    titulo="Nome do Jogo"
            ></BannerJogo>


            <div class="row lista-jogo-dados text-center my-auto">
                <div class="col-md-3 col-sm-6 bloco py-4">
                    <div class="col-12 icone"><i class="fa fa-clock"></i></div>
                    <div class="col-12 texto">INSCRIÇÃO NO LOCAL</div>
                </div>

                <div class="col-md-3 col-sm-6 bloco py-4">
                    <div class="col-12 icone"><i class="fa fa-clock"></i></div>
                    <div class="col-12 texto">100 VAGAS</div>
                </div>

                <div class="col-md-3 col-sm-6 bloco py-4">
                    <div class="col-12 icone"><i class="fa fa-clock"></i></div>
                    <div class="col-12 texto">PLAYSTATION 4</div>
                </div>

                <div class="col-md-3 col-sm-6 bloco py-4">
                    <div class="col-12 icone"><i class="fa fa-clock"></i></div>
                    <div class="col-12 texto">14/02 - 11h</div>
                </div>
            </div>

        </div>

        <div class="conteudo-regra">
            <div class="container">
                <div class="row ">
                    <div class="col-12 py-4">
                        <h3 class="titulo-regras text-center">REGRAS</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt semper viverra.
                            Ut in tortor ut lorem sollicitudin fermentum eget quis eros. Suspendisse malesuada, quam at
                            mollis ultrices, dui nulla mattis nisi, in accumsan quam magna rutrum turpis. Nulla a
                            viverra tellus, eu consequat est. Quisque bibendum mi magna, vitae elementum lacus elementum
                            non. Pellentesque mi mauris, tempus eget quam sed, luctus vulputate orci. Aenean metus eros,
                            feugiat a molestie id, auctor a lectus. Etiam ultricies nec augue convallis lacinia.
                            Nulla tristique quis ligula in bibendum. Cras iaculis orci luctus ipsum laoreet facilisis
                            suscipit vel quam. Etiam in auctor sem. Ut vel accumsan turpis. Duis pellentesque, lorem ac
                            mattis malesuada, neque nulla elementum lacus, et imperdiet orci tellus at sem. Etiam sed
                            ligula nec nunc congue hendrerit in vel erat. Maecenas massa nibh, venenatis sed ante in,
                            lacinia mollis enim. Ut eleifend elit eros, ac facilisis nisi gravida auctor. Aliquam
                            venenatis mattis tortor, quis auctor enim ullamcorper id. Phasellus consectetur enim sed
                            ultrices bibendum. Aenean tincidunt sodales ex, eu semper diam cursus at. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Quisque sit amet sem sit amet nibh consectetur
                            facilisis a eget metus. Sed convallis neque at sagittis aliquam.</p>

                        <hr>

                        <h3 class="titulo-observacoes text-center">OBSERVAÇÕES</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt semper viverra.
                            Ut in tortor ut lorem sollicitudin fermentum eget quis eros. Suspendisse malesuada, quam at
                            mollis ultrices, dui nulla mattis nisi, in accumsan quam magna rutrum turpis. Nulla a
                            viverra tellus, eu consequat est. Quisque bibendum mi magna, vitae elementum lacus elementum
                            non. Pellentesque mi mauris, tempus eget quam sed, luctus vulputate orci. Aenean metus eros,
                            feugiat a molestie id, auctor a lectus. Etiam ultricies nec augue convallis lacinia.
                            Nulla tristique quis ligula in bibendum. Cras iaculis orci luctus ipsum laoreet facilisis
                            suscipit vel quam. Etiam in auctor sem. Ut vel accumsan turpis. Duis pellentesque, lorem ac
                            mattis malesuada, neque nulla elementum lacus, et imperdiet orci tellus at sem. Etiam sed
                            ligula nec nunc congue hendrerit in vel erat. Maecenas massa nibh, venenatis sed ante in,
                            lacinia mollis enim. Ut eleifend elit eros, ac facilisis nisi gravida auctor. Aliquam
                            venenatis mattis tortor, quis auctor enim ullamcorper id. Phasellus consectetur enim sed
                            ultrices bibendum. Aenean tincidunt sodales ex, eu semper diam cursus at. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Quisque sit amet sem sit amet nibh consectetur
                            facilisis a eget metus. Sed convallis neque at sagittis aliquam.</p>


                    </div>
                </div>
            </div>
        </div>

        <Patrocinadores></Patrocinadores>

        <div class="container-fluid">
            <Rodape></Rodape>
        </div>
    </div>
</template>

<script>

    import Rodape from "./telas/Rodape";
    import Patrocinadores from "./telas/Patrocinadores";
    import BannerMenor from "./itens/BannerMenor";
    import Rainbow from "./itens/Rainbow";
    import Navbar from "./itens/Navbar";
    import FundoFixo from "./itens/FundoFixo";
    import ItemCampeonato from "./itens/ItemCampeonato";
    import BannerJogo from "./itens/BannerJogo";

    export default {
        name: "DescricaoCampeonato",
        components: {BannerJogo, ItemCampeonato, FundoFixo, Navbar, Rainbow, BannerMenor, Patrocinadores, Rodape}
    }
</script>

<style scoped>
    .lista-jogo-dados {
        background: #fffc28;
    }

    .bloco {
        transition: all linear .2s;
    }

    .bloco:hover {
        background: #e7e429;
        transform: scale(1.06);
    }

    .icone {
        font-size: 4em;
    }

    .texto {
        font-size: 1.5em;
        font-weight: 600;
    }

    .conteudo-regra {
        background: white;
    }

    .titulo-regras {
        font-family: Archive;
        font-size: 3em;
    }

    .titulo-observacoes {
        font-family: Archive;
        font-size: 2.5em;
    }

    .animate {
        display: block;
        position: relative;
        animation: animacao 0.6s;
    }

    @keyframes animacao {
        from {
            top: -100px;
            opacity: 0
        }
        to {
            top: 0px;
            opacity: 1
        }
    }

</style>