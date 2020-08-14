(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["NicommentJS"] = factory();
	else
		root["NicommentJS"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NicommentJS; });
/* harmony import */ var _module_Comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/Comment */ "./src/module/Comment.ts");
/* harmony import */ var _module_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/config */ "./src/module/config.ts");


//nicommentJSメインクラス
class NicommentJS {
    /**
     *
     * @param id canvasのID
     * @param width canvasの幅
     * @param height canvasの高さ
     * @param option オプション
     */
    constructor(id, width, height, option) {
        //引数チェック
        this.checkArgs(id, width, height);
        //context
        this.ctx = this._getContext(id, width, height);
        //サイズ
        this.canvasSize = new _module_Comment__WEBPACK_IMPORTED_MODULE_0__["Size"]({ height: height, width: width });
        //メタ情報
        this.meta = new Meta();
        //表示時間
        this.duration = option ? option.duration ? option.duration : _module_config__WEBPACK_IMPORTED_MODULE_1__["default"].duration : _module_config__WEBPACK_IMPORTED_MODULE_1__["default"].duration;
        //自動更新
        this.mainLayerName = option ? option.layerName ? option.layerName : _module_config__WEBPACK_IMPORTED_MODULE_1__["default"].defaultLayer : _module_config__WEBPACK_IMPORTED_MODULE_1__["default"].defaultLayer;
        //サイズ・フォント
        this.lineHeight = option ? option.lineheght ? option.lineheght : _module_config__WEBPACK_IMPORTED_MODULE_1__["default"].lineHeight : _module_config__WEBPACK_IMPORTED_MODULE_1__["default"].lineHeight; //表示時間
        this.lines = {
            big: option ? option.bigLines ? option.bigLines : _module_config__WEBPACK_IMPORTED_MODULE_1__["default"].bigLines : _module_config__WEBPACK_IMPORTED_MODULE_1__["default"].bigLines,
            medium: option ? option.mediumLines ? option.mediumLines : _module_config__WEBPACK_IMPORTED_MODULE_1__["default"].mediumLines : _module_config__WEBPACK_IMPORTED_MODULE_1__["default"].mediumLines,
            small: option ? option.smallLines ? option.smallLines : _module_config__WEBPACK_IMPORTED_MODULE_1__["default"].smallLines : _module_config__WEBPACK_IMPORTED_MODULE_1__["default"].smallLines
        };
        this.fixedLines = { big: _module_config__WEBPACK_IMPORTED_MODULE_1__["default"].fix.big, medium: _module_config__WEBPACK_IMPORTED_MODULE_1__["default"].fix.medium, small: _module_config__WEBPACK_IMPORTED_MODULE_1__["default"].fix.smal };
        this.fonrSize = this._getFontSize(height, this.lines); //fintSIze一覧
        this.fixedFonrSize = this._getFontSize(height, this.fixedLines);
        //レイヤー
        this.mainLayerName = option ? option.layerName ? option.layerName : _module_config__WEBPACK_IMPORTED_MODULE_1__["default"].defaultLayer : _module_config__WEBPACK_IMPORTED_MODULE_1__["default"].defaultLayer;
        this.layers = new Map();
        this.layers.set(this.mainLayerName, new _module_Comment__WEBPACK_IMPORTED_MODULE_0__["Layer"](this.ctx, this.canvasSize, this.lines, this.fonrSize, this.fixedFonrSize, this.duration, this.lineHeight));
        this.total = 0;
        this.run = true;
        this.isPlay = true;
        //自動更新フラグ
        this.autoTickDisabled = option ? option.autoTickDisabled ? option.autoTickDisabled : false : false;
        if (!this.autoTickDisabled)
            this.tick();
    }
    /**
     * 引数チェック
     * @param id id
     * @param width width
     * @param height height
     */
    checkArgs(id, width, height) {
        if (!id)
            throw new Error(NicoExceptions.__INIT__.ARGUMENTS.NOT_EXIST.ID);
        if (!width)
            throw new Error(NicoExceptions.__INIT__.ARGUMENTS.NOT_EXIST.WIDTH);
        if (!height)
            throw new Error(NicoExceptions.__INIT__.ARGUMENTS.NOT_EXIST.HEIGHT);
        if (typeof width !== 'number')
            throw new Error(NicoExceptions.__INIT__.ARGUMENTS.NaN.WIDTH(width));
        if (typeof height !== 'number')
            throw new Error(NicoExceptions.__INIT__.ARGUMENTS.NaN.HEIGHT(height));
    }
    /**
     * コメントを追加する
     * @param text 表示するコメント
     * @param option　オプション。;
     */
    send(text, option) {
        let customAttr = new Map();
        const layer = option ? option.layer ? option.layer : this.mainLayerName : this.mainLayerName;
        const comType = option ? option.type ? option.type : 'naka' : 'naka';
        const comSize = option ? option.size ? option.size : 'medium' : 'medium';
        const color = option ? option.color ? option.color : '#fff' : '#fff';
        const bcolor = this.getBcolor(color);
        const vpos = option ? option.vpos ? option.vpos : 0 : 0;
        const fontName = option ? option.fontName ? option.fontName : _module_config__WEBPACK_IMPORTED_MODULE_1__["default"].defaultFont : _module_config__WEBPACK_IMPORTED_MODULE_1__["default"].defaultFont;
        const opacity = option ? option.opacity ? option.opacity : _module_config__WEBPACK_IMPORTED_MODULE_1__["default"].opacity : _module_config__WEBPACK_IMPORTED_MODULE_1__["default"].opacity;
        const full = option ? option.full ? option.full : false : false;
        const onDisposed = option ? option.onDisposed ? option.onDisposed : () => { } : () => { };
        this.total++;
        if (option !== undefined) {
            if (option.customAttr !== undefined) {
                customAttr = this._getAttr(option.customAttr);
            }
        }
        customAttr.set('color', color);
        customAttr.set('bcolor', bcolor);
        customAttr.set('fontName', fontName);
        customAttr.set('opacity', opacity);
        customAttr.set('full', full);
        const layerObj = this.layers.get(layer);
        if (layerObj !== undefined) {
            layerObj.add(text, this.total, customAttr, comType, comSize, { onDispased: onDisposed }, vpos);
        }
    }
    /**
     * 一時停止
     */
    pause() {
        this.isPlay = false;
    }
    /**
     * 再生
     */
    play() {
        this.isPlay = true;
    }
    /**
     * コメントを削除します
     * @param layer レイヤー
     */
    clear(layer) {
        if (layer) {
            const layerObj = this.layers.get(layer);
            if (layerObj !== undefined) {
                layerObj.clear();
            }
        }
        else {
            this.layers.forEach(layer => {
                layer.clear();
            });
        }
    }
    /**
     * 全ての処理を終了します
     */
    dispose() {
        this.run = false;
        this.isPlay = false;
        this.layers.forEach(layer => {
            layer.clear();
        });
        this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
        this.layers.clear();
    }
    /**
     * 属性を取得します
     * @param customAttr カスタム属性
     */
    _getAttr(customAttr) {
        const mapobj = new Map();
        for (const [key, value] of Object.entries(customAttr)) {
            mapobj.set(key, value);
        }
        return mapobj;
    }
    _getFontSize(height, lines) {
        const big = height / lines.big;
        const medium = height / lines.medium;
        const small = height / lines.small;
        return { big: big, medium: medium, small: small };
    }
    //getContext
    _getContext(id, width, height) {
        const elm = document.getElementById(id);
        if (!elm) {
            throw new Error(NicoExceptions.__INIT__.ELEMENT.NOT_EXIST(id));
        }
        else {
            elm.height = height;
            elm.width = width;
            elm.style.width = `${width}px`;
            elm.style.height = `${height}px`;
            const ctx = elm.getContext('2d');
            if (ctx !== null) {
                return ctx;
            }
            else {
                throw new Error();
            }
        }
    }
    /**
     * メインループ
     */
    tick(vpos, render) {
        if (this.meta.getCount() % 120 === 0) {
            //console.log('hello!')
            //console.dir(this.layers[0].getState())
        }
        if (this.isPlay) {
            this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
            this.layers.forEach(layer => {
                layer.tick(this.meta.getCount(), vpos, render);
            });
            this.meta.loop(); //インクリメント
        }
        if (this.run && !this.autoTickDisabled) {
            requestAnimationFrame(() => { this.tick(vpos); });
        }
        ;
    }
    //縁取り色を取得
    getBcolor(color) {
        switch (color) {
            case 'black':
            case '#000':
            case '#000000':
                return '#fff';
                break;
            default:
                return '#000';
        }
    }
    /**
     * 指定した位置に存在するコメントを取得します
     * @param x X座標
     * @param y Y座標
     */
    get(x, y) {
        let comment = undefined;
        this.layers.forEach(layer => {
            comment = layer.get(x, y);
            if (comment)
                return false;
        });
        return comment;
    }
}
//メタ情報
class Meta {
    //初期化
    constructor() {
        this.count = 0;
    }
    //カウントを増やす
    loop() {
        this.count++;
    }
    //カウントを取得
    getCount() {
        return this.count;
    }
}
/**
 * エラー
 */
const NicoExceptions = {
    __INIT__: {
        ARGUMENTS: {
            NOT_EXIST: {
                HEIGHT: '[ERR]argument "height" must be specified.',
                WIDTH: '[ERR]argument "width" must be specified.',
                ID: '[ERR]argument "id" must be specified.',
            },
            NaN: {
                HEIGHT: (value) => `[ERR]${value} is not a number. "height" mus be a number.`,
                WIDTH: (value) => `[ERR]${value} is not a number. "width" mus be a number.`,
            }
        },
        ELEMENT: {
            NOT_EXIST: (id) => { return `[ERR]Canvas Element which id is "${id}" was not found.`; },
            NOT_A_CANVAS_ELEMENT: (id) => { return `[ERR]Element which id is "${id}" is not a canvasHTML5 Element.`; }
        },
    }
};


/***/ }),

/***/ "./src/module/Comment.ts":
/*!*******************************!*\
  !*** ./src/module/Comment.ts ***!
  \*******************************/
/*! exports provided: CommentBase, Point, Size, Layer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentBase", function() { return CommentBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Size", function() { return Size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return Layer; });
/* harmony import */ var _utils_DataUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/DataUtils */ "./src/utils/DataUtils.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/module/config.ts");


