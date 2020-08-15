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

/***/ "./env/DEV.js":
/*!********************!*\
  !*** ./env/DEV.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  virsion: 'v1.00@build:2008150840',
  build: 'Development'
});

/***/ }),

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
/* harmony import */ var sysEnv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sysEnv */ "./env/DEV.js");



/**
 * メインクラス
 */
class NicommentJS {
    /**
     *
     * @param id canvasのID
     * @param width canvasの幅
     * @param height canvasの高さ
     * @param option オプション
     */
    constructor(id, width, height, option) {
        if (true) {
            Logger.write('このバージョンは開発版のため、不安定な挙動をとる場合があります。\n'
                + `version:${sysEnv__WEBPACK_IMPORTED_MODULE_2__["default"].virsion}\n`
                + `buildDate:${"2020/7/15 10:50"}\n`
                + `build:${sysEnv__WEBPACK_IMPORTED_MODULE_2__["default"].build}`
                + `bug report:https://github.com/Hayao-H/nicomment-js/issues`);
        }
        else {}
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
        this.addLayer(this.mainLayerName);
        this.total = 0;
        this.run = true;
        this.isPlay = true;
        //自動更新フラグ
        this.autoTickDisabled = option ? option.autoTickDisabled ? option.autoTickDisabled : false : false;
        if (false) {}
        if (!this.autoTickDisabled) {
            Logger.write('更新処理を開始します。');
            this.tick();
        }
        ;
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
        else {
            throw new Error(NicoExceptions.LAYER.LAYER_DOES_NOT_EXIST(layer));
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
            else {
                throw new Error(NicoExceptions.LAYER.LAYER_DOES_NOT_EXIST(layer));
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
    /**
     * canvasコンテキストを取得します
     * @param id ID
     * @param width 横幅
     * @param height 高さ
     */
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
    /**
     * 縁取り色を取得します
     * @param color 色
     */
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
    /**
     * レイヤーを追加します
     * @param layerName レイヤー名
     */
    addLayer(layerName) {
        if (this.layers.has(layerName)) {
            throw new Error(NicoExceptions.LAYER.DUPLICATION(layerName));
        }
        else {
            this.layers.set(layerName, new _module_Comment__WEBPACK_IMPORTED_MODULE_0__["Layer"](this.ctx, this.canvasSize, this.lines, this.fonrSize, this.fixedFonrSize, this.duration, this.lineHeight));
        }
        if (false) {}
    }
    /**
     * レイヤーを削除します
     * @param layerName レイヤー名
     */
    removeLayer(layerName) {
        if (this.layers.has(layerName)) {
            throw new Error(NicoExceptions.LAYER.DUPLICATION(layerName));
        }
        else {
            this.layers.delete(layerName);
        }
        if (false) {}
    }
}
/**
 * メタ情報クラス
 */
class Meta {
    /**
     * 初期化
     */
    constructor() {
        this.count = 0;
    }
    /**
     * カウントを増やします
     */
    loop() {
        this.count++;
    }
    /**
     * カウントを取得
     */
    getCount() {
        return this.count;
    }
}
/**
 * ログ
 */
class Logger {
    /**
     * ログを出力する
     * @param log 本文
     */
    static write(log) {
        console.log(`[NicommentJS]${log}`);
    }
}
/**
 * エラー
 */
const NicoExceptions = {
    /**
     * 初期化エラー
     */
    __INIT__: {
        /**
         * 引数エラー
         */
        ARGUMENTS: {
            /**
             * 必要な引数が存在しない
             */
            NOT_EXIST: {
                /**
                 * 高さ
                 */
                HEIGHT: '[ERR]argument "height" must be specified.',
                /**
                 * 横幅
                 */
                WIDTH: '[ERR]argument "width" must be specified.',
                /**
                 * ID
                 */
                ID: '[ERR]argument "id" must be specified.',
            },
            /**
             * 引数の値が不適切である
             */
            NaN: {
                /**
                 * 高さが数字でない
                 */
                HEIGHT: (value) => `[ERR]${value} is not a number. "height" mus be a number.`,
                /**
                 * 横幅が数字でない
                 */
                WIDTH: (value) => `[ERR]${value} is not a number. "width" mus be a number.`,
            }
        },
        /**
         * 要素が存在しない・canvasでない
         */
        ELEMENT: {
            /**
             * 要素が存在しない
             */
            NOT_EXIST: (id) => { return `[ERR]Canvas Element which id is "${id}" was not found.`; },
            /**
             * 要素がHTMLCanvasでない
             */
            NOT_A_CANVAS_ELEMENT: (id) => { return `[ERR]Element which id is "${id}" is not a canvasHTML5 Element.`; }
        },
    },
    /**
     * コメント追加時のエラー
     */
    SEND: {},
    /**
     * レイヤー関係のエラー
     */
    LAYER: {
        /**
         * 重複
         */
        DUPLICATION: (name) => { return `[ERR]The layer name ${name} already exists.`; },
        /**
         * レイヤーが存在しない
         */
        LAYER_DOES_NOT_EXIST: (name) => { return `[ERR]A layer name is ${name} does not exist.`; },
    },
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
        const widthOverflow = comWidth > this.canvasSize.width && type !== 'naka';
        if (widthOverflow && !this.full) {
            font = this._modSize(originalFont, comWidth, this.canvasWidthFlash);
            this.ctx.font = `${font}px "Yu Gothic"`;
            comWidth = this.ctx.measureText(text).width;
        }
        else if (widthOverflow && this.full) {
            font = this._modSize(originalFont, comWidth, this.canvasSize.width);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OaWNvbW1lbnRKUy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvLi9lbnYvREVWLmpzIiwid2VicGFjazovL05pY29tbWVudEpTLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL05pY29tbWVudEpTLy4vc3JjL21vZHVsZS9Db21tZW50LnRzIiwid2VicGFjazovL05pY29tbWVudEpTLy4vc3JjL21vZHVsZS9jb25maWcudHMiLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvLi9zcmMvdXRpbHMvRGF0YVV0aWxzLnRzIl0sIm5hbWVzIjpbInZpcnNpb24iLCJidWlsZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7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K0NBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsS0FBSztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGNBQWM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCLE1BQU0saUJBQWlCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM25CQTtBQUFBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2pCRjtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDJCQUEyQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNLDBCQUEwQjtBQUNoRDtBQUNBIiwiZmlsZSI6Ik5pY29tbWVudEpTLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk5pY29tbWVudEpTXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk5pY29tbWVudEpTXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgZGVmYXVsdHtcclxuICAgIHZpcnNpb246J3YxLjAwQGJ1aWxkOjIwMDgxNTA4NDAnLFxyXG4gICAgYnVpbGQ6J0RldmVsb3BtZW50JyxcclxufSIsImltcG9ydCB7IFNpemUsIExheWVyIH0gZnJvbSAnLi9tb2R1bGUvQ29tbWVudCc7XHJcbmltcG9ydCBkZWZhdWx0Q29uZmlnIGZyb20gJy4vbW9kdWxlL2NvbmZpZyc7XHJcbmltcG9ydCBDb25maWcgZnJvbSAnc3lzRW52JztcclxuLyoqXHJcbiAqIOODoeOCpOODs+OCr+ODqeOCuVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmljb21tZW50SlMge1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGlkIGNhbnZhc+OBrklEXHJcbiAgICAgKiBAcGFyYW0gd2lkdGggY2FudmFz44Gu5bmFXHJcbiAgICAgKiBAcGFyYW0gaGVpZ2h0IGNhbnZhc+OBrumrmOOBlVxyXG4gICAgICogQHBhcmFtIG9wdGlvbiDjgqrjg5fjgrfjg6fjg7NcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoaWQsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbikge1xyXG4gICAgICAgIGlmIChJU19ERVZFTE9QTUVOVCkge1xyXG4gICAgICAgICAgICBMb2dnZXIud3JpdGUoJ+OBk+OBruODkOODvOOCuOODp+ODs+OBr+mWi+eZuueJiOOBruOBn+OCgeOAgeS4jeWuieWumuOBquaMmeWLleOCkuOBqOOCi+WgtOWQiOOBjOOBguOCiuOBvuOBmeOAglxcbidcclxuICAgICAgICAgICAgICAgICsgYHZlcnNpb246JHtDb25maWcudmlyc2lvbn1cXG5gXHJcbiAgICAgICAgICAgICAgICArIGBidWlsZERhdGU6JHtCVUlMRF9EQVRFfVxcbmBcclxuICAgICAgICAgICAgICAgICsgYGJ1aWxkOiR7Q29uZmlnLmJ1aWxkfWBcclxuICAgICAgICAgICAgICAgICsgYGJ1ZyByZXBvcnQ6aHR0cHM6Ly9naXRodWIuY29tL0hheWFvLUgvbmljb21tZW50LWpzL2lzc3Vlc2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChJU19ERUJVRykge1xyXG4gICAgICAgICAgICBMb2dnZXIud3JpdGUoYOOBk+OBruODkOODvOOCuOODp+ODs+OBr+ODh+ODkOODg+OCsOeJiOOBp+OBmeOAglxcbmBcclxuICAgICAgICAgICAgICAgICsgYHZlcnNpb246JHtDb25maWcudmlyc2lvbn1cXG5gXHJcbiAgICAgICAgICAgICAgICArIGBidWlsZERhdGU6JHtCVUlMRF9EQVRFfVxcbmBcclxuICAgICAgICAgICAgICAgICsgYGJ1aWxkOiR7Q29uZmlnLmJ1aWxkfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+W8leaVsOODgeOCp+ODg+OCr1xyXG4gICAgICAgIHRoaXMuY2hlY2tBcmdzKGlkLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAvL2NvbnRleHRcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuX2dldENvbnRleHQoaWQsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIC8v44K144Kk44K6XHJcbiAgICAgICAgdGhpcy5jYW52YXNTaXplID0gbmV3IFNpemUoeyBoZWlnaHQ6IGhlaWdodCwgd2lkdGg6IHdpZHRoIH0pO1xyXG4gICAgICAgIC8v44Oh44K/5oOF5aCxXHJcbiAgICAgICAgdGhpcy5tZXRhID0gbmV3IE1ldGEoKTtcclxuICAgICAgICAvL+ihqOekuuaZgumWk1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBvcHRpb24gPyBvcHRpb24uZHVyYXRpb24gPyBvcHRpb24uZHVyYXRpb24gOiBkZWZhdWx0Q29uZmlnLmR1cmF0aW9uIDogZGVmYXVsdENvbmZpZy5kdXJhdGlvbjtcclxuICAgICAgICAvL+iHquWLleabtOaWsFxyXG4gICAgICAgIHRoaXMubWFpbkxheWVyTmFtZSA9IG9wdGlvbiA/IG9wdGlvbi5sYXllck5hbWUgPyBvcHRpb24ubGF5ZXJOYW1lIDogZGVmYXVsdENvbmZpZy5kZWZhdWx0TGF5ZXIgOiBkZWZhdWx0Q29uZmlnLmRlZmF1bHRMYXllcjtcclxuICAgICAgICAvL+OCteOCpOOCuuODu+ODleOCqeODs+ODiFxyXG4gICAgICAgIHRoaXMubGluZUhlaWdodCA9IG9wdGlvbiA/IG9wdGlvbi5saW5laGVnaHQgPyBvcHRpb24ubGluZWhlZ2h0IDogZGVmYXVsdENvbmZpZy5saW5lSGVpZ2h0IDogZGVmYXVsdENvbmZpZy5saW5lSGVpZ2h0OyAvL+ihqOekuuaZgumWk1xyXG4gICAgICAgIHRoaXMubGluZXMgPSB7XHJcbiAgICAgICAgICAgIGJpZzogb3B0aW9uID8gb3B0aW9uLmJpZ0xpbmVzID8gb3B0aW9uLmJpZ0xpbmVzIDogZGVmYXVsdENvbmZpZy5iaWdMaW5lcyA6IGRlZmF1bHRDb25maWcuYmlnTGluZXMsXHJcbiAgICAgICAgICAgIG1lZGl1bTogb3B0aW9uID8gb3B0aW9uLm1lZGl1bUxpbmVzID8gb3B0aW9uLm1lZGl1bUxpbmVzIDogZGVmYXVsdENvbmZpZy5tZWRpdW1MaW5lcyA6IGRlZmF1bHRDb25maWcubWVkaXVtTGluZXMsXHJcbiAgICAgICAgICAgIHNtYWxsOiBvcHRpb24gPyBvcHRpb24uc21hbGxMaW5lcyA/IG9wdGlvbi5zbWFsbExpbmVzIDogZGVmYXVsdENvbmZpZy5zbWFsbExpbmVzIDogZGVmYXVsdENvbmZpZy5zbWFsbExpbmVzXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmZpeGVkTGluZXMgPSB7IGJpZzogZGVmYXVsdENvbmZpZy5maXguYmlnLCBtZWRpdW06IGRlZmF1bHRDb25maWcuZml4Lm1lZGl1bSwgc21hbGw6IGRlZmF1bHRDb25maWcuZml4LnNtYWwgfTtcclxuICAgICAgICB0aGlzLmZvbnJTaXplID0gdGhpcy5fZ2V0Rm9udFNpemUoaGVpZ2h0LCB0aGlzLmxpbmVzKTsgLy9maW50U0l6ZeS4gOimp1xyXG4gICAgICAgIHRoaXMuZml4ZWRGb25yU2l6ZSA9IHRoaXMuX2dldEZvbnRTaXplKGhlaWdodCwgdGhpcy5maXhlZExpbmVzKTtcclxuICAgICAgICAvL+ODrOOCpOODpOODvFxyXG4gICAgICAgIHRoaXMubWFpbkxheWVyTmFtZSA9IG9wdGlvbiA/IG9wdGlvbi5sYXllck5hbWUgPyBvcHRpb24ubGF5ZXJOYW1lIDogZGVmYXVsdENvbmZpZy5kZWZhdWx0TGF5ZXIgOiBkZWZhdWx0Q29uZmlnLmRlZmF1bHRMYXllcjtcclxuICAgICAgICB0aGlzLmxheWVycyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmFkZExheWVyKHRoaXMubWFpbkxheWVyTmFtZSk7XHJcbiAgICAgICAgdGhpcy50b3RhbCA9IDA7XHJcbiAgICAgICAgdGhpcy5ydW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNQbGF5ID0gdHJ1ZTtcclxuICAgICAgICAvL+iHquWLleabtOaWsOODleODqeOCsFxyXG4gICAgICAgIHRoaXMuYXV0b1RpY2tEaXNhYmxlZCA9IG9wdGlvbiA/IG9wdGlvbi5hdXRvVGlja0Rpc2FibGVkID8gb3B0aW9uLmF1dG9UaWNrRGlzYWJsZWQgOiBmYWxzZSA6IGZhbHNlO1xyXG4gICAgICAgIGlmIChJU19ERUJVRykge1xyXG4gICAgICAgICAgICBMb2dnZXIud3JpdGUoYGNhbnZhc0lEOiR7aWR9LCB3aWR0aDoke3dpZHRofXB4LCBoZWlnaHQ6JHtoZWlnaHR9cHhgKTtcclxuICAgICAgICAgICAgTG9nZ2VyLndyaXRlKCfliJ3mnJ/ljJbjgYzlrozkuobjgZfjgb7jgZfjgZ/jgIInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmF1dG9UaWNrRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLndyaXRlKCfmm7TmlrDlh6bnkIbjgpLplovlp4vjgZfjgb7jgZnjgIInKTtcclxuICAgICAgICAgICAgdGhpcy50aWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5byV5pWw44OB44Kn44OD44KvXHJcbiAgICAgKiBAcGFyYW0gaWQgaWRcclxuICAgICAqIEBwYXJhbSB3aWR0aCB3aWR0aFxyXG4gICAgICogQHBhcmFtIGhlaWdodCBoZWlnaHRcclxuICAgICAqL1xyXG4gICAgY2hlY2tBcmdzKGlkLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgaWYgKCFpZClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLl9fSU5JVF9fLkFSR1VNRU5UUy5OT1RfRVhJU1QuSUQpO1xyXG4gICAgICAgIGlmICghd2lkdGgpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5BUkdVTUVOVFMuTk9UX0VYSVNULldJRFRIKTtcclxuICAgICAgICBpZiAoIWhlaWdodClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLl9fSU5JVF9fLkFSR1VNRU5UUy5OT1RfRVhJU1QuSEVJR0hUKTtcclxuICAgICAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLl9fSU5JVF9fLkFSR1VNRU5UUy5OYU4uV0lEVEgod2lkdGgpKTtcclxuICAgICAgICBpZiAodHlwZW9mIGhlaWdodCAhPT0gJ251bWJlcicpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5BUkdVTUVOVFMuTmFOLkhFSUdIVChoZWlnaHQpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI44KS6L+95Yqg44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gdGV4dCDooajnpLrjgZnjgovjgrPjg6Hjg7Pjg4hcclxuICAgICAqIEBwYXJhbSBvcHRpb27jgIDjgqrjg5fjgrfjg6fjg7PjgII7XHJcbiAgICAgKi9cclxuICAgIHNlbmQodGV4dCwgb3B0aW9uKSB7XHJcbiAgICAgICAgbGV0IGN1c3RvbUF0dHIgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBvcHRpb24gPyBvcHRpb24ubGF5ZXIgPyBvcHRpb24ubGF5ZXIgOiB0aGlzLm1haW5MYXllck5hbWUgOiB0aGlzLm1haW5MYXllck5hbWU7XHJcbiAgICAgICAgY29uc3QgY29tVHlwZSA9IG9wdGlvbiA/IG9wdGlvbi50eXBlID8gb3B0aW9uLnR5cGUgOiAnbmFrYScgOiAnbmFrYSc7XHJcbiAgICAgICAgY29uc3QgY29tU2l6ZSA9IG9wdGlvbiA/IG9wdGlvbi5zaXplID8gb3B0aW9uLnNpemUgOiAnbWVkaXVtJyA6ICdtZWRpdW0nO1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gb3B0aW9uID8gb3B0aW9uLmNvbG9yID8gb3B0aW9uLmNvbG9yIDogJyNmZmYnIDogJyNmZmYnO1xyXG4gICAgICAgIGNvbnN0IGJjb2xvciA9IHRoaXMuZ2V0QmNvbG9yKGNvbG9yKTtcclxuICAgICAgICBjb25zdCB2cG9zID0gb3B0aW9uID8gb3B0aW9uLnZwb3MgPyBvcHRpb24udnBvcyA6IDAgOiAwO1xyXG4gICAgICAgIGNvbnN0IGZvbnROYW1lID0gb3B0aW9uID8gb3B0aW9uLmZvbnROYW1lID8gb3B0aW9uLmZvbnROYW1lIDogZGVmYXVsdENvbmZpZy5kZWZhdWx0Rm9udCA6IGRlZmF1bHRDb25maWcuZGVmYXVsdEZvbnQ7XHJcbiAgICAgICAgY29uc3Qgb3BhY2l0eSA9IG9wdGlvbiA/IG9wdGlvbi5vcGFjaXR5ID8gb3B0aW9uLm9wYWNpdHkgOiBkZWZhdWx0Q29uZmlnLm9wYWNpdHkgOiBkZWZhdWx0Q29uZmlnLm9wYWNpdHk7XHJcbiAgICAgICAgY29uc3QgZnVsbCA9IG9wdGlvbiA/IG9wdGlvbi5mdWxsID8gb3B0aW9uLmZ1bGwgOiBmYWxzZSA6IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IG9uRGlzcG9zZWQgPSBvcHRpb24gPyBvcHRpb24ub25EaXNwb3NlZCA/IG9wdGlvbi5vbkRpc3Bvc2VkIDogKCkgPT4geyB9IDogKCkgPT4geyB9O1xyXG4gICAgICAgIHRoaXMudG90YWwrKztcclxuICAgICAgICBpZiAob3B0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbi5jdXN0b21BdHRyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGN1c3RvbUF0dHIgPSB0aGlzLl9nZXRBdHRyKG9wdGlvbi5jdXN0b21BdHRyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjdXN0b21BdHRyLnNldCgnY29sb3InLCBjb2xvcik7XHJcbiAgICAgICAgY3VzdG9tQXR0ci5zZXQoJ2Jjb2xvcicsIGJjb2xvcik7XHJcbiAgICAgICAgY3VzdG9tQXR0ci5zZXQoJ2ZvbnROYW1lJywgZm9udE5hbWUpO1xyXG4gICAgICAgIGN1c3RvbUF0dHIuc2V0KCdvcGFjaXR5Jywgb3BhY2l0eSk7XHJcbiAgICAgICAgY3VzdG9tQXR0ci5zZXQoJ2Z1bGwnLCBmdWxsKTtcclxuICAgICAgICBjb25zdCBsYXllck9iaiA9IHRoaXMubGF5ZXJzLmdldChsYXllcik7XHJcbiAgICAgICAgaWYgKGxheWVyT2JqICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGF5ZXJPYmouYWRkKHRleHQsIHRoaXMudG90YWwsIGN1c3RvbUF0dHIsIGNvbVR5cGUsIGNvbVNpemUsIHsgb25EaXNwYXNlZDogb25EaXNwb3NlZCB9LCB2cG9zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5MQVlFUi5MQVlFUl9ET0VTX05PVF9FWElTVChsYXllcikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5LiA5pmC5YGc5q2iXHJcbiAgICAgKi9cclxuICAgIHBhdXNlKCkge1xyXG4gICAgICAgIHRoaXMuaXNQbGF5ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWGjeeUn1xyXG4gICAgICovXHJcbiAgICBwbGF5KCkge1xyXG4gICAgICAgIHRoaXMuaXNQbGF5ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI44KS5YmK6Zmk44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gbGF5ZXIg44Os44Kk44Ok44O8XHJcbiAgICAgKi9cclxuICAgIGNsZWFyKGxheWVyKSB7XHJcbiAgICAgICAgaWYgKGxheWVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxheWVyT2JqID0gdGhpcy5sYXllcnMuZ2V0KGxheWVyKTtcclxuICAgICAgICAgICAgaWYgKGxheWVyT2JqICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGxheWVyT2JqLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuTEFZRVIuTEFZRVJfRE9FU19OT1RfRVhJU1QobGF5ZXIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgICAgICBsYXllci5jbGVhcigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWFqOOBpuOBruWHpueQhuOCkue1guS6huOBl+OBvuOBmVxyXG4gICAgICovXHJcbiAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgIHRoaXMucnVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1BsYXkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgbGF5ZXIuY2xlYXIoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNTaXplLndpZHRoLCB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmxheWVycy5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlsZ7mgKfjgpLlj5blvpfjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBjdXN0b21BdHRyIOOCq+OCueOCv+ODoOWxnuaAp1xyXG4gICAgICovXHJcbiAgICBfZ2V0QXR0cihjdXN0b21BdHRyKSB7XHJcbiAgICAgICAgY29uc3QgbWFwb2JqID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGN1c3RvbUF0dHIpKSB7XHJcbiAgICAgICAgICAgIG1hcG9iai5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXBvYmo7XHJcbiAgICB9XHJcbiAgICBfZ2V0Rm9udFNpemUoaGVpZ2h0LCBsaW5lcykge1xyXG4gICAgICAgIGNvbnN0IGJpZyA9IGhlaWdodCAvIGxpbmVzLmJpZztcclxuICAgICAgICBjb25zdCBtZWRpdW0gPSBoZWlnaHQgLyBsaW5lcy5tZWRpdW07XHJcbiAgICAgICAgY29uc3Qgc21hbGwgPSBoZWlnaHQgLyBsaW5lcy5zbWFsbDtcclxuICAgICAgICByZXR1cm4geyBiaWc6IGJpZywgbWVkaXVtOiBtZWRpdW0sIHNtYWxsOiBzbWFsbCB9O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBjYW52YXPjgrPjg7Pjg4bjgq3jgrnjg4jjgpLlj5blvpfjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBpZCBJRFxyXG4gICAgICogQHBhcmFtIHdpZHRoIOaoquW5hVxyXG4gICAgICogQHBhcmFtIGhlaWdodCDpq5jjgZVcclxuICAgICAqL1xyXG4gICAgX2dldENvbnRleHQoaWQsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICBjb25zdCBlbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKCFlbG0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLl9fSU5JVF9fLkVMRU1FTlQuTk9UX0VYSVNUKGlkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbG0uaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgICAgICBlbG0ud2lkdGggPSB3aWR0aDtcclxuICAgICAgICAgICAgZWxtLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xyXG4gICAgICAgICAgICBlbG0uc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgY29uc3QgY3R4ID0gZWxtLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgIGlmIChjdHggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Oh44Kk44Oz44Or44O844OXXHJcbiAgICAgKi9cclxuICAgIHRpY2sodnBvcywgcmVuZGVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc1NpemUud2lkdGgsIHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgICAgIGxheWVyLnRpY2sodGhpcy5tZXRhLmdldENvdW50KCksIHZwb3MsIHJlbmRlcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLm1ldGEubG9vcCgpOyAvL+OCpOODs+OCr+ODquODoeODs+ODiFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ydW4gJiYgIXRoaXMuYXV0b1RpY2tEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4geyB0aGlzLnRpY2sodnBvcyk7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOe4geWPluOCiuiJsuOCkuWPluW+l+OBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIGNvbG9yIOiJslxyXG4gICAgICovXHJcbiAgICBnZXRCY29sb3IoY29sb3IpIHtcclxuICAgICAgICBzd2l0Y2ggKGNvbG9yKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JsYWNrJzpcclxuICAgICAgICAgICAgY2FzZSAnIzAwMCc6XHJcbiAgICAgICAgICAgIGNhc2UgJyMwMDAwMDAnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcjZmZmJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcjMDAwJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaMh+WumuOBl+OBn+S9jee9ruOBq+WtmOWcqOOBmeOCi+OCs+ODoeODs+ODiOOCkuWPluW+l+OBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIHggWOW6p+aomVxyXG4gICAgICogQHBhcmFtIHkgWeW6p+aomVxyXG4gICAgICovXHJcbiAgICBnZXQoeCwgeSkge1xyXG4gICAgICAgIGxldCBjb21tZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICBjb21tZW50ID0gbGF5ZXIuZ2V0KHgsIHkpO1xyXG4gICAgICAgICAgICBpZiAoY29tbWVudClcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gY29tbWVudDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Os44Kk44Ok44O844KS6L+95Yqg44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gbGF5ZXJOYW1lIOODrOOCpOODpOODvOWQjVxyXG4gICAgICovXHJcbiAgICBhZGRMYXllcihsYXllck5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5sYXllcnMuaGFzKGxheWVyTmFtZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLkxBWUVSLkRVUExJQ0FUSU9OKGxheWVyTmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYXllcnMuc2V0KGxheWVyTmFtZSwgbmV3IExheWVyKHRoaXMuY3R4LCB0aGlzLmNhbnZhc1NpemUsIHRoaXMubGluZXMsIHRoaXMuZm9uclNpemUsIHRoaXMuZml4ZWRGb25yU2l6ZSwgdGhpcy5kdXJhdGlvbiwgdGhpcy5saW5lSGVpZ2h0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChJU19ERUJVRykge1xyXG4gICAgICAgICAgICBMb2dnZXIud3JpdGUoYOODrOOCpOODpOODvCBcIiR7bGF5ZXJOYW1lfVwiIOOCkui/veWKoOOBl+OBvuOBl+OBn+OAgmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Os44Kk44Ok44O844KS5YmK6Zmk44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gbGF5ZXJOYW1lIOODrOOCpOODpOODvOWQjVxyXG4gICAgICovXHJcbiAgICByZW1vdmVMYXllcihsYXllck5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5sYXllcnMuaGFzKGxheWVyTmFtZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLkxBWUVSLkRVUExJQ0FUSU9OKGxheWVyTmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYXllcnMuZGVsZXRlKGxheWVyTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChJU19ERUJVRykge1xyXG4gICAgICAgICAgICBMb2dnZXIud3JpdGUoYOODrOOCpOODpOODvCBcIiR7bGF5ZXJOYW1lfVwiIOOCkuWJiumZpOOBl+OBvuOBl+OBn+OAgmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKipcclxuICog44Oh44K/5oOF5aCx44Kv44Op44K5XHJcbiAqL1xyXG5jbGFzcyBNZXRhIHtcclxuICAgIC8qKlxyXG4gICAgICog5Yid5pyf5YyWXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgqvjgqbjg7Pjg4jjgpLlopfjgoTjgZfjgb7jgZlcclxuICAgICAqL1xyXG4gICAgbG9vcCgpIHtcclxuICAgICAgICB0aGlzLmNvdW50Kys7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCq+OCpuODs+ODiOOCkuWPluW+l1xyXG4gICAgICovXHJcbiAgICBnZXRDb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3VudDtcclxuICAgIH1cclxufVxyXG4vKipcclxuICog44Ot44KwXHJcbiAqL1xyXG5jbGFzcyBMb2dnZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiDjg63jgrDjgpLlh7rlipvjgZnjgotcclxuICAgICAqIEBwYXJhbSBsb2cg5pys5paHXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB3cml0ZShsb2cpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgW05pY29tbWVudEpTXSR7bG9nfWApO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiDjgqjjg6njg7xcclxuICovXHJcbmNvbnN0IE5pY29FeGNlcHRpb25zID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3mnJ/ljJbjgqjjg6njg7xcclxuICAgICAqL1xyXG4gICAgX19JTklUX186IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvJXmlbDjgqjjg6njg7xcclxuICAgICAgICAgKi9cclxuICAgICAgICBBUkdVTUVOVFM6IHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOW/heimgeOBquW8leaVsOOBjOWtmOWcqOOBl+OBquOBhFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTk9UX0VYSVNUOiB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIOmrmOOBlVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBIRUlHSFQ6ICdbRVJSXWFyZ3VtZW50IFwiaGVpZ2h0XCIgbXVzdCBiZSBzcGVjaWZpZWQuJyxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICog5qiq5bmFXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIFdJRFRIOiAnW0VSUl1hcmd1bWVudCBcIndpZHRoXCIgbXVzdCBiZSBzcGVjaWZpZWQuJyxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogSURcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgSUQ6ICdbRVJSXWFyZ3VtZW50IFwiaWRcIiBtdXN0IGJlIHNwZWNpZmllZC4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5byV5pWw44Gu5YCk44GM5LiN6YGp5YiH44Gn44GC44KLXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBOYU46IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICog6auY44GV44GM5pWw5a2X44Gn44Gq44GEXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIEhFSUdIVDogKHZhbHVlKSA9PiBgW0VSUl0ke3ZhbHVlfSBpcyBub3QgYSBudW1iZXIuIFwiaGVpZ2h0XCIgbXVzIGJlIGEgbnVtYmVyLmAsXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIOaoquW5heOBjOaVsOWtl+OBp+OBquOBhFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBXSURUSDogKHZhbHVlKSA9PiBgW0VSUl0ke3ZhbHVlfSBpcyBub3QgYSBudW1iZXIuIFwid2lkdGhcIiBtdXMgYmUgYSBudW1iZXIuYCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44GM5a2Y5Zyo44GX44Gq44GE44O7Y2FudmFz44Gn44Gq44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgRUxFTUVOVDoge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6KaB57Sg44GM5a2Y5Zyo44GX44Gq44GEXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBOT1RfRVhJU1Q6IChpZCkgPT4geyByZXR1cm4gYFtFUlJdQ2FudmFzIEVsZW1lbnQgd2hpY2ggaWQgaXMgXCIke2lkfVwiIHdhcyBub3QgZm91bmQuYDsgfSxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOimgee0oOOBjEhUTUxDYW52YXPjgafjgarjgYRcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIE5PVF9BX0NBTlZBU19FTEVNRU5UOiAoaWQpID0+IHsgcmV0dXJuIGBbRVJSXUVsZW1lbnQgd2hpY2ggaWQgaXMgXCIke2lkfVwiIGlzIG5vdCBhIGNhbnZhc0hUTUw1IEVsZW1lbnQuYDsgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jov73liqDmmYLjga7jgqjjg6njg7xcclxuICAgICAqL1xyXG4gICAgU0VORDoge30sXHJcbiAgICAvKipcclxuICAgICAqIOODrOOCpOODpOODvOmWouS/guOBruOCqOODqeODvFxyXG4gICAgICovXHJcbiAgICBMQVlFUjoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOmHjeikh1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIERVUExJQ0FUSU9OOiAobmFtZSkgPT4geyByZXR1cm4gYFtFUlJdVGhlIGxheWVyIG5hbWUgJHtuYW1lfSBhbHJlYWR5IGV4aXN0cy5gOyB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODrOOCpOODpOODvOOBjOWtmOWcqOOBl+OBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIExBWUVSX0RPRVNfTk9UX0VYSVNUOiAobmFtZSkgPT4geyByZXR1cm4gYFtFUlJdQSBsYXllciBuYW1lIGlzICR7bmFtZX0gZG9lcyBub3QgZXhpc3QuYDsgfSxcclxuICAgIH0sXHJcbn07XHJcbiIsImltcG9ydCB7IERhdGFVdGlscyB9IGZyb20gJy4uL3V0aWxzL0RhdGFVdGlscyc7XHJcbmltcG9ydCBkZWZhdWx0Q29uZmlnIGZyb20gJy4vY29uZmlnJztcclxuLy91dGlsXHJcbmNvbnN0IGRhdGF1dGwgPSBuZXcgRGF0YVV0aWxzKCk7XHJcbi8v44Kz44Oh44Oz44OI44Kq44OW44K444Kn44Kv44OIXHJcbmV4cG9ydCBjbGFzcyBDb21tZW50QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbSkge1xyXG4gICAgICAgIHRoaXMubGlmZSA9IDA7IC8v5q6L44KK44Kz44Oe5pWwXHJcbiAgICAgICAgdGhpcy5kZWx0YSA9IDA7IC8vMeOCs+ODnuW9k+OBn+OCiuOBrljluqfmqJnjga7lpInph49cclxuICAgICAgICB0aGlzLmxlZnQgPSAwOyAvL1jluqfmqJlcclxuICAgICAgICB0aGlzLnRvcCA9IDA7IC8vWeW6p+aomSjljp/ngrnjga/lt6bkuIopXHJcbiAgICAgICAgdGhpcy5yZXZlYWwgPSAwOyAvL+OCs+ODoeODs+ODiOOBjOeUu+mdouWPs+OBi+OCieWujOWFqOOBq+mcsuWHuuOBmeOCi+OBvuOBp+OBruOCs+ODnuaVsFxyXG4gICAgICAgIHRoaXMudG91Y2ggPSAwOyAvL+OCs+ODoeODs+ODiOOBruW3puerr+OBjOeUu+mdouW3puOBq+WIsOmBlOOBmeOCi+OBvuOBp+OBruOCs+ODnuaVsFxyXG4gICAgICAgIHRoaXMuZml4ZWQgPSBmYWxzZTsgLy/lm7rlrprjg5Xjg6njgrBcclxuICAgICAgICB0aGlzLnR5cGUgPSBwYXJhbS5vcHRpb24ubW9kZTsgLy/jgr/jgqTjg5dcclxuICAgICAgICB0aGlzLmN1c3RvbUF0dHIgPSBwYXJhbS5vcHRpb24uY3VzdG9tQXR0cjsgLy/jgqvjgrnjgr/jg6DlsZ7mgKdcclxuICAgICAgICB0aGlzLm9yaWdpbmFsVGV4dCA9IHBhcmFtLnRleHQ7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGhpcy5fZm9ybWF0Q29tbWVudChwYXJhbS50ZXh0LCB0aGlzLnR5cGUpOyAvL+acrOaWh1xyXG4gICAgICAgIHRoaXMudGV4dEZvclJlbmRlciA9IHRoaXMuX2Zvcm1hdFJlbmRlckNvbW1lbnQodGhpcy50ZXh0KTtcclxuICAgICAgICB0aGlzLnRleHRMZW5ndGggPSBNYXRoLm1heCguLi50aGlzLnRleHQubWFwKHRleHQgPT4gdGV4dC5sZW5ndGgpKTtcclxuICAgICAgICB0aGlzLm1heExlbmd0aEluZGV4ID0gdGhpcy50ZXh0Lm1hcChjb21tZW50ID0+IGNvbW1lbnQubGVuZ3RoKS5pbmRleE9mKHRoaXMudGV4dExlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5jb21tZW50TnVtYmVyID0gcGFyYW0uY29tbWVudE51bWJlcjtcclxuICAgICAgICB0aGlzLmNvbG9yID0gcGFyYW0ub3B0aW9uLmNvbG9yOyAvL+iJslxyXG4gICAgICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBwYXJhbS5vcHRpb24uYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgdGhpcy5saW5lcyA9IHRoaXMuX2dldExpbmVzKHBhcmFtLm9wdGlvbi5jb21tZW50U2l6ZSwgcGFyYW0ubGluZXMpO1xyXG4gICAgICAgIHRoaXMuc2VsZkxpbmVzID0gdGhpcy50ZXh0Lmxlbmd0aDsgLy/ooYzmlbBcclxuICAgICAgICB0aGlzLmN0eCA9IHBhcmFtLmN0eDtcclxuICAgICAgICB0aGlzLmZvbnROYW1lID0gcGFyYW0ub3B0aW9uLmZvbnROYW1lOyAvL+ODleOCqeODs+ODiOWQjVxyXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IHBhcmFtLm9wdGlvbi5vcGFjaXR5OyAvL+mAj+mBjuW6plxyXG4gICAgICAgIHRoaXMuZnVsbCA9IHBhcmFtLm9wdGlvbi5mdWxsOyAvL+iHqOeVjOeCueODquOCteOCpOOCulxyXG4gICAgICAgIHRoaXMuY2FudmFzU2l6ZSA9IHBhcmFtLmNhbnZhc1NpemU7XHJcbiAgICAgICAgdGhpcy5jYW52YXNXaWR0aEZsYXNoID0gcGFyYW0uY2FudmFzV2lkdGhGbGFzaDtcclxuICAgICAgICAvL+WbuuWumuODleODqeOCsFxyXG4gICAgICAgIGlmICh0aGlzLnRleHQubGVuZ3RoID49IHRoaXMubGluZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5maXhlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICAvL3Zwb3Pjg7vooajnpLrmmYLplpNcclxuICAgICAgICB0aGlzLnZwb3MgPSBwYXJhbS5vcHRpb24udnBvcztcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gcGFyYW0ub3B0aW9uLmR1cmF0aW9uIHx8IGRlZmF1bHRDb25maWcuZHVyYXRpb247XHJcbiAgICAgICAgLy/jg5Xjgqnjg7Pjg4jplqLkv4JcclxuICAgICAgICB0aGlzLmZvbnRTaXplU3RyaW5nID0gcGFyYW0ub3B0aW9uLmNvbW1lbnRTaXplO1xyXG4gICAgICAgIFt0aGlzLmZvbnRTaXplLCB0aGlzLndpZHRoLCB0aGlzLm9mZnNldFldID0gdGhpcy5fZ2V0Rm9udCh0aGlzLnRleHRbdGhpcy5tYXhMZW5ndGhJbmRleF0sIHRoaXMuY2FudmFzU2l6ZSwgdGhpcy5jYW52YXNXaWR0aEZsYXNoLCBwYXJhbS5vcHRpb24uY29tbWVudFNpemUsIHBhcmFtLmZvbnRTaXplLCBwYXJhbS5maXhlZEZvbnRTaXplLCB0aGlzLnR5cGUsIHBhcmFtLm9wdGlvbi5saW5laGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmZvbnRTaXplU3RyaW5nID0gcGFyYW0ub3B0aW9uLmNvbW1lbnRTaXplO1xyXG4gICAgICAgIHRoaXMub3ZlcmFsbFNpemUgPSB0aGlzLmZvbnRTaXplICogdGhpcy5zZWxmTGluZXM7XHJcbiAgICAgICAgdGhpcy5hbGl2ZSA9IHRydWU7IC8v55Sf5a2Y44OV44Op44KwXHJcbiAgICAgICAgdGhpcy5vbkRpc3Bvc2VkID0gcGFyYW0ub25EaXNwb3NlZDsgLy/jgrPjg7zjg6vjg5Djg4Pjgq9cclxuICAgICAgICB0aGlzLl9zZXQoKTsgLy/jgrvjg4Pjg4jlrp/ooYxcclxuICAgIH1cclxuICAgIC8v5bGe5oCn5Y+W5b6XXHJcbiAgICBnZXRQcm9wKGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1c3RvbUF0dHIuZ2V0KGtleSk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOWHpueQhlxyXG4gICAgICovXHJcbiAgICB0aWNrKHZwb3MpIHtcclxuICAgICAgICBpZiAodnBvcyA+PSB0aGlzLnZwb3MgKyB0aGlzLmR1cmF0aW9uICogMTAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpZmUtLTtcclxuICAgICAgICAvL25ha2HjgrPjg6Hjg7Pjg4jjga7loLTlkIhcclxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnbmFrYScpIHtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0IC09IHRoaXMuZGVsdGE7XHJcbiAgICAgICAgICAgIHRoaXMucmV2ZWFsLS07XHJcbiAgICAgICAgICAgIHRoaXMudG91Y2gtLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubGlmZSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5raWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjga7nlJ/lrZjjg5Xjg6njgrDjgpLlvLfliLbnmoTjgavpmY3jgo3jgZfjgb7jgZlcclxuICAgICAqL1xyXG4gICAga2lsbCgpIHtcclxuICAgICAgICB0aGlzLmFsaXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbkRpc3Bvc2VkKCk7XHJcbiAgICB9XHJcbiAgICAvL+OCu+ODg+ODiFxyXG4gICAgX3NldCgpIHtcclxuICAgICAgICB0aGlzLmxpZmUgPSAwOyAvL+aui+OCiuOCs+ODnuaVsFxyXG4gICAgICAgIHRoaXMubGVmdCA9IDA7IC8vWOW6p+aomVxyXG4gICAgICAgIHRoaXMudG9wID0gMDsgLy9Z5bqn5qiZKOWOn+eCueOBr+W3puS4iilcclxuICAgICAgICB0aGlzLmRlbHRhID0gMDsgLy8x44Kz44Oe5b2T44Gf44KK44GuWOW6p+aomeOBruWkiemHj1xyXG4gICAgICAgIHRoaXMucmV2ZWFsID0gMDsgLy/jgrPjg6Hjg7Pjg4jjgYznlLvpnaLlj7PjgYvjgonlrozlhajjgavpnLLlh7rjgZnjgovjgb7jgafjga7jgrPjg57mlbBcclxuICAgICAgICB0aGlzLnRvdWNoID0gMDsgLy/jgrPjg6Hjg7Pjg4jjga7lt6bnq6/jgYznlLvpnaLlt6bjgavliLDpgZTjgZnjgovjgb7jgafjga7jgrPjg57mlbBcclxuICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICduYWthJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldE5ha2EoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzaGl0YSc6XHJcbiAgICAgICAgICAgIGNhc2UgJ3VlJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldFNoaXRhVWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL25ha2HjgrPjg6Hjg7Pjg4joqK3lrppcclxuICAgIF9zZXROYWthKCkge1xyXG4gICAgICAgIHRoaXMubGlmZSA9IGRlZmF1bHRDb25maWcuZnBzICogdGhpcy5kdXJhdGlvbjtcclxuICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLmNhbnZhc1NpemUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5kZWx0YSA9ICh0aGlzLmNhbnZhc1NpemUud2lkdGggKyB0aGlzLndpZHRoKSAvIHRoaXMubGlmZTtcclxuICAgICAgICB0aGlzLnJldmVhbCA9IHRoaXMud2lkdGggLyB0aGlzLmRlbHRhO1xyXG4gICAgICAgIHRoaXMudG91Y2ggPSB0aGlzLmNhbnZhc1NpemUud2lkdGggLyB0aGlzLmRlbHRhO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBzaGl044O7dWXjgrPjg6Hjg7Pjg4jjgpLoqK3lrprjgZnjgotcclxuICAgICAqIEBwYXJhbSB3aWR0aCBjYW52YXPjga7mqKrluYVcclxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiDjgrPjg6Hjg7Pjg4jooajnpLrmmYLplpNcclxuICAgICAqL1xyXG4gICAgX3NldFNoaXRhVWUoKSB7XHJcbiAgICAgICAgdGhpcy5saWZlID0gZGVmYXVsdENvbmZpZy5mcHMgKiB0aGlzLmR1cmF0aW9uO1xyXG4gICAgICAgIGlmICh0aGlzLmZpeGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCA9ICh0aGlzLmNhbnZhc1NpemUud2lkdGggLSB0aGlzLndpZHRoKSAvIDI7XHJcbiAgICAgICAgICAgIC8vdGhpcy5sZWZ0ID0gdGhpcy5jYW52YXNTaXplLndpZHRoIC8gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IHRoaXMuY2FudmFzU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9mb25044KS5rG65a6a44GZ44KLXHJcbiAgICBfZ2V0Rm9udCh0ZXh0LCBjYW52YXNTaXplLCBmbGFzaFdpZHRoLCBjb21tZW50U2l6ZSwgZm9udFNpemUsIGZpeGVkRm9udFNpemUsIHR5cGUsIGxpbmVIZWlnaHQpIHtcclxuICAgICAgICBsZXQgb3JpZ2luYWxGb250ID0gdGhpcy5fZ2V0U2l6ZShjb21tZW50U2l6ZSwgZm9udFNpemUpO1xyXG4gICAgICAgIGxldCBmb250ID0gb3JpZ2luYWxGb250O1xyXG4gICAgICAgIC8v44O75pS56KGM44Oq44K144Kk44K6XHJcbiAgICAgICAgLy9vdmVyYWxsU2l6ZeOBq+ebuOW9k+OBmeOCi+mrmOOBleOBjOOAgeaPj+WGmemgmOWfn+OBrjEvM+OCkuS4iuWbnuOCi+WgtOWQiOOBq+OAgVxyXG4gICAgICAgIC8v44Oq44K144Kk44K644KS6KGM44GG44CCXHJcbiAgICAgICAgaWYgKG9yaWdpbmFsRm9udCAqIHRoaXMuc2VsZkxpbmVzID4gY2FudmFzU2l6ZS5oZWlnaHQgLyAzKSB7XHJcbiAgICAgICAgICAgIGZvbnQgPSB0aGlzLl9nZXRTaXplKGNvbW1lbnRTaXplLCBmaXhlZEZvbnRTaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IGAke2ZvbnR9cHggXCJZdSBHb3RoaWNcImA7XHJcbiAgICAgICAgbGV0IGNvbVdpZHRoID0gdGhpcy5jdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XHJcbiAgICAgICAgLy/jg7voh6jnlYzluYXjg6rjgrXjgqTjgrpcclxuICAgICAgICAvL+OCs+ODoeODs+ODiOOBruacgOWkp+W5heOBjOaPj+WGmemgmOWfn+OCkuS4iuWbnuOCi+WgtOWQiOOBq+OAgeaPj+WGmemgmOWfn+OBq+WPjuOBvuOCi+OCiOOBhuOBq+ODquOCteOCpOOCuuOBmeOCi1xyXG4gICAgICAgIGNvbnN0IHdpZHRoT3ZlcmZsb3cgPSBjb21XaWR0aCA+IHRoaXMuY2FudmFzU2l6ZS53aWR0aCAmJiB0eXBlICE9PSAnbmFrYSc7XHJcbiAgICAgICAgaWYgKHdpZHRoT3ZlcmZsb3cgJiYgIXRoaXMuZnVsbCkge1xyXG4gICAgICAgICAgICBmb250ID0gdGhpcy5fbW9kU2l6ZShvcmlnaW5hbEZvbnQsIGNvbVdpZHRoLCB0aGlzLmNhbnZhc1dpZHRoRmxhc2gpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gYCR7Zm9udH1weCBcIll1IEdvdGhpY1wiYDtcclxuICAgICAgICAgICAgY29tV2lkdGggPSB0aGlzLmN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAod2lkdGhPdmVyZmxvdyAmJiB0aGlzLmZ1bGwpIHtcclxuICAgICAgICAgICAgZm9udCA9IHRoaXMuX21vZFNpemUob3JpZ2luYWxGb250LCBjb21XaWR0aCwgdGhpcy5jYW52YXNTaXplLndpZHRoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IGAke2ZvbnR9cHggXCJZdSBHb3RoaWNcImA7XHJcbiAgICAgICAgICAgIGNvbVdpZHRoID0gdGhpcy5jdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG9mZnNldFkgPSB0eXBlID09PSAnc2hpdGEnID8gZm9udCAqIChsaW5lSGVpZ2h0IC0gMSkgKiAtMSA6IGZvbnQgKiAobGluZUhlaWdodCAtIDEpO1xyXG4gICAgICAgIHJldHVybiBbZm9udCwgY29tV2lkdGgsIG9mZnNldFldO1xyXG4gICAgfVxyXG4gICAgLy/jg5Xjgqnjg7Pjg4jjgrXjgqTjgrrkv67mraNcclxuICAgIF9tb2RTaXplKGZvbnQsIHdpZHRoLCBjYW52YXNXaWR0aCkge1xyXG4gICAgICAgIHJldHVybiBmb250ICogY2FudmFzV2lkdGggLyB3aWR0aDtcclxuICAgIH1cclxuICAgIC8v5pS56KGM44Oq44K144Kk44K6XHJcbiAgICAvL2ZvbnRTaXpl5Y+W5b6XXHJcbiAgICBfZ2V0U2l6ZShjb21tZW50U2l6ZSwgZm9udFNpemUpIHtcclxuICAgICAgICBzd2l0Y2ggKGNvbW1lbnRTaXplKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JpZyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9udFNpemUuYmlnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NtYWxsJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb250U2l6ZS5zbWFsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbnRTaXplLm1lZGl1bTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOihjOaVsOOCkuaxguOCgeOCi1xyXG4gICAgICogQHBhcmFtIHNpemUgYmlnL3NtYWxsL21lZGl1beOBruOBhOOBmuOCjOOBi1xyXG4gICAgICogQHBhcmFtIGFsbExpbmVzIGNvbW1lbnRMaW5lc+Wei+OBruOCquODluOCuOOCp+OCr+ODiCjjgZ3jgozjgZ7jgozjga7jgrXjgqTjgrrjgavjgaTjgYTjgabooYzmlbDjgpLooajjgZkpXHJcbiAgICAgKi9cclxuICAgIF9nZXRMaW5lcyhzaXplLCBhbGxMaW5lcykge1xyXG4gICAgICAgIHN3aXRjaCAoc2l6ZSkge1xyXG4gICAgICAgICAgICBjYXNlICdiaWcnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbExpbmVzLmJpZztcclxuICAgICAgICAgICAgY2FzZSAnbWVkaXVtJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGxMaW5lcy5tZWRpdW07XHJcbiAgICAgICAgICAgIGNhc2UgJ3NtYWxsJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGxMaW5lcy5zbWFsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOCkuaVtOW9ouOBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIG9yaWdpbiDjgrPjg6Hjg7Pjg4hcclxuICAgICAqIEBwYXJhbSBjb21tZW50UG9zIOOCs+ODoeODs+ODiOOBruOCv+OCpOODl1xyXG4gICAgICovXHJcbiAgICBfZm9ybWF0Q29tbWVudChvcmlnaW4sIGNvbW1lbnRQb3MpIHtcclxuICAgICAgICBsZXQgZm9ybWF0ZWQgPSBkYXRhdXRsLnNwbGl0dGVyKG9yaWdpbiwgJ1xcbicpO1xyXG4gICAgICAgIGZvcm1hdGVkID0gdGhpcy5fZGVsZXRlQmxhbmsoZm9ybWF0ZWQpO1xyXG4gICAgICAgIGZvcm1hdGVkID0gdGhpcy5fZGVsZXRlRmlyc3RBbmRsYXN0QmxhbmsoZm9ybWF0ZWQpO1xyXG4gICAgICAgIGZvcm1hdGVkID0gdGhpcy5fc29ydEJ5VHlwZShmb3JtYXRlZCwgY29tbWVudFBvcyk7XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdGVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmj4/lhpnnlKjjgrPjg6Hjg7Pjg4jjgpLmlbTlvaLjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBvcmlnaW4g44Kz44Oh44Oz44OIXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudFBvcyDjgrPjg6Hjg7Pjg4jjga7jgr/jgqTjg5dcclxuICAgICAqL1xyXG4gICAgX2Zvcm1hdFJlbmRlckNvbW1lbnQob3JpZ2luKSB7XHJcbiAgICAgICAgbGV0IGZvcm1hdGVkID0gWy4uLm9yaWdpbl07XHJcbiAgICAgICAgZm9ybWF0ZWQgPSB0aGlzLl9kZWxldGVCbGFua0xpbmVGcm9tRW5kKG9yaWdpbik7XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdGVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjgYvjgokz5Zue5Lul5LiK6YCj57aa44GZ44KL5pS56KGM44KS5YmK6Zmk44GX44G+44GZ44CCXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudHMg44Kz44Oh44Oz44OI44Gu44Oq44K544OIXHJcbiAgICAgKi9cclxuICAgIF9kZWxldGVCbGFuayhjb21tZW50TGlzdCkge1xyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlZCA9IFtdO1xyXG4gICAgICAgIC8vZm9yLi4uaW7jg6vjg7zjg5fjgaflm57jgZkgXHJcbiAgICAgICAgZm9yIChjb25zdCB0ZXh0IG9mIGNvbW1lbnRMaXN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQmxhbmsgPSAhdGV4dDtcclxuICAgICAgICAgICAgaWYgKGlzQmxhbmspIHtcclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvdW50IDwgMykge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlZC5wdXNoKHRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkZWxldGVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmnIDliJ3jgajmnIDlvozjga7nqbrnmb3ooYzjgpLliYrpmaTjgZfjgb7jgZnjgIJcclxuICAgICAqIEBwYXJhbSBjb21tZW50cyDjgrPjg6Hjg7Pjg4jjga7jg6rjgrnjg4hcclxuICAgICAqL1xyXG4gICAgX2RlbGV0ZUZpcnN0QW5kbGFzdEJsYW5rKGNvbW1lbnRzKSB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlZCA9IFsuLi5jb21tZW50c107XHJcbiAgICAgICAgZm9yIChjb25zdCBjb21tZW50IG9mIGNvbW1lbnRzKSB7XHJcbiAgICAgICAgICAgIGlmICghY29tbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlZC5zaGlmdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lvozjgo3jgYvjgolcclxuICAgICAgICBjb25zdCByZXZlcnNlZCA9IFsuLi5kZWxldGVkXS5yZXZlcnNlKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb21tZW50IG9mIHJldmVyc2VkKSB7XHJcbiAgICAgICAgICAgIGlmICghY29tbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlZC5wb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkZWxldGVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjga7kvY3nva7jgavjgojjgaPjgabjgr3jg7zjg4jjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBjb21tZW50cyDjgrPjg6Hjg7Pjg4jjga7jg6rjgrnjg4hcclxuICAgICAqIEBwYXJhbSB0eXBlIOOCs+ODoeODs+ODiOOBruS9jee9rlxyXG4gICAgICovXHJcbiAgICBfc29ydEJ5VHlwZShjb21tZW50cywgdHlwZSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlID09PSAnc2hpdGEnID8gY29tbWVudHMucmV2ZXJzZSgpIDogY29tbWVudHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOepuuihjOOCkuWJiumZpOOBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIGNvbW1lbnRzIOOCs+ODoeODs+ODiFxyXG4gICAgICovXHJcbiAgICBfZGVsZXRlQmxhbmtMaW5lRnJvbUVuZChjb21tZW50cykge1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdGVkID0gWy4uLmNvbW1lbnRzXTtcclxuICAgICAgICBjb25zdCByZXZlcnNlZCA9IFsuLi5jb21tZW50c10ucmV2ZXJzZSgpO1xyXG4gICAgICAgIGZvciAoY29uc3QgbGluZSBvZiByZXZlcnNlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc0JsYW5rID0gL15cXHMrJC8udGVzdChsaW5lKSB8fCBsaW5lLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICAgICAgaWYgKGlzQmxhbmspIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdGVkLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tQXR0ci5nZXQoJ2NvbW1lbnROdW1iZXInKSA9PT0gOTU1NjAxKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1hdGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdGVkO1xyXG4gICAgfVxyXG59XHJcbi8v5bqn5qiZ5oOF5aCxXHJcbmV4cG9ydCBjbGFzcyBQb2ludCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3MpIHtcclxuICAgICAgICB0aGlzLnggPSBwb3MueDtcclxuICAgICAgICB0aGlzLnkgPSBwb3MueTtcclxuICAgIH1cclxufVxyXG4vL2hlaWdodDp3aWR0aFxyXG5leHBvcnQgY2xhc3MgU2l6ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBzaXplLmhlaWdodDtcclxuICAgICAgICB0aGlzLndpZHRoID0gc2l6ZS53aWR0aDtcclxuICAgIH1cclxufVxyXG4vL+ODrOOCpOODpOODvOOCr+ODqeOCuVxyXG5leHBvcnQgY2xhc3MgTGF5ZXIge1xyXG4gICAgLy/liJ3mnJ/ljJZcclxuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzU2l6ZSwgbGluZXMsIGNvbW1lbnRTaXplLCBjb21tZW50U2l6ZUZpeGVkLCBkdXJhdGlvbiwgbGluZUhlaWdodCkge1xyXG4gICAgICAgIHRoaXMub25EaXNhcG9zZWQgPSAoKSA9PiB7IH07XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTaXplID0gY2FudmFzU2l6ZTtcclxuICAgICAgICB0aGlzLmNhbnZhc1dpZHRoRmxhc2ggPSBjYW52YXNTaXplLmhlaWdodCAvIDMgKiA0O1xyXG4gICAgICAgIHRoaXMubGluZUhlaWdodCA9IGxpbmVIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5saW5lcyA9IGxpbmVzO1xyXG4gICAgICAgIHRoaXMuZm9uclNpemUgPSBjb21tZW50U2l6ZTtcclxuICAgICAgICB0aGlzLmZpeGVkRm9uclNpemUgPSBjb21tZW50U2l6ZUZpeGVkO1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICB0aGlzLmNvbW1lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5tYXhsaW5lcyA9IGxpbmVzLnNtYWxsO1xyXG4gICAgICAgIHRoaXMubmFrYSA9IG5ldyBOYWthTGluZShsaW5lcy5zbWFsbCwgY2FudmFzU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5zaGl0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMudWUgPSBbXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Os44Kk44Ok44O844Gr44Kz44Oh44Oz44OI44KS6L+95Yqg44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gdGV4dCDjgrPjg6Hjg7Pjg4jmnKzmlodcclxuICAgICAqIEBwYXJhbSBjb21tZW50TnVtYmVyIOOCs+ODoeeVqlxyXG4gICAgICogQHBhcmFtIGN1c3RvbUF0dHIg44Kr44K544K/44Og5bGe5oCnXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBuYWthL3NoaXRhL3Vl44Gu44GE44Ga44KM44GLXHJcbiAgICAgKiBAcGFyYW0gc2l6ZSBiaWcvbWVkaXVtL2xhcmdl44Gu44GE44Ga44KM44GLXHJcbiAgICAgKiBAcGFyYW0gdnBvcyBWUE9TXHJcbiAgICAgKi9cclxuICAgIGFkZCh0ZXh0LCBjb21tZW50TnVtYmVyLCBjdXN0b21BdHRyLCB0eXBlID0gJ25ha2EnLCBzaXplID0gJ21lZGl1bScsIGNhbGxCYWNrLCB2cG9zKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tbWVudHMubGVuZ3RoID4gMjApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjb25zdCBvcHJpb25zID0ge1xyXG4gICAgICAgICAgICBtb2RlOiB0eXBlLFxyXG4gICAgICAgICAgICBjb2xvcjogY3VzdG9tQXR0ci5nZXQoJ2NvbG9yJykgfHwgJyNmZmYnLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogY3VzdG9tQXR0ci5nZXQoJ2Jjb2xvcicpIHx8ICcjMDAwJyxcclxuICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGN1c3RvbUF0dHI6IGN1c3RvbUF0dHIsXHJcbiAgICAgICAgICAgIGNvbW1lbnRTaXplOiBzaXplLFxyXG4gICAgICAgICAgICBsaW5laGVpZ2h0OiB0aGlzLmxpbmVIZWlnaHQsXHJcbiAgICAgICAgICAgIHZwb3M6IHZwb3MsXHJcbiAgICAgICAgICAgIGZvbnROYW1lOiBjdXN0b21BdHRyLmdldCgnZm9udE5hbWUnKSxcclxuICAgICAgICAgICAgb3BhY2l0eTogY3VzdG9tQXR0ci5nZXQoJ29wYWNpdHknKSxcclxuICAgICAgICAgICAgZnVsbDogY3VzdG9tQXR0ci5nZXQoJ2Z1bGwnKSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICAgICAgICB0ZXh0OiB0ZXh0LFxyXG4gICAgICAgICAgICBjdHg6IHRoaXMuY3R4LFxyXG4gICAgICAgICAgICBjYW52YXNTaXplOiB0aGlzLmNhbnZhc1NpemUsXHJcbiAgICAgICAgICAgIGNhbnZhc1dpZHRoRmxhc2g6IHRoaXMuY2FudmFzV2lkdGhGbGFzaCxcclxuICAgICAgICAgICAgZm9udFNpemU6IHRoaXMuZm9uclNpemUsXHJcbiAgICAgICAgICAgIGZpeGVkRm9udFNpemU6IHRoaXMuZml4ZWRGb25yU2l6ZSxcclxuICAgICAgICAgICAgbGluZXM6IHRoaXMubGluZXMsXHJcbiAgICAgICAgICAgIG9wdGlvbjogb3ByaW9ucyxcclxuICAgICAgICAgICAgY29tbWVudE51bWJlcjogY29tbWVudE51bWJlcixcclxuICAgICAgICAgICAgb25EaXNwb3NlZDogY2FsbEJhY2sub25EaXNwYXNlZCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRPYmogPSBuZXcgQ29tbWVudEJhc2UocGFyYW0pO1xyXG4gICAgICAgIHN3aXRjaCAoY29tbWVudE9iai50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ25ha2EnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5uYWthLmFkZChjb21tZW50T2JqKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzaGl0YSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmRTaGl0YShjb21tZW50T2JqKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd1ZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmRVZShjb21tZW50T2JqKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5Yem55CGXHJcbiAgICAgKiBAcGFyYW0gY291bnRlciDjg6vjg7zjg5flm57mlbBcclxuICAgICAqL1xyXG4gICAgdGljayhjb3VudGVyLCB2cG9zLCByZW5kZXIpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VnBvcyA9IHZwb3MgPyB2cG9zIDogMDtcclxuICAgICAgICBjb25zdCBkb1JlbmRlciA9IHJlbmRlciA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWVudHMuZm9yRWFjaChjb21tZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkb1JlbmRlcilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXIoY29tbWVudCk7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRpY2soY3VycmVudFZwb3MpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9uYWth44Kz44OhXHJcbiAgICAgICAgaWYgKGRvUmVuZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmFrYS5nZXRMaXN0KCkuZm9yRWFjaChjb21tZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcihjb21tZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubmFrYS50aWNrKGN1cnJlbnRWcG9zKTtcclxuICAgICAgICB0aGlzLl9jbGVhbigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmj4/lhpnlh6bnkIZcclxuICAgICAqIEBwYXJhbSBjb21tZW50IOOCs+ODoeODs+ODiFxyXG4gICAgICovXHJcbiAgICBfcmVuZGVyKGNvbW1lbnQpIHtcclxuICAgICAgICB0aGlzLmN0eC50ZXh0QmFzZWxpbmUgPSAndG9wJztcclxuICAgICAgICAvL+aPg+OBiOS9jee9rlxyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNvbW1lbnQudHlwZSA9PT0gJ25ha2EnIHx8IGNvbW1lbnQuZml4ZWQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGAke2NvbW1lbnQuY29sb3J9YDtcclxuICAgICAgICB0aGlzLmN0eC5zaGFkb3dDb2xvciA9IGNvbW1lbnQuYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHguc2hhZG93T2Zmc2V0WCA9IDEuNTtcclxuICAgICAgICB0aGlzLmN0eC5zaGFkb3dPZmZzZXRZID0gMS41O1xyXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gY29tbWVudC5vcGFjaXR5O1xyXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBgYm9sZCAke2NvbW1lbnQuZm9udFNpemV9cHggXCIke2NvbW1lbnQuZm9udE5hbWV9XCJgO1xyXG4gICAgICAgIC8v5o+P5YaZ5pmC44Gr6ICD5oWu44GZ44KL5q2j6LKgXHJcbiAgICAgICAgY29uc3QgZGVsdGFNaW51c09yUGx1cyA9IGNvbW1lbnQudHlwZSA9PT0gJ3NoaXRhJyA/IC0xIDogMTtcclxuICAgICAgICBjb21tZW50LnRleHRGb3JSZW5kZXIuZm9yRWFjaCgodGV4dCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQodGV4dCwgY29tbWVudC5sZWZ0LCBjb21tZW50LnRvcCArIGNvbW1lbnQuZm9udFNpemUgKiBpbmRleCAqIGRlbHRhTWludXNPclBsdXMgKyBjb21tZW50Lm9mZnNldFkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjgpLliYrpmaTjgZnjgotcclxuICAgICAqIEBwYXJhbSAgb3B0aW9uIOacgOWIneOBruOCs+ODoeODs+ODiOOBvuOBn+OBr+OAgeacgOW+jOOBruOCs+ODoeODs+ODiOOBruOBv+OCkuWJiumZpOOBmeOCi+OBk+OBqOOBjOWHuuadpeOBvuOBmeOAglxyXG4gICAgICovXHJcbiAgICBjbGVhcihvcHRpb24pIHtcclxuICAgICAgICBzd2l0Y2ggKG9wdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIHVuZGVmaW5lZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMuZm9yRWFjaChjb21tZW50ID0+IGNvbW1lbnQua2lsbCgpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmFrYSA9IG5ldyBOYWthTGluZSh0aGlzLmxpbmVzLnNtYWxsLCB0aGlzLmNhbnZhc1NpemUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51ZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGl0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2ZpcnN0JzpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbW1lbnRzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzWzBdLmtpbGwoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdsYXN0JzpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbW1lbnRzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzW3RoaXMuY29tbWVudHMubGVuZ3RoIC0gMV0ua2lsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI6YWN5YiX44GL44KJ44OV44Op44Kw44GM6ZmN44KK44Gm44GE44KL44Kz44Oh44Oz44OI44KS5YmK6ZmkXHJcbiAgICAgKi9cclxuICAgIF9jbGVhbigpIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnRzID0gdGhpcy5jb21tZW50cy5maWx0ZXIoY29tbWV0ID0+IGNvbW1ldC5hbGl2ZSk7XHJcbiAgICAgICAgLy9uYWth44Kz44OhXHJcbiAgICAgICAgdGhpcy5uYWthLmNsZWFuKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIHNoaXRh44Kz44Oh44Oz44OI44KS6L+95Yqg44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudCDjgrPjg6Hjg7Pjg4jjgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgICAqL1xyXG4gICAgX2FwcGVuZFNoaXRhKGNvbW1lbnQpIHtcclxuICAgICAgICAvL3NoaXRh44Kz44Oh44Oz44OIXHJcbiAgICAgICAgbGV0IGJvdHRvbSA9IHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1heGxpbmVzOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hpdGFbaV0gJiYgIWNvbW1lbnQuZml4ZWQpIHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbSAtPSB0aGlzLnNoaXRhW2ldLm92ZXJhbGxTaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuc2hpdGEubGVuZ3RoID09PSAwOlxyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnNoaXRhLmxlbmd0aCA8PSBpOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAhdGhpcy5zaGl0YVtpXS5hbGl2ZTpcclxuICAgICAgICAgICAgICAgIC8v5Zu65a6a44Kz44Oh44Oz44OI44Gn44GC44Gj44Gf5aC05ZCIXHJcbiAgICAgICAgICAgICAgICBjYXNlIGNvbW1lbnQuZml4ZWQ6XHJcbiAgICAgICAgICAgICAgICAvL+OCs+ODoeODs+ODiOOBjOihqOekuumZkOeVjOOCkui2heOBiOOCi+WgtOWQiFxyXG4gICAgICAgICAgICAgICAgY2FzZSBib3R0b20gLSBjb21tZW50Lm92ZXJhbGxTaXplICsgY29tbWVudC5vZmZzZXRZIDwgMDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICBpZiAoY29tbWVudC5maXhlZCkge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC50b3AgPSB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0IC0gY29tbWVudC5mb250U2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChib3R0b20gLSBjb21tZW50Lm92ZXJhbGxTaXplIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC50b3AgPSBNYXRoLnJhbmRvbSgpICogKHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQgLSBjb21tZW50Lm92ZXJhbGxTaXplICsgY29tbWVudC5vZmZzZXRZKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gYm90dG9tIC0gY29tbWVudC5vdmVyYWxsU2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpdGFbaV0gPSBjb21tZW50O1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnB1c2goY29tbWVudCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIHNoaXRh44Kz44Oh44Oz44OI44KS6L+95Yqg44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudCDjgrPjg6Hjg7Pjg4jjgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgICAqL1xyXG4gICAgX2FwcGVuZFVlKGNvbW1lbnQpIHtcclxuICAgICAgICAvL3NoaXRh44Kz44Oh44Oz44OIXHJcbiAgICAgICAgbGV0IHRvcCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1heGxpbmVzOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudWVbaV0gJiYgIWNvbW1lbnQuZml4ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRvcCArPSB0aGlzLnVlW2ldLm92ZXJhbGxTaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMudWUubGVuZ3RoID09PSAwOlxyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnVlLmxlbmd0aCA8PSBpOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAhdGhpcy51ZVtpXS5hbGl2ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgY29tbWVudC5maXhlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgdG9wICsgY29tbWVudC5vdmVyYWxsU2l6ZSA+IHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgaWYgKGNvbW1lbnQuZml4ZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnVlW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IE1hdGgucmFuZG9tKCkgKiAodGhpcy5jYW52YXNTaXplLmhlaWdodCAtIGNvbW1lbnQub3ZlcmFsbFNpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC50b3AgPSB0b3A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICB0aGlzLnVlW2ldID0gY29tbWVudDtcclxuICAgICAgICAgICAgdGhpcy5jb21tZW50cy5wdXNoKGNvbW1lbnQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmjIflrprjgZfjgZ/kvY3nva7jgavlrZjlnKjjgZnjgovjgrPjg6Hjg7Pjg4jjgpLlj5blvpfjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSB4IFjluqfmqJlcclxuICAgICAqIEBwYXJhbSB5IFnluqfmqJlcclxuICAgICAqL1xyXG4gICAgZ2V0KHgsIHkpIHtcclxuICAgICAgICBjb25zdCBuYWthID0gdGhpcy5uYWthLmdldCh4LCB5KTtcclxuICAgICAgICBpZiAobmFrYSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuYWthO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tbWVudHMuZmluZChjb21tZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhbGYgPSBjb21tZW50LndpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzWCA9IHggPiBjb21tZW50LmxlZnQgLSBoYWxmICYmIHggPCBjb21tZW50LmxlZnQgKyBoYWxmO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNZID0geSA+IGNvbW1lbnQudG9wICYmIHkgPCBjb21tZW50LnRvcCArIGNvbW1lbnQub3ZlcmFsbFNpemU7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNYICYmIGlzWSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBuYWth44Kz44Oh44Oz44OIXHJcbiAqL1xyXG5jbGFzcyBOYWthTGluZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzbWFsbExpbmVzLCBzaXplKSB7XHJcbiAgICAgICAgLy/phY3liJfliJ3mnJ/ljJZcclxuICAgICAgICB0aGlzLmNvbW1lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5sYXN0Q29tbWVudFN0cmVhbSA9IFtdO1xyXG4gICAgICAgIC8v6YWN5YiX6ZW3XHJcbiAgICAgICAgdGhpcy5hbGxpbmVzID0gc21hbGxMaW5lcztcclxuICAgICAgICAvL2NhbnZhc+OCteOCpOOCulxyXG4gICAgICAgIHRoaXMuY2FudmFzU2l6ZSA9IHNpemU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIG5ha2HjgrPjg6Hjg7Pjg4jjgpLov73liqDjgZnjgotcclxuICAgICAqIEBwYXJhbSBjb21tZW50IOOCs+ODoeODs+ODiFxyXG4gICAgICovXHJcbiAgICBhZGQoY29tbWVudCkge1xyXG4gICAgICAgIGxldCB0b3AgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxpbmVzOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbGluZSA9IHRoaXMubGFzdENvbW1lbnRTdHJlYW1baV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgLy9p6KGM55uu44Gr44Kz44Oh44Oz44OI44GM54Sh44GE5aC05ZCIXHJcbiAgICAgICAgICAgICAgICBjYXNlIChsaW5lID09PSB1bmRlZmluZWQpOlxyXG4gICAgICAgICAgICAgICAgLy/lm7rlrprjgrPjg6HjgafjgYLjgaPjgZ/loLTlkIhcclxuICAgICAgICAgICAgICAgIGNhc2UgKGNvbW1lbnQuZml4ZWQpOlxyXG4gICAgICAgICAgICAgICAgLy/mnIDntYLov73liqDjgrPjg6Hjg7Pjg4jjgYzlhajjgabooajnpLrjgZXjgozjgabjgYTjgabjgIHjgarjgYrjgYvjgaTov73jgYTjgaTjgYvjgarjgYTloLTlkIhcclxuICAgICAgICAgICAgICAgIGNhc2UgKGxpbmUucmV2ZWFsIDwgMCAmJiBsaW5lLmxpZmUgPCBjb21tZW50LnRvdWNoKTpcclxuICAgICAgICAgICAgICAgIC8v44Kz44Oh44Oz44OI44GudG9w44GMY2FudmFz44Gu6auY44GV44KS6LaF44GI44Gm44GE44KLXHJcbiAgICAgICAgICAgICAgICBjYXNlICh0b3AgKyBjb21tZW50Lm92ZXJhbGxTaXplID4gdGhpcy5jYW52YXNTaXplLmhlaWdodCk6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvL+OBneOCjOS7peWkluOBr+asoeOBruihjOOCkueiuuiqjVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0b3AgKz0gbGluZS5vdmVyYWxsU2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIC8v5bqn5qiZ6Kit5a6aXHJcbiAgICAgICAgICAgIGlmIChjb21tZW50LmZpeGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodG9wICsgY29tbWVudC5vdmVyYWxsU2l6ZSA+IHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIC8v5by+5bmV44Oi44O844OJXHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IE1hdGgucmFuZG9tKCkgKiAodGhpcy5jYW52YXNTaXplLmhlaWdodCAtIGNvbW1lbnQub3ZlcmFsbFNpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC50b3AgPSB0b3A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb21tZW50cy5wdXNoKGNvbW1lbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RDb21tZW50U3RyZWFtW2ldID0gY29tbWVudDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmtYHjgozjgZ/jgrPjg6Hjg7Pjg4jjgpLliYrpmaTjgZnjgotcclxuICAgICAqL1xyXG4gICAgY2xlYW4oKSB7XHJcbiAgICAgICAgdGhpcy5jb21tZW50cyA9IHRoaXMuY29tbWVudHMuZmlsdGVyKGNvbW1lbnQgPT4gY29tbWVudC5hbGl2ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOWHpueQhlxyXG4gICAgICovXHJcbiAgICB0aWNrKHZwb3MpIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnRzLmZvckVhY2goY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbW1lbnQudGljayh2cG9zKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI44Gu44Oq44K544OI44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgKi9cclxuICAgIGdldExpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWVudHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOCkuWPluW+l+OBmeOCi1xyXG4gICAgICogQHBhcmFtIHggWOW6p+aomVxyXG4gICAgICogQHBhcmFtIHkgWeW6p+aomVxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgZ2V0KHgsIHkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21tZW50cy5maW5kKGNvbW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc1ggPSB4ID4gY29tbWVudC5sZWZ0ICYmIHggPCBjb21tZW50LmxlZnQgKyBjb21tZW50LndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBpc1kgPSB5ID4gY29tbWVudC50b3AgJiYgeSA8IGNvbW1lbnQudG9wICsgY29tbWVudC5vdmVyYWxsU2l6ZTtcclxuICAgICAgICAgICAgaWYgKGlzWCAmJiBpc1kpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy/lrprmlbBcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZnBzOiA2MCxcclxuICAgIGR1cmF0aW9uOiAzLFxyXG4gICAgbGluZUhlaWdodDogMS4yLFxyXG4gICAgYmlnTGluZXM6IDgsXHJcbiAgICBtZWRpdW1MaW5lczogMTEsXHJcbiAgICBzbWFsbExpbmVzOiAxNixcclxuICAgIGZpeDoge1xyXG4gICAgICAgIHNtYWw6IDM4LFxyXG4gICAgICAgIGJpZzogMTYsXHJcbiAgICAgICAgbWVkaXVtOiAyNSxcclxuICAgIH0sXHJcbiAgICBkZWZhdWx0Q29sb3I6ICcjZmZmJyxcclxuICAgIGRlZmF1bHRMYXllcjogJ2Jhc2UnLFxyXG4gICAgZGVmYXVsdEZvbnQ6ICdNUyBQR290aGljJyxcclxuICAgIG9wYWNpdHk6IDEsXHJcbn07XHJcbiIsImV4cG9ydCBjbGFzcyBEYXRhVXRpbHMge1xyXG4gICAgc3BsaXR0ZXIodmFsdWUsIHNwbGl0QnkgPSAnLCcpIHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnNwbGl0KHNwbGl0QnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICAvLzDln4vjgoFcclxuICAgIHBhZGRpbmcobnVtLCBkaWdpdCA9IDIsIHBhZGRTdHJpbmcgPSAnMCcpIHtcclxuICAgICAgICBpZiAobnVtIDwgMTAgKiogZGlnaXQpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luID0gbnVtLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGxldCBwYWRkZWQgPSBvcmlnaW47XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlnaXQgLSBvcmlnaW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHBhZGRlZCA9IHBhZGRTdHJpbmcgKyBwYWRkZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBhZGRlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudW0udG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOODjeOCueODiOOBleOCjOOBn+mFjeWIl+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAgICogQHBhcmFtIGxlbiDphY3liJfplbdcclxuICAgICAqL1xyXG4gICAgY3JlYXRlTmVzdGVkQXJyYXkobGVuKSB7XHJcbiAgICAgICAgY29uc3QgYXJyID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBhcnIucHVzaChbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVBcnJheShsZW4pIHtcclxuICAgICAgICBjb25zdCBhcnIgPSBbXTtcclxuICAgICAgICBhcnIubGVuZ3RoID0gbGVuO1xyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFZQT1PjgYvjgonmmYLplpPjgpLoqIjnrpfjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSB2cG9zIFZQT1NcclxuICAgICAqL1xyXG4gICAgY2FsY1ZQT1ModnBvcykge1xyXG4gICAgICAgIGNvbnN0IHNlY29uZCA9IE1hdGguZmxvb3IodnBvcyAvIDEwMCk7XHJcbiAgICAgICAgY29uc3QgbWludXRlID0gTWF0aC5mbG9vcihzZWNvbmQgLyA2MCk7XHJcbiAgICAgICAgY29uc3QgZXh0cmEgPSBNYXRoLmZsb29yKHNlY29uZCAlIDYwKTtcclxuICAgICAgICByZXR1cm4geyBtczogeyBtaW46IG1pbnV0ZSwgc2VjOiBleHRyYSB9LCBzZWM6IHNlY29uZCB9O1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=