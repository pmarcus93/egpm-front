<template>
    <div>
        <FundoFixo
                imagem="https://lh3.googleusercontent.com/Uz5M0FOZIlrbBeWyXSnGOpLjoHnlbX1z6hDANfygYVx5CZwYvPfxAzIDKhNf0KeA0lswisNZMv2qk2ndZQqGj-_QtQxSGhe390IsEYn2UiB_jVVzFRHb4YHR2gmGqo29y_vnl4t1B4377s2Mt_dCIK3uf2s4jlKunz5Z7XW49qVMDBLG8rTkcHoh4qqPE4NJZjAMLt50q1O-qlP9eIX4czoRSViBJRWosbO0_nuF-ZK61G9FFlbbl7c8ju8LehHwNF82T9w6MZVMNEU2zTW0vtXAR5TXIndBaCsvQqLUPZok5j0P0FvNDKnVjnBc1AbQGoPpAaIDkmOw0LPZcnEq9yBctn1c7DlPWlPcc69xnSceBjaNQsdLXVbpwU4f6I1Sd4-5JbwCAcSwCC-fgatTrv9m3tJJ2QUIT9odt7HCH9WQFt7kAvAYckCoeI23s5i9vaCU4weYHLvmrSojbf8wPdtQa8MsC8kEHJMC43oJwLxx5jhHvg5jpZZDNhadmjW1Aj0L2WGGlaDBUyUEM1LEvhBPSKGuYfYZnAwW2sNdszceXCvKM88dbY-jqecw_F2quFgcckj1yySFjUxUSCQFlJP5YJ2992FN1p_aklsbco41Resy0sfRG5ZbUCQvFXUT5pxAvZG98LAQUmVP9K2iv031HwVgILpB=w1043-h695-no"
                sobreimagem="rgba(255,255,255,0.7)"
        >
        </FundoFixo>

        <div class="col-xl-4 col-md-8 col-sm-12 mx-auto vh-100 align-items-center d-flex">
            <div class="box-login animate">
                <form action="#" method="post">
                    <div>
                        <img class="col-12" src="../assets/logoegpm3.png"
                             alt="Logo EGPM (Encontro Gamer Pará de Minas) 3ª Edição">
                    </div>
                    <div class="form-group mt-5">
                        <label for="st_login" class="label-login">Usuário:</label>
                        <input id="st_login" class="form-control">

                        <label for="st_senha" class="label-login mt-2">Senha:</label>
                        <input id="st_senha" type="password" class="form-control">

                        <button class="btn-primary btn form-control mt-4">Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import FundoFixo from "./itens/FundoFixo";

    export default {
        name: "Login",
        components: {FundoFixo}
    }
</script>

<style lang="scss" scoped>
    .label-login {
        font-size: 1.2em;
        font-weight: bold;
        color: $color-title;
    }

    .box-login {
        background: white;
        border-radius: 20px;
        padding: 30px 10px;
        -webkit-box-shadow: 0 0 19px 0 rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0 0 19px 0 rgba(0, 0, 0, 0.75);
        box-shadow: 0 0 19px 0 rgba(0, 0, 0, 0.75);
    }
</style>