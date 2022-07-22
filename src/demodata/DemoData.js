export {
    sobreData,
    jogosData,
    freePlayData,
    depoimentosData,
    listaJogosData,
    duvidasData,
    quizzesData,
    datasHorariosData,
    localizacaoData,
    detalhesJogoData,
    agendaData,
};

const sobreData = {
    st_texto: `Realizado na FAPAM pelos alunos do curso de Gestão da Tecnologia da Informação, o Encontro 
        Gamer de Pará de Minas é o maior evento de videogames da cidade. Com campeonatos, palestras
        e free play, são dois dias de muito aprendizado, competição e diversão. Traga a família 
        para se divertir com os últimos lançamentos ou reviver os clássicos. Acompanhe a hashtag 
        #EGPM3 nas redes sociais e fique por dentro de datas e atrações!`
};

const jogosData = {
    st_texto: `
    Prove que você é o melhor nos campeonatos e ganhe o prêmio máximo: o troféu EGPM! São várias categorias de jogos. 
    Se inscreva em quantos campeonatos quiser e dê o seu máximo!
    `
}

const freePlayData = {
    st_texto: `Traga toda sua família e jogue gratuitamente os clássicos que nunca perdem seu charme e games de última geração. 
    Aproveite!`
}

const depoimentosData = [
    {
        "id_comentario": 1,
        "st_imagem": null,
        "st_autor": "@fernandamelosilva",
        "st_comentario": "Fiz quest\u00e3o de passar de sala em sala para aproveitar um pouco de cada parte do evento que a Fapam estava me oferecendo. Fiquei ainda mais empolgada quando vi que teria uma sala de RPG, foi neste momento que percebi que n\u00e3o sairia dali t\u00e3o cedo. N\u00e3o foi apenas a constru\u00e7\u00e3o de uma personagem, rolagem de dados e o decorrer de uma aventura. O que valeu mesmo foi a experi\u00eancia e poder conhecer pessoas novas que curtem o mesmo universo que o meu.",
        "imagens": {
            "ori": {
                "id_imagem": 120,
                "st_nome": "2firbAp(1).jpg",
                "st_url": "https:\/\/i.imgur.com\/1aqBQGX.jpg",
                "st_alt": null,
                "st_prefixotamanho": "ori"
            },
            "default": {
                "id_imagem": 121,
                "st_nome": "c937c21d6eb9a12dc6de7b0bbafeb36a0e1819b1d4ab5a28a299b7f0cd36d686-default.jpg",
                "st_url": "https:\/\/i.imgur.com\/uGizJgP.jpg",
                "st_alt": null,
                "st_prefixotamanho": "default"
            },
            "sm": {
                "id_imagem": 122,
                "st_nome": "c937c21d6eb9a12dc6de7b0bbafeb36a0e1819b1d4ab5a28a299b7f0cd36d686-sm.jpg",
                "st_url": "https:\/\/i.imgur.com\/i2W5WId.jpg",
                "st_alt": null,
                "st_prefixotamanho": "sm"
            },
            "md": {
                "id_imagem": 123,
                "st_nome": "c937c21d6eb9a12dc6de7b0bbafeb36a0e1819b1d4ab5a28a299b7f0cd36d686-md.jpg",
                "st_url": "https:\/\/i.imgur.com\/XDLI1Zi.jpg",
                "st_alt": null,
                "st_prefixotamanho": "md"
            },
            "lg": {
                "id_imagem": 124,
                "st_nome": "c937c21d6eb9a12dc6de7b0bbafeb36a0e1819b1d4ab5a28a299b7f0cd36d686-lg.jpg",
                "st_url": "https:\/\/i.imgur.com\/FGjApD3.jpg",
                "st_alt": null,
                "st_prefixotamanho": "lg"
            }
        }
    },
    {
        "id_comentario": 2,
        "st_imagem": null,
        "st_autor": "D\u00eanis Melo",
        "st_comentario": "Fui ao evento para apresentar ao meu sobrinho o \u201cmundo gamer\u201d, no entanto, para minha surpresa, me diverti tanto quanto ele. Passamos os dias entrando e saindo de diversas salas, aproveitando cada cantinho, participando de campeonatos e conhecendo pessoas bacanas. No final do evento, ficou a promessa de lev\u00e1-lo novamente aos pr\u00f3ximos eventos.",
        "imagens": {
            "ori": {
                "id_imagem": 135,
                "st_nome": "243536284_524955235913714_3925065277663992861_n.jpg",
                "st_url": "https:\/\/i.imgur.com\/uvu5VlD.jpg",
                "st_alt": null,
                "st_prefixotamanho": "ori"
            },
            "default": {
                "id_imagem": 136,
                "st_nome": "1ed587a59ac0b320e3f70875c2779c2d738085ba891cb236f1c4f13e4ea893c9-default.jpg",
                "st_url": "https:\/\/i.imgur.com\/SzRuzTc.jpg",
                "st_alt": null,
                "st_prefixotamanho": "default"
            },
            "sm": {
                "id_imagem": 137,
                "st_nome": "1ed587a59ac0b320e3f70875c2779c2d738085ba891cb236f1c4f13e4ea893c9-sm.jpg",
                "st_url": "https:\/\/i.imgur.com\/EfNghbD.jpg",
                "st_alt": null,
                "st_prefixotamanho": "sm"
            },
            "md": {
                "id_imagem": 138,
                "st_nome": "1ed587a59ac0b320e3f70875c2779c2d738085ba891cb236f1c4f13e4ea893c9-md.jpg",
                "st_url": "https:\/\/i.imgur.com\/JoBYapY.jpg",
                "st_alt": null,
                "st_prefixotamanho": "md"
            },
            "lg": {
                "id_imagem": 139,
                "st_nome": "1ed587a59ac0b320e3f70875c2779c2d738085ba891cb236f1c4f13e4ea893c9-lg.jpg",
                "st_url": "https:\/\/i.imgur.com\/ZaQMdSG.jpg",
                "st_alt": null,
                "st_prefixotamanho": "lg"
            }
        }
    }
];

