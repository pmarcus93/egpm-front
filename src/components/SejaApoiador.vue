<template>
    <div class="pagina-duvidas animate">
        <FundoFixo
        ></FundoFixo>
        <Navbar></Navbar>
        <div class="container-fluid">
            <Rainbow></Rainbow>


            <BannerMenor
                    titulo="Seja Apoiador"
                    descricao="Marque presença no maior encontro de gamers de Pará de Minas."
            >
            </BannerMenor>

        </div>

        <div class="container apoie py-5 mb-5">
            <div class="row">

                <div class="col-6 my-auto">
                    <h2>Como ser um apoiador?</h2>
                    <p>Preencha o formulário ao lado com as suas informações que entraremos em contato com você o mais
                    breve possível.</p>
                </div>

                <div class="col-6">
                    <!--TODO: COLOCAR NAME NOS INPUTS-->
                    <form>
                        <div class="row">
                            <div class="form-group col-md-6 col-sm-12">
                                <label>Nome:</label>
                                <input type="text" class="form-control">
                            </div>

                            <div class="form-group col-md-6 col-sm-12">
                                <label>Empresa:</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6 col-sm-12">
                                <label>Email:</label>
                                <input type="email" class="form-control">
                            </div>

                            <div class="form-group col-md-6 col-sm-12">
                                <label>Telefone:</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </form>
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
    import FundoFixo from "./itens/FundoFixo";
    import Navbar from "./itens/Navbar";
    import Rainbow from "./itens/Rainbow";
    import Rodape from "./telas/Rodape";
    import Patrocinadores from "./telas/Patrocinadores";
    import BannerMenor from "./itens/BannerMenor";

    export default {
        name: "SejaApoiador",
        components: {BannerMenor, Patrocinadores, Rodape, Rainbow, Navbar, FundoFixo}
    }
</script>

<style scoped>
    .apoie {
        background: whitesmoke;
    }
</style>