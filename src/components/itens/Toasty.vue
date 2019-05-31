<template>
    <div>
        <img id="toasty" class="toasty"
             src="https://camo.githubusercontent.com/4679adc9c608c6cb860717347c87c5daf5154006/68747470733a2f2f7777772e64726f70626f782e636f6d2f732f33316930777073757264396a7269722f746f617374792e706e673f7261773d31">
    </div>
</template>

<script>
    export default {
        name: "Toasty",
        methods: {
            triggerToasty: function () {
                this.audio.play();
                document.getElementById('toasty').classList.add('toasty-in');
                setTimeout(function () {
                    document.getElementById('toasty').classList.add('toasty-out');
                    setTimeout(function () {
                        document.getElementById('toasty').classList.remove('toasty-in', 'toasty-out');
                    }, 500);
                }, 500);
            }
        },
        data: function () {
            return {
                audio: new Audio('https://s3-eu-west-1.amazonaws.com/wdildnproject2/toasty.mp3')
            }
        },
        mounted: function () {
            var self = this;
            var allowedKeys = {
                37: 'left',
                38: 'up',
                39: 'right',
                40: 'down',
            };

            // Sequência para executar o toasty.
            var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right'];
            var konamiCodePosition = 0;

            document.addEventListener('keydown', function (e) {
                var key = allowedKeys[e.keyCode];
                var requiredKey = konamiCode[konamiCodePosition];

                if (key === requiredKey) {
                    konamiCodePosition++;
                    if (konamiCodePosition === konamiCode.length) {
                        self.triggerToasty();
                        konamiCodePosition = 0;
                    }
                } else {
                    konamiCodePosition = 0;
                }
            });

        }
    }
</script>

<style lang="scss" scoped>

    .toasty {
        position: fixed;
        z-index: 1;
        bottom: 0;
        right: 0;
        display: none;
    }

    @keyframes trigger-toasty-in {
        from {
            right: -25%;
        }
        to {
            right: 0;
        }
    }

    @keyframes trigger-toasty-out {
        from {
            right: 0;
        }
        to {
            right: -50%;
        }
    }

    .toasty-in {
        animation: trigger-toasty-in .5s;
        display: block;
    }

    .toasty-out {
        animation: trigger-toasty-out .5s;
        display: block;
    }

</style>