const listaJogosData = [
    {
        "id_jogo": 2,
        "st_nome": "Crash Team Racing: Nitro Fueled",
        "st_descricao": "Crash est\u00e1 de volta ao volante! Prepare-se para acelerar com o Crash Team Racing Nitro-Fueled. Voc\u00ea ter\u00e1 a aut\u00eantica experi\u00eancia do CTR e muito mais, agora totalmente remasterizado e elevado \u00e0 m\u00e1xima pot\u00eancia!",
        "dt_lancamento": "2019-06-01",
        "st_estilo": "Corrida",
        "st_video": "dr2BCMRk_xc",
        "st_ingresso": "Sala 04",
        "nu_vaga": 8,
        "st_plataforma": "Xbox One, Playstation 4, Nintendo Switch",
        "st_regra": "",
        "bl_campeonato": 1,
        "st_classificacaoindicativa": "Livre",
        "st_plataformacampeonato": "Playstation 4",
        "nu_quantidadejogadores": 4,
        "datahorario": [{
            "id_datahorariocampeonato": 5,
            "id_jogo": 2,
            "st_diasemana": "01\/02\/2020",
            "st_hora": "9:00"
        }],
        "imagens": {
            "ori": {
                "id_imagem": 49,
                "st_nome": "ctr.jpeg",
                "st_url": "https:\/\/i.imgur.com\/qaopDNA.jpg",
                "st_alt": null,
                "st_prefixotamanho": "ori"
            },
            "default": {
                "id_imagem": 50,
                "st_nome": "8b6199cc44a9fc15e10b9945eb3d44461796890d3ff694a1b207b1774224bcab-default.jpeg",
                "st_url": "https:\/\/i.imgur.com\/kUwuxu5.jpg",
                "st_alt": null,
                "st_prefixotamanho": "default"
            },
            "sm": {
                "id_imagem": 51,
                "st_nome": "8b6199cc44a9fc15e10b9945eb3d44461796890d3ff694a1b207b1774224bcab-sm.jpeg",
                "st_url": "https:\/\/i.imgur.com\/WLj1PqB.jpg",
                "st_alt": null,
                "st_prefixotamanho": "sm"
            },
            "md": {
                "id_imagem": 52,
                "st_nome": "8b6199cc44a9fc15e10b9945eb3d44461796890d3ff694a1b207b1774224bcab-md.jpeg",
                "st_url": "https:\/\/i.imgur.com\/KoQZBaU.jpg",
                "st_alt": null,
                "st_prefixotamanho": "md"
            },
            "lg": {
                "id_imagem": 53,
                "st_nome": "8b6199cc44a9fc15e10b9945eb3d44461796890d3ff694a1b207b1774224bcab-lg.jpeg",
                "st_url": "https:\/\/i.imgur.com\/qaAuvpS.jpg",
                "st_alt": null,
                "st_prefixotamanho": "lg"
            }
        }
    },
    {
        "id_jogo": 3,
        "st_nome": "Mortal Kombat 11",
        "st_descricao": "A experi\u00eancia MK11 definitiva! Assuma o controle dos protetores do Plano Terreno em DUAS aclamadas Campanhas do Modo Hist\u00f3ria, enquanto eles tentam impedir Kronika de voltar o tempo e reiniciar a hist\u00f3ria. Amizades s\u00e3o postas \u00e0 prova e novas alian\u00e7as s\u00e3o criadas na batalha para salvar toda a exist\u00eancia. MK11 Ultimate cont\u00e9m todos os 37 lutadores, incluindo as novas adi\u00e7\u00f5es: Rain, Mileena & Rambo.",
        "dt_lancamento": "2019-04-23",
        "st_estilo": "Luta",
        "st_video": "null",
        "st_ingresso": "Sala 12",
        "nu_vaga": 16,
        "st_plataforma": "Xbox One, Playstation 4, PC, Nintendo Switch",
        "st_regra": "null",
        "bl_campeonato": 1,
        "st_classificacaoindicativa": "18+",
        "st_plataformacampeonato": "Playstation 4",
        "nu_quantidadejogadores": 2,
        "datahorario": [{
            "id_datahorariocampeonato": 3,
            "id_jogo": 3,
            "st_diasemana": "01\/02\/2020",
            "st_hora": "13:00"
        }, {"id_datahorariocampeonato": 4, "id_jogo": 3, "st_diasemana": "02\/02\/2020", "st_hora": "09:00"}],
        "imagens": {
            "ori": {
                "id_imagem": 54,
                "st_nome": "mortal kombat 11.jpeg",
                "st_url": "https:\/\/i.imgur.com\/L0fkSBf.jpg",
                "st_alt": null,
                "st_prefixotamanho": "ori"
            },
            "default": {
                "id_imagem": 55,
                "st_nome": "14dc53ea535ff35d27da98d89ea08fbe1b214fbbd35d1b9be107672d0d2a2baf-default.jpeg",
                "st_url": "https:\/\/i.imgur.com\/j6jpWQx.jpg",
                "st_alt": null,
                "st_prefixotamanho": "default"
            },
            "sm": {
                "id_imagem": 56,
                "st_nome": "14dc53ea535ff35d27da98d89ea08fbe1b214fbbd35d1b9be107672d0d2a2baf-sm.jpeg",
                "st_url": "https:\/\/i.imgur.com\/t5HUNx0.jpg",
                "st_alt": null,
                "st_prefixotamanho": "sm"
            },
            "md": {
                "id_imagem": 57,
                "st_nome": "14dc53ea535ff35d27da98d89ea08fbe1b214fbbd35d1b9be107672d0d2a2baf-md.jpeg",
                "st_url": "https:\/\/i.imgur.com\/rf90qOv.jpg",
                "st_alt": null,
                "st_prefixotamanho": "md"
            },
            "lg": {
                "id_imagem": 58,
                "st_nome": "14dc53ea535ff35d27da98d89ea08fbe1b214fbbd35d1b9be107672d0d2a2baf-lg.jpeg",
                "st_url": "https:\/\/i.imgur.com\/w102GV8.jpg",
                "st_alt": null,
                "st_prefixotamanho": "lg"
            }
        }
    },
    {
        "id_jogo": 4,
        "st_nome": "Fifa 2020",
        "st_descricao": "Com a tecnologia Frostbite\u2122 EA SPORTS\u2122 FIFA 20 para Xbox One d\u00e1 vida a dois aspectos do Maior Jogo do Mundo: o prest\u00edgio dos gramados profissionais e uma nova experi\u00eancia realista de futebol de rua com EA SPORTS VOLTA. FIFA 20 inova em todos os aspectos do jogo: com a FOOTBALL INTELLIGENCE, voc\u00ea tem acesso a uma plataforma de jogo com realismo sem igual; com FIFA Ultimate Team\u2122, voc\u00ea disp\u00f5e de mais formas de montar o time dos seus sonhos; e com EA SPORTS VOLTA, voc\u00ea volta a jogar na rua de maneira realista, numa quadra menor.",
        "dt_lancamento": "2019-09-26",
        "st_estilo": "Esporte",
        "st_video": "vgQNOIhRsV4",
        "st_ingresso": "Sala 01",
        "nu_vaga": 6,
        "st_plataforma": "Xbox One, Playstation 4, PC, Nintendo Switch",
        "st_regra": "",
        "bl_campeonato": 1,
        "st_classificacaoindicativa": "Livre",
        "st_plataformacampeonato": "Xbox One",
        "nu_quantidadejogadores": 2,
        "datahorario": [],
        "imagens": {
            "ori": {
                "id_imagem": 59,
                "st_nome": "fifa2020.jpeg",
                "st_url": "https:\/\/i.imgur.com\/0ZcSSfu.jpg",
                "st_alt": null,
                "st_prefixotamanho": "ori"
            },
            "default": {
                "id_imagem": 60,
                "st_nome": "6ce1d2b48ebdcdb81510576b841ee03918b489fa2e156488b43ce8443cf0f58f-default.jpeg",
                "st_url": "https:\/\/i.imgur.com\/gIRXa4l.jpg",
                "st_alt": null,
                "st_prefixotamanho": "default"
            },
            "sm": {
                "id_imagem": 61,
                "st_nome": "6ce1d2b48ebdcdb81510576b841ee03918b489fa2e156488b43ce8443cf0f58f-sm.jpeg",
                "st_url": "https:\/\/i.imgur.com\/EDPfivh.jpg",
                "st_alt": null,
                "st_prefixotamanho": "sm"
            },
            "md": {
                "id_imagem": 62,
                "st_nome": "6ce1d2b48ebdcdb81510576b841ee03918b489fa2e156488b43ce8443cf0f58f-md.jpeg",
                "st_url": "https:\/\/i.imgur.com\/9S3nFLy.jpg",
                "st_alt": null,
                "st_prefixotamanho": "md"
            },
            "lg": {
                "id_imagem": 63,
                "st_nome": "6ce1d2b48ebdcdb81510576b841ee03918b489fa2e156488b43ce8443cf0f58f-lg.jpeg",
                "st_url": "https:\/\/i.imgur.com\/GklVG6Y.jpg",
                "st_alt": null,
                "st_prefixotamanho": "lg"
            }
        }
    },
    {
        "id_jogo": 8,
        "st_nome": "League Of Legends ",
        "st_descricao": "O jogo lend\u00e1rio da Riot Games est\u00e1 mais incr\u00edvel do que nunca. Limpe sua rota, mergulhe em \u00e9picos confrontos de equipe 5v5 e destrua o Nexus inimigo antes que destruam o seu.",
        "dt_lancamento": "2009-10-29",
        "st_estilo": "RTS",
        "st_video": "7O21Z6vgtmY",
        "st_ingresso": null,
        "nu_vaga": 0,
        "st_plataforma": "PC",
        "st_regra": null,
        "bl_campeonato": 0,
        "st_classificacaoindicativa": 16,
        "st_plataformacampeonato": null,
        "nu_quantidadejogadores": 6,
        "datahorario": [],
        "imagens": {
            "ori": {
                "id_imagem": 90,
                "st_nome": "external-content.duckduckgo.com.jpeg",
                "st_url": "https:\/\/i.imgur.com\/PiGwjZV.jpg",
                "st_alt": null,
                "st_prefixotamanho": "ori"
            },
            "default": {
                "id_imagem": 91,
                "st_nome": "ea7327dd584b0c4ff8e4834162abd8120771406893bfae4f27f6bc6323b6b4b4-default.jpeg",
                "st_url": "https:\/\/i.imgur.com\/eHQ0nHg.jpg",
                "st_alt": null,
                "st_prefixotamanho": "default"
            },
            "sm": {
                "id_imagem": 92,
                "st_nome": "ea7327dd584b0c4ff8e4834162abd8120771406893bfae4f27f6bc6323b6b4b4-sm.jpeg",
                "st_url": "https:\/\/i.imgur.com\/L2ZE3z1.jpg",
                "st_alt": null,
                "st_prefixotamanho": "sm"
            },
            "md": {
                "id_imagem": 93,
                "st_nome": "ea7327dd584b0c4ff8e4834162abd8120771406893bfae4f27f6bc6323b6b4b4-md.jpeg",
                "st_url": "https:\/\/i.imgur.com\/KrG9nPd.jpg",
                "st_alt": null,
                "st_prefixotamanho": "md"
            },
            "lg": {
                "id_imagem": 94,
                "st_nome": "ea7327dd584b0c4ff8e4834162abd8120771406893bfae4f27f6bc6323b6b4b4-lg.jpeg",
                "st_url": "https:\/\/i.imgur.com\/NCB8TgI.jpg",
                "st_alt": null,
                "st_prefixotamanho": "lg"
            }
        }
    },
    {
        "id_jogo": 9,
        "st_nome": "Just Dance 2020",
        "st_descricao": "Arrase na pista de dan\u00e7a e se jogue pra valer! Just Dance 2020 traz mais de 40 sucessos para voc\u00ea requebrar e provar que \u00e9 o melhor! ",
        "dt_lancamento": "2020-11-24",
        "st_estilo": "Dan\u00e7a",
        "st_video": "RefJ2QOsVLo",
        "st_ingresso": "Recep\u00e7\u00e3o",
        "nu_vaga": 24,
        "st_plataforma": "Xbox One, Playstation 4, Nintendo Switch",
        "st_regra": null,
        "bl_campeonato": 1,
        "st_classificacaoindicativa": "Livre",
        "st_plataformacampeonato": "Xbox One",
        "nu_quantidadejogadores": 4,
        "datahorario": [],
        "imagens": {
            "ori": {
                "id_imagem": 95,
                "st_nome": "just-dance-2020-63326.jpg",
                "st_url": "https:\/\/i.imgur.com\/WY0erWn.jpg",
                "st_alt": null,
                "st_prefixotamanho": "ori"
            },
            "default": {
                "id_imagem": 96,
                "st_nome": "c2ceedc999b55a878e2bff24334c7527a5214ef82569b44449a61d67c57e3a54-default.jpg",
                "st_url": "https:\/\/i.imgur.com\/Iq7IVtN.jpg",
                "st_alt": null,
                "st_prefixotamanho": "default"
            },
            "sm": {
                "id_imagem": 97,
                "st_nome": "c2ceedc999b55a878e2bff24334c7527a5214ef82569b44449a61d67c57e3a54-sm.jpg",
                "st_url": "https:\/\/i.imgur.com\/8dA5hed.jpg",
                "st_alt": null,
                "st_prefixotamanho": "sm"
            },
            "md": {
                "id_imagem": 98,
                "st_nome": "c2ceedc999b55a878e2bff24334c7527a5214ef82569b44449a61d67c57e3a54-md.jpg",
                "st_url": "https:\/\/i.imgur.com\/VmwGNaV.jpg",
                "st_alt": null,
                "st_prefixotamanho": "md"
            },
            "lg": {
                "id_imagem": 99,
                "st_nome": "c2ceedc999b55a878e2bff24334c7527a5214ef82569b44449a61d67c57e3a54-lg.jpg",
                "st_url": "https:\/\/i.imgur.com\/mGHjtI5.jpg",
                "st_alt": null,
                "st_prefixotamanho": "lg"
            }
        }
    }, {
        "id_jogo": 10,
        "st_nome": "Yu-Gi-Oh!",
        "st_descricao": "Um dos maiores card games do mundo, Yu-Gi-Oh! marca sua presen\u00e7a no #EGPM3!",
        "dt_lancamento": "1999-01-01",
        "st_estilo": "Cards",
        "st_video": "FcFs9QEnvRo",
        "st_ingresso": "Recep\u00e7\u00e3o",
        "nu_vaga": 12,
        "st_plataforma": "Tabuleiro",
        "st_regra": "",
        "bl_campeonato": 1,
        "st_classificacaoindicativa": 16,
        "st_plataformacampeonato": "Tabuleiro",
        "nu_quantidadejogadores": 2,
        "datahorario": [{
            "id_datahorariocampeonato": 7,
            "id_jogo": 10,
            "st_diasemana": "01\/02\/2020",
            "st_hora": "09:00"
        }],
        "imagens": {
            "ori": {
                "id_imagem": 125,
                "st_nome": "yugioh.jpg",
                "st_url": "https:\/\/i.imgur.com\/YzTmhNe.jpg",
                "st_alt": null,
                "st_prefixotamanho": "ori"
            },
            "default": {
                "id_imagem": 126,
                "st_nome": "089e08a35eab88358a1e00337c9965c195cb92fa9fa93fedd6f58bcb9ac6a240-default.jpg",
                "st_url": "https:\/\/i.imgur.com\/0Y8r8Dr.jpg",
                "st_alt": null,
                "st_prefixotamanho": "default"
            },
            "sm": {
                "id_imagem": 127,
                "st_nome": "089e08a35eab88358a1e00337c9965c195cb92fa9fa93fedd6f58bcb9ac6a240-sm.jpg",
                "st_url": "https:\/\/i.imgur.com\/Lc988hK.jpg",
                "st_alt": null,
                "st_prefixotamanho": "sm"
            },
            "md": {
                "id_imagem": 128,
                "st_nome": "089e08a35eab88358a1e00337c9965c195cb92fa9fa93fedd6f58bcb9ac6a240-md.jpg",
                "st_url": "https:\/\/i.imgur.com\/xMoBMvc.jpg",
                "st_alt": null,
                "st_prefixotamanho": "md"
            },
            "lg": {
                "id_imagem": 129,
                "st_nome": "089e08a35eab88358a1e00337c9965c195cb92fa9fa93fedd6f58bcb9ac6a240-lg.jpg",
                "st_url": "https:\/\/i.imgur.com\/bfwYwOC.jpg",
                "st_alt": null,
                "st_prefixotamanho": "lg"
            }
        }
    }, {
        "id_jogo": 11,
        "st_nome": "The King Of Fighters 2002",
        "st_descricao": "O cl\u00e1ssico jogo de luta chega com tudo no nosso encontro. Monte seu time com uma vasta lista de personagens e mostre quem \u00e9 o Rei ou Rainha da luta! ",
        "dt_lancamento": "2002-05-18",
        "st_estilo": "Luta",
        "st_video": "5o2hSFkYYe8",
        "st_ingresso": "null",
        "nu_vaga": 0,
        "st_plataforma": "PC",
        "st_regra": "",
        "bl_campeonato": 0,
        "st_classificacaoindicativa": 14,
        "st_plataformacampeonato": "",
        "nu_quantidadejogadores": 2,
        "datahorario": [],
        "imagens": {
            "ori": {
                "id_imagem": 130,
                "st_nome": "kof.jpg",
                "st_url": "https:\/\/i.imgur.com\/Fh4sfpY.jpg",
                "st_alt": null,
                "st_prefixotamanho": "ori"
            },
            "default": {
                "id_imagem": 131,
                "st_nome": "f8c9dda175ac42ba7f1464bcf0c69703905d1ca51da96be4c9c63f1c6e397fef-default.jpg",
                "st_url": "https:\/\/i.imgur.com\/4h6JPqM.jpg",
                "st_alt": null,
                "st_prefixotamanho": "default"
            },
            "sm": {
                "id_imagem": 132,
                "st_nome": "f8c9dda175ac42ba7f1464bcf0c69703905d1ca51da96be4c9c63f1c6e397fef-sm.jpg",
                "st_url": "https:\/\/i.imgur.com\/DiVEQ8h.jpg",
                "st_alt": null,
                "st_prefixotamanho": "sm"
            },
            "md": {
                "id_imagem": 133,
                "st_nome": "f8c9dda175ac42ba7f1464bcf0c69703905d1ca51da96be4c9c63f1c6e397fef-md.jpg",
                "st_url": "https:\/\/i.imgur.com\/G5gzIhb.jpg",
                "st_alt": null,
                "st_prefixotamanho": "md"
            },
            "lg": {
                "id_imagem": 134,
                "st_nome": "f8c9dda175ac42ba7f1464bcf0c69703905d1ca51da96be4c9c63f1c6e397fef-lg.jpg",
                "st_url": "https:\/\/i.imgur.com\/RUfBRvW.jpg",
                "st_alt": null,
                "st_prefixotamanho": "lg"
            }
        }
    }, {
        "id_jogo": 12,
        "st_nome": "Street Fighter V",
        "st_descricao": "O lend\u00e1rio jogo de luta da Capcom est\u00e1 de volta. Traga seus amigos e mostre quem manda na rua! ",
        "dt_lancamento": "2016-02-16",
        "st_estilo": "Luta",
        "st_video": "3l4mux-seHI",
        "st_ingresso": "Recep\u00e7\u00e3o",
        "nu_vaga": 16,
        "st_plataforma": "PC, Playstation 4",
        "st_regra": null,
        "bl_campeonato": 1,
        "st_classificacaoindicativa": 16,
        "st_plataformacampeonato": "Playstation 4",
        "nu_quantidadejogadores": 2,
        "datahorario": [{
            "id_datahorariocampeonato": 8,
            "id_jogo": 12,
            "st_diasemana": "01\/01\/2020",
            "st_hora": "10:00"
        }],
        "imagens": {
            "ori": {
                "id_imagem": 110,
                "st_nome": "Street-Fighter-V-Champion-Edition-CODEX-PC-Direct-Download-Crack-.jpg",
                "st_url": "https:\/\/i.imgur.com\/f24LLdR.jpg",
                "st_alt": null,
                "st_prefixotamanho": "ori"
            },
            "default": {
                "id_imagem": 111,
                "st_nome": "45c9e78eaccc850fa850857347dfdcbeb135098d8dbd0ba439821cafaea10b6d-default.jpg",
                "st_url": "https:\/\/i.imgur.com\/VQwBIVD.jpg",
                "st_alt": null,
                "st_prefixotamanho": "default"
            },
            "sm": {
                "id_imagem": 112,
                "st_nome": "45c9e78eaccc850fa850857347dfdcbeb135098d8dbd0ba439821cafaea10b6d-sm.jpg",
                "st_url": "https:\/\/i.imgur.com\/AVwfvex.jpg",
                "st_alt": null,
                "st_prefixotamanho": "sm"
            },
            "md": {
                "id_imagem": 113,
                "st_nome": "45c9e78eaccc850fa850857347dfdcbeb135098d8dbd0ba439821cafaea10b6d-md.jpg",
                "st_url": "https:\/\/i.imgur.com\/sRYiKBg.jpg",
                "st_alt": null,
                "st_prefixotamanho": "md"
            },
            "lg": {
                "id_imagem": 114,
                "st_nome": "45c9e78eaccc850fa850857347dfdcbeb135098d8dbd0ba439821cafaea10b6d-lg.jpg",
                "st_url": "https:\/\/i.imgur.com\/jS9nmQn.jpg",
                "st_alt": null,
                "st_prefixotamanho": "lg"
            }
        }
    }, {
        "id_jogo": 17,
        "st_nome": "Xadrez",
        "st_descricao": "Um dos maiores jogos do mundo tamb\u00e9m est\u00e1 presente aqui no #EGPM3! Concentra\u00e7\u00e3o e muita estrat\u00e9gia para vencer os oponentes.",
        "dt_lancamento": "1500-01-01",
        "st_estilo": "Tabuleiro",
        "st_video": "ePwjfbKpuPA",
        "st_ingresso": "Recep\u00e7\u00e3o",
        "nu_vaga": 24,
        "st_plataforma": "Tabuleiro",
        "st_regra": null,
        "bl_campeonato": 1,
        "st_classificacaoindicativa": "Livre",
        "st_plataformacampeonato": "Tabuleiro",
        "nu_quantidadejogadores": 2,
        "datahorario": [{
            "id_datahorariocampeonato": 9,
            "id_jogo": 17,
            "st_diasemana": "01\/01\/2020",
            "st_hora": "08:00"
        }, {"id_datahorariocampeonato": 10, "id_jogo": 17, "st_diasemana": "02\/01\/2020", "st_hora": "08:00"}],
        "imagens": {
            "ori": {
                "id_imagem": 115,
                "st_nome": "pexels-pixabay-260024(1).jpg",
                "st_url": "https:\/\/i.imgur.com\/8ulDXXG.jpg",
                "st_alt": null,
                "st_prefixotamanho": "ori"
            },
            "default": {
                "id_imagem": 116,
                "st_nome": "677bc5a819d1655cf6e701a7a1fe9f34eeeff78303c3f6033cecd3168c4c2891-default.jpg",
                "st_url": "https:\/\/i.imgur.com\/nFDiLfa.jpg",
                "st_alt": null,
                "st_prefixotamanho": "default"
            },
            "sm": {
                "id_imagem": 117,
                "st_nome": "677bc5a819d1655cf6e701a7a1fe9f34eeeff78303c3f6033cecd3168c4c2891-sm.jpg",
                "st_url": "https:\/\/i.imgur.com\/4KMUFkq.jpg",
                "st_alt": null,
                "st_prefixotamanho": "sm"
            },
            "md": {
                "id_imagem": 118,
                "st_nome": "677bc5a819d1655cf6e701a7a1fe9f34eeeff78303c3f6033cecd3168c4c2891-md.jpg",
                "st_url": "https:\/\/i.imgur.com\/0VCU9B1.jpg",
                "st_alt": null,
                "st_prefixotamanho": "md"
            },
            "lg": {
                "id_imagem": 119,
                "st_nome": "677bc5a819d1655cf6e701a7a1fe9f34eeeff78303c3f6033cecd3168c4c2891-lg.jpg",
                "st_url": "https:\/\/i.imgur.com\/Gx9pzSY.jpg",
                "st_alt": null,
                "st_prefixotamanho": "lg"
            }
        }
    },
];

