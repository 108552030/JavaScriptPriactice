        function init() {
            const orderOfRun = [0, 1, 2, 3, 5, 7, 11, 10, 9, 8, 6, 4];
            const reward = [100, 1000, 10000, 100000, 10000, 100001, 100001, 99999, 9999, 9999, 9999, 99, 99];
            let i = 0;
            let timeClip = 100;
            let count = 0;
            // let randomNum = Math.floor((Math.random() * 15) + 10);
            let randomNum;

            let btn = document.getElementById("btn");
            let block = document.getElementsByClassName("block");
            let whiteSpace = document.getElementsByClassName("whiteSpace");
            console.log(whiteSpace);

            btn.addEventListener("click", function(e) {
                whiteSpace[0].innerText = "";
                whiteSpace[1].innerText = "";
                randomNum = Math.floor((Math.random() * 15) + 10);
                console.log(randomNum);
                btn.disabled = true;
                timer = setTimeout(spin, timeClip);
            });

            function spin() {
                block[orderOfRun[(i % 12)]].style.backgroundColor = '#FFBB77';
                if (i !== 0) {
                    block[orderOfRun[(i - 1) % 12]].style.backgroundColor = '#F37C22';
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
                    whiteSpace[0].innerText = "You Got";
                    whiteSpace[1].innerText = reward[i % 13];
                }
            }
        }

        window.addEventListener('load', init);