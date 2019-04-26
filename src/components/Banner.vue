<template>
<div>
    <div class="destaque"><p>EM BREVE</p></div>
    <img class="logo-full" src="assets/full-logo.png">
    <div class="texto-banner text-center"><p>O maior evento de videogames da cidade.<br>Feito por gamers, para gamers.</p></div>
</div>    
</template>

<script>
export default {
    name: 'Banner'
}
</script>

<style scoped>

.banner {
    display: flex;
    align-items: center;
    justify-content: center;
    /* 59.6 = 55.6 (Navbar) + 4px rainbow border. */
    height: calc(100vh - 59.6px);
    background: url("https://lh3.googleusercontent.com/hwV5qbdUVfwjVRVoGBrrn28kEn8udo1Jpq26eY6IF62GbpJAWrQyVJr0gVHbyrNINilIiv0USv2c-ztkkxqMXFK0xsf9g6ZR-D-aE5iAqPbmAWFj7KpS2DoSUMz4tK6FAjrBP2JEDMBwWNhr_PGPiazws-1SvNEE7UsXh8L0u0io7DscYWXmNkfAKtdx3ML7L6SSD2v2y_vE_HB-pxIc-3JCrUhMC95SfG4NsAeb9aWph0ny27VNa48urw85PJ98Rha8kxrEzueVjGMTWPtI1r1_KRfvHTSg8QVCaaqIxhmbKHuhewHOb8gRrNM_C3v-o-Ffgle_ZoVsGTXgha0HlX9lRpOR5N5SOl8qBib0ptbBXfKlMhkmeF_CaqopFIL9cHqJIs5bGTDLMjpOjrtO7gxJ1lXlaA7APtmI6XaygCtmRmNW0R3iZInbB0FV25uOFsYhyUr6zZ9VGTWwLRlHjqB2hPPJpPD5PjJnVOqz1PpjnGOF3UGlSa7PfExZSMFXwUFhnthUJSXifWwTt3mk8o18DaVspRO4_avTtEqQZnDVLUe022D5GGwC9tEVDZ6c0-3FYZ33XG9n4Dtrs_xYZH72LxySQU20x05PDGI5y6nsqXwjyMPGukpJQ87yji8epFPnYXeYWDDocwYnvWMXoMNOi6qOEn0o=w1414-h943-no") center/cover;
}

.destaque {
    width: 40%;
    background: #FCD347;
    color: #545358;
    font-size: 25px;
    text-align: center;
    font-family: "Roboto Black";
}

.banner .logo-full {
    width: 250px;
    margin: 50px;
}

.texto-banner {
    color: #FCD347;
    text-transform: uppercase;
    font-size: 16px;
}


</style>