const duvidasData = [
    {
        "id_duvida": 1,
        "st_duvida": "Onde posso comprar os ingressos?",
        "st_resposta": "Vamos anunciar as lojas parceiras em breve. Fique atento!",
        "nu_order": null
    },
    {
        "id_duvida": 2,
        "st_duvida": "O ingresso vale para os dois dias?",
        "st_resposta": "N\u00e3o, os ingressos de s\u00e1bado e domingo s\u00e3o diferentes.",
        "nu_order": null
    },
    {
        "id_duvida": 3,
        "st_duvida": "Quais s\u00e3o os pr\u00eamios dos campeonatos?",
        "st_resposta": "O primeiro lugar leva um trof\u00e9u, os segundos e terceiros colocados levam medalhas. Em caso de campeonatos em grupo, o grupo ganha o trof\u00e9u e medalhas.",
        "nu_order": null
    },
    {
        "id_duvida": 4,
        "st_duvida": "Preciso pagar para me inscrever nos campeonatos?",
        "st_resposta": "N\u00e3o. A participa\u00e7\u00e3o nos campeonatos est\u00e1 inclusa no ingresso. ",
        "nu_order": null
    },
    {
        "id_duvida": 5,
        "st_duvida": "Posso participar de mais de um campeonato ao mesmo tempo?",
        "st_resposta": "Sim! Apenas fique atento para n\u00e3o se inscrever em campeonatos que ocorrem no mesmo hor\u00e1rio.",
        "nu_order": null
    },
    {
        "id_duvida": 6,
        "st_duvida": "Quais alimentos ser\u00e3o vendidos nos dias do evento?",
        "st_resposta": "Teremos a lanchonete da faculdade aberta, com almo\u00e7o dispon\u00edvel para compra - al\u00e9m de um food truck com lanches.",
        "nu_order": null
    }
];

