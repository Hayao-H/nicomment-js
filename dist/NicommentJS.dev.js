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
  version: 'v1.03',
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
                + `version:${sysEnv__WEBPACK_IMPORTED_MODULE_2__["default"].version}@build:${"207171540"}\n`
                + `buildDate:${"2020/7/17 15:40"}\n`
                + `build:${sysEnv__WEBPACK_IMPORTED_MODULE_2__["default"].build}\n`
                + `bug report: https://github.com/Hayao-H/nicomment-js/issues`);
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
    tick(options) {
        if (this.isPlay) {
            const doRender = options ? options.render ? true : false : true;
            const currentVpos = options ? options.vpos ? options.vpos : 0 : 0;
            if (doRender) {
                this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
            }
            this.layers.forEach(layer => {
                layer.tick(this.meta.getCount(), { vpos: currentVpos, render: doRender });
            });
            this.meta.loop(); //インクリメント
        }
        if (this.run && !this.autoTickDisabled) {
            requestAnimationFrame(() => { this.tick(options); });
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
        const comments = [];
        this.layers.forEach(layer => {
            comments.push(...layer.get(x, y));
        });
        return comments;
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
        [this.fontSize, this.width] = this._getFont(this.text[this.maxLengthIndex], this.canvasSize, this.canvasWidthFlash, param.option.commentSize, param.fontSize, param.fixedFontSize, this.type, param.option.lineheight);
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
        return [font, comWidth];
    }
    //フォントサイズ修正
    _modSize(font, width, canvasWidth) {
        return font * canvasWidth / width;
    }
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
        formated = this._deleteFirstAndLastBlank(formated);
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
    _deleteFirstAndLastBlank(comments) {
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
    tick(counter, options) {
        const currentVpos = options ? options.vpos ? options.vpos : 0 : 0;
        const doRender = options ? options.render ? true : false : true;
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
            this.ctx.fillText(comment.textForRender[i], comment.left, comment.top + delta * i);
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
                case bottom - comment.overallSize < 0:
                    break;
                default:
                    continue;
            }
            ;
            if (comment.fixed) {
                comment.top = this.canvasSize.height - comment.fontSize;
            }
            else if (bottom - comment.overallSize < 0) {
                comment.top = Math.random() * (this.canvasSize.height - comment.overallSize);
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
     * ueコメントを追加する
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
                case top + comment.overallSize > this.canvasSize.height:
                    break;
                default:
                    continue;
            }
            ;
            if (comment.fixed) {
                comment.top = 0;
            }
            else if (top + comment.overallSize > this.canvasSize.height) {
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
     * 指定した位置に存在するコメントの配列を取得します
     * @param x X座標
     * @param y Y座標
     */
    get(x, y) {
        const comments = [];
        const naka = this.naka.get(x, y);
        if (naka !== undefined) {
            comments.push(naka);
        }
        const ueshita = this.comments.filter(comment => {
            const half = comment.width / 2;
            const isX = x > comment.left - half && x < comment.left + half;
            const isY = y > comment.top && y < comment.top + comment.overallSize;
            return isX && isY;
        });
        comments.push(...ueshita);
        return comments;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OaWNvbW1lbnRKUy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvLi9lbnYvREVWLmpzIiwid2VicGFjazovL05pY29tbWVudEpTLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL05pY29tbWVudEpTLy4vc3JjL21vZHVsZS9Db21tZW50LnRzIiwid2VicGFjazovL05pY29tbWVudEpTLy4vc3JjL21vZHVsZS9jb25maWcudHMiLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvLi9zcmMvdXRpbHMvRGF0YVV0aWxzLnRzIl0sIm5hbWVzIjpbInZlcnNpb24iLCJidWlsZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7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LHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtDQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0NBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLEtBQUs7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGNBQWM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCLE1BQU0saUJBQWlCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQ0FBa0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RuQkE7QUFBQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNqQkY7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwyQkFBMkI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTSwwQkFBMEI7QUFDaEQ7QUFDQSIsImZpbGUiOiJOaWNvbW1lbnRKUy5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJOaWNvbW1lbnRKU1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJOaWNvbW1lbnRKU1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHR7XHJcbiAgICB2ZXJzaW9uOid2MS4wMycsXHJcbiAgICBidWlsZDonRGV2ZWxvcG1lbnQnLFxyXG59IiwiaW1wb3J0IHsgU2l6ZSwgTGF5ZXIgfSBmcm9tICcuL21vZHVsZS9Db21tZW50JztcclxuaW1wb3J0IGRlZmF1bHRDb25maWcgZnJvbSAnLi9tb2R1bGUvY29uZmlnJztcclxuaW1wb3J0IENvbmZpZyBmcm9tICdzeXNFbnYnO1xyXG4vKipcclxuICog44Oh44Kk44Oz44Kv44Op44K5XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOaWNvbW1lbnRKUyB7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaWQgY2FudmFz44GuSURcclxuICAgICAqIEBwYXJhbSB3aWR0aCBjYW52YXPjga7luYVcclxuICAgICAqIEBwYXJhbSBoZWlnaHQgY2FudmFz44Gu6auY44GVXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uIOOCquODl+OCt+ODp+ODs1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgd2lkdGgsIGhlaWdodCwgb3B0aW9uKSB7XHJcbiAgICAgICAgaWYgKElTX0RFVkVMT1BNRU5UKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci53cml0ZSgn44GT44Gu44OQ44O844K444On44Oz44Gv6ZaL55m654mI44Gu44Gf44KB44CB5LiN5a6J5a6a44Gq5oyZ5YuV44KS44Go44KL5aC05ZCI44GM44GC44KK44G+44GZ44CCXFxuJ1xyXG4gICAgICAgICAgICAgICAgKyBgdmVyc2lvbjoke0NvbmZpZy52ZXJzaW9ufUBidWlsZDoke0JVSUxEX0RBVEVfREVWfVxcbmBcclxuICAgICAgICAgICAgICAgICsgYGJ1aWxkRGF0ZToke0JVSUxEX0RBVEV9XFxuYFxyXG4gICAgICAgICAgICAgICAgKyBgYnVpbGQ6JHtDb25maWcuYnVpbGR9XFxuYFxyXG4gICAgICAgICAgICAgICAgKyBgYnVnIHJlcG9ydDogaHR0cHM6Ly9naXRodWIuY29tL0hheWFvLUgvbmljb21tZW50LWpzL2lzc3Vlc2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChJU19ERUJVRykge1xyXG4gICAgICAgICAgICBMb2dnZXIud3JpdGUoYOOBk+OBruODkOODvOOCuOODp+ODs+OBr+ODh+ODkOODg+OCsOeJiOOBp+OBmeOAglxcbmBcclxuICAgICAgICAgICAgICAgICsgYHZlcnNpb246JHtDb25maWcudmVyc2lvbn1cXG5gXHJcbiAgICAgICAgICAgICAgICArIGBidWlsZERhdGU6JHtCVUlMRF9EQVRFfVxcbmBcclxuICAgICAgICAgICAgICAgICsgYGJ1aWxkOiR7Q29uZmlnLmJ1aWxkfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+W8leaVsOODgeOCp+ODg+OCr1xyXG4gICAgICAgIHRoaXMuY2hlY2tBcmdzKGlkLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAvL2NvbnRleHRcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuX2dldENvbnRleHQoaWQsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIC8v44K144Kk44K6XHJcbiAgICAgICAgdGhpcy5jYW52YXNTaXplID0gbmV3IFNpemUoeyBoZWlnaHQ6IGhlaWdodCwgd2lkdGg6IHdpZHRoIH0pO1xyXG4gICAgICAgIC8v44Oh44K/5oOF5aCxXHJcbiAgICAgICAgdGhpcy5tZXRhID0gbmV3IE1ldGEoKTtcclxuICAgICAgICAvL+ihqOekuuaZgumWk1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBvcHRpb24gPyBvcHRpb24uZHVyYXRpb24gPyBvcHRpb24uZHVyYXRpb24gOiBkZWZhdWx0Q29uZmlnLmR1cmF0aW9uIDogZGVmYXVsdENvbmZpZy5kdXJhdGlvbjtcclxuICAgICAgICAvL+iHquWLleabtOaWsFxyXG4gICAgICAgIHRoaXMubWFpbkxheWVyTmFtZSA9IG9wdGlvbiA/IG9wdGlvbi5sYXllck5hbWUgPyBvcHRpb24ubGF5ZXJOYW1lIDogZGVmYXVsdENvbmZpZy5kZWZhdWx0TGF5ZXIgOiBkZWZhdWx0Q29uZmlnLmRlZmF1bHRMYXllcjtcclxuICAgICAgICAvL+OCteOCpOOCuuODu+ODleOCqeODs+ODiFxyXG4gICAgICAgIHRoaXMubGluZUhlaWdodCA9IG9wdGlvbiA/IG9wdGlvbi5saW5laGVnaHQgPyBvcHRpb24ubGluZWhlZ2h0IDogZGVmYXVsdENvbmZpZy5saW5lSGVpZ2h0IDogZGVmYXVsdENvbmZpZy5saW5lSGVpZ2h0OyAvL+ihqOekuuaZgumWk1xyXG4gICAgICAgIHRoaXMubGluZXMgPSB7XHJcbiAgICAgICAgICAgIGJpZzogb3B0aW9uID8gb3B0aW9uLmJpZ0xpbmVzID8gb3B0aW9uLmJpZ0xpbmVzIDogZGVmYXVsdENvbmZpZy5iaWdMaW5lcyA6IGRlZmF1bHRDb25maWcuYmlnTGluZXMsXHJcbiAgICAgICAgICAgIG1lZGl1bTogb3B0aW9uID8gb3B0aW9uLm1lZGl1bUxpbmVzID8gb3B0aW9uLm1lZGl1bUxpbmVzIDogZGVmYXVsdENvbmZpZy5tZWRpdW1MaW5lcyA6IGRlZmF1bHRDb25maWcubWVkaXVtTGluZXMsXHJcbiAgICAgICAgICAgIHNtYWxsOiBvcHRpb24gPyBvcHRpb24uc21hbGxMaW5lcyA/IG9wdGlvbi5zbWFsbExpbmVzIDogZGVmYXVsdENvbmZpZy5zbWFsbExpbmVzIDogZGVmYXVsdENvbmZpZy5zbWFsbExpbmVzXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmZpeGVkTGluZXMgPSB7IGJpZzogZGVmYXVsdENvbmZpZy5maXguYmlnLCBtZWRpdW06IGRlZmF1bHRDb25maWcuZml4Lm1lZGl1bSwgc21hbGw6IGRlZmF1bHRDb25maWcuZml4LnNtYWwgfTtcclxuICAgICAgICB0aGlzLmZvbnJTaXplID0gdGhpcy5fZ2V0Rm9udFNpemUoaGVpZ2h0LCB0aGlzLmxpbmVzKTsgLy9maW50U0l6ZeS4gOimp1xyXG4gICAgICAgIHRoaXMuZml4ZWRGb25yU2l6ZSA9IHRoaXMuX2dldEZvbnRTaXplKGhlaWdodCwgdGhpcy5maXhlZExpbmVzKTtcclxuICAgICAgICAvL+ODrOOCpOODpOODvFxyXG4gICAgICAgIHRoaXMubWFpbkxheWVyTmFtZSA9IG9wdGlvbiA/IG9wdGlvbi5sYXllck5hbWUgPyBvcHRpb24ubGF5ZXJOYW1lIDogZGVmYXVsdENvbmZpZy5kZWZhdWx0TGF5ZXIgOiBkZWZhdWx0Q29uZmlnLmRlZmF1bHRMYXllcjtcclxuICAgICAgICB0aGlzLmxheWVycyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmFkZExheWVyKHRoaXMubWFpbkxheWVyTmFtZSk7XHJcbiAgICAgICAgdGhpcy50b3RhbCA9IDA7XHJcbiAgICAgICAgdGhpcy5ydW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNQbGF5ID0gdHJ1ZTtcclxuICAgICAgICAvL+iHquWLleabtOaWsOODleODqeOCsFxyXG4gICAgICAgIHRoaXMuYXV0b1RpY2tEaXNhYmxlZCA9IG9wdGlvbiA/IG9wdGlvbi5hdXRvVGlja0Rpc2FibGVkID8gb3B0aW9uLmF1dG9UaWNrRGlzYWJsZWQgOiBmYWxzZSA6IGZhbHNlO1xyXG4gICAgICAgIGlmIChJU19ERUJVRykge1xyXG4gICAgICAgICAgICBMb2dnZXIud3JpdGUoYGNhbnZhc0lEOiR7aWR9LCB3aWR0aDoke3dpZHRofXB4LCBoZWlnaHQ6JHtoZWlnaHR9cHhgKTtcclxuICAgICAgICAgICAgTG9nZ2VyLndyaXRlKCfliJ3mnJ/ljJbjgYzlrozkuobjgZfjgb7jgZfjgZ/jgIInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmF1dG9UaWNrRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgaWYgKElTX0RFQlVHKVxyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLndyaXRlKCfmm7TmlrDlh6bnkIbjgpLplovlp4vjgZfjgb7jgZnjgIInKTtcclxuICAgICAgICAgICAgdGhpcy50aWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5byV5pWw44OB44Kn44OD44KvXHJcbiAgICAgKiBAcGFyYW0gaWQgaWRcclxuICAgICAqIEBwYXJhbSB3aWR0aCB3aWR0aFxyXG4gICAgICogQHBhcmFtIGhlaWdodCBoZWlnaHRcclxuICAgICAqL1xyXG4gICAgY2hlY2tBcmdzKGlkLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgaWYgKCFpZClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLl9fSU5JVF9fLkFSR1VNRU5UUy5OT1RfRVhJU1QuSUQpO1xyXG4gICAgICAgIGlmICghd2lkdGgpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5BUkdVTUVOVFMuTk9UX0VYSVNULldJRFRIKTtcclxuICAgICAgICBpZiAoIWhlaWdodClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLl9fSU5JVF9fLkFSR1VNRU5UUy5OT1RfRVhJU1QuSEVJR0hUKTtcclxuICAgICAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLl9fSU5JVF9fLkFSR1VNRU5UUy5OYU4uV0lEVEgod2lkdGgpKTtcclxuICAgICAgICBpZiAodHlwZW9mIGhlaWdodCAhPT0gJ251bWJlcicpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5BUkdVTUVOVFMuTmFOLkhFSUdIVChoZWlnaHQpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI44KS6L+95Yqg44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gdGV4dCDooajnpLrjgZnjgovjgrPjg6Hjg7Pjg4hcclxuICAgICAqIEBwYXJhbSBvcHRpb27jgIDjgqrjg5fjgrfjg6fjg7PjgII7XHJcbiAgICAgKi9cclxuICAgIHNlbmQodGV4dCwgb3B0aW9uKSB7XHJcbiAgICAgICAgbGV0IGN1c3RvbUF0dHIgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBvcHRpb24gPyBvcHRpb24ubGF5ZXIgPyBvcHRpb24ubGF5ZXIgOiB0aGlzLm1haW5MYXllck5hbWUgOiB0aGlzLm1haW5MYXllck5hbWU7XHJcbiAgICAgICAgY29uc3QgY29tVHlwZSA9IG9wdGlvbiA/IG9wdGlvbi50eXBlID8gb3B0aW9uLnR5cGUgOiAnbmFrYScgOiAnbmFrYSc7XHJcbiAgICAgICAgY29uc3QgY29tU2l6ZSA9IG9wdGlvbiA/IG9wdGlvbi5zaXplID8gb3B0aW9uLnNpemUgOiAnbWVkaXVtJyA6ICdtZWRpdW0nO1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gb3B0aW9uID8gb3B0aW9uLmNvbG9yID8gb3B0aW9uLmNvbG9yIDogJyNmZmYnIDogJyNmZmYnO1xyXG4gICAgICAgIGNvbnN0IGJjb2xvciA9IHRoaXMuZ2V0QmNvbG9yKGNvbG9yKTtcclxuICAgICAgICBjb25zdCB2cG9zID0gb3B0aW9uID8gb3B0aW9uLnZwb3MgPyBvcHRpb24udnBvcyA6IDAgOiAwO1xyXG4gICAgICAgIGNvbnN0IGZvbnROYW1lID0gb3B0aW9uID8gb3B0aW9uLmZvbnROYW1lID8gb3B0aW9uLmZvbnROYW1lIDogZGVmYXVsdENvbmZpZy5kZWZhdWx0Rm9udCA6IGRlZmF1bHRDb25maWcuZGVmYXVsdEZvbnQ7XHJcbiAgICAgICAgY29uc3Qgb3BhY2l0eSA9IG9wdGlvbiA/IG9wdGlvbi5vcGFjaXR5ID8gb3B0aW9uLm9wYWNpdHkgOiBkZWZhdWx0Q29uZmlnLm9wYWNpdHkgOiBkZWZhdWx0Q29uZmlnLm9wYWNpdHk7XHJcbiAgICAgICAgY29uc3QgZnVsbCA9IG9wdGlvbiA/IG9wdGlvbi5mdWxsID8gb3B0aW9uLmZ1bGwgOiBmYWxzZSA6IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IG9uRGlzcG9zZWQgPSBvcHRpb24gPyBvcHRpb24ub25EaXNwb3NlZCA/IG9wdGlvbi5vbkRpc3Bvc2VkIDogKCkgPT4geyB9IDogKCkgPT4geyB9O1xyXG4gICAgICAgIHRoaXMudG90YWwrKztcclxuICAgICAgICBpZiAob3B0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbi5jdXN0b21BdHRyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGN1c3RvbUF0dHIgPSB0aGlzLl9nZXRBdHRyKG9wdGlvbi5jdXN0b21BdHRyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjdXN0b21BdHRyLnNldCgnY29sb3InLCBjb2xvcik7XHJcbiAgICAgICAgY3VzdG9tQXR0ci5zZXQoJ2Jjb2xvcicsIGJjb2xvcik7XHJcbiAgICAgICAgY3VzdG9tQXR0ci5zZXQoJ2ZvbnROYW1lJywgZm9udE5hbWUpO1xyXG4gICAgICAgIGN1c3RvbUF0dHIuc2V0KCdvcGFjaXR5Jywgb3BhY2l0eSk7XHJcbiAgICAgICAgY3VzdG9tQXR0ci5zZXQoJ2Z1bGwnLCBmdWxsKTtcclxuICAgICAgICBjb25zdCBsYXllck9iaiA9IHRoaXMubGF5ZXJzLmdldChsYXllcik7XHJcbiAgICAgICAgaWYgKGxheWVyT2JqICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGF5ZXJPYmouYWRkKHRleHQsIHRoaXMudG90YWwsIGN1c3RvbUF0dHIsIGNvbVR5cGUsIGNvbVNpemUsIHsgb25EaXNwYXNlZDogb25EaXNwb3NlZCB9LCB2cG9zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5MQVlFUi5MQVlFUl9ET0VTX05PVF9FWElTVChsYXllcikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5LiA5pmC5YGc5q2iXHJcbiAgICAgKi9cclxuICAgIHBhdXNlKCkge1xyXG4gICAgICAgIHRoaXMuaXNQbGF5ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWGjeeUn1xyXG4gICAgICovXHJcbiAgICBwbGF5KCkge1xyXG4gICAgICAgIHRoaXMuaXNQbGF5ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI44KS5YmK6Zmk44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gbGF5ZXIg44Os44Kk44Ok44O8XHJcbiAgICAgKi9cclxuICAgIGNsZWFyKGxheWVyKSB7XHJcbiAgICAgICAgaWYgKGxheWVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxheWVyT2JqID0gdGhpcy5sYXllcnMuZ2V0KGxheWVyKTtcclxuICAgICAgICAgICAgaWYgKGxheWVyT2JqICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGxheWVyT2JqLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuTEFZRVIuTEFZRVJfRE9FU19OT1RfRVhJU1QobGF5ZXIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgICAgICBsYXllci5jbGVhcigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWFqOOBpuOBruWHpueQhuOCkue1guS6huOBl+OBvuOBmVxyXG4gICAgICovXHJcbiAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgIHRoaXMucnVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1BsYXkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgbGF5ZXIuY2xlYXIoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNTaXplLndpZHRoLCB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmxheWVycy5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlsZ7mgKfjgpLlj5blvpfjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBjdXN0b21BdHRyIOOCq+OCueOCv+ODoOWxnuaAp1xyXG4gICAgICovXHJcbiAgICBfZ2V0QXR0cihjdXN0b21BdHRyKSB7XHJcbiAgICAgICAgY29uc3QgbWFwb2JqID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGN1c3RvbUF0dHIpKSB7XHJcbiAgICAgICAgICAgIG1hcG9iai5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXBvYmo7XHJcbiAgICB9XHJcbiAgICBfZ2V0Rm9udFNpemUoaGVpZ2h0LCBsaW5lcykge1xyXG4gICAgICAgIGNvbnN0IGJpZyA9IGhlaWdodCAvIGxpbmVzLmJpZztcclxuICAgICAgICBjb25zdCBtZWRpdW0gPSBoZWlnaHQgLyBsaW5lcy5tZWRpdW07XHJcbiAgICAgICAgY29uc3Qgc21hbGwgPSBoZWlnaHQgLyBsaW5lcy5zbWFsbDtcclxuICAgICAgICByZXR1cm4geyBiaWc6IGJpZywgbWVkaXVtOiBtZWRpdW0sIHNtYWxsOiBzbWFsbCB9O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBjYW52YXPjgrPjg7Pjg4bjgq3jgrnjg4jjgpLlj5blvpfjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBpZCBJRFxyXG4gICAgICogQHBhcmFtIHdpZHRoIOaoquW5hVxyXG4gICAgICogQHBhcmFtIGhlaWdodCDpq5jjgZVcclxuICAgICAqL1xyXG4gICAgX2dldENvbnRleHQoaWQsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICBjb25zdCBlbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKCFlbG0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLl9fSU5JVF9fLkVMRU1FTlQuTk9UX0VYSVNUKGlkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbG0uaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgICAgICBlbG0ud2lkdGggPSB3aWR0aDtcclxuICAgICAgICAgICAgZWxtLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xyXG4gICAgICAgICAgICBlbG0uc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgY29uc3QgY3R4ID0gZWxtLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgIGlmIChjdHggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Oh44Kk44Oz44Or44O844OXXHJcbiAgICAgKi9cclxuICAgIHRpY2sob3B0aW9ucykge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUGxheSkge1xyXG4gICAgICAgICAgICBjb25zdCBkb1JlbmRlciA9IG9wdGlvbnMgPyBvcHRpb25zLnJlbmRlciA/IHRydWUgOiBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWcG9zID0gb3B0aW9ucyA/IG9wdGlvbnMudnBvcyA/IG9wdGlvbnMudnBvcyA6IDAgOiAwO1xyXG4gICAgICAgICAgICBpZiAoZG9SZW5kZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc1NpemUud2lkdGgsIHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGF5ZXIudGljayh0aGlzLm1ldGEuZ2V0Q291bnQoKSwgeyB2cG9zOiBjdXJyZW50VnBvcywgcmVuZGVyOiBkb1JlbmRlciB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMubWV0YS5sb29wKCk7IC8v44Kk44Oz44Kv44Oq44Oh44Oz44OIXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnJ1biAmJiAhdGhpcy5hdXRvVGlja0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7IHRoaXMudGljayhvcHRpb25zKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog57iB5Y+W44KK6Imy44KS5Y+W5b6X44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gY29sb3Ig6ImyXHJcbiAgICAgKi9cclxuICAgIGdldEJjb2xvcihjb2xvcikge1xyXG4gICAgICAgIHN3aXRjaCAoY29sb3IpIHtcclxuICAgICAgICAgICAgY2FzZSAnYmxhY2snOlxyXG4gICAgICAgICAgICBjYXNlICcjMDAwJzpcclxuICAgICAgICAgICAgY2FzZSAnIzAwMDAwMCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyNmZmYnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyMwMDAnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5oyH5a6a44GX44Gf5L2N572u44Gr5a2Y5Zyo44GZ44KL44Kz44Oh44Oz44OI44KS5Y+W5b6X44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0geCBY5bqn5qiZXHJcbiAgICAgKiBAcGFyYW0geSBZ5bqn5qiZXHJcbiAgICAgKi9cclxuICAgIGdldCh4LCB5KSB7XHJcbiAgICAgICAgY29uc3QgY29tbWVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgY29tbWVudHMucHVzaCguLi5sYXllci5nZXQoeCwgeSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBjb21tZW50cztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Os44Kk44Ok44O844KS6L+95Yqg44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gbGF5ZXJOYW1lIOODrOOCpOODpOODvOWQjVxyXG4gICAgICovXHJcbiAgICBhZGRMYXllcihsYXllck5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5sYXllcnMuaGFzKGxheWVyTmFtZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLkxBWUVSLkRVUExJQ0FUSU9OKGxheWVyTmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYXllcnMuc2V0KGxheWVyTmFtZSwgbmV3IExheWVyKHRoaXMuY3R4LCB0aGlzLmNhbnZhc1NpemUsIHRoaXMubGluZXMsIHRoaXMuZm9uclNpemUsIHRoaXMuZml4ZWRGb25yU2l6ZSwgdGhpcy5kdXJhdGlvbiwgdGhpcy5saW5lSGVpZ2h0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChJU19ERUJVRykge1xyXG4gICAgICAgICAgICBMb2dnZXIud3JpdGUoYOODrOOCpOODpOODvCBcIiR7bGF5ZXJOYW1lfVwiIOOCkui/veWKoOOBl+OBvuOBl+OBn+OAgmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Os44Kk44Ok44O844KS5YmK6Zmk44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gbGF5ZXJOYW1lIOODrOOCpOODpOODvOWQjVxyXG4gICAgICovXHJcbiAgICByZW1vdmVMYXllcihsYXllck5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5sYXllcnMuaGFzKGxheWVyTmFtZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLkxBWUVSLkRVUExJQ0FUSU9OKGxheWVyTmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYXllcnMuZGVsZXRlKGxheWVyTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChJU19ERUJVRykge1xyXG4gICAgICAgICAgICBMb2dnZXIud3JpdGUoYOODrOOCpOODpOODvCBcIiR7bGF5ZXJOYW1lfVwiIOOCkuWJiumZpOOBl+OBvuOBl+OBn+OAgmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKipcclxuICog44Oh44K/5oOF5aCx44Kv44Op44K5XHJcbiAqL1xyXG5jbGFzcyBNZXRhIHtcclxuICAgIC8qKlxyXG4gICAgICog5Yid5pyf5YyWXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgqvjgqbjg7Pjg4jjgpLlopfjgoTjgZfjgb7jgZlcclxuICAgICAqL1xyXG4gICAgbG9vcCgpIHtcclxuICAgICAgICB0aGlzLmNvdW50Kys7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCq+OCpuODs+ODiOOCkuWPluW+l1xyXG4gICAgICovXHJcbiAgICBnZXRDb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3VudDtcclxuICAgIH1cclxufVxyXG4vKipcclxuICog44Ot44KwXHJcbiAqL1xyXG5jbGFzcyBMb2dnZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiDjg63jgrDjgpLlh7rlipvjgZnjgotcclxuICAgICAqIEBwYXJhbSBsb2cg5pys5paHXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB3cml0ZShsb2cpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgW05pY29tbWVudEpTXSR7bG9nfWApO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiDjgqjjg6njg7xcclxuICovXHJcbmNvbnN0IE5pY29FeGNlcHRpb25zID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3mnJ/ljJbjgqjjg6njg7xcclxuICAgICAqL1xyXG4gICAgX19JTklUX186IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvJXmlbDjgqjjg6njg7xcclxuICAgICAgICAgKi9cclxuICAgICAgICBBUkdVTUVOVFM6IHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOW/heimgeOBquW8leaVsOOBjOWtmOWcqOOBl+OBquOBhFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTk9UX0VYSVNUOiB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIOmrmOOBlVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBIRUlHSFQ6ICdbRVJSXWFyZ3VtZW50IFwiaGVpZ2h0XCIgbXVzdCBiZSBzcGVjaWZpZWQuJyxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICog5qiq5bmFXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIFdJRFRIOiAnW0VSUl1hcmd1bWVudCBcIndpZHRoXCIgbXVzdCBiZSBzcGVjaWZpZWQuJyxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogSURcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgSUQ6ICdbRVJSXWFyZ3VtZW50IFwiaWRcIiBtdXN0IGJlIHNwZWNpZmllZC4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5byV5pWw44Gu5YCk44GM5LiN6YGp5YiH44Gn44GC44KLXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBOYU46IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICog6auY44GV44GM5pWw5a2X44Gn44Gq44GEXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIEhFSUdIVDogKHZhbHVlKSA9PiBgW0VSUl0ke3ZhbHVlfSBpcyBub3QgYSBudW1iZXIuIFwiaGVpZ2h0XCIgbXVzIGJlIGEgbnVtYmVyLmAsXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIOaoquW5heOBjOaVsOWtl+OBp+OBquOBhFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBXSURUSDogKHZhbHVlKSA9PiBgW0VSUl0ke3ZhbHVlfSBpcyBub3QgYSBudW1iZXIuIFwid2lkdGhcIiBtdXMgYmUgYSBudW1iZXIuYCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44GM5a2Y5Zyo44GX44Gq44GE44O7Y2FudmFz44Gn44Gq44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgRUxFTUVOVDoge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6KaB57Sg44GM5a2Y5Zyo44GX44Gq44GEXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBOT1RfRVhJU1Q6IChpZCkgPT4geyByZXR1cm4gYFtFUlJdQ2FudmFzIEVsZW1lbnQgd2hpY2ggaWQgaXMgXCIke2lkfVwiIHdhcyBub3QgZm91bmQuYDsgfSxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOimgee0oOOBjEhUTUxDYW52YXPjgafjgarjgYRcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIE5PVF9BX0NBTlZBU19FTEVNRU5UOiAoaWQpID0+IHsgcmV0dXJuIGBbRVJSXUVsZW1lbnQgd2hpY2ggaWQgaXMgXCIke2lkfVwiIGlzIG5vdCBhIGNhbnZhc0hUTUw1IEVsZW1lbnQuYDsgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jov73liqDmmYLjga7jgqjjg6njg7xcclxuICAgICAqL1xyXG4gICAgU0VORDoge30sXHJcbiAgICAvKipcclxuICAgICAqIOODrOOCpOODpOODvOmWouS/guOBruOCqOODqeODvFxyXG4gICAgICovXHJcbiAgICBMQVlFUjoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOmHjeikh1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIERVUExJQ0FUSU9OOiAobmFtZSkgPT4geyByZXR1cm4gYFtFUlJdVGhlIGxheWVyIG5hbWUgJHtuYW1lfSBhbHJlYWR5IGV4aXN0cy5gOyB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODrOOCpOODpOODvOOBjOWtmOWcqOOBl+OBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIExBWUVSX0RPRVNfTk9UX0VYSVNUOiAobmFtZSkgPT4geyByZXR1cm4gYFtFUlJdQSBsYXllciBuYW1lIGlzICR7bmFtZX0gZG9lcyBub3QgZXhpc3QuYDsgfSxcclxuICAgIH0sXHJcbn07XHJcbiIsImltcG9ydCB7IERhdGFVdGlscyB9IGZyb20gJy4uL3V0aWxzL0RhdGFVdGlscyc7XHJcbmltcG9ydCBkZWZhdWx0Q29uZmlnIGZyb20gJy4vY29uZmlnJztcclxuLy91dGlsXHJcbmNvbnN0IGRhdGF1dGwgPSBuZXcgRGF0YVV0aWxzKCk7XHJcbi8v44Kz44Oh44Oz44OI44Kq44OW44K444Kn44Kv44OIXHJcbmV4cG9ydCBjbGFzcyBDb21tZW50QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbSkge1xyXG4gICAgICAgIHRoaXMubGlmZSA9IDA7IC8v5q6L44KK44Kz44Oe5pWwXHJcbiAgICAgICAgdGhpcy5kZWx0YSA9IDA7IC8vMeOCs+ODnuW9k+OBn+OCiuOBrljluqfmqJnjga7lpInph49cclxuICAgICAgICB0aGlzLmxlZnQgPSAwOyAvL1jluqfmqJlcclxuICAgICAgICB0aGlzLnRvcCA9IDA7IC8vWeW6p+aomSjljp/ngrnjga/lt6bkuIopXHJcbiAgICAgICAgdGhpcy5yZXZlYWwgPSAwOyAvL+OCs+ODoeODs+ODiOOBjOeUu+mdouWPs+OBi+OCieWujOWFqOOBq+mcsuWHuuOBmeOCi+OBvuOBp+OBruOCs+ODnuaVsFxyXG4gICAgICAgIHRoaXMudG91Y2ggPSAwOyAvL+OCs+ODoeODs+ODiOOBruW3puerr+OBjOeUu+mdouW3puOBq+WIsOmBlOOBmeOCi+OBvuOBp+OBruOCs+ODnuaVsFxyXG4gICAgICAgIHRoaXMuZml4ZWQgPSBmYWxzZTsgLy/lm7rlrprjg5Xjg6njgrBcclxuICAgICAgICB0aGlzLnR5cGUgPSBwYXJhbS5vcHRpb24ubW9kZTsgLy/jgr/jgqTjg5dcclxuICAgICAgICB0aGlzLmN1c3RvbUF0dHIgPSBwYXJhbS5vcHRpb24uY3VzdG9tQXR0cjsgLy/jgqvjgrnjgr/jg6DlsZ7mgKdcclxuICAgICAgICB0aGlzLm9yaWdpbmFsVGV4dCA9IHBhcmFtLnRleHQ7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGhpcy5fZm9ybWF0Q29tbWVudChwYXJhbS50ZXh0LCB0aGlzLnR5cGUpOyAvL+acrOaWh1xyXG4gICAgICAgIHRoaXMudGV4dEZvclJlbmRlciA9IHRoaXMuX2Zvcm1hdFJlbmRlckNvbW1lbnQodGhpcy50ZXh0KTtcclxuICAgICAgICB0aGlzLnRleHRMZW5ndGggPSBNYXRoLm1heCguLi50aGlzLnRleHQubWFwKHRleHQgPT4gdGV4dC5sZW5ndGgpKTtcclxuICAgICAgICB0aGlzLm1heExlbmd0aEluZGV4ID0gdGhpcy50ZXh0Lm1hcChjb21tZW50ID0+IGNvbW1lbnQubGVuZ3RoKS5pbmRleE9mKHRoaXMudGV4dExlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5jb21tZW50TnVtYmVyID0gcGFyYW0uY29tbWVudE51bWJlcjtcclxuICAgICAgICB0aGlzLmNvbG9yID0gcGFyYW0ub3B0aW9uLmNvbG9yOyAvL+iJslxyXG4gICAgICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBwYXJhbS5vcHRpb24uYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgdGhpcy5saW5lcyA9IHRoaXMuX2dldExpbmVzKHBhcmFtLm9wdGlvbi5jb21tZW50U2l6ZSwgcGFyYW0ubGluZXMpO1xyXG4gICAgICAgIHRoaXMuc2VsZkxpbmVzID0gdGhpcy50ZXh0Lmxlbmd0aDsgLy/ooYzmlbBcclxuICAgICAgICB0aGlzLmN0eCA9IHBhcmFtLmN0eDtcclxuICAgICAgICB0aGlzLmZvbnROYW1lID0gcGFyYW0ub3B0aW9uLmZvbnROYW1lOyAvL+ODleOCqeODs+ODiOWQjVxyXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IHBhcmFtLm9wdGlvbi5vcGFjaXR5OyAvL+mAj+mBjuW6plxyXG4gICAgICAgIHRoaXMuZnVsbCA9IHBhcmFtLm9wdGlvbi5mdWxsOyAvL+iHqOeVjOeCueODquOCteOCpOOCulxyXG4gICAgICAgIHRoaXMuY2FudmFzU2l6ZSA9IHBhcmFtLmNhbnZhc1NpemU7XHJcbiAgICAgICAgdGhpcy5jYW52YXNXaWR0aEZsYXNoID0gcGFyYW0uY2FudmFzV2lkdGhGbGFzaDtcclxuICAgICAgICAvL+WbuuWumuODleODqeOCsFxyXG4gICAgICAgIGlmICh0aGlzLnRleHQubGVuZ3RoID49IHRoaXMubGluZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5maXhlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICAvL3Zwb3Pjg7vooajnpLrmmYLplpNcclxuICAgICAgICB0aGlzLnZwb3MgPSBwYXJhbS5vcHRpb24udnBvcztcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gcGFyYW0ub3B0aW9uLmR1cmF0aW9uIHx8IGRlZmF1bHRDb25maWcuZHVyYXRpb247XHJcbiAgICAgICAgLy/jg5Xjgqnjg7Pjg4jplqLkv4JcclxuICAgICAgICB0aGlzLmZvbnRTaXplU3RyaW5nID0gcGFyYW0ub3B0aW9uLmNvbW1lbnRTaXplO1xyXG4gICAgICAgIFt0aGlzLmZvbnRTaXplLCB0aGlzLndpZHRoXSA9IHRoaXMuX2dldEZvbnQodGhpcy50ZXh0W3RoaXMubWF4TGVuZ3RoSW5kZXhdLCB0aGlzLmNhbnZhc1NpemUsIHRoaXMuY2FudmFzV2lkdGhGbGFzaCwgcGFyYW0ub3B0aW9uLmNvbW1lbnRTaXplLCBwYXJhbS5mb250U2l6ZSwgcGFyYW0uZml4ZWRGb250U2l6ZSwgdGhpcy50eXBlLCBwYXJhbS5vcHRpb24ubGluZWhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5mb250U2l6ZVN0cmluZyA9IHBhcmFtLm9wdGlvbi5jb21tZW50U2l6ZTtcclxuICAgICAgICB0aGlzLm92ZXJhbGxTaXplID0gdGhpcy5mb250U2l6ZSAqIHRoaXMuc2VsZkxpbmVzO1xyXG4gICAgICAgIHRoaXMuYWxpdmUgPSB0cnVlOyAvL+eUn+WtmOODleODqeOCsFxyXG4gICAgICAgIHRoaXMub25EaXNwb3NlZCA9IHBhcmFtLm9uRGlzcG9zZWQ7IC8v44Kz44O844Or44OQ44OD44KvXHJcbiAgICAgICAgdGhpcy5fc2V0KCk7IC8v44K744OD44OI5a6f6KGMXHJcbiAgICB9XHJcbiAgICAvL+WxnuaAp+WPluW+l1xyXG4gICAgZ2V0UHJvcChrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXN0b21BdHRyLmdldChrZXkpO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDlh6bnkIZcclxuICAgICAqL1xyXG4gICAgdGljayh2cG9zKSB7XHJcbiAgICAgICAgLy/jgrPjg6Hjg7Pjg4jjga7ntK/oqIjooajnpLrmmYLplpPjgYzml6Llrprjga4y5YCN5Lul5LiK44Gn44GC44Gj44Gf5aC05ZCI44CB44Kz44Oh44Oz44OI44KS5YmK6Zmk44GZ44KLXHJcbiAgICAgICAgaWYgKHZwb3MgPj0gdGhpcy52cG9zICsgdGhpcy5kdXJhdGlvbiAqIDIwMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsaXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5saWZlLS07XHJcbiAgICAgICAgLy9uYWth44Kz44Oh44Oz44OI44Gu5aC05ZCIXHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ25ha2EnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCAtPSB0aGlzLmRlbHRhO1xyXG4gICAgICAgICAgICB0aGlzLnJldmVhbC0tO1xyXG4gICAgICAgICAgICB0aGlzLnRvdWNoLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxpZmUgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMua2lsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI44Gu55Sf5a2Y44OV44Op44Kw44KS5by35Yi255qE44Gr6ZmN44KN44GX44G+44GZXHJcbiAgICAgKi9cclxuICAgIGtpbGwoKSB7XHJcbiAgICAgICAgdGhpcy5hbGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25EaXNwb3NlZCgpO1xyXG4gICAgfVxyXG4gICAgLy/jgrvjg4Pjg4hcclxuICAgIF9zZXQoKSB7XHJcbiAgICAgICAgdGhpcy5saWZlID0gMDsgLy/mrovjgorjgrPjg57mlbBcclxuICAgICAgICB0aGlzLmxlZnQgPSAwOyAvL1jluqfmqJlcclxuICAgICAgICB0aGlzLnRvcCA9IDA7IC8vWeW6p+aomSjljp/ngrnjga/lt6bkuIopXHJcbiAgICAgICAgdGhpcy5kZWx0YSA9IDA7IC8vMeOCs+ODnuW9k+OBn+OCiuOBrljluqfmqJnjga7lpInph49cclxuICAgICAgICB0aGlzLnJldmVhbCA9IDA7IC8v44Kz44Oh44Oz44OI44GM55S76Z2i5Y+z44GL44KJ5a6M5YWo44Gr6Zyy5Ye644GZ44KL44G+44Gn44Gu44Kz44Oe5pWwXHJcbiAgICAgICAgdGhpcy50b3VjaCA9IDA7IC8v44Kz44Oh44Oz44OI44Gu5bem56uv44GM55S76Z2i5bem44Gr5Yiw6YGU44GZ44KL44G+44Gn44Gu44Kz44Oe5pWwXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnbmFrYSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXROYWthKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc2hpdGEnOlxyXG4gICAgICAgICAgICBjYXNlICd1ZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRTaGl0YVVlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9uYWth44Kz44Oh44Oz44OI6Kit5a6aXHJcbiAgICBfc2V0TmFrYSgpIHtcclxuICAgICAgICB0aGlzLmxpZmUgPSBkZWZhdWx0Q29uZmlnLmZwcyAqIHRoaXMuZHVyYXRpb247XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy5jYW52YXNTaXplLndpZHRoO1xyXG4gICAgICAgIHRoaXMuZGVsdGEgPSAodGhpcy5jYW52YXNTaXplLndpZHRoICsgdGhpcy53aWR0aCkgLyB0aGlzLmxpZmU7XHJcbiAgICAgICAgdGhpcy5yZXZlYWwgPSB0aGlzLndpZHRoIC8gdGhpcy5kZWx0YTtcclxuICAgICAgICB0aGlzLnRvdWNoID0gdGhpcy5jYW52YXNTaXplLndpZHRoIC8gdGhpcy5kZWx0YTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogc2hpdOODu3Vl44Kz44Oh44Oz44OI44KS6Kit5a6a44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gd2lkdGggY2FudmFz44Gu5qiq5bmFXHJcbiAgICAgKiBAcGFyYW0gZHVyYXRpb24g44Kz44Oh44Oz44OI6KGo56S65pmC6ZaTXHJcbiAgICAgKi9cclxuICAgIF9zZXRTaGl0YVVlKCkge1xyXG4gICAgICAgIHRoaXMubGlmZSA9IGRlZmF1bHRDb25maWcuZnBzICogdGhpcy5kdXJhdGlvbjtcclxuICAgICAgICBpZiAodGhpcy5maXhlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnQgPSAodGhpcy5jYW52YXNTaXplLndpZHRoIC0gdGhpcy53aWR0aCkgLyAyO1xyXG4gICAgICAgICAgICAvL3RoaXMubGVmdCA9IHRoaXMuY2FudmFzU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLmNhbnZhc1NpemUud2lkdGggLyAyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vZm9udOOCkuaxuuWumuOBmeOCi1xyXG4gICAgX2dldEZvbnQodGV4dCwgY2FudmFzU2l6ZSwgZmxhc2hXaWR0aCwgY29tbWVudFNpemUsIGZvbnRTaXplLCBmaXhlZEZvbnRTaXplLCB0eXBlLCBsaW5lSGVpZ2h0KSB7XHJcbiAgICAgICAgbGV0IG9yaWdpbmFsRm9udCA9IHRoaXMuX2dldFNpemUoY29tbWVudFNpemUsIGZvbnRTaXplKTtcclxuICAgICAgICBsZXQgZm9udCA9IG9yaWdpbmFsRm9udDtcclxuICAgICAgICAvL+ODu+aUueihjOODquOCteOCpOOCulxyXG4gICAgICAgIC8vb3ZlcmFsbFNpemXjgavnm7jlvZPjgZnjgovpq5jjgZXjgYzjgIHmj4/lhpnpoJjln5/jga4xLzPjgpLkuIrlm57jgovloLTlkIjjgavjgIFcclxuICAgICAgICAvL+ODquOCteOCpOOCuuOCkuihjOOBhuOAglxyXG4gICAgICAgIGlmIChvcmlnaW5hbEZvbnQgKiB0aGlzLnNlbGZMaW5lcyA+IGNhbnZhc1NpemUuaGVpZ2h0IC8gMykge1xyXG4gICAgICAgICAgICBmb250ID0gdGhpcy5fZ2V0U2l6ZShjb21tZW50U2l6ZSwgZml4ZWRGb250U2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBgJHtmb250fXB4IFwiWXUgR290aGljXCJgO1xyXG4gICAgICAgIGxldCBjb21XaWR0aCA9IHRoaXMuY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xyXG4gICAgICAgIC8v44O76Ieo55WM5bmF44Oq44K144Kk44K6XHJcbiAgICAgICAgLy/jgrPjg6Hjg7Pjg4jjga7mnIDlpKfluYXjgYzmj4/lhpnpoJjln5/jgpLkuIrlm57jgovloLTlkIjjgavjgIHmj4/lhpnpoJjln5/jgavlj47jgb7jgovjgojjgYbjgavjg6rjgrXjgqTjgrrjgZnjgotcclxuICAgICAgICBjb25zdCB3aWR0aE92ZXJmbG93ID0gY29tV2lkdGggPiB0aGlzLmNhbnZhc1NpemUud2lkdGggJiYgdHlwZSAhPT0gJ25ha2EnO1xyXG4gICAgICAgIGlmICh3aWR0aE92ZXJmbG93ICYmICF0aGlzLmZ1bGwpIHtcclxuICAgICAgICAgICAgZm9udCA9IHRoaXMuX21vZFNpemUob3JpZ2luYWxGb250LCBjb21XaWR0aCwgdGhpcy5jYW52YXNXaWR0aEZsYXNoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IGAke2ZvbnR9cHggXCJZdSBHb3RoaWNcImA7XHJcbiAgICAgICAgICAgIGNvbVdpZHRoID0gdGhpcy5jdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHdpZHRoT3ZlcmZsb3cgJiYgdGhpcy5mdWxsKSB7XHJcbiAgICAgICAgICAgIGZvbnQgPSB0aGlzLl9tb2RTaXplKG9yaWdpbmFsRm9udCwgY29tV2lkdGgsIHRoaXMuY2FudmFzU2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBgJHtmb250fXB4IFwiWXUgR290aGljXCJgO1xyXG4gICAgICAgICAgICBjb21XaWR0aCA9IHRoaXMuY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW2ZvbnQsIGNvbVdpZHRoXTtcclxuICAgIH1cclxuICAgIC8v44OV44Kp44Oz44OI44K144Kk44K65L+u5q2jXHJcbiAgICBfbW9kU2l6ZShmb250LCB3aWR0aCwgY2FudmFzV2lkdGgpIHtcclxuICAgICAgICByZXR1cm4gZm9udCAqIGNhbnZhc1dpZHRoIC8gd2lkdGg7XHJcbiAgICB9XHJcbiAgICAvL2ZvbnRTaXpl5Y+W5b6XXHJcbiAgICBfZ2V0U2l6ZShjb21tZW50U2l6ZSwgZm9udFNpemUpIHtcclxuICAgICAgICBzd2l0Y2ggKGNvbW1lbnRTaXplKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JpZyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9udFNpemUuYmlnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NtYWxsJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb250U2l6ZS5zbWFsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbnRTaXplLm1lZGl1bTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOihjOaVsOOCkuaxguOCgeOCi1xyXG4gICAgICogQHBhcmFtIHNpemUgYmlnL3NtYWxsL21lZGl1beOBruOBhOOBmuOCjOOBi1xyXG4gICAgICogQHBhcmFtIGFsbExpbmVzIGNvbW1lbnRMaW5lc+Wei+OBruOCquODluOCuOOCp+OCr+ODiCjjgZ3jgozjgZ7jgozjga7jgrXjgqTjgrrjgavjgaTjgYTjgabooYzmlbDjgpLooajjgZkpXHJcbiAgICAgKi9cclxuICAgIF9nZXRMaW5lcyhzaXplLCBhbGxMaW5lcykge1xyXG4gICAgICAgIHN3aXRjaCAoc2l6ZSkge1xyXG4gICAgICAgICAgICBjYXNlICdiaWcnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbExpbmVzLmJpZztcclxuICAgICAgICAgICAgY2FzZSAnbWVkaXVtJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGxMaW5lcy5tZWRpdW07XHJcbiAgICAgICAgICAgIGNhc2UgJ3NtYWxsJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGxMaW5lcy5zbWFsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOCkuaVtOW9ouOBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIG9yaWdpbiDjgrPjg6Hjg7Pjg4hcclxuICAgICAqIEBwYXJhbSBjb21tZW50UG9zIOOCs+ODoeODs+ODiOOBruOCv+OCpOODl1xyXG4gICAgICovXHJcbiAgICBfZm9ybWF0Q29tbWVudChvcmlnaW4sIGNvbW1lbnRQb3MpIHtcclxuICAgICAgICBsZXQgZm9ybWF0ZWQgPSBkYXRhdXRsLnNwbGl0dGVyKG9yaWdpbiwgJ1xcbicpO1xyXG4gICAgICAgIGZvcm1hdGVkID0gdGhpcy5fZGVsZXRlQmxhbmsoZm9ybWF0ZWQpO1xyXG4gICAgICAgIGZvcm1hdGVkID0gdGhpcy5fZGVsZXRlRmlyc3RBbmRMYXN0QmxhbmsoZm9ybWF0ZWQpO1xyXG4gICAgICAgIGZvcm1hdGVkID0gdGhpcy5fc29ydEJ5VHlwZShmb3JtYXRlZCwgY29tbWVudFBvcyk7XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdGVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmj4/lhpnnlKjjgrPjg6Hjg7Pjg4jjgpLmlbTlvaLjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBvcmlnaW4g44Kz44Oh44Oz44OIXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudFBvcyDjgrPjg6Hjg7Pjg4jjga7jgr/jgqTjg5dcclxuICAgICAqL1xyXG4gICAgX2Zvcm1hdFJlbmRlckNvbW1lbnQob3JpZ2luKSB7XHJcbiAgICAgICAgbGV0IGZvcm1hdGVkID0gWy4uLm9yaWdpbl07XHJcbiAgICAgICAgZm9ybWF0ZWQgPSB0aGlzLl9kZWxldGVCbGFua0xpbmVGcm9tRW5kKG9yaWdpbik7XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdGVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjgYvjgokz5Zue5Lul5LiK6YCj57aa44GZ44KL5pS56KGM44KS5YmK6Zmk44GX44G+44GZ44CCXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudHMg44Kz44Oh44Oz44OI44Gu44Oq44K544OIXHJcbiAgICAgKi9cclxuICAgIF9kZWxldGVCbGFuayhjb21tZW50TGlzdCkge1xyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlZCA9IFtdO1xyXG4gICAgICAgIC8vZm9yLi4uaW7jg6vjg7zjg5fjgaflm57jgZkgXHJcbiAgICAgICAgZm9yIChjb25zdCB0ZXh0IG9mIGNvbW1lbnRMaXN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQmxhbmsgPSAhdGV4dDtcclxuICAgICAgICAgICAgaWYgKGlzQmxhbmspIHtcclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvdW50IDwgMykge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlZC5wdXNoKHRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkZWxldGVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmnIDliJ3jgajmnIDlvozjga7nqbrnmb3ooYzjgpLliYrpmaTjgZfjgb7jgZnjgIJcclxuICAgICAqIEBwYXJhbSBjb21tZW50cyDjgrPjg6Hjg7Pjg4jjga7jg6rjgrnjg4hcclxuICAgICAqL1xyXG4gICAgX2RlbGV0ZUZpcnN0QW5kTGFzdEJsYW5rKGNvbW1lbnRzKSB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlZCA9IFsuLi5jb21tZW50c107XHJcbiAgICAgICAgZm9yIChjb25zdCBjb21tZW50IG9mIGNvbW1lbnRzKSB7XHJcbiAgICAgICAgICAgIGlmICghY29tbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlZC5zaGlmdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lvozjgo3jgYvjgolcclxuICAgICAgICBjb25zdCByZXZlcnNlZCA9IFsuLi5kZWxldGVkXS5yZXZlcnNlKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb21tZW50IG9mIHJldmVyc2VkKSB7XHJcbiAgICAgICAgICAgIGlmICghY29tbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlZC5wb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkZWxldGVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjga7kvY3nva7jgavjgojjgaPjgabjgr3jg7zjg4jjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBjb21tZW50cyDjgrPjg6Hjg7Pjg4jjga7jg6rjgrnjg4hcclxuICAgICAqIEBwYXJhbSB0eXBlIOOCs+ODoeODs+ODiOOBruS9jee9rlxyXG4gICAgICovXHJcbiAgICBfc29ydEJ5VHlwZShjb21tZW50cywgdHlwZSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlID09PSAnc2hpdGEnID8gY29tbWVudHMucmV2ZXJzZSgpIDogY29tbWVudHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOepuuihjOOCkuWJiumZpOOBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIGNvbW1lbnRzIOOCs+ODoeODs+ODiFxyXG4gICAgICovXHJcbiAgICBfZGVsZXRlQmxhbmtMaW5lRnJvbUVuZChjb21tZW50cykge1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdGVkID0gWy4uLmNvbW1lbnRzXTtcclxuICAgICAgICBjb25zdCByZXZlcnNlZCA9IFsuLi5jb21tZW50c10ucmV2ZXJzZSgpO1xyXG4gICAgICAgIGZvciAoY29uc3QgbGluZSBvZiByZXZlcnNlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc0JsYW5rID0gL15cXHMrJC8udGVzdChsaW5lKSB8fCBsaW5lLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICAgICAgaWYgKGlzQmxhbmspIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdGVkLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdGVkO1xyXG4gICAgfVxyXG59XHJcbi8v5bqn5qiZ5oOF5aCxXHJcbmV4cG9ydCBjbGFzcyBQb2ludCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3MpIHtcclxuICAgICAgICB0aGlzLnggPSBwb3MueDtcclxuICAgICAgICB0aGlzLnkgPSBwb3MueTtcclxuICAgIH1cclxufVxyXG4vL2hlaWdodDp3aWR0aFxyXG5leHBvcnQgY2xhc3MgU2l6ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBzaXplLmhlaWdodDtcclxuICAgICAgICB0aGlzLndpZHRoID0gc2l6ZS53aWR0aDtcclxuICAgIH1cclxufVxyXG4vL+ODrOOCpOODpOODvOOCr+ODqeOCuVxyXG5leHBvcnQgY2xhc3MgTGF5ZXIge1xyXG4gICAgLy/liJ3mnJ/ljJZcclxuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzU2l6ZSwgbGluZXMsIGNvbW1lbnRTaXplLCBjb21tZW50U2l6ZUZpeGVkLCBkdXJhdGlvbiwgbGluZUhlaWdodCkge1xyXG4gICAgICAgIHRoaXMub25EaXNhcG9zZWQgPSAoKSA9PiB7IH07XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTaXplID0gY2FudmFzU2l6ZTtcclxuICAgICAgICB0aGlzLmNhbnZhc1dpZHRoRmxhc2ggPSBjYW52YXNTaXplLmhlaWdodCAvIDMgKiA0O1xyXG4gICAgICAgIHRoaXMubGluZUhlaWdodCA9IGxpbmVIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5saW5lcyA9IGxpbmVzO1xyXG4gICAgICAgIHRoaXMuZm9uclNpemUgPSBjb21tZW50U2l6ZTtcclxuICAgICAgICB0aGlzLmZpeGVkRm9uclNpemUgPSBjb21tZW50U2l6ZUZpeGVkO1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICB0aGlzLmNvbW1lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5tYXhsaW5lcyA9IGxpbmVzLnNtYWxsO1xyXG4gICAgICAgIHRoaXMubmFrYSA9IG5ldyBOYWthTGluZShsaW5lcy5zbWFsbCwgY2FudmFzU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5zaGl0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMudWUgPSBbXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Os44Kk44Ok44O844Gr44Kz44Oh44Oz44OI44KS6L+95Yqg44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gdGV4dCDjgrPjg6Hjg7Pjg4jmnKzmlodcclxuICAgICAqIEBwYXJhbSBjb21tZW50TnVtYmVyIOOCs+ODoeeVqlxyXG4gICAgICogQHBhcmFtIGN1c3RvbUF0dHIg44Kr44K544K/44Og5bGe5oCnXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBuYWthL3NoaXRhL3Vl44Gu44GE44Ga44KM44GLXHJcbiAgICAgKiBAcGFyYW0gc2l6ZSBiaWcvbWVkaXVtL2xhcmdl44Gu44GE44Ga44KM44GLXHJcbiAgICAgKiBAcGFyYW0gdnBvcyBWUE9TXHJcbiAgICAgKi9cclxuICAgIGFkZCh0ZXh0LCBjb21tZW50TnVtYmVyLCBjdXN0b21BdHRyLCB0eXBlID0gJ25ha2EnLCBzaXplID0gJ21lZGl1bScsIGNhbGxCYWNrLCB2cG9zKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tbWVudHMubGVuZ3RoID4gNDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjb25zdCBvcHJpb25zID0ge1xyXG4gICAgICAgICAgICBtb2RlOiB0eXBlLFxyXG4gICAgICAgICAgICBjb2xvcjogY3VzdG9tQXR0ci5nZXQoJ2NvbG9yJykgfHwgJyNmZmYnLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogY3VzdG9tQXR0ci5nZXQoJ2Jjb2xvcicpIHx8ICcjMDAwJyxcclxuICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGN1c3RvbUF0dHI6IGN1c3RvbUF0dHIsXHJcbiAgICAgICAgICAgIGNvbW1lbnRTaXplOiBzaXplLFxyXG4gICAgICAgICAgICBsaW5laGVpZ2h0OiB0aGlzLmxpbmVIZWlnaHQsXHJcbiAgICAgICAgICAgIHZwb3M6IHZwb3MsXHJcbiAgICAgICAgICAgIGZvbnROYW1lOiBjdXN0b21BdHRyLmdldCgnZm9udE5hbWUnKSxcclxuICAgICAgICAgICAgb3BhY2l0eTogY3VzdG9tQXR0ci5nZXQoJ29wYWNpdHknKSxcclxuICAgICAgICAgICAgZnVsbDogY3VzdG9tQXR0ci5nZXQoJ2Z1bGwnKSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICAgICAgICB0ZXh0OiB0ZXh0LFxyXG4gICAgICAgICAgICBjdHg6IHRoaXMuY3R4LFxyXG4gICAgICAgICAgICBjYW52YXNTaXplOiB0aGlzLmNhbnZhc1NpemUsXHJcbiAgICAgICAgICAgIGNhbnZhc1dpZHRoRmxhc2g6IHRoaXMuY2FudmFzV2lkdGhGbGFzaCxcclxuICAgICAgICAgICAgZm9udFNpemU6IHRoaXMuZm9uclNpemUsXHJcbiAgICAgICAgICAgIGZpeGVkRm9udFNpemU6IHRoaXMuZml4ZWRGb25yU2l6ZSxcclxuICAgICAgICAgICAgbGluZXM6IHRoaXMubGluZXMsXHJcbiAgICAgICAgICAgIG9wdGlvbjogb3ByaW9ucyxcclxuICAgICAgICAgICAgY29tbWVudE51bWJlcjogY29tbWVudE51bWJlcixcclxuICAgICAgICAgICAgb25EaXNwb3NlZDogY2FsbEJhY2sub25EaXNwYXNlZCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRPYmogPSBuZXcgQ29tbWVudEJhc2UocGFyYW0pO1xyXG4gICAgICAgIHN3aXRjaCAoY29tbWVudE9iai50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ25ha2EnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5uYWthLmFkZChjb21tZW50T2JqKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzaGl0YSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmRTaGl0YShjb21tZW50T2JqKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd1ZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmRVZShjb21tZW50T2JqKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5Yem55CGXHJcbiAgICAgKiBAcGFyYW0gY291bnRlciDjg6vjg7zjg5flm57mlbBcclxuICAgICAqL1xyXG4gICAgdGljayhjb3VudGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFZwb3MgPSBvcHRpb25zID8gb3B0aW9ucy52cG9zID8gb3B0aW9ucy52cG9zIDogMCA6IDA7XHJcbiAgICAgICAgY29uc3QgZG9SZW5kZXIgPSBvcHRpb25zID8gb3B0aW9ucy5yZW5kZXIgPyB0cnVlIDogZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzLmZvckVhY2goY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9SZW5kZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyKGNvbW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC50aWNrKGN1cnJlbnRWcG9zKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vbmFrYeOCs+ODoVxyXG4gICAgICAgIGlmIChkb1JlbmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLm5ha2EuZ2V0TGlzdCgpLmZvckVhY2goY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXIoY29tbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5ha2EudGljayhjdXJyZW50VnBvcyk7XHJcbiAgICAgICAgdGhpcy5fY2xlYW4oKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5o+P5YaZ5Yem55CGXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudCDjgrPjg6Hjg7Pjg4hcclxuICAgICAqL1xyXG4gICAgX3JlbmRlcihjb21tZW50KSB7XHJcbiAgICAgICAgdGhpcy5jdHgudGV4dEJhc2VsaW5lID0gJ3RvcCc7XHJcbiAgICAgICAgLy/mj4PjgYjkvY3nva5cclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgY2FzZSBjb21tZW50LnR5cGUgPT09ICduYWthJyB8fCBjb21tZW50LmZpeGVkOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2xlZnQnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBgJHtjb21tZW50LmNvbG9yfWA7XHJcbiAgICAgICAgdGhpcy5jdHguc2hhZG93Q29sb3IgPSBjb21tZW50LmJvcmRlckNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3R4LnNoYWRvd09mZnNldFggPSAxLjU7XHJcbiAgICAgICAgdGhpcy5jdHguc2hhZG93T2Zmc2V0WSA9IDEuNTtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IGNvbW1lbnQub3BhY2l0eTtcclxuICAgICAgICB0aGlzLmN0eC5mb250ID0gYGJvbGQgJHtjb21tZW50LmZvbnRTaXplfXB4IFwiJHtjb21tZW50LmZvbnROYW1lfVwiYDtcclxuICAgICAgICAvL+aPj+WGmeaZguOBq+iAg+aFruOBmeOCi+ato+iyoFxyXG4gICAgICAgIGNvbnN0IGRlbHRhTWludXNPclBsdXMgPSBjb21tZW50LnR5cGUgPT09ICdzaGl0YScgPyAtMSA6IDE7XHJcbiAgICAgICAgY29uc3QgZGVsdGEgPSBkZWx0YU1pbnVzT3JQbHVzICogY29tbWVudC5mb250U2l6ZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbW1lbnQudGV4dEZvclJlbmRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChjb21tZW50LnRleHRGb3JSZW5kZXJbaV0sIGNvbW1lbnQubGVmdCwgY29tbWVudC50b3AgKyBkZWx0YSAqIGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI44KS5YmK6Zmk44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gIG9wdGlvbiDmnIDliJ3jga7jgrPjg6Hjg7Pjg4jjgb7jgZ/jga/jgIHmnIDlvozjga7jgrPjg6Hjg7Pjg4jjga7jgb/jgpLliYrpmaTjgZnjgovjgZPjgajjgYzlh7rmnaXjgb7jgZnjgIJcclxuICAgICAqL1xyXG4gICAgY2xlYXIob3B0aW9uKSB7XHJcbiAgICAgICAgc3dpdGNoIChvcHRpb24pIHtcclxuICAgICAgICAgICAgY2FzZSB1bmRlZmluZWQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzLmZvckVhY2goY29tbWVudCA9PiBjb21tZW50LmtpbGwoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ha2EgPSBuZXcgTmFrYUxpbmUodGhpcy5saW5lcy5zbWFsbCwgdGhpcy5jYW52YXNTaXplKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudWUgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hpdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdmaXJzdCc6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21tZW50cy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50c1swXS5raWxsKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbGFzdCc6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21tZW50cy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50c1t0aGlzLmNvbW1lbnRzLmxlbmd0aCAtIDFdLmtpbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOmFjeWIl+OBi+OCieODleODqeOCsOOBjOmZjeOCiuOBpuOBhOOCi+OCs+ODoeODs+ODiOOCkuWJiumZpFxyXG4gICAgICovXHJcbiAgICBfY2xlYW4oKSB7XHJcbiAgICAgICAgdGhpcy5jb21tZW50cyA9IHRoaXMuY29tbWVudHMuZmlsdGVyKGNvbW1ldCA9PiBjb21tZXQuYWxpdmUpO1xyXG4gICAgICAgIC8vbmFrYeOCs+ODoVxyXG4gICAgICAgIHRoaXMubmFrYS5jbGVhbigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBzaGl0YeOCs+ODoeODs+ODiOOCkui/veWKoOOBmeOCi1xyXG4gICAgICogQHBhcmFtIGNvbW1lbnQg44Kz44Oh44Oz44OI44Kq44OW44K444Kn44Kv44OIXHJcbiAgICAgKi9cclxuICAgIF9hcHBlbmRTaGl0YShjb21tZW50KSB7XHJcbiAgICAgICAgLy9zaGl0YeOCs+ODoeODs+ODiFxyXG4gICAgICAgIGxldCBib3R0b20gPSB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDA7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zaGl0YVtpXSAmJiB0aGlzLnNoaXRhW2ldLmFsaXZlICYmICFjb21tZW50LmZpeGVkKSB7XHJcbiAgICAgICAgICAgICAgICBib3R0b20gLT0gdGhpcy5zaGl0YVtpXS5vdmVyYWxsU2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnNoaXRhLmxlbmd0aCA9PT0gMDpcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5zaGl0YS5sZW5ndGggPD0gaTpcclxuICAgICAgICAgICAgICAgIGNhc2UgIXRoaXMuc2hpdGFbaV0uYWxpdmU6XHJcbiAgICAgICAgICAgICAgICAvL+WbuuWumuOCs+ODoeODs+ODiOOBp+OBguOBo+OBn+WgtOWQiFxyXG4gICAgICAgICAgICAgICAgY2FzZSBjb21tZW50LmZpeGVkOlxyXG4gICAgICAgICAgICAgICAgLy/jgrPjg6Hjg7Pjg4jjgYzooajnpLrpmZDnlYzjgpLotoXjgYjjgovloLTlkIhcclxuICAgICAgICAgICAgICAgIGNhc2UgYm90dG9tIC0gY29tbWVudC5vdmVyYWxsU2l6ZSA8IDA6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgaWYgKGNvbW1lbnQuZml4ZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gdGhpcy5jYW52YXNTaXplLmhlaWdodCAtIGNvbW1lbnQuZm9udFNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYm90dG9tIC0gY29tbWVudC5vdmVyYWxsU2l6ZSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLmNhbnZhc1NpemUuaGVpZ2h0IC0gY29tbWVudC5vdmVyYWxsU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IGJvdHRvbSAtIGNvbW1lbnQub3ZlcmFsbFNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICB0aGlzLnNoaXRhW2ldID0gY29tbWVudDtcclxuICAgICAgICAgICAgdGhpcy5jb21tZW50cy5wdXNoKGNvbW1lbnQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiB1ZeOCs+ODoeODs+ODiOOCkui/veWKoOOBmeOCi1xyXG4gICAgICogQHBhcmFtIGNvbW1lbnQg44Kz44Oh44Oz44OI44Kq44OW44K444Kn44Kv44OIXHJcbiAgICAgKi9cclxuICAgIF9hcHBlbmRVZShjb21tZW50KSB7XHJcbiAgICAgICAgLy9zaGl0YeOCs+ODoeODs+ODiFxyXG4gICAgICAgIGxldCB0b3AgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDA7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51ZVtpXSAmJiB0aGlzLnVlW2ldLmFsaXZlICYmICFjb21tZW50LmZpeGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0b3AgKz0gdGhpcy51ZVtpXS5vdmVyYWxsU2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnVlLmxlbmd0aCA9PT0gMDpcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy51ZS5sZW5ndGggPD0gaTpcclxuICAgICAgICAgICAgICAgIGNhc2UgIXRoaXMudWVbaV0uYWxpdmU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNvbW1lbnQuZml4ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRvcCArIGNvbW1lbnQub3ZlcmFsbFNpemUgPiB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIGlmIChjb21tZW50LmZpeGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodG9wICsgY29tbWVudC5vdmVyYWxsU2l6ZSA+IHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLmNhbnZhc1NpemUuaGVpZ2h0IC0gY29tbWVudC5vdmVyYWxsU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IHRvcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIHRoaXMudWVbaV0gPSBjb21tZW50O1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnB1c2goY29tbWVudCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaMh+WumuOBl+OBn+S9jee9ruOBq+WtmOWcqOOBmeOCi+OCs+ODoeODs+ODiOOBrumFjeWIl+OCkuWPluW+l+OBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIHggWOW6p+aomVxyXG4gICAgICogQHBhcmFtIHkgWeW6p+aomVxyXG4gICAgICovXHJcbiAgICBnZXQoeCwgeSkge1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRzID0gW107XHJcbiAgICAgICAgY29uc3QgbmFrYSA9IHRoaXMubmFrYS5nZXQoeCwgeSk7XHJcbiAgICAgICAgaWYgKG5ha2EgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb21tZW50cy5wdXNoKG5ha2EpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1ZXNoaXRhID0gdGhpcy5jb21tZW50cy5maWx0ZXIoY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhbGYgPSBjb21tZW50LndpZHRoIC8gMjtcclxuICAgICAgICAgICAgY29uc3QgaXNYID0geCA+IGNvbW1lbnQubGVmdCAtIGhhbGYgJiYgeCA8IGNvbW1lbnQubGVmdCArIGhhbGY7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzWSA9IHkgPiBjb21tZW50LnRvcCAmJiB5IDwgY29tbWVudC50b3AgKyBjb21tZW50Lm92ZXJhbGxTaXplO1xyXG4gICAgICAgICAgICByZXR1cm4gaXNYICYmIGlzWTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb21tZW50cy5wdXNoKC4uLnVlc2hpdGEpO1xyXG4gICAgICAgIHJldHVybiBjb21tZW50cztcclxuICAgIH1cclxufVxyXG4vKipcclxuICogbmFrYeOCs+ODoeODs+ODiFxyXG4gKi9cclxuY2xhc3MgTmFrYUxpbmUge1xyXG4gICAgY29uc3RydWN0b3Ioc21hbGxMaW5lcywgc2l6ZSkge1xyXG4gICAgICAgIC8v6YWN5YiX5Yid5pyf5YyWXHJcbiAgICAgICAgdGhpcy5jb21tZW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMubGFzdENvbW1lbnRTdHJlYW0gPSBbXTtcclxuICAgICAgICAvL+mFjeWIl+mVt1xyXG4gICAgICAgIHRoaXMuYWxsaW5lcyA9IHNtYWxsTGluZXM7XHJcbiAgICAgICAgLy9jYW52YXPjgrXjgqTjgrpcclxuICAgICAgICB0aGlzLmNhbnZhc1NpemUgPSBzaXplO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBuYWth44Kz44Oh44Oz44OI44KS6L+95Yqg44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudCDjgrPjg6Hjg7Pjg4hcclxuICAgICAqL1xyXG4gICAgYWRkKGNvbW1lbnQpIHtcclxuICAgICAgICBsZXQgdG9wID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWxsaW5lczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSB0aGlzLmxhc3RDb21tZW50U3RyZWFtW2ldO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIC8vaeihjOebruOBq+OCs+ODoeODs+ODiOOBjOeEoeOBhOWgtOWQiFxyXG4gICAgICAgICAgICAgICAgY2FzZSAobGluZSA9PT0gdW5kZWZpbmVkKTpcclxuICAgICAgICAgICAgICAgIC8v5Zu65a6a44Kz44Oh44Gn44GC44Gj44Gf5aC05ZCIXHJcbiAgICAgICAgICAgICAgICBjYXNlIChjb21tZW50LmZpeGVkKTpcclxuICAgICAgICAgICAgICAgIC8v5pyA57WC6L+95Yqg44Kz44Oh44Oz44OI44GM5YWo44Gm6KGo56S644GV44KM44Gm44GE44Gm44CB44Gq44GK44GL44Gk6L+944GE44Gk44GL44Gq44GE5aC05ZCIXHJcbiAgICAgICAgICAgICAgICBjYXNlIChsaW5lLnJldmVhbCA8IDAgJiYgbGluZS5saWZlIDwgY29tbWVudC50b3VjaCk6XHJcbiAgICAgICAgICAgICAgICAvL+OCs+ODoeODs+ODiOOBrnRvcOOBjGNhbnZhc+OBrumrmOOBleOCkui2heOBiOOBpuOBhOOCi1xyXG4gICAgICAgICAgICAgICAgY2FzZSAodG9wICsgY29tbWVudC5vdmVyYWxsU2l6ZSA+IHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQpOlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy/jgZ3jgozku6XlpJbjga/mrKHjga7ooYzjgpLnorroqo1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wICs9IGxpbmUub3ZlcmFsbFNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAvL+W6p+aomeioreWumlxyXG4gICAgICAgICAgICBpZiAoY29tbWVudC5maXhlZCkge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC50b3AgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRvcCArIGNvbW1lbnQub3ZlcmFsbFNpemUgPiB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAvL+W8vuW5leODouODvOODiVxyXG4gICAgICAgICAgICAgICAgY29tbWVudC50b3AgPSBNYXRoLnJhbmRvbSgpICogKHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQgLSBjb21tZW50Lm92ZXJhbGxTaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gdG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWVudHMucHVzaChjb21tZW50KTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q29tbWVudFN0cmVhbVtpXSA9IGNvbW1lbnQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5rWB44KM44Gf44Kz44Oh44Oz44OI44KS5YmK6Zmk44GZ44KLXHJcbiAgICAgKi9cclxuICAgIGNsZWFuKCkge1xyXG4gICAgICAgIHRoaXMuY29tbWVudHMgPSB0aGlzLmNvbW1lbnRzLmZpbHRlcihjb21tZW50ID0+IGNvbW1lbnQuYWxpdmUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDlh6bnkIZcclxuICAgICAqL1xyXG4gICAgdGljayh2cG9zKSB7XHJcbiAgICAgICAgdGhpcy5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBjb21tZW50LnRpY2sodnBvcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOBruODquOCueODiOOCkuWPluW+l+OBmeOCi1xyXG4gICAgICovXHJcbiAgICBnZXRMaXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1lbnRzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjgpLlj5blvpfjgZnjgotcclxuICAgICAqIEBwYXJhbSB4IFjluqfmqJlcclxuICAgICAqIEBwYXJhbSB5IFnluqfmqJlcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGdldCh4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWVudHMuZmluZChjb21tZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNYID0geCA+IGNvbW1lbnQubGVmdCAmJiB4IDwgY29tbWVudC5sZWZ0ICsgY29tbWVudC53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaXNZID0geSA+IGNvbW1lbnQudG9wICYmIHkgPCBjb21tZW50LnRvcCArIGNvbW1lbnQub3ZlcmFsbFNpemU7XHJcbiAgICAgICAgICAgIGlmIChpc1ggJiYgaXNZKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8v5a6a5pWwXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGZwczogNjAsXHJcbiAgICBkdXJhdGlvbjogMyxcclxuICAgIGxpbmVIZWlnaHQ6IDEuMixcclxuICAgIGJpZ0xpbmVzOiA4LFxyXG4gICAgbWVkaXVtTGluZXM6IDExLFxyXG4gICAgc21hbGxMaW5lczogMTYsXHJcbiAgICBmaXg6IHtcclxuICAgICAgICBzbWFsOiAzOCxcclxuICAgICAgICBiaWc6IDE2LFxyXG4gICAgICAgIG1lZGl1bTogMjUsXHJcbiAgICB9LFxyXG4gICAgZGVmYXVsdENvbG9yOiAnI2ZmZicsXHJcbiAgICBkZWZhdWx0TGF5ZXI6ICdiYXNlJyxcclxuICAgIGRlZmF1bHRGb250OiAnTVMgUEdvdGhpYycsXHJcbiAgICBvcGFjaXR5OiAxLFxyXG59O1xyXG4iLCJleHBvcnQgY2xhc3MgRGF0YVV0aWxzIHtcclxuICAgIHNwbGl0dGVyKHZhbHVlLCBzcGxpdEJ5ID0gJywnKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zcGxpdChzcGxpdEJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG4gICAgLy8w5Z+L44KBXHJcbiAgICBwYWRkaW5nKG51bSwgZGlnaXQgPSAyLCBwYWRkU3RyaW5nID0gJzAnKSB7XHJcbiAgICAgICAgaWYgKG51bSA8IDEwICoqIGRpZ2l0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbiA9IG51bS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBsZXQgcGFkZGVkID0gb3JpZ2luO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZ2l0IC0gb3JpZ2luLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkZWQgPSBwYWRkU3RyaW5nICsgcGFkZGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwYWRkZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjg43jgrnjg4jjgZXjgozjgZ/phY3liJfjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgICAqIEBwYXJhbSBsZW4g6YWN5YiX6ZW3XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZU5lc3RlZEFycmF5KGxlbikge1xyXG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgYXJyLnB1c2goW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQXJyYXkobGVuKSB7XHJcbiAgICAgICAgY29uc3QgYXJyID0gW107XHJcbiAgICAgICAgYXJyLmxlbmd0aCA9IGxlbjtcclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBWUE9T44GL44KJ5pmC6ZaT44KS6KiI566X44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gdnBvcyBWUE9TXHJcbiAgICAgKi9cclxuICAgIGNhbGNWUE9TKHZwb3MpIHtcclxuICAgICAgICBjb25zdCBzZWNvbmQgPSBNYXRoLmZsb29yKHZwb3MgLyAxMDApO1xyXG4gICAgICAgIGNvbnN0IG1pbnV0ZSA9IE1hdGguZmxvb3Ioc2Vjb25kIC8gNjApO1xyXG4gICAgICAgIGNvbnN0IGV4dHJhID0gTWF0aC5mbG9vcihzZWNvbmQgJSA2MCk7XHJcbiAgICAgICAgcmV0dXJuIHsgbXM6IHsgbWluOiBtaW51dGUsIHNlYzogZXh0cmEgfSwgc2VjOiBzZWNvbmQgfTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9