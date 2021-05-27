var View = (function () {
    var gameLevel = 0;
    var tileContainer = $('.tile-container')[0];
    var scoreContainer = $('.score-container')[0];
    var scoreDom = $('.score-container .score')[0];
    var scoreAddition = $('.score-addition')[0];
    var bestDom = $('.best-container .score')[0];
    var failureContainer = $('.failure-container')[0];
    var winningContainer = $('.winning-container')[0];

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
        },
        winning: function () {
            winningContainer.classList.add('action');
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
            }
        },
        setPos: function (elem, pos) {
            elem.style.left = pos.left + 'px';
            elem.style.top = pos.top + 'px';
        },
        createTileHTML: function (obj) {
            var tile = document.createElement('div');
            tile.className = obj.classNames;
            switch (obj.val) {
                case 2:
                    tile.innerHTML = "あ";
                    break;
                case 4:
                    tile.innerHTML = "い";
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
            switch (val) {
                case 2:
                    tile.innerHTML = "あ";
                    break;
                case 4:
                    tile.innerHTML = "い";
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

            tile.classList.add('addition');
            setTimeout(function () {
                tile.classList.remove('addition');
                tile.classList.remove('new-tile');
            }, 300);
        },
    }

    return View;

})();