//util
const datautl = new _utils_DataUtils__WEBPACK_IMPORTED_MODULE_0__["DataUtils"]();
//コメントオブジェクト
class CommentBase {
    constructor(param) {
        this.life = 0; //残りコマ数
        this.delta = 0; //1コマ当たりのX座標の変量
        this.left = 0; //X座標
        this.top = 0; //Y座標(原点は左上)
        this.reveal = 0; //コメントが画面右から完全に露出するまでのコマ数
        this.touch = 0; //コメントの左端が画面左に到達するまでのコマ数
        this.fixed = false; //固定フラグ
        this.type = param.option.mode; //タイプ
        this.customAttr = param.option.customAttr; //カスタム属性
        this.originalText = param.text;
        this.text = this._formatComment(param.text, this.type); //本文
        this.textForRender = this._formatRenderComment(this.text);
        this.textLength = Math.max(...this.text.map(text => text.length));
        this.maxLengthIndex = this.text.map(comment => comment.length).indexOf(this.textLength);
        this.commentNumber = param.commentNumber;
        this.color = param.option.color; //色
        this.borderColor = param.option.borderColor;
        this.lines = this._getLines(param.option.commentSize, param.lines);
        this.selfLines = this.text.length; //行数
        this.ctx = param.ctx;
        this.fontName = param.option.fontName; //フォント名
        this.opacity = param.option.opacity; //透過度
        this.full = param.option.full; //臨界点リサイズ
        this.canvasSize = param.canvasSize;
        this.canvasWidthFlash = param.canvasWidthFlash;
        //固定フラグ
        if (this.text.length >= this.lines) {
            this.fixed = true;
        }
        ;
        //vpos・表示時間
        this.vpos = param.option.vpos;
        this.duration = param.option.duration || _config__WEBPACK_IMPORTED_MODULE_1__["default"].duration;
        //フォント関係
        this.fontSizeString = param.option.commentSize;
        [this.fontSize, this.width, this.offsetY] = this._getFont(this.text[this.maxLengthIndex], this.canvasSize, this.canvasWidthFlash, param.option.commentSize, param.fontSize, param.fixedFontSize, this.type, param.option.lineheight);
        this.fontSizeString = param.option.commentSize;
        this.overallSize = this.fontSize * this.selfLines;
        this.alive = true; //生存フラグ
        this.onDisposed = param.onDisposed; //コールバック
        this._set(); //セット実行
    }
    //属性取得
    getProp(key) {
        return this.customAttr.get(key);
    }
    ;
    /**
     * 更新処理
     */
    tick(vpos) {
        if (vpos >= this.vpos + this.duration * 100) {
            this.alive = false;
            return;
        }
        this.life--;
        //nakaコメントの場合
        if (this.type === 'naka') {
            this.left -= this.delta;
            this.reveal--;
            this.touch--;
        }
        if (this.life < 0) {
            this.kill();
        }
    }
    /**
     * コメントの生存フラグを強制的に降ろします
     */
    kill() {
        this.alive = false;
        this.onDisposed();
    }
    //セット
    _set() {
        this.life = 0; //残りコマ数
        this.left = 0; //X座標
        this.top = 0; //Y座標(原点は左上)
        this.delta = 0; //1コマ当たりのX座標の変量
        this.reveal = 0; //コメントが画面右から完全に露出するまでのコマ数
        this.touch = 0; //コメントの左端が画面左に到達するまでのコマ数
        switch (this.type) {
            case 'naka':
                this._setNaka();
                break;
            case 'shita':
            case 'ue':
                this._setShitaUe();
        }
    }
    //nakaコメント設定
    _setNaka() {
        this.life = _config__WEBPACK_IMPORTED_MODULE_1__["default"].fps * this.duration;
        this.left = this.canvasSize.width;
        this.delta = (this.canvasSize.width + this.width) / this.life;
        this.reveal = this.width / this.delta;
        this.touch = this.canvasSize.width / this.delta;
    }
    /**
     * shit・ueコメントを設定する
     * @param width canvasの横幅
     * @param duration コメント表示時間
     */
    _setShitaUe() {
        this.life = _config__WEBPACK_IMPORTED_MODULE_1__["default"].fps * this.duration;
        if (this.fixed) {
            this.left = (this.canvasSize.width - this.width) / 2;
            //this.left = this.canvasSize.width / 2;
        }
        else {
            this.left = this.canvasSize.width / 2;
        }
    }
    //fontを決定する
    _getFont(text, canvasSize, flashWidth, commentSize, fontSize, fixedFontSize, type, lineHeight) {
        let originalFont = this._getSize(commentSize, fontSize);
        let font = originalFont;
        //・改行リサイズ
        //overallSizeに相当する高さが、描写領域の1/3を上回る場合に、
        //リサイズを行う。
        if (originalFont * this.selfLines > canvasSize.height / 3) {
            font = this._getSize(commentSize, fixedFontSize);
        }
        this.ctx.font = `${font}px "Yu Gothic"`;
        let comWidth = this.ctx.measureText(text).width;
        //・臨界幅リサイズ
        //コメントの最大幅が描写領域を上回る場合に、描写領域に収まるようにリサイズする
        if (comWidth > this.canvasSize.width && type !== 'naka' && !this.full) {
            font = this._modSize(originalFont, comWidth, this.canvasWidthFlash);
            this.ctx.font = `${font}px "Yu Gothic"`;
            comWidth = this.ctx.measureText(text).width;
        }
        const offsetY = type === 'shita' ? font * (lineHeight - 1) * -1 : font * (lineHeight - 1);
        return [font, comWidth, offsetY];
    }
    //フォントサイズ修正
    _modSize(font, width, canvasWidth) {
        return font * canvasWidth / width;
    }
    //改行リサイズ
    //fontSize取得
    _getSize(commentSize, fontSize) {
        switch (commentSize) {
            case 'big':
                return fontSize.big;
                break;
            case 'small':
                return fontSize.small;
                break;
            default:
                return fontSize.medium;
        }
    }
    /**
     * 行数を求める
     * @param size big/small/mediumのいずれか
     * @param allLines commentLines型のオブジェクト(それぞれのサイズについて行数を表す)
     */
    _getLines(size, allLines) {
        switch (size) {
            case 'big':
                return allLines.big;
            case 'medium':
                return allLines.medium;
            case 'small':
                return allLines.small;
        }
    }
    /**
     * コメントを整形します
     * @param origin コメント
     * @param commentPos コメントのタイプ
     */
    _formatComment(origin, commentPos) {
        let formated = datautl.splitter(origin, '\n');
        formated = this._deleteBlank(formated);
        formated = this._deleteFirstAndlastBlank(formated);
        formated = this._sortByType(formated, commentPos);
        return formated;
    }
    /**
     * 描写用コメントを整形します
     * @param origin コメント
     * @param commentPos コメントのタイプ
     */
    _formatRenderComment(origin) {
        let formated = [...origin];
        formated = this._deleteBlankLineFromEnd(origin);
        return formated;
    }
    /**
     * コメントから3回以上連続する改行を削除します。
     * @param comments コメントのリスト
     */
    _deleteBlank(commentList) {
        let count = 0;
        const deleted = [];
        //for...inループで回す 
        for (const text of commentList) {
            const isBlank = !text;
            if (isBlank) {
                count++;
            }
            else {
                count = 0;
            }
            if (count < 3) {
                deleted.push(text);
            }
        }
        return deleted;
    }
    /**
     * 最初と最後の空白行を削除します。
     * @param comments コメントのリスト
     */
    _deleteFirstAndlastBlank(comments) {
        const deleted = [...comments];
        for (const comment of comments) {
            if (!comment) {
                deleted.shift();
            }
            else {
                break;
            }
        }
        //後ろから
        const reversed = [...deleted].reverse();
        for (const comment of reversed) {
            if (!comment) {
                deleted.pop();
            }
            else {
                break;
            }
        }
        return deleted;
    }
    /**
     * コメントの位置によってソートします
     * @param comments コメントのリスト
     * @param type コメントの位置
     */
    _sortByType(comments, type) {
        return type === 'shita' ? comments.reverse() : comments;
    }
    /**
     * 空行を削除します
     * @param comments コメント
     */
    _deleteBlankLineFromEnd(comments) {
        const formated = [...comments];
        const reversed = [...comments].reverse();
        for (const line of reversed) {
            const isBlank = /^\s+$/.test(line) || line.length === 0;
            if (isBlank) {
                formated.pop();
            }
            else {
                break;
            }
        }
        if (this.customAttr.get('commentNumber') === 955601) {
            console.log(formated);
        }
        return formated;
    }
}
//座標情報
class Point {
    constructor(pos) {
        this.x = pos.x;
        this.y = pos.y;
    }
}
//height:width
class Size {
    constructor(size) {
        this.height = size.height;
        this.width = size.width;
    }
}
//レイヤークラス
class Layer {
    //初期化
    constructor(ctx, canvasSize, lines, commentSize, commentSizeFixed, duration, lineHeight) {
        this.onDisaposed = () => { };
        this.ctx = ctx;
        this.canvasSize = canvasSize;
        this.canvasWidthFlash = canvasSize.height / 3 * 4;
        this.lineHeight = lineHeight;
        this.lines = lines;
        this.fonrSize = commentSize;
        this.fixedFonrSize = commentSizeFixed;
        this.duration = duration;
        this.comments = [];
        this.maxlines = lines.small;
        this.naka = new NakaLine(lines.small, canvasSize);
        this.shita = [];
        this.ue = [];
    }
    /**
     * レイヤーにコメントを追加する
     * @param text コメント本文
     * @param commentNumber コメ番
     * @param customAttr カスタム属性
     * @param type naka/shita/ueのいずれか
     * @param size big/medium/largeのいずれか
     * @param vpos VPOS
     */
    add(text, commentNumber, customAttr, type = 'naka', size = 'medium', callBack, vpos) {
        if (this.comments.length > 20)
            return;
        const oprions = {
            mode: type,
            color: customAttr.get('color') || '#fff',
            borderColor: customAttr.get('bcolor') || '#000',
            duration: this.duration,
            customAttr: customAttr,
            commentSize: size,
            lineheight: this.lineHeight,
            vpos: vpos,
            fontName: customAttr.get('fontName'),
            opacity: customAttr.get('opacity'),
            full: customAttr.get('full'),
        };
        const param = {
            text: text,
            ctx: this.ctx,
            canvasSize: this.canvasSize,
            canvasWidthFlash: this.canvasWidthFlash,
            fontSize: this.fonrSize,
            fixedFontSize: this.fixedFonrSize,
            lines: this.lines,
            option: oprions,
            commentNumber: commentNumber,
            onDisposed: callBack.onDispased,
        };
        const commentObj = new CommentBase(param);
        switch (commentObj.type) {
            case 'naka':
                this.naka.add(commentObj);
                break;
            case 'shita':
                this._appendShita(commentObj);
                break;
            case 'ue':
                this._appendUe(commentObj);
                break;
        }
    }
    /**
     * 更新処理
     * @param counter ループ回数
     */
    tick(counter, vpos, render) {
        const currentVpos = vpos ? vpos : 0;
        const doRender = render === false ? false : true;
        if (this.comments.length) {
            this.comments.forEach(comment => {
                if (doRender)
                    this._render(comment);
                comment.tick(currentVpos);
            });
        }
        //nakaコメ
        if (doRender) {
            this.naka.getList().forEach(comment => {
                this._render(comment);
            });
        }
        this.naka.tick(currentVpos);
        this._clean();
    }
    /**
     * 描写処理
     * @param comment コメント
     */
    _render(comment) {
        this.ctx.textBaseline = 'top';
        //揃え位置
        switch (true) {
            case comment.type === 'naka' || comment.fixed:
                this.ctx.textAlign = 'left';
                break;
            default:
                this.ctx.textAlign = 'center';
                break;
        }
        this.ctx.fillStyle = `${comment.color}`;
        this.ctx.shadowColor = comment.borderColor;
        this.ctx.shadowOffsetX = 1.5;
        this.ctx.shadowOffsetY = 1.5;
        this.ctx.globalAlpha = comment.opacity;
        this.ctx.font = `bold ${comment.fontSize}px "${comment.fontName}"`;
        //描写時に考慮する正負
        const deltaMinusOrPlus = comment.type === 'shita' ? -1 : 1;
        comment.textForRender.forEach((text, index) => {
            this.ctx.fillText(text, comment.left, comment.top + comment.fontSize * index * deltaMinusOrPlus + comment.offsetY);
        });
    }
    /**
     * コメントを削除する
     * @param  option 最初のコメントまたは、最後のコメントのみを削除することが出来ます。
     */
    clear(option) {
        switch (option) {
            case undefined:
                this.comments.forEach(comment => comment.kill());
                this.comments = [];
                this.naka = new NakaLine(this.lines.small, this.canvasSize);
                this.ue = [];
                this.shita = [];
                break;
            case 'first':
                if (this.comments.length)
                    this.comments[0].kill();
                break;
            case 'last':
                if (this.comments.length)
                    this.comments[this.comments.length - 1].kill();
        }
    }
    /**
     * コメント配列からフラグが降りているコメントを削除
     */
    _clean() {
        this.comments = this.comments.filter(commet => commet.alive);
        //nakaコメ
        this.naka.clean();
    }
    /**
     * shitaコメントを追加する
     * @param comment コメントオブジェクト
     */
    _appendShita(comment) {
        //shitaコメント
        let bottom = this.canvasSize.height;
        for (let i = 0; i < this.maxlines; i++) {
            if (this.shita[i] && !comment.fixed) {
                bottom -= this.shita[i].overallSize;
            }
            ;
            switch (true) {
                case this.shita.length === 0:
                case this.shita.length <= i:
                case !this.shita[i].alive:
                //固定コメントであった場合
                case comment.fixed:
                //コメントが表示限界を超える場合
                case bottom - comment.overallSize + comment.offsetY < 0:
                    break;
                default:
                    continue;
            }
            ;
            if (comment.fixed) {
                comment.top = this.canvasSize.height - comment.fontSize;
            }
            else if (bottom - comment.overallSize < 0) {
                comment.top = Math.random() * (this.canvasSize.height - comment.overallSize + comment.offsetY);
            }
            else {
                comment.top = bottom - comment.overallSize;
            }
            ;
            this.shita[i] = comment;
            this.comments.push(comment);
            break;
        }
        ;
    }
    /**
     * shitaコメントを追加する
     * @param comment コメントオブジェクト
     */
    _appendUe(comment) {
        //shitaコメント
        let top = 0;
        for (let i = 0; i < this.maxlines; i++) {
            if (this.ue[i] && !comment.fixed) {
                top += this.ue[i].overallSize;
            }
            ;
            switch (true) {
                case this.ue.length === 0:
                case this.ue.length <= i:
                case !this.ue[i].alive:
                case comment.fixed:
                case top + comment.overallSize > this.canvasSize.height:
                    break;
                default:
                    continue;
            }
            ;
            if (comment.fixed) {
                comment.top = 0;
            }
            else if (this.ue[i]) {
                comment.top = Math.random() * (this.canvasSize.height - comment.overallSize);
            }
            else {
                comment.top = top;
            }
            ;
            this.ue[i] = comment;
            this.comments.push(comment);
            break;
        }
        ;
    }
    /**
     * 指定した位置に存在するコメントを取得します
     * @param x X座標
     * @param y Y座標
     */
    get(x, y) {
        const naka = this.naka.get(x, y);
        if (naka !== undefined) {
            return naka;
        }
        else {
            return this.comments.find(comment => {
                const half = comment.width / 2;
                const isX = x > comment.left - half && x < comment.left + half;
                const isY = y > comment.top && y < comment.top + comment.overallSize;
                if (isX && isY) {
                    return true;
                }
            });
        }
        ;
    }
}
/**
 * nakaコメント
 */
