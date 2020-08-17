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
                + `version:${sysEnv__WEBPACK_IMPORTED_MODULE_2__["default"].version}@build:${"207171510"}\n`
                + `buildDate:${"2020/7/17 15:10"}\n`
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
            else if (bottom - comment.overallSize + comment.offsetY < 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OaWNvbW1lbnRKUy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvLi9lbnYvREVWLmpzIiwid2VicGFjazovL05pY29tbWVudEpTLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL05pY29tbWVudEpTLy4vc3JjL21vZHVsZS9Db21tZW50LnRzIiwid2VicGFjazovL05pY29tbWVudEpTLy4vc3JjL21vZHVsZS9jb25maWcudHMiLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvLi9zcmMvdXRpbHMvRGF0YVV0aWxzLnRzIl0sIm5hbWVzIjpbInZlcnNpb24iLCJidWlsZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBYztBQUNWQSxTQUFPLEVBQUMsT0FERTtBQUVWQyxPQUFLLEVBQUM7QUFGSSxDQUFkLEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDSDtBQUNoQjtBQUM1QjtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLElBQWM7QUFDMUI7QUFDQSw2QkFBNkIsOENBQU0sU0FBUyxTQUFTLFdBQWMsQ0FBQztBQUNwRSwrQkFBK0IsaUJBQVUsQ0FBQztBQUMxQywyQkFBMkIsOENBQU0sT0FBTztBQUN4QztBQUNBO0FBQ0EsYUFBYSxFQUtKO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixvREFBSSxFQUFFLCtCQUErQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsc0RBQWEsWUFBWSxzREFBYTtBQUMzRztBQUNBLDRFQUE0RSxzREFBYSxnQkFBZ0Isc0RBQWE7QUFDdEg7QUFDQSx5RUFBeUUsc0RBQWEsY0FBYyxzREFBYSxZQUFZO0FBQzdIO0FBQ0EsOERBQThELHNEQUFhLFlBQVksc0RBQWE7QUFDcEcsdUVBQXVFLHNEQUFhLGVBQWUsc0RBQWE7QUFDaEgsb0VBQW9FLHNEQUFhLGNBQWMsc0RBQWE7QUFDNUc7QUFDQSwyQkFBMkIsTUFBTSxzREFBYSxrQkFBa0Isc0RBQWEsb0JBQW9CLHNEQUFhO0FBQzlHLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0EsNEVBQTRFLHNEQUFhLGdCQUFnQixzREFBYTtBQUN0SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksS0FBUSxFQUFFLEVBR2I7QUFDVDtBQUNBLGdCQUFnQixLQUFRO0FBQ3hCLGdCQUFnQixFQUE0QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLHNEQUFhLGVBQWUsc0RBQWE7QUFDL0csbUVBQW1FLHNEQUFhLFdBQVcsc0RBQWE7QUFDeEc7QUFDQSxtRkFBbUYsRUFBRSxVQUFVO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLHlCQUF5QjtBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLE1BQU07QUFDdkMsa0NBQWtDLE9BQU87QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxzQ0FBc0M7QUFDeEYsYUFBYTtBQUNiLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EseUNBQXlDLG9CQUFvQixFQUFFO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHFEQUFLO0FBQ2hEO0FBQ0EsWUFBWSxLQUFRLEVBQUUsRUFFYjtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksS0FBUSxFQUFFLEVBRWI7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxJQUFJO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxNQUFNO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxNQUFNO0FBQ2hEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDRDQUE0QyxHQUFHLGtCQUFrQixFQUFFO0FBQ25HO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxxQ0FBcUMsR0FBRyxpQ0FBaUM7QUFDcEgsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsK0JBQStCLEtBQUssa0JBQWtCLEVBQUU7QUFDeEY7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGdDQUFnQyxLQUFLLGtCQUFrQixFQUFFO0FBQ2xHLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7OztBQzdZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUNWO0FBQ3JDO0FBQ0Esb0JBQW9CLDBEQUFTO0FBQzdCO0FBQ087QUFDUDtBQUNBLHNCQUFzQjtBQUN0Qix1QkFBdUI7QUFDdkIsc0JBQXNCO0FBQ3RCLHFCQUFxQjtBQUNyQix3QkFBd0I7QUFDeEIsdUJBQXVCO0FBQ3ZCLDJCQUEyQjtBQUMzQixzQ0FBc0M7QUFDdEMsa0RBQWtEO0FBQ2xEO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQSw4Q0FBOEM7QUFDOUMsNENBQTRDO0FBQzVDLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsK0NBQWE7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQiwyQ0FBMkM7QUFDM0Msb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsc0JBQXNCO0FBQ3RCLHFCQUFxQjtBQUNyQix1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtDQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0NBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLEtBQUs7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsY0FBYztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpQkFBaUIsTUFBTSxpQkFBaUI7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtDQUFrQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdm5CQTtBQUFBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2pCRjtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDJCQUEyQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNLDBCQUEwQjtBQUNoRDtBQUNBIiwiZmlsZSI6Ik5pY29tbWVudEpTLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk5pY29tbWVudEpTXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk5pY29tbWVudEpTXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgZGVmYXVsdHtcclxuICAgIHZlcnNpb246J3YxLjAzJyxcclxuICAgIGJ1aWxkOidEZXZlbG9wbWVudCcsXHJcbn0iLCJpbXBvcnQgeyBTaXplLCBMYXllciB9IGZyb20gJy4vbW9kdWxlL0NvbW1lbnQnO1xyXG5pbXBvcnQgZGVmYXVsdENvbmZpZyBmcm9tICcuL21vZHVsZS9jb25maWcnO1xyXG5pbXBvcnQgQ29uZmlnIGZyb20gJ3N5c0Vudic7XHJcbi8qKlxyXG4gKiDjg6HjgqTjg7Pjgq/jg6njgrlcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5pY29tbWVudEpTIHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpZCBjYW52YXPjga5JRFxyXG4gICAgICogQHBhcmFtIHdpZHRoIGNhbnZhc+OBruW5hVxyXG4gICAgICogQHBhcmFtIGhlaWdodCBjYW52YXPjga7pq5jjgZVcclxuICAgICAqIEBwYXJhbSBvcHRpb24g44Kq44OX44K344On44OzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGlkLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb24pIHtcclxuICAgICAgICBpZiAoSVNfREVWRUxPUE1FTlQpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLndyaXRlKCfjgZPjga7jg5Djg7zjgrjjg6fjg7Pjga/plovnmbrniYjjga7jgZ/jgoHjgIHkuI3lronlrprjgarmjJnli5XjgpLjgajjgovloLTlkIjjgYzjgYLjgorjgb7jgZnjgIJcXG4nXHJcbiAgICAgICAgICAgICAgICArIGB2ZXJzaW9uOiR7Q29uZmlnLnZlcnNpb259QGJ1aWxkOiR7QlVJTERfREFURV9ERVZ9XFxuYFxyXG4gICAgICAgICAgICAgICAgKyBgYnVpbGREYXRlOiR7QlVJTERfREFURX1cXG5gXHJcbiAgICAgICAgICAgICAgICArIGBidWlsZDoke0NvbmZpZy5idWlsZH1cXG5gXHJcbiAgICAgICAgICAgICAgICArIGBidWcgcmVwb3J0OiBodHRwczovL2dpdGh1Yi5jb20vSGF5YW8tSC9uaWNvbW1lbnQtanMvaXNzdWVzYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKElTX0RFQlVHKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci53cml0ZShg44GT44Gu44OQ44O844K444On44Oz44Gv44OH44OQ44OD44Kw54mI44Gn44GZ44CCXFxuYFxyXG4gICAgICAgICAgICAgICAgKyBgdmVyc2lvbjoke0NvbmZpZy52ZXJzaW9ufVxcbmBcclxuICAgICAgICAgICAgICAgICsgYGJ1aWxkRGF0ZToke0JVSUxEX0RBVEV9XFxuYFxyXG4gICAgICAgICAgICAgICAgKyBgYnVpbGQ6JHtDb25maWcuYnVpbGR9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5byV5pWw44OB44Kn44OD44KvXHJcbiAgICAgICAgdGhpcy5jaGVja0FyZ3MoaWQsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIC8vY29udGV4dFxyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5fZ2V0Q29udGV4dChpZCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgLy/jgrXjgqTjgrpcclxuICAgICAgICB0aGlzLmNhbnZhc1NpemUgPSBuZXcgU2l6ZSh7IGhlaWdodDogaGVpZ2h0LCB3aWR0aDogd2lkdGggfSk7XHJcbiAgICAgICAgLy/jg6Hjgr/mg4XloLFcclxuICAgICAgICB0aGlzLm1ldGEgPSBuZXcgTWV0YSgpO1xyXG4gICAgICAgIC8v6KGo56S65pmC6ZaTXHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IG9wdGlvbiA/IG9wdGlvbi5kdXJhdGlvbiA/IG9wdGlvbi5kdXJhdGlvbiA6IGRlZmF1bHRDb25maWcuZHVyYXRpb24gOiBkZWZhdWx0Q29uZmlnLmR1cmF0aW9uO1xyXG4gICAgICAgIC8v6Ieq5YuV5pu05pawXHJcbiAgICAgICAgdGhpcy5tYWluTGF5ZXJOYW1lID0gb3B0aW9uID8gb3B0aW9uLmxheWVyTmFtZSA/IG9wdGlvbi5sYXllck5hbWUgOiBkZWZhdWx0Q29uZmlnLmRlZmF1bHRMYXllciA6IGRlZmF1bHRDb25maWcuZGVmYXVsdExheWVyO1xyXG4gICAgICAgIC8v44K144Kk44K644O744OV44Kp44Oz44OIXHJcbiAgICAgICAgdGhpcy5saW5lSGVpZ2h0ID0gb3B0aW9uID8gb3B0aW9uLmxpbmVoZWdodCA/IG9wdGlvbi5saW5laGVnaHQgOiBkZWZhdWx0Q29uZmlnLmxpbmVIZWlnaHQgOiBkZWZhdWx0Q29uZmlnLmxpbmVIZWlnaHQ7IC8v6KGo56S65pmC6ZaTXHJcbiAgICAgICAgdGhpcy5saW5lcyA9IHtcclxuICAgICAgICAgICAgYmlnOiBvcHRpb24gPyBvcHRpb24uYmlnTGluZXMgPyBvcHRpb24uYmlnTGluZXMgOiBkZWZhdWx0Q29uZmlnLmJpZ0xpbmVzIDogZGVmYXVsdENvbmZpZy5iaWdMaW5lcyxcclxuICAgICAgICAgICAgbWVkaXVtOiBvcHRpb24gPyBvcHRpb24ubWVkaXVtTGluZXMgPyBvcHRpb24ubWVkaXVtTGluZXMgOiBkZWZhdWx0Q29uZmlnLm1lZGl1bUxpbmVzIDogZGVmYXVsdENvbmZpZy5tZWRpdW1MaW5lcyxcclxuICAgICAgICAgICAgc21hbGw6IG9wdGlvbiA/IG9wdGlvbi5zbWFsbExpbmVzID8gb3B0aW9uLnNtYWxsTGluZXMgOiBkZWZhdWx0Q29uZmlnLnNtYWxsTGluZXMgOiBkZWZhdWx0Q29uZmlnLnNtYWxsTGluZXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZml4ZWRMaW5lcyA9IHsgYmlnOiBkZWZhdWx0Q29uZmlnLmZpeC5iaWcsIG1lZGl1bTogZGVmYXVsdENvbmZpZy5maXgubWVkaXVtLCBzbWFsbDogZGVmYXVsdENvbmZpZy5maXguc21hbCB9O1xyXG4gICAgICAgIHRoaXMuZm9uclNpemUgPSB0aGlzLl9nZXRGb250U2l6ZShoZWlnaHQsIHRoaXMubGluZXMpOyAvL2ZpbnRTSXpl5LiA6KanXHJcbiAgICAgICAgdGhpcy5maXhlZEZvbnJTaXplID0gdGhpcy5fZ2V0Rm9udFNpemUoaGVpZ2h0LCB0aGlzLmZpeGVkTGluZXMpO1xyXG4gICAgICAgIC8v44Os44Kk44Ok44O8XHJcbiAgICAgICAgdGhpcy5tYWluTGF5ZXJOYW1lID0gb3B0aW9uID8gb3B0aW9uLmxheWVyTmFtZSA/IG9wdGlvbi5sYXllck5hbWUgOiBkZWZhdWx0Q29uZmlnLmRlZmF1bHRMYXllciA6IGRlZmF1bHRDb25maWcuZGVmYXVsdExheWVyO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuYWRkTGF5ZXIodGhpcy5tYWluTGF5ZXJOYW1lKTtcclxuICAgICAgICB0aGlzLnRvdGFsID0gMDtcclxuICAgICAgICB0aGlzLnJ1biA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc1BsYXkgPSB0cnVlO1xyXG4gICAgICAgIC8v6Ieq5YuV5pu05paw44OV44Op44KwXHJcbiAgICAgICAgdGhpcy5hdXRvVGlja0Rpc2FibGVkID0gb3B0aW9uID8gb3B0aW9uLmF1dG9UaWNrRGlzYWJsZWQgPyBvcHRpb24uYXV0b1RpY2tEaXNhYmxlZCA6IGZhbHNlIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKElTX0RFQlVHKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci53cml0ZShgY2FudmFzSUQ6JHtpZH0sIHdpZHRoOiR7d2lkdGh9cHgsIGhlaWdodDoke2hlaWdodH1weGApO1xyXG4gICAgICAgICAgICBMb2dnZXIud3JpdGUoJ+WIneacn+WMluOBjOWujOS6huOBl+OBvuOBl+OBn+OAgicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuYXV0b1RpY2tEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBpZiAoSVNfREVCVUcpXHJcbiAgICAgICAgICAgICAgICBMb2dnZXIud3JpdGUoJ+abtOaWsOWHpueQhuOCkumWi+Wni+OBl+OBvuOBmeOAgicpO1xyXG4gICAgICAgICAgICB0aGlzLnRpY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlvJXmlbDjg4Hjgqfjg4Pjgq9cclxuICAgICAqIEBwYXJhbSBpZCBpZFxyXG4gICAgICogQHBhcmFtIHdpZHRoIHdpZHRoXHJcbiAgICAgKiBAcGFyYW0gaGVpZ2h0IGhlaWdodFxyXG4gICAgICovXHJcbiAgICBjaGVja0FyZ3MoaWQsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICBpZiAoIWlkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuX19JTklUX18uQVJHVU1FTlRTLk5PVF9FWElTVC5JRCk7XHJcbiAgICAgICAgaWYgKCF3aWR0aClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLl9fSU5JVF9fLkFSR1VNRU5UUy5OT1RfRVhJU1QuV0lEVEgpO1xyXG4gICAgICAgIGlmICghaGVpZ2h0KVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuX19JTklUX18uQVJHVU1FTlRTLk5PVF9FWElTVC5IRUlHSFQpO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuX19JTklUX18uQVJHVU1FTlRTLk5hTi5XSURUSCh3aWR0aCkpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgaGVpZ2h0ICE9PSAnbnVtYmVyJylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLl9fSU5JVF9fLkFSR1VNRU5UUy5OYU4uSEVJR0hUKGhlaWdodCkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjgpLov73liqDjgZnjgotcclxuICAgICAqIEBwYXJhbSB0ZXh0IOihqOekuuOBmeOCi+OCs+ODoeODs+ODiFxyXG4gICAgICogQHBhcmFtIG9wdGlvbuOAgOOCquODl+OCt+ODp+ODs+OAgjtcclxuICAgICAqL1xyXG4gICAgc2VuZCh0ZXh0LCBvcHRpb24pIHtcclxuICAgICAgICBsZXQgY3VzdG9tQXR0ciA9IG5ldyBNYXAoKTtcclxuICAgICAgICBjb25zdCBsYXllciA9IG9wdGlvbiA/IG9wdGlvbi5sYXllciA/IG9wdGlvbi5sYXllciA6IHRoaXMubWFpbkxheWVyTmFtZSA6IHRoaXMubWFpbkxheWVyTmFtZTtcclxuICAgICAgICBjb25zdCBjb21UeXBlID0gb3B0aW9uID8gb3B0aW9uLnR5cGUgPyBvcHRpb24udHlwZSA6ICduYWthJyA6ICduYWthJztcclxuICAgICAgICBjb25zdCBjb21TaXplID0gb3B0aW9uID8gb3B0aW9uLnNpemUgPyBvcHRpb24uc2l6ZSA6ICdtZWRpdW0nIDogJ21lZGl1bSc7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBvcHRpb24gPyBvcHRpb24uY29sb3IgPyBvcHRpb24uY29sb3IgOiAnI2ZmZicgOiAnI2ZmZic7XHJcbiAgICAgICAgY29uc3QgYmNvbG9yID0gdGhpcy5nZXRCY29sb3IoY29sb3IpO1xyXG4gICAgICAgIGNvbnN0IHZwb3MgPSBvcHRpb24gPyBvcHRpb24udnBvcyA/IG9wdGlvbi52cG9zIDogMCA6IDA7XHJcbiAgICAgICAgY29uc3QgZm9udE5hbWUgPSBvcHRpb24gPyBvcHRpb24uZm9udE5hbWUgPyBvcHRpb24uZm9udE5hbWUgOiBkZWZhdWx0Q29uZmlnLmRlZmF1bHRGb250IDogZGVmYXVsdENvbmZpZy5kZWZhdWx0Rm9udDtcclxuICAgICAgICBjb25zdCBvcGFjaXR5ID0gb3B0aW9uID8gb3B0aW9uLm9wYWNpdHkgPyBvcHRpb24ub3BhY2l0eSA6IGRlZmF1bHRDb25maWcub3BhY2l0eSA6IGRlZmF1bHRDb25maWcub3BhY2l0eTtcclxuICAgICAgICBjb25zdCBmdWxsID0gb3B0aW9uID8gb3B0aW9uLmZ1bGwgPyBvcHRpb24uZnVsbCA6IGZhbHNlIDogZmFsc2U7XHJcbiAgICAgICAgY29uc3Qgb25EaXNwb3NlZCA9IG9wdGlvbiA/IG9wdGlvbi5vbkRpc3Bvc2VkID8gb3B0aW9uLm9uRGlzcG9zZWQgOiAoKSA9PiB7IH0gOiAoKSA9PiB7IH07XHJcbiAgICAgICAgdGhpcy50b3RhbCsrO1xyXG4gICAgICAgIGlmIChvcHRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uLmN1c3RvbUF0dHIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY3VzdG9tQXR0ciA9IHRoaXMuX2dldEF0dHIob3B0aW9uLmN1c3RvbUF0dHIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1c3RvbUF0dHIuc2V0KCdjb2xvcicsIGNvbG9yKTtcclxuICAgICAgICBjdXN0b21BdHRyLnNldCgnYmNvbG9yJywgYmNvbG9yKTtcclxuICAgICAgICBjdXN0b21BdHRyLnNldCgnZm9udE5hbWUnLCBmb250TmFtZSk7XHJcbiAgICAgICAgY3VzdG9tQXR0ci5zZXQoJ29wYWNpdHknLCBvcGFjaXR5KTtcclxuICAgICAgICBjdXN0b21BdHRyLnNldCgnZnVsbCcsIGZ1bGwpO1xyXG4gICAgICAgIGNvbnN0IGxheWVyT2JqID0gdGhpcy5sYXllcnMuZ2V0KGxheWVyKTtcclxuICAgICAgICBpZiAobGF5ZXJPYmogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsYXllck9iai5hZGQodGV4dCwgdGhpcy50b3RhbCwgY3VzdG9tQXR0ciwgY29tVHlwZSwgY29tU2l6ZSwgeyBvbkRpc3Bhc2VkOiBvbkRpc3Bvc2VkIH0sIHZwb3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLkxBWUVSLkxBWUVSX0RPRVNfTk9UX0VYSVNUKGxheWVyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIDmmYLlgZzmraJcclxuICAgICAqL1xyXG4gICAgcGF1c2UoKSB7XHJcbiAgICAgICAgdGhpcy5pc1BsYXkgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5YaN55SfXHJcbiAgICAgKi9cclxuICAgIHBsYXkoKSB7XHJcbiAgICAgICAgdGhpcy5pc1BsYXkgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjgpLliYrpmaTjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBsYXllciDjg6zjgqTjg6Tjg7xcclxuICAgICAqL1xyXG4gICAgY2xlYXIobGF5ZXIpIHtcclxuICAgICAgICBpZiAobGF5ZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgbGF5ZXJPYmogPSB0aGlzLmxheWVycy5nZXQobGF5ZXIpO1xyXG4gICAgICAgICAgICBpZiAobGF5ZXJPYmogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbGF5ZXJPYmouY2xlYXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5MQVlFUi5MQVlFUl9ET0VTX05PVF9FWElTVChsYXllcikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgICAgIGxheWVyLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5YWo44Gm44Gu5Yem55CG44KS57WC5LqG44GX44G+44GZXHJcbiAgICAgKi9cclxuICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5ydW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzUGxheSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICBsYXllci5jbGVhcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc1NpemUud2lkdGgsIHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWxnuaAp+OCkuWPluW+l+OBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIGN1c3RvbUF0dHIg44Kr44K544K/44Og5bGe5oCnXHJcbiAgICAgKi9cclxuICAgIF9nZXRBdHRyKGN1c3RvbUF0dHIpIHtcclxuICAgICAgICBjb25zdCBtYXBvYmogPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoY3VzdG9tQXR0cikpIHtcclxuICAgICAgICAgICAgbWFwb2JqLnNldChrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hcG9iajtcclxuICAgIH1cclxuICAgIF9nZXRGb250U2l6ZShoZWlnaHQsIGxpbmVzKSB7XHJcbiAgICAgICAgY29uc3QgYmlnID0gaGVpZ2h0IC8gbGluZXMuYmlnO1xyXG4gICAgICAgIGNvbnN0IG1lZGl1bSA9IGhlaWdodCAvIGxpbmVzLm1lZGl1bTtcclxuICAgICAgICBjb25zdCBzbWFsbCA9IGhlaWdodCAvIGxpbmVzLnNtYWxsO1xyXG4gICAgICAgIHJldHVybiB7IGJpZzogYmlnLCBtZWRpdW06IG1lZGl1bSwgc21hbGw6IHNtYWxsIH07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIGNhbnZhc+OCs+ODs+ODhuOCreOCueODiOOCkuWPluW+l+OBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIGlkIElEXHJcbiAgICAgKiBAcGFyYW0gd2lkdGgg5qiq5bmFXHJcbiAgICAgKiBAcGFyYW0gaGVpZ2h0IOmrmOOBlVxyXG4gICAgICovXHJcbiAgICBfZ2V0Q29udGV4dChpZCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIGNvbnN0IGVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgICBpZiAoIWVsbSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuX19JTklUX18uRUxFTUVOVC5OT1RfRVhJU1QoaWQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsbS5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgICAgIGVsbS53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgICAgICBlbG0uc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XHJcbiAgICAgICAgICAgIGVsbS5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICBjb25zdCBjdHggPSBlbG0uZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgaWYgKGN0eCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN0eDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjg6HjgqTjg7Pjg6vjg7zjg5dcclxuICAgICAqL1xyXG4gICAgdGljayhvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQbGF5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvUmVuZGVyID0gb3B0aW9ucyA/IG9wdGlvbnMucmVuZGVyID8gdHJ1ZSA6IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFZwb3MgPSBvcHRpb25zID8gb3B0aW9ucy52cG9zID8gb3B0aW9ucy52cG9zIDogMCA6IDA7XHJcbiAgICAgICAgICAgIGlmIChkb1JlbmRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzU2l6ZS53aWR0aCwgdGhpcy5jYW52YXNTaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgICAgICBsYXllci50aWNrKHRoaXMubWV0YS5nZXRDb3VudCgpLCB7IHZwb3M6IGN1cnJlbnRWcG9zLCByZW5kZXI6IGRvUmVuZGVyIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5tZXRhLmxvb3AoKTsgLy/jgqTjg7Pjgq/jg6rjg6Hjg7Pjg4hcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucnVuICYmICF0aGlzLmF1dG9UaWNrRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHsgdGhpcy50aWNrKG9wdGlvbnMpOyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDnuIHlj5bjgoroibLjgpLlj5blvpfjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBjb2xvciDoibJcclxuICAgICAqL1xyXG4gICAgZ2V0QmNvbG9yKGNvbG9yKSB7XHJcbiAgICAgICAgc3dpdGNoIChjb2xvcikge1xyXG4gICAgICAgICAgICBjYXNlICdibGFjayc6XHJcbiAgICAgICAgICAgIGNhc2UgJyMwMDAnOlxyXG4gICAgICAgICAgICBjYXNlICcjMDAwMDAwJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnI2ZmZic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnIzAwMCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmjIflrprjgZfjgZ/kvY3nva7jgavlrZjlnKjjgZnjgovjgrPjg6Hjg7Pjg4jjgpLlj5blvpfjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSB4IFjluqfmqJlcclxuICAgICAqIEBwYXJhbSB5IFnluqfmqJlcclxuICAgICAqL1xyXG4gICAgZ2V0KHgsIHkpIHtcclxuICAgICAgICBjb25zdCBjb21tZW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICBjb21tZW50cy5wdXNoKC4uLmxheWVyLmdldCh4LCB5KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbW1lbnRzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjg6zjgqTjg6Tjg7zjgpLov73liqDjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBsYXllck5hbWUg44Os44Kk44Ok44O85ZCNXHJcbiAgICAgKi9cclxuICAgIGFkZExheWVyKGxheWVyTmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmxheWVycy5oYXMobGF5ZXJOYW1lKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuTEFZRVIuRFVQTElDQVRJT04obGF5ZXJOYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxheWVycy5zZXQobGF5ZXJOYW1lLCBuZXcgTGF5ZXIodGhpcy5jdHgsIHRoaXMuY2FudmFzU2l6ZSwgdGhpcy5saW5lcywgdGhpcy5mb25yU2l6ZSwgdGhpcy5maXhlZEZvbnJTaXplLCB0aGlzLmR1cmF0aW9uLCB0aGlzLmxpbmVIZWlnaHQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKElTX0RFQlVHKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci53cml0ZShg44Os44Kk44Ok44O8IFwiJHtsYXllck5hbWV9XCIg44KS6L+95Yqg44GX44G+44GX44Gf44CCYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjg6zjgqTjg6Tjg7zjgpLliYrpmaTjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBsYXllck5hbWUg44Os44Kk44Ok44O85ZCNXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZUxheWVyKGxheWVyTmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmxheWVycy5oYXMobGF5ZXJOYW1lKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuTEFZRVIuRFVQTElDQVRJT04obGF5ZXJOYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxheWVycy5kZWxldGUobGF5ZXJOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKElTX0RFQlVHKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci53cml0ZShg44Os44Kk44Ok44O8IFwiJHtsYXllck5hbWV9XCIg44KS5YmK6Zmk44GX44G+44GX44Gf44CCYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiDjg6Hjgr/mg4XloLHjgq/jg6njgrlcclxuICovXHJcbmNsYXNzIE1ldGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3mnJ/ljJZcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCq+OCpuODs+ODiOOCkuWil+OChOOBl+OBvuOBmVxyXG4gICAgICovXHJcbiAgICBsb29wKCkge1xyXG4gICAgICAgIHRoaXMuY291bnQrKztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kr44Km44Oz44OI44KS5Y+W5b6XXHJcbiAgICAgKi9cclxuICAgIGdldENvdW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50O1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiDjg63jgrBcclxuICovXHJcbmNsYXNzIExvZ2dlciB7XHJcbiAgICAvKipcclxuICAgICAqIOODreOCsOOCkuWHuuWKm+OBmeOCi1xyXG4gICAgICogQHBhcmFtIGxvZyDmnKzmlodcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHdyaXRlKGxvZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBbTmljb21tZW50SlNdJHtsb2d9YCk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIOOCqOODqeODvFxyXG4gKi9cclxuY29uc3QgTmljb0V4Y2VwdGlvbnMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIOWIneacn+WMluOCqOODqeODvFxyXG4gICAgICovXHJcbiAgICBfX0lOSVRfXzoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW8leaVsOOCqOODqeODvFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIEFSR1VNRU5UUzoge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5b+F6KaB44Gq5byV5pWw44GM5a2Y5Zyo44GX44Gq44GEXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBOT1RfRVhJU1Q6IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICog6auY44GVXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIEhFSUdIVDogJ1tFUlJdYXJndW1lbnQgXCJoZWlnaHRcIiBtdXN0IGJlIHNwZWNpZmllZC4nLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiDmqKrluYVcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgV0lEVEg6ICdbRVJSXWFyZ3VtZW50IFwid2lkdGhcIiBtdXN0IGJlIHNwZWNpZmllZC4nLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBJRFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBJRDogJ1tFUlJdYXJndW1lbnQgXCJpZFwiIG11c3QgYmUgc3BlY2lmaWVkLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDlvJXmlbDjga7lgKTjgYzkuI3pganliIfjgafjgYLjgotcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIE5hTjoge1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiDpq5jjgZXjgYzmlbDlrZfjgafjgarjgYRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgSEVJR0hUOiAodmFsdWUpID0+IGBbRVJSXSR7dmFsdWV9IGlzIG5vdCBhIG51bWJlci4gXCJoZWlnaHRcIiBtdXMgYmUgYSBudW1iZXIuYCxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICog5qiq5bmF44GM5pWw5a2X44Gn44Gq44GEXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIFdJRFRIOiAodmFsdWUpID0+IGBbRVJSXSR7dmFsdWV9IGlzIG5vdCBhIG51bWJlci4gXCJ3aWR0aFwiIG11cyBiZSBhIG51bWJlci5gLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgYzlrZjlnKjjgZfjgarjgYTjg7tjYW52YXPjgafjgarjgYRcclxuICAgICAgICAgKi9cclxuICAgICAgICBFTEVNRU5UOiB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDopoHntKDjgYzlrZjlnKjjgZfjgarjgYRcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIE5PVF9FWElTVDogKGlkKSA9PiB7IHJldHVybiBgW0VSUl1DYW52YXMgRWxlbWVudCB3aGljaCBpZCBpcyBcIiR7aWR9XCIgd2FzIG5vdCBmb3VuZC5gOyB9LFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6KaB57Sg44GMSFRNTENhbnZhc+OBp+OBquOBhFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTk9UX0FfQ0FOVkFTX0VMRU1FTlQ6IChpZCkgPT4geyByZXR1cm4gYFtFUlJdRWxlbWVudCB3aGljaCBpZCBpcyBcIiR7aWR9XCIgaXMgbm90IGEgY2FudmFzSFRNTDUgRWxlbWVudC5gOyB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOi/veWKoOaZguOBruOCqOODqeODvFxyXG4gICAgICovXHJcbiAgICBTRU5EOiB7fSxcclxuICAgIC8qKlxyXG4gICAgICog44Os44Kk44Ok44O86Zai5L+C44Gu44Ko44Op44O8XHJcbiAgICAgKi9cclxuICAgIExBWUVSOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6YeN6KSHXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgRFVQTElDQVRJT046IChuYW1lKSA9PiB7IHJldHVybiBgW0VSUl1UaGUgbGF5ZXIgbmFtZSAke25hbWV9IGFscmVhZHkgZXhpc3RzLmA7IH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Os44Kk44Ok44O844GM5a2Y5Zyo44GX44Gq44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgTEFZRVJfRE9FU19OT1RfRVhJU1Q6IChuYW1lKSA9PiB7IHJldHVybiBgW0VSUl1BIGxheWVyIG5hbWUgaXMgJHtuYW1lfSBkb2VzIG5vdCBleGlzdC5gOyB9LFxyXG4gICAgfSxcclxufTtcclxuIiwiaW1wb3J0IHsgRGF0YVV0aWxzIH0gZnJvbSAnLi4vdXRpbHMvRGF0YVV0aWxzJztcclxuaW1wb3J0IGRlZmF1bHRDb25maWcgZnJvbSAnLi9jb25maWcnO1xyXG4vL3V0aWxcclxuY29uc3QgZGF0YXV0bCA9IG5ldyBEYXRhVXRpbHMoKTtcclxuLy/jgrPjg6Hjg7Pjg4jjgqrjg5bjgrjjgqfjgq/jg4hcclxuZXhwb3J0IGNsYXNzIENvbW1lbnRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtKSB7XHJcbiAgICAgICAgdGhpcy5saWZlID0gMDsgLy/mrovjgorjgrPjg57mlbBcclxuICAgICAgICB0aGlzLmRlbHRhID0gMDsgLy8x44Kz44Oe5b2T44Gf44KK44GuWOW6p+aomeOBruWkiemHj1xyXG4gICAgICAgIHRoaXMubGVmdCA9IDA7IC8vWOW6p+aomVxyXG4gICAgICAgIHRoaXMudG9wID0gMDsgLy9Z5bqn5qiZKOWOn+eCueOBr+W3puS4iilcclxuICAgICAgICB0aGlzLnJldmVhbCA9IDA7IC8v44Kz44Oh44Oz44OI44GM55S76Z2i5Y+z44GL44KJ5a6M5YWo44Gr6Zyy5Ye644GZ44KL44G+44Gn44Gu44Kz44Oe5pWwXHJcbiAgICAgICAgdGhpcy50b3VjaCA9IDA7IC8v44Kz44Oh44Oz44OI44Gu5bem56uv44GM55S76Z2i5bem44Gr5Yiw6YGU44GZ44KL44G+44Gn44Gu44Kz44Oe5pWwXHJcbiAgICAgICAgdGhpcy5maXhlZCA9IGZhbHNlOyAvL+WbuuWumuODleODqeOCsFxyXG4gICAgICAgIHRoaXMudHlwZSA9IHBhcmFtLm9wdGlvbi5tb2RlOyAvL+OCv+OCpOODl1xyXG4gICAgICAgIHRoaXMuY3VzdG9tQXR0ciA9IHBhcmFtLm9wdGlvbi5jdXN0b21BdHRyOyAvL+OCq+OCueOCv+ODoOWxnuaAp1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxUZXh0ID0gcGFyYW0udGV4dDtcclxuICAgICAgICB0aGlzLnRleHQgPSB0aGlzLl9mb3JtYXRDb21tZW50KHBhcmFtLnRleHQsIHRoaXMudHlwZSk7IC8v5pys5paHXHJcbiAgICAgICAgdGhpcy50ZXh0Rm9yUmVuZGVyID0gdGhpcy5fZm9ybWF0UmVuZGVyQ29tbWVudCh0aGlzLnRleHQpO1xyXG4gICAgICAgIHRoaXMudGV4dExlbmd0aCA9IE1hdGgubWF4KC4uLnRoaXMudGV4dC5tYXAodGV4dCA9PiB0ZXh0Lmxlbmd0aCkpO1xyXG4gICAgICAgIHRoaXMubWF4TGVuZ3RoSW5kZXggPSB0aGlzLnRleHQubWFwKGNvbW1lbnQgPT4gY29tbWVudC5sZW5ndGgpLmluZGV4T2YodGhpcy50ZXh0TGVuZ3RoKTtcclxuICAgICAgICB0aGlzLmNvbW1lbnROdW1iZXIgPSBwYXJhbS5jb21tZW50TnVtYmVyO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBwYXJhbS5vcHRpb24uY29sb3I7IC8v6ImyXHJcbiAgICAgICAgdGhpcy5ib3JkZXJDb2xvciA9IHBhcmFtLm9wdGlvbi5ib3JkZXJDb2xvcjtcclxuICAgICAgICB0aGlzLmxpbmVzID0gdGhpcy5fZ2V0TGluZXMocGFyYW0ub3B0aW9uLmNvbW1lbnRTaXplLCBwYXJhbS5saW5lcyk7XHJcbiAgICAgICAgdGhpcy5zZWxmTGluZXMgPSB0aGlzLnRleHQubGVuZ3RoOyAvL+ihjOaVsFxyXG4gICAgICAgIHRoaXMuY3R4ID0gcGFyYW0uY3R4O1xyXG4gICAgICAgIHRoaXMuZm9udE5hbWUgPSBwYXJhbS5vcHRpb24uZm9udE5hbWU7IC8v44OV44Kp44Oz44OI5ZCNXHJcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gcGFyYW0ub3B0aW9uLm9wYWNpdHk7IC8v6YCP6YGO5bqmXHJcbiAgICAgICAgdGhpcy5mdWxsID0gcGFyYW0ub3B0aW9uLmZ1bGw7IC8v6Ieo55WM54K544Oq44K144Kk44K6XHJcbiAgICAgICAgdGhpcy5jYW52YXNTaXplID0gcGFyYW0uY2FudmFzU2l6ZTtcclxuICAgICAgICB0aGlzLmNhbnZhc1dpZHRoRmxhc2ggPSBwYXJhbS5jYW52YXNXaWR0aEZsYXNoO1xyXG4gICAgICAgIC8v5Zu65a6a44OV44Op44KwXHJcbiAgICAgICAgaWYgKHRoaXMudGV4dC5sZW5ndGggPj0gdGhpcy5saW5lcykge1xyXG4gICAgICAgICAgICB0aGlzLmZpeGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIC8vdnBvc+ODu+ihqOekuuaZgumWk1xyXG4gICAgICAgIHRoaXMudnBvcyA9IHBhcmFtLm9wdGlvbi52cG9zO1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBwYXJhbS5vcHRpb24uZHVyYXRpb24gfHwgZGVmYXVsdENvbmZpZy5kdXJhdGlvbjtcclxuICAgICAgICAvL+ODleOCqeODs+ODiOmWouS/glxyXG4gICAgICAgIHRoaXMuZm9udFNpemVTdHJpbmcgPSBwYXJhbS5vcHRpb24uY29tbWVudFNpemU7XHJcbiAgICAgICAgW3RoaXMuZm9udFNpemUsIHRoaXMud2lkdGgsIHRoaXMub2Zmc2V0WV0gPSB0aGlzLl9nZXRGb250KHRoaXMudGV4dFt0aGlzLm1heExlbmd0aEluZGV4XSwgdGhpcy5jYW52YXNTaXplLCB0aGlzLmNhbnZhc1dpZHRoRmxhc2gsIHBhcmFtLm9wdGlvbi5jb21tZW50U2l6ZSwgcGFyYW0uZm9udFNpemUsIHBhcmFtLmZpeGVkRm9udFNpemUsIHRoaXMudHlwZSwgcGFyYW0ub3B0aW9uLmxpbmVoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuZm9udFNpemVTdHJpbmcgPSBwYXJhbS5vcHRpb24uY29tbWVudFNpemU7XHJcbiAgICAgICAgdGhpcy5vdmVyYWxsU2l6ZSA9IHRoaXMuZm9udFNpemUgKiB0aGlzLnNlbGZMaW5lcztcclxuICAgICAgICB0aGlzLmFsaXZlID0gdHJ1ZTsgLy/nlJ/lrZjjg5Xjg6njgrBcclxuICAgICAgICB0aGlzLm9uRGlzcG9zZWQgPSBwYXJhbS5vbkRpc3Bvc2VkOyAvL+OCs+ODvOODq+ODkOODg+OCr1xyXG4gICAgICAgIHRoaXMuX3NldCgpOyAvL+OCu+ODg+ODiOWun+ihjFxyXG4gICAgfVxyXG4gICAgLy/lsZ7mgKflj5blvpdcclxuICAgIGdldFByb3Aoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tQXR0ci5nZXQoa2V5KTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5Yem55CGXHJcbiAgICAgKi9cclxuICAgIHRpY2sodnBvcykge1xyXG4gICAgICAgIC8v44Kz44Oh44Oz44OI44Gu57Sv6KiI6KGo56S65pmC6ZaT44GM5pei5a6a44GuMuWAjeS7peS4iuOBp+OBguOBo+OBn+WgtOWQiOOAgeOCs+ODoeODs+ODiOOCkuWJiumZpOOBmeOCi1xyXG4gICAgICAgIGlmICh2cG9zID49IHRoaXMudnBvcyArIHRoaXMuZHVyYXRpb24gKiAyMDApIHtcclxuICAgICAgICAgICAgdGhpcy5hbGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGlmZS0tO1xyXG4gICAgICAgIC8vbmFrYeOCs+ODoeODs+ODiOOBruWgtOWQiFxyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICduYWthJykge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnQgLT0gdGhpcy5kZWx0YTtcclxuICAgICAgICAgICAgdGhpcy5yZXZlYWwtLTtcclxuICAgICAgICAgICAgdGhpcy50b3VjaC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5saWZlIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmtpbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOBrueUn+WtmOODleODqeOCsOOCkuW8t+WItueahOOBq+mZjeOCjeOBl+OBvuOBmVxyXG4gICAgICovXHJcbiAgICBraWxsKCkge1xyXG4gICAgICAgIHRoaXMuYWxpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uRGlzcG9zZWQoKTtcclxuICAgIH1cclxuICAgIC8v44K744OD44OIXHJcbiAgICBfc2V0KCkge1xyXG4gICAgICAgIHRoaXMubGlmZSA9IDA7IC8v5q6L44KK44Kz44Oe5pWwXHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gMDsgLy9Y5bqn5qiZXHJcbiAgICAgICAgdGhpcy50b3AgPSAwOyAvL1nluqfmqJko5Y6f54K544Gv5bem5LiKKVxyXG4gICAgICAgIHRoaXMuZGVsdGEgPSAwOyAvLzHjgrPjg57lvZPjgZ/jgorjga5Y5bqn5qiZ44Gu5aSJ6YePXHJcbiAgICAgICAgdGhpcy5yZXZlYWwgPSAwOyAvL+OCs+ODoeODs+ODiOOBjOeUu+mdouWPs+OBi+OCieWujOWFqOOBq+mcsuWHuuOBmeOCi+OBvuOBp+OBruOCs+ODnuaVsFxyXG4gICAgICAgIHRoaXMudG91Y2ggPSAwOyAvL+OCs+ODoeODs+ODiOOBruW3puerr+OBjOeUu+mdouW3puOBq+WIsOmBlOOBmeOCi+OBvuOBp+OBruOCs+ODnuaVsFxyXG4gICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ25ha2EnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0TmFrYSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NoaXRhJzpcclxuICAgICAgICAgICAgY2FzZSAndWUnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0U2hpdGFVZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vbmFrYeOCs+ODoeODs+ODiOioreWumlxyXG4gICAgX3NldE5ha2EoKSB7XHJcbiAgICAgICAgdGhpcy5saWZlID0gZGVmYXVsdENvbmZpZy5mcHMgKiB0aGlzLmR1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IHRoaXMuY2FudmFzU2l6ZS53aWR0aDtcclxuICAgICAgICB0aGlzLmRlbHRhID0gKHRoaXMuY2FudmFzU2l6ZS53aWR0aCArIHRoaXMud2lkdGgpIC8gdGhpcy5saWZlO1xyXG4gICAgICAgIHRoaXMucmV2ZWFsID0gdGhpcy53aWR0aCAvIHRoaXMuZGVsdGE7XHJcbiAgICAgICAgdGhpcy50b3VjaCA9IHRoaXMuY2FudmFzU2l6ZS53aWR0aCAvIHRoaXMuZGVsdGE7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIHNoaXTjg7t1ZeOCs+ODoeODs+ODiOOCkuioreWumuOBmeOCi1xyXG4gICAgICogQHBhcmFtIHdpZHRoIGNhbnZhc+OBruaoquW5hVxyXG4gICAgICogQHBhcmFtIGR1cmF0aW9uIOOCs+ODoeODs+ODiOihqOekuuaZgumWk1xyXG4gICAgICovXHJcbiAgICBfc2V0U2hpdGFVZSgpIHtcclxuICAgICAgICB0aGlzLmxpZmUgPSBkZWZhdWx0Q29uZmlnLmZwcyAqIHRoaXMuZHVyYXRpb247XHJcbiAgICAgICAgaWYgKHRoaXMuZml4ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gKHRoaXMuY2FudmFzU2l6ZS53aWR0aCAtIHRoaXMud2lkdGgpIC8gMjtcclxuICAgICAgICAgICAgLy90aGlzLmxlZnQgPSB0aGlzLmNhbnZhc1NpemUud2lkdGggLyAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy5jYW52YXNTaXplLndpZHRoIC8gMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL2ZvbnTjgpLmsbrlrprjgZnjgotcclxuICAgIF9nZXRGb250KHRleHQsIGNhbnZhc1NpemUsIGZsYXNoV2lkdGgsIGNvbW1lbnRTaXplLCBmb250U2l6ZSwgZml4ZWRGb250U2l6ZSwgdHlwZSwgbGluZUhlaWdodCkge1xyXG4gICAgICAgIGxldCBvcmlnaW5hbEZvbnQgPSB0aGlzLl9nZXRTaXplKGNvbW1lbnRTaXplLCBmb250U2l6ZSk7XHJcbiAgICAgICAgbGV0IGZvbnQgPSBvcmlnaW5hbEZvbnQ7XHJcbiAgICAgICAgLy/jg7vmlLnooYzjg6rjgrXjgqTjgrpcclxuICAgICAgICAvL292ZXJhbGxTaXpl44Gr55u45b2T44GZ44KL6auY44GV44GM44CB5o+P5YaZ6aCY5Z+f44GuMS8z44KS5LiK5Zue44KL5aC05ZCI44Gr44CBXHJcbiAgICAgICAgLy/jg6rjgrXjgqTjgrrjgpLooYzjgYbjgIJcclxuICAgICAgICBpZiAob3JpZ2luYWxGb250ICogdGhpcy5zZWxmTGluZXMgPiBjYW52YXNTaXplLmhlaWdodCAvIDMpIHtcclxuICAgICAgICAgICAgZm9udCA9IHRoaXMuX2dldFNpemUoY29tbWVudFNpemUsIGZpeGVkRm9udFNpemUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN0eC5mb250ID0gYCR7Zm9udH1weCBcIll1IEdvdGhpY1wiYDtcclxuICAgICAgICBsZXQgY29tV2lkdGggPSB0aGlzLmN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcclxuICAgICAgICAvL+ODu+iHqOeVjOW5heODquOCteOCpOOCulxyXG4gICAgICAgIC8v44Kz44Oh44Oz44OI44Gu5pyA5aSn5bmF44GM5o+P5YaZ6aCY5Z+f44KS5LiK5Zue44KL5aC05ZCI44Gr44CB5o+P5YaZ6aCY5Z+f44Gr5Y+O44G+44KL44KI44GG44Gr44Oq44K144Kk44K644GZ44KLXHJcbiAgICAgICAgY29uc3Qgd2lkdGhPdmVyZmxvdyA9IGNvbVdpZHRoID4gdGhpcy5jYW52YXNTaXplLndpZHRoICYmIHR5cGUgIT09ICduYWthJztcclxuICAgICAgICBpZiAod2lkdGhPdmVyZmxvdyAmJiAhdGhpcy5mdWxsKSB7XHJcbiAgICAgICAgICAgIGZvbnQgPSB0aGlzLl9tb2RTaXplKG9yaWdpbmFsRm9udCwgY29tV2lkdGgsIHRoaXMuY2FudmFzV2lkdGhGbGFzaCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBgJHtmb250fXB4IFwiWXUgR290aGljXCJgO1xyXG4gICAgICAgICAgICBjb21XaWR0aCA9IHRoaXMuY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh3aWR0aE92ZXJmbG93ICYmIHRoaXMuZnVsbCkge1xyXG4gICAgICAgICAgICBmb250ID0gdGhpcy5fbW9kU2l6ZShvcmlnaW5hbEZvbnQsIGNvbVdpZHRoLCB0aGlzLmNhbnZhc1NpemUud2lkdGgpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gYCR7Zm9udH1weCBcIll1IEdvdGhpY1wiYDtcclxuICAgICAgICAgICAgY29tV2lkdGggPSB0aGlzLmN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IHR5cGUgPT09ICdzaGl0YScgPyBmb250ICogKGxpbmVIZWlnaHQgLSAxKSAqIC0xIDogZm9udCAqIChsaW5lSGVpZ2h0IC0gMSk7XHJcbiAgICAgICAgcmV0dXJuIFtmb250LCBjb21XaWR0aCwgb2Zmc2V0WV07XHJcbiAgICB9XHJcbiAgICAvL+ODleOCqeODs+ODiOOCteOCpOOCuuS/ruato1xyXG4gICAgX21vZFNpemUoZm9udCwgd2lkdGgsIGNhbnZhc1dpZHRoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZvbnQgKiBjYW52YXNXaWR0aCAvIHdpZHRoO1xyXG4gICAgfVxyXG4gICAgLy9mb250U2l6ZeWPluW+l1xyXG4gICAgX2dldFNpemUoY29tbWVudFNpemUsIGZvbnRTaXplKSB7XHJcbiAgICAgICAgc3dpdGNoIChjb21tZW50U2l6ZSkge1xyXG4gICAgICAgICAgICBjYXNlICdiaWcnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbnRTaXplLmJpZztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzbWFsbCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9udFNpemUuc21hbGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb250U2l6ZS5tZWRpdW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDooYzmlbDjgpLmsYLjgoHjgotcclxuICAgICAqIEBwYXJhbSBzaXplIGJpZy9zbWFsbC9tZWRpdW3jga7jgYTjgZrjgozjgYtcclxuICAgICAqIEBwYXJhbSBhbGxMaW5lcyBjb21tZW50TGluZXPlnovjga7jgqrjg5bjgrjjgqfjgq/jg4go44Gd44KM44Ge44KM44Gu44K144Kk44K644Gr44Gk44GE44Gm6KGM5pWw44KS6KGo44GZKVxyXG4gICAgICovXHJcbiAgICBfZ2V0TGluZXMoc2l6ZSwgYWxsTGluZXMpIHtcclxuICAgICAgICBzd2l0Y2ggKHNpemUpIHtcclxuICAgICAgICAgICAgY2FzZSAnYmlnJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGxMaW5lcy5iaWc7XHJcbiAgICAgICAgICAgIGNhc2UgJ21lZGl1bSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxsTGluZXMubWVkaXVtO1xyXG4gICAgICAgICAgICBjYXNlICdzbWFsbCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxsTGluZXMuc21hbGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjgpLmlbTlvaLjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBvcmlnaW4g44Kz44Oh44Oz44OIXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudFBvcyDjgrPjg6Hjg7Pjg4jjga7jgr/jgqTjg5dcclxuICAgICAqL1xyXG4gICAgX2Zvcm1hdENvbW1lbnQob3JpZ2luLCBjb21tZW50UG9zKSB7XHJcbiAgICAgICAgbGV0IGZvcm1hdGVkID0gZGF0YXV0bC5zcGxpdHRlcihvcmlnaW4sICdcXG4nKTtcclxuICAgICAgICBmb3JtYXRlZCA9IHRoaXMuX2RlbGV0ZUJsYW5rKGZvcm1hdGVkKTtcclxuICAgICAgICBmb3JtYXRlZCA9IHRoaXMuX2RlbGV0ZUZpcnN0QW5kTGFzdEJsYW5rKGZvcm1hdGVkKTtcclxuICAgICAgICBmb3JtYXRlZCA9IHRoaXMuX3NvcnRCeVR5cGUoZm9ybWF0ZWQsIGNvbW1lbnRQb3MpO1xyXG4gICAgICAgIHJldHVybiBmb3JtYXRlZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5o+P5YaZ55So44Kz44Oh44Oz44OI44KS5pW05b2i44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gb3JpZ2luIOOCs+ODoeODs+ODiFxyXG4gICAgICogQHBhcmFtIGNvbW1lbnRQb3Mg44Kz44Oh44Oz44OI44Gu44K/44Kk44OXXHJcbiAgICAgKi9cclxuICAgIF9mb3JtYXRSZW5kZXJDb21tZW50KG9yaWdpbikge1xyXG4gICAgICAgIGxldCBmb3JtYXRlZCA9IFsuLi5vcmlnaW5dO1xyXG4gICAgICAgIGZvcm1hdGVkID0gdGhpcy5fZGVsZXRlQmxhbmtMaW5lRnJvbUVuZChvcmlnaW4pO1xyXG4gICAgICAgIHJldHVybiBmb3JtYXRlZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI44GL44KJM+WbnuS7peS4iumAo+e2muOBmeOCi+aUueihjOOCkuWJiumZpOOBl+OBvuOBmeOAglxyXG4gICAgICogQHBhcmFtIGNvbW1lbnRzIOOCs+ODoeODs+ODiOOBruODquOCueODiFxyXG4gICAgICovXHJcbiAgICBfZGVsZXRlQmxhbmsoY29tbWVudExpc3QpIHtcclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZWQgPSBbXTtcclxuICAgICAgICAvL2Zvci4uLmlu44Or44O844OX44Gn5Zue44GZIFxyXG4gICAgICAgIGZvciAoY29uc3QgdGV4dCBvZiBjb21tZW50TGlzdCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc0JsYW5rID0gIXRleHQ7XHJcbiAgICAgICAgICAgIGlmIChpc0JsYW5rKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA8IDMpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZWQucHVzaCh0ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGVsZXRlZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pyA5Yid44Go5pyA5b6M44Gu56m655m96KGM44KS5YmK6Zmk44GX44G+44GZ44CCXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudHMg44Kz44Oh44Oz44OI44Gu44Oq44K544OIXHJcbiAgICAgKi9cclxuICAgIF9kZWxldGVGaXJzdEFuZExhc3RCbGFuayhjb21tZW50cykge1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZWQgPSBbLi4uY29tbWVudHNdO1xyXG4gICAgICAgIGZvciAoY29uc3QgY29tbWVudCBvZiBjb21tZW50cykge1xyXG4gICAgICAgICAgICBpZiAoIWNvbW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZWQuc2hpZnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5b6M44KN44GL44KJXHJcbiAgICAgICAgY29uc3QgcmV2ZXJzZWQgPSBbLi4uZGVsZXRlZF0ucmV2ZXJzZSgpO1xyXG4gICAgICAgIGZvciAoY29uc3QgY29tbWVudCBvZiByZXZlcnNlZCkge1xyXG4gICAgICAgICAgICBpZiAoIWNvbW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZWQucG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGVsZXRlZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI44Gu5L2N572u44Gr44KI44Gj44Gm44K944O844OI44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudHMg44Kz44Oh44Oz44OI44Gu44Oq44K544OIXHJcbiAgICAgKiBAcGFyYW0gdHlwZSDjgrPjg6Hjg7Pjg4jjga7kvY3nva5cclxuICAgICAqL1xyXG4gICAgX3NvcnRCeVR5cGUoY29tbWVudHMsIHR5cGUpIHtcclxuICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ3NoaXRhJyA/IGNvbW1lbnRzLnJldmVyc2UoKSA6IGNvbW1lbnRzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDnqbrooYzjgpLliYrpmaTjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBjb21tZW50cyDjgrPjg6Hjg7Pjg4hcclxuICAgICAqL1xyXG4gICAgX2RlbGV0ZUJsYW5rTGluZUZyb21FbmQoY29tbWVudHMpIHtcclxuICAgICAgICBjb25zdCBmb3JtYXRlZCA9IFsuLi5jb21tZW50c107XHJcbiAgICAgICAgY29uc3QgcmV2ZXJzZWQgPSBbLi4uY29tbWVudHNdLnJldmVyc2UoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgcmV2ZXJzZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNCbGFuayA9IC9eXFxzKyQvLnRlc3QobGluZSkgfHwgbGluZS5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgICAgIGlmIChpc0JsYW5rKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXRlZC5wb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmb3JtYXRlZDtcclxuICAgIH1cclxufVxyXG4vL+W6p+aomeaDheWgsVxyXG5leHBvcnQgY2xhc3MgUG9pbnQge1xyXG4gICAgY29uc3RydWN0b3IocG9zKSB7XHJcbiAgICAgICAgdGhpcy54ID0gcG9zLng7XHJcbiAgICAgICAgdGhpcy55ID0gcG9zLnk7XHJcbiAgICB9XHJcbn1cclxuLy9oZWlnaHQ6d2lkdGhcclxuZXhwb3J0IGNsYXNzIFNpemUge1xyXG4gICAgY29uc3RydWN0b3Ioc2l6ZSkge1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHNpemUud2lkdGg7XHJcbiAgICB9XHJcbn1cclxuLy/jg6zjgqTjg6Tjg7zjgq/jg6njgrlcclxuZXhwb3J0IGNsYXNzIExheWVyIHtcclxuICAgIC8v5Yid5pyf5YyWXHJcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhc1NpemUsIGxpbmVzLCBjb21tZW50U2l6ZSwgY29tbWVudFNpemVGaXhlZCwgZHVyYXRpb24sIGxpbmVIZWlnaHQpIHtcclxuICAgICAgICB0aGlzLm9uRGlzYXBvc2VkID0gKCkgPT4geyB9O1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgICAgIHRoaXMuY2FudmFzU2l6ZSA9IGNhbnZhc1NpemU7XHJcbiAgICAgICAgdGhpcy5jYW52YXNXaWR0aEZsYXNoID0gY2FudmFzU2l6ZS5oZWlnaHQgLyAzICogNDtcclxuICAgICAgICB0aGlzLmxpbmVIZWlnaHQgPSBsaW5lSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubGluZXMgPSBsaW5lcztcclxuICAgICAgICB0aGlzLmZvbnJTaXplID0gY29tbWVudFNpemU7XHJcbiAgICAgICAgdGhpcy5maXhlZEZvbnJTaXplID0gY29tbWVudFNpemVGaXhlZDtcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XHJcbiAgICAgICAgdGhpcy5jb21tZW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMubWF4bGluZXMgPSBsaW5lcy5zbWFsbDtcclxuICAgICAgICB0aGlzLm5ha2EgPSBuZXcgTmFrYUxpbmUobGluZXMuc21hbGwsIGNhbnZhc1NpemUpO1xyXG4gICAgICAgIHRoaXMuc2hpdGEgPSBbXTtcclxuICAgICAgICB0aGlzLnVlID0gW107XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOODrOOCpOODpOODvOOBq+OCs+ODoeODs+ODiOOCkui/veWKoOOBmeOCi1xyXG4gICAgICogQHBhcmFtIHRleHQg44Kz44Oh44Oz44OI5pys5paHXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudE51bWJlciDjgrPjg6HnlapcclxuICAgICAqIEBwYXJhbSBjdXN0b21BdHRyIOOCq+OCueOCv+ODoOWxnuaAp1xyXG4gICAgICogQHBhcmFtIHR5cGUgbmFrYS9zaGl0YS91ZeOBruOBhOOBmuOCjOOBi1xyXG4gICAgICogQHBhcmFtIHNpemUgYmlnL21lZGl1bS9sYXJnZeOBruOBhOOBmuOCjOOBi1xyXG4gICAgICogQHBhcmFtIHZwb3MgVlBPU1xyXG4gICAgICovXHJcbiAgICBhZGQodGV4dCwgY29tbWVudE51bWJlciwgY3VzdG9tQXR0ciwgdHlwZSA9ICduYWthJywgc2l6ZSA9ICdtZWRpdW0nLCBjYWxsQmFjaywgdnBvcykge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbW1lbnRzLmxlbmd0aCA+IDQwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY29uc3Qgb3ByaW9ucyA9IHtcclxuICAgICAgICAgICAgbW9kZTogdHlwZSxcclxuICAgICAgICAgICAgY29sb3I6IGN1c3RvbUF0dHIuZ2V0KCdjb2xvcicpIHx8ICcjZmZmJyxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGN1c3RvbUF0dHIuZ2V0KCdiY29sb3InKSB8fCAnIzAwMCcsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uLFxyXG4gICAgICAgICAgICBjdXN0b21BdHRyOiBjdXN0b21BdHRyLFxyXG4gICAgICAgICAgICBjb21tZW50U2l6ZTogc2l6ZSxcclxuICAgICAgICAgICAgbGluZWhlaWdodDogdGhpcy5saW5lSGVpZ2h0LFxyXG4gICAgICAgICAgICB2cG9zOiB2cG9zLFxyXG4gICAgICAgICAgICBmb250TmFtZTogY3VzdG9tQXR0ci5nZXQoJ2ZvbnROYW1lJyksXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IGN1c3RvbUF0dHIuZ2V0KCdvcGFjaXR5JyksXHJcbiAgICAgICAgICAgIGZ1bGw6IGN1c3RvbUF0dHIuZ2V0KCdmdWxsJyksXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgICAgICAgdGV4dDogdGV4dCxcclxuICAgICAgICAgICAgY3R4OiB0aGlzLmN0eCxcclxuICAgICAgICAgICAgY2FudmFzU2l6ZTogdGhpcy5jYW52YXNTaXplLFxyXG4gICAgICAgICAgICBjYW52YXNXaWR0aEZsYXNoOiB0aGlzLmNhbnZhc1dpZHRoRmxhc2gsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGlzLmZvbnJTaXplLFxyXG4gICAgICAgICAgICBmaXhlZEZvbnRTaXplOiB0aGlzLmZpeGVkRm9uclNpemUsXHJcbiAgICAgICAgICAgIGxpbmVzOiB0aGlzLmxpbmVzLFxyXG4gICAgICAgICAgICBvcHRpb246IG9wcmlvbnMsXHJcbiAgICAgICAgICAgIGNvbW1lbnROdW1iZXI6IGNvbW1lbnROdW1iZXIsXHJcbiAgICAgICAgICAgIG9uRGlzcG9zZWQ6IGNhbGxCYWNrLm9uRGlzcGFzZWQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBjb21tZW50T2JqID0gbmV3IENvbW1lbnRCYXNlKHBhcmFtKTtcclxuICAgICAgICBzd2l0Y2ggKGNvbW1lbnRPYmoudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICduYWthJzpcclxuICAgICAgICAgICAgICAgIHRoaXMubmFrYS5hZGQoY29tbWVudE9iaik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc2hpdGEnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwZW5kU2hpdGEoY29tbWVudE9iaik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAndWUnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwZW5kVWUoY29tbWVudE9iaik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOWHpueQhlxyXG4gICAgICogQHBhcmFtIGNvdW50ZXIg44Or44O844OX5Zue5pWwXHJcbiAgICAgKi9cclxuICAgIHRpY2soY291bnRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWcG9zID0gb3B0aW9ucyA/IG9wdGlvbnMudnBvcyA/IG9wdGlvbnMudnBvcyA6IDAgOiAwO1xyXG4gICAgICAgIGNvbnN0IGRvUmVuZGVyID0gb3B0aW9ucyA/IG9wdGlvbnMucmVuZGVyID8gdHJ1ZSA6IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5jb21tZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvUmVuZGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcihjb21tZW50KTtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudGljayhjdXJyZW50VnBvcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL25ha2HjgrPjg6FcclxuICAgICAgICBpZiAoZG9SZW5kZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5uYWthLmdldExpc3QoKS5mb3JFYWNoKGNvbW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyKGNvbW1lbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5uYWthLnRpY2soY3VycmVudFZwb3MpO1xyXG4gICAgICAgIHRoaXMuX2NsZWFuKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaPj+WGmeWHpueQhlxyXG4gICAgICogQHBhcmFtIGNvbW1lbnQg44Kz44Oh44Oz44OIXHJcbiAgICAgKi9cclxuICAgIF9yZW5kZXIoY29tbWVudCkge1xyXG4gICAgICAgIHRoaXMuY3R4LnRleHRCYXNlbGluZSA9ICd0b3AnO1xyXG4gICAgICAgIC8v5o+D44GI5L2N572uXHJcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY29tbWVudC50eXBlID09PSAnbmFrYScgfHwgY29tbWVudC5maXhlZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9ICdsZWZ0JztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gYCR7Y29tbWVudC5jb2xvcn1gO1xyXG4gICAgICAgIHRoaXMuY3R4LnNoYWRvd0NvbG9yID0gY29tbWVudC5ib3JkZXJDb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5zaGFkb3dPZmZzZXRYID0gMS41O1xyXG4gICAgICAgIHRoaXMuY3R4LnNoYWRvd09mZnNldFkgPSAxLjU7XHJcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBjb21tZW50Lm9wYWNpdHk7XHJcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IGBib2xkICR7Y29tbWVudC5mb250U2l6ZX1weCBcIiR7Y29tbWVudC5mb250TmFtZX1cImA7XHJcbiAgICAgICAgLy/mj4/lhpnmmYLjgavogIPmha7jgZnjgovmraPosqBcclxuICAgICAgICBjb25zdCBkZWx0YU1pbnVzT3JQbHVzID0gY29tbWVudC50eXBlID09PSAnc2hpdGEnID8gLTEgOiAxO1xyXG4gICAgICAgIGNvbnN0IGRlbHRhID0gZGVsdGFNaW51c09yUGx1cyAqIGNvbW1lbnQuZm9udFNpemU7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21tZW50LnRleHRGb3JSZW5kZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoY29tbWVudC50ZXh0Rm9yUmVuZGVyW2ldLCBjb21tZW50LmxlZnQsIGNvbW1lbnQudG9wICsgY29tbWVudC5vZmZzZXRZICsgZGVsdGEgKiBpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOCkuWJiumZpOOBmeOCi1xyXG4gICAgICogQHBhcmFtICBvcHRpb24g5pyA5Yid44Gu44Kz44Oh44Oz44OI44G+44Gf44Gv44CB5pyA5b6M44Gu44Kz44Oh44Oz44OI44Gu44G/44KS5YmK6Zmk44GZ44KL44GT44Go44GM5Ye65p2l44G+44GZ44CCXHJcbiAgICAgKi9cclxuICAgIGNsZWFyKG9wdGlvbikge1xyXG4gICAgICAgIHN3aXRjaCAob3B0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgdW5kZWZpbmVkOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4gY29tbWVudC5raWxsKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYWthID0gbmV3IE5ha2FMaW5lKHRoaXMubGluZXMuc21hbGwsIHRoaXMuY2FudmFzU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVlID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXRhID0gW107XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZmlyc3QnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29tbWVudHMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHNbMF0ua2lsbCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xhc3QnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29tbWVudHMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHNbdGhpcy5jb21tZW50cy5sZW5ndGggLSAxXS5raWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jphY3liJfjgYvjgonjg5Xjg6njgrDjgYzpmY3jgorjgabjgYTjgovjgrPjg6Hjg7Pjg4jjgpLliYrpmaRcclxuICAgICAqL1xyXG4gICAgX2NsZWFuKCkge1xyXG4gICAgICAgIHRoaXMuY29tbWVudHMgPSB0aGlzLmNvbW1lbnRzLmZpbHRlcihjb21tZXQgPT4gY29tbWV0LmFsaXZlKTtcclxuICAgICAgICAvL25ha2HjgrPjg6FcclxuICAgICAgICB0aGlzLm5ha2EuY2xlYW4oKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogc2hpdGHjgrPjg6Hjg7Pjg4jjgpLov73liqDjgZnjgotcclxuICAgICAqIEBwYXJhbSBjb21tZW50IOOCs+ODoeODs+ODiOOCquODluOCuOOCp+OCr+ODiFxyXG4gICAgICovXHJcbiAgICBfYXBwZW5kU2hpdGEoY29tbWVudCkge1xyXG4gICAgICAgIC8vc2hpdGHjgrPjg6Hjg7Pjg4hcclxuICAgICAgICBsZXQgYm90dG9tID0gdGhpcy5jYW52YXNTaXplLmhlaWdodDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQwOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hpdGFbaV0gJiYgdGhpcy5zaGl0YVtpXS5hbGl2ZSAmJiAhY29tbWVudC5maXhlZCkge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tIC09IHRoaXMuc2hpdGFbaV0ub3ZlcmFsbFNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5zaGl0YS5sZW5ndGggPT09IDA6XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuc2hpdGEubGVuZ3RoIDw9IGk6XHJcbiAgICAgICAgICAgICAgICBjYXNlICF0aGlzLnNoaXRhW2ldLmFsaXZlOlxyXG4gICAgICAgICAgICAgICAgLy/lm7rlrprjgrPjg6Hjg7Pjg4jjgafjgYLjgaPjgZ/loLTlkIhcclxuICAgICAgICAgICAgICAgIGNhc2UgY29tbWVudC5maXhlZDpcclxuICAgICAgICAgICAgICAgIC8v44Kz44Oh44Oz44OI44GM6KGo56S66ZmQ55WM44KS6LaF44GI44KL5aC05ZCIXHJcbiAgICAgICAgICAgICAgICBjYXNlIGJvdHRvbSAtIGNvbW1lbnQub3ZlcmFsbFNpemUgKyBjb21tZW50Lm9mZnNldFkgPCAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIGlmIChjb21tZW50LmZpeGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQgLSBjb21tZW50LmZvbnRTaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGJvdHRvbSAtIGNvbW1lbnQub3ZlcmFsbFNpemUgKyBjb21tZW50Lm9mZnNldFkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IE1hdGgucmFuZG9tKCkgKiAodGhpcy5jYW52YXNTaXplLmhlaWdodCAtIGNvbW1lbnQub3ZlcmFsbFNpemUgKyBjb21tZW50Lm9mZnNldFkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC50b3AgPSBib3R0b20gLSBjb21tZW50Lm92ZXJhbGxTaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgdGhpcy5zaGl0YVtpXSA9IGNvbW1lbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWVudHMucHVzaChjb21tZW50KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogdWXjgrPjg6Hjg7Pjg4jjgpLov73liqDjgZnjgotcclxuICAgICAqIEBwYXJhbSBjb21tZW50IOOCs+ODoeODs+ODiOOCquODluOCuOOCp+OCr+ODiFxyXG4gICAgICovXHJcbiAgICBfYXBwZW5kVWUoY29tbWVudCkge1xyXG4gICAgICAgIC8vc2hpdGHjgrPjg6Hjg7Pjg4hcclxuICAgICAgICBsZXQgdG9wID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQwOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudWVbaV0gJiYgdGhpcy51ZVtpXS5hbGl2ZSAmJiAhY29tbWVudC5maXhlZCkge1xyXG4gICAgICAgICAgICAgICAgdG9wICs9IHRoaXMudWVbaV0ub3ZlcmFsbFNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy51ZS5sZW5ndGggPT09IDA6XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMudWUubGVuZ3RoIDw9IGk6XHJcbiAgICAgICAgICAgICAgICBjYXNlICF0aGlzLnVlW2ldLmFsaXZlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBjb21tZW50LmZpeGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSB0b3AgKyBjb21tZW50Lm92ZXJhbGxTaXplICsgY29tbWVudC5vZmZzZXRZID4gdGhpcy5jYW52YXNTaXplLmhlaWdodDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICBpZiAoY29tbWVudC5maXhlZCkge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC50b3AgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRvcCArIGNvbW1lbnQub3ZlcmFsbFNpemUgKyBjb21tZW50Lm9mZnNldFkgPiB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IE1hdGgucmFuZG9tKCkgKiAodGhpcy5jYW52YXNTaXplLmhlaWdodCAtIGNvbW1lbnQub3ZlcmFsbFNpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC50b3AgPSB0b3A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICB0aGlzLnVlW2ldID0gY29tbWVudDtcclxuICAgICAgICAgICAgdGhpcy5jb21tZW50cy5wdXNoKGNvbW1lbnQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmjIflrprjgZfjgZ/kvY3nva7jgavlrZjlnKjjgZnjgovjgrPjg6Hjg7Pjg4jjga7phY3liJfjgpLlj5blvpfjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSB4IFjluqfmqJlcclxuICAgICAqIEBwYXJhbSB5IFnluqfmqJlcclxuICAgICAqL1xyXG4gICAgZ2V0KHgsIHkpIHtcclxuICAgICAgICBjb25zdCBjb21tZW50cyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IG5ha2EgPSB0aGlzLm5ha2EuZ2V0KHgsIHkpO1xyXG4gICAgICAgIGlmIChuYWthICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29tbWVudHMucHVzaChuYWthKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdWVzaGl0YSA9IHRoaXMuY29tbWVudHMuZmlsdGVyKGNvbW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBoYWxmID0gY29tbWVudC53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzWCA9IHggPiBjb21tZW50LmxlZnQgLSBoYWxmICYmIHggPCBjb21tZW50LmxlZnQgKyBoYWxmO1xyXG4gICAgICAgICAgICBjb25zdCBpc1kgPSB5ID4gY29tbWVudC50b3AgJiYgeSA8IGNvbW1lbnQudG9wICsgY29tbWVudC5vdmVyYWxsU2l6ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGlzWCAmJiBpc1k7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29tbWVudHMucHVzaCguLi51ZXNoaXRhKTtcclxuICAgICAgICByZXR1cm4gY29tbWVudHM7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIG5ha2HjgrPjg6Hjg7Pjg4hcclxuICovXHJcbmNsYXNzIE5ha2FMaW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKHNtYWxsTGluZXMsIHNpemUpIHtcclxuICAgICAgICAvL+mFjeWIl+WIneacn+WMllxyXG4gICAgICAgIHRoaXMuY29tbWVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLmxhc3RDb21tZW50U3RyZWFtID0gW107XHJcbiAgICAgICAgLy/phY3liJfplbdcclxuICAgICAgICB0aGlzLmFsbGluZXMgPSBzbWFsbExpbmVzO1xyXG4gICAgICAgIC8vY2FudmFz44K144Kk44K6XHJcbiAgICAgICAgdGhpcy5jYW52YXNTaXplID0gc2l6ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogbmFrYeOCs+ODoeODs+ODiOOCkui/veWKoOOBmeOCi1xyXG4gICAgICogQHBhcmFtIGNvbW1lbnQg44Kz44Oh44Oz44OIXHJcbiAgICAgKi9cclxuICAgIGFkZChjb21tZW50KSB7XHJcbiAgICAgICAgbGV0IHRvcCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFsbGluZXM7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gdGhpcy5sYXN0Q29tbWVudFN0cmVhbVtpXTtcclxuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAvL2nooYznm67jgavjgrPjg6Hjg7Pjg4jjgYznhKHjgYTloLTlkIhcclxuICAgICAgICAgICAgICAgIGNhc2UgKGxpbmUgPT09IHVuZGVmaW5lZCk6XHJcbiAgICAgICAgICAgICAgICAvL+WbuuWumuOCs+ODoeOBp+OBguOBo+OBn+WgtOWQiFxyXG4gICAgICAgICAgICAgICAgY2FzZSAoY29tbWVudC5maXhlZCk6XHJcbiAgICAgICAgICAgICAgICAvL+acgOe1gui/veWKoOOCs+ODoeODs+ODiOOBjOWFqOOBpuihqOekuuOBleOCjOOBpuOBhOOBpuOAgeOBquOBiuOBi+OBpOi/veOBhOOBpOOBi+OBquOBhOWgtOWQiFxyXG4gICAgICAgICAgICAgICAgY2FzZSAobGluZS5yZXZlYWwgPCAwICYmIGxpbmUubGlmZSA8IGNvbW1lbnQudG91Y2gpOlxyXG4gICAgICAgICAgICAgICAgLy/jgrPjg6Hjg7Pjg4jjga50b3DjgYxjYW52YXPjga7pq5jjgZXjgpLotoXjgYjjgabjgYTjgotcclxuICAgICAgICAgICAgICAgIGNhc2UgKHRvcCArIGNvbW1lbnQub3ZlcmFsbFNpemUgPiB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0KTpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8v44Gd44KM5Lul5aSW44Gv5qyh44Gu6KGM44KS56K66KqNXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRvcCArPSBsaW5lLm92ZXJhbGxTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgLy/luqfmqJnoqK3lrppcclxuICAgICAgICAgICAgaWYgKGNvbW1lbnQuZml4ZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0b3AgKyBjb21tZW50Lm92ZXJhbGxTaXplID4gdGhpcy5jYW52YXNTaXplLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgLy/lvL7luZXjg6Ljg7zjg4lcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLmNhbnZhc1NpemUuaGVpZ2h0IC0gY29tbWVudC5vdmVyYWxsU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IHRvcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnB1c2goY29tbWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENvbW1lbnRTdHJlYW1baV0gPSBjb21tZW50O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa1geOCjOOBn+OCs+ODoeODs+ODiOOCkuWJiumZpOOBmeOCi1xyXG4gICAgICovXHJcbiAgICBjbGVhbigpIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnRzID0gdGhpcy5jb21tZW50cy5maWx0ZXIoY29tbWVudCA9PiBjb21tZW50LmFsaXZlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5Yem55CGXHJcbiAgICAgKi9cclxuICAgIHRpY2sodnBvcykge1xyXG4gICAgICAgIHRoaXMuY29tbWVudHMuZm9yRWFjaChjb21tZW50ID0+IHtcclxuICAgICAgICAgICAgY29tbWVudC50aWNrKHZwb3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjga7jg6rjgrnjg4jjgpLlj5blvpfjgZnjgotcclxuICAgICAqL1xyXG4gICAgZ2V0TGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21tZW50cztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgKiBAcGFyYW0geCBY5bqn5qiZXHJcbiAgICAgKiBAcGFyYW0geSBZ5bqn5qiZXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBnZXQoeCwgeSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1lbnRzLmZpbmQoY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzWCA9IHggPiBjb21tZW50LmxlZnQgJiYgeCA8IGNvbW1lbnQubGVmdCArIGNvbW1lbnQud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzWSA9IHkgPiBjb21tZW50LnRvcCAmJiB5IDwgY29tbWVudC50b3AgKyBjb21tZW50Lm92ZXJhbGxTaXplO1xyXG4gICAgICAgICAgICBpZiAoaXNYICYmIGlzWSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvL+WumuaVsFxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBmcHM6IDYwLFxyXG4gICAgZHVyYXRpb246IDMsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjIsXHJcbiAgICBiaWdMaW5lczogOCxcclxuICAgIG1lZGl1bUxpbmVzOiAxMSxcclxuICAgIHNtYWxsTGluZXM6IDE2LFxyXG4gICAgZml4OiB7XHJcbiAgICAgICAgc21hbDogMzgsXHJcbiAgICAgICAgYmlnOiAxNixcclxuICAgICAgICBtZWRpdW06IDI1LFxyXG4gICAgfSxcclxuICAgIGRlZmF1bHRDb2xvcjogJyNmZmYnLFxyXG4gICAgZGVmYXVsdExheWVyOiAnYmFzZScsXHJcbiAgICBkZWZhdWx0Rm9udDogJ01TIFBHb3RoaWMnLFxyXG4gICAgb3BhY2l0eTogMSxcclxufTtcclxuIiwiZXhwb3J0IGNsYXNzIERhdGFVdGlscyB7XHJcbiAgICBzcGxpdHRlcih2YWx1ZSwgc3BsaXRCeSA9ICcsJykge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuc3BsaXQoc3BsaXRCeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxuICAgIC8vMOWfi+OCgVxyXG4gICAgcGFkZGluZyhudW0sIGRpZ2l0ID0gMiwgcGFkZFN0cmluZyA9ICcwJykge1xyXG4gICAgICAgIGlmIChudW0gPCAxMCAqKiBkaWdpdCkge1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW4gPSBudW0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgbGV0IHBhZGRlZCA9IG9yaWdpbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWdpdCAtIG9yaWdpbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcGFkZGVkID0gcGFkZFN0cmluZyArIHBhZGRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGFkZGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44ON44K544OI44GV44KM44Gf6YWN5YiX44KS6L+U44GX44G+44GZ44CCXHJcbiAgICAgKiBAcGFyYW0gbGVuIOmFjeWIl+mVt1xyXG4gICAgICovXHJcbiAgICBjcmVhdGVOZXN0ZWRBcnJheShsZW4pIHtcclxuICAgICAgICBjb25zdCBhcnIgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuICAgIGNyZWF0ZUFycmF5KGxlbikge1xyXG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgICAgIGFyci5sZW5ndGggPSBsZW47XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVlBPU+OBi+OCieaZgumWk+OCkuioiOeul+OBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIHZwb3MgVlBPU1xyXG4gICAgICovXHJcbiAgICBjYWxjVlBPUyh2cG9zKSB7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kID0gTWF0aC5mbG9vcih2cG9zIC8gMTAwKTtcclxuICAgICAgICBjb25zdCBtaW51dGUgPSBNYXRoLmZsb29yKHNlY29uZCAvIDYwKTtcclxuICAgICAgICBjb25zdCBleHRyYSA9IE1hdGguZmxvb3Ioc2Vjb25kICUgNjApO1xyXG4gICAgICAgIHJldHVybiB7IG1zOiB7IG1pbjogbWludXRlLCBzZWM6IGV4dHJhIH0sIHNlYzogc2Vjb25kIH07XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==