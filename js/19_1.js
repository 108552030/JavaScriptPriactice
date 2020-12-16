        let orderOfRun = [0, 1, 2, 3, 5, 7, 11, 10, 9, 8, 6, 4];
        var i = 0;
        var timeClip = 100;

        function init() {
            let btn = document.getElementById("btn");
            let block = document.getElementsByClassName("bb");
            let printReward = document.getElementsByClassName("middleBlock");

            console.log(printReward);
            btn.addEventListener("click", function(e) {
                btn.disabled = true;
                timer = setInterval(changeBlockColor, timeClip);
            });

            function changeBlockColor() {
                block[orderOfRun[(i % 12)]].style.backgroundColor = 'red';
                if (i !== 0) {
                    block[orderOfRun[(i - 1) % 12]].style.backgroundColor = 'pink';
                }

                i++;
                // if (i >= orderOfRun.length) {
                //     clearInterval(timer);
                timeClip += 100;
                //     if (timeClip < 1000) {
                //         timer = setInterval(changeBlockColor, timeClip);
                //     }
                // i = 0;
                // }

            }
        }

        window.addEventListener('load', init);