const quizzesData = {
    st_texto: "Voc\u00ea sabe tudo sobre o universo dos games? Participe dos quizzes e ganhe pr\u00eamios incr\u00edveis! S\u00e3o v\u00e1rias se\u00e7\u00f5es, fique atento aos chamados durante o dia! ",
};

const datasHorariosData = [
    {
        "id_diahorario": 1, "st_diahorario":
            "01\/02\/2022 - 09 \u00e0s 18h"
    },
    {
        "id_diahorario": 2,
        "st_diahorario": "02\/02\/2022 - 09 \u00e0s 18h"
    }
];

const localizacaoData = {
    st_local: 'FAPAM, Faculdade De Pará de Minas\n',
    st_endereco: 'R. Ricardo Marinho, 110 - São Geraldo, Pará de Minas - MG\n',
}

const detalhesJogoData = [
        {
            "id_jogo": 3,
            "st_nome": "Mortal Kombat 11",
            "st_descricao": "A experi\u00eancia MK11 definitiva! Assuma o controle dos protetores do Plano Terreno em DUAS aclamadas Campanhas do Modo Hist\u00f3ria, enquanto eles tentam impedir Kronika de voltar o tempo e reiniciar a hist\u00f3ria. Amizades s\u00e3o postas \u00e0 prova e novas alian\u00e7as s\u00e3o criadas na batalha para salvar toda a exist\u00eancia. MK11 Ultimate cont\u00e9m todos os 37 lutadores, incluindo as novas adi\u00e7\u00f5es: Rain, Mileena & Rambo.",
            "dt_lancamento": "2019-04-23",
            "st_estilo": "Luta",
            "st_video": "null",
            "st_ingresso": "Sala 12",
            "nu_vaga": 16,
            "st_plataforma": "Xbox One, Playstation 4, PC, Nintendo Switch",
            "st_regra": null,
            "bl_campeonato": 1,
            "st_classificacaoindicativa": "18+",
            "st_plataformacampeonato": "Playstation 4",
            "nu_quantidadejogadores": 2,
            "datahorario": [{
                "id_datahorariocampeonato": 3,
                "id_jogo": 3,
                "st_diasemana": "01\/02\/2020",
                "st_hora": "13:00"
            }, {"id_datahorariocampeonato": 4, "id_jogo": 3, "st_diasemana": "02\/02\/2020", "st_hora": "09:00"}],
            "imagens": {
                "ori": {
                    "id_imagem": 54,
                    "st_nome": "mortal kombat 11.jpeg",
                    "st_url": "https:\/\/i.imgur.com\/L0fkSBf.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "ori"
                },
                "default": {
                    "id_imagem": 55,
                    "st_nome": "14dc53ea535ff35d27da98d89ea08fbe1b214fbbd35d1b9be107672d0d2a2baf-default.jpeg",
                    "st_url": "https:\/\/i.imgur.com\/j6jpWQx.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "default"
                },
                "sm": {
                    "id_imagem": 56,
                    "st_nome": "14dc53ea535ff35d27da98d89ea08fbe1b214fbbd35d1b9be107672d0d2a2baf-sm.jpeg",
                    "st_url": "https:\/\/i.imgur.com\/t5HUNx0.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "sm"
                },
                "md": {
                    "id_imagem": 57,
                    "st_nome": "14dc53ea535ff35d27da98d89ea08fbe1b214fbbd35d1b9be107672d0d2a2baf-md.jpeg",
                    "st_url": "https:\/\/i.imgur.com\/rf90qOv.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "md"
                },
                "lg": {
                    "id_imagem": 58,
                    "st_nome": "14dc53ea535ff35d27da98d89ea08fbe1b214fbbd35d1b9be107672d0d2a2baf-lg.jpeg",
                    "st_url": "https:\/\/i.imgur.com\/w102GV8.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "lg"
                }
            }
        },
        {
            "id_jogo": 2,
            "st_nome": "Crash Team Racing: Nitro Fueled",
            "st_descricao": "Crash est\u00e1 de volta ao volante! Prepare-se para acelerar com o Crash Team Racing Nitro-Fueled. Voc\u00ea ter\u00e1 a aut\u00eantica experi\u00eancia do CTR e muito mais, agora totalmente remasterizado e elevado \u00e0 m\u00e1xima pot\u00eancia!",
            "dt_lancamento": "2019-06-01",
            "st_estilo": "Corrida",
            "st_video": "dr2BCMRk_xc",
            "st_ingresso": "Sala 04",
            "nu_vaga": 8,
            "st_plataforma": "Xbox One, Playstation 4, Nintendo Switch",
            "st_regra": "",
            "bl_campeonato": 1,
            "st_classificacaoindicativa": "Livre",
            "st_plataformacampeonato": "Playstation 4",
            "nu_quantidadejogadores": 4,
            "datahorario": [{
                "id_datahorariocampeonato": 5,
                "id_jogo": 2,
                "st_diasemana": "01\/02\/2020",
                "st_hora": "9:00"
            }],
            "imagens": {
                "ori": {
                    "id_imagem": 49,
                    "st_nome": "ctr.jpeg",
                    "st_url": "https:\/\/i.imgur.com\/qaopDNA.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "ori"
                },
                "default": {
                    "id_imagem": 50,
                    "st_nome": "8b6199cc44a9fc15e10b9945eb3d44461796890d3ff694a1b207b1774224bcab-default.jpeg",
                    "st_url": "https:\/\/i.imgur.com\/kUwuxu5.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "default"
                },
                "sm": {
                    "id_imagem": 51,
                    "st_nome": "8b6199cc44a9fc15e10b9945eb3d44461796890d3ff694a1b207b1774224bcab-sm.jpeg",
                    "st_url": "https:\/\/i.imgur.com\/WLj1PqB.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "sm"
                },
                "md": {
                    "id_imagem": 52,
                    "st_nome": "8b6199cc44a9fc15e10b9945eb3d44461796890d3ff694a1b207b1774224bcab-md.jpeg",
                    "st_url": "https:\/\/i.imgur.com\/KoQZBaU.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "md"
                },
                "lg": {
                    "id_imagem": 53,
                    "st_nome": "8b6199cc44a9fc15e10b9945eb3d44461796890d3ff694a1b207b1774224bcab-lg.jpeg",
                    "st_url": "https:\/\/i.imgur.com\/qaAuvpS.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "lg"
                }
            }
        },
        {
            "id_jogo": 4,
            "st_nome": "Fifa 2020",
            "st_descricao": "Com a tecnologia Frostbite\u2122 EA SPORTS\u2122 FIFA 20 para Xbox One d\u00e1 vida a dois aspectos do Maior Jogo do Mundo: o prest\u00edgio dos gramados profissionais e uma nova experi\u00eancia realista de futebol de rua com EA SPORTS VOLTA. FIFA 20 inova em todos os aspectos do jogo: com a FOOTBALL INTELLIGENCE, voc\u00ea tem acesso a uma plataforma de jogo com realismo sem igual; com FIFA Ultimate Team\u2122, voc\u00ea disp\u00f5e de mais formas de montar o time dos seus sonhos; e com EA SPORTS VOLTA, voc\u00ea volta a jogar na rua de maneira realista, numa quadra menor.",
            "dt_lancamento": "2019-09-26",
            "st_estilo": "Esporte",
            "st_video": "vgQNOIhRsV4",
            "st_ingresso": "Sala 01",
            "nu_vaga": 6,
            "st_plataforma": "Xbox One, Playstation 4, PC, Nintendo Switch",
            "st_regra": "",
            "bl_campeonato": 1,
            "st_classificacaoindicativa": "Livre",
            "st_plataformacampeonato": "Xbox One",
            "nu_quantidadejogadores": 2,
            "datahorario": [],
            "imagens": {
                "ori": {
                    "id_imagem": 59,
                    "st_nome": "fifa2020.jpeg",
                    "st_url": "https:\/\/i.imgur.com\/0ZcSSfu.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "ori"
                },
                "default": {
                    "id_imagem": 60,
                    "st_nome": "6ce1d2b48ebdcdb81510576b841ee03918b489fa2e156488b43ce8443cf0f58f-default.jpeg",
                    "st_url": "https:\/\/i.imgur.com\/gIRXa4l.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "default"
                },
                "sm": {
                    "id_imagem": 61,
                    "st_nome": "6ce1d2b48ebdcdb81510576b841ee03918b489fa2e156488b43ce8443cf0f58f-sm.jpeg",
                    "st_url": "https:\/\/i.imgur.com\/EDPfivh.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "sm"
                },
                "md": {
                    "id_imagem": 62,
                    "st_nome": "6ce1d2b48ebdcdb81510576b841ee03918b489fa2e156488b43ce8443cf0f58f-md.jpeg",
                    "st_url": "https:\/\/i.imgur.com\/9S3nFLy.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "md"
                },
                "lg": {
                    "id_imagem": 63,
                    "st_nome": "6ce1d2b48ebdcdb81510576b841ee03918b489fa2e156488b43ce8443cf0f58f-lg.jpeg",
                    "st_url": "https:\/\/i.imgur.com\/GklVG6Y.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "lg"
                }
            }
        },
        {
            "id_jogo": 8,
            "st_nome": "League Of Legends ",
            "st_descricao": "O jogo lend\u00e1rio da Riot Games est\u00e1 mais incr\u00edvel do que nunca. Limpe sua rota, mergulhe em \u00e9picos confrontos de equipe 5v5 e destrua o Nexus inimigo antes que destruam o seu.",
            "dt_lancamento": "2009-10-29",
            "st_estilo": "RTS",
            "st_video": "7O21Z6vgtmY",
            "st_ingresso": null,
            "nu_vaga": 0,
            "st_plataforma": "PC",
            "st_regra": null,
            "bl_campeonato": 0,
            "st_classificacaoindicativa": 16,
            "st_plataformacampeonato": null,
            "nu_quantidadejogadores": 6,
            "datahorario": [],
            "imagens": {
                "ori": {
                    "id_imagem": 90,
                    "st_nome": "external-content.duckduckgo.com.jpeg",
                    "st_url": "https:\/\/i.imgur.com\/PiGwjZV.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "ori"
                },
                "default": {
                    "id_imagem": 91,
                    "st_nome": "ea7327dd584b0c4ff8e4834162abd8120771406893bfae4f27f6bc6323b6b4b4-default.jpeg",
                    "st_url": "https:\/\/i.imgur.com\/eHQ0nHg.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "default"
                },
                "sm": {
                    "id_imagem": 92,
                    "st_nome": "ea7327dd584b0c4ff8e4834162abd8120771406893bfae4f27f6bc6323b6b4b4-sm.jpeg",
                    "st_url": "https:\/\/i.imgur.com\/L2ZE3z1.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "sm"
                },
                "md": {
                    "id_imagem": 93,
                    "st_nome": "ea7327dd584b0c4ff8e4834162abd8120771406893bfae4f27f6bc6323b6b4b4-md.jpeg",
                    "st_url": "https:\/\/i.imgur.com\/KrG9nPd.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "md"
                },
                "lg": {
                    "id_imagem": 94,
                    "st_nome": "ea7327dd584b0c4ff8e4834162abd8120771406893bfae4f27f6bc6323b6b4b4-lg.jpeg",
                    "st_url": "https:\/\/i.imgur.com\/NCB8TgI.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "lg"
                }
            }
        },
        {
            "id_jogo": 9,
            "st_nome": "Just Dance 2020",
            "st_descricao": "Arrase na pista de dança e se jogue pra valer! Just Dance 2020 traz mais de 40 sucessos para você requebrar e provar que é o melhor! ",
            "dt_lancamento": "2020-11-24",
            "st_estilo": "Dança",
            "st_video": "RefJ2QOsVLo",
            "st_ingresso": "Recepção",
            "nu_vaga": 24,
            "st_plataforma": "Xbox One, Playstation 4, Nintendo Switch",
            "st_regra": null,
            "bl_campeonato": 1,
            "st_classificacaoindicativa": "Livre",
            "st_plataformacampeonato": "Xbox One",
            "nu_quantidadejogadores": 4,
            "datahorario": [],
            "imagens": {
                "ori": {
                    "id_imagem": 95,
                    "st_nome": "just-dance-2020-63326.jpg",
                    "st_url": "https://i.imgur.com/WY0erWn.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "ori"
                },
                "default": {
                    "id_imagem": 96,
                    "st_nome": "c2ceedc999b55a878e2bff24334c7527a5214ef82569b44449a61d67c57e3a54-default.jpg",
                    "st_url": "https://i.imgur.com/Iq7IVtN.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "default"
                },
                "sm": {
                    "id_imagem": 97,
                    "st_nome": "c2ceedc999b55a878e2bff24334c7527a5214ef82569b44449a61d67c57e3a54-sm.jpg",
                    "st_url": "https://i.imgur.com/8dA5hed.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "sm"
                },
                "md": {
                    "id_imagem": 98,
                    "st_nome": "c2ceedc999b55a878e2bff24334c7527a5214ef82569b44449a61d67c57e3a54-md.jpg",
                    "st_url": "https://i.imgur.com/VmwGNaV.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "md"
                },
                "lg": {
                    "id_imagem": 99,
                    "st_nome": "c2ceedc999b55a878e2bff24334c7527a5214ef82569b44449a61d67c57e3a54-lg.jpg",
                    "st_url": "https://i.imgur.com/mGHjtI5.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "lg"
                }
            }
        },
        {
            "id_jogo": 10,
            "st_nome": "Yu-Gi-Oh!",
            "st_descricao": "Um dos maiores card games do mundo, Yu-Gi-Oh! marca sua presença no #EGPM3!",
            "dt_lancamento": "1999-01-01",
            "st_estilo": "Cards",
            "st_video": "FcFs9QEnvRo",
            "st_ingresso": "Recepção",
            "nu_vaga": 12,
            "st_plataforma": "Tabuleiro",
            "st_regra": "",
            "bl_campeonato": 1,
            "st_classificacaoindicativa": 16,
            "st_plataformacampeonato": "Tabuleiro",
            "nu_quantidadejogadores": 2,
            "datahorario": [
                {
                    "id_datahorariocampeonato": 7,
                    "id_jogo": 10,
                    "st_diasemana": "01/02/2020",
                    "st_hora": "09:00"
                }
            ],
            "imagens": {
                "ori": {
                    "id_imagem": 125,
                    "st_nome": "yugioh.jpg",
                    "st_url": "https://i.imgur.com/YzTmhNe.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "ori"
                },
                "default": {
                    "id_imagem": 126,
                    "st_nome": "089e08a35eab88358a1e00337c9965c195cb92fa9fa93fedd6f58bcb9ac6a240-default.jpg",
                    "st_url": "https://i.imgur.com/0Y8r8Dr.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "default"
                },
                "sm": {
                    "id_imagem": 127,
                    "st_nome": "089e08a35eab88358a1e00337c9965c195cb92fa9fa93fedd6f58bcb9ac6a240-sm.jpg",
                    "st_url": "https://i.imgur.com/Lc988hK.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "sm"
                },
                "md": {
                    "id_imagem": 128,
                    "st_nome": "089e08a35eab88358a1e00337c9965c195cb92fa9fa93fedd6f58bcb9ac6a240-md.jpg",
                    "st_url": "https://i.imgur.com/xMoBMvc.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "md"
                },
                "lg": {
                    "id_imagem": 129,
                    "st_nome": "089e08a35eab88358a1e00337c9965c195cb92fa9fa93fedd6f58bcb9ac6a240-lg.jpg",
                    "st_url": "https://i.imgur.com/bfwYwOC.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "lg"
                }
            }
        },
        {
            "id_jogo": 10,
            "st_nome": "Yu-Gi-Oh!",
            "st_descricao": "Um dos maiores card games do mundo, Yu-Gi-Oh! marca sua presença no #EGPM3!",
            "dt_lancamento": "1999-01-01",
            "st_estilo": "Cards",
            "st_video": "FcFs9QEnvRo",
            "st_ingresso": "Recepção",
            "nu_vaga": 12,
            "st_plataforma": "Tabuleiro",
            "st_regra": "",
            "bl_campeonato": 1,
            "st_classificacaoindicativa": 16,
            "st_plataformacampeonato": "Tabuleiro",
            "nu_quantidadejogadores": 2,
            "datahorario": [
                {
                    "id_datahorariocampeonato": 7,
                    "id_jogo": 10,
                    "st_diasemana": "01/02/2020",
                    "st_hora": "09:00"
                }
            ],
            "imagens": {
                "ori": {
                    "id_imagem": 125,
                    "st_nome": "yugioh.jpg",
                    "st_url": "https://i.imgur.com/YzTmhNe.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "ori"
                },
                "default": {
                    "id_imagem": 126,
                    "st_nome": "089e08a35eab88358a1e00337c9965c195cb92fa9fa93fedd6f58bcb9ac6a240-default.jpg",
                    "st_url": "https://i.imgur.com/0Y8r8Dr.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "default"
                },
                "sm": {
                    "id_imagem": 127,
                    "st_nome": "089e08a35eab88358a1e00337c9965c195cb92fa9fa93fedd6f58bcb9ac6a240-sm.jpg",
                    "st_url": "https://i.imgur.com/Lc988hK.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "sm"
                },
                "md": {
                    "id_imagem": 128,
                    "st_nome": "089e08a35eab88358a1e00337c9965c195cb92fa9fa93fedd6f58bcb9ac6a240-md.jpg",
                    "st_url": "https://i.imgur.com/xMoBMvc.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "md"
                },
                "lg": {
                    "id_imagem": 129,
                    "st_nome": "089e08a35eab88358a1e00337c9965c195cb92fa9fa93fedd6f58bcb9ac6a240-lg.jpg",
                    "st_url": "https://i.imgur.com/bfwYwOC.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "lg"
                }
            }
        },
        {
            "id_jogo": 11,
            "st_nome": "The King Of Fighters 2002",
            "st_descricao": "O clássico jogo de luta chega com tudo no nosso encontro. Monte seu time com uma vasta lista de personagens e mostre quem é o Rei ou Rainha da luta! ",
            "dt_lancamento": "2002-05-18",
            "st_estilo": "Luta",
            "st_video": "5o2hSFkYYe8",
            "st_ingresso": "null",
            "nu_vaga": 0,
            "st_plataforma": "PC",
            "st_regra": "",
            "bl_campeonato": 0,
            "st_classificacaoindicativa": 14,
            "st_plataformacampeonato": "",
            "nu_quantidadejogadores": 2,
            "datahorario": [],
            "imagens": {
                "ori": {
                    "id_imagem": 130,
                    "st_nome": "kof.jpg",
                    "st_url": "https://i.imgur.com/Fh4sfpY.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "ori"
                },
                "default": {
                    "id_imagem": 131,
                    "st_nome": "f8c9dda175ac42ba7f1464bcf0c69703905d1ca51da96be4c9c63f1c6e397fef-default.jpg",
                    "st_url": "https://i.imgur.com/4h6JPqM.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "default"
                },
                "sm": {
                    "id_imagem": 132,
                    "st_nome": "f8c9dda175ac42ba7f1464bcf0c69703905d1ca51da96be4c9c63f1c6e397fef-sm.jpg",
                    "st_url": "https://i.imgur.com/DiVEQ8h.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "sm"
                },
                "md": {
                    "id_imagem": 133,
                    "st_nome": "f8c9dda175ac42ba7f1464bcf0c69703905d1ca51da96be4c9c63f1c6e397fef-md.jpg",
                    "st_url": "https://i.imgur.com/G5gzIhb.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "md"
                },
                "lg": {
                    "id_imagem": 134,
                    "st_nome": "f8c9dda175ac42ba7f1464bcf0c69703905d1ca51da96be4c9c63f1c6e397fef-lg.jpg",
                    "st_url": "https://i.imgur.com/RUfBRvW.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "lg"
                }
            }
        },
        {
            "id_jogo": 12,
            "st_nome": "Street Fighter V",
            "st_descricao": "O lendário jogo de luta da Capcom está de volta. Traga seus amigos e mostre quem manda na rua! ",
            "dt_lancamento": "2016-02-16",
            "st_estilo": "Luta",
            "st_video": "3l4mux-seHI",
            "st_ingresso": "Recepção",
            "nu_vaga": 16,
            "st_plataforma": "PC, Playstation 4",
            "st_regra": null,
            "bl_campeonato": 1,
            "st_classificacaoindicativa": 16,
            "st_plataformacampeonato": "Playstation 4",
            "nu_quantidadejogadores": 2,
            "datahorario": [
                {
                    "id_datahorariocampeonato": 8,
                    "id_jogo": 12,
                    "st_diasemana": "01/01/2020",
                    "st_hora": "10:00"
                }
            ],
            "imagens": {
                "ori": {
                    "id_imagem": 110,
                    "st_nome": "Street-Fighter-V-Champion-Edition-CODEX-PC-Direct-Download-Crack-.jpg",
                    "st_url": "https://i.imgur.com/f24LLdR.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "ori"
                },
                "default": {
                    "id_imagem": 111,
                    "st_nome": "45c9e78eaccc850fa850857347dfdcbeb135098d8dbd0ba439821cafaea10b6d-default.jpg",
                    "st_url": "https://i.imgur.com/VQwBIVD.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "default"
                },
                "sm": {
                    "id_imagem": 112,
                    "st_nome": "45c9e78eaccc850fa850857347dfdcbeb135098d8dbd0ba439821cafaea10b6d-sm.jpg",
                    "st_url": "https://i.imgur.com/AVwfvex.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "sm"
                },
                "md": {
                    "id_imagem": 113,
                    "st_nome": "45c9e78eaccc850fa850857347dfdcbeb135098d8dbd0ba439821cafaea10b6d-md.jpg",
                    "st_url": "https://i.imgur.com/sRYiKBg.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "md"
                },
                "lg": {
                    "id_imagem": 114,
                    "st_nome": "45c9e78eaccc850fa850857347dfdcbeb135098d8dbd0ba439821cafaea10b6d-lg.jpg",
                    "st_url": "https://i.imgur.com/jS9nmQn.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "lg"
                }
            }
        },
        {
            "id_jogo": 17,
            "st_nome": "Xadrez",
            "st_descricao": "Um dos maiores jogos do mundo também está presente aqui no #EGPM3! Concentração e muita estratégia para vencer os oponentes.",
            "dt_lancamento": "1500-01-01",
            "st_estilo": "Tabuleiro",
            "st_video": "ePwjfbKpuPA",
            "st_ingresso": "Recepção",
            "nu_vaga": 24,
            "st_plataforma": "Tabuleiro",
            "st_regra": null,
            "bl_campeonato": 1,
            "st_classificacaoindicativa": "Livre",
            "st_plataformacampeonato": "Tabuleiro",
            "nu_quantidadejogadores": 2,
            "datahorario": [
                {
                    "id_datahorariocampeonato": 9,
                    "id_jogo": 17,
                    "st_diasemana": "01/01/2020",
                    "st_hora": "08:00"
                },
                {
                    "id_datahorariocampeonato": 10,
                    "id_jogo": 17,
                    "st_diasemana": "02/01/2020",
                    "st_hora": "08:00"
                }
            ],
            "imagens": {
                "ori": {
                    "id_imagem": 115,
                    "st_nome": "pexels-pixabay-260024(1).jpg",
                    "st_url": "https://i.imgur.com/8ulDXXG.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "ori"
                },
                "default": {
                    "id_imagem": 116,
                    "st_nome": "677bc5a819d1655cf6e701a7a1fe9f34eeeff78303c3f6033cecd3168c4c2891-default.jpg",
                    "st_url": "https://i.imgur.com/nFDiLfa.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "default"
                },
                "sm": {
                    "id_imagem": 117,
                    "st_nome": "677bc5a819d1655cf6e701a7a1fe9f34eeeff78303c3f6033cecd3168c4c2891-sm.jpg",
                    "st_url": "https://i.imgur.com/4KMUFkq.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "sm"
                },
                "md": {
                    "id_imagem": 118,
                    "st_nome": "677bc5a819d1655cf6e701a7a1fe9f34eeeff78303c3f6033cecd3168c4c2891-md.jpg",
                    "st_url": "https://i.imgur.com/0VCU9B1.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "md"
                },
                "lg": {
                    "id_imagem": 119,
                    "st_nome": "677bc5a819d1655cf6e701a7a1fe9f34eeeff78303c3f6033cecd3168c4c2891-lg.jpg",
                    "st_url": "https://i.imgur.com/Gx9pzSY.jpg",
                    "st_alt": null,
                    "st_prefixotamanho": "lg"
                }
            }
        }
    ]
