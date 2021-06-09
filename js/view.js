var audio = new Audio(); //这里的路径写上mp3文件在项目中的绝对路径

var View = (function () {
    var tileContainer = $('.tile-container')[0];
    var scoreContainer = $('.score-container')[0];
    var scoreDom = $('.score-container .score')[0];
    var scoreAddition = $('.score-addition')[0];
    var bestDom = $('.best-container .best')[0];
    var failureContainer = $('.failure-container')[0];
    var winningContainer = $('.winning-container')[0];
    var aCount = 0;
    var iCount = 0;
    audio.play();
    var View = function () {

    };

    View.prototype = {
        setup: function () {
            failureContainer.classList.remove('action');
            winningContainer.classList.remove('action');
            this.updateScore(data.score);
            this.updateBest();
        },
        restart: function () {
            tileContainer.innerHTML = "";

        },
        resize: function () {
            var _this = this;
            data.cell.forEach(function (el, index) {
                var tile = _this.getTile(index);
                if (!tile) return;
                var pos = _this.getPos(indexToPos(index));
                _this.setPos(tile, pos);
            });
        },
        failure: function () {
            failureContainer.classList.add('action');
            setTimeout(function () {
                window.location.href = "./quiz";

            }, 2000);
        },
        winning: function () {
            winningContainer.classList.add('action');
            setTimeout(function () {
                window.location.href = "./quiz";

            }, 2000);
        },
        restoreTile: function () {
            var _this = this;
            data.cell.forEach(function (el, index) {
                if (el.val !== 0) {
                    _this.appear(index);
                }
            });
        },
        addScoreAnimation: function (score) {
            if (!score) return;
            scoreAddition.innerHTML = '+' + score;
            scoreAddition.classList.add('action');
            setTimeout(function () {
                scoreAddition.classList.remove('action');
            }, 500);
        },
        updateScore: function (score) {
            scoreDom.innerHTML = data.score;
            this.addScoreAnimation(score);
        },
        updateBest: function () {
            bestDom.innerHTML = data.best;

        },
        setInfo: function (elem, pos, index) {
            elem.style.left = pos.left + 'px';
            elem.style.top = pos.top + 'px';
            elem.setAttribute('data-index', index);
        },
        getTile: function (index) {
            return $(`.tile[data-index='${index}']`)[0];
        },
        getPos: function (pos) {
            var gridCell = $(`.grid-row:nth-child(${pos.y+1}) .grid-cell:nth-child(${pos.x+1})`)[0];
            return {
                left: gridCell.offsetLeft,
                top: gridCell.offsetTop,
            };
        },
        setPos: function (elem, pos) {
            elem.style.left = pos.left + 'px';
            elem.style.top = pos.top + 'px';
        },
        createTileHTML: function (obj) {
            var tile = document.createElement('div');
            tile.className = obj.classNames;
            switch (localStorage.Level) {
                case "1":

                    switch (obj.val) {
                        case 2:
                            tile.innerHTML = "あ";
                            if (aCount >= 20 && audio.paused) {
                                audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/a.mp3";
                                audio.play();
                                aCount = 0;
                            } else {
                                aCount++;
                            }
                            break;
                        case 4:
                            tile.innerHTML = "い";
                            if (iCount >= 10 && audio.paused) {
                                audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/i.mp3";
                                audio.play();
                                iCount = 0;
                            }
                            iCount++;
                            break;
                        case 8:
                            tile.innerHTML = "う";
                            break;
                        case 16:
                            tile.innerHTML = "え";
                            break;
                        case 32:
                            tile.innerHTML = "お";
                            break;
                        case 64:
                            tile.innerHTML = "か";
                            break;
                        case 128:
                            tile.innerHTML = "き";
                            break;
                        case 256:
                            tile.innerHTML = "く";
                            break;
                        case 512:
                            tile.innerHTML = "け";
                            break;
                        case 1024:
                            tile.innerHTML = "こ";
                            break;
                        case 2048:
                            tile.innerHTML = "fin";
                            break;
                    }
                    break;
                case "2":
                    switch (obj.val) {
                        case 2:
                            tile.innerHTML = "さ";
                            audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/sa.mp3";
                            audio.play();
                            break;
                        case 4:
                            tile.innerHTML = "し";
                            if (iCount % 3 == 0) {
                                audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/shi.mp3";
                                audio.play();
                            }
                            iCount++;

                            break;
                        case 8:
                            tile.innerHTML = "す";
                            break;
                        case 16:
                            tile.innerHTML = "せ";
                            break;
                        case 32:
                            tile.innerHTML = "そ";
                            break;
                        case 64:
                            tile.innerHTML = "た";
                            break;
                        case 128:
                            tile.innerHTML = "ち";
                            break;
                        case 256:
                            tile.innerHTML = "つ";
                            break;
                        case 512:
                            tile.innerHTML = "て";
                            break;
                        case 1024:
                            tile.innerHTML = "と";
                            break;
                        case 2048:
                            tile.innerHTML = "fin";
                            break;
                    }
                    break;
                case "3":
                    switch (obj.val) {
                        case 2:
                            tile.innerHTML = "な";
                            audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/na.mp3";
                            audio.play();
                            break;
                        case 4:
                            tile.innerHTML = "に";
                            if (iCount % 3 == 0) {
                                audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/ni.mp3";
                                audio.play();
                            }
                            iCount++;
                            break;
                        case 8:
                            tile.innerHTML = "ぬ";
                            break;
                        case 16:
                            tile.innerHTML = "ね";
                            break;
                        case 32:
                            tile.innerHTML = "の";
                            break;
                        case 64:
                            tile.innerHTML = "は";
                            break;
                        case 128:
                            tile.innerHTML = "ひ";
                            break;
                        case 256:
                            tile.innerHTML = "ふ";
                            break;
                        case 512:
                            tile.innerHTML = "へ";
                            break;
                        case 1024:
                            tile.innerHTML = "ほ";
                            break;
                        case 2048:
                            tile.innerHTML = "fin";
                            break;
                    }
                    break;
                case "4":
                    switch (obj.val) {
                        case 2:
                            tile.innerHTML = "ま";
                            audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/ma.mp3";
                            audio.play();
                            break;
                        case 4:
                            tile.innerHTML = "み";
                            if (iCount % 3 == 0) {
                                audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/mi.mp3";
                                audio.play();
                            }
                            iCount++;
                            break;
                        case 8:
                            tile.innerHTML = "む";
                            break;
                        case 16:
                            tile.innerHTML = "め";
                            break;
                        case 32:
                            tile.innerHTML = "も";
                            break;
                        case 64:
                            tile.innerHTML = "や";
                            break;
                        case 128:
                            tile.innerHTML = "い";
                            break;
                        case 256:
                            tile.innerHTML = "ゆ";
                            break;
                        case 512:
                            tile.innerHTML = "え";
                            break;
                        case 1024:
                            tile.innerHTML = "よ";
                            break;
                        case 2048:
                            tile.innerHTML = "fin";
                            break;
                    }
                    break;
                case "5":
                    switch (obj.val) {
                        case 2:
                            tile.innerHTML = "ら";
                            audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/ra.mp3";
                            audio.play();
                            break;
                        case 4:
                            tile.innerHTML = "り";
                            if (iCount % 3 == 0) {
                                audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/ri.mp3";
                                audio.play();
                            }
                            iCount++;
                            break;
                        case 8:
                            tile.innerHTML = "る";
                            break;
                        case 16:
                            tile.innerHTML = "れ";
                            break;
                        case 32:
                            tile.innerHTML = "ろ";
                            break;
                        case 64:
                            tile.innerHTML = "わ";
                            break;
                        case 128:
                            tile.innerHTML = "い";
                            break;
                        case 256:
                            tile.innerHTML = "う";
                            break;
                        case 512:
                            tile.innerHTML = "え";
                            break;
                        case 1024:
                            tile.innerHTML = "を";
                            break;
                        case 2048:
                            tile.innerHTML = "ん";
                            break;
                    }
                    break;
            }

            tile.setAttribute('data-index', obj.index);
            tile.setAttribute('data-val', obj.val);
            this.setPos(tile, obj.pos);
            return tile;
        },
        appear: function (index) {
            var last = data.cell[index];
            var pos = this.getPos(indexToPos(index));
            var newTile = this.createTileHTML({
                val: last.val,
                pos: pos,
                index: index,
                classNames: " tile new-tile",
            });
            tileContainer.appendChild(newTile);
        },
        remove: function (index) {
            var tile = this.getTile(index);
            tile.parentElement.removeChild(tile);
        },
        move: function (old_index, index) {
            var tile = this.getTile(old_index);
            var pos = this.getPos(indexToPos(index));
            this.setInfo(tile, pos, index);
        },
        updateVal: function (index) {
            var tile = this.getTile(index);
            var val = data.cell[index].val;
            tile.setAttribute('data-val', val);
            switch (localStorage.Level) {
                case "1":

                    switch (val) {

                        case 4:
                            tile.innerHTML = "い";
                            if (iCount >= 10 && audio.paused) {
                                audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/i.mp3";
                                audio.play();
                                iCount = 0;
                            }
                            iCount++;
                            break;
                        case 8:
                            tile.innerHTML = "う";
                            if (audio.paused) {
                                audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/u.mp3";
                                audio.play();
                            }

                            break;
                        case 16:
                            tile.innerHTML = "え";
                            if (audio.paused) {
                                audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/e.mp3";
                                audio.play();
                            }
                            break;
                        case 32:
                            tile.innerHTML = "お";
                            if (audio.paused) {
                                audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/o.mp3";
                                audio.play();
                            }
                            break;
                        case 64:
                            tile.innerHTML = "か";
                            audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/ka.mp3";
                            audio.play();
                            break;
                        case 128:
                            tile.innerHTML = "き";
                            audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/ki.mp3";
                            audio.play();
                            break;
                        case 256:
                            tile.innerHTML = "く";
                            audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/ku.mp3";
                            audio.play();
                            break;
                        case 512:
                            tile.innerHTML = "け";
                            audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/ke.mp3";
                            audio.play();
                            break;
                        case 1024:
                            tile.innerHTML = "こ";
                            audio.src = "https://koroshiya-image-host.oss-cn-shenzhen.aliyuncs.com/sound/sound/ko.mp3";
                            audio.play();
                            break;
                        case 2048:
                            tile.innerHTML = "fin";
                            break;
                    }
                    break;
                case "2":
                    switch (val) {

                        case 4:
                            tile.innerHTML = "し";
                            break;
                        case 8:
                            tile.innerHTML = "す";
                            break;
                        case 16:
                            tile.innerHTML = "せ";
                            break;
                        case 32:
                            tile.innerHTML = "そ";
                            break;
                        case 64:
                            tile.innerHTML = "た";
                            break;
                        case 128:
                            tile.innerHTML = "ち";
                            break;
                        case 256:
                            tile.innerHTML = "つ";
                            break;
                        case 512:
                            tile.innerHTML = "て";
                            break;
                        case 1024:
                            tile.innerHTML = "と";
                            break;
                        case 2048:
                            tile.innerHTML = "fin";
                            break;
                    }
                    break;
                case "3":
                    switch (val) {
                        case 2:
                            tile.innerHTML = "な";
                            break;
                        case 4:
                            tile.innerHTML = "に";
                            break;
                        case 8:
                            tile.innerHTML = "ぬ";
                            break;
                        case 16:
                            tile.innerHTML = "ね";
                            break;
                        case 32:
                            tile.innerHTML = "の";
                            break;
                        case 64:
                            tile.innerHTML = "は";
                            break;
                        case 128:
                            tile.innerHTML = "ひ";
                            break;
                        case 256:
                            tile.innerHTML = "ふ";
                            break;
                        case 512:
                            tile.innerHTML = "へ";
                            break;
                        case 1024:
                            tile.innerHTML = "ほ";
                            break;
                        case 2048:
                            tile.innerHTML = "fin";
                            break;
                    }
                    break;
                case "4":
                    switch (val) {
                        case 2:
                            tile.innerHTML = "ま";
                            break;
                        case 4:
                            tile.innerHTML = "み";
                            break;
                        case 8:
                            tile.innerHTML = "む";
                            break;
                        case 16:
                            tile.innerHTML = "め";
                            break;
                        case 32:
                            tile.innerHTML = "も";
                            break;
                        case 64:
                            tile.innerHTML = "や";
                            break;
                        case 128:
                            tile.innerHTML = "い";
                            break;
                        case 256:
                            tile.innerHTML = "ゆ";
                            break;
                        case 512:
                            tile.innerHTML = "え";
                            break;
                        case 1024:
                            tile.innerHTML = "よ";
                            break;
                        case 2048:
                            tile.innerHTML = "fin";
                            break;
                    }
                    break;
                case "5":
                    switch (val) {
                        case 2:
                            tile.innerHTML = "ら";
                            break;
                        case 4:
                            tile.innerHTML = "り";
                            break;
                        case 8:
                            tile.innerHTML = "る";
                            break;
                        case 16:
                            tile.innerHTML = "れ";
                            break;
                        case 32:
                            tile.innerHTML = "ろ";
                            break;
                        case 64:
                            tile.innerHTML = "わ";
                            break;
                        case 128:
                            tile.innerHTML = "い";
                            break;
                        case 256:
                            tile.innerHTML = "う";
                            break;
                        case 512:
                            tile.innerHTML = "え";
                            break;
                        case 1024:
                            tile.innerHTML = "を";
                            break;
                        case 2048:
                            tile.innerHTML = "ん";
                            break;
                    }
                    break;
            }

            tile.classList.add('addition');
            setTimeout(function () {
                tile.classList.remove('addition');
                tile.classList.remove('new-tile');
            }, 300);
        },
    }

    return View;

})();