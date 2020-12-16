        function init() {
            let orderOfRun = [0, 1, 2, 3, 5, 7, 11, 10, 9, 8, 6, 4];
            let reward = [100, 1000, 10000, 100000, 10000, 100001, 100001, 99999, 9999, 9999, 9999, 99, 99];
            let i = 0;
            let timeClip = 100;
            let count = 0;
            // let randomNum = Math.floor((Math.random() * 15) + 10);
            let randomNum;

            let btn = document.getElementById("btn");
            let block = document.getElementsByClassName("bb");
            console.log(btn);

            btn.addEventListener("click", function(e) {
                randomNum = Math.floor((Math.random() * 15) + 10);
                console.log(randomNum);
                btn.disabled = true;
                timer = setTimeout(spin, timeClip);
            });

            function spin() {
                block[orderOfRun[(i % 12)]].style.backgroundColor = 'red';
                if (i !== 0) {
                    block[orderOfRun[(i - 1) % 12]].style.backgroundColor = 'pink';
                }
                i++;
                count++;
                if (count > randomNum)
                    timeClip += 50;
                if (timeClip < 500) {
                    timer = setTimeout(spin, timeClip);
                } else {
                    count = 0;
                    btn.disabled = false;
                    timeClip = 100;
                    console.log(reward[i % 13] + " " + i);
                }

            }
        }

        window.addEventListener('load', init);