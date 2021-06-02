<?PHP
Session_Start();

?>
<html>

<head>
    <meta charset="UTF-8">
    <script src="js/jquery-3.6.0.min.js"></script>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/keyframes.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/media.css">
    <link rel="shortcut icon" href="./res/icon.ico">
    <title>五十音2048</title>
    <script>
        $(document).ready(function() {
            console.log(localStorage.userName);
            if (localStorage.userName == "") {
                window.location.href = "index.php";

            }
        });
    </script>;
</head>

<body>

    <div class="container">
        <div class="heading">
            <h1 class="title">
                <a href="">五十音2048</a>
            </h1>
            <div class="scores-container">
                <div class="score-container">
                    <p class="title">SCORE</p>
                    <P class="score">0</P>
                    <div class="score-addition">
                        +4
                    </div>
                </div>
                <div class="best-container">
                    <p class="title">BEST</p>
                    <P class="best" id="best">0</P>
                </div>
            </div>
        </div>

        <div class="game-intro">
            <a href="" class="restart-btn">Restart</a>
            <a href="" class="revoke-btn">Revoke</a>
            <h2 class="subtitle">
                2048与あいうえお
            </h2>
            <p class="above-game">
                Play a game to remember <strong>Hiragana</strong>!
            </p>
        </div>
        <div class="game-container">
            <div class="grid-container">
                <div class="grid-row">
                    <div class="grid-cell"></div>
                    <div class="grid-cell"></div>
                    <div class="grid-cell"></div>
                    <div class="grid-cell"></div>
                </div>
                <div class="grid-row">
                    <div class="grid-cell"></div>
                    <div class="grid-cell"></div>
                    <div class="grid-cell"></div>
                    <div class="grid-cell"></div>
                </div>
                <div class="grid-row">
                    <div class="grid-cell"></div>
                    <div class="grid-cell"></div>
                    <div class="grid-cell"></div>
                    <div class="grid-cell"></div>
                </div>
                <div class="grid-row">
                    <div class="grid-cell"></div>
                    <div class="grid-cell"></div>
                    <div class="grid-cell"></div>
                    <div class="grid-cell"></div>
                </div>
            </div>
            <div class="tile-container">

            </div>
            <div class="failure-container pop-container">
                <p>:(</span></p>
                <p>FIALURE</p>
            </div>
            <div class="winning-container pop-container">
                <p>:)</p>
                <p>WINNING</p>
            </div>
        </div>
        <p id="userName"><?php echo "Player : " . $_SESSION["userName"] ?></P>

        <div class="footer">
            <span>
                <p>Crafted by 2018031701027 熊一鹏</p>
                <a href="http://www.koroshiya.club/">@Koroshiya</a>/<a href="https://github.com/Koroshiya71/koroshiya-s-2048">GitHub</a>
            </span>

        </div>
    </div>
    <script src="js/config.js"></script>
    <script src="js/data.js"></script>
    <script src="js/utils.js"></script>
    <script src="js/event.js"></script>
    <script src="js/view.js"></script>
    <script src="js/game.js"></script>
    <script src="js/main.js"></script>

</body>

</html>