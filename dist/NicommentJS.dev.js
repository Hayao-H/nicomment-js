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
                + `buildDate:${"2020/7/15 18:48"}\n`
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
            if (false)
                {}
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
        const delta = deltaMinusOrPlus * comment.fontSize;
        for (let i = 0; i < comment.textForRender.length; i++) {
            this.ctx.fillText(comment.textForRender[i], comment.left, comment.top + comment.offsetY + delta * i);
        }
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
        for (let i = 0; i < 40; i++) {
            if (this.shita[i] && this.shita[i].alive && !comment.fixed) {
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
        for (let i = 0; i < 40; i++) {
            if (this.ue[i] && this.ue[i].alive && !comment.fixed) {
                top += this.ue[i].overallSize;
            }
            ;
            switch (true) {
                case this.ue.length === 0:
                case this.ue.length <= i:
                case !this.ue[i].alive:
                case comment.fixed:
                case top + comment.overallSize + comment.offsetY > this.canvasSize.height:
                    break;
                default:
                    continue;
            }
            ;
            if (comment.fixed) {
                comment.top = 0;
            }
            else if (top + comment.overallSize + comment.offsetY > this.canvasSize.height) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OaWNvbW1lbnRKUy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvLi9lbnYvREVWLmpzIiwid2VicGFjazovL05pY29tbWVudEpTLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL05pY29tbWVudEpTLy4vc3JjL21vZHVsZS9Db21tZW50LnRzIiwid2VicGFjazovL05pY29tbWVudEpTLy4vc3JjL21vZHVsZS9jb25maWcudHMiLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvLi9zcmMvdXRpbHMvRGF0YVV0aWxzLnRzIl0sIm5hbWVzIjpbInZpcnNpb24iLCJidWlsZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtDQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixLQUFLO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsY0FBYztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpQkFBaUIsTUFBTSxpQkFBaUI7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtDQUFrQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7OztBQzduQkE7QUFBQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNqQkY7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwyQkFBMkI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTSwwQkFBMEI7QUFDaEQ7QUFDQSIsImZpbGUiOiJOaWNvbW1lbnRKUy5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJOaWNvbW1lbnRKU1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJOaWNvbW1lbnRKU1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHR7XHJcbiAgICB2aXJzaW9uOid2MS4wMEBidWlsZDoyMDA4MTUwODQwJyxcclxuICAgIGJ1aWxkOidEZXZlbG9wbWVudCcsXHJcbn0iLCJpbXBvcnQgeyBTaXplLCBMYXllciB9IGZyb20gJy4vbW9kdWxlL0NvbW1lbnQnO1xyXG5pbXBvcnQgZGVmYXVsdENvbmZpZyBmcm9tICcuL21vZHVsZS9jb25maWcnO1xyXG5pbXBvcnQgQ29uZmlnIGZyb20gJ3N5c0Vudic7XHJcbi8qKlxyXG4gKiDjg6HjgqTjg7Pjgq/jg6njgrlcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5pY29tbWVudEpTIHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpZCBjYW52YXPjga5JRFxyXG4gICAgICogQHBhcmFtIHdpZHRoIGNhbnZhc+OBruW5hVxyXG4gICAgICogQHBhcmFtIGhlaWdodCBjYW52YXPjga7pq5jjgZVcclxuICAgICAqIEBwYXJhbSBvcHRpb24g44Kq44OX44K344On44OzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGlkLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb24pIHtcclxuICAgICAgICBpZiAoSVNfREVWRUxPUE1FTlQpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLndyaXRlKCfjgZPjga7jg5Djg7zjgrjjg6fjg7Pjga/plovnmbrniYjjga7jgZ/jgoHjgIHkuI3lronlrprjgarmjJnli5XjgpLjgajjgovloLTlkIjjgYzjgYLjgorjgb7jgZnjgIJcXG4nXHJcbiAgICAgICAgICAgICAgICArIGB2ZXJzaW9uOiR7Q29uZmlnLnZpcnNpb259XFxuYFxyXG4gICAgICAgICAgICAgICAgKyBgYnVpbGREYXRlOiR7QlVJTERfREFURX1cXG5gXHJcbiAgICAgICAgICAgICAgICArIGBidWlsZDoke0NvbmZpZy5idWlsZH1gXHJcbiAgICAgICAgICAgICAgICArIGBidWcgcmVwb3J0Omh0dHBzOi8vZ2l0aHViLmNvbS9IYXlhby1IL25pY29tbWVudC1qcy9pc3N1ZXNgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoSVNfREVCVUcpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLndyaXRlKGDjgZPjga7jg5Djg7zjgrjjg6fjg7Pjga/jg4fjg5Djg4PjgrDniYjjgafjgZnjgIJcXG5gXHJcbiAgICAgICAgICAgICAgICArIGB2ZXJzaW9uOiR7Q29uZmlnLnZpcnNpb259XFxuYFxyXG4gICAgICAgICAgICAgICAgKyBgYnVpbGREYXRlOiR7QlVJTERfREFURX1cXG5gXHJcbiAgICAgICAgICAgICAgICArIGBidWlsZDoke0NvbmZpZy5idWlsZH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lvJXmlbDjg4Hjgqfjg4Pjgq9cclxuICAgICAgICB0aGlzLmNoZWNrQXJncyhpZCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgLy9jb250ZXh0XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLl9nZXRDb250ZXh0KGlkLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAvL+OCteOCpOOCulxyXG4gICAgICAgIHRoaXMuY2FudmFzU2l6ZSA9IG5ldyBTaXplKHsgaGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aCB9KTtcclxuICAgICAgICAvL+ODoeOCv+aDheWgsVxyXG4gICAgICAgIHRoaXMubWV0YSA9IG5ldyBNZXRhKCk7XHJcbiAgICAgICAgLy/ooajnpLrmmYLplpNcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gb3B0aW9uID8gb3B0aW9uLmR1cmF0aW9uID8gb3B0aW9uLmR1cmF0aW9uIDogZGVmYXVsdENvbmZpZy5kdXJhdGlvbiA6IGRlZmF1bHRDb25maWcuZHVyYXRpb247XHJcbiAgICAgICAgLy/oh6rli5Xmm7TmlrBcclxuICAgICAgICB0aGlzLm1haW5MYXllck5hbWUgPSBvcHRpb24gPyBvcHRpb24ubGF5ZXJOYW1lID8gb3B0aW9uLmxheWVyTmFtZSA6IGRlZmF1bHRDb25maWcuZGVmYXVsdExheWVyIDogZGVmYXVsdENvbmZpZy5kZWZhdWx0TGF5ZXI7XHJcbiAgICAgICAgLy/jgrXjgqTjgrrjg7vjg5Xjgqnjg7Pjg4hcclxuICAgICAgICB0aGlzLmxpbmVIZWlnaHQgPSBvcHRpb24gPyBvcHRpb24ubGluZWhlZ2h0ID8gb3B0aW9uLmxpbmVoZWdodCA6IGRlZmF1bHRDb25maWcubGluZUhlaWdodCA6IGRlZmF1bHRDb25maWcubGluZUhlaWdodDsgLy/ooajnpLrmmYLplpNcclxuICAgICAgICB0aGlzLmxpbmVzID0ge1xyXG4gICAgICAgICAgICBiaWc6IG9wdGlvbiA/IG9wdGlvbi5iaWdMaW5lcyA/IG9wdGlvbi5iaWdMaW5lcyA6IGRlZmF1bHRDb25maWcuYmlnTGluZXMgOiBkZWZhdWx0Q29uZmlnLmJpZ0xpbmVzLFxyXG4gICAgICAgICAgICBtZWRpdW06IG9wdGlvbiA/IG9wdGlvbi5tZWRpdW1MaW5lcyA/IG9wdGlvbi5tZWRpdW1MaW5lcyA6IGRlZmF1bHRDb25maWcubWVkaXVtTGluZXMgOiBkZWZhdWx0Q29uZmlnLm1lZGl1bUxpbmVzLFxyXG4gICAgICAgICAgICBzbWFsbDogb3B0aW9uID8gb3B0aW9uLnNtYWxsTGluZXMgPyBvcHRpb24uc21hbGxMaW5lcyA6IGRlZmF1bHRDb25maWcuc21hbGxMaW5lcyA6IGRlZmF1bHRDb25maWcuc21hbGxMaW5lc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5maXhlZExpbmVzID0geyBiaWc6IGRlZmF1bHRDb25maWcuZml4LmJpZywgbWVkaXVtOiBkZWZhdWx0Q29uZmlnLmZpeC5tZWRpdW0sIHNtYWxsOiBkZWZhdWx0Q29uZmlnLmZpeC5zbWFsIH07XHJcbiAgICAgICAgdGhpcy5mb25yU2l6ZSA9IHRoaXMuX2dldEZvbnRTaXplKGhlaWdodCwgdGhpcy5saW5lcyk7IC8vZmludFNJemXkuIDopqdcclxuICAgICAgICB0aGlzLmZpeGVkRm9uclNpemUgPSB0aGlzLl9nZXRGb250U2l6ZShoZWlnaHQsIHRoaXMuZml4ZWRMaW5lcyk7XHJcbiAgICAgICAgLy/jg6zjgqTjg6Tjg7xcclxuICAgICAgICB0aGlzLm1haW5MYXllck5hbWUgPSBvcHRpb24gPyBvcHRpb24ubGF5ZXJOYW1lID8gb3B0aW9uLmxheWVyTmFtZSA6IGRlZmF1bHRDb25maWcuZGVmYXVsdExheWVyIDogZGVmYXVsdENvbmZpZy5kZWZhdWx0TGF5ZXI7XHJcbiAgICAgICAgdGhpcy5sYXllcnMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMYXllcih0aGlzLm1haW5MYXllck5hbWUpO1xyXG4gICAgICAgIHRoaXMudG90YWwgPSAwO1xyXG4gICAgICAgIHRoaXMucnVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzUGxheSA9IHRydWU7XHJcbiAgICAgICAgLy/oh6rli5Xmm7TmlrDjg5Xjg6njgrBcclxuICAgICAgICB0aGlzLmF1dG9UaWNrRGlzYWJsZWQgPSBvcHRpb24gPyBvcHRpb24uYXV0b1RpY2tEaXNhYmxlZCA/IG9wdGlvbi5hdXRvVGlja0Rpc2FibGVkIDogZmFsc2UgOiBmYWxzZTtcclxuICAgICAgICBpZiAoSVNfREVCVUcpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLndyaXRlKGBjYW52YXNJRDoke2lkfSwgd2lkdGg6JHt3aWR0aH1weCwgaGVpZ2h0OiR7aGVpZ2h0fXB4YCk7XHJcbiAgICAgICAgICAgIExvZ2dlci53cml0ZSgn5Yid5pyf5YyW44GM5a6M5LqG44GX44G+44GX44Gf44CCJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5hdXRvVGlja0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChJU19ERUJVRylcclxuICAgICAgICAgICAgICAgIExvZ2dlci53cml0ZSgn5pu05paw5Yem55CG44KS6ZaL5aeL44GX44G+44GZ44CCJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGljaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOW8leaVsOODgeOCp+ODg+OCr1xyXG4gICAgICogQHBhcmFtIGlkIGlkXHJcbiAgICAgKiBAcGFyYW0gd2lkdGggd2lkdGhcclxuICAgICAqIEBwYXJhbSBoZWlnaHQgaGVpZ2h0XHJcbiAgICAgKi9cclxuICAgIGNoZWNrQXJncyhpZCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIGlmICghaWQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5BUkdVTUVOVFMuTk9UX0VYSVNULklEKTtcclxuICAgICAgICBpZiAoIXdpZHRoKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuX19JTklUX18uQVJHVU1FTlRTLk5PVF9FWElTVC5XSURUSCk7XHJcbiAgICAgICAgaWYgKCFoZWlnaHQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5BUkdVTUVOVFMuTk9UX0VYSVNULkhFSUdIVCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5BUkdVTUVOVFMuTmFOLldJRFRIKHdpZHRoKSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBoZWlnaHQgIT09ICdudW1iZXInKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuX19JTklUX18uQVJHVU1FTlRTLk5hTi5IRUlHSFQoaGVpZ2h0KSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOCkui/veWKoOOBmeOCi1xyXG4gICAgICogQHBhcmFtIHRleHQg6KGo56S644GZ44KL44Kz44Oh44Oz44OIXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9u44CA44Kq44OX44K344On44Oz44CCO1xyXG4gICAgICovXHJcbiAgICBzZW5kKHRleHQsIG9wdGlvbikge1xyXG4gICAgICAgIGxldCBjdXN0b21BdHRyID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGNvbnN0IGxheWVyID0gb3B0aW9uID8gb3B0aW9uLmxheWVyID8gb3B0aW9uLmxheWVyIDogdGhpcy5tYWluTGF5ZXJOYW1lIDogdGhpcy5tYWluTGF5ZXJOYW1lO1xyXG4gICAgICAgIGNvbnN0IGNvbVR5cGUgPSBvcHRpb24gPyBvcHRpb24udHlwZSA/IG9wdGlvbi50eXBlIDogJ25ha2EnIDogJ25ha2EnO1xyXG4gICAgICAgIGNvbnN0IGNvbVNpemUgPSBvcHRpb24gPyBvcHRpb24uc2l6ZSA/IG9wdGlvbi5zaXplIDogJ21lZGl1bScgOiAnbWVkaXVtJztcclxuICAgICAgICBjb25zdCBjb2xvciA9IG9wdGlvbiA/IG9wdGlvbi5jb2xvciA/IG9wdGlvbi5jb2xvciA6ICcjZmZmJyA6ICcjZmZmJztcclxuICAgICAgICBjb25zdCBiY29sb3IgPSB0aGlzLmdldEJjb2xvcihjb2xvcik7XHJcbiAgICAgICAgY29uc3QgdnBvcyA9IG9wdGlvbiA/IG9wdGlvbi52cG9zID8gb3B0aW9uLnZwb3MgOiAwIDogMDtcclxuICAgICAgICBjb25zdCBmb250TmFtZSA9IG9wdGlvbiA/IG9wdGlvbi5mb250TmFtZSA/IG9wdGlvbi5mb250TmFtZSA6IGRlZmF1bHRDb25maWcuZGVmYXVsdEZvbnQgOiBkZWZhdWx0Q29uZmlnLmRlZmF1bHRGb250O1xyXG4gICAgICAgIGNvbnN0IG9wYWNpdHkgPSBvcHRpb24gPyBvcHRpb24ub3BhY2l0eSA/IG9wdGlvbi5vcGFjaXR5IDogZGVmYXVsdENvbmZpZy5vcGFjaXR5IDogZGVmYXVsdENvbmZpZy5vcGFjaXR5O1xyXG4gICAgICAgIGNvbnN0IGZ1bGwgPSBvcHRpb24gPyBvcHRpb24uZnVsbCA/IG9wdGlvbi5mdWxsIDogZmFsc2UgOiBmYWxzZTtcclxuICAgICAgICBjb25zdCBvbkRpc3Bvc2VkID0gb3B0aW9uID8gb3B0aW9uLm9uRGlzcG9zZWQgPyBvcHRpb24ub25EaXNwb3NlZCA6ICgpID0+IHsgfSA6ICgpID0+IHsgfTtcclxuICAgICAgICB0aGlzLnRvdGFsKys7XHJcbiAgICAgICAgaWYgKG9wdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb24uY3VzdG9tQXR0ciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjdXN0b21BdHRyID0gdGhpcy5fZ2V0QXR0cihvcHRpb24uY3VzdG9tQXR0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY3VzdG9tQXR0ci5zZXQoJ2NvbG9yJywgY29sb3IpO1xyXG4gICAgICAgIGN1c3RvbUF0dHIuc2V0KCdiY29sb3InLCBiY29sb3IpO1xyXG4gICAgICAgIGN1c3RvbUF0dHIuc2V0KCdmb250TmFtZScsIGZvbnROYW1lKTtcclxuICAgICAgICBjdXN0b21BdHRyLnNldCgnb3BhY2l0eScsIG9wYWNpdHkpO1xyXG4gICAgICAgIGN1c3RvbUF0dHIuc2V0KCdmdWxsJywgZnVsbCk7XHJcbiAgICAgICAgY29uc3QgbGF5ZXJPYmogPSB0aGlzLmxheWVycy5nZXQobGF5ZXIpO1xyXG4gICAgICAgIGlmIChsYXllck9iaiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxheWVyT2JqLmFkZCh0ZXh0LCB0aGlzLnRvdGFsLCBjdXN0b21BdHRyLCBjb21UeXBlLCBjb21TaXplLCB7IG9uRGlzcGFzZWQ6IG9uRGlzcG9zZWQgfSwgdnBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuTEFZRVIuTEFZRVJfRE9FU19OT1RfRVhJU1QobGF5ZXIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOS4gOaZguWBnOatolxyXG4gICAgICovXHJcbiAgICBwYXVzZSgpIHtcclxuICAgICAgICB0aGlzLmlzUGxheSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlho3nlJ9cclxuICAgICAqL1xyXG4gICAgcGxheSgpIHtcclxuICAgICAgICB0aGlzLmlzUGxheSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOCkuWJiumZpOOBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIGxheWVyIOODrOOCpOODpOODvFxyXG4gICAgICovXHJcbiAgICBjbGVhcihsYXllcikge1xyXG4gICAgICAgIGlmIChsYXllcikge1xyXG4gICAgICAgICAgICBjb25zdCBsYXllck9iaiA9IHRoaXMubGF5ZXJzLmdldChsYXllcik7XHJcbiAgICAgICAgICAgIGlmIChsYXllck9iaiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBsYXllck9iai5jbGVhcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLkxBWUVSLkxBWUVSX0RPRVNfTk9UX0VYSVNUKGxheWVyKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGF5ZXIuY2xlYXIoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlhajjgabjga7lh6bnkIbjgpLntYLkuobjgZfjgb7jgZlcclxuICAgICAqL1xyXG4gICAgZGlzcG9zZSgpIHtcclxuICAgICAgICB0aGlzLnJ1biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNQbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGxheWVyLmNsZWFyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzU2l6ZS53aWR0aCwgdGhpcy5jYW52YXNTaXplLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5bGe5oCn44KS5Y+W5b6X44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gY3VzdG9tQXR0ciDjgqvjgrnjgr/jg6DlsZ7mgKdcclxuICAgICAqL1xyXG4gICAgX2dldEF0dHIoY3VzdG9tQXR0cikge1xyXG4gICAgICAgIGNvbnN0IG1hcG9iaiA9IG5ldyBNYXAoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhjdXN0b21BdHRyKSkge1xyXG4gICAgICAgICAgICBtYXBvYmouc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWFwb2JqO1xyXG4gICAgfVxyXG4gICAgX2dldEZvbnRTaXplKGhlaWdodCwgbGluZXMpIHtcclxuICAgICAgICBjb25zdCBiaWcgPSBoZWlnaHQgLyBsaW5lcy5iaWc7XHJcbiAgICAgICAgY29uc3QgbWVkaXVtID0gaGVpZ2h0IC8gbGluZXMubWVkaXVtO1xyXG4gICAgICAgIGNvbnN0IHNtYWxsID0gaGVpZ2h0IC8gbGluZXMuc21hbGw7XHJcbiAgICAgICAgcmV0dXJuIHsgYmlnOiBiaWcsIG1lZGl1bTogbWVkaXVtLCBzbWFsbDogc21hbGwgfTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogY2FudmFz44Kz44Oz44OG44Kt44K544OI44KS5Y+W5b6X44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gaWQgSURcclxuICAgICAqIEBwYXJhbSB3aWR0aCDmqKrluYVcclxuICAgICAqIEBwYXJhbSBoZWlnaHQg6auY44GVXHJcbiAgICAgKi9cclxuICAgIF9nZXRDb250ZXh0KGlkLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgY29uc3QgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIGlmICghZWxtKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5FTEVNRU5ULk5PVF9FWElTVChpZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWxtLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICAgICAgZWxtLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgIGVsbS5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcclxuICAgICAgICAgICAgZWxtLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XHJcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IGVsbS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICBpZiAoY3R4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3R4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOODoeOCpOODs+ODq+ODvOODl1xyXG4gICAgICovXHJcbiAgICB0aWNrKHZwb3MsIHJlbmRlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUGxheSkge1xyXG4gICAgICAgICAgICBpZiAocmVuZGVyID09PSB1bmRlZmluZWQgfHwgcmVuZGVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNTaXplLndpZHRoLCB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgICAgIGxheWVyLnRpY2sodGhpcy5tZXRhLmdldENvdW50KCksIHZwb3MsIHJlbmRlcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLm1ldGEubG9vcCgpOyAvL+OCpOODs+OCr+ODquODoeODs+ODiFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ydW4gJiYgIXRoaXMuYXV0b1RpY2tEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4geyB0aGlzLnRpY2sodnBvcyk7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOe4geWPluOCiuiJsuOCkuWPluW+l+OBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIGNvbG9yIOiJslxyXG4gICAgICovXHJcbiAgICBnZXRCY29sb3IoY29sb3IpIHtcclxuICAgICAgICBzd2l0Y2ggKGNvbG9yKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JsYWNrJzpcclxuICAgICAgICAgICAgY2FzZSAnIzAwMCc6XHJcbiAgICAgICAgICAgIGNhc2UgJyMwMDAwMDAnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcjZmZmJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcjMDAwJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaMh+WumuOBl+OBn+S9jee9ruOBq+WtmOWcqOOBmeOCi+OCs+ODoeODs+ODiOOCkuWPluW+l+OBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIHggWOW6p+aomVxyXG4gICAgICogQHBhcmFtIHkgWeW6p+aomVxyXG4gICAgICovXHJcbiAgICBnZXQoeCwgeSkge1xyXG4gICAgICAgIGxldCBjb21tZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICBjb21tZW50ID0gbGF5ZXIuZ2V0KHgsIHkpO1xyXG4gICAgICAgICAgICBpZiAoY29tbWVudClcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gY29tbWVudDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Os44Kk44Ok44O844KS6L+95Yqg44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gbGF5ZXJOYW1lIOODrOOCpOODpOODvOWQjVxyXG4gICAgICovXHJcbiAgICBhZGRMYXllcihsYXllck5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5sYXllcnMuaGFzKGxheWVyTmFtZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLkxBWUVSLkRVUExJQ0FUSU9OKGxheWVyTmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYXllcnMuc2V0KGxheWVyTmFtZSwgbmV3IExheWVyKHRoaXMuY3R4LCB0aGlzLmNhbnZhc1NpemUsIHRoaXMubGluZXMsIHRoaXMuZm9uclNpemUsIHRoaXMuZml4ZWRGb25yU2l6ZSwgdGhpcy5kdXJhdGlvbiwgdGhpcy5saW5lSGVpZ2h0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChJU19ERUJVRykge1xyXG4gICAgICAgICAgICBMb2dnZXIud3JpdGUoYOODrOOCpOODpOODvCBcIiR7bGF5ZXJOYW1lfVwiIOOCkui/veWKoOOBl+OBvuOBl+OBn+OAgmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Os44Kk44Ok44O844KS5YmK6Zmk44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gbGF5ZXJOYW1lIOODrOOCpOODpOODvOWQjVxyXG4gICAgICovXHJcbiAgICByZW1vdmVMYXllcihsYXllck5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5sYXllcnMuaGFzKGxheWVyTmFtZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLkxBWUVSLkRVUExJQ0FUSU9OKGxheWVyTmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYXllcnMuZGVsZXRlKGxheWVyTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChJU19ERUJVRykge1xyXG4gICAgICAgICAgICBMb2dnZXIud3JpdGUoYOODrOOCpOODpOODvCBcIiR7bGF5ZXJOYW1lfVwiIOOCkuWJiumZpOOBl+OBvuOBl+OBn+OAgmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKipcclxuICog44Oh44K/5oOF5aCx44Kv44Op44K5XHJcbiAqL1xyXG5jbGFzcyBNZXRhIHtcclxuICAgIC8qKlxyXG4gICAgICog5Yid5pyf5YyWXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgqvjgqbjg7Pjg4jjgpLlopfjgoTjgZfjgb7jgZlcclxuICAgICAqL1xyXG4gICAgbG9vcCgpIHtcclxuICAgICAgICB0aGlzLmNvdW50Kys7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCq+OCpuODs+ODiOOCkuWPluW+l1xyXG4gICAgICovXHJcbiAgICBnZXRDb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3VudDtcclxuICAgIH1cclxufVxyXG4vKipcclxuICog44Ot44KwXHJcbiAqL1xyXG5jbGFzcyBMb2dnZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiDjg63jgrDjgpLlh7rlipvjgZnjgotcclxuICAgICAqIEBwYXJhbSBsb2cg5pys5paHXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB3cml0ZShsb2cpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgW05pY29tbWVudEpTXSR7bG9nfWApO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiDjgqjjg6njg7xcclxuICovXHJcbmNvbnN0IE5pY29FeGNlcHRpb25zID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3mnJ/ljJbjgqjjg6njg7xcclxuICAgICAqL1xyXG4gICAgX19JTklUX186IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvJXmlbDjgqjjg6njg7xcclxuICAgICAgICAgKi9cclxuICAgICAgICBBUkdVTUVOVFM6IHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOW/heimgeOBquW8leaVsOOBjOWtmOWcqOOBl+OBquOBhFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTk9UX0VYSVNUOiB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIOmrmOOBlVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBIRUlHSFQ6ICdbRVJSXWFyZ3VtZW50IFwiaGVpZ2h0XCIgbXVzdCBiZSBzcGVjaWZpZWQuJyxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICog5qiq5bmFXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIFdJRFRIOiAnW0VSUl1hcmd1bWVudCBcIndpZHRoXCIgbXVzdCBiZSBzcGVjaWZpZWQuJyxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogSURcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgSUQ6ICdbRVJSXWFyZ3VtZW50IFwiaWRcIiBtdXN0IGJlIHNwZWNpZmllZC4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5byV5pWw44Gu5YCk44GM5LiN6YGp5YiH44Gn44GC44KLXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBOYU46IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICog6auY44GV44GM5pWw5a2X44Gn44Gq44GEXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIEhFSUdIVDogKHZhbHVlKSA9PiBgW0VSUl0ke3ZhbHVlfSBpcyBub3QgYSBudW1iZXIuIFwiaGVpZ2h0XCIgbXVzIGJlIGEgbnVtYmVyLmAsXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIOaoquW5heOBjOaVsOWtl+OBp+OBquOBhFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBXSURUSDogKHZhbHVlKSA9PiBgW0VSUl0ke3ZhbHVlfSBpcyBub3QgYSBudW1iZXIuIFwid2lkdGhcIiBtdXMgYmUgYSBudW1iZXIuYCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44GM5a2Y5Zyo44GX44Gq44GE44O7Y2FudmFz44Gn44Gq44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgRUxFTUVOVDoge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6KaB57Sg44GM5a2Y5Zyo44GX44Gq44GEXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBOT1RfRVhJU1Q6IChpZCkgPT4geyByZXR1cm4gYFtFUlJdQ2FudmFzIEVsZW1lbnQgd2hpY2ggaWQgaXMgXCIke2lkfVwiIHdhcyBub3QgZm91bmQuYDsgfSxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOimgee0oOOBjEhUTUxDYW52YXPjgafjgarjgYRcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIE5PVF9BX0NBTlZBU19FTEVNRU5UOiAoaWQpID0+IHsgcmV0dXJuIGBbRVJSXUVsZW1lbnQgd2hpY2ggaWQgaXMgXCIke2lkfVwiIGlzIG5vdCBhIGNhbnZhc0hUTUw1IEVsZW1lbnQuYDsgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jov73liqDmmYLjga7jgqjjg6njg7xcclxuICAgICAqL1xyXG4gICAgU0VORDoge30sXHJcbiAgICAvKipcclxuICAgICAqIOODrOOCpOODpOODvOmWouS/guOBruOCqOODqeODvFxyXG4gICAgICovXHJcbiAgICBMQVlFUjoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOmHjeikh1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIERVUExJQ0FUSU9OOiAobmFtZSkgPT4geyByZXR1cm4gYFtFUlJdVGhlIGxheWVyIG5hbWUgJHtuYW1lfSBhbHJlYWR5IGV4aXN0cy5gOyB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODrOOCpOODpOODvOOBjOWtmOWcqOOBl+OBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIExBWUVSX0RPRVNfTk9UX0VYSVNUOiAobmFtZSkgPT4geyByZXR1cm4gYFtFUlJdQSBsYXllciBuYW1lIGlzICR7bmFtZX0gZG9lcyBub3QgZXhpc3QuYDsgfSxcclxuICAgIH0sXHJcbn07XHJcbiIsImltcG9ydCB7IERhdGFVdGlscyB9IGZyb20gJy4uL3V0aWxzL0RhdGFVdGlscyc7XHJcbmltcG9ydCBkZWZhdWx0Q29uZmlnIGZyb20gJy4vY29uZmlnJztcclxuLy91dGlsXHJcbmNvbnN0IGRhdGF1dGwgPSBuZXcgRGF0YVV0aWxzKCk7XHJcbi8v44Kz44Oh44Oz44OI44Kq44OW44K444Kn44Kv44OIXHJcbmV4cG9ydCBjbGFzcyBDb21tZW50QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbSkge1xyXG4gICAgICAgIHRoaXMubGlmZSA9IDA7IC8v5q6L44KK44Kz44Oe5pWwXHJcbiAgICAgICAgdGhpcy5kZWx0YSA9IDA7IC8vMeOCs+ODnuW9k+OBn+OCiuOBrljluqfmqJnjga7lpInph49cclxuICAgICAgICB0aGlzLmxlZnQgPSAwOyAvL1jluqfmqJlcclxuICAgICAgICB0aGlzLnRvcCA9IDA7IC8vWeW6p+aomSjljp/ngrnjga/lt6bkuIopXHJcbiAgICAgICAgdGhpcy5yZXZlYWwgPSAwOyAvL+OCs+ODoeODs+ODiOOBjOeUu+mdouWPs+OBi+OCieWujOWFqOOBq+mcsuWHuuOBmeOCi+OBvuOBp+OBruOCs+ODnuaVsFxyXG4gICAgICAgIHRoaXMudG91Y2ggPSAwOyAvL+OCs+ODoeODs+ODiOOBruW3puerr+OBjOeUu+mdouW3puOBq+WIsOmBlOOBmeOCi+OBvuOBp+OBruOCs+ODnuaVsFxyXG4gICAgICAgIHRoaXMuZml4ZWQgPSBmYWxzZTsgLy/lm7rlrprjg5Xjg6njgrBcclxuICAgICAgICB0aGlzLnR5cGUgPSBwYXJhbS5vcHRpb24ubW9kZTsgLy/jgr/jgqTjg5dcclxuICAgICAgICB0aGlzLmN1c3RvbUF0dHIgPSBwYXJhbS5vcHRpb24uY3VzdG9tQXR0cjsgLy/jgqvjgrnjgr/jg6DlsZ7mgKdcclxuICAgICAgICB0aGlzLm9yaWdpbmFsVGV4dCA9IHBhcmFtLnRleHQ7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGhpcy5fZm9ybWF0Q29tbWVudChwYXJhbS50ZXh0LCB0aGlzLnR5cGUpOyAvL+acrOaWh1xyXG4gICAgICAgIHRoaXMudGV4dEZvclJlbmRlciA9IHRoaXMuX2Zvcm1hdFJlbmRlckNvbW1lbnQodGhpcy50ZXh0KTtcclxuICAgICAgICB0aGlzLnRleHRMZW5ndGggPSBNYXRoLm1heCguLi50aGlzLnRleHQubWFwKHRleHQgPT4gdGV4dC5sZW5ndGgpKTtcclxuICAgICAgICB0aGlzLm1heExlbmd0aEluZGV4ID0gdGhpcy50ZXh0Lm1hcChjb21tZW50ID0+IGNvbW1lbnQubGVuZ3RoKS5pbmRleE9mKHRoaXMudGV4dExlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5jb21tZW50TnVtYmVyID0gcGFyYW0uY29tbWVudE51bWJlcjtcclxuICAgICAgICB0aGlzLmNvbG9yID0gcGFyYW0ub3B0aW9uLmNvbG9yOyAvL+iJslxyXG4gICAgICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBwYXJhbS5vcHRpb24uYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgdGhpcy5saW5lcyA9IHRoaXMuX2dldExpbmVzKHBhcmFtLm9wdGlvbi5jb21tZW50U2l6ZSwgcGFyYW0ubGluZXMpO1xyXG4gICAgICAgIHRoaXMuc2VsZkxpbmVzID0gdGhpcy50ZXh0Lmxlbmd0aDsgLy/ooYzmlbBcclxuICAgICAgICB0aGlzLmN0eCA9IHBhcmFtLmN0eDtcclxuICAgICAgICB0aGlzLmZvbnROYW1lID0gcGFyYW0ub3B0aW9uLmZvbnROYW1lOyAvL+ODleOCqeODs+ODiOWQjVxyXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IHBhcmFtLm9wdGlvbi5vcGFjaXR5OyAvL+mAj+mBjuW6plxyXG4gICAgICAgIHRoaXMuZnVsbCA9IHBhcmFtLm9wdGlvbi5mdWxsOyAvL+iHqOeVjOeCueODquOCteOCpOOCulxyXG4gICAgICAgIHRoaXMuY2FudmFzU2l6ZSA9IHBhcmFtLmNhbnZhc1NpemU7XHJcbiAgICAgICAgdGhpcy5jYW52YXNXaWR0aEZsYXNoID0gcGFyYW0uY2FudmFzV2lkdGhGbGFzaDtcclxuICAgICAgICAvL+WbuuWumuODleODqeOCsFxyXG4gICAgICAgIGlmICh0aGlzLnRleHQubGVuZ3RoID49IHRoaXMubGluZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5maXhlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICAvL3Zwb3Pjg7vooajnpLrmmYLplpNcclxuICAgICAgICB0aGlzLnZwb3MgPSBwYXJhbS5vcHRpb24udnBvcztcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gcGFyYW0ub3B0aW9uLmR1cmF0aW9uIHx8IGRlZmF1bHRDb25maWcuZHVyYXRpb247XHJcbiAgICAgICAgLy/jg5Xjgqnjg7Pjg4jplqLkv4JcclxuICAgICAgICB0aGlzLmZvbnRTaXplU3RyaW5nID0gcGFyYW0ub3B0aW9uLmNvbW1lbnRTaXplO1xyXG4gICAgICAgIFt0aGlzLmZvbnRTaXplLCB0aGlzLndpZHRoLCB0aGlzLm9mZnNldFldID0gdGhpcy5fZ2V0Rm9udCh0aGlzLnRleHRbdGhpcy5tYXhMZW5ndGhJbmRleF0sIHRoaXMuY2FudmFzU2l6ZSwgdGhpcy5jYW52YXNXaWR0aEZsYXNoLCBwYXJhbS5vcHRpb24uY29tbWVudFNpemUsIHBhcmFtLmZvbnRTaXplLCBwYXJhbS5maXhlZEZvbnRTaXplLCB0aGlzLnR5cGUsIHBhcmFtLm9wdGlvbi5saW5laGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmZvbnRTaXplU3RyaW5nID0gcGFyYW0ub3B0aW9uLmNvbW1lbnRTaXplO1xyXG4gICAgICAgIHRoaXMub3ZlcmFsbFNpemUgPSB0aGlzLmZvbnRTaXplICogdGhpcy5zZWxmTGluZXM7XHJcbiAgICAgICAgdGhpcy5hbGl2ZSA9IHRydWU7IC8v55Sf5a2Y44OV44Op44KwXHJcbiAgICAgICAgdGhpcy5vbkRpc3Bvc2VkID0gcGFyYW0ub25EaXNwb3NlZDsgLy/jgrPjg7zjg6vjg5Djg4Pjgq9cclxuICAgICAgICB0aGlzLl9zZXQoKTsgLy/jgrvjg4Pjg4jlrp/ooYxcclxuICAgIH1cclxuICAgIC8v5bGe5oCn5Y+W5b6XXHJcbiAgICBnZXRQcm9wKGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1c3RvbUF0dHIuZ2V0KGtleSk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOWHpueQhlxyXG4gICAgICovXHJcbiAgICB0aWNrKHZwb3MpIHtcclxuICAgICAgICAvL+OCs+ODoeODs+ODiOOBrue0r+ioiOihqOekuuaZgumWk+OBjOaXouWumuOBrjLlgI3ku6XkuIrjgafjgYLjgaPjgZ/loLTlkIjjgIHjgrPjg6Hjg7Pjg4jjgpLliYrpmaTjgZnjgotcclxuICAgICAgICBpZiAodnBvcyA+PSB0aGlzLnZwb3MgKyB0aGlzLmR1cmF0aW9uICogMjAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpZmUtLTtcclxuICAgICAgICAvL25ha2HjgrPjg6Hjg7Pjg4jjga7loLTlkIhcclxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnbmFrYScpIHtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0IC09IHRoaXMuZGVsdGE7XHJcbiAgICAgICAgICAgIHRoaXMucmV2ZWFsLS07XHJcbiAgICAgICAgICAgIHRoaXMudG91Y2gtLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubGlmZSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5raWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjga7nlJ/lrZjjg5Xjg6njgrDjgpLlvLfliLbnmoTjgavpmY3jgo3jgZfjgb7jgZlcclxuICAgICAqL1xyXG4gICAga2lsbCgpIHtcclxuICAgICAgICB0aGlzLmFsaXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbkRpc3Bvc2VkKCk7XHJcbiAgICB9XHJcbiAgICAvL+OCu+ODg+ODiFxyXG4gICAgX3NldCgpIHtcclxuICAgICAgICB0aGlzLmxpZmUgPSAwOyAvL+aui+OCiuOCs+ODnuaVsFxyXG4gICAgICAgIHRoaXMubGVmdCA9IDA7IC8vWOW6p+aomVxyXG4gICAgICAgIHRoaXMudG9wID0gMDsgLy9Z5bqn5qiZKOWOn+eCueOBr+W3puS4iilcclxuICAgICAgICB0aGlzLmRlbHRhID0gMDsgLy8x44Kz44Oe5b2T44Gf44KK44GuWOW6p+aomeOBruWkiemHj1xyXG4gICAgICAgIHRoaXMucmV2ZWFsID0gMDsgLy/jgrPjg6Hjg7Pjg4jjgYznlLvpnaLlj7PjgYvjgonlrozlhajjgavpnLLlh7rjgZnjgovjgb7jgafjga7jgrPjg57mlbBcclxuICAgICAgICB0aGlzLnRvdWNoID0gMDsgLy/jgrPjg6Hjg7Pjg4jjga7lt6bnq6/jgYznlLvpnaLlt6bjgavliLDpgZTjgZnjgovjgb7jgafjga7jgrPjg57mlbBcclxuICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICduYWthJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldE5ha2EoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzaGl0YSc6XHJcbiAgICAgICAgICAgIGNhc2UgJ3VlJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldFNoaXRhVWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL25ha2HjgrPjg6Hjg7Pjg4joqK3lrppcclxuICAgIF9zZXROYWthKCkge1xyXG4gICAgICAgIHRoaXMubGlmZSA9IGRlZmF1bHRDb25maWcuZnBzICogdGhpcy5kdXJhdGlvbjtcclxuICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLmNhbnZhc1NpemUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5kZWx0YSA9ICh0aGlzLmNhbnZhc1NpemUud2lkdGggKyB0aGlzLndpZHRoKSAvIHRoaXMubGlmZTtcclxuICAgICAgICB0aGlzLnJldmVhbCA9IHRoaXMud2lkdGggLyB0aGlzLmRlbHRhO1xyXG4gICAgICAgIHRoaXMudG91Y2ggPSB0aGlzLmNhbnZhc1NpemUud2lkdGggLyB0aGlzLmRlbHRhO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBzaGl044O7dWXjgrPjg6Hjg7Pjg4jjgpLoqK3lrprjgZnjgotcclxuICAgICAqIEBwYXJhbSB3aWR0aCBjYW52YXPjga7mqKrluYVcclxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiDjgrPjg6Hjg7Pjg4jooajnpLrmmYLplpNcclxuICAgICAqL1xyXG4gICAgX3NldFNoaXRhVWUoKSB7XHJcbiAgICAgICAgdGhpcy5saWZlID0gZGVmYXVsdENvbmZpZy5mcHMgKiB0aGlzLmR1cmF0aW9uO1xyXG4gICAgICAgIGlmICh0aGlzLmZpeGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCA9ICh0aGlzLmNhbnZhc1NpemUud2lkdGggLSB0aGlzLndpZHRoKSAvIDI7XHJcbiAgICAgICAgICAgIC8vdGhpcy5sZWZ0ID0gdGhpcy5jYW52YXNTaXplLndpZHRoIC8gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IHRoaXMuY2FudmFzU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9mb25044KS5rG65a6a44GZ44KLXHJcbiAgICBfZ2V0Rm9udCh0ZXh0LCBjYW52YXNTaXplLCBmbGFzaFdpZHRoLCBjb21tZW50U2l6ZSwgZm9udFNpemUsIGZpeGVkRm9udFNpemUsIHR5cGUsIGxpbmVIZWlnaHQpIHtcclxuICAgICAgICBsZXQgb3JpZ2luYWxGb250ID0gdGhpcy5fZ2V0U2l6ZShjb21tZW50U2l6ZSwgZm9udFNpemUpO1xyXG4gICAgICAgIGxldCBmb250ID0gb3JpZ2luYWxGb250O1xyXG4gICAgICAgIC8v44O75pS56KGM44Oq44K144Kk44K6XHJcbiAgICAgICAgLy9vdmVyYWxsU2l6ZeOBq+ebuOW9k+OBmeOCi+mrmOOBleOBjOOAgeaPj+WGmemgmOWfn+OBrjEvM+OCkuS4iuWbnuOCi+WgtOWQiOOBq+OAgVxyXG4gICAgICAgIC8v44Oq44K144Kk44K644KS6KGM44GG44CCXHJcbiAgICAgICAgaWYgKG9yaWdpbmFsRm9udCAqIHRoaXMuc2VsZkxpbmVzID4gY2FudmFzU2l6ZS5oZWlnaHQgLyAzKSB7XHJcbiAgICAgICAgICAgIGZvbnQgPSB0aGlzLl9nZXRTaXplKGNvbW1lbnRTaXplLCBmaXhlZEZvbnRTaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IGAke2ZvbnR9cHggXCJZdSBHb3RoaWNcImA7XHJcbiAgICAgICAgbGV0IGNvbVdpZHRoID0gdGhpcy5jdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XHJcbiAgICAgICAgLy/jg7voh6jnlYzluYXjg6rjgrXjgqTjgrpcclxuICAgICAgICAvL+OCs+ODoeODs+ODiOOBruacgOWkp+W5heOBjOaPj+WGmemgmOWfn+OCkuS4iuWbnuOCi+WgtOWQiOOBq+OAgeaPj+WGmemgmOWfn+OBq+WPjuOBvuOCi+OCiOOBhuOBq+ODquOCteOCpOOCuuOBmeOCi1xyXG4gICAgICAgIGNvbnN0IHdpZHRoT3ZlcmZsb3cgPSBjb21XaWR0aCA+IHRoaXMuY2FudmFzU2l6ZS53aWR0aCAmJiB0eXBlICE9PSAnbmFrYSc7XHJcbiAgICAgICAgaWYgKHdpZHRoT3ZlcmZsb3cgJiYgIXRoaXMuZnVsbCkge1xyXG4gICAgICAgICAgICBmb250ID0gdGhpcy5fbW9kU2l6ZShvcmlnaW5hbEZvbnQsIGNvbVdpZHRoLCB0aGlzLmNhbnZhc1dpZHRoRmxhc2gpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gYCR7Zm9udH1weCBcIll1IEdvdGhpY1wiYDtcclxuICAgICAgICAgICAgY29tV2lkdGggPSB0aGlzLmN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAod2lkdGhPdmVyZmxvdyAmJiB0aGlzLmZ1bGwpIHtcclxuICAgICAgICAgICAgZm9udCA9IHRoaXMuX21vZFNpemUob3JpZ2luYWxGb250LCBjb21XaWR0aCwgdGhpcy5jYW52YXNTaXplLndpZHRoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IGAke2ZvbnR9cHggXCJZdSBHb3RoaWNcImA7XHJcbiAgICAgICAgICAgIGNvbVdpZHRoID0gdGhpcy5jdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG9mZnNldFkgPSB0eXBlID09PSAnc2hpdGEnID8gZm9udCAqIChsaW5lSGVpZ2h0IC0gMSkgKiAtMSA6IGZvbnQgKiAobGluZUhlaWdodCAtIDEpO1xyXG4gICAgICAgIHJldHVybiBbZm9udCwgY29tV2lkdGgsIG9mZnNldFldO1xyXG4gICAgfVxyXG4gICAgLy/jg5Xjgqnjg7Pjg4jjgrXjgqTjgrrkv67mraNcclxuICAgIF9tb2RTaXplKGZvbnQsIHdpZHRoLCBjYW52YXNXaWR0aCkge1xyXG4gICAgICAgIHJldHVybiBmb250ICogY2FudmFzV2lkdGggLyB3aWR0aDtcclxuICAgIH1cclxuICAgIC8v5pS56KGM44Oq44K144Kk44K6XHJcbiAgICAvL2ZvbnRTaXpl5Y+W5b6XXHJcbiAgICBfZ2V0U2l6ZShjb21tZW50U2l6ZSwgZm9udFNpemUpIHtcclxuICAgICAgICBzd2l0Y2ggKGNvbW1lbnRTaXplKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JpZyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9udFNpemUuYmlnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NtYWxsJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb250U2l6ZS5zbWFsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbnRTaXplLm1lZGl1bTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOihjOaVsOOCkuaxguOCgeOCi1xyXG4gICAgICogQHBhcmFtIHNpemUgYmlnL3NtYWxsL21lZGl1beOBruOBhOOBmuOCjOOBi1xyXG4gICAgICogQHBhcmFtIGFsbExpbmVzIGNvbW1lbnRMaW5lc+Wei+OBruOCquODluOCuOOCp+OCr+ODiCjjgZ3jgozjgZ7jgozjga7jgrXjgqTjgrrjgavjgaTjgYTjgabooYzmlbDjgpLooajjgZkpXHJcbiAgICAgKi9cclxuICAgIF9nZXRMaW5lcyhzaXplLCBhbGxMaW5lcykge1xyXG4gICAgICAgIHN3aXRjaCAoc2l6ZSkge1xyXG4gICAgICAgICAgICBjYXNlICdiaWcnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbExpbmVzLmJpZztcclxuICAgICAgICAgICAgY2FzZSAnbWVkaXVtJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGxMaW5lcy5tZWRpdW07XHJcbiAgICAgICAgICAgIGNhc2UgJ3NtYWxsJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGxMaW5lcy5zbWFsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOCkuaVtOW9ouOBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIG9yaWdpbiDjgrPjg6Hjg7Pjg4hcclxuICAgICAqIEBwYXJhbSBjb21tZW50UG9zIOOCs+ODoeODs+ODiOOBruOCv+OCpOODl1xyXG4gICAgICovXHJcbiAgICBfZm9ybWF0Q29tbWVudChvcmlnaW4sIGNvbW1lbnRQb3MpIHtcclxuICAgICAgICBsZXQgZm9ybWF0ZWQgPSBkYXRhdXRsLnNwbGl0dGVyKG9yaWdpbiwgJ1xcbicpO1xyXG4gICAgICAgIGZvcm1hdGVkID0gdGhpcy5fZGVsZXRlQmxhbmsoZm9ybWF0ZWQpO1xyXG4gICAgICAgIGZvcm1hdGVkID0gdGhpcy5fZGVsZXRlRmlyc3RBbmRsYXN0QmxhbmsoZm9ybWF0ZWQpO1xyXG4gICAgICAgIGZvcm1hdGVkID0gdGhpcy5fc29ydEJ5VHlwZShmb3JtYXRlZCwgY29tbWVudFBvcyk7XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdGVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmj4/lhpnnlKjjgrPjg6Hjg7Pjg4jjgpLmlbTlvaLjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBvcmlnaW4g44Kz44Oh44Oz44OIXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudFBvcyDjgrPjg6Hjg7Pjg4jjga7jgr/jgqTjg5dcclxuICAgICAqL1xyXG4gICAgX2Zvcm1hdFJlbmRlckNvbW1lbnQob3JpZ2luKSB7XHJcbiAgICAgICAgbGV0IGZvcm1hdGVkID0gWy4uLm9yaWdpbl07XHJcbiAgICAgICAgZm9ybWF0ZWQgPSB0aGlzLl9kZWxldGVCbGFua0xpbmVGcm9tRW5kKG9yaWdpbik7XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdGVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjgYvjgokz5Zue5Lul5LiK6YCj57aa44GZ44KL5pS56KGM44KS5YmK6Zmk44GX44G+44GZ44CCXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudHMg44Kz44Oh44Oz44OI44Gu44Oq44K544OIXHJcbiAgICAgKi9cclxuICAgIF9kZWxldGVCbGFuayhjb21tZW50TGlzdCkge1xyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlZCA9IFtdO1xyXG4gICAgICAgIC8vZm9yLi4uaW7jg6vjg7zjg5fjgaflm57jgZkgXHJcbiAgICAgICAgZm9yIChjb25zdCB0ZXh0IG9mIGNvbW1lbnRMaXN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQmxhbmsgPSAhdGV4dDtcclxuICAgICAgICAgICAgaWYgKGlzQmxhbmspIHtcclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvdW50IDwgMykge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlZC5wdXNoKHRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkZWxldGVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmnIDliJ3jgajmnIDlvozjga7nqbrnmb3ooYzjgpLliYrpmaTjgZfjgb7jgZnjgIJcclxuICAgICAqIEBwYXJhbSBjb21tZW50cyDjgrPjg6Hjg7Pjg4jjga7jg6rjgrnjg4hcclxuICAgICAqL1xyXG4gICAgX2RlbGV0ZUZpcnN0QW5kbGFzdEJsYW5rKGNvbW1lbnRzKSB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlZCA9IFsuLi5jb21tZW50c107XHJcbiAgICAgICAgZm9yIChjb25zdCBjb21tZW50IG9mIGNvbW1lbnRzKSB7XHJcbiAgICAgICAgICAgIGlmICghY29tbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlZC5zaGlmdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lvozjgo3jgYvjgolcclxuICAgICAgICBjb25zdCByZXZlcnNlZCA9IFsuLi5kZWxldGVkXS5yZXZlcnNlKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb21tZW50IG9mIHJldmVyc2VkKSB7XHJcbiAgICAgICAgICAgIGlmICghY29tbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlZC5wb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkZWxldGVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjga7kvY3nva7jgavjgojjgaPjgabjgr3jg7zjg4jjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBjb21tZW50cyDjgrPjg6Hjg7Pjg4jjga7jg6rjgrnjg4hcclxuICAgICAqIEBwYXJhbSB0eXBlIOOCs+ODoeODs+ODiOOBruS9jee9rlxyXG4gICAgICovXHJcbiAgICBfc29ydEJ5VHlwZShjb21tZW50cywgdHlwZSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlID09PSAnc2hpdGEnID8gY29tbWVudHMucmV2ZXJzZSgpIDogY29tbWVudHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOepuuihjOOCkuWJiumZpOOBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIGNvbW1lbnRzIOOCs+ODoeODs+ODiFxyXG4gICAgICovXHJcbiAgICBfZGVsZXRlQmxhbmtMaW5lRnJvbUVuZChjb21tZW50cykge1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdGVkID0gWy4uLmNvbW1lbnRzXTtcclxuICAgICAgICBjb25zdCByZXZlcnNlZCA9IFsuLi5jb21tZW50c10ucmV2ZXJzZSgpO1xyXG4gICAgICAgIGZvciAoY29uc3QgbGluZSBvZiByZXZlcnNlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc0JsYW5rID0gL15cXHMrJC8udGVzdChsaW5lKSB8fCBsaW5lLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICAgICAgaWYgKGlzQmxhbmspIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdGVkLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tQXR0ci5nZXQoJ2NvbW1lbnROdW1iZXInKSA9PT0gOTU1NjAxKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1hdGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdGVkO1xyXG4gICAgfVxyXG59XHJcbi8v5bqn5qiZ5oOF5aCxXHJcbmV4cG9ydCBjbGFzcyBQb2ludCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3MpIHtcclxuICAgICAgICB0aGlzLnggPSBwb3MueDtcclxuICAgICAgICB0aGlzLnkgPSBwb3MueTtcclxuICAgIH1cclxufVxyXG4vL2hlaWdodDp3aWR0aFxyXG5leHBvcnQgY2xhc3MgU2l6ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBzaXplLmhlaWdodDtcclxuICAgICAgICB0aGlzLndpZHRoID0gc2l6ZS53aWR0aDtcclxuICAgIH1cclxufVxyXG4vL+ODrOOCpOODpOODvOOCr+ODqeOCuVxyXG5leHBvcnQgY2xhc3MgTGF5ZXIge1xyXG4gICAgLy/liJ3mnJ/ljJZcclxuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzU2l6ZSwgbGluZXMsIGNvbW1lbnRTaXplLCBjb21tZW50U2l6ZUZpeGVkLCBkdXJhdGlvbiwgbGluZUhlaWdodCkge1xyXG4gICAgICAgIHRoaXMub25EaXNhcG9zZWQgPSAoKSA9PiB7IH07XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTaXplID0gY2FudmFzU2l6ZTtcclxuICAgICAgICB0aGlzLmNhbnZhc1dpZHRoRmxhc2ggPSBjYW52YXNTaXplLmhlaWdodCAvIDMgKiA0O1xyXG4gICAgICAgIHRoaXMubGluZUhlaWdodCA9IGxpbmVIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5saW5lcyA9IGxpbmVzO1xyXG4gICAgICAgIHRoaXMuZm9uclNpemUgPSBjb21tZW50U2l6ZTtcclxuICAgICAgICB0aGlzLmZpeGVkRm9uclNpemUgPSBjb21tZW50U2l6ZUZpeGVkO1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICB0aGlzLmNvbW1lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5tYXhsaW5lcyA9IGxpbmVzLnNtYWxsO1xyXG4gICAgICAgIHRoaXMubmFrYSA9IG5ldyBOYWthTGluZShsaW5lcy5zbWFsbCwgY2FudmFzU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5zaGl0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMudWUgPSBbXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Os44Kk44Ok44O844Gr44Kz44Oh44Oz44OI44KS6L+95Yqg44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gdGV4dCDjgrPjg6Hjg7Pjg4jmnKzmlodcclxuICAgICAqIEBwYXJhbSBjb21tZW50TnVtYmVyIOOCs+ODoeeVqlxyXG4gICAgICogQHBhcmFtIGN1c3RvbUF0dHIg44Kr44K544K/44Og5bGe5oCnXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBuYWthL3NoaXRhL3Vl44Gu44GE44Ga44KM44GLXHJcbiAgICAgKiBAcGFyYW0gc2l6ZSBiaWcvbWVkaXVtL2xhcmdl44Gu44GE44Ga44KM44GLXHJcbiAgICAgKiBAcGFyYW0gdnBvcyBWUE9TXHJcbiAgICAgKi9cclxuICAgIGFkZCh0ZXh0LCBjb21tZW50TnVtYmVyLCBjdXN0b21BdHRyLCB0eXBlID0gJ25ha2EnLCBzaXplID0gJ21lZGl1bScsIGNhbGxCYWNrLCB2cG9zKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tbWVudHMubGVuZ3RoID4gNDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjb25zdCBvcHJpb25zID0ge1xyXG4gICAgICAgICAgICBtb2RlOiB0eXBlLFxyXG4gICAgICAgICAgICBjb2xvcjogY3VzdG9tQXR0ci5nZXQoJ2NvbG9yJykgfHwgJyNmZmYnLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogY3VzdG9tQXR0ci5nZXQoJ2Jjb2xvcicpIHx8ICcjMDAwJyxcclxuICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGN1c3RvbUF0dHI6IGN1c3RvbUF0dHIsXHJcbiAgICAgICAgICAgIGNvbW1lbnRTaXplOiBzaXplLFxyXG4gICAgICAgICAgICBsaW5laGVpZ2h0OiB0aGlzLmxpbmVIZWlnaHQsXHJcbiAgICAgICAgICAgIHZwb3M6IHZwb3MsXHJcbiAgICAgICAgICAgIGZvbnROYW1lOiBjdXN0b21BdHRyLmdldCgnZm9udE5hbWUnKSxcclxuICAgICAgICAgICAgb3BhY2l0eTogY3VzdG9tQXR0ci5nZXQoJ29wYWNpdHknKSxcclxuICAgICAgICAgICAgZnVsbDogY3VzdG9tQXR0ci5nZXQoJ2Z1bGwnKSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICAgICAgICB0ZXh0OiB0ZXh0LFxyXG4gICAgICAgICAgICBjdHg6IHRoaXMuY3R4LFxyXG4gICAgICAgICAgICBjYW52YXNTaXplOiB0aGlzLmNhbnZhc1NpemUsXHJcbiAgICAgICAgICAgIGNhbnZhc1dpZHRoRmxhc2g6IHRoaXMuY2FudmFzV2lkdGhGbGFzaCxcclxuICAgICAgICAgICAgZm9udFNpemU6IHRoaXMuZm9uclNpemUsXHJcbiAgICAgICAgICAgIGZpeGVkRm9udFNpemU6IHRoaXMuZml4ZWRGb25yU2l6ZSxcclxuICAgICAgICAgICAgbGluZXM6IHRoaXMubGluZXMsXHJcbiAgICAgICAgICAgIG9wdGlvbjogb3ByaW9ucyxcclxuICAgICAgICAgICAgY29tbWVudE51bWJlcjogY29tbWVudE51bWJlcixcclxuICAgICAgICAgICAgb25EaXNwb3NlZDogY2FsbEJhY2sub25EaXNwYXNlZCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRPYmogPSBuZXcgQ29tbWVudEJhc2UocGFyYW0pO1xyXG4gICAgICAgIHN3aXRjaCAoY29tbWVudE9iai50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ25ha2EnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5uYWthLmFkZChjb21tZW50T2JqKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzaGl0YSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmRTaGl0YShjb21tZW50T2JqKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd1ZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmRVZShjb21tZW50T2JqKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5Yem55CGXHJcbiAgICAgKiBAcGFyYW0gY291bnRlciDjg6vjg7zjg5flm57mlbBcclxuICAgICAqL1xyXG4gICAgdGljayhjb3VudGVyLCB2cG9zLCByZW5kZXIpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VnBvcyA9IHZwb3MgPyB2cG9zIDogMDtcclxuICAgICAgICBjb25zdCBkb1JlbmRlciA9IHJlbmRlciA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWVudHMuZm9yRWFjaChjb21tZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkb1JlbmRlcilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXIoY29tbWVudCk7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRpY2soY3VycmVudFZwb3MpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9uYWth44Kz44OhXHJcbiAgICAgICAgaWYgKGRvUmVuZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmFrYS5nZXRMaXN0KCkuZm9yRWFjaChjb21tZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcihjb21tZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubmFrYS50aWNrKGN1cnJlbnRWcG9zKTtcclxuICAgICAgICB0aGlzLl9jbGVhbigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmj4/lhpnlh6bnkIZcclxuICAgICAqIEBwYXJhbSBjb21tZW50IOOCs+ODoeODs+ODiFxyXG4gICAgICovXHJcbiAgICBfcmVuZGVyKGNvbW1lbnQpIHtcclxuICAgICAgICB0aGlzLmN0eC50ZXh0QmFzZWxpbmUgPSAndG9wJztcclxuICAgICAgICAvL+aPg+OBiOS9jee9rlxyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNvbW1lbnQudHlwZSA9PT0gJ25ha2EnIHx8IGNvbW1lbnQuZml4ZWQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGAke2NvbW1lbnQuY29sb3J9YDtcclxuICAgICAgICB0aGlzLmN0eC5zaGFkb3dDb2xvciA9IGNvbW1lbnQuYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHguc2hhZG93T2Zmc2V0WCA9IDEuNTtcclxuICAgICAgICB0aGlzLmN0eC5zaGFkb3dPZmZzZXRZID0gMS41O1xyXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gY29tbWVudC5vcGFjaXR5O1xyXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBgYm9sZCAke2NvbW1lbnQuZm9udFNpemV9cHggXCIke2NvbW1lbnQuZm9udE5hbWV9XCJgO1xyXG4gICAgICAgIC8v5o+P5YaZ5pmC44Gr6ICD5oWu44GZ44KL5q2j6LKgXHJcbiAgICAgICAgY29uc3QgZGVsdGFNaW51c09yUGx1cyA9IGNvbW1lbnQudHlwZSA9PT0gJ3NoaXRhJyA/IC0xIDogMTtcclxuICAgICAgICBjb25zdCBkZWx0YSA9IGRlbHRhTWludXNPclBsdXMgKiBjb21tZW50LmZvbnRTaXplO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tbWVudC50ZXh0Rm9yUmVuZGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGNvbW1lbnQudGV4dEZvclJlbmRlcltpXSwgY29tbWVudC5sZWZ0LCBjb21tZW50LnRvcCArIGNvbW1lbnQub2Zmc2V0WSArIGRlbHRhICogaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjgpLliYrpmaTjgZnjgotcclxuICAgICAqIEBwYXJhbSAgb3B0aW9uIOacgOWIneOBruOCs+ODoeODs+ODiOOBvuOBn+OBr+OAgeacgOW+jOOBruOCs+ODoeODs+ODiOOBruOBv+OCkuWJiumZpOOBmeOCi+OBk+OBqOOBjOWHuuadpeOBvuOBmeOAglxyXG4gICAgICovXHJcbiAgICBjbGVhcihvcHRpb24pIHtcclxuICAgICAgICBzd2l0Y2ggKG9wdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIHVuZGVmaW5lZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMuZm9yRWFjaChjb21tZW50ID0+IGNvbW1lbnQua2lsbCgpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmFrYSA9IG5ldyBOYWthTGluZSh0aGlzLmxpbmVzLnNtYWxsLCB0aGlzLmNhbnZhc1NpemUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51ZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGl0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2ZpcnN0JzpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbW1lbnRzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzWzBdLmtpbGwoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdsYXN0JzpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbW1lbnRzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzW3RoaXMuY29tbWVudHMubGVuZ3RoIC0gMV0ua2lsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI6YWN5YiX44GL44KJ44OV44Op44Kw44GM6ZmN44KK44Gm44GE44KL44Kz44Oh44Oz44OI44KS5YmK6ZmkXHJcbiAgICAgKi9cclxuICAgIF9jbGVhbigpIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnRzID0gdGhpcy5jb21tZW50cy5maWx0ZXIoY29tbWV0ID0+IGNvbW1ldC5hbGl2ZSk7XHJcbiAgICAgICAgLy9uYWth44Kz44OhXHJcbiAgICAgICAgdGhpcy5uYWthLmNsZWFuKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIHNoaXRh44Kz44Oh44Oz44OI44KS6L+95Yqg44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudCDjgrPjg6Hjg7Pjg4jjgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgICAqL1xyXG4gICAgX2FwcGVuZFNoaXRhKGNvbW1lbnQpIHtcclxuICAgICAgICAvL3NoaXRh44Kz44Oh44Oz44OIXHJcbiAgICAgICAgbGV0IGJvdHRvbSA9IHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNoaXRhW2ldICYmIHRoaXMuc2hpdGFbaV0uYWxpdmUgJiYgIWNvbW1lbnQuZml4ZWQpIHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbSAtPSB0aGlzLnNoaXRhW2ldLm92ZXJhbGxTaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuc2hpdGEubGVuZ3RoID09PSAwOlxyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnNoaXRhLmxlbmd0aCA8PSBpOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAhdGhpcy5zaGl0YVtpXS5hbGl2ZTpcclxuICAgICAgICAgICAgICAgIC8v5Zu65a6a44Kz44Oh44Oz44OI44Gn44GC44Gj44Gf5aC05ZCIXHJcbiAgICAgICAgICAgICAgICBjYXNlIGNvbW1lbnQuZml4ZWQ6XHJcbiAgICAgICAgICAgICAgICAvL+OCs+ODoeODs+ODiOOBjOihqOekuumZkOeVjOOCkui2heOBiOOCi+WgtOWQiFxyXG4gICAgICAgICAgICAgICAgY2FzZSBib3R0b20gLSBjb21tZW50Lm92ZXJhbGxTaXplICsgY29tbWVudC5vZmZzZXRZIDwgMDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICBpZiAoY29tbWVudC5maXhlZCkge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC50b3AgPSB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0IC0gY29tbWVudC5mb250U2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChib3R0b20gLSBjb21tZW50Lm92ZXJhbGxTaXplIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC50b3AgPSBNYXRoLnJhbmRvbSgpICogKHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQgLSBjb21tZW50Lm92ZXJhbGxTaXplICsgY29tbWVudC5vZmZzZXRZKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gYm90dG9tIC0gY29tbWVudC5vdmVyYWxsU2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpdGFbaV0gPSBjb21tZW50O1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnB1c2goY29tbWVudCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIHNoaXRh44Kz44Oh44Oz44OI44KS6L+95Yqg44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudCDjgrPjg6Hjg7Pjg4jjgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgICAqL1xyXG4gICAgX2FwcGVuZFVlKGNvbW1lbnQpIHtcclxuICAgICAgICAvL3NoaXRh44Kz44Oh44Oz44OIXHJcbiAgICAgICAgbGV0IHRvcCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVlW2ldICYmIHRoaXMudWVbaV0uYWxpdmUgJiYgIWNvbW1lbnQuZml4ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRvcCArPSB0aGlzLnVlW2ldLm92ZXJhbGxTaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMudWUubGVuZ3RoID09PSAwOlxyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnVlLmxlbmd0aCA8PSBpOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAhdGhpcy51ZVtpXS5hbGl2ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgY29tbWVudC5maXhlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgdG9wICsgY29tbWVudC5vdmVyYWxsU2l6ZSArIGNvbW1lbnQub2Zmc2V0WSA+IHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgaWYgKGNvbW1lbnQuZml4ZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0b3AgKyBjb21tZW50Lm92ZXJhbGxTaXplICsgY29tbWVudC5vZmZzZXRZID4gdGhpcy5jYW52YXNTaXplLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC50b3AgPSBNYXRoLnJhbmRvbSgpICogKHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQgLSBjb21tZW50Lm92ZXJhbGxTaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gdG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgdGhpcy51ZVtpXSA9IGNvbW1lbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWVudHMucHVzaChjb21tZW50KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5oyH5a6a44GX44Gf5L2N572u44Gr5a2Y5Zyo44GZ44KL44Kz44Oh44Oz44OI44KS5Y+W5b6X44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0geCBY5bqn5qiZXHJcbiAgICAgKiBAcGFyYW0geSBZ5bqn5qiZXHJcbiAgICAgKi9cclxuICAgIGdldCh4LCB5KSB7XHJcbiAgICAgICAgY29uc3QgbmFrYSA9IHRoaXMubmFrYS5nZXQoeCwgeSk7XHJcbiAgICAgICAgaWYgKG5ha2EgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmFrYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbW1lbnRzLmZpbmQoY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYWxmID0gY29tbWVudC53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1ggPSB4ID4gY29tbWVudC5sZWZ0IC0gaGFsZiAmJiB4IDwgY29tbWVudC5sZWZ0ICsgaGFsZjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzWSA9IHkgPiBjb21tZW50LnRvcCAmJiB5IDwgY29tbWVudC50b3AgKyBjb21tZW50Lm92ZXJhbGxTaXplO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzWCAmJiBpc1kpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogbmFrYeOCs+ODoeODs+ODiFxyXG4gKi9cclxuY2xhc3MgTmFrYUxpbmUge1xyXG4gICAgY29uc3RydWN0b3Ioc21hbGxMaW5lcywgc2l6ZSkge1xyXG4gICAgICAgIC8v6YWN5YiX5Yid5pyf5YyWXHJcbiAgICAgICAgdGhpcy5jb21tZW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMubGFzdENvbW1lbnRTdHJlYW0gPSBbXTtcclxuICAgICAgICAvL+mFjeWIl+mVt1xyXG4gICAgICAgIHRoaXMuYWxsaW5lcyA9IHNtYWxsTGluZXM7XHJcbiAgICAgICAgLy9jYW52YXPjgrXjgqTjgrpcclxuICAgICAgICB0aGlzLmNhbnZhc1NpemUgPSBzaXplO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBuYWth44Kz44Oh44Oz44OI44KS6L+95Yqg44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudCDjgrPjg6Hjg7Pjg4hcclxuICAgICAqL1xyXG4gICAgYWRkKGNvbW1lbnQpIHtcclxuICAgICAgICBsZXQgdG9wID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWxsaW5lczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSB0aGlzLmxhc3RDb21tZW50U3RyZWFtW2ldO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIC8vaeihjOebruOBq+OCs+ODoeODs+ODiOOBjOeEoeOBhOWgtOWQiFxyXG4gICAgICAgICAgICAgICAgY2FzZSAobGluZSA9PT0gdW5kZWZpbmVkKTpcclxuICAgICAgICAgICAgICAgIC8v5Zu65a6a44Kz44Oh44Gn44GC44Gj44Gf5aC05ZCIXHJcbiAgICAgICAgICAgICAgICBjYXNlIChjb21tZW50LmZpeGVkKTpcclxuICAgICAgICAgICAgICAgIC8v5pyA57WC6L+95Yqg44Kz44Oh44Oz44OI44GM5YWo44Gm6KGo56S644GV44KM44Gm44GE44Gm44CB44Gq44GK44GL44Gk6L+944GE44Gk44GL44Gq44GE5aC05ZCIXHJcbiAgICAgICAgICAgICAgICBjYXNlIChsaW5lLnJldmVhbCA8IDAgJiYgbGluZS5saWZlIDwgY29tbWVudC50b3VjaCk6XHJcbiAgICAgICAgICAgICAgICAvL+OCs+ODoeODs+ODiOOBrnRvcOOBjGNhbnZhc+OBrumrmOOBleOCkui2heOBiOOBpuOBhOOCi1xyXG4gICAgICAgICAgICAgICAgY2FzZSAodG9wICsgY29tbWVudC5vdmVyYWxsU2l6ZSA+IHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQpOlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy/jgZ3jgozku6XlpJbjga/mrKHjga7ooYzjgpLnorroqo1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wICs9IGxpbmUub3ZlcmFsbFNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAvL+W6p+aomeioreWumlxyXG4gICAgICAgICAgICBpZiAoY29tbWVudC5maXhlZCkge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC50b3AgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRvcCArIGNvbW1lbnQub3ZlcmFsbFNpemUgPiB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAvL+W8vuW5leODouODvOODiVxyXG4gICAgICAgICAgICAgICAgY29tbWVudC50b3AgPSBNYXRoLnJhbmRvbSgpICogKHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQgLSBjb21tZW50Lm92ZXJhbGxTaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gdG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWVudHMucHVzaChjb21tZW50KTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q29tbWVudFN0cmVhbVtpXSA9IGNvbW1lbnQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5rWB44KM44Gf44Kz44Oh44Oz44OI44KS5YmK6Zmk44GZ44KLXHJcbiAgICAgKi9cclxuICAgIGNsZWFuKCkge1xyXG4gICAgICAgIHRoaXMuY29tbWVudHMgPSB0aGlzLmNvbW1lbnRzLmZpbHRlcihjb21tZW50ID0+IGNvbW1lbnQuYWxpdmUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDlh6bnkIZcclxuICAgICAqL1xyXG4gICAgdGljayh2cG9zKSB7XHJcbiAgICAgICAgdGhpcy5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBjb21tZW50LnRpY2sodnBvcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOBruODquOCueODiOOCkuWPluW+l+OBmeOCi1xyXG4gICAgICovXHJcbiAgICBnZXRMaXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1lbnRzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjgpLlj5blvpfjgZnjgotcclxuICAgICAqIEBwYXJhbSB4IFjluqfmqJlcclxuICAgICAqIEBwYXJhbSB5IFnluqfmqJlcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGdldCh4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWVudHMuZmluZChjb21tZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNYID0geCA+IGNvbW1lbnQubGVmdCAmJiB4IDwgY29tbWVudC5sZWZ0ICsgY29tbWVudC53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaXNZID0geSA+IGNvbW1lbnQudG9wICYmIHkgPCBjb21tZW50LnRvcCArIGNvbW1lbnQub3ZlcmFsbFNpemU7XHJcbiAgICAgICAgICAgIGlmIChpc1ggJiYgaXNZKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8v5a6a5pWwXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGZwczogNjAsXHJcbiAgICBkdXJhdGlvbjogMyxcclxuICAgIGxpbmVIZWlnaHQ6IDEuMixcclxuICAgIGJpZ0xpbmVzOiA4LFxyXG4gICAgbWVkaXVtTGluZXM6IDExLFxyXG4gICAgc21hbGxMaW5lczogMTYsXHJcbiAgICBmaXg6IHtcclxuICAgICAgICBzbWFsOiAzOCxcclxuICAgICAgICBiaWc6IDE2LFxyXG4gICAgICAgIG1lZGl1bTogMjUsXHJcbiAgICB9LFxyXG4gICAgZGVmYXVsdENvbG9yOiAnI2ZmZicsXHJcbiAgICBkZWZhdWx0TGF5ZXI6ICdiYXNlJyxcclxuICAgIGRlZmF1bHRGb250OiAnTVMgUEdvdGhpYycsXHJcbiAgICBvcGFjaXR5OiAxLFxyXG59O1xyXG4iLCJleHBvcnQgY2xhc3MgRGF0YVV0aWxzIHtcclxuICAgIHNwbGl0dGVyKHZhbHVlLCBzcGxpdEJ5ID0gJywnKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zcGxpdChzcGxpdEJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG4gICAgLy8w5Z+L44KBXHJcbiAgICBwYWRkaW5nKG51bSwgZGlnaXQgPSAyLCBwYWRkU3RyaW5nID0gJzAnKSB7XHJcbiAgICAgICAgaWYgKG51bSA8IDEwICoqIGRpZ2l0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbiA9IG51bS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBsZXQgcGFkZGVkID0gb3JpZ2luO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZ2l0IC0gb3JpZ2luLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkZWQgPSBwYWRkU3RyaW5nICsgcGFkZGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwYWRkZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjg43jgrnjg4jjgZXjgozjgZ/phY3liJfjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgICAqIEBwYXJhbSBsZW4g6YWN5YiX6ZW3XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZU5lc3RlZEFycmF5KGxlbikge1xyXG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgYXJyLnB1c2goW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQXJyYXkobGVuKSB7XHJcbiAgICAgICAgY29uc3QgYXJyID0gW107XHJcbiAgICAgICAgYXJyLmxlbmd0aCA9IGxlbjtcclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBWUE9T44GL44KJ5pmC6ZaT44KS6KiI566X44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gdnBvcyBWUE9TXHJcbiAgICAgKi9cclxuICAgIGNhbGNWUE9TKHZwb3MpIHtcclxuICAgICAgICBjb25zdCBzZWNvbmQgPSBNYXRoLmZsb29yKHZwb3MgLyAxMDApO1xyXG4gICAgICAgIGNvbnN0IG1pbnV0ZSA9IE1hdGguZmxvb3Ioc2Vjb25kIC8gNjApO1xyXG4gICAgICAgIGNvbnN0IGV4dHJhID0gTWF0aC5mbG9vcihzZWNvbmQgJSA2MCk7XHJcbiAgICAgICAgcmV0dXJuIHsgbXM6IHsgbWluOiBtaW51dGUsIHNlYzogZXh0cmEgfSwgc2VjOiBzZWNvbmQgfTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9