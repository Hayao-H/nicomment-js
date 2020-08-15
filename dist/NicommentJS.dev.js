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
                + `buildDate:${"2020/7/15 14:27"}\n`
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
            if (render === undefined || render === true) {
                this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
            }
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
        //コメントの累計表示時間が既定の2倍以上であった場合、コメントを削除する
        if (vpos >= this.vpos + this.duration * 200) {
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
        if (this.comments.length > 40)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OaWNvbW1lbnRKUy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvLi9lbnYvREVWLmpzIiwid2VicGFjazovL05pY29tbWVudEpTLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL05pY29tbWVudEpTLy4vc3JjL21vZHVsZS9Db21tZW50LnRzIiwid2VicGFjazovL05pY29tbWVudEpTLy4vc3JjL21vZHVsZS9jb25maWcudHMiLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvLi9zcmMvdXRpbHMvRGF0YVV0aWxzLnRzIl0sIm5hbWVzIjpbInZpcnNpb24iLCJidWlsZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7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Q0E7QUFDQSxvQkFBb0IsK0NBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsS0FBSztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGNBQWM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCLE1BQU0saUJBQWlCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNW5CQTtBQUFBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2pCRjtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDJCQUEyQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNLDBCQUEwQjtBQUNoRDtBQUNBIiwiZmlsZSI6Ik5pY29tbWVudEpTLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk5pY29tbWVudEpTXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk5pY29tbWVudEpTXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgZGVmYXVsdHtcclxuICAgIHZpcnNpb246J3YxLjAwQGJ1aWxkOjIwMDgxNTA4NDAnLFxyXG4gICAgYnVpbGQ6J0RldmVsb3BtZW50JyxcclxufSIsImltcG9ydCB7IFNpemUsIExheWVyIH0gZnJvbSAnLi9tb2R1bGUvQ29tbWVudCc7XHJcbmltcG9ydCBkZWZhdWx0Q29uZmlnIGZyb20gJy4vbW9kdWxlL2NvbmZpZyc7XHJcbmltcG9ydCBDb25maWcgZnJvbSAnc3lzRW52JztcclxuLyoqXHJcbiAqIOODoeOCpOODs+OCr+ODqeOCuVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmljb21tZW50SlMge1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGlkIGNhbnZhc+OBrklEXHJcbiAgICAgKiBAcGFyYW0gd2lkdGggY2FudmFz44Gu5bmFXHJcbiAgICAgKiBAcGFyYW0gaGVpZ2h0IGNhbnZhc+OBrumrmOOBlVxyXG4gICAgICogQHBhcmFtIG9wdGlvbiDjgqrjg5fjgrfjg6fjg7NcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoaWQsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbikge1xyXG4gICAgICAgIGlmIChJU19ERVZFTE9QTUVOVCkge1xyXG4gICAgICAgICAgICBMb2dnZXIud3JpdGUoJ+OBk+OBruODkOODvOOCuOODp+ODs+OBr+mWi+eZuueJiOOBruOBn+OCgeOAgeS4jeWuieWumuOBquaMmeWLleOCkuOBqOOCi+WgtOWQiOOBjOOBguOCiuOBvuOBmeOAglxcbidcclxuICAgICAgICAgICAgICAgICsgYHZlcnNpb246JHtDb25maWcudmlyc2lvbn1cXG5gXHJcbiAgICAgICAgICAgICAgICArIGBidWlsZERhdGU6JHtCVUlMRF9EQVRFfVxcbmBcclxuICAgICAgICAgICAgICAgICsgYGJ1aWxkOiR7Q29uZmlnLmJ1aWxkfWBcclxuICAgICAgICAgICAgICAgICsgYGJ1ZyByZXBvcnQ6aHR0cHM6Ly9naXRodWIuY29tL0hheWFvLUgvbmljb21tZW50LWpzL2lzc3Vlc2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChJU19ERUJVRykge1xyXG4gICAgICAgICAgICBMb2dnZXIud3JpdGUoYOOBk+OBruODkOODvOOCuOODp+ODs+OBr+ODh+ODkOODg+OCsOeJiOOBp+OBmeOAglxcbmBcclxuICAgICAgICAgICAgICAgICsgYHZlcnNpb246JHtDb25maWcudmlyc2lvbn1cXG5gXHJcbiAgICAgICAgICAgICAgICArIGBidWlsZERhdGU6JHtCVUlMRF9EQVRFfVxcbmBcclxuICAgICAgICAgICAgICAgICsgYGJ1aWxkOiR7Q29uZmlnLmJ1aWxkfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+W8leaVsOODgeOCp+ODg+OCr1xyXG4gICAgICAgIHRoaXMuY2hlY2tBcmdzKGlkLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAvL2NvbnRleHRcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuX2dldENvbnRleHQoaWQsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIC8v44K144Kk44K6XHJcbiAgICAgICAgdGhpcy5jYW52YXNTaXplID0gbmV3IFNpemUoeyBoZWlnaHQ6IGhlaWdodCwgd2lkdGg6IHdpZHRoIH0pO1xyXG4gICAgICAgIC8v44Oh44K/5oOF5aCxXHJcbiAgICAgICAgdGhpcy5tZXRhID0gbmV3IE1ldGEoKTtcclxuICAgICAgICAvL+ihqOekuuaZgumWk1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBvcHRpb24gPyBvcHRpb24uZHVyYXRpb24gPyBvcHRpb24uZHVyYXRpb24gOiBkZWZhdWx0Q29uZmlnLmR1cmF0aW9uIDogZGVmYXVsdENvbmZpZy5kdXJhdGlvbjtcclxuICAgICAgICAvL+iHquWLleabtOaWsFxyXG4gICAgICAgIHRoaXMubWFpbkxheWVyTmFtZSA9IG9wdGlvbiA/IG9wdGlvbi5sYXllck5hbWUgPyBvcHRpb24ubGF5ZXJOYW1lIDogZGVmYXVsdENvbmZpZy5kZWZhdWx0TGF5ZXIgOiBkZWZhdWx0Q29uZmlnLmRlZmF1bHRMYXllcjtcclxuICAgICAgICAvL+OCteOCpOOCuuODu+ODleOCqeODs+ODiFxyXG4gICAgICAgIHRoaXMubGluZUhlaWdodCA9IG9wdGlvbiA/IG9wdGlvbi5saW5laGVnaHQgPyBvcHRpb24ubGluZWhlZ2h0IDogZGVmYXVsdENvbmZpZy5saW5lSGVpZ2h0IDogZGVmYXVsdENvbmZpZy5saW5lSGVpZ2h0OyAvL+ihqOekuuaZgumWk1xyXG4gICAgICAgIHRoaXMubGluZXMgPSB7XHJcbiAgICAgICAgICAgIGJpZzogb3B0aW9uID8gb3B0aW9uLmJpZ0xpbmVzID8gb3B0aW9uLmJpZ0xpbmVzIDogZGVmYXVsdENvbmZpZy5iaWdMaW5lcyA6IGRlZmF1bHRDb25maWcuYmlnTGluZXMsXHJcbiAgICAgICAgICAgIG1lZGl1bTogb3B0aW9uID8gb3B0aW9uLm1lZGl1bUxpbmVzID8gb3B0aW9uLm1lZGl1bUxpbmVzIDogZGVmYXVsdENvbmZpZy5tZWRpdW1MaW5lcyA6IGRlZmF1bHRDb25maWcubWVkaXVtTGluZXMsXHJcbiAgICAgICAgICAgIHNtYWxsOiBvcHRpb24gPyBvcHRpb24uc21hbGxMaW5lcyA/IG9wdGlvbi5zbWFsbExpbmVzIDogZGVmYXVsdENvbmZpZy5zbWFsbExpbmVzIDogZGVmYXVsdENvbmZpZy5zbWFsbExpbmVzXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmZpeGVkTGluZXMgPSB7IGJpZzogZGVmYXVsdENvbmZpZy5maXguYmlnLCBtZWRpdW06IGRlZmF1bHRDb25maWcuZml4Lm1lZGl1bSwgc21hbGw6IGRlZmF1bHRDb25maWcuZml4LnNtYWwgfTtcclxuICAgICAgICB0aGlzLmZvbnJTaXplID0gdGhpcy5fZ2V0Rm9udFNpemUoaGVpZ2h0LCB0aGlzLmxpbmVzKTsgLy9maW50U0l6ZeS4gOimp1xyXG4gICAgICAgIHRoaXMuZml4ZWRGb25yU2l6ZSA9IHRoaXMuX2dldEZvbnRTaXplKGhlaWdodCwgdGhpcy5maXhlZExpbmVzKTtcclxuICAgICAgICAvL+ODrOOCpOODpOODvFxyXG4gICAgICAgIHRoaXMubWFpbkxheWVyTmFtZSA9IG9wdGlvbiA/IG9wdGlvbi5sYXllck5hbWUgPyBvcHRpb24ubGF5ZXJOYW1lIDogZGVmYXVsdENvbmZpZy5kZWZhdWx0TGF5ZXIgOiBkZWZhdWx0Q29uZmlnLmRlZmF1bHRMYXllcjtcclxuICAgICAgICB0aGlzLmxheWVycyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmFkZExheWVyKHRoaXMubWFpbkxheWVyTmFtZSk7XHJcbiAgICAgICAgdGhpcy50b3RhbCA9IDA7XHJcbiAgICAgICAgdGhpcy5ydW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNQbGF5ID0gdHJ1ZTtcclxuICAgICAgICAvL+iHquWLleabtOaWsOODleODqeOCsFxyXG4gICAgICAgIHRoaXMuYXV0b1RpY2tEaXNhYmxlZCA9IG9wdGlvbiA/IG9wdGlvbi5hdXRvVGlja0Rpc2FibGVkID8gb3B0aW9uLmF1dG9UaWNrRGlzYWJsZWQgOiBmYWxzZSA6IGZhbHNlO1xyXG4gICAgICAgIGlmIChJU19ERUJVRykge1xyXG4gICAgICAgICAgICBMb2dnZXIud3JpdGUoYGNhbnZhc0lEOiR7aWR9LCB3aWR0aDoke3dpZHRofXB4LCBoZWlnaHQ6JHtoZWlnaHR9cHhgKTtcclxuICAgICAgICAgICAgTG9nZ2VyLndyaXRlKCfliJ3mnJ/ljJbjgYzlrozkuobjgZfjgb7jgZfjgZ/jgIInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmF1dG9UaWNrRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLndyaXRlKCfmm7TmlrDlh6bnkIbjgpLplovlp4vjgZfjgb7jgZnjgIInKTtcclxuICAgICAgICAgICAgdGhpcy50aWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5byV5pWw44OB44Kn44OD44KvXHJcbiAgICAgKiBAcGFyYW0gaWQgaWRcclxuICAgICAqIEBwYXJhbSB3aWR0aCB3aWR0aFxyXG4gICAgICogQHBhcmFtIGhlaWdodCBoZWlnaHRcclxuICAgICAqL1xyXG4gICAgY2hlY2tBcmdzKGlkLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgaWYgKCFpZClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLl9fSU5JVF9fLkFSR1VNRU5UUy5OT1RfRVhJU1QuSUQpO1xyXG4gICAgICAgIGlmICghd2lkdGgpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5BUkdVTUVOVFMuTk9UX0VYSVNULldJRFRIKTtcclxuICAgICAgICBpZiAoIWhlaWdodClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLl9fSU5JVF9fLkFSR1VNRU5UUy5OT1RfRVhJU1QuSEVJR0hUKTtcclxuICAgICAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLl9fSU5JVF9fLkFSR1VNRU5UUy5OYU4uV0lEVEgod2lkdGgpKTtcclxuICAgICAgICBpZiAodHlwZW9mIGhlaWdodCAhPT0gJ251bWJlcicpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5BUkdVTUVOVFMuTmFOLkhFSUdIVChoZWlnaHQpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI44KS6L+95Yqg44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gdGV4dCDooajnpLrjgZnjgovjgrPjg6Hjg7Pjg4hcclxuICAgICAqIEBwYXJhbSBvcHRpb27jgIDjgqrjg5fjgrfjg6fjg7PjgII7XHJcbiAgICAgKi9cclxuICAgIHNlbmQodGV4dCwgb3B0aW9uKSB7XHJcbiAgICAgICAgbGV0IGN1c3RvbUF0dHIgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBvcHRpb24gPyBvcHRpb24ubGF5ZXIgPyBvcHRpb24ubGF5ZXIgOiB0aGlzLm1haW5MYXllck5hbWUgOiB0aGlzLm1haW5MYXllck5hbWU7XHJcbiAgICAgICAgY29uc3QgY29tVHlwZSA9IG9wdGlvbiA/IG9wdGlvbi50eXBlID8gb3B0aW9uLnR5cGUgOiAnbmFrYScgOiAnbmFrYSc7XHJcbiAgICAgICAgY29uc3QgY29tU2l6ZSA9IG9wdGlvbiA/IG9wdGlvbi5zaXplID8gb3B0aW9uLnNpemUgOiAnbWVkaXVtJyA6ICdtZWRpdW0nO1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gb3B0aW9uID8gb3B0aW9uLmNvbG9yID8gb3B0aW9uLmNvbG9yIDogJyNmZmYnIDogJyNmZmYnO1xyXG4gICAgICAgIGNvbnN0IGJjb2xvciA9IHRoaXMuZ2V0QmNvbG9yKGNvbG9yKTtcclxuICAgICAgICBjb25zdCB2cG9zID0gb3B0aW9uID8gb3B0aW9uLnZwb3MgPyBvcHRpb24udnBvcyA6IDAgOiAwO1xyXG4gICAgICAgIGNvbnN0IGZvbnROYW1lID0gb3B0aW9uID8gb3B0aW9uLmZvbnROYW1lID8gb3B0aW9uLmZvbnROYW1lIDogZGVmYXVsdENvbmZpZy5kZWZhdWx0Rm9udCA6IGRlZmF1bHRDb25maWcuZGVmYXVsdEZvbnQ7XHJcbiAgICAgICAgY29uc3Qgb3BhY2l0eSA9IG9wdGlvbiA/IG9wdGlvbi5vcGFjaXR5ID8gb3B0aW9uLm9wYWNpdHkgOiBkZWZhdWx0Q29uZmlnLm9wYWNpdHkgOiBkZWZhdWx0Q29uZmlnLm9wYWNpdHk7XHJcbiAgICAgICAgY29uc3QgZnVsbCA9IG9wdGlvbiA/IG9wdGlvbi5mdWxsID8gb3B0aW9uLmZ1bGwgOiBmYWxzZSA6IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IG9uRGlzcG9zZWQgPSBvcHRpb24gPyBvcHRpb24ub25EaXNwb3NlZCA/IG9wdGlvbi5vbkRpc3Bvc2VkIDogKCkgPT4geyB9IDogKCkgPT4geyB9O1xyXG4gICAgICAgIHRoaXMudG90YWwrKztcclxuICAgICAgICBpZiAob3B0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbi5jdXN0b21BdHRyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGN1c3RvbUF0dHIgPSB0aGlzLl9nZXRBdHRyKG9wdGlvbi5jdXN0b21BdHRyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjdXN0b21BdHRyLnNldCgnY29sb3InLCBjb2xvcik7XHJcbiAgICAgICAgY3VzdG9tQXR0ci5zZXQoJ2Jjb2xvcicsIGJjb2xvcik7XHJcbiAgICAgICAgY3VzdG9tQXR0ci5zZXQoJ2ZvbnROYW1lJywgZm9udE5hbWUpO1xyXG4gICAgICAgIGN1c3RvbUF0dHIuc2V0KCdvcGFjaXR5Jywgb3BhY2l0eSk7XHJcbiAgICAgICAgY3VzdG9tQXR0ci5zZXQoJ2Z1bGwnLCBmdWxsKTtcclxuICAgICAgICBjb25zdCBsYXllck9iaiA9IHRoaXMubGF5ZXJzLmdldChsYXllcik7XHJcbiAgICAgICAgaWYgKGxheWVyT2JqICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGF5ZXJPYmouYWRkKHRleHQsIHRoaXMudG90YWwsIGN1c3RvbUF0dHIsIGNvbVR5cGUsIGNvbVNpemUsIHsgb25EaXNwYXNlZDogb25EaXNwb3NlZCB9LCB2cG9zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5MQVlFUi5MQVlFUl9ET0VTX05PVF9FWElTVChsYXllcikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5LiA5pmC5YGc5q2iXHJcbiAgICAgKi9cclxuICAgIHBhdXNlKCkge1xyXG4gICAgICAgIHRoaXMuaXNQbGF5ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWGjeeUn1xyXG4gICAgICovXHJcbiAgICBwbGF5KCkge1xyXG4gICAgICAgIHRoaXMuaXNQbGF5ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI44KS5YmK6Zmk44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gbGF5ZXIg44Os44Kk44Ok44O8XHJcbiAgICAgKi9cclxuICAgIGNsZWFyKGxheWVyKSB7XHJcbiAgICAgICAgaWYgKGxheWVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxheWVyT2JqID0gdGhpcy5sYXllcnMuZ2V0KGxheWVyKTtcclxuICAgICAgICAgICAgaWYgKGxheWVyT2JqICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGxheWVyT2JqLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuTEFZRVIuTEFZRVJfRE9FU19OT1RfRVhJU1QobGF5ZXIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgICAgICBsYXllci5jbGVhcigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWFqOOBpuOBruWHpueQhuOCkue1guS6huOBl+OBvuOBmVxyXG4gICAgICovXHJcbiAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgIHRoaXMucnVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1BsYXkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgbGF5ZXIuY2xlYXIoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNTaXplLndpZHRoLCB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmxheWVycy5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlsZ7mgKfjgpLlj5blvpfjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBjdXN0b21BdHRyIOOCq+OCueOCv+ODoOWxnuaAp1xyXG4gICAgICovXHJcbiAgICBfZ2V0QXR0cihjdXN0b21BdHRyKSB7XHJcbiAgICAgICAgY29uc3QgbWFwb2JqID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGN1c3RvbUF0dHIpKSB7XHJcbiAgICAgICAgICAgIG1hcG9iai5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXBvYmo7XHJcbiAgICB9XHJcbiAgICBfZ2V0Rm9udFNpemUoaGVpZ2h0LCBsaW5lcykge1xyXG4gICAgICAgIGNvbnN0IGJpZyA9IGhlaWdodCAvIGxpbmVzLmJpZztcclxuICAgICAgICBjb25zdCBtZWRpdW0gPSBoZWlnaHQgLyBsaW5lcy5tZWRpdW07XHJcbiAgICAgICAgY29uc3Qgc21hbGwgPSBoZWlnaHQgLyBsaW5lcy5zbWFsbDtcclxuICAgICAgICByZXR1cm4geyBiaWc6IGJpZywgbWVkaXVtOiBtZWRpdW0sIHNtYWxsOiBzbWFsbCB9O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBjYW52YXPjgrPjg7Pjg4bjgq3jgrnjg4jjgpLlj5blvpfjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBpZCBJRFxyXG4gICAgICogQHBhcmFtIHdpZHRoIOaoquW5hVxyXG4gICAgICogQHBhcmFtIGhlaWdodCDpq5jjgZVcclxuICAgICAqL1xyXG4gICAgX2dldENvbnRleHQoaWQsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICBjb25zdCBlbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKCFlbG0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLl9fSU5JVF9fLkVMRU1FTlQuTk9UX0VYSVNUKGlkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbG0uaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgICAgICBlbG0ud2lkdGggPSB3aWR0aDtcclxuICAgICAgICAgICAgZWxtLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xyXG4gICAgICAgICAgICBlbG0uc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgY29uc3QgY3R4ID0gZWxtLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgIGlmIChjdHggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Oh44Kk44Oz44Or44O844OXXHJcbiAgICAgKi9cclxuICAgIHRpY2sodnBvcywgcmVuZGVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQbGF5KSB7XHJcbiAgICAgICAgICAgIGlmIChyZW5kZXIgPT09IHVuZGVmaW5lZCB8fCByZW5kZXIgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc1NpemUud2lkdGgsIHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGF5ZXIudGljayh0aGlzLm1ldGEuZ2V0Q291bnQoKSwgdnBvcywgcmVuZGVyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMubWV0YS5sb29wKCk7IC8v44Kk44Oz44Kv44Oq44Oh44Oz44OIXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnJ1biAmJiAhdGhpcy5hdXRvVGlja0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7IHRoaXMudGljayh2cG9zKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog57iB5Y+W44KK6Imy44KS5Y+W5b6X44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gY29sb3Ig6ImyXHJcbiAgICAgKi9cclxuICAgIGdldEJjb2xvcihjb2xvcikge1xyXG4gICAgICAgIHN3aXRjaCAoY29sb3IpIHtcclxuICAgICAgICAgICAgY2FzZSAnYmxhY2snOlxyXG4gICAgICAgICAgICBjYXNlICcjMDAwJzpcclxuICAgICAgICAgICAgY2FzZSAnIzAwMDAwMCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyNmZmYnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyMwMDAnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5oyH5a6a44GX44Gf5L2N572u44Gr5a2Y5Zyo44GZ44KL44Kz44Oh44Oz44OI44KS5Y+W5b6X44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0geCBY5bqn5qiZXHJcbiAgICAgKiBAcGFyYW0geSBZ5bqn5qiZXHJcbiAgICAgKi9cclxuICAgIGdldCh4LCB5KSB7XHJcbiAgICAgICAgbGV0IGNvbW1lbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGNvbW1lbnQgPSBsYXllci5nZXQoeCwgeSk7XHJcbiAgICAgICAgICAgIGlmIChjb21tZW50KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBjb21tZW50O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjg6zjgqTjg6Tjg7zjgpLov73liqDjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBsYXllck5hbWUg44Os44Kk44Ok44O85ZCNXHJcbiAgICAgKi9cclxuICAgIGFkZExheWVyKGxheWVyTmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmxheWVycy5oYXMobGF5ZXJOYW1lKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuTEFZRVIuRFVQTElDQVRJT04obGF5ZXJOYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxheWVycy5zZXQobGF5ZXJOYW1lLCBuZXcgTGF5ZXIodGhpcy5jdHgsIHRoaXMuY2FudmFzU2l6ZSwgdGhpcy5saW5lcywgdGhpcy5mb25yU2l6ZSwgdGhpcy5maXhlZEZvbnJTaXplLCB0aGlzLmR1cmF0aW9uLCB0aGlzLmxpbmVIZWlnaHQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKElTX0RFQlVHKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci53cml0ZShg44Os44Kk44Ok44O8IFwiJHtsYXllck5hbWV9XCIg44KS6L+95Yqg44GX44G+44GX44Gf44CCYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjg6zjgqTjg6Tjg7zjgpLliYrpmaTjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBsYXllck5hbWUg44Os44Kk44Ok44O85ZCNXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZUxheWVyKGxheWVyTmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmxheWVycy5oYXMobGF5ZXJOYW1lKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuTEFZRVIuRFVQTElDQVRJT04obGF5ZXJOYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxheWVycy5kZWxldGUobGF5ZXJOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKElTX0RFQlVHKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci53cml0ZShg44Os44Kk44Ok44O8IFwiJHtsYXllck5hbWV9XCIg44KS5YmK6Zmk44GX44G+44GX44Gf44CCYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiDjg6Hjgr/mg4XloLHjgq/jg6njgrlcclxuICovXHJcbmNsYXNzIE1ldGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3mnJ/ljJZcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCq+OCpuODs+ODiOOCkuWil+OChOOBl+OBvuOBmVxyXG4gICAgICovXHJcbiAgICBsb29wKCkge1xyXG4gICAgICAgIHRoaXMuY291bnQrKztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kr44Km44Oz44OI44KS5Y+W5b6XXHJcbiAgICAgKi9cclxuICAgIGdldENvdW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50O1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiDjg63jgrBcclxuICovXHJcbmNsYXNzIExvZ2dlciB7XHJcbiAgICAvKipcclxuICAgICAqIOODreOCsOOCkuWHuuWKm+OBmeOCi1xyXG4gICAgICogQHBhcmFtIGxvZyDmnKzmlodcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHdyaXRlKGxvZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBbTmljb21tZW50SlNdJHtsb2d9YCk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIOOCqOODqeODvFxyXG4gKi9cclxuY29uc3QgTmljb0V4Y2VwdGlvbnMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIOWIneacn+WMluOCqOODqeODvFxyXG4gICAgICovXHJcbiAgICBfX0lOSVRfXzoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW8leaVsOOCqOODqeODvFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIEFSR1VNRU5UUzoge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5b+F6KaB44Gq5byV5pWw44GM5a2Y5Zyo44GX44Gq44GEXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBOT1RfRVhJU1Q6IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICog6auY44GVXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIEhFSUdIVDogJ1tFUlJdYXJndW1lbnQgXCJoZWlnaHRcIiBtdXN0IGJlIHNwZWNpZmllZC4nLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiDmqKrluYVcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgV0lEVEg6ICdbRVJSXWFyZ3VtZW50IFwid2lkdGhcIiBtdXN0IGJlIHNwZWNpZmllZC4nLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBJRFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBJRDogJ1tFUlJdYXJndW1lbnQgXCJpZFwiIG11c3QgYmUgc3BlY2lmaWVkLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDlvJXmlbDjga7lgKTjgYzkuI3pganliIfjgafjgYLjgotcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIE5hTjoge1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiDpq5jjgZXjgYzmlbDlrZfjgafjgarjgYRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgSEVJR0hUOiAodmFsdWUpID0+IGBbRVJSXSR7dmFsdWV9IGlzIG5vdCBhIG51bWJlci4gXCJoZWlnaHRcIiBtdXMgYmUgYSBudW1iZXIuYCxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICog5qiq5bmF44GM5pWw5a2X44Gn44Gq44GEXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIFdJRFRIOiAodmFsdWUpID0+IGBbRVJSXSR7dmFsdWV9IGlzIG5vdCBhIG51bWJlci4gXCJ3aWR0aFwiIG11cyBiZSBhIG51bWJlci5gLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgYzlrZjlnKjjgZfjgarjgYTjg7tjYW52YXPjgafjgarjgYRcclxuICAgICAgICAgKi9cclxuICAgICAgICBFTEVNRU5UOiB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDopoHntKDjgYzlrZjlnKjjgZfjgarjgYRcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIE5PVF9FWElTVDogKGlkKSA9PiB7IHJldHVybiBgW0VSUl1DYW52YXMgRWxlbWVudCB3aGljaCBpZCBpcyBcIiR7aWR9XCIgd2FzIG5vdCBmb3VuZC5gOyB9LFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6KaB57Sg44GMSFRNTENhbnZhc+OBp+OBquOBhFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTk9UX0FfQ0FOVkFTX0VMRU1FTlQ6IChpZCkgPT4geyByZXR1cm4gYFtFUlJdRWxlbWVudCB3aGljaCBpZCBpcyBcIiR7aWR9XCIgaXMgbm90IGEgY2FudmFzSFRNTDUgRWxlbWVudC5gOyB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOi/veWKoOaZguOBruOCqOODqeODvFxyXG4gICAgICovXHJcbiAgICBTRU5EOiB7fSxcclxuICAgIC8qKlxyXG4gICAgICog44Os44Kk44Ok44O86Zai5L+C44Gu44Ko44Op44O8XHJcbiAgICAgKi9cclxuICAgIExBWUVSOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6YeN6KSHXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgRFVQTElDQVRJT046IChuYW1lKSA9PiB7IHJldHVybiBgW0VSUl1UaGUgbGF5ZXIgbmFtZSAke25hbWV9IGFscmVhZHkgZXhpc3RzLmA7IH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Os44Kk44Ok44O844GM5a2Y5Zyo44GX44Gq44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgTEFZRVJfRE9FU19OT1RfRVhJU1Q6IChuYW1lKSA9PiB7IHJldHVybiBgW0VSUl1BIGxheWVyIG5hbWUgaXMgJHtuYW1lfSBkb2VzIG5vdCBleGlzdC5gOyB9LFxyXG4gICAgfSxcclxufTtcclxuIiwiaW1wb3J0IHsgRGF0YVV0aWxzIH0gZnJvbSAnLi4vdXRpbHMvRGF0YVV0aWxzJztcclxuaW1wb3J0IGRlZmF1bHRDb25maWcgZnJvbSAnLi9jb25maWcnO1xyXG4vL3V0aWxcclxuY29uc3QgZGF0YXV0bCA9IG5ldyBEYXRhVXRpbHMoKTtcclxuLy/jgrPjg6Hjg7Pjg4jjgqrjg5bjgrjjgqfjgq/jg4hcclxuZXhwb3J0IGNsYXNzIENvbW1lbnRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtKSB7XHJcbiAgICAgICAgdGhpcy5saWZlID0gMDsgLy/mrovjgorjgrPjg57mlbBcclxuICAgICAgICB0aGlzLmRlbHRhID0gMDsgLy8x44Kz44Oe5b2T44Gf44KK44GuWOW6p+aomeOBruWkiemHj1xyXG4gICAgICAgIHRoaXMubGVmdCA9IDA7IC8vWOW6p+aomVxyXG4gICAgICAgIHRoaXMudG9wID0gMDsgLy9Z5bqn5qiZKOWOn+eCueOBr+W3puS4iilcclxuICAgICAgICB0aGlzLnJldmVhbCA9IDA7IC8v44Kz44Oh44Oz44OI44GM55S76Z2i5Y+z44GL44KJ5a6M5YWo44Gr6Zyy5Ye644GZ44KL44G+44Gn44Gu44Kz44Oe5pWwXHJcbiAgICAgICAgdGhpcy50b3VjaCA9IDA7IC8v44Kz44Oh44Oz44OI44Gu5bem56uv44GM55S76Z2i5bem44Gr5Yiw6YGU44GZ44KL44G+44Gn44Gu44Kz44Oe5pWwXHJcbiAgICAgICAgdGhpcy5maXhlZCA9IGZhbHNlOyAvL+WbuuWumuODleODqeOCsFxyXG4gICAgICAgIHRoaXMudHlwZSA9IHBhcmFtLm9wdGlvbi5tb2RlOyAvL+OCv+OCpOODl1xyXG4gICAgICAgIHRoaXMuY3VzdG9tQXR0ciA9IHBhcmFtLm9wdGlvbi5jdXN0b21BdHRyOyAvL+OCq+OCueOCv+ODoOWxnuaAp1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxUZXh0ID0gcGFyYW0udGV4dDtcclxuICAgICAgICB0aGlzLnRleHQgPSB0aGlzLl9mb3JtYXRDb21tZW50KHBhcmFtLnRleHQsIHRoaXMudHlwZSk7IC8v5pys5paHXHJcbiAgICAgICAgdGhpcy50ZXh0Rm9yUmVuZGVyID0gdGhpcy5fZm9ybWF0UmVuZGVyQ29tbWVudCh0aGlzLnRleHQpO1xyXG4gICAgICAgIHRoaXMudGV4dExlbmd0aCA9IE1hdGgubWF4KC4uLnRoaXMudGV4dC5tYXAodGV4dCA9PiB0ZXh0Lmxlbmd0aCkpO1xyXG4gICAgICAgIHRoaXMubWF4TGVuZ3RoSW5kZXggPSB0aGlzLnRleHQubWFwKGNvbW1lbnQgPT4gY29tbWVudC5sZW5ndGgpLmluZGV4T2YodGhpcy50ZXh0TGVuZ3RoKTtcclxuICAgICAgICB0aGlzLmNvbW1lbnROdW1iZXIgPSBwYXJhbS5jb21tZW50TnVtYmVyO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBwYXJhbS5vcHRpb24uY29sb3I7IC8v6ImyXHJcbiAgICAgICAgdGhpcy5ib3JkZXJDb2xvciA9IHBhcmFtLm9wdGlvbi5ib3JkZXJDb2xvcjtcclxuICAgICAgICB0aGlzLmxpbmVzID0gdGhpcy5fZ2V0TGluZXMocGFyYW0ub3B0aW9uLmNvbW1lbnRTaXplLCBwYXJhbS5saW5lcyk7XHJcbiAgICAgICAgdGhpcy5zZWxmTGluZXMgPSB0aGlzLnRleHQubGVuZ3RoOyAvL+ihjOaVsFxyXG4gICAgICAgIHRoaXMuY3R4ID0gcGFyYW0uY3R4O1xyXG4gICAgICAgIHRoaXMuZm9udE5hbWUgPSBwYXJhbS5vcHRpb24uZm9udE5hbWU7IC8v44OV44Kp44Oz44OI5ZCNXHJcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gcGFyYW0ub3B0aW9uLm9wYWNpdHk7IC8v6YCP6YGO5bqmXHJcbiAgICAgICAgdGhpcy5mdWxsID0gcGFyYW0ub3B0aW9uLmZ1bGw7IC8v6Ieo55WM54K544Oq44K144Kk44K6XHJcbiAgICAgICAgdGhpcy5jYW52YXNTaXplID0gcGFyYW0uY2FudmFzU2l6ZTtcclxuICAgICAgICB0aGlzLmNhbnZhc1dpZHRoRmxhc2ggPSBwYXJhbS5jYW52YXNXaWR0aEZsYXNoO1xyXG4gICAgICAgIC8v5Zu65a6a44OV44Op44KwXHJcbiAgICAgICAgaWYgKHRoaXMudGV4dC5sZW5ndGggPj0gdGhpcy5saW5lcykge1xyXG4gICAgICAgICAgICB0aGlzLmZpeGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIC8vdnBvc+ODu+ihqOekuuaZgumWk1xyXG4gICAgICAgIHRoaXMudnBvcyA9IHBhcmFtLm9wdGlvbi52cG9zO1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBwYXJhbS5vcHRpb24uZHVyYXRpb24gfHwgZGVmYXVsdENvbmZpZy5kdXJhdGlvbjtcclxuICAgICAgICAvL+ODleOCqeODs+ODiOmWouS/glxyXG4gICAgICAgIHRoaXMuZm9udFNpemVTdHJpbmcgPSBwYXJhbS5vcHRpb24uY29tbWVudFNpemU7XHJcbiAgICAgICAgW3RoaXMuZm9udFNpemUsIHRoaXMud2lkdGgsIHRoaXMub2Zmc2V0WV0gPSB0aGlzLl9nZXRGb250KHRoaXMudGV4dFt0aGlzLm1heExlbmd0aEluZGV4XSwgdGhpcy5jYW52YXNTaXplLCB0aGlzLmNhbnZhc1dpZHRoRmxhc2gsIHBhcmFtLm9wdGlvbi5jb21tZW50U2l6ZSwgcGFyYW0uZm9udFNpemUsIHBhcmFtLmZpeGVkRm9udFNpemUsIHRoaXMudHlwZSwgcGFyYW0ub3B0aW9uLmxpbmVoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuZm9udFNpemVTdHJpbmcgPSBwYXJhbS5vcHRpb24uY29tbWVudFNpemU7XHJcbiAgICAgICAgdGhpcy5vdmVyYWxsU2l6ZSA9IHRoaXMuZm9udFNpemUgKiB0aGlzLnNlbGZMaW5lcztcclxuICAgICAgICB0aGlzLmFsaXZlID0gdHJ1ZTsgLy/nlJ/lrZjjg5Xjg6njgrBcclxuICAgICAgICB0aGlzLm9uRGlzcG9zZWQgPSBwYXJhbS5vbkRpc3Bvc2VkOyAvL+OCs+ODvOODq+ODkOODg+OCr1xyXG4gICAgICAgIHRoaXMuX3NldCgpOyAvL+OCu+ODg+ODiOWun+ihjFxyXG4gICAgfVxyXG4gICAgLy/lsZ7mgKflj5blvpdcclxuICAgIGdldFByb3Aoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tQXR0ci5nZXQoa2V5KTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5Yem55CGXHJcbiAgICAgKi9cclxuICAgIHRpY2sodnBvcykge1xyXG4gICAgICAgIC8v44Kz44Oh44Oz44OI44Gu57Sv6KiI6KGo56S65pmC6ZaT44GM5pei5a6a44GuMuWAjeS7peS4iuOBp+OBguOBo+OBn+WgtOWQiOOAgeOCs+ODoeODs+ODiOOCkuWJiumZpOOBmeOCi1xyXG4gICAgICAgIGlmICh2cG9zID49IHRoaXMudnBvcyArIHRoaXMuZHVyYXRpb24gKiAyMDApIHtcclxuICAgICAgICAgICAgdGhpcy5hbGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGlmZS0tO1xyXG4gICAgICAgIC8vbmFrYeOCs+ODoeODs+ODiOOBruWgtOWQiFxyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICduYWthJykge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnQgLT0gdGhpcy5kZWx0YTtcclxuICAgICAgICAgICAgdGhpcy5yZXZlYWwtLTtcclxuICAgICAgICAgICAgdGhpcy50b3VjaC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5saWZlIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmtpbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOBrueUn+WtmOODleODqeOCsOOCkuW8t+WItueahOOBq+mZjeOCjeOBl+OBvuOBmVxyXG4gICAgICovXHJcbiAgICBraWxsKCkge1xyXG4gICAgICAgIHRoaXMuYWxpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uRGlzcG9zZWQoKTtcclxuICAgIH1cclxuICAgIC8v44K744OD44OIXHJcbiAgICBfc2V0KCkge1xyXG4gICAgICAgIHRoaXMubGlmZSA9IDA7IC8v5q6L44KK44Kz44Oe5pWwXHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gMDsgLy9Y5bqn5qiZXHJcbiAgICAgICAgdGhpcy50b3AgPSAwOyAvL1nluqfmqJko5Y6f54K544Gv5bem5LiKKVxyXG4gICAgICAgIHRoaXMuZGVsdGEgPSAwOyAvLzHjgrPjg57lvZPjgZ/jgorjga5Y5bqn5qiZ44Gu5aSJ6YePXHJcbiAgICAgICAgdGhpcy5yZXZlYWwgPSAwOyAvL+OCs+ODoeODs+ODiOOBjOeUu+mdouWPs+OBi+OCieWujOWFqOOBq+mcsuWHuuOBmeOCi+OBvuOBp+OBruOCs+ODnuaVsFxyXG4gICAgICAgIHRoaXMudG91Y2ggPSAwOyAvL+OCs+ODoeODs+ODiOOBruW3puerr+OBjOeUu+mdouW3puOBq+WIsOmBlOOBmeOCi+OBvuOBp+OBruOCs+ODnuaVsFxyXG4gICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ25ha2EnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0TmFrYSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NoaXRhJzpcclxuICAgICAgICAgICAgY2FzZSAndWUnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0U2hpdGFVZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vbmFrYeOCs+ODoeODs+ODiOioreWumlxyXG4gICAgX3NldE5ha2EoKSB7XHJcbiAgICAgICAgdGhpcy5saWZlID0gZGVmYXVsdENvbmZpZy5mcHMgKiB0aGlzLmR1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IHRoaXMuY2FudmFzU2l6ZS53aWR0aDtcclxuICAgICAgICB0aGlzLmRlbHRhID0gKHRoaXMuY2FudmFzU2l6ZS53aWR0aCArIHRoaXMud2lkdGgpIC8gdGhpcy5saWZlO1xyXG4gICAgICAgIHRoaXMucmV2ZWFsID0gdGhpcy53aWR0aCAvIHRoaXMuZGVsdGE7XHJcbiAgICAgICAgdGhpcy50b3VjaCA9IHRoaXMuY2FudmFzU2l6ZS53aWR0aCAvIHRoaXMuZGVsdGE7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIHNoaXTjg7t1ZeOCs+ODoeODs+ODiOOCkuioreWumuOBmeOCi1xyXG4gICAgICogQHBhcmFtIHdpZHRoIGNhbnZhc+OBruaoquW5hVxyXG4gICAgICogQHBhcmFtIGR1cmF0aW9uIOOCs+ODoeODs+ODiOihqOekuuaZgumWk1xyXG4gICAgICovXHJcbiAgICBfc2V0U2hpdGFVZSgpIHtcclxuICAgICAgICB0aGlzLmxpZmUgPSBkZWZhdWx0Q29uZmlnLmZwcyAqIHRoaXMuZHVyYXRpb247XHJcbiAgICAgICAgaWYgKHRoaXMuZml4ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gKHRoaXMuY2FudmFzU2l6ZS53aWR0aCAtIHRoaXMud2lkdGgpIC8gMjtcclxuICAgICAgICAgICAgLy90aGlzLmxlZnQgPSB0aGlzLmNhbnZhc1NpemUud2lkdGggLyAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy5jYW52YXNTaXplLndpZHRoIC8gMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL2ZvbnTjgpLmsbrlrprjgZnjgotcclxuICAgIF9nZXRGb250KHRleHQsIGNhbnZhc1NpemUsIGZsYXNoV2lkdGgsIGNvbW1lbnRTaXplLCBmb250U2l6ZSwgZml4ZWRGb250U2l6ZSwgdHlwZSwgbGluZUhlaWdodCkge1xyXG4gICAgICAgIGxldCBvcmlnaW5hbEZvbnQgPSB0aGlzLl9nZXRTaXplKGNvbW1lbnRTaXplLCBmb250U2l6ZSk7XHJcbiAgICAgICAgbGV0IGZvbnQgPSBvcmlnaW5hbEZvbnQ7XHJcbiAgICAgICAgLy/jg7vmlLnooYzjg6rjgrXjgqTjgrpcclxuICAgICAgICAvL292ZXJhbGxTaXpl44Gr55u45b2T44GZ44KL6auY44GV44GM44CB5o+P5YaZ6aCY5Z+f44GuMS8z44KS5LiK5Zue44KL5aC05ZCI44Gr44CBXHJcbiAgICAgICAgLy/jg6rjgrXjgqTjgrrjgpLooYzjgYbjgIJcclxuICAgICAgICBpZiAob3JpZ2luYWxGb250ICogdGhpcy5zZWxmTGluZXMgPiBjYW52YXNTaXplLmhlaWdodCAvIDMpIHtcclxuICAgICAgICAgICAgZm9udCA9IHRoaXMuX2dldFNpemUoY29tbWVudFNpemUsIGZpeGVkRm9udFNpemUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN0eC5mb250ID0gYCR7Zm9udH1weCBcIll1IEdvdGhpY1wiYDtcclxuICAgICAgICBsZXQgY29tV2lkdGggPSB0aGlzLmN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcclxuICAgICAgICAvL+ODu+iHqOeVjOW5heODquOCteOCpOOCulxyXG4gICAgICAgIC8v44Kz44Oh44Oz44OI44Gu5pyA5aSn5bmF44GM5o+P5YaZ6aCY5Z+f44KS5LiK5Zue44KL5aC05ZCI44Gr44CB5o+P5YaZ6aCY5Z+f44Gr5Y+O44G+44KL44KI44GG44Gr44Oq44K144Kk44K644GZ44KLXHJcbiAgICAgICAgY29uc3Qgd2lkdGhPdmVyZmxvdyA9IGNvbVdpZHRoID4gdGhpcy5jYW52YXNTaXplLndpZHRoICYmIHR5cGUgIT09ICduYWthJztcclxuICAgICAgICBpZiAod2lkdGhPdmVyZmxvdyAmJiAhdGhpcy5mdWxsKSB7XHJcbiAgICAgICAgICAgIGZvbnQgPSB0aGlzLl9tb2RTaXplKG9yaWdpbmFsRm9udCwgY29tV2lkdGgsIHRoaXMuY2FudmFzV2lkdGhGbGFzaCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBgJHtmb250fXB4IFwiWXUgR290aGljXCJgO1xyXG4gICAgICAgICAgICBjb21XaWR0aCA9IHRoaXMuY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh3aWR0aE92ZXJmbG93ICYmIHRoaXMuZnVsbCkge1xyXG4gICAgICAgICAgICBmb250ID0gdGhpcy5fbW9kU2l6ZShvcmlnaW5hbEZvbnQsIGNvbVdpZHRoLCB0aGlzLmNhbnZhc1NpemUud2lkdGgpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gYCR7Zm9udH1weCBcIll1IEdvdGhpY1wiYDtcclxuICAgICAgICAgICAgY29tV2lkdGggPSB0aGlzLmN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IHR5cGUgPT09ICdzaGl0YScgPyBmb250ICogKGxpbmVIZWlnaHQgLSAxKSAqIC0xIDogZm9udCAqIChsaW5lSGVpZ2h0IC0gMSk7XHJcbiAgICAgICAgcmV0dXJuIFtmb250LCBjb21XaWR0aCwgb2Zmc2V0WV07XHJcbiAgICB9XHJcbiAgICAvL+ODleOCqeODs+ODiOOCteOCpOOCuuS/ruato1xyXG4gICAgX21vZFNpemUoZm9udCwgd2lkdGgsIGNhbnZhc1dpZHRoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZvbnQgKiBjYW52YXNXaWR0aCAvIHdpZHRoO1xyXG4gICAgfVxyXG4gICAgLy/mlLnooYzjg6rjgrXjgqTjgrpcclxuICAgIC8vZm9udFNpemXlj5blvpdcclxuICAgIF9nZXRTaXplKGNvbW1lbnRTaXplLCBmb250U2l6ZSkge1xyXG4gICAgICAgIHN3aXRjaCAoY29tbWVudFNpemUpIHtcclxuICAgICAgICAgICAgY2FzZSAnYmlnJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb250U2l6ZS5iaWc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc21hbGwnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbnRTaXplLnNtYWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9udFNpemUubWVkaXVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6KGM5pWw44KS5rGC44KB44KLXHJcbiAgICAgKiBAcGFyYW0gc2l6ZSBiaWcvc21hbGwvbWVkaXVt44Gu44GE44Ga44KM44GLXHJcbiAgICAgKiBAcGFyYW0gYWxsTGluZXMgY29tbWVudExpbmVz5Z6L44Gu44Kq44OW44K444Kn44Kv44OIKOOBneOCjOOBnuOCjOOBruOCteOCpOOCuuOBq+OBpOOBhOOBpuihjOaVsOOCkuihqOOBmSlcclxuICAgICAqL1xyXG4gICAgX2dldExpbmVzKHNpemUsIGFsbExpbmVzKSB7XHJcbiAgICAgICAgc3dpdGNoIChzaXplKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JpZyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxsTGluZXMuYmlnO1xyXG4gICAgICAgICAgICBjYXNlICdtZWRpdW0nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbExpbmVzLm1lZGl1bTtcclxuICAgICAgICAgICAgY2FzZSAnc21hbGwnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbExpbmVzLnNtYWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI44KS5pW05b2i44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gb3JpZ2luIOOCs+ODoeODs+ODiFxyXG4gICAgICogQHBhcmFtIGNvbW1lbnRQb3Mg44Kz44Oh44Oz44OI44Gu44K/44Kk44OXXHJcbiAgICAgKi9cclxuICAgIF9mb3JtYXRDb21tZW50KG9yaWdpbiwgY29tbWVudFBvcykge1xyXG4gICAgICAgIGxldCBmb3JtYXRlZCA9IGRhdGF1dGwuc3BsaXR0ZXIob3JpZ2luLCAnXFxuJyk7XHJcbiAgICAgICAgZm9ybWF0ZWQgPSB0aGlzLl9kZWxldGVCbGFuayhmb3JtYXRlZCk7XHJcbiAgICAgICAgZm9ybWF0ZWQgPSB0aGlzLl9kZWxldGVGaXJzdEFuZGxhc3RCbGFuayhmb3JtYXRlZCk7XHJcbiAgICAgICAgZm9ybWF0ZWQgPSB0aGlzLl9zb3J0QnlUeXBlKGZvcm1hdGVkLCBjb21tZW50UG9zKTtcclxuICAgICAgICByZXR1cm4gZm9ybWF0ZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaPj+WGmeeUqOOCs+ODoeODs+ODiOOCkuaVtOW9ouOBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIG9yaWdpbiDjgrPjg6Hjg7Pjg4hcclxuICAgICAqIEBwYXJhbSBjb21tZW50UG9zIOOCs+ODoeODs+ODiOOBruOCv+OCpOODl1xyXG4gICAgICovXHJcbiAgICBfZm9ybWF0UmVuZGVyQ29tbWVudChvcmlnaW4pIHtcclxuICAgICAgICBsZXQgZm9ybWF0ZWQgPSBbLi4ub3JpZ2luXTtcclxuICAgICAgICBmb3JtYXRlZCA9IHRoaXMuX2RlbGV0ZUJsYW5rTGluZUZyb21FbmQob3JpZ2luKTtcclxuICAgICAgICByZXR1cm4gZm9ybWF0ZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOBi+OCiTPlm57ku6XkuIrpgKPntprjgZnjgovmlLnooYzjgpLliYrpmaTjgZfjgb7jgZnjgIJcclxuICAgICAqIEBwYXJhbSBjb21tZW50cyDjgrPjg6Hjg7Pjg4jjga7jg6rjgrnjg4hcclxuICAgICAqL1xyXG4gICAgX2RlbGV0ZUJsYW5rKGNvbW1lbnRMaXN0KSB7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICBjb25zdCBkZWxldGVkID0gW107XHJcbiAgICAgICAgLy9mb3IuLi5pbuODq+ODvOODl+OBp+WbnuOBmSBcclxuICAgICAgICBmb3IgKGNvbnN0IHRleHQgb2YgY29tbWVudExpc3QpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNCbGFuayA9ICF0ZXh0O1xyXG4gICAgICAgICAgICBpZiAoaXNCbGFuaykge1xyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY291bnQgPCAzKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVkLnB1c2godGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOacgOWIneOBqOacgOW+jOOBruepuueZveihjOOCkuWJiumZpOOBl+OBvuOBmeOAglxyXG4gICAgICogQHBhcmFtIGNvbW1lbnRzIOOCs+ODoeODs+ODiOOBruODquOCueODiFxyXG4gICAgICovXHJcbiAgICBfZGVsZXRlRmlyc3RBbmRsYXN0QmxhbmsoY29tbWVudHMpIHtcclxuICAgICAgICBjb25zdCBkZWxldGVkID0gWy4uLmNvbW1lbnRzXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbW1lbnQgb2YgY29tbWVudHMpIHtcclxuICAgICAgICAgICAgaWYgKCFjb21tZW50KSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVkLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+W+jOOCjeOBi+OCiVxyXG4gICAgICAgIGNvbnN0IHJldmVyc2VkID0gWy4uLmRlbGV0ZWRdLnJldmVyc2UoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbW1lbnQgb2YgcmV2ZXJzZWQpIHtcclxuICAgICAgICAgICAgaWYgKCFjb21tZW50KSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVkLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOBruS9jee9ruOBq+OCiOOBo+OBpuOCveODvOODiOOBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIGNvbW1lbnRzIOOCs+ODoeODs+ODiOOBruODquOCueODiFxyXG4gICAgICogQHBhcmFtIHR5cGUg44Kz44Oh44Oz44OI44Gu5L2N572uXHJcbiAgICAgKi9cclxuICAgIF9zb3J0QnlUeXBlKGNvbW1lbnRzLCB0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGUgPT09ICdzaGl0YScgPyBjb21tZW50cy5yZXZlcnNlKCkgOiBjb21tZW50cztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog56m66KGM44KS5YmK6Zmk44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudHMg44Kz44Oh44Oz44OIXHJcbiAgICAgKi9cclxuICAgIF9kZWxldGVCbGFua0xpbmVGcm9tRW5kKGNvbW1lbnRzKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybWF0ZWQgPSBbLi4uY29tbWVudHNdO1xyXG4gICAgICAgIGNvbnN0IHJldmVyc2VkID0gWy4uLmNvbW1lbnRzXS5yZXZlcnNlKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIHJldmVyc2VkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQmxhbmsgPSAvXlxccyskLy50ZXN0KGxpbmUpIHx8IGxpbmUubGVuZ3RoID09PSAwO1xyXG4gICAgICAgICAgICBpZiAoaXNCbGFuaykge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0ZWQucG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jdXN0b21BdHRyLmdldCgnY29tbWVudE51bWJlcicpID09PSA5NTU2MDEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZm9ybWF0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZm9ybWF0ZWQ7XHJcbiAgICB9XHJcbn1cclxuLy/luqfmqJnmg4XloLFcclxuZXhwb3J0IGNsYXNzIFBvaW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcykge1xyXG4gICAgICAgIHRoaXMueCA9IHBvcy54O1xyXG4gICAgICAgIHRoaXMueSA9IHBvcy55O1xyXG4gICAgfVxyXG59XHJcbi8vaGVpZ2h0OndpZHRoXHJcbmV4cG9ydCBjbGFzcyBTaXplIHtcclxuICAgIGNvbnN0cnVjdG9yKHNpemUpIHtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHNpemUuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBzaXplLndpZHRoO1xyXG4gICAgfVxyXG59XHJcbi8v44Os44Kk44Ok44O844Kv44Op44K5XHJcbmV4cG9ydCBjbGFzcyBMYXllciB7XHJcbiAgICAvL+WIneacn+WMllxyXG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXNTaXplLCBsaW5lcywgY29tbWVudFNpemUsIGNvbW1lbnRTaXplRml4ZWQsIGR1cmF0aW9uLCBsaW5lSGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5vbkRpc2Fwb3NlZCA9ICgpID0+IHsgfTtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLmNhbnZhc1NpemUgPSBjYW52YXNTaXplO1xyXG4gICAgICAgIHRoaXMuY2FudmFzV2lkdGhGbGFzaCA9IGNhbnZhc1NpemUuaGVpZ2h0IC8gMyAqIDQ7XHJcbiAgICAgICAgdGhpcy5saW5lSGVpZ2h0ID0gbGluZUhlaWdodDtcclxuICAgICAgICB0aGlzLmxpbmVzID0gbGluZXM7XHJcbiAgICAgICAgdGhpcy5mb25yU2l6ZSA9IGNvbW1lbnRTaXplO1xyXG4gICAgICAgIHRoaXMuZml4ZWRGb25yU2l6ZSA9IGNvbW1lbnRTaXplRml4ZWQ7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMuY29tbWVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLm1heGxpbmVzID0gbGluZXMuc21hbGw7XHJcbiAgICAgICAgdGhpcy5uYWthID0gbmV3IE5ha2FMaW5lKGxpbmVzLnNtYWxsLCBjYW52YXNTaXplKTtcclxuICAgICAgICB0aGlzLnNoaXRhID0gW107XHJcbiAgICAgICAgdGhpcy51ZSA9IFtdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjg6zjgqTjg6Tjg7zjgavjgrPjg6Hjg7Pjg4jjgpLov73liqDjgZnjgotcclxuICAgICAqIEBwYXJhbSB0ZXh0IOOCs+ODoeODs+ODiOacrOaWh1xyXG4gICAgICogQHBhcmFtIGNvbW1lbnROdW1iZXIg44Kz44Oh55WqXHJcbiAgICAgKiBAcGFyYW0gY3VzdG9tQXR0ciDjgqvjgrnjgr/jg6DlsZ7mgKdcclxuICAgICAqIEBwYXJhbSB0eXBlIG5ha2Evc2hpdGEvdWXjga7jgYTjgZrjgozjgYtcclxuICAgICAqIEBwYXJhbSBzaXplIGJpZy9tZWRpdW0vbGFyZ2Xjga7jgYTjgZrjgozjgYtcclxuICAgICAqIEBwYXJhbSB2cG9zIFZQT1NcclxuICAgICAqL1xyXG4gICAgYWRkKHRleHQsIGNvbW1lbnROdW1iZXIsIGN1c3RvbUF0dHIsIHR5cGUgPSAnbmFrYScsIHNpemUgPSAnbWVkaXVtJywgY2FsbEJhY2ssIHZwb3MpIHtcclxuICAgICAgICBpZiAodGhpcy5jb21tZW50cy5sZW5ndGggPiA0MClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IG9wcmlvbnMgPSB7XHJcbiAgICAgICAgICAgIG1vZGU6IHR5cGUsXHJcbiAgICAgICAgICAgIGNvbG9yOiBjdXN0b21BdHRyLmdldCgnY29sb3InKSB8fCAnI2ZmZicsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjdXN0b21BdHRyLmdldCgnYmNvbG9yJykgfHwgJyMwMDAnLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbixcclxuICAgICAgICAgICAgY3VzdG9tQXR0cjogY3VzdG9tQXR0cixcclxuICAgICAgICAgICAgY29tbWVudFNpemU6IHNpemUsXHJcbiAgICAgICAgICAgIGxpbmVoZWlnaHQ6IHRoaXMubGluZUhlaWdodCxcclxuICAgICAgICAgICAgdnBvczogdnBvcyxcclxuICAgICAgICAgICAgZm9udE5hbWU6IGN1c3RvbUF0dHIuZ2V0KCdmb250TmFtZScpLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiBjdXN0b21BdHRyLmdldCgnb3BhY2l0eScpLFxyXG4gICAgICAgICAgICBmdWxsOiBjdXN0b21BdHRyLmdldCgnZnVsbCcpLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgICAgICAgIHRleHQ6IHRleHQsXHJcbiAgICAgICAgICAgIGN0eDogdGhpcy5jdHgsXHJcbiAgICAgICAgICAgIGNhbnZhc1NpemU6IHRoaXMuY2FudmFzU2l6ZSxcclxuICAgICAgICAgICAgY2FudmFzV2lkdGhGbGFzaDogdGhpcy5jYW52YXNXaWR0aEZsYXNoLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogdGhpcy5mb25yU2l6ZSxcclxuICAgICAgICAgICAgZml4ZWRGb250U2l6ZTogdGhpcy5maXhlZEZvbnJTaXplLFxyXG4gICAgICAgICAgICBsaW5lczogdGhpcy5saW5lcyxcclxuICAgICAgICAgICAgb3B0aW9uOiBvcHJpb25zLFxyXG4gICAgICAgICAgICBjb21tZW50TnVtYmVyOiBjb21tZW50TnVtYmVyLFxyXG4gICAgICAgICAgICBvbkRpc3Bvc2VkOiBjYWxsQmFjay5vbkRpc3Bhc2VkLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgY29tbWVudE9iaiA9IG5ldyBDb21tZW50QmFzZShwYXJhbSk7XHJcbiAgICAgICAgc3dpdGNoIChjb21tZW50T2JqLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnbmFrYSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ha2EuYWRkKGNvbW1lbnRPYmopO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NoaXRhJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FwcGVuZFNoaXRhKGNvbW1lbnRPYmopO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VlJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FwcGVuZFVlKGNvbW1lbnRPYmopO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDlh6bnkIZcclxuICAgICAqIEBwYXJhbSBjb3VudGVyIOODq+ODvOODl+WbnuaVsFxyXG4gICAgICovXHJcbiAgICB0aWNrKGNvdW50ZXIsIHZwb3MsIHJlbmRlcikge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWcG9zID0gdnBvcyA/IHZwb3MgOiAwO1xyXG4gICAgICAgIGNvbnN0IGRvUmVuZGVyID0gcmVuZGVyID09PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5jb21tZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvUmVuZGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcihjb21tZW50KTtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudGljayhjdXJyZW50VnBvcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL25ha2HjgrPjg6FcclxuICAgICAgICBpZiAoZG9SZW5kZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5uYWthLmdldExpc3QoKS5mb3JFYWNoKGNvbW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyKGNvbW1lbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5uYWthLnRpY2soY3VycmVudFZwb3MpO1xyXG4gICAgICAgIHRoaXMuX2NsZWFuKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaPj+WGmeWHpueQhlxyXG4gICAgICogQHBhcmFtIGNvbW1lbnQg44Kz44Oh44Oz44OIXHJcbiAgICAgKi9cclxuICAgIF9yZW5kZXIoY29tbWVudCkge1xyXG4gICAgICAgIHRoaXMuY3R4LnRleHRCYXNlbGluZSA9ICd0b3AnO1xyXG4gICAgICAgIC8v5o+D44GI5L2N572uXHJcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY29tbWVudC50eXBlID09PSAnbmFrYScgfHwgY29tbWVudC5maXhlZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9ICdsZWZ0JztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gYCR7Y29tbWVudC5jb2xvcn1gO1xyXG4gICAgICAgIHRoaXMuY3R4LnNoYWRvd0NvbG9yID0gY29tbWVudC5ib3JkZXJDb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5zaGFkb3dPZmZzZXRYID0gMS41O1xyXG4gICAgICAgIHRoaXMuY3R4LnNoYWRvd09mZnNldFkgPSAxLjU7XHJcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBjb21tZW50Lm9wYWNpdHk7XHJcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IGBib2xkICR7Y29tbWVudC5mb250U2l6ZX1weCBcIiR7Y29tbWVudC5mb250TmFtZX1cImA7XHJcbiAgICAgICAgLy/mj4/lhpnmmYLjgavogIPmha7jgZnjgovmraPosqBcclxuICAgICAgICBjb25zdCBkZWx0YU1pbnVzT3JQbHVzID0gY29tbWVudC50eXBlID09PSAnc2hpdGEnID8gLTEgOiAxO1xyXG4gICAgICAgIGNvbW1lbnQudGV4dEZvclJlbmRlci5mb3JFYWNoKCh0ZXh0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh0ZXh0LCBjb21tZW50LmxlZnQsIGNvbW1lbnQudG9wICsgY29tbWVudC5mb250U2l6ZSAqIGluZGV4ICogZGVsdGFNaW51c09yUGx1cyArIGNvbW1lbnQub2Zmc2V0WSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOCkuWJiumZpOOBmeOCi1xyXG4gICAgICogQHBhcmFtICBvcHRpb24g5pyA5Yid44Gu44Kz44Oh44Oz44OI44G+44Gf44Gv44CB5pyA5b6M44Gu44Kz44Oh44Oz44OI44Gu44G/44KS5YmK6Zmk44GZ44KL44GT44Go44GM5Ye65p2l44G+44GZ44CCXHJcbiAgICAgKi9cclxuICAgIGNsZWFyKG9wdGlvbikge1xyXG4gICAgICAgIHN3aXRjaCAob3B0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgdW5kZWZpbmVkOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4gY29tbWVudC5raWxsKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYWthID0gbmV3IE5ha2FMaW5lKHRoaXMubGluZXMuc21hbGwsIHRoaXMuY2FudmFzU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVlID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXRhID0gW107XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZmlyc3QnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29tbWVudHMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHNbMF0ua2lsbCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xhc3QnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29tbWVudHMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHNbdGhpcy5jb21tZW50cy5sZW5ndGggLSAxXS5raWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jphY3liJfjgYvjgonjg5Xjg6njgrDjgYzpmY3jgorjgabjgYTjgovjgrPjg6Hjg7Pjg4jjgpLliYrpmaRcclxuICAgICAqL1xyXG4gICAgX2NsZWFuKCkge1xyXG4gICAgICAgIHRoaXMuY29tbWVudHMgPSB0aGlzLmNvbW1lbnRzLmZpbHRlcihjb21tZXQgPT4gY29tbWV0LmFsaXZlKTtcclxuICAgICAgICAvL25ha2HjgrPjg6FcclxuICAgICAgICB0aGlzLm5ha2EuY2xlYW4oKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogc2hpdGHjgrPjg6Hjg7Pjg4jjgpLov73liqDjgZnjgotcclxuICAgICAqIEBwYXJhbSBjb21tZW50IOOCs+ODoeODs+ODiOOCquODluOCuOOCp+OCr+ODiFxyXG4gICAgICovXHJcbiAgICBfYXBwZW5kU2hpdGEoY29tbWVudCkge1xyXG4gICAgICAgIC8vc2hpdGHjgrPjg6Hjg7Pjg4hcclxuICAgICAgICBsZXQgYm90dG9tID0gdGhpcy5jYW52YXNTaXplLmhlaWdodDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF4bGluZXM7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zaGl0YVtpXSAmJiAhY29tbWVudC5maXhlZCkge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tIC09IHRoaXMuc2hpdGFbaV0ub3ZlcmFsbFNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5zaGl0YS5sZW5ndGggPT09IDA6XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuc2hpdGEubGVuZ3RoIDw9IGk6XHJcbiAgICAgICAgICAgICAgICBjYXNlICF0aGlzLnNoaXRhW2ldLmFsaXZlOlxyXG4gICAgICAgICAgICAgICAgLy/lm7rlrprjgrPjg6Hjg7Pjg4jjgafjgYLjgaPjgZ/loLTlkIhcclxuICAgICAgICAgICAgICAgIGNhc2UgY29tbWVudC5maXhlZDpcclxuICAgICAgICAgICAgICAgIC8v44Kz44Oh44Oz44OI44GM6KGo56S66ZmQ55WM44KS6LaF44GI44KL5aC05ZCIXHJcbiAgICAgICAgICAgICAgICBjYXNlIGJvdHRvbSAtIGNvbW1lbnQub3ZlcmFsbFNpemUgKyBjb21tZW50Lm9mZnNldFkgPCAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIGlmIChjb21tZW50LmZpeGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQgLSBjb21tZW50LmZvbnRTaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGJvdHRvbSAtIGNvbW1lbnQub3ZlcmFsbFNpemUgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IE1hdGgucmFuZG9tKCkgKiAodGhpcy5jYW52YXNTaXplLmhlaWdodCAtIGNvbW1lbnQub3ZlcmFsbFNpemUgKyBjb21tZW50Lm9mZnNldFkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC50b3AgPSBib3R0b20gLSBjb21tZW50Lm92ZXJhbGxTaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgdGhpcy5zaGl0YVtpXSA9IGNvbW1lbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWVudHMucHVzaChjb21tZW50KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogc2hpdGHjgrPjg6Hjg7Pjg4jjgpLov73liqDjgZnjgotcclxuICAgICAqIEBwYXJhbSBjb21tZW50IOOCs+ODoeODs+ODiOOCquODluOCuOOCp+OCr+ODiFxyXG4gICAgICovXHJcbiAgICBfYXBwZW5kVWUoY29tbWVudCkge1xyXG4gICAgICAgIC8vc2hpdGHjgrPjg6Hjg7Pjg4hcclxuICAgICAgICBsZXQgdG9wID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF4bGluZXM7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51ZVtpXSAmJiAhY29tbWVudC5maXhlZCkge1xyXG4gICAgICAgICAgICAgICAgdG9wICs9IHRoaXMudWVbaV0ub3ZlcmFsbFNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy51ZS5sZW5ndGggPT09IDA6XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMudWUubGVuZ3RoIDw9IGk6XHJcbiAgICAgICAgICAgICAgICBjYXNlICF0aGlzLnVlW2ldLmFsaXZlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBjb21tZW50LmZpeGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSB0b3AgKyBjb21tZW50Lm92ZXJhbGxTaXplID4gdGhpcy5jYW52YXNTaXplLmhlaWdodDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICBpZiAoY29tbWVudC5maXhlZCkge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC50b3AgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudWVbaV0pIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLmNhbnZhc1NpemUuaGVpZ2h0IC0gY29tbWVudC5vdmVyYWxsU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IHRvcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIHRoaXMudWVbaV0gPSBjb21tZW50O1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnB1c2goY29tbWVudCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaMh+WumuOBl+OBn+S9jee9ruOBq+WtmOWcqOOBmeOCi+OCs+ODoeODs+ODiOOCkuWPluW+l+OBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIHggWOW6p+aomVxyXG4gICAgICogQHBhcmFtIHkgWeW6p+aomVxyXG4gICAgICovXHJcbiAgICBnZXQoeCwgeSkge1xyXG4gICAgICAgIGNvbnN0IG5ha2EgPSB0aGlzLm5ha2EuZ2V0KHgsIHkpO1xyXG4gICAgICAgIGlmIChuYWthICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ha2E7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21tZW50cy5maW5kKGNvbW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFsZiA9IGNvbW1lbnQud2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNYID0geCA+IGNvbW1lbnQubGVmdCAtIGhhbGYgJiYgeCA8IGNvbW1lbnQubGVmdCArIGhhbGY7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1kgPSB5ID4gY29tbWVudC50b3AgJiYgeSA8IGNvbW1lbnQudG9wICsgY29tbWVudC5vdmVyYWxsU2l6ZTtcclxuICAgICAgICAgICAgICAgIGlmIChpc1ggJiYgaXNZKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIG5ha2HjgrPjg6Hjg7Pjg4hcclxuICovXHJcbmNsYXNzIE5ha2FMaW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKHNtYWxsTGluZXMsIHNpemUpIHtcclxuICAgICAgICAvL+mFjeWIl+WIneacn+WMllxyXG4gICAgICAgIHRoaXMuY29tbWVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLmxhc3RDb21tZW50U3RyZWFtID0gW107XHJcbiAgICAgICAgLy/phY3liJfplbdcclxuICAgICAgICB0aGlzLmFsbGluZXMgPSBzbWFsbExpbmVzO1xyXG4gICAgICAgIC8vY2FudmFz44K144Kk44K6XHJcbiAgICAgICAgdGhpcy5jYW52YXNTaXplID0gc2l6ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogbmFrYeOCs+ODoeODs+ODiOOCkui/veWKoOOBmeOCi1xyXG4gICAgICogQHBhcmFtIGNvbW1lbnQg44Kz44Oh44Oz44OIXHJcbiAgICAgKi9cclxuICAgIGFkZChjb21tZW50KSB7XHJcbiAgICAgICAgbGV0IHRvcCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFsbGluZXM7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gdGhpcy5sYXN0Q29tbWVudFN0cmVhbVtpXTtcclxuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAvL2nooYznm67jgavjgrPjg6Hjg7Pjg4jjgYznhKHjgYTloLTlkIhcclxuICAgICAgICAgICAgICAgIGNhc2UgKGxpbmUgPT09IHVuZGVmaW5lZCk6XHJcbiAgICAgICAgICAgICAgICAvL+WbuuWumuOCs+ODoeOBp+OBguOBo+OBn+WgtOWQiFxyXG4gICAgICAgICAgICAgICAgY2FzZSAoY29tbWVudC5maXhlZCk6XHJcbiAgICAgICAgICAgICAgICAvL+acgOe1gui/veWKoOOCs+ODoeODs+ODiOOBjOWFqOOBpuihqOekuuOBleOCjOOBpuOBhOOBpuOAgeOBquOBiuOBi+OBpOi/veOBhOOBpOOBi+OBquOBhOWgtOWQiFxyXG4gICAgICAgICAgICAgICAgY2FzZSAobGluZS5yZXZlYWwgPCAwICYmIGxpbmUubGlmZSA8IGNvbW1lbnQudG91Y2gpOlxyXG4gICAgICAgICAgICAgICAgLy/jgrPjg6Hjg7Pjg4jjga50b3DjgYxjYW52YXPjga7pq5jjgZXjgpLotoXjgYjjgabjgYTjgotcclxuICAgICAgICAgICAgICAgIGNhc2UgKHRvcCArIGNvbW1lbnQub3ZlcmFsbFNpemUgPiB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0KTpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8v44Gd44KM5Lul5aSW44Gv5qyh44Gu6KGM44KS56K66KqNXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRvcCArPSBsaW5lLm92ZXJhbGxTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgLy/luqfmqJnoqK3lrppcclxuICAgICAgICAgICAgaWYgKGNvbW1lbnQuZml4ZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0b3AgKyBjb21tZW50Lm92ZXJhbGxTaXplID4gdGhpcy5jYW52YXNTaXplLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgLy/lvL7luZXjg6Ljg7zjg4lcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLmNhbnZhc1NpemUuaGVpZ2h0IC0gY29tbWVudC5vdmVyYWxsU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IHRvcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnB1c2goY29tbWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENvbW1lbnRTdHJlYW1baV0gPSBjb21tZW50O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa1geOCjOOBn+OCs+ODoeODs+ODiOOCkuWJiumZpOOBmeOCi1xyXG4gICAgICovXHJcbiAgICBjbGVhbigpIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnRzID0gdGhpcy5jb21tZW50cy5maWx0ZXIoY29tbWVudCA9PiBjb21tZW50LmFsaXZlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5Yem55CGXHJcbiAgICAgKi9cclxuICAgIHRpY2sodnBvcykge1xyXG4gICAgICAgIHRoaXMuY29tbWVudHMuZm9yRWFjaChjb21tZW50ID0+IHtcclxuICAgICAgICAgICAgY29tbWVudC50aWNrKHZwb3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjga7jg6rjgrnjg4jjgpLlj5blvpfjgZnjgotcclxuICAgICAqL1xyXG4gICAgZ2V0TGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21tZW50cztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgKiBAcGFyYW0geCBY5bqn5qiZXHJcbiAgICAgKiBAcGFyYW0geSBZ5bqn5qiZXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBnZXQoeCwgeSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1lbnRzLmZpbmQoY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzWCA9IHggPiBjb21tZW50LmxlZnQgJiYgeCA8IGNvbW1lbnQubGVmdCArIGNvbW1lbnQud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzWSA9IHkgPiBjb21tZW50LnRvcCAmJiB5IDwgY29tbWVudC50b3AgKyBjb21tZW50Lm92ZXJhbGxTaXplO1xyXG4gICAgICAgICAgICBpZiAoaXNYICYmIGlzWSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvL+WumuaVsFxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBmcHM6IDYwLFxyXG4gICAgZHVyYXRpb246IDMsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjIsXHJcbiAgICBiaWdMaW5lczogOCxcclxuICAgIG1lZGl1bUxpbmVzOiAxMSxcclxuICAgIHNtYWxsTGluZXM6IDE2LFxyXG4gICAgZml4OiB7XHJcbiAgICAgICAgc21hbDogMzgsXHJcbiAgICAgICAgYmlnOiAxNixcclxuICAgICAgICBtZWRpdW06IDI1LFxyXG4gICAgfSxcclxuICAgIGRlZmF1bHRDb2xvcjogJyNmZmYnLFxyXG4gICAgZGVmYXVsdExheWVyOiAnYmFzZScsXHJcbiAgICBkZWZhdWx0Rm9udDogJ01TIFBHb3RoaWMnLFxyXG4gICAgb3BhY2l0eTogMSxcclxufTtcclxuIiwiZXhwb3J0IGNsYXNzIERhdGFVdGlscyB7XHJcbiAgICBzcGxpdHRlcih2YWx1ZSwgc3BsaXRCeSA9ICcsJykge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuc3BsaXQoc3BsaXRCeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxuICAgIC8vMOWfi+OCgVxyXG4gICAgcGFkZGluZyhudW0sIGRpZ2l0ID0gMiwgcGFkZFN0cmluZyA9ICcwJykge1xyXG4gICAgICAgIGlmIChudW0gPCAxMCAqKiBkaWdpdCkge1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW4gPSBudW0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgbGV0IHBhZGRlZCA9IG9yaWdpbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWdpdCAtIG9yaWdpbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcGFkZGVkID0gcGFkZFN0cmluZyArIHBhZGRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGFkZGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44ON44K544OI44GV44KM44Gf6YWN5YiX44KS6L+U44GX44G+44GZ44CCXHJcbiAgICAgKiBAcGFyYW0gbGVuIOmFjeWIl+mVt1xyXG4gICAgICovXHJcbiAgICBjcmVhdGVOZXN0ZWRBcnJheShsZW4pIHtcclxuICAgICAgICBjb25zdCBhcnIgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuICAgIGNyZWF0ZUFycmF5KGxlbikge1xyXG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgICAgIGFyci5sZW5ndGggPSBsZW47XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVlBPU+OBi+OCieaZgumWk+OCkuioiOeul+OBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIHZwb3MgVlBPU1xyXG4gICAgICovXHJcbiAgICBjYWxjVlBPUyh2cG9zKSB7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kID0gTWF0aC5mbG9vcih2cG9zIC8gMTAwKTtcclxuICAgICAgICBjb25zdCBtaW51dGUgPSBNYXRoLmZsb29yKHNlY29uZCAvIDYwKTtcclxuICAgICAgICBjb25zdCBleHRyYSA9IE1hdGguZmxvb3Ioc2Vjb25kICUgNjApO1xyXG4gICAgICAgIHJldHVybiB7IG1zOiB7IG1pbjogbWludXRlLCBzZWM6IGV4dHJhIH0sIHNlYzogc2Vjb25kIH07XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==