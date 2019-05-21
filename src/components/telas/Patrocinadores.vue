<template>
    <div class="patrocinadores">
        <div class="container">
            <div class="row">
                <div class="col-12 py-2 mb-4 tipo-patrocinador center-mobile"><h4>REALIZAÇÃO:</h4></div>
                <ItemPatrocinador
                        imagem="http://fapam.edu.br/escolheportal/img/fapam.png"
                ></ItemPatrocinador>
            </div>

            <div class="row my-3">
                <div class="col-12 py-2 mb-4 tipo-patrocinador">
                    <div class="row">
                        <div class="col-6 my-auto"><h4>APOIO:</h4></div>
                        <div class="col-6 my-auto">
                            <router-link to="/apoie">
                                <button class="btn btn-success float-right">SEJA UM APOIADOR</button>
                            </router-link>
                        </div>
                    </div>
                </div>

                <ItemPatrocinador
                        imagem="https://www.wilsonfamilychiropracticcenter.net/wp-content/uploads/2018/12/placeholder-logo-2.png">
                </ItemPatrocinador>

                <ItemPatrocinador
                        imagem="https://www.wilsonfamilychiropracticcenter.net/wp-content/uploads/2018/12/placeholder-logo-2.png">
                </ItemPatrocinador>

                <ItemPatrocinador
                        imagem="https://www.wilsonfamilychiropracticcenter.net/wp-content/uploads/2018/12/placeholder-logo-2.png">
                </ItemPatrocinador>

                <ItemPatrocinador
                        imagem="https://www.wilsonfamilychiropracticcenter.net/wp-content/uploads/2018/12/placeholder-logo-2.png">
                </ItemPatrocinador>

                <ItemPatrocinador
                        imagem="https://www.wilsonfamilychiropracticcenter.net/wp-content/uploads/2018/12/placeholder-logo-2.png">
                </ItemPatrocinador>

                <ItemPatrocinador
                        imagem="https://www.wilsonfamilychiropracticcenter.net/wp-content/uploads/2018/12/placeholder-logo-2.png">
                </ItemPatrocinador>

                <ItemPatrocinador
                        imagem="https://www.wilsonfamilychiropracticcenter.net/wp-content/uploads/2018/12/placeholder-logo-2.png">
                </ItemPatrocinador>

                <ItemPatrocinador
                        imagem="https://www.wilsonfamilychiropracticcenter.net/wp-content/uploads/2018/12/placeholder-logo-2.png">
                </ItemPatrocinador>

                <ItemPatrocinador
                        imagem="https://www.wilsonfamilychiropracticcenter.net/wp-content/uploads/2018/12/placeholder-logo-2.png">
                </ItemPatrocinador>

            </div>
        </div>
    </div>
</template>

<script>
    import ItemPatrocinador from "../itens/ItemPatrocinador";

    export default {
        name: "Patrocinadores",
        components: {ItemPatrocinador}
    }
</script>

<style scoped>

    /* Small devices (landscape phones, 576px and up) */
    @media (max-width: 576px) {
        .center-mobile {
            text-align: center;
        }
    }

    .patrocinadores {
        background: white;
        padding-top: 5%;
        padding-bottom: 5%;
        color: #545457;
    }

    .tipo-patrocinador {
        border-bottom: #afafb2 solid 2px;
    }

</style>