class NakaLine {
    constructor(smallLines, size) {
        //配列初期化
        this.comments = [];
        this.lastCommentStream = [];
        //配列長
        this.allines = smallLines;
        //canvasサイズ
        this.canvasSize = size;
    }
    /**
     * nakaコメントを追加する
     * @param comment コメント
     */
    add(comment) {
        let top = 0;
        for (let i = 0; i < this.allines; i++) {
            const line = this.lastCommentStream[i];
            switch (true) {
                //i行目にコメントが無い場合
                case (line === undefined):
                //固定コメであった場合
                case (comment.fixed):
                //最終追加コメントが全て表示されていて、なおかつ追いつかない場合
                case (line.reveal < 0 && line.life < comment.touch):
                //コメントのtopがcanvasの高さを超えている
                case (top + comment.overallSize > this.canvasSize.height):
                    break;
                //それ以外は次の行を確認
                default:
                    top += line.overallSize;
                    continue;
            }
            ;
            //座標設定
            if (comment.fixed) {
                comment.top = 0;
            }
            else if (top + comment.overallSize > this.canvasSize.height) {
                //弾幕モード
                comment.top = Math.random() * (this.canvasSize.height - comment.overallSize);
            }
            else {
                comment.top = top;
            }
            this.comments.push(comment);
            this.lastCommentStream[i] = comment;
            break;
        }
    }
    /**
     * 流れたコメントを削除する
     */
    clean() {
        this.comments = this.comments.filter(comment => comment.alive);
    }
    /**
     * 更新処理
     */
    tick(vpos) {
        this.comments.forEach(comment => {
            comment.tick(vpos);
        });
    }
    /**
     * コメントのリストを取得する
     */
    getList() {
        return this.comments;
    }
    /**
     * コメントを取得する
     * @param x X座標
     * @param y Y座標
     *
     */
    get(x, y) {
        return this.comments.find(comment => {
            const isX = x > comment.left && x < comment.left + comment.width;
            const isY = y > comment.top && y < comment.top + comment.overallSize;
            if (isX && isY) {
                return true;
            }
        });
    }
}


/***/ }),

/***/ "./src/module/config.ts":
/*!******************************!*\
  !*** ./src/module/config.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//定数
/* harmony default export */ __webpack_exports__["default"] = ({
    fps: 60,
    duration: 3,
    lineHeight: 1.2,
    bigLines: 8,
    mediumLines: 11,
    smallLines: 16,
    fix: {
        smal: 38,
        big: 16,
        medium: 25,
    },
    defaultColor: '#fff',
    defaultLayer: 'base',
    defaultFont: 'MS PGothic',
    opacity: 1,
});


/***/ }),

/***/ "./src/utils/DataUtils.ts":
/*!********************************!*\
  !*** ./src/utils/DataUtils.ts ***!
  \********************************/
