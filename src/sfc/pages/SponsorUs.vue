<template>
  <section>
    <HeaderSubScreen
        titulo="Seja um apoiador"
        descricao="Marque presença no maior evento de games da região! Preencha o formulário abaixo e entraremos em contato."
        :imagem="imgBanner"
    ></HeaderSubScreen>

    <div class="container-fluid py-5">
      <div class="container">

        <div class="row">
          <div class="col-12 col-sm-10 col-lg-8 col-xl-6 mx-auto">

            <form v-on:submit.prevent="submit">
              <div class="form-group">
                <label for="st_nome">Nome:</label>
                <input id="st_nome" maxlength="25" v-model="apoio.st_nome" required type="text"
                       class="form-control">
              </div>

              <div class="form-group">
                <label for="st_empresa">Empresa:</label>
                <input id="st_empresa" maxlength="25" v-model="apoio.st_empresa" required
                       type="text"
                       class="form-control">
              </div>
              <div class="form-group">
                <label for="st_email">Email:</label>
                <input id="st_email" maxlength="50" v-model="apoio.st_email" required type="email"
                       class="form-control">
              </div>

              <div class="form-group">
                <label for="st_telefone">Telefone:</label>
                <input id="st_telefone" maxlength="11" v-model="apoio.st_telefone" required
                       type="tel"
                       class="form-control">
              </div>

              <div class="form-group">
                <button class="btn btn-primary btn-block"><i class="fa fa-paper-plane"></i> Enviar
                </button>
              </div>

              <div v-if="statusEnvioForm" class="alert" :class="statusMensagem.classe" role="alert">
                {{ statusMensagem.texto }}
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
    <vue-recaptcha
        ref="recaptcha"
        @verify="onCaptchaVerified"
        @expired="onCaptchaExpired"
        size="invisible"
        sitekey="6Lf73qcUAAAAAJjQSVZEFcpseQNTGXCIhkNIEboT">
    </vue-recaptcha>
  </section>
</template>


<script>
const ApoioApi = () => import( "@/services/ApoioApi");
const VueRecaptcha = () => import( 'vue-recaptcha');
const HeaderSubScreen = () => import( "../component/SubscreenHeader");
const ImgBanner = () => import( "../../assets/images/sponser-us-banner.jpeg");

export default {
  name: "SejaApoiador",
  components: {HeaderSubScreen, 'vue-recaptcha': VueRecaptcha},
  data() {
    return {
      imgBanner: ImgBanner,
      statusEnvioForm: 0,
      statusMensagem: {
        classe: '',
        texto: ''
      },
      apoio: {
        st_nome: null,
        st_empresa: null,
        st_email: null,
        st_telefone: null,
        bl_analisado: 0
      },
    }
  },
  methods: {
    salvaapoio: function (recaptchaToken) {
      this.apoio.recaptchatoken = recaptchaToken;
      ApoioApi.post(this.apoio, result => {
            this.statusEnvioForm = 1;
            if (result.data.status) {
              this.statusMensagem.texto = 'Formulário de contato enviado!';
              this.statusMensagem.classe = 'alert-success';
            } else {
              this.statusMensagem.texto = 'Não foi possível enviar o formulário de contato. 😕';
              this.statusMensagem.classe = 'alert-success';
            }
          }
      )
    },
    onCaptchaExpired: function () {
      this.$refs.recaptcha.reset();
    },
    onCaptchaVerified: function (recaptchaToken) {
      const self = this;
      self.$refs.recaptcha.reset();
      this.salvaapoio(recaptchaToken);
    },
    submit: function () {
      this.$refs.recaptcha.execute();
    }
  }
}
</script>

<style scoped lang="scss">
.container-fluid {
  background: $light-text;
}
</style>