;

const agendaData =
    [
        {
            "id_agenda": 1,
            "st_nome": "Teste",
            "st_descricao": "Teste",
            "st_local": "Teste",
            "dt_data": "2022-02-16",
            "nu_horario": "19:59:00",
            "st_observacao": "Teste",
            "bl_ativo": 1,
            "bl_jogo": 1,
            "id_jogo": 1,
            "jogo": {
                "id_jogo": null,
                "st_nome": null,
                "st_descricao": null,
                "dt_lancamento": null,
                "st_estilo": null,
                "st_video": null,
                "st_ingresso": null,
                "nu_vaga": null,
                "st_plataforma": null,
                "st_regra": null,
                "bl_campeonato": null,
                "st_classificacaoindicativa": null,
                "st_plataformacampeonato": null,
                "nu_quantidadejogadores": null,
                "datahorario": [],
                "imagens": []
            }
        },
        {
            "id_agenda": 1,
            "st_nome": "Teste",
            "st_descricao": "Teste",
            "st_local": "Teste",
            "dt_data": "2022-02-16",
            "nu_horario": "19:59:00",
            "st_observacao": "Teste",
            "bl_ativo": 1,
            "bl_jogo": 1,
            "id_jogo": 1,
            "jogo": {
                "id_jogo": null,
                "st_nome": null,
                "st_descricao": null,
                "dt_lancamento": null,
                "st_estilo": null,
                "st_video": null,
                "st_ingresso": null,
                "nu_vaga": null,
                "st_plataforma": null,
                "st_regra": null,
                "bl_campeonato": null,
                "st_classificacaoindicativa": null,
                "st_plataformacampeonato": null,
                "nu_quantidadejogadores": null,
                "datahorario": [],
                "imagens": []
            }
        },
        {
            "id_agenda": 1,
            "st_nome": "Teste",
            "st_descricao": "Teste",
            "st_local": "Teste",
            "dt_data": "2022-02-16",
            "nu_horario": "19:59:00",
            "st_observacao": "Teste",
            "bl_ativo": 1,
            "bl_jogo": 1,
            "id_jogo": 1,
            "jogo": {
                "id_jogo": null,
                "st_nome": null,
                "st_descricao": null,
                "dt_lancamento": null,
                "st_estilo": null,
                "st_video": null,
                "st_ingresso": null,
                "nu_vaga": null,
                "st_plataforma": null,
                "st_regra": null,
                "bl_campeonato": null,
                "st_classificacaoindicativa": null,
                "st_plataformacampeonato": null,
                "nu_quantidadejogadores": null,
                "datahorario": [],
                "imagens": []
            }
        },
        {
            "id_agenda": 1,
            "st_nome": "Teste",
            "st_descricao": "Teste",
            "st_local": "Teste",
            "dt_data": "2022-02-16",
            "nu_horario": "19:59:00",
            "st_observacao": "Teste",
            "bl_ativo": 1,
            "bl_jogo": 1,
            "id_jogo": 1,
            "jogo": {
                "id_jogo": null,
                "st_nome": null,
                "st_descricao": null,
                "dt_lancamento": null,
                "st_estilo": null,
                "st_video": null,
                "st_ingresso": null,
                "nu_vaga": null,
                "st_plataforma": null,
                "st_regra": null,
                "bl_campeonato": null,
                "st_classificacaoindicativa": null,
                "st_plataformacampeonato": null,
                "nu_quantidadejogadores": null,
                "datahorario": [],
                "imagens": []
            }
        }
    ];