/*! exports provided: DataUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataUtils", function() { return DataUtils; });
class DataUtils {
    splitter(value, splitBy = ',') {
        if (value) {
            return value.split(splitBy);
        }
        else {
            return [];
        }
        ;
    }
    //0埋め
    padding(num, digit = 2, paddString = '0') {
        if (num < 10 ** digit) {
            const origin = num.toString();
            let padded = origin;
            for (let i = 0; i < digit - origin.length; i++) {
                padded = paddString + padded;
            }
            return padded;
        }
        else {
            return num.toString();
        }
    }
    /**
     * ネストされた配列を返します。
     * @param len 配列長
     */
    createNestedArray(len) {
        const arr = [];
        for (let i = 0; i < len; i++) {
            arr.push([]);
        }
        return arr;
    }
    createArray(len) {
        const arr = [];
        arr.length = len;
        return arr;
    }
    /**
     * VPOSから時間を計算します
     * @param vpos VPOS
     */
    calcVPOS(vpos) {
        const second = Math.floor(vpos / 100);
        const minute = Math.floor(second / 60);
        const extra = Math.floor(second % 60);
        return { ms: { min: minute, sec: extra }, sec: second };
    }
}


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OaWNvbW1lbnRKUy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvLi9zcmMvbW9kdWxlL0NvbW1lbnQudHMiLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvLi9zcmMvbW9kdWxlL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9OaWNvbW1lbnRKUy8uL3NyYy91dGlscy9EYXRhVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDSDtBQUM1QztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsb0RBQUksRUFBRSwrQkFBK0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLHNEQUFhLFlBQVksc0RBQWE7QUFDM0c7QUFDQSw0RUFBNEUsc0RBQWEsZ0JBQWdCLHNEQUFhO0FBQ3RIO0FBQ0EseUVBQXlFLHNEQUFhLGNBQWMsc0RBQWEsWUFBWTtBQUM3SDtBQUNBLDhEQUE4RCxzREFBYSxZQUFZLHNEQUFhO0FBQ3BHLHVFQUF1RSxzREFBYSxlQUFlLHNEQUFhO0FBQ2hILG9FQUFvRSxzREFBYSxjQUFjLHNEQUFhO0FBQzVHO0FBQ0EsMkJBQTJCLE1BQU0sc0RBQWEsa0JBQWtCLHNEQUFhLG9CQUFvQixzREFBYTtBQUM5Ryw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBLDRFQUE0RSxzREFBYSxnQkFBZ0Isc0RBQWE7QUFDdEg7QUFDQSxnREFBZ0QscURBQUs7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLHNEQUFhLGVBQWUsc0RBQWE7QUFDL0csbUVBQW1FLHNEQUFhLFdBQVcsc0RBQWE7QUFDeEc7QUFDQSxtRkFBbUYsRUFBRSxVQUFVO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLHlCQUF5QjtBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsTUFBTTtBQUN2QyxrQ0FBa0MsT0FBTztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSx5Q0FBeUMsaUJBQWlCLEVBQUU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJDQUEyQyxNQUFNO0FBQ2pELDBDQUEwQyxNQUFNO0FBQ2hEO0FBQ0EsU0FBUztBQUNUO0FBQ0EsZ0NBQWdDLDRDQUE0QyxHQUFHLGtCQUFrQixFQUFFO0FBQ25HLDJDQUEyQyxxQ0FBcUMsR0FBRyxpQ0FBaUM7QUFDcEgsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDVjtBQUNyQztBQUNBLG9CQUFvQiwwREFBUztBQUM3QjtBQUNPO0FBQ1A7QUFDQSxzQkFBc0I7QUFDdEIsdUJBQXVCO0FBQ3ZCLHNCQUFzQjtBQUN0QixxQkFBcUI7QUFDckIsd0JBQXdCO0FBQ3hCLHVCQUF1QjtBQUN2QiwyQkFBMkI7QUFDM0Isc0NBQXNDO0FBQ3RDLGtEQUFrRDtBQUNsRDtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsOENBQThDO0FBQzlDLDRDQUE0QztBQUM1QyxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELCtDQUFhO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsMkNBQTJDO0FBQzNDLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIscUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDeEIsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0NBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsS0FBSztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsY0FBYztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpQkFBaUIsTUFBTSxpQkFBaUI7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNybkJBO0FBQUE7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDakJGO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMkJBQTJCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU0sMEJBQTBCO0FBQ2hEO0FBQ0EiLCJmaWxlIjoiTmljb21tZW50SlMuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTmljb21tZW50SlNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTmljb21tZW50SlNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IFNpemUsIExheWVyIH0gZnJvbSAnLi9tb2R1bGUvQ29tbWVudCc7XHJcbmltcG9ydCBkZWZhdWx0Q29uZmlnIGZyb20gJy4vbW9kdWxlL2NvbmZpZyc7XHJcbi8vbmljb21tZW50SlPjg6HjgqTjg7Pjgq/jg6njgrlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmljb21tZW50SlMge1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGlkIGNhbnZhc+OBrklEXHJcbiAgICAgKiBAcGFyYW0gd2lkdGggY2FudmFz44Gu5bmFXHJcbiAgICAgKiBAcGFyYW0gaGVpZ2h0IGNhbnZhc+OBrumrmOOBlVxyXG4gICAgICogQHBhcmFtIG9wdGlvbiDjgqrjg5fjgrfjg6fjg7NcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoaWQsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbikge1xyXG4gICAgICAgIC8v5byV5pWw44OB44Kn44OD44KvXHJcbiAgICAgICAgdGhpcy5jaGVja0FyZ3MoaWQsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIC8vY29udGV4dFxyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5fZ2V0Q29udGV4dChpZCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgLy/jgrXjgqTjgrpcclxuICAgICAgICB0aGlzLmNhbnZhc1NpemUgPSBuZXcgU2l6ZSh7IGhlaWdodDogaGVpZ2h0LCB3aWR0aDogd2lkdGggfSk7XHJcbiAgICAgICAgLy/jg6Hjgr/mg4XloLFcclxuICAgICAgICB0aGlzLm1ldGEgPSBuZXcgTWV0YSgpO1xyXG4gICAgICAgIC8v6KGo56S65pmC6ZaTXHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IG9wdGlvbiA/IG9wdGlvbi5kdXJhdGlvbiA/IG9wdGlvbi5kdXJhdGlvbiA6IGRlZmF1bHRDb25maWcuZHVyYXRpb24gOiBkZWZhdWx0Q29uZmlnLmR1cmF0aW9uO1xyXG4gICAgICAgIC8v6Ieq5YuV5pu05pawXHJcbiAgICAgICAgdGhpcy5tYWluTGF5ZXJOYW1lID0gb3B0aW9uID8gb3B0aW9uLmxheWVyTmFtZSA/IG9wdGlvbi5sYXllck5hbWUgOiBkZWZhdWx0Q29uZmlnLmRlZmF1bHRMYXllciA6IGRlZmF1bHRDb25maWcuZGVmYXVsdExheWVyO1xyXG4gICAgICAgIC8v44K144Kk44K644O744OV44Kp44Oz44OIXHJcbiAgICAgICAgdGhpcy5saW5lSGVpZ2h0ID0gb3B0aW9uID8gb3B0aW9uLmxpbmVoZWdodCA/IG9wdGlvbi5saW5laGVnaHQgOiBkZWZhdWx0Q29uZmlnLmxpbmVIZWlnaHQgOiBkZWZhdWx0Q29uZmlnLmxpbmVIZWlnaHQ7IC8v6KGo56S65pmC6ZaTXHJcbiAgICAgICAgdGhpcy5saW5lcyA9IHtcclxuICAgICAgICAgICAgYmlnOiBvcHRpb24gPyBvcHRpb24uYmlnTGluZXMgPyBvcHRpb24uYmlnTGluZXMgOiBkZWZhdWx0Q29uZmlnLmJpZ0xpbmVzIDogZGVmYXVsdENvbmZpZy5iaWdMaW5lcyxcclxuICAgICAgICAgICAgbWVkaXVtOiBvcHRpb24gPyBvcHRpb24ubWVkaXVtTGluZXMgPyBvcHRpb24ubWVkaXVtTGluZXMgOiBkZWZhdWx0Q29uZmlnLm1lZGl1bUxpbmVzIDogZGVmYXVsdENvbmZpZy5tZWRpdW1MaW5lcyxcclxuICAgICAgICAgICAgc21hbGw6IG9wdGlvbiA/IG9wdGlvbi5zbWFsbExpbmVzID8gb3B0aW9uLnNtYWxsTGluZXMgOiBkZWZhdWx0Q29uZmlnLnNtYWxsTGluZXMgOiBkZWZhdWx0Q29uZmlnLnNtYWxsTGluZXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZml4ZWRMaW5lcyA9IHsgYmlnOiBkZWZhdWx0Q29uZmlnLmZpeC5iaWcsIG1lZGl1bTogZGVmYXVsdENvbmZpZy5maXgubWVkaXVtLCBzbWFsbDogZGVmYXVsdENvbmZpZy5maXguc21hbCB9O1xyXG4gICAgICAgIHRoaXMuZm9uclNpemUgPSB0aGlzLl9nZXRGb250U2l6ZShoZWlnaHQsIHRoaXMubGluZXMpOyAvL2ZpbnRTSXpl5LiA6KanXHJcbiAgICAgICAgdGhpcy5maXhlZEZvbnJTaXplID0gdGhpcy5fZ2V0Rm9udFNpemUoaGVpZ2h0LCB0aGlzLmZpeGVkTGluZXMpO1xyXG4gICAgICAgIC8v44Os44Kk44Ok44O8XHJcbiAgICAgICAgdGhpcy5tYWluTGF5ZXJOYW1lID0gb3B0aW9uID8gb3B0aW9uLmxheWVyTmFtZSA/IG9wdGlvbi5sYXllck5hbWUgOiBkZWZhdWx0Q29uZmlnLmRlZmF1bHRMYXllciA6IGRlZmF1bHRDb25maWcuZGVmYXVsdExheWVyO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLnNldCh0aGlzLm1haW5MYXllck5hbWUsIG5ldyBMYXllcih0aGlzLmN0eCwgdGhpcy5jYW52YXNTaXplLCB0aGlzLmxpbmVzLCB0aGlzLmZvbnJTaXplLCB0aGlzLmZpeGVkRm9uclNpemUsIHRoaXMuZHVyYXRpb24sIHRoaXMubGluZUhlaWdodCkpO1xyXG4gICAgICAgIHRoaXMudG90YWwgPSAwO1xyXG4gICAgICAgIHRoaXMucnVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzUGxheSA9IHRydWU7XHJcbiAgICAgICAgLy/oh6rli5Xmm7TmlrDjg5Xjg6njgrBcclxuICAgICAgICB0aGlzLmF1dG9UaWNrRGlzYWJsZWQgPSBvcHRpb24gPyBvcHRpb24uYXV0b1RpY2tEaXNhYmxlZCA/IG9wdGlvbi5hdXRvVGlja0Rpc2FibGVkIDogZmFsc2UgOiBmYWxzZTtcclxuICAgICAgICBpZiAoIXRoaXMuYXV0b1RpY2tEaXNhYmxlZClcclxuICAgICAgICAgICAgdGhpcy50aWNrKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOW8leaVsOODgeOCp+ODg+OCr1xyXG4gICAgICogQHBhcmFtIGlkIGlkXHJcbiAgICAgKiBAcGFyYW0gd2lkdGggd2lkdGhcclxuICAgICAqIEBwYXJhbSBoZWlnaHQgaGVpZ2h0XHJcbiAgICAgKi9cclxuICAgIGNoZWNrQXJncyhpZCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIGlmICghaWQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5BUkdVTUVOVFMuTk9UX0VYSVNULklEKTtcclxuICAgICAgICBpZiAoIXdpZHRoKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuX19JTklUX18uQVJHVU1FTlRTLk5PVF9FWElTVC5XSURUSCk7XHJcbiAgICAgICAgaWYgKCFoZWlnaHQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5BUkdVTUVOVFMuTk9UX0VYSVNULkhFSUdIVCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5BUkdVTUVOVFMuTmFOLldJRFRIKHdpZHRoKSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBoZWlnaHQgIT09ICdudW1iZXInKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuX19JTklUX18uQVJHVU1FTlRTLk5hTi5IRUlHSFQoaGVpZ2h0KSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOCkui/veWKoOOBmeOCi1xyXG4gICAgICogQHBhcmFtIHRleHQg6KGo56S644GZ44KL44Kz44Oh44Oz44OIXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9u44CA44Kq44OX44K344On44Oz44CCO1xyXG4gICAgICovXHJcbiAgICBzZW5kKHRleHQsIG9wdGlvbikge1xyXG4gICAgICAgIGxldCBjdXN0b21BdHRyID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGNvbnN0IGxheWVyID0gb3B0aW9uID8gb3B0aW9uLmxheWVyID8gb3B0aW9uLmxheWVyIDogdGhpcy5tYWluTGF5ZXJOYW1lIDogdGhpcy5tYWluTGF5ZXJOYW1lO1xyXG4gICAgICAgIGNvbnN0IGNvbVR5cGUgPSBvcHRpb24gPyBvcHRpb24udHlwZSA/IG9wdGlvbi50eXBlIDogJ25ha2EnIDogJ25ha2EnO1xyXG4gICAgICAgIGNvbnN0IGNvbVNpemUgPSBvcHRpb24gPyBvcHRpb24uc2l6ZSA/IG9wdGlvbi5zaXplIDogJ21lZGl1bScgOiAnbWVkaXVtJztcclxuICAgICAgICBjb25zdCBjb2xvciA9IG9wdGlvbiA/IG9wdGlvbi5jb2xvciA/IG9wdGlvbi5jb2xvciA6ICcjZmZmJyA6ICcjZmZmJztcclxuICAgICAgICBjb25zdCBiY29sb3IgPSB0aGlzLmdldEJjb2xvcihjb2xvcik7XHJcbiAgICAgICAgY29uc3QgdnBvcyA9IG9wdGlvbiA/IG9wdGlvbi52cG9zID8gb3B0aW9uLnZwb3MgOiAwIDogMDtcclxuICAgICAgICBjb25zdCBmb250TmFtZSA9IG9wdGlvbiA/IG9wdGlvbi5mb250TmFtZSA/IG9wdGlvbi5mb250TmFtZSA6IGRlZmF1bHRDb25maWcuZGVmYXVsdEZvbnQgOiBkZWZhdWx0Q29uZmlnLmRlZmF1bHRGb250O1xyXG4gICAgICAgIGNvbnN0IG9wYWNpdHkgPSBvcHRpb24gPyBvcHRpb24ub3BhY2l0eSA/IG9wdGlvbi5vcGFjaXR5IDogZGVmYXVsdENvbmZpZy5vcGFjaXR5IDogZGVmYXVsdENvbmZpZy5vcGFjaXR5O1xyXG4gICAgICAgIGNvbnN0IGZ1bGwgPSBvcHRpb24gPyBvcHRpb24uZnVsbCA/IG9wdGlvbi5mdWxsIDogZmFsc2UgOiBmYWxzZTtcclxuICAgICAgICBjb25zdCBvbkRpc3Bvc2VkID0gb3B0aW9uID8gb3B0aW9uLm9uRGlzcG9zZWQgPyBvcHRpb24ub25EaXNwb3NlZCA6ICgpID0+IHsgfSA6ICgpID0+IHsgfTtcclxuICAgICAgICB0aGlzLnRvdGFsKys7XHJcbiAgICAgICAgaWYgKG9wdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb24uY3VzdG9tQXR0ciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjdXN0b21BdHRyID0gdGhpcy5fZ2V0QXR0cihvcHRpb24uY3VzdG9tQXR0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY3VzdG9tQXR0ci5zZXQoJ2NvbG9yJywgY29sb3IpO1xyXG4gICAgICAgIGN1c3RvbUF0dHIuc2V0KCdiY29sb3InLCBiY29sb3IpO1xyXG4gICAgICAgIGN1c3RvbUF0dHIuc2V0KCdmb250TmFtZScsIGZvbnROYW1lKTtcclxuICAgICAgICBjdXN0b21BdHRyLnNldCgnb3BhY2l0eScsIG9wYWNpdHkpO1xyXG4gICAgICAgIGN1c3RvbUF0dHIuc2V0KCdmdWxsJywgZnVsbCk7XHJcbiAgICAgICAgY29uc3QgbGF5ZXJPYmogPSB0aGlzLmxheWVycy5nZXQobGF5ZXIpO1xyXG4gICAgICAgIGlmIChsYXllck9iaiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxheWVyT2JqLmFkZCh0ZXh0LCB0aGlzLnRvdGFsLCBjdXN0b21BdHRyLCBjb21UeXBlLCBjb21TaXplLCB7IG9uRGlzcGFzZWQ6IG9uRGlzcG9zZWQgfSwgdnBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIDmmYLlgZzmraJcclxuICAgICAqL1xyXG4gICAgcGF1c2UoKSB7XHJcbiAgICAgICAgdGhpcy5pc1BsYXkgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5YaN55SfXHJcbiAgICAgKi9cclxuICAgIHBsYXkoKSB7XHJcbiAgICAgICAgdGhpcy5pc1BsYXkgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjgpLliYrpmaTjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBsYXllciDjg6zjgqTjg6Tjg7xcclxuICAgICAqL1xyXG4gICAgY2xlYXIobGF5ZXIpIHtcclxuICAgICAgICBpZiAobGF5ZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgbGF5ZXJPYmogPSB0aGlzLmxheWVycy5nZXQobGF5ZXIpO1xyXG4gICAgICAgICAgICBpZiAobGF5ZXJPYmogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbGF5ZXJPYmouY2xlYXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgICAgICBsYXllci5jbGVhcigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWFqOOBpuOBruWHpueQhuOCkue1guS6huOBl+OBvuOBmVxyXG4gICAgICovXHJcbiAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgIHRoaXMucnVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1BsYXkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgbGF5ZXIuY2xlYXIoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNTaXplLndpZHRoLCB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmxheWVycy5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlsZ7mgKfjgpLlj5blvpfjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBjdXN0b21BdHRyIOOCq+OCueOCv+ODoOWxnuaAp1xyXG4gICAgICovXHJcbiAgICBfZ2V0QXR0cihjdXN0b21BdHRyKSB7XHJcbiAgICAgICAgY29uc3QgbWFwb2JqID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGN1c3RvbUF0dHIpKSB7XHJcbiAgICAgICAgICAgIG1hcG9iai5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXBvYmo7XHJcbiAgICB9XHJcbiAgICBfZ2V0Rm9udFNpemUoaGVpZ2h0LCBsaW5lcykge1xyXG4gICAgICAgIGNvbnN0IGJpZyA9IGhlaWdodCAvIGxpbmVzLmJpZztcclxuICAgICAgICBjb25zdCBtZWRpdW0gPSBoZWlnaHQgLyBsaW5lcy5tZWRpdW07XHJcbiAgICAgICAgY29uc3Qgc21hbGwgPSBoZWlnaHQgLyBsaW5lcy5zbWFsbDtcclxuICAgICAgICByZXR1cm4geyBiaWc6IGJpZywgbWVkaXVtOiBtZWRpdW0sIHNtYWxsOiBzbWFsbCB9O1xyXG4gICAgfVxyXG4gICAgLy9nZXRDb250ZXh0XHJcbiAgICBfZ2V0Q29udGV4dChpZCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIGNvbnN0IGVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgICBpZiAoIWVsbSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuX19JTklUX18uRUxFTUVOVC5OT1RfRVhJU1QoaWQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsbS5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgICAgIGVsbS53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgICAgICBlbG0uc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XHJcbiAgICAgICAgICAgIGVsbS5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICBjb25zdCBjdHggPSBlbG0uZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgaWYgKGN0eCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN0eDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjg6HjgqTjg7Pjg6vjg7zjg5dcclxuICAgICAqL1xyXG4gICAgdGljayh2cG9zLCByZW5kZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5tZXRhLmdldENvdW50KCkgJSAxMjAgPT09IDApIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnaGVsbG8hJylcclxuICAgICAgICAgICAgLy9jb25zb2xlLmRpcih0aGlzLmxheWVyc1swXS5nZXRTdGF0ZSgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1BsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzU2l6ZS53aWR0aCwgdGhpcy5jYW52YXNTaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGF5ZXIudGljayh0aGlzLm1ldGEuZ2V0Q291bnQoKSwgdnBvcywgcmVuZGVyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMubWV0YS5sb29wKCk7IC8v44Kk44Oz44Kv44Oq44Oh44Oz44OIXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnJ1biAmJiAhdGhpcy5hdXRvVGlja0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7IHRoaXMudGljayh2cG9zKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxuICAgIC8v57iB5Y+W44KK6Imy44KS5Y+W5b6XXHJcbiAgICBnZXRCY29sb3IoY29sb3IpIHtcclxuICAgICAgICBzd2l0Y2ggKGNvbG9yKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JsYWNrJzpcclxuICAgICAgICAgICAgY2FzZSAnIzAwMCc6XHJcbiAgICAgICAgICAgIGNhc2UgJyMwMDAwMDAnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcjZmZmJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcjMDAwJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaMh+WumuOBl+OBn+S9jee9ruOBq+WtmOWcqOOBmeOCi+OCs+ODoeODs+ODiOOCkuWPluW+l+OBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIHggWOW6p+aomVxyXG4gICAgICogQHBhcmFtIHkgWeW6p+aomVxyXG4gICAgICovXHJcbiAgICBnZXQoeCwgeSkge1xyXG4gICAgICAgIGxldCBjb21tZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICBjb21tZW50ID0gbGF5ZXIuZ2V0KHgsIHkpO1xyXG4gICAgICAgICAgICBpZiAoY29tbWVudClcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gY29tbWVudDtcclxuICAgIH1cclxufVxyXG4vL+ODoeOCv+aDheWgsVxyXG5jbGFzcyBNZXRhIHtcclxuICAgIC8v5Yid5pyf5YyWXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgIH1cclxuICAgIC8v44Kr44Km44Oz44OI44KS5aKX44KE44GZXHJcbiAgICBsb29wKCkge1xyXG4gICAgICAgIHRoaXMuY291bnQrKztcclxuICAgIH1cclxuICAgIC8v44Kr44Km44Oz44OI44KS5Y+W5b6XXHJcbiAgICBnZXRDb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3VudDtcclxuICAgIH1cclxufVxyXG4vKipcclxuICog44Ko44Op44O8XHJcbiAqL1xyXG5jb25zdCBOaWNvRXhjZXB0aW9ucyA9IHtcclxuICAgIF9fSU5JVF9fOiB7XHJcbiAgICAgICAgQVJHVU1FTlRTOiB7XHJcbiAgICAgICAgICAgIE5PVF9FWElTVDoge1xyXG4gICAgICAgICAgICAgICAgSEVJR0hUOiAnW0VSUl1hcmd1bWVudCBcImhlaWdodFwiIG11c3QgYmUgc3BlY2lmaWVkLicsXHJcbiAgICAgICAgICAgICAgICBXSURUSDogJ1tFUlJdYXJndW1lbnQgXCJ3aWR0aFwiIG11c3QgYmUgc3BlY2lmaWVkLicsXHJcbiAgICAgICAgICAgICAgICBJRDogJ1tFUlJdYXJndW1lbnQgXCJpZFwiIG11c3QgYmUgc3BlY2lmaWVkLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIE5hTjoge1xyXG4gICAgICAgICAgICAgICAgSEVJR0hUOiAodmFsdWUpID0+IGBbRVJSXSR7dmFsdWV9IGlzIG5vdCBhIG51bWJlci4gXCJoZWlnaHRcIiBtdXMgYmUgYSBudW1iZXIuYCxcclxuICAgICAgICAgICAgICAgIFdJRFRIOiAodmFsdWUpID0+IGBbRVJSXSR7dmFsdWV9IGlzIG5vdCBhIG51bWJlci4gXCJ3aWR0aFwiIG11cyBiZSBhIG51bWJlci5gLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBFTEVNRU5UOiB7XHJcbiAgICAgICAgICAgIE5PVF9FWElTVDogKGlkKSA9PiB7IHJldHVybiBgW0VSUl1DYW52YXMgRWxlbWVudCB3aGljaCBpZCBpcyBcIiR7aWR9XCIgd2FzIG5vdCBmb3VuZC5gOyB9LFxyXG4gICAgICAgICAgICBOT1RfQV9DQU5WQVNfRUxFTUVOVDogKGlkKSA9PiB7IHJldHVybiBgW0VSUl1FbGVtZW50IHdoaWNoIGlkIGlzIFwiJHtpZH1cIiBpcyBub3QgYSBjYW52YXNIVE1MNSBFbGVtZW50LmA7IH1cclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBEYXRhVXRpbHMgfSBmcm9tICcuLi91dGlscy9EYXRhVXRpbHMnO1xyXG5pbXBvcnQgZGVmYXVsdENvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcbi8vdXRpbFxyXG5jb25zdCBkYXRhdXRsID0gbmV3IERhdGFVdGlscygpO1xyXG4vL+OCs+ODoeODs+ODiOOCquODluOCuOOCp+OCr+ODiFxyXG5leHBvcnQgY2xhc3MgQ29tbWVudEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IocGFyYW0pIHtcclxuICAgICAgICB0aGlzLmxpZmUgPSAwOyAvL+aui+OCiuOCs+ODnuaVsFxyXG4gICAgICAgIHRoaXMuZGVsdGEgPSAwOyAvLzHjgrPjg57lvZPjgZ/jgorjga5Y5bqn5qiZ44Gu5aSJ6YePXHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gMDsgLy9Y5bqn5qiZXHJcbiAgICAgICAgdGhpcy50b3AgPSAwOyAvL1nluqfmqJko5Y6f54K544Gv5bem5LiKKVxyXG4gICAgICAgIHRoaXMucmV2ZWFsID0gMDsgLy/jgrPjg6Hjg7Pjg4jjgYznlLvpnaLlj7PjgYvjgonlrozlhajjgavpnLLlh7rjgZnjgovjgb7jgafjga7jgrPjg57mlbBcclxuICAgICAgICB0aGlzLnRvdWNoID0gMDsgLy/jgrPjg6Hjg7Pjg4jjga7lt6bnq6/jgYznlLvpnaLlt6bjgavliLDpgZTjgZnjgovjgb7jgafjga7jgrPjg57mlbBcclxuICAgICAgICB0aGlzLmZpeGVkID0gZmFsc2U7IC8v5Zu65a6a44OV44Op44KwXHJcbiAgICAgICAgdGhpcy50eXBlID0gcGFyYW0ub3B0aW9uLm1vZGU7IC8v44K/44Kk44OXXHJcbiAgICAgICAgdGhpcy5jdXN0b21BdHRyID0gcGFyYW0ub3B0aW9uLmN1c3RvbUF0dHI7IC8v44Kr44K544K/44Og5bGe5oCnXHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbFRleHQgPSBwYXJhbS50ZXh0O1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRoaXMuX2Zvcm1hdENvbW1lbnQocGFyYW0udGV4dCwgdGhpcy50eXBlKTsgLy/mnKzmlodcclxuICAgICAgICB0aGlzLnRleHRGb3JSZW5kZXIgPSB0aGlzLl9mb3JtYXRSZW5kZXJDb21tZW50KHRoaXMudGV4dCk7XHJcbiAgICAgICAgdGhpcy50ZXh0TGVuZ3RoID0gTWF0aC5tYXgoLi4udGhpcy50ZXh0Lm1hcCh0ZXh0ID0+IHRleHQubGVuZ3RoKSk7XHJcbiAgICAgICAgdGhpcy5tYXhMZW5ndGhJbmRleCA9IHRoaXMudGV4dC5tYXAoY29tbWVudCA9PiBjb21tZW50Lmxlbmd0aCkuaW5kZXhPZih0aGlzLnRleHRMZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuY29tbWVudE51bWJlciA9IHBhcmFtLmNvbW1lbnROdW1iZXI7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IHBhcmFtLm9wdGlvbi5jb2xvcjsgLy/oibJcclxuICAgICAgICB0aGlzLmJvcmRlckNvbG9yID0gcGFyYW0ub3B0aW9uLmJvcmRlckNvbG9yO1xyXG4gICAgICAgIHRoaXMubGluZXMgPSB0aGlzLl9nZXRMaW5lcyhwYXJhbS5vcHRpb24uY29tbWVudFNpemUsIHBhcmFtLmxpbmVzKTtcclxuICAgICAgICB0aGlzLnNlbGZMaW5lcyA9IHRoaXMudGV4dC5sZW5ndGg7IC8v6KGM5pWwXHJcbiAgICAgICAgdGhpcy5jdHggPSBwYXJhbS5jdHg7XHJcbiAgICAgICAgdGhpcy5mb250TmFtZSA9IHBhcmFtLm9wdGlvbi5mb250TmFtZTsgLy/jg5Xjgqnjg7Pjg4jlkI1cclxuICAgICAgICB0aGlzLm9wYWNpdHkgPSBwYXJhbS5vcHRpb24ub3BhY2l0eTsgLy/pgI/pgY7luqZcclxuICAgICAgICB0aGlzLmZ1bGwgPSBwYXJhbS5vcHRpb24uZnVsbDsgLy/oh6jnlYzngrnjg6rjgrXjgqTjgrpcclxuICAgICAgICB0aGlzLmNhbnZhc1NpemUgPSBwYXJhbS5jYW52YXNTaXplO1xyXG4gICAgICAgIHRoaXMuY2FudmFzV2lkdGhGbGFzaCA9IHBhcmFtLmNhbnZhc1dpZHRoRmxhc2g7XHJcbiAgICAgICAgLy/lm7rlrprjg5Xjg6njgrBcclxuICAgICAgICBpZiAodGhpcy50ZXh0Lmxlbmd0aCA+PSB0aGlzLmxpbmVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZml4ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgLy92cG9z44O76KGo56S65pmC6ZaTXHJcbiAgICAgICAgdGhpcy52cG9zID0gcGFyYW0ub3B0aW9uLnZwb3M7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IHBhcmFtLm9wdGlvbi5kdXJhdGlvbiB8fCBkZWZhdWx0Q29uZmlnLmR1cmF0aW9uO1xyXG4gICAgICAgIC8v44OV44Kp44Oz44OI6Zai5L+CXHJcbiAgICAgICAgdGhpcy5mb250U2l6ZVN0cmluZyA9IHBhcmFtLm9wdGlvbi5jb21tZW50U2l6ZTtcclxuICAgICAgICBbdGhpcy5mb250U2l6ZSwgdGhpcy53aWR0aCwgdGhpcy5vZmZzZXRZXSA9IHRoaXMuX2dldEZvbnQodGhpcy50ZXh0W3RoaXMubWF4TGVuZ3RoSW5kZXhdLCB0aGlzLmNhbnZhc1NpemUsIHRoaXMuY2FudmFzV2lkdGhGbGFzaCwgcGFyYW0ub3B0aW9uLmNvbW1lbnRTaXplLCBwYXJhbS5mb250U2l6ZSwgcGFyYW0uZml4ZWRGb250U2l6ZSwgdGhpcy50eXBlLCBwYXJhbS5vcHRpb24ubGluZWhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5mb250U2l6ZVN0cmluZyA9IHBhcmFtLm9wdGlvbi5jb21tZW50U2l6ZTtcclxuICAgICAgICB0aGlzLm92ZXJhbGxTaXplID0gdGhpcy5mb250U2l6ZSAqIHRoaXMuc2VsZkxpbmVzO1xyXG4gICAgICAgIHRoaXMuYWxpdmUgPSB0cnVlOyAvL+eUn+WtmOODleODqeOCsFxyXG4gICAgICAgIHRoaXMub25EaXNwb3NlZCA9IHBhcmFtLm9uRGlzcG9zZWQ7IC8v44Kz44O844Or44OQ44OD44KvXHJcbiAgICAgICAgdGhpcy5fc2V0KCk7IC8v44K744OD44OI5a6f6KGMXHJcbiAgICB9XHJcbiAgICAvL+WxnuaAp+WPluW+l1xyXG4gICAgZ2V0UHJvcChrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXN0b21BdHRyLmdldChrZXkpO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDlh6bnkIZcclxuICAgICAqL1xyXG4gICAgdGljayh2cG9zKSB7XHJcbiAgICAgICAgaWYgKHZwb3MgPj0gdGhpcy52cG9zICsgdGhpcy5kdXJhdGlvbiAqIDEwMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsaXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5saWZlLS07XHJcbiAgICAgICAgLy9uYWth44Kz44Oh44Oz44OI44Gu5aC05ZCIXHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ25ha2EnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCAtPSB0aGlzLmRlbHRhO1xyXG4gICAgICAgICAgICB0aGlzLnJldmVhbC0tO1xyXG4gICAgICAgICAgICB0aGlzLnRvdWNoLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxpZmUgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMua2lsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI44Gu55Sf5a2Y44OV44Op44Kw44KS5by35Yi255qE44Gr6ZmN44KN44GX44G+44GZXHJcbiAgICAgKi9cclxuICAgIGtpbGwoKSB7XHJcbiAgICAgICAgdGhpcy5hbGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25EaXNwb3NlZCgpO1xyXG4gICAgfVxyXG4gICAgLy/jgrvjg4Pjg4hcclxuICAgIF9zZXQoKSB7XHJcbiAgICAgICAgdGhpcy5saWZlID0gMDsgLy/mrovjgorjgrPjg57mlbBcclxuICAgICAgICB0aGlzLmxlZnQgPSAwOyAvL1jluqfmqJlcclxuICAgICAgICB0aGlzLnRvcCA9IDA7IC8vWeW6p+aomSjljp/ngrnjga/lt6bkuIopXHJcbiAgICAgICAgdGhpcy5kZWx0YSA9IDA7IC8vMeOCs+ODnuW9k+OBn+OCiuOBrljluqfmqJnjga7lpInph49cclxuICAgICAgICB0aGlzLnJldmVhbCA9IDA7IC8v44Kz44Oh44Oz44OI44GM55S76Z2i5Y+z44GL44KJ5a6M5YWo44Gr6Zyy5Ye644GZ44KL44G+44Gn44Gu44Kz44Oe5pWwXHJcbiAgICAgICAgdGhpcy50b3VjaCA9IDA7IC8v44Kz44Oh44Oz44OI44Gu5bem56uv44GM55S76Z2i5bem44Gr5Yiw6YGU44GZ44KL44G+44Gn44Gu44Kz44Oe5pWwXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnbmFrYSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXROYWthKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc2hpdGEnOlxyXG4gICAgICAgICAgICBjYXNlICd1ZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRTaGl0YVVlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9uYWth44Kz44Oh44Oz44OI6Kit5a6aXHJcbiAgICBfc2V0TmFrYSgpIHtcclxuICAgICAgICB0aGlzLmxpZmUgPSBkZWZhdWx0Q29uZmlnLmZwcyAqIHRoaXMuZHVyYXRpb247XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy5jYW52YXNTaXplLndpZHRoO1xyXG4gICAgICAgIHRoaXMuZGVsdGEgPSAodGhpcy5jYW52YXNTaXplLndpZHRoICsgdGhpcy53aWR0aCkgLyB0aGlzLmxpZmU7XHJcbiAgICAgICAgdGhpcy5yZXZlYWwgPSB0aGlzLndpZHRoIC8gdGhpcy5kZWx0YTtcclxuICAgICAgICB0aGlzLnRvdWNoID0gdGhpcy5jYW52YXNTaXplLndpZHRoIC8gdGhpcy5kZWx0YTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogc2hpdOODu3Vl44Kz44Oh44Oz44OI44KS6Kit5a6a44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gd2lkdGggY2FudmFz44Gu5qiq5bmFXHJcbiAgICAgKiBAcGFyYW0gZHVyYXRpb24g44Kz44Oh44Oz44OI6KGo56S65pmC6ZaTXHJcbiAgICAgKi9cclxuICAgIF9zZXRTaGl0YVVlKCkge1xyXG4gICAgICAgIHRoaXMubGlmZSA9IGRlZmF1bHRDb25maWcuZnBzICogdGhpcy5kdXJhdGlvbjtcclxuICAgICAgICBpZiAodGhpcy5maXhlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnQgPSAodGhpcy5jYW52YXNTaXplLndpZHRoIC0gdGhpcy53aWR0aCkgLyAyO1xyXG4gICAgICAgICAgICAvL3RoaXMubGVmdCA9IHRoaXMuY2FudmFzU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLmNhbnZhc1NpemUud2lkdGggLyAyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vZm9udOOCkuaxuuWumuOBmeOCi1xyXG4gICAgX2dldEZvbnQodGV4dCwgY2FudmFzU2l6ZSwgZmxhc2hXaWR0aCwgY29tbWVudFNpemUsIGZvbnRTaXplLCBmaXhlZEZvbnRTaXplLCB0eXBlLCBsaW5lSGVpZ2h0KSB7XHJcbiAgICAgICAgbGV0IG9yaWdpbmFsRm9udCA9IHRoaXMuX2dldFNpemUoY29tbWVudFNpemUsIGZvbnRTaXplKTtcclxuICAgICAgICBsZXQgZm9udCA9IG9yaWdpbmFsRm9udDtcclxuICAgICAgICAvL+ODu+aUueihjOODquOCteOCpOOCulxyXG4gICAgICAgIC8vb3ZlcmFsbFNpemXjgavnm7jlvZPjgZnjgovpq5jjgZXjgYzjgIHmj4/lhpnpoJjln5/jga4xLzPjgpLkuIrlm57jgovloLTlkIjjgavjgIFcclxuICAgICAgICAvL+ODquOCteOCpOOCuuOCkuihjOOBhuOAglxyXG4gICAgICAgIGlmIChvcmlnaW5hbEZvbnQgKiB0aGlzLnNlbGZMaW5lcyA+IGNhbnZhc1NpemUuaGVpZ2h0IC8gMykge1xyXG4gICAgICAgICAgICBmb250ID0gdGhpcy5fZ2V0U2l6ZShjb21tZW50U2l6ZSwgZml4ZWRGb250U2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBgJHtmb250fXB4IFwiWXUgR290aGljXCJgO1xyXG4gICAgICAgIGxldCBjb21XaWR0aCA9IHRoaXMuY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xyXG4gICAgICAgIC8v44O76Ieo55WM5bmF44Oq44K144Kk44K6XHJcbiAgICAgICAgLy/jgrPjg6Hjg7Pjg4jjga7mnIDlpKfluYXjgYzmj4/lhpnpoJjln5/jgpLkuIrlm57jgovloLTlkIjjgavjgIHmj4/lhpnpoJjln5/jgavlj47jgb7jgovjgojjgYbjgavjg6rjgrXjgqTjgrrjgZnjgotcclxuICAgICAgICBpZiAoY29tV2lkdGggPiB0aGlzLmNhbnZhc1NpemUud2lkdGggJiYgdHlwZSAhPT0gJ25ha2EnICYmICF0aGlzLmZ1bGwpIHtcclxuICAgICAgICAgICAgZm9udCA9IHRoaXMuX21vZFNpemUob3JpZ2luYWxGb250LCBjb21XaWR0aCwgdGhpcy5jYW52YXNXaWR0aEZsYXNoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IGAke2ZvbnR9cHggXCJZdSBHb3RoaWNcImA7XHJcbiAgICAgICAgICAgIGNvbVdpZHRoID0gdGhpcy5jdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG9mZnNldFkgPSB0eXBlID09PSAnc2hpdGEnID8gZm9udCAqIChsaW5lSGVpZ2h0IC0gMSkgKiAtMSA6IGZvbnQgKiAobGluZUhlaWdodCAtIDEpO1xyXG4gICAgICAgIHJldHVybiBbZm9udCwgY29tV2lkdGgsIG9mZnNldFldO1xyXG4gICAgfVxyXG4gICAgLy/jg5Xjgqnjg7Pjg4jjgrXjgqTjgrrkv67mraNcclxuICAgIF9tb2RTaXplKGZvbnQsIHdpZHRoLCBjYW52YXNXaWR0aCkge1xyXG4gICAgICAgIHJldHVybiBmb250ICogY2FudmFzV2lkdGggLyB3aWR0aDtcclxuICAgIH1cclxuICAgIC8v5pS56KGM44Oq44K144Kk44K6XHJcbiAgICAvL2ZvbnRTaXpl5Y+W5b6XXHJcbiAgICBfZ2V0U2l6ZShjb21tZW50U2l6ZSwgZm9udFNpemUpIHtcclxuICAgICAgICBzd2l0Y2ggKGNvbW1lbnRTaXplKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JpZyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9udFNpemUuYmlnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NtYWxsJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb250U2l6ZS5zbWFsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbnRTaXplLm1lZGl1bTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOihjOaVsOOCkuaxguOCgeOCi1xyXG4gICAgICogQHBhcmFtIHNpemUgYmlnL3NtYWxsL21lZGl1beOBruOBhOOBmuOCjOOBi1xyXG4gICAgICogQHBhcmFtIGFsbExpbmVzIGNvbW1lbnRMaW5lc+Wei+OBruOCquODluOCuOOCp+OCr+ODiCjjgZ3jgozjgZ7jgozjga7jgrXjgqTjgrrjgavjgaTjgYTjgabooYzmlbDjgpLooajjgZkpXHJcbiAgICAgKi9cclxuICAgIF9nZXRMaW5lcyhzaXplLCBhbGxMaW5lcykge1xyXG4gICAgICAgIHN3aXRjaCAoc2l6ZSkge1xyXG4gICAgICAgICAgICBjYXNlICdiaWcnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbExpbmVzLmJpZztcclxuICAgICAgICAgICAgY2FzZSAnbWVkaXVtJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGxMaW5lcy5tZWRpdW07XHJcbiAgICAgICAgICAgIGNhc2UgJ3NtYWxsJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGxMaW5lcy5zbWFsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOCkuaVtOW9ouOBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIG9yaWdpbiDjgrPjg6Hjg7Pjg4hcclxuICAgICAqIEBwYXJhbSBjb21tZW50UG9zIOOCs+ODoeODs+ODiOOBruOCv+OCpOODl1xyXG4gICAgICovXHJcbiAgICBfZm9ybWF0Q29tbWVudChvcmlnaW4sIGNvbW1lbnRQb3MpIHtcclxuICAgICAgICBsZXQgZm9ybWF0ZWQgPSBkYXRhdXRsLnNwbGl0dGVyKG9yaWdpbiwgJ1xcbicpO1xyXG4gICAgICAgIGZvcm1hdGVkID0gdGhpcy5fZGVsZXRlQmxhbmsoZm9ybWF0ZWQpO1xyXG4gICAgICAgIGZvcm1hdGVkID0gdGhpcy5fZGVsZXRlRmlyc3RBbmRsYXN0QmxhbmsoZm9ybWF0ZWQpO1xyXG4gICAgICAgIGZvcm1hdGVkID0gdGhpcy5fc29ydEJ5VHlwZShmb3JtYXRlZCwgY29tbWVudFBvcyk7XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdGVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmj4/lhpnnlKjjgrPjg6Hjg7Pjg4jjgpLmlbTlvaLjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBvcmlnaW4g44Kz44Oh44Oz44OIXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudFBvcyDjgrPjg6Hjg7Pjg4jjga7jgr/jgqTjg5dcclxuICAgICAqL1xyXG4gICAgX2Zvcm1hdFJlbmRlckNvbW1lbnQob3JpZ2luKSB7XHJcbiAgICAgICAgbGV0IGZvcm1hdGVkID0gWy4uLm9yaWdpbl07XHJcbiAgICAgICAgZm9ybWF0ZWQgPSB0aGlzLl9kZWxldGVCbGFua0xpbmVGcm9tRW5kKG9yaWdpbik7XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdGVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjgYvjgokz5Zue5Lul5LiK6YCj57aa44GZ44KL5pS56KGM44KS5YmK6Zmk44GX44G+44GZ44CCXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudHMg44Kz44Oh44Oz44OI44Gu44Oq44K544OIXHJcbiAgICAgKi9cclxuICAgIF9kZWxldGVCbGFuayhjb21tZW50TGlzdCkge1xyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlZCA9IFtdO1xyXG4gICAgICAgIC8vZm9yLi4uaW7jg6vjg7zjg5fjgaflm57jgZkgXHJcbiAgICAgICAgZm9yIChjb25zdCB0ZXh0IG9mIGNvbW1lbnRMaXN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQmxhbmsgPSAhdGV4dDtcclxuICAgICAgICAgICAgaWYgKGlzQmxhbmspIHtcclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvdW50IDwgMykge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlZC5wdXNoKHRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkZWxldGVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmnIDliJ3jgajmnIDlvozjga7nqbrnmb3ooYzjgpLliYrpmaTjgZfjgb7jgZnjgIJcclxuICAgICAqIEBwYXJhbSBjb21tZW50cyDjgrPjg6Hjg7Pjg4jjga7jg6rjgrnjg4hcclxuICAgICAqL1xyXG4gICAgX2RlbGV0ZUZpcnN0QW5kbGFzdEJsYW5rKGNvbW1lbnRzKSB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlZCA9IFsuLi5jb21tZW50c107XHJcbiAgICAgICAgZm9yIChjb25zdCBjb21tZW50IG9mIGNvbW1lbnRzKSB7XHJcbiAgICAgICAgICAgIGlmICghY29tbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlZC5zaGlmdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lvozjgo3jgYvjgolcclxuICAgICAgICBjb25zdCByZXZlcnNlZCA9IFsuLi5kZWxldGVkXS5yZXZlcnNlKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb21tZW50IG9mIHJldmVyc2VkKSB7XHJcbiAgICAgICAgICAgIGlmICghY29tbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlZC5wb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkZWxldGVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjga7kvY3nva7jgavjgojjgaPjgabjgr3jg7zjg4jjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBjb21tZW50cyDjgrPjg6Hjg7Pjg4jjga7jg6rjgrnjg4hcclxuICAgICAqIEBwYXJhbSB0eXBlIOOCs+ODoeODs+ODiOOBruS9jee9rlxyXG4gICAgICovXHJcbiAgICBfc29ydEJ5VHlwZShjb21tZW50cywgdHlwZSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlID09PSAnc2hpdGEnID8gY29tbWVudHMucmV2ZXJzZSgpIDogY29tbWVudHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOepuuihjOOCkuWJiumZpOOBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIGNvbW1lbnRzIOOCs+ODoeODs+ODiFxyXG4gICAgICovXHJcbiAgICBfZGVsZXRlQmxhbmtMaW5lRnJvbUVuZChjb21tZW50cykge1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdGVkID0gWy4uLmNvbW1lbnRzXTtcclxuICAgICAgICBjb25zdCByZXZlcnNlZCA9IFsuLi5jb21tZW50c10ucmV2ZXJzZSgpO1xyXG4gICAgICAgIGZvciAoY29uc3QgbGluZSBvZiByZXZlcnNlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc0JsYW5rID0gL15cXHMrJC8udGVzdChsaW5lKSB8fCBsaW5lLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICAgICAgaWYgKGlzQmxhbmspIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdGVkLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tQXR0ci5nZXQoJ2NvbW1lbnROdW1iZXInKSA9PT0gOTU1NjAxKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1hdGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdGVkO1xyXG4gICAgfVxyXG59XHJcbi8v5bqn5qiZ5oOF5aCxXHJcbmV4cG9ydCBjbGFzcyBQb2ludCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3MpIHtcclxuICAgICAgICB0aGlzLnggPSBwb3MueDtcclxuICAgICAgICB0aGlzLnkgPSBwb3MueTtcclxuICAgIH1cclxufVxyXG4vL2hlaWdodDp3aWR0aFxyXG5leHBvcnQgY2xhc3MgU2l6ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBzaXplLmhlaWdodDtcclxuICAgICAgICB0aGlzLndpZHRoID0gc2l6ZS53aWR0aDtcclxuICAgIH1cclxufVxyXG4vL+ODrOOCpOODpOODvOOCr+ODqeOCuVxyXG5leHBvcnQgY2xhc3MgTGF5ZXIge1xyXG4gICAgLy/liJ3mnJ/ljJZcclxuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzU2l6ZSwgbGluZXMsIGNvbW1lbnRTaXplLCBjb21tZW50U2l6ZUZpeGVkLCBkdXJhdGlvbiwgbGluZUhlaWdodCkge1xyXG4gICAgICAgIHRoaXMub25EaXNhcG9zZWQgPSAoKSA9PiB7IH07XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTaXplID0gY2FudmFzU2l6ZTtcclxuICAgICAgICB0aGlzLmNhbnZhc1dpZHRoRmxhc2ggPSBjYW52YXNTaXplLmhlaWdodCAvIDMgKiA0O1xyXG4gICAgICAgIHRoaXMubGluZUhlaWdodCA9IGxpbmVIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5saW5lcyA9IGxpbmVzO1xyXG4gICAgICAgIHRoaXMuZm9uclNpemUgPSBjb21tZW50U2l6ZTtcclxuICAgICAgICB0aGlzLmZpeGVkRm9uclNpemUgPSBjb21tZW50U2l6ZUZpeGVkO1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICB0aGlzLmNvbW1lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5tYXhsaW5lcyA9IGxpbmVzLnNtYWxsO1xyXG4gICAgICAgIHRoaXMubmFrYSA9IG5ldyBOYWthTGluZShsaW5lcy5zbWFsbCwgY2FudmFzU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5zaGl0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMudWUgPSBbXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Os44Kk44Ok44O844Gr44Kz44Oh44Oz44OI44KS6L+95Yqg44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gdGV4dCDjgrPjg6Hjg7Pjg4jmnKzmlodcclxuICAgICAqIEBwYXJhbSBjb21tZW50TnVtYmVyIOOCs+ODoeeVqlxyXG4gICAgICogQHBhcmFtIGN1c3RvbUF0dHIg44Kr44K544K/44Og5bGe5oCnXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBuYWthL3NoaXRhL3Vl44Gu44GE44Ga44KM44GLXHJcbiAgICAgKiBAcGFyYW0gc2l6ZSBiaWcvbWVkaXVtL2xhcmdl44Gu44GE44Ga44KM44GLXHJcbiAgICAgKiBAcGFyYW0gdnBvcyBWUE9TXHJcbiAgICAgKi9cclxuICAgIGFkZCh0ZXh0LCBjb21tZW50TnVtYmVyLCBjdXN0b21BdHRyLCB0eXBlID0gJ25ha2EnLCBzaXplID0gJ21lZGl1bScsIGNhbGxCYWNrLCB2cG9zKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tbWVudHMubGVuZ3RoID4gMjApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjb25zdCBvcHJpb25zID0ge1xyXG4gICAgICAgICAgICBtb2RlOiB0eXBlLFxyXG4gICAgICAgICAgICBjb2xvcjogY3VzdG9tQXR0ci5nZXQoJ2NvbG9yJykgfHwgJyNmZmYnLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogY3VzdG9tQXR0ci5nZXQoJ2Jjb2xvcicpIHx8ICcjMDAwJyxcclxuICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGN1c3RvbUF0dHI6IGN1c3RvbUF0dHIsXHJcbiAgICAgICAgICAgIGNvbW1lbnRTaXplOiBzaXplLFxyXG4gICAgICAgICAgICBsaW5laGVpZ2h0OiB0aGlzLmxpbmVIZWlnaHQsXHJcbiAgICAgICAgICAgIHZwb3M6IHZwb3MsXHJcbiAgICAgICAgICAgIGZvbnROYW1lOiBjdXN0b21BdHRyLmdldCgnZm9udE5hbWUnKSxcclxuICAgICAgICAgICAgb3BhY2l0eTogY3VzdG9tQXR0ci5nZXQoJ29wYWNpdHknKSxcclxuICAgICAgICAgICAgZnVsbDogY3VzdG9tQXR0ci5nZXQoJ2Z1bGwnKSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICAgICAgICB0ZXh0OiB0ZXh0LFxyXG4gICAgICAgICAgICBjdHg6IHRoaXMuY3R4LFxyXG4gICAgICAgICAgICBjYW52YXNTaXplOiB0aGlzLmNhbnZhc1NpemUsXHJcbiAgICAgICAgICAgIGNhbnZhc1dpZHRoRmxhc2g6IHRoaXMuY2FudmFzV2lkdGhGbGFzaCxcclxuICAgICAgICAgICAgZm9udFNpemU6IHRoaXMuZm9uclNpemUsXHJcbiAgICAgICAgICAgIGZpeGVkRm9udFNpemU6IHRoaXMuZml4ZWRGb25yU2l6ZSxcclxuICAgICAgICAgICAgbGluZXM6IHRoaXMubGluZXMsXHJcbiAgICAgICAgICAgIG9wdGlvbjogb3ByaW9ucyxcclxuICAgICAgICAgICAgY29tbWVudE51bWJlcjogY29tbWVudE51bWJlcixcclxuICAgICAgICAgICAgb25EaXNwb3NlZDogY2FsbEJhY2sub25EaXNwYXNlZCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRPYmogPSBuZXcgQ29tbWVudEJhc2UocGFyYW0pO1xyXG4gICAgICAgIHN3aXRjaCAoY29tbWVudE9iai50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ25ha2EnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5uYWthLmFkZChjb21tZW50T2JqKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzaGl0YSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmRTaGl0YShjb21tZW50T2JqKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd1ZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmRVZShjb21tZW50T2JqKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5Yem55CGXHJcbiAgICAgKiBAcGFyYW0gY291bnRlciDjg6vjg7zjg5flm57mlbBcclxuICAgICAqL1xyXG4gICAgdGljayhjb3VudGVyLCB2cG9zLCByZW5kZXIpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VnBvcyA9IHZwb3MgPyB2cG9zIDogMDtcclxuICAgICAgICBjb25zdCBkb1JlbmRlciA9IHJlbmRlciA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWVudHMuZm9yRWFjaChjb21tZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkb1JlbmRlcilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXIoY29tbWVudCk7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRpY2soY3VycmVudFZwb3MpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9uYWth44Kz44OhXHJcbiAgICAgICAgaWYgKGRvUmVuZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmFrYS5nZXRMaXN0KCkuZm9yRWFjaChjb21tZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcihjb21tZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubmFrYS50aWNrKGN1cnJlbnRWcG9zKTtcclxuICAgICAgICB0aGlzLl9jbGVhbigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmj4/lhpnlh6bnkIZcclxuICAgICAqIEBwYXJhbSBjb21tZW50IOOCs+ODoeODs+ODiFxyXG4gICAgICovXHJcbiAgICBfcmVuZGVyKGNvbW1lbnQpIHtcclxuICAgICAgICB0aGlzLmN0eC50ZXh0QmFzZWxpbmUgPSAndG9wJztcclxuICAgICAgICAvL+aPg+OBiOS9jee9rlxyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNvbW1lbnQudHlwZSA9PT0gJ25ha2EnIHx8IGNvbW1lbnQuZml4ZWQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGAke2NvbW1lbnQuY29sb3J9YDtcclxuICAgICAgICB0aGlzLmN0eC5zaGFkb3dDb2xvciA9IGNvbW1lbnQuYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHguc2hhZG93T2Zmc2V0WCA9IDEuNTtcclxuICAgICAgICB0aGlzLmN0eC5zaGFkb3dPZmZzZXRZID0gMS41O1xyXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gY29tbWVudC5vcGFjaXR5O1xyXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBgYm9sZCAke2NvbW1lbnQuZm9udFNpemV9cHggXCIke2NvbW1lbnQuZm9udE5hbWV9XCJgO1xyXG4gICAgICAgIC8v5o+P5YaZ5pmC44Gr6ICD5oWu44GZ44KL5q2j6LKgXHJcbiAgICAgICAgY29uc3QgZGVsdGFNaW51c09yUGx1cyA9IGNvbW1lbnQudHlwZSA9PT0gJ3NoaXRhJyA/IC0xIDogMTtcclxuICAgICAgICBjb21tZW50LnRleHRGb3JSZW5kZXIuZm9yRWFjaCgodGV4dCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQodGV4dCwgY29tbWVudC5sZWZ0LCBjb21tZW50LnRvcCArIGNvbW1lbnQuZm9udFNpemUgKiBpbmRleCAqIGRlbHRhTWludXNPclBsdXMgKyBjb21tZW50Lm9mZnNldFkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjgpLliYrpmaTjgZnjgotcclxuICAgICAqIEBwYXJhbSAgb3B0aW9uIOacgOWIneOBruOCs+ODoeODs+ODiOOBvuOBn+OBr+OAgeacgOW+jOOBruOCs+ODoeODs+ODiOOBruOBv+OCkuWJiumZpOOBmeOCi+OBk+OBqOOBjOWHuuadpeOBvuOBmeOAglxyXG4gICAgICovXHJcbiAgICBjbGVhcihvcHRpb24pIHtcclxuICAgICAgICBzd2l0Y2ggKG9wdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIHVuZGVmaW5lZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMuZm9yRWFjaChjb21tZW50ID0+IGNvbW1lbnQua2lsbCgpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmFrYSA9IG5ldyBOYWthTGluZSh0aGlzLmxpbmVzLnNtYWxsLCB0aGlzLmNhbnZhc1NpemUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51ZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGl0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2ZpcnN0JzpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbW1lbnRzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzWzBdLmtpbGwoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdsYXN0JzpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbW1lbnRzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzW3RoaXMuY29tbWVudHMubGVuZ3RoIC0gMV0ua2lsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI6YWN5YiX44GL44KJ44OV44Op44Kw44GM6ZmN44KK44Gm44GE44KL44Kz44Oh44Oz44OI44KS5YmK6ZmkXHJcbiAgICAgKi9cclxuICAgIF9jbGVhbigpIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnRzID0gdGhpcy5jb21tZW50cy5maWx0ZXIoY29tbWV0ID0+IGNvbW1ldC5hbGl2ZSk7XHJcbiAgICAgICAgLy9uYWth44Kz44OhXHJcbiAgICAgICAgdGhpcy5uYWthLmNsZWFuKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIHNoaXRh44Kz44Oh44Oz44OI44KS6L+95Yqg44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudCDjgrPjg6Hjg7Pjg4jjgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgICAqL1xyXG4gICAgX2FwcGVuZFNoaXRhKGNvbW1lbnQpIHtcclxuICAgICAgICAvL3NoaXRh44Kz44Oh44Oz44OIXHJcbiAgICAgICAgbGV0IGJvdHRvbSA9IHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1heGxpbmVzOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hpdGFbaV0gJiYgIWNvbW1lbnQuZml4ZWQpIHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbSAtPSB0aGlzLnNoaXRhW2ldLm92ZXJhbGxTaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuc2hpdGEubGVuZ3RoID09PSAwOlxyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnNoaXRhLmxlbmd0aCA8PSBpOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAhdGhpcy5zaGl0YVtpXS5hbGl2ZTpcclxuICAgICAgICAgICAgICAgIC8v5Zu65a6a44Kz44Oh44Oz44OI44Gn44GC44Gj44Gf5aC05ZCIXHJcbiAgICAgICAgICAgICAgICBjYXNlIGNvbW1lbnQuZml4ZWQ6XHJcbiAgICAgICAgICAgICAgICAvL+OCs+ODoeODs+ODiOOBjOihqOekuumZkOeVjOOCkui2heOBiOOCi+WgtOWQiFxyXG4gICAgICAgICAgICAgICAgY2FzZSBib3R0b20gLSBjb21tZW50Lm92ZXJhbGxTaXplICsgY29tbWVudC5vZmZzZXRZIDwgMDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICBpZiAoY29tbWVudC5maXhlZCkge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC50b3AgPSB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0IC0gY29tbWVudC5mb250U2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChib3R0b20gLSBjb21tZW50Lm92ZXJhbGxTaXplIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC50b3AgPSBNYXRoLnJhbmRvbSgpICogKHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQgLSBjb21tZW50Lm92ZXJhbGxTaXplICsgY29tbWVudC5vZmZzZXRZKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gYm90dG9tIC0gY29tbWVudC5vdmVyYWxsU2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpdGFbaV0gPSBjb21tZW50O1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnB1c2goY29tbWVudCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIHNoaXRh44Kz44Oh44Oz44OI44KS6L+95Yqg44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudCDjgrPjg6Hjg7Pjg4jjgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgICAqL1xyXG4gICAgX2FwcGVuZFVlKGNvbW1lbnQpIHtcclxuICAgICAgICAvL3NoaXRh44Kz44Oh44Oz44OIXHJcbiAgICAgICAgbGV0IHRvcCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1heGxpbmVzOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudWVbaV0gJiYgIWNvbW1lbnQuZml4ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRvcCArPSB0aGlzLnVlW2ldLm92ZXJhbGxTaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMudWUubGVuZ3RoID09PSAwOlxyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnVlLmxlbmd0aCA8PSBpOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAhdGhpcy51ZVtpXS5hbGl2ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgY29tbWVudC5maXhlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgdG9wICsgY29tbWVudC5vdmVyYWxsU2l6ZSA+IHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgaWYgKGNvbW1lbnQuZml4ZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnVlW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IE1hdGgucmFuZG9tKCkgKiAodGhpcy5jYW52YXNTaXplLmhlaWdodCAtIGNvbW1lbnQub3ZlcmFsbFNpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC50b3AgPSB0b3A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICB0aGlzLnVlW2ldID0gY29tbWVudDtcclxuICAgICAgICAgICAgdGhpcy5jb21tZW50cy5wdXNoKGNvbW1lbnQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmjIflrprjgZfjgZ/kvY3nva7jgavlrZjlnKjjgZnjgovjgrPjg6Hjg7Pjg4jjgpLlj5blvpfjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSB4IFjluqfmqJlcclxuICAgICAqIEBwYXJhbSB5IFnluqfmqJlcclxuICAgICAqL1xyXG4gICAgZ2V0KHgsIHkpIHtcclxuICAgICAgICBjb25zdCBuYWthID0gdGhpcy5uYWthLmdldCh4LCB5KTtcclxuICAgICAgICBpZiAobmFrYSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuYWthO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tbWVudHMuZmluZChjb21tZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhbGYgPSBjb21tZW50LndpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzWCA9IHggPiBjb21tZW50LmxlZnQgLSBoYWxmICYmIHggPCBjb21tZW50LmxlZnQgKyBoYWxmO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNZID0geSA+IGNvbW1lbnQudG9wICYmIHkgPCBjb21tZW50LnRvcCArIGNvbW1lbnQub3ZlcmFsbFNpemU7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNYICYmIGlzWSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBuYWth44Kz44Oh44Oz44OIXHJcbiAqL1xyXG5jbGFzcyBOYWthTGluZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzbWFsbExpbmVzLCBzaXplKSB7XHJcbiAgICAgICAgLy/phY3liJfliJ3mnJ/ljJZcclxuICAgICAgICB0aGlzLmNvbW1lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5sYXN0Q29tbWVudFN0cmVhbSA9IFtdO1xyXG4gICAgICAgIC8v6YWN5YiX6ZW3XHJcbiAgICAgICAgdGhpcy5hbGxpbmVzID0gc21hbGxMaW5lcztcclxuICAgICAgICAvL2NhbnZhc+OCteOCpOOCulxyXG4gICAgICAgIHRoaXMuY2FudmFzU2l6ZSA9IHNpemU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIG5ha2HjgrPjg6Hjg7Pjg4jjgpLov73liqDjgZnjgotcclxuICAgICAqIEBwYXJhbSBjb21tZW50IOOCs+ODoeODs+ODiFxyXG4gICAgICovXHJcbiAgICBhZGQoY29tbWVudCkge1xyXG4gICAgICAgIGxldCB0b3AgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxpbmVzOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbGluZSA9IHRoaXMubGFzdENvbW1lbnRTdHJlYW1baV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgLy9p6KGM55uu44Gr44Kz44Oh44Oz44OI44GM54Sh44GE5aC05ZCIXHJcbiAgICAgICAgICAgICAgICBjYXNlIChsaW5lID09PSB1bmRlZmluZWQpOlxyXG4gICAgICAgICAgICAgICAgLy/lm7rlrprjgrPjg6HjgafjgYLjgaPjgZ/loLTlkIhcclxuICAgICAgICAgICAgICAgIGNhc2UgKGNvbW1lbnQuZml4ZWQpOlxyXG4gICAgICAgICAgICAgICAgLy/mnIDntYLov73liqDjgrPjg6Hjg7Pjg4jjgYzlhajjgabooajnpLrjgZXjgozjgabjgYTjgabjgIHjgarjgYrjgYvjgaTov73jgYTjgaTjgYvjgarjgYTloLTlkIhcclxuICAgICAgICAgICAgICAgIGNhc2UgKGxpbmUucmV2ZWFsIDwgMCAmJiBsaW5lLmxpZmUgPCBjb21tZW50LnRvdWNoKTpcclxuICAgICAgICAgICAgICAgIC8v44Kz44Oh44Oz44OI44GudG9w44GMY2FudmFz44Gu6auY44GV44KS6LaF44GI44Gm44GE44KLXHJcbiAgICAgICAgICAgICAgICBjYXNlICh0b3AgKyBjb21tZW50Lm92ZXJhbGxTaXplID4gdGhpcy5jYW52YXNTaXplLmhlaWdodCk6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvL+OBneOCjOS7peWkluOBr+asoeOBruihjOOCkueiuuiqjVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0b3AgKz0gbGluZS5vdmVyYWxsU2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIC8v5bqn5qiZ6Kit5a6aXHJcbiAgICAgICAgICAgIGlmIChjb21tZW50LmZpeGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodG9wICsgY29tbWVudC5vdmVyYWxsU2l6ZSA+IHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIC8v5by+5bmV44Oi44O844OJXHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IE1hdGgucmFuZG9tKCkgKiAodGhpcy5jYW52YXNTaXplLmhlaWdodCAtIGNvbW1lbnQub3ZlcmFsbFNpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC50b3AgPSB0b3A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb21tZW50cy5wdXNoKGNvbW1lbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RDb21tZW50U3RyZWFtW2ldID0gY29tbWVudDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmtYHjgozjgZ/jgrPjg6Hjg7Pjg4jjgpLliYrpmaTjgZnjgotcclxuICAgICAqL1xyXG4gICAgY2xlYW4oKSB7XHJcbiAgICAgICAgdGhpcy5jb21tZW50cyA9IHRoaXMuY29tbWVudHMuZmlsdGVyKGNvbW1lbnQgPT4gY29tbWVudC5hbGl2ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOWHpueQhlxyXG4gICAgICovXHJcbiAgICB0aWNrKHZwb3MpIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnRzLmZvckVhY2goY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbW1lbnQudGljayh2cG9zKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI44Gu44Oq44K544OI44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgKi9cclxuICAgIGdldExpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWVudHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOCkuWPluW+l+OBmeOCi1xyXG4gICAgICogQHBhcmFtIHggWOW6p+aomVxyXG4gICAgICogQHBhcmFtIHkgWeW6p+aomVxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgZ2V0KHgsIHkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21tZW50cy5maW5kKGNvbW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc1ggPSB4ID4gY29tbWVudC5sZWZ0ICYmIHggPCBjb21tZW50LmxlZnQgKyBjb21tZW50LndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBpc1kgPSB5ID4gY29tbWVudC50b3AgJiYgeSA8IGNvbW1lbnQudG9wICsgY29tbWVudC5vdmVyYWxsU2l6ZTtcclxuICAgICAgICAgICAgaWYgKGlzWCAmJiBpc1kpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy/lrprmlbBcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZnBzOiA2MCxcclxuICAgIGR1cmF0aW9uOiAzLFxyXG4gICAgbGluZUhlaWdodDogMS4yLFxyXG4gICAgYmlnTGluZXM6IDgsXHJcbiAgICBtZWRpdW1MaW5lczogMTEsXHJcbiAgICBzbWFsbExpbmVzOiAxNixcclxuICAgIGZpeDoge1xyXG4gICAgICAgIHNtYWw6IDM4LFxyXG4gICAgICAgIGJpZzogMTYsXHJcbiAgICAgICAgbWVkaXVtOiAyNSxcclxuICAgIH0sXHJcbiAgICBkZWZhdWx0Q29sb3I6ICcjZmZmJyxcclxuICAgIGRlZmF1bHRMYXllcjogJ2Jhc2UnLFxyXG4gICAgZGVmYXVsdEZvbnQ6ICdNUyBQR290aGljJyxcclxuICAgIG9wYWNpdHk6IDEsXHJcbn07XHJcbiIsImV4cG9ydCBjbGFzcyBEYXRhVXRpbHMge1xyXG4gICAgc3BsaXR0ZXIodmFsdWUsIHNwbGl0QnkgPSAnLCcpIHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnNwbGl0KHNwbGl0QnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICAvLzDln4vjgoFcclxuICAgIHBhZGRpbmcobnVtLCBkaWdpdCA9IDIsIHBhZGRTdHJpbmcgPSAnMCcpIHtcclxuICAgICAgICBpZiAobnVtIDwgMTAgKiogZGlnaXQpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luID0gbnVtLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGxldCBwYWRkZWQgPSBvcmlnaW47XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlnaXQgLSBvcmlnaW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHBhZGRlZCA9IHBhZGRTdHJpbmcgKyBwYWRkZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBhZGRlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudW0udG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOODjeOCueODiOOBleOCjOOBn+mFjeWIl+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAgICogQHBhcmFtIGxlbiDphY3liJfplbdcclxuICAgICAqL1xyXG4gICAgY3JlYXRlTmVzdGVkQXJyYXkobGVuKSB7XHJcbiAgICAgICAgY29uc3QgYXJyID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBhcnIucHVzaChbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVBcnJheShsZW4pIHtcclxuICAgICAgICBjb25zdCBhcnIgPSBbXTtcclxuICAgICAgICBhcnIubGVuZ3RoID0gbGVuO1xyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFZQT1PjgYvjgonmmYLplpPjgpLoqIjnrpfjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSB2cG9zIFZQT1NcclxuICAgICAqL1xyXG4gICAgY2FsY1ZQT1ModnBvcykge1xyXG4gICAgICAgIGNvbnN0IHNlY29uZCA9IE1hdGguZmxvb3IodnBvcyAvIDEwMCk7XHJcbiAgICAgICAgY29uc3QgbWludXRlID0gTWF0aC5mbG9vcihzZWNvbmQgLyA2MCk7XHJcbiAgICAgICAgY29uc3QgZXh0cmEgPSBNYXRoLmZsb29yKHNlY29uZCAlIDYwKTtcclxuICAgICAgICByZXR1cm4geyBtczogeyBtaW46IG1pbnV0ZSwgc2VjOiBleHRyYSB9LCBzZWM6IHNlY29uZCB9O1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=