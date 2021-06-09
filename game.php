<?PHP
Session_Start();

?>
<html>

<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/keyframes.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/media.css">
    <link rel="shortcut icon" href="./res/icon.ico">
    <title>五十音2048</title>


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
            <div class="choice-container">
                <button class="choiceBtn" id="choice1">あ行 か行</button>
                <button class="choiceBtn" id="choice2">さ行 た行</button>
                <button class="choiceBtn" id="choice3">な行 は行</button>
                <button class="choiceBtn" id="choice4">ま行 や行</button>
                <button class="choiceBtn" id="choice5">ら行 わ行</button>

            </div>
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
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

</body>
<script>
    var view = new View();
    var game = new Game();
    game.init(view);
    event(game);
    var myHasStarted = localStorage.userName + "HasStarted";
    $(document).ready(function() {

        if (localStorage.lastTime) {
            if (Date.now() - localStorage.lastTime >= 300000) {
                localStorage.lastTime = Date.now();
                localStorage.userName = "";
            }
        } else {
            localStorage.lastTime = Date.now();

        }

        if (localStorage.userName == "") {
            window.location.href = "index.php";
        }
        if (localStorage.haveStarted == "false") {
            $(".choice-container").show();
            $(".tile-container").hide();
            $(".grid-container").hide();
            $(".winning-container").hide();
            $(".failure-container").hide();
        } else {
            $(".choice-container").hide();
            switch (localStorage.Level) {
                case "1":
                    audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/a.mp3";
                    break;
                case "2":
                    audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/sa.mp3";
                    break;
                case "3":
                    audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/na.mp3";
                    break;
                case "4":
                    audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/ma.mp3";
                    break;
                case "5":
                    audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/ra.mp3";
                    break;


            }
            audio.play();
        }
        var myBest = document.getElementById("userName").innerText + "bestScore";
        if (getLocalStorage(myBest).length > 0) {
            $("#best").text(getLocalStorage(myBest));
        } else
            $("#best").text(0);

        console.log(getLocalStorage(myBest));
    });
    $("#choice1").click(function() {
        localStorage.Level = 1;
        game.initCell();
        game.restart();

        $(".tile-container").show();
        $(".grid-container").show();
        $(".winning-container").show();
        $(".failure-container").show();
        $(".choice-container").hide();
        localStorage.haveStarted = true;
        console.log(localStorage.Level);

    });
    $("#choice2").click(function() {
        localStorage.Level = 2;
        game.initCell();
        game.restart();

        $(".tile-container").show();
        $(".grid-container").show();
        $(".winning-container").show();
        $(".failure-container").show();
        $(".choice-container").hide();
        localStorage.haveStarted = true;
        console.log(localStorage.Level);

    });
    $("#choice3").click(function() {
        localStorage.Level = 3;
        game.initCell();
        game.restart();

        $(".tile-container").show();
        $(".grid-container").show();
        $(".winning-container").show();
        $(".failure-container").show();
        $(".choice-container").hide();
        localStorage.haveStarted = true;
        console.log(localStorage.Level);

    });
    $("#choice4").click(function() {
        localStorage.Level = 4;
        game.initCell();
        game.restart();

        $(".tile-container").show();
        $(".grid-container").show();
        $(".winning-container").show();
        $(".failure-container").show();
        $(".choice-container").hide();
        localStorage.haveStarted = true;
        console.log(localStorage.Level);

    });
    $("#choice5").click(function() {
        localStorage.Level = 5;
        game.initCell();
        game.restart();
        audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/a.mp3";
        audio.play();
        $(".tile-container").show();
        $(".grid-container").show();
        $(".winning-container").show();
        $(".failure-container").show();
        $(".choice-container").hide();
        localStorage.haveStarted = true;
        console.log(localStorage.Level);

    });
</script>;

</html>