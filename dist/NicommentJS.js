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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ src_NicommentJS; });

// CONCATENATED MODULE: ./src/utils/DataUtils.ts
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

// CONCATENATED MODULE: ./src/module/config.ts
//定数
/* harmony default export */ var config = ({
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

// CONCATENATED MODULE: ./src/module/Comment.ts


//util
const datautl = new DataUtils();
//コメントオブジェクト
class Comment_CommentBase {
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
        this.duration = param.option.duration || config.duration;
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
        this.life = config.fps * this.duration;
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
        this.life = config.fps * this.duration;
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
        const commentObj = new Comment_CommentBase(param);
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

// CONCATENATED MODULE: ./env/DEB.js
/* harmony default export */ var DEB = ({
  virsion: 'v1.00',
  build: 'Debug',
  buildDate: '2020/08/15 08:15 Asia/Toyko'
});
// CONCATENATED MODULE: ./src/index.ts



/**
 * メインクラス
 */
class src_NicommentJS {
    /**
     *
     * @param id canvasのID
     * @param width canvasの幅
     * @param height canvasの高さ
     * @param option オプション
     */
    constructor(id, width, height, option) {
        if (false) {}
        else if (true) {
            Logger.write(`このバージョンはデバッグ版です。\n`
                + `version:${DEB.virsion}\n`
                + `buildDate:${"2020/7/15 9:56"}\n`
                + `build:${DEB.build}`);
        }
        //引数チェック
        this.checkArgs(id, width, height);
        //context
        this.ctx = this._getContext(id, width, height);
        //サイズ
        this.canvasSize = new Size({ height: height, width: width });
        //メタ情報
        this.meta = new Meta();
        //表示時間
        this.duration = option ? option.duration ? option.duration : config.duration : config.duration;
        //自動更新
        this.mainLayerName = option ? option.layerName ? option.layerName : config.defaultLayer : config.defaultLayer;
        //サイズ・フォント
        this.lineHeight = option ? option.lineheght ? option.lineheght : config.lineHeight : config.lineHeight; //表示時間
        this.lines = {
            big: option ? option.bigLines ? option.bigLines : config.bigLines : config.bigLines,
            medium: option ? option.mediumLines ? option.mediumLines : config.mediumLines : config.mediumLines,
            small: option ? option.smallLines ? option.smallLines : config.smallLines : config.smallLines
        };
        this.fixedLines = { big: config.fix.big, medium: config.fix.medium, small: config.fix.smal };
        this.fonrSize = this._getFontSize(height, this.lines); //fintSIze一覧
        this.fixedFonrSize = this._getFontSize(height, this.fixedLines);
        //レイヤー
        this.mainLayerName = option ? option.layerName ? option.layerName : config.defaultLayer : config.defaultLayer;
        this.layers = new Map();
        this.addLayer(this.mainLayerName);
        this.total = 0;
        this.run = true;
        this.isPlay = true;
        //自動更新フラグ
        this.autoTickDisabled = option ? option.autoTickDisabled ? option.autoTickDisabled : false : false;
        if (true) {
            Logger.write(`canvasID:${id}, width:${width}px, height:${height}px`);
            Logger.write('初期化が完了しました。');
        }
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
        const fontName = option ? option.fontName ? option.fontName : config.defaultFont : config.defaultFont;
        const opacity = option ? option.opacity ? option.opacity : config.opacity : config.opacity;
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
            this.layers.set(layerName, new Layer(this.ctx, this.canvasSize, this.lines, this.fonrSize, this.fixedFonrSize, this.duration, this.lineHeight));
        }
        if (true) {
            Logger.write(`レイヤー "${layerName}" を追加しました。`);
        }
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
        if (true) {
            Logger.write(`レイヤー "${layerName}" を削除しました。`);
        }
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


/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OaWNvbW1lbnRKUy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvLi9zcmMvdXRpbHMvRGF0YVV0aWxzLnRzIiwid2VicGFjazovL05pY29tbWVudEpTLy4vc3JjL21vZHVsZS9jb25maWcudHMiLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvLi9zcmMvbW9kdWxlL0NvbW1lbnQudHMiLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvLi9lbnYvREVCLmpzIiwid2VicGFjazovL05pY29tbWVudEpTLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbInZpcnNpb24iLCJidWlsZCIsImJ1aWxkRGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMkJBQTJCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU0sMEJBQTBCO0FBQ2hEO0FBQ0E7OztBQ2xEQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7OztBQ2pCNkM7QUFDVjtBQUNyQztBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ08sTUFBTSxtQkFBVztBQUN4QjtBQUNBLHNCQUFzQjtBQUN0Qix1QkFBdUI7QUFDdkIsc0JBQXNCO0FBQ3RCLHFCQUFxQjtBQUNyQix3QkFBd0I7QUFDeEIsdUJBQXVCO0FBQ3ZCLDJCQUEyQjtBQUMzQixzQ0FBc0M7QUFDdEMsa0RBQWtEO0FBQ2xEO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQSw4Q0FBOEM7QUFDOUMsNENBQTRDO0FBQzVDLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsTUFBYTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLDJDQUEyQztBQUMzQyxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsc0JBQXNCO0FBQ3RCLHFCQUFxQjtBQUNyQix1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE1BQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixNQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixLQUFLO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1CQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGNBQWM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCLE1BQU0saUJBQWlCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7QUNybkJjO0FBQ1ZBLFNBQU8sRUFBQyxPQURFO0FBRVZDLE9BQUssRUFBQyxPQUZJO0FBR1ZDLFdBQVMsRUFBQztBQUhBLENBQWQsRTs7QUNBK0M7QUFDSDtBQUNoQjtBQUM1QjtBQUNBO0FBQ0E7QUFDZSxNQUFNLGVBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksS0FBYyxFQUFFLEVBTW5CO0FBQ1QsaUJBQWlCLElBQVE7QUFDekI7QUFDQSw2QkFBNkIsR0FBTSxTQUFTO0FBQzVDLCtCQUErQixnQkFBVSxDQUFDO0FBQzFDLDJCQUEyQixHQUFNLE9BQU87QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLElBQUksRUFBRSwrQkFBK0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLE1BQWEsWUFBWSxNQUFhO0FBQzNHO0FBQ0EsNEVBQTRFLE1BQWEsZ0JBQWdCLE1BQWE7QUFDdEg7QUFDQSx5RUFBeUUsTUFBYSxjQUFjLE1BQWEsWUFBWTtBQUM3SDtBQUNBLDhEQUE4RCxNQUFhLFlBQVksTUFBYTtBQUNwRyx1RUFBdUUsTUFBYSxlQUFlLE1BQWE7QUFDaEgsb0VBQW9FLE1BQWEsY0FBYyxNQUFhO0FBQzVHO0FBQ0EsMkJBQTJCLE1BQU0sTUFBYSxrQkFBa0IsTUFBYSxvQkFBb0IsTUFBYTtBQUM5Ryw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBLDRFQUE0RSxNQUFhLGdCQUFnQixNQUFhO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxJQUFRO0FBQ3BCLHFDQUFxQyxHQUFHLFVBQVUsTUFBTSxhQUFhLE9BQU87QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLE1BQWEsZUFBZSxNQUFhO0FBQy9HLG1FQUFtRSxNQUFhLFdBQVcsTUFBYTtBQUN4RztBQUNBLG1GQUFtRixFQUFFLFVBQVU7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUseUJBQXlCO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsTUFBTTtBQUN2QyxrQ0FBa0MsT0FBTztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSx5Q0FBeUMsaUJBQWlCLEVBQUU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLEtBQUs7QUFDaEQ7QUFDQSxZQUFZLElBQVE7QUFDcEIsa0NBQWtDLFVBQVU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLElBQVE7QUFDcEIsa0NBQWtDLFVBQVU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxJQUFJO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxNQUFNO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxNQUFNO0FBQ2hEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDRDQUE0QyxHQUFHLGtCQUFrQixFQUFFO0FBQ25HO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxxQ0FBcUMsR0FBRyxpQ0FBaUM7QUFDcEgsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsK0JBQStCLEtBQUssa0JBQWtCLEVBQUU7QUFDeEY7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGdDQUFnQyxLQUFLLGtCQUFrQixFQUFFO0FBQ2xHLEtBQUs7QUFDTCIsImZpbGUiOiJOaWNvbW1lbnRKUy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk5pY29tbWVudEpTXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk5pY29tbWVudEpTXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGNsYXNzIERhdGFVdGlscyB7XHJcbiAgICBzcGxpdHRlcih2YWx1ZSwgc3BsaXRCeSA9ICcsJykge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuc3BsaXQoc3BsaXRCeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxuICAgIC8vMOWfi+OCgVxyXG4gICAgcGFkZGluZyhudW0sIGRpZ2l0ID0gMiwgcGFkZFN0cmluZyA9ICcwJykge1xyXG4gICAgICAgIGlmIChudW0gPCAxMCAqKiBkaWdpdCkge1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW4gPSBudW0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgbGV0IHBhZGRlZCA9IG9yaWdpbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWdpdCAtIG9yaWdpbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcGFkZGVkID0gcGFkZFN0cmluZyArIHBhZGRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGFkZGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44ON44K544OI44GV44KM44Gf6YWN5YiX44KS6L+U44GX44G+44GZ44CCXHJcbiAgICAgKiBAcGFyYW0gbGVuIOmFjeWIl+mVt1xyXG4gICAgICovXHJcbiAgICBjcmVhdGVOZXN0ZWRBcnJheShsZW4pIHtcclxuICAgICAgICBjb25zdCBhcnIgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuICAgIGNyZWF0ZUFycmF5KGxlbikge1xyXG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgICAgIGFyci5sZW5ndGggPSBsZW47XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVlBPU+OBi+OCieaZgumWk+OCkuioiOeul+OBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIHZwb3MgVlBPU1xyXG4gICAgICovXHJcbiAgICBjYWxjVlBPUyh2cG9zKSB7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kID0gTWF0aC5mbG9vcih2cG9zIC8gMTAwKTtcclxuICAgICAgICBjb25zdCBtaW51dGUgPSBNYXRoLmZsb29yKHNlY29uZCAvIDYwKTtcclxuICAgICAgICBjb25zdCBleHRyYSA9IE1hdGguZmxvb3Ioc2Vjb25kICUgNjApO1xyXG4gICAgICAgIHJldHVybiB7IG1zOiB7IG1pbjogbWludXRlLCBzZWM6IGV4dHJhIH0sIHNlYzogc2Vjb25kIH07XHJcbiAgICB9XHJcbn1cclxuIiwiLy/lrprmlbBcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZnBzOiA2MCxcclxuICAgIGR1cmF0aW9uOiAzLFxyXG4gICAgbGluZUhlaWdodDogMS4yLFxyXG4gICAgYmlnTGluZXM6IDgsXHJcbiAgICBtZWRpdW1MaW5lczogMTEsXHJcbiAgICBzbWFsbExpbmVzOiAxNixcclxuICAgIGZpeDoge1xyXG4gICAgICAgIHNtYWw6IDM4LFxyXG4gICAgICAgIGJpZzogMTYsXHJcbiAgICAgICAgbWVkaXVtOiAyNSxcclxuICAgIH0sXHJcbiAgICBkZWZhdWx0Q29sb3I6ICcjZmZmJyxcclxuICAgIGRlZmF1bHRMYXllcjogJ2Jhc2UnLFxyXG4gICAgZGVmYXVsdEZvbnQ6ICdNUyBQR290aGljJyxcclxuICAgIG9wYWNpdHk6IDEsXHJcbn07XHJcbiIsImltcG9ydCB7IERhdGFVdGlscyB9IGZyb20gJy4uL3V0aWxzL0RhdGFVdGlscyc7XHJcbmltcG9ydCBkZWZhdWx0Q29uZmlnIGZyb20gJy4vY29uZmlnJztcclxuLy91dGlsXHJcbmNvbnN0IGRhdGF1dGwgPSBuZXcgRGF0YVV0aWxzKCk7XHJcbi8v44Kz44Oh44Oz44OI44Kq44OW44K444Kn44Kv44OIXHJcbmV4cG9ydCBjbGFzcyBDb21tZW50QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbSkge1xyXG4gICAgICAgIHRoaXMubGlmZSA9IDA7IC8v5q6L44KK44Kz44Oe5pWwXHJcbiAgICAgICAgdGhpcy5kZWx0YSA9IDA7IC8vMeOCs+ODnuW9k+OBn+OCiuOBrljluqfmqJnjga7lpInph49cclxuICAgICAgICB0aGlzLmxlZnQgPSAwOyAvL1jluqfmqJlcclxuICAgICAgICB0aGlzLnRvcCA9IDA7IC8vWeW6p+aomSjljp/ngrnjga/lt6bkuIopXHJcbiAgICAgICAgdGhpcy5yZXZlYWwgPSAwOyAvL+OCs+ODoeODs+ODiOOBjOeUu+mdouWPs+OBi+OCieWujOWFqOOBq+mcsuWHuuOBmeOCi+OBvuOBp+OBruOCs+ODnuaVsFxyXG4gICAgICAgIHRoaXMudG91Y2ggPSAwOyAvL+OCs+ODoeODs+ODiOOBruW3puerr+OBjOeUu+mdouW3puOBq+WIsOmBlOOBmeOCi+OBvuOBp+OBruOCs+ODnuaVsFxyXG4gICAgICAgIHRoaXMuZml4ZWQgPSBmYWxzZTsgLy/lm7rlrprjg5Xjg6njgrBcclxuICAgICAgICB0aGlzLnR5cGUgPSBwYXJhbS5vcHRpb24ubW9kZTsgLy/jgr/jgqTjg5dcclxuICAgICAgICB0aGlzLmN1c3RvbUF0dHIgPSBwYXJhbS5vcHRpb24uY3VzdG9tQXR0cjsgLy/jgqvjgrnjgr/jg6DlsZ7mgKdcclxuICAgICAgICB0aGlzLm9yaWdpbmFsVGV4dCA9IHBhcmFtLnRleHQ7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGhpcy5fZm9ybWF0Q29tbWVudChwYXJhbS50ZXh0LCB0aGlzLnR5cGUpOyAvL+acrOaWh1xyXG4gICAgICAgIHRoaXMudGV4dEZvclJlbmRlciA9IHRoaXMuX2Zvcm1hdFJlbmRlckNvbW1lbnQodGhpcy50ZXh0KTtcclxuICAgICAgICB0aGlzLnRleHRMZW5ndGggPSBNYXRoLm1heCguLi50aGlzLnRleHQubWFwKHRleHQgPT4gdGV4dC5sZW5ndGgpKTtcclxuICAgICAgICB0aGlzLm1heExlbmd0aEluZGV4ID0gdGhpcy50ZXh0Lm1hcChjb21tZW50ID0+IGNvbW1lbnQubGVuZ3RoKS5pbmRleE9mKHRoaXMudGV4dExlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5jb21tZW50TnVtYmVyID0gcGFyYW0uY29tbWVudE51bWJlcjtcclxuICAgICAgICB0aGlzLmNvbG9yID0gcGFyYW0ub3B0aW9uLmNvbG9yOyAvL+iJslxyXG4gICAgICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBwYXJhbS5vcHRpb24uYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgdGhpcy5saW5lcyA9IHRoaXMuX2dldExpbmVzKHBhcmFtLm9wdGlvbi5jb21tZW50U2l6ZSwgcGFyYW0ubGluZXMpO1xyXG4gICAgICAgIHRoaXMuc2VsZkxpbmVzID0gdGhpcy50ZXh0Lmxlbmd0aDsgLy/ooYzmlbBcclxuICAgICAgICB0aGlzLmN0eCA9IHBhcmFtLmN0eDtcclxuICAgICAgICB0aGlzLmZvbnROYW1lID0gcGFyYW0ub3B0aW9uLmZvbnROYW1lOyAvL+ODleOCqeODs+ODiOWQjVxyXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IHBhcmFtLm9wdGlvbi5vcGFjaXR5OyAvL+mAj+mBjuW6plxyXG4gICAgICAgIHRoaXMuZnVsbCA9IHBhcmFtLm9wdGlvbi5mdWxsOyAvL+iHqOeVjOeCueODquOCteOCpOOCulxyXG4gICAgICAgIHRoaXMuY2FudmFzU2l6ZSA9IHBhcmFtLmNhbnZhc1NpemU7XHJcbiAgICAgICAgdGhpcy5jYW52YXNXaWR0aEZsYXNoID0gcGFyYW0uY2FudmFzV2lkdGhGbGFzaDtcclxuICAgICAgICAvL+WbuuWumuODleODqeOCsFxyXG4gICAgICAgIGlmICh0aGlzLnRleHQubGVuZ3RoID49IHRoaXMubGluZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5maXhlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICAvL3Zwb3Pjg7vooajnpLrmmYLplpNcclxuICAgICAgICB0aGlzLnZwb3MgPSBwYXJhbS5vcHRpb24udnBvcztcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gcGFyYW0ub3B0aW9uLmR1cmF0aW9uIHx8IGRlZmF1bHRDb25maWcuZHVyYXRpb247XHJcbiAgICAgICAgLy/jg5Xjgqnjg7Pjg4jplqLkv4JcclxuICAgICAgICB0aGlzLmZvbnRTaXplU3RyaW5nID0gcGFyYW0ub3B0aW9uLmNvbW1lbnRTaXplO1xyXG4gICAgICAgIFt0aGlzLmZvbnRTaXplLCB0aGlzLndpZHRoLCB0aGlzLm9mZnNldFldID0gdGhpcy5fZ2V0Rm9udCh0aGlzLnRleHRbdGhpcy5tYXhMZW5ndGhJbmRleF0sIHRoaXMuY2FudmFzU2l6ZSwgdGhpcy5jYW52YXNXaWR0aEZsYXNoLCBwYXJhbS5vcHRpb24uY29tbWVudFNpemUsIHBhcmFtLmZvbnRTaXplLCBwYXJhbS5maXhlZEZvbnRTaXplLCB0aGlzLnR5cGUsIHBhcmFtLm9wdGlvbi5saW5laGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmZvbnRTaXplU3RyaW5nID0gcGFyYW0ub3B0aW9uLmNvbW1lbnRTaXplO1xyXG4gICAgICAgIHRoaXMub3ZlcmFsbFNpemUgPSB0aGlzLmZvbnRTaXplICogdGhpcy5zZWxmTGluZXM7XHJcbiAgICAgICAgdGhpcy5hbGl2ZSA9IHRydWU7IC8v55Sf5a2Y44OV44Op44KwXHJcbiAgICAgICAgdGhpcy5vbkRpc3Bvc2VkID0gcGFyYW0ub25EaXNwb3NlZDsgLy/jgrPjg7zjg6vjg5Djg4Pjgq9cclxuICAgICAgICB0aGlzLl9zZXQoKTsgLy/jgrvjg4Pjg4jlrp/ooYxcclxuICAgIH1cclxuICAgIC8v5bGe5oCn5Y+W5b6XXHJcbiAgICBnZXRQcm9wKGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1c3RvbUF0dHIuZ2V0KGtleSk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOWHpueQhlxyXG4gICAgICovXHJcbiAgICB0aWNrKHZwb3MpIHtcclxuICAgICAgICBpZiAodnBvcyA+PSB0aGlzLnZwb3MgKyB0aGlzLmR1cmF0aW9uICogMTAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpZmUtLTtcclxuICAgICAgICAvL25ha2HjgrPjg6Hjg7Pjg4jjga7loLTlkIhcclxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnbmFrYScpIHtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0IC09IHRoaXMuZGVsdGE7XHJcbiAgICAgICAgICAgIHRoaXMucmV2ZWFsLS07XHJcbiAgICAgICAgICAgIHRoaXMudG91Y2gtLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubGlmZSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5raWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjga7nlJ/lrZjjg5Xjg6njgrDjgpLlvLfliLbnmoTjgavpmY3jgo3jgZfjgb7jgZlcclxuICAgICAqL1xyXG4gICAga2lsbCgpIHtcclxuICAgICAgICB0aGlzLmFsaXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbkRpc3Bvc2VkKCk7XHJcbiAgICB9XHJcbiAgICAvL+OCu+ODg+ODiFxyXG4gICAgX3NldCgpIHtcclxuICAgICAgICB0aGlzLmxpZmUgPSAwOyAvL+aui+OCiuOCs+ODnuaVsFxyXG4gICAgICAgIHRoaXMubGVmdCA9IDA7IC8vWOW6p+aomVxyXG4gICAgICAgIHRoaXMudG9wID0gMDsgLy9Z5bqn5qiZKOWOn+eCueOBr+W3puS4iilcclxuICAgICAgICB0aGlzLmRlbHRhID0gMDsgLy8x44Kz44Oe5b2T44Gf44KK44GuWOW6p+aomeOBruWkiemHj1xyXG4gICAgICAgIHRoaXMucmV2ZWFsID0gMDsgLy/jgrPjg6Hjg7Pjg4jjgYznlLvpnaLlj7PjgYvjgonlrozlhajjgavpnLLlh7rjgZnjgovjgb7jgafjga7jgrPjg57mlbBcclxuICAgICAgICB0aGlzLnRvdWNoID0gMDsgLy/jgrPjg6Hjg7Pjg4jjga7lt6bnq6/jgYznlLvpnaLlt6bjgavliLDpgZTjgZnjgovjgb7jgafjga7jgrPjg57mlbBcclxuICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICduYWthJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldE5ha2EoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzaGl0YSc6XHJcbiAgICAgICAgICAgIGNhc2UgJ3VlJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldFNoaXRhVWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL25ha2HjgrPjg6Hjg7Pjg4joqK3lrppcclxuICAgIF9zZXROYWthKCkge1xyXG4gICAgICAgIHRoaXMubGlmZSA9IGRlZmF1bHRDb25maWcuZnBzICogdGhpcy5kdXJhdGlvbjtcclxuICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLmNhbnZhc1NpemUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5kZWx0YSA9ICh0aGlzLmNhbnZhc1NpemUud2lkdGggKyB0aGlzLndpZHRoKSAvIHRoaXMubGlmZTtcclxuICAgICAgICB0aGlzLnJldmVhbCA9IHRoaXMud2lkdGggLyB0aGlzLmRlbHRhO1xyXG4gICAgICAgIHRoaXMudG91Y2ggPSB0aGlzLmNhbnZhc1NpemUud2lkdGggLyB0aGlzLmRlbHRhO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBzaGl044O7dWXjgrPjg6Hjg7Pjg4jjgpLoqK3lrprjgZnjgotcclxuICAgICAqIEBwYXJhbSB3aWR0aCBjYW52YXPjga7mqKrluYVcclxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiDjgrPjg6Hjg7Pjg4jooajnpLrmmYLplpNcclxuICAgICAqL1xyXG4gICAgX3NldFNoaXRhVWUoKSB7XHJcbiAgICAgICAgdGhpcy5saWZlID0gZGVmYXVsdENvbmZpZy5mcHMgKiB0aGlzLmR1cmF0aW9uO1xyXG4gICAgICAgIGlmICh0aGlzLmZpeGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCA9ICh0aGlzLmNhbnZhc1NpemUud2lkdGggLSB0aGlzLndpZHRoKSAvIDI7XHJcbiAgICAgICAgICAgIC8vdGhpcy5sZWZ0ID0gdGhpcy5jYW52YXNTaXplLndpZHRoIC8gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IHRoaXMuY2FudmFzU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9mb25044KS5rG65a6a44GZ44KLXHJcbiAgICBfZ2V0Rm9udCh0ZXh0LCBjYW52YXNTaXplLCBmbGFzaFdpZHRoLCBjb21tZW50U2l6ZSwgZm9udFNpemUsIGZpeGVkRm9udFNpemUsIHR5cGUsIGxpbmVIZWlnaHQpIHtcclxuICAgICAgICBsZXQgb3JpZ2luYWxGb250ID0gdGhpcy5fZ2V0U2l6ZShjb21tZW50U2l6ZSwgZm9udFNpemUpO1xyXG4gICAgICAgIGxldCBmb250ID0gb3JpZ2luYWxGb250O1xyXG4gICAgICAgIC8v44O75pS56KGM44Oq44K144Kk44K6XHJcbiAgICAgICAgLy9vdmVyYWxsU2l6ZeOBq+ebuOW9k+OBmeOCi+mrmOOBleOBjOOAgeaPj+WGmemgmOWfn+OBrjEvM+OCkuS4iuWbnuOCi+WgtOWQiOOBq+OAgVxyXG4gICAgICAgIC8v44Oq44K144Kk44K644KS6KGM44GG44CCXHJcbiAgICAgICAgaWYgKG9yaWdpbmFsRm9udCAqIHRoaXMuc2VsZkxpbmVzID4gY2FudmFzU2l6ZS5oZWlnaHQgLyAzKSB7XHJcbiAgICAgICAgICAgIGZvbnQgPSB0aGlzLl9nZXRTaXplKGNvbW1lbnRTaXplLCBmaXhlZEZvbnRTaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IGAke2ZvbnR9cHggXCJZdSBHb3RoaWNcImA7XHJcbiAgICAgICAgbGV0IGNvbVdpZHRoID0gdGhpcy5jdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XHJcbiAgICAgICAgLy/jg7voh6jnlYzluYXjg6rjgrXjgqTjgrpcclxuICAgICAgICAvL+OCs+ODoeODs+ODiOOBruacgOWkp+W5heOBjOaPj+WGmemgmOWfn+OCkuS4iuWbnuOCi+WgtOWQiOOBq+OAgeaPj+WGmemgmOWfn+OBq+WPjuOBvuOCi+OCiOOBhuOBq+ODquOCteOCpOOCuuOBmeOCi1xyXG4gICAgICAgIGlmIChjb21XaWR0aCA+IHRoaXMuY2FudmFzU2l6ZS53aWR0aCAmJiB0eXBlICE9PSAnbmFrYScgJiYgIXRoaXMuZnVsbCkge1xyXG4gICAgICAgICAgICBmb250ID0gdGhpcy5fbW9kU2l6ZShvcmlnaW5hbEZvbnQsIGNvbVdpZHRoLCB0aGlzLmNhbnZhc1dpZHRoRmxhc2gpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gYCR7Zm9udH1weCBcIll1IEdvdGhpY1wiYDtcclxuICAgICAgICAgICAgY29tV2lkdGggPSB0aGlzLmN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IHR5cGUgPT09ICdzaGl0YScgPyBmb250ICogKGxpbmVIZWlnaHQgLSAxKSAqIC0xIDogZm9udCAqIChsaW5lSGVpZ2h0IC0gMSk7XHJcbiAgICAgICAgcmV0dXJuIFtmb250LCBjb21XaWR0aCwgb2Zmc2V0WV07XHJcbiAgICB9XHJcbiAgICAvL+ODleOCqeODs+ODiOOCteOCpOOCuuS/ruato1xyXG4gICAgX21vZFNpemUoZm9udCwgd2lkdGgsIGNhbnZhc1dpZHRoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZvbnQgKiBjYW52YXNXaWR0aCAvIHdpZHRoO1xyXG4gICAgfVxyXG4gICAgLy/mlLnooYzjg6rjgrXjgqTjgrpcclxuICAgIC8vZm9udFNpemXlj5blvpdcclxuICAgIF9nZXRTaXplKGNvbW1lbnRTaXplLCBmb250U2l6ZSkge1xyXG4gICAgICAgIHN3aXRjaCAoY29tbWVudFNpemUpIHtcclxuICAgICAgICAgICAgY2FzZSAnYmlnJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb250U2l6ZS5iaWc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc21hbGwnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbnRTaXplLnNtYWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9udFNpemUubWVkaXVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6KGM5pWw44KS5rGC44KB44KLXHJcbiAgICAgKiBAcGFyYW0gc2l6ZSBiaWcvc21hbGwvbWVkaXVt44Gu44GE44Ga44KM44GLXHJcbiAgICAgKiBAcGFyYW0gYWxsTGluZXMgY29tbWVudExpbmVz5Z6L44Gu44Kq44OW44K444Kn44Kv44OIKOOBneOCjOOBnuOCjOOBruOCteOCpOOCuuOBq+OBpOOBhOOBpuihjOaVsOOCkuihqOOBmSlcclxuICAgICAqL1xyXG4gICAgX2dldExpbmVzKHNpemUsIGFsbExpbmVzKSB7XHJcbiAgICAgICAgc3dpdGNoIChzaXplKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JpZyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxsTGluZXMuYmlnO1xyXG4gICAgICAgICAgICBjYXNlICdtZWRpdW0nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbExpbmVzLm1lZGl1bTtcclxuICAgICAgICAgICAgY2FzZSAnc21hbGwnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbExpbmVzLnNtYWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI44KS5pW05b2i44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gb3JpZ2luIOOCs+ODoeODs+ODiFxyXG4gICAgICogQHBhcmFtIGNvbW1lbnRQb3Mg44Kz44Oh44Oz44OI44Gu44K/44Kk44OXXHJcbiAgICAgKi9cclxuICAgIF9mb3JtYXRDb21tZW50KG9yaWdpbiwgY29tbWVudFBvcykge1xyXG4gICAgICAgIGxldCBmb3JtYXRlZCA9IGRhdGF1dGwuc3BsaXR0ZXIob3JpZ2luLCAnXFxuJyk7XHJcbiAgICAgICAgZm9ybWF0ZWQgPSB0aGlzLl9kZWxldGVCbGFuayhmb3JtYXRlZCk7XHJcbiAgICAgICAgZm9ybWF0ZWQgPSB0aGlzLl9kZWxldGVGaXJzdEFuZGxhc3RCbGFuayhmb3JtYXRlZCk7XHJcbiAgICAgICAgZm9ybWF0ZWQgPSB0aGlzLl9zb3J0QnlUeXBlKGZvcm1hdGVkLCBjb21tZW50UG9zKTtcclxuICAgICAgICByZXR1cm4gZm9ybWF0ZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaPj+WGmeeUqOOCs+ODoeODs+ODiOOCkuaVtOW9ouOBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIG9yaWdpbiDjgrPjg6Hjg7Pjg4hcclxuICAgICAqIEBwYXJhbSBjb21tZW50UG9zIOOCs+ODoeODs+ODiOOBruOCv+OCpOODl1xyXG4gICAgICovXHJcbiAgICBfZm9ybWF0UmVuZGVyQ29tbWVudChvcmlnaW4pIHtcclxuICAgICAgICBsZXQgZm9ybWF0ZWQgPSBbLi4ub3JpZ2luXTtcclxuICAgICAgICBmb3JtYXRlZCA9IHRoaXMuX2RlbGV0ZUJsYW5rTGluZUZyb21FbmQob3JpZ2luKTtcclxuICAgICAgICByZXR1cm4gZm9ybWF0ZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOBi+OCiTPlm57ku6XkuIrpgKPntprjgZnjgovmlLnooYzjgpLliYrpmaTjgZfjgb7jgZnjgIJcclxuICAgICAqIEBwYXJhbSBjb21tZW50cyDjgrPjg6Hjg7Pjg4jjga7jg6rjgrnjg4hcclxuICAgICAqL1xyXG4gICAgX2RlbGV0ZUJsYW5rKGNvbW1lbnRMaXN0KSB7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICBjb25zdCBkZWxldGVkID0gW107XHJcbiAgICAgICAgLy9mb3IuLi5pbuODq+ODvOODl+OBp+WbnuOBmSBcclxuICAgICAgICBmb3IgKGNvbnN0IHRleHQgb2YgY29tbWVudExpc3QpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNCbGFuayA9ICF0ZXh0O1xyXG4gICAgICAgICAgICBpZiAoaXNCbGFuaykge1xyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY291bnQgPCAzKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVkLnB1c2godGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOacgOWIneOBqOacgOW+jOOBruepuueZveihjOOCkuWJiumZpOOBl+OBvuOBmeOAglxyXG4gICAgICogQHBhcmFtIGNvbW1lbnRzIOOCs+ODoeODs+ODiOOBruODquOCueODiFxyXG4gICAgICovXHJcbiAgICBfZGVsZXRlRmlyc3RBbmRsYXN0QmxhbmsoY29tbWVudHMpIHtcclxuICAgICAgICBjb25zdCBkZWxldGVkID0gWy4uLmNvbW1lbnRzXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbW1lbnQgb2YgY29tbWVudHMpIHtcclxuICAgICAgICAgICAgaWYgKCFjb21tZW50KSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVkLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+W+jOOCjeOBi+OCiVxyXG4gICAgICAgIGNvbnN0IHJldmVyc2VkID0gWy4uLmRlbGV0ZWRdLnJldmVyc2UoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbW1lbnQgb2YgcmV2ZXJzZWQpIHtcclxuICAgICAgICAgICAgaWYgKCFjb21tZW50KSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVkLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOBruS9jee9ruOBq+OCiOOBo+OBpuOCveODvOODiOOBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIGNvbW1lbnRzIOOCs+ODoeODs+ODiOOBruODquOCueODiFxyXG4gICAgICogQHBhcmFtIHR5cGUg44Kz44Oh44Oz44OI44Gu5L2N572uXHJcbiAgICAgKi9cclxuICAgIF9zb3J0QnlUeXBlKGNvbW1lbnRzLCB0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGUgPT09ICdzaGl0YScgPyBjb21tZW50cy5yZXZlcnNlKCkgOiBjb21tZW50cztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog56m66KGM44KS5YmK6Zmk44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudHMg44Kz44Oh44Oz44OIXHJcbiAgICAgKi9cclxuICAgIF9kZWxldGVCbGFua0xpbmVGcm9tRW5kKGNvbW1lbnRzKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybWF0ZWQgPSBbLi4uY29tbWVudHNdO1xyXG4gICAgICAgIGNvbnN0IHJldmVyc2VkID0gWy4uLmNvbW1lbnRzXS5yZXZlcnNlKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIHJldmVyc2VkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQmxhbmsgPSAvXlxccyskLy50ZXN0KGxpbmUpIHx8IGxpbmUubGVuZ3RoID09PSAwO1xyXG4gICAgICAgICAgICBpZiAoaXNCbGFuaykge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0ZWQucG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jdXN0b21BdHRyLmdldCgnY29tbWVudE51bWJlcicpID09PSA5NTU2MDEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZm9ybWF0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZm9ybWF0ZWQ7XHJcbiAgICB9XHJcbn1cclxuLy/luqfmqJnmg4XloLFcclxuZXhwb3J0IGNsYXNzIFBvaW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcykge1xyXG4gICAgICAgIHRoaXMueCA9IHBvcy54O1xyXG4gICAgICAgIHRoaXMueSA9IHBvcy55O1xyXG4gICAgfVxyXG59XHJcbi8vaGVpZ2h0OndpZHRoXHJcbmV4cG9ydCBjbGFzcyBTaXplIHtcclxuICAgIGNvbnN0cnVjdG9yKHNpemUpIHtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHNpemUuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBzaXplLndpZHRoO1xyXG4gICAgfVxyXG59XHJcbi8v44Os44Kk44Ok44O844Kv44Op44K5XHJcbmV4cG9ydCBjbGFzcyBMYXllciB7XHJcbiAgICAvL+WIneacn+WMllxyXG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXNTaXplLCBsaW5lcywgY29tbWVudFNpemUsIGNvbW1lbnRTaXplRml4ZWQsIGR1cmF0aW9uLCBsaW5lSGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5vbkRpc2Fwb3NlZCA9ICgpID0+IHsgfTtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLmNhbnZhc1NpemUgPSBjYW52YXNTaXplO1xyXG4gICAgICAgIHRoaXMuY2FudmFzV2lkdGhGbGFzaCA9IGNhbnZhc1NpemUuaGVpZ2h0IC8gMyAqIDQ7XHJcbiAgICAgICAgdGhpcy5saW5lSGVpZ2h0ID0gbGluZUhlaWdodDtcclxuICAgICAgICB0aGlzLmxpbmVzID0gbGluZXM7XHJcbiAgICAgICAgdGhpcy5mb25yU2l6ZSA9IGNvbW1lbnRTaXplO1xyXG4gICAgICAgIHRoaXMuZml4ZWRGb25yU2l6ZSA9IGNvbW1lbnRTaXplRml4ZWQ7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMuY29tbWVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLm1heGxpbmVzID0gbGluZXMuc21hbGw7XHJcbiAgICAgICAgdGhpcy5uYWthID0gbmV3IE5ha2FMaW5lKGxpbmVzLnNtYWxsLCBjYW52YXNTaXplKTtcclxuICAgICAgICB0aGlzLnNoaXRhID0gW107XHJcbiAgICAgICAgdGhpcy51ZSA9IFtdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjg6zjgqTjg6Tjg7zjgavjgrPjg6Hjg7Pjg4jjgpLov73liqDjgZnjgotcclxuICAgICAqIEBwYXJhbSB0ZXh0IOOCs+ODoeODs+ODiOacrOaWh1xyXG4gICAgICogQHBhcmFtIGNvbW1lbnROdW1iZXIg44Kz44Oh55WqXHJcbiAgICAgKiBAcGFyYW0gY3VzdG9tQXR0ciDjgqvjgrnjgr/jg6DlsZ7mgKdcclxuICAgICAqIEBwYXJhbSB0eXBlIG5ha2Evc2hpdGEvdWXjga7jgYTjgZrjgozjgYtcclxuICAgICAqIEBwYXJhbSBzaXplIGJpZy9tZWRpdW0vbGFyZ2Xjga7jgYTjgZrjgozjgYtcclxuICAgICAqIEBwYXJhbSB2cG9zIFZQT1NcclxuICAgICAqL1xyXG4gICAgYWRkKHRleHQsIGNvbW1lbnROdW1iZXIsIGN1c3RvbUF0dHIsIHR5cGUgPSAnbmFrYScsIHNpemUgPSAnbWVkaXVtJywgY2FsbEJhY2ssIHZwb3MpIHtcclxuICAgICAgICBpZiAodGhpcy5jb21tZW50cy5sZW5ndGggPiAyMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IG9wcmlvbnMgPSB7XHJcbiAgICAgICAgICAgIG1vZGU6IHR5cGUsXHJcbiAgICAgICAgICAgIGNvbG9yOiBjdXN0b21BdHRyLmdldCgnY29sb3InKSB8fCAnI2ZmZicsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjdXN0b21BdHRyLmdldCgnYmNvbG9yJykgfHwgJyMwMDAnLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbixcclxuICAgICAgICAgICAgY3VzdG9tQXR0cjogY3VzdG9tQXR0cixcclxuICAgICAgICAgICAgY29tbWVudFNpemU6IHNpemUsXHJcbiAgICAgICAgICAgIGxpbmVoZWlnaHQ6IHRoaXMubGluZUhlaWdodCxcclxuICAgICAgICAgICAgdnBvczogdnBvcyxcclxuICAgICAgICAgICAgZm9udE5hbWU6IGN1c3RvbUF0dHIuZ2V0KCdmb250TmFtZScpLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiBjdXN0b21BdHRyLmdldCgnb3BhY2l0eScpLFxyXG4gICAgICAgICAgICBmdWxsOiBjdXN0b21BdHRyLmdldCgnZnVsbCcpLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgICAgICAgIHRleHQ6IHRleHQsXHJcbiAgICAgICAgICAgIGN0eDogdGhpcy5jdHgsXHJcbiAgICAgICAgICAgIGNhbnZhc1NpemU6IHRoaXMuY2FudmFzU2l6ZSxcclxuICAgICAgICAgICAgY2FudmFzV2lkdGhGbGFzaDogdGhpcy5jYW52YXNXaWR0aEZsYXNoLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogdGhpcy5mb25yU2l6ZSxcclxuICAgICAgICAgICAgZml4ZWRGb250U2l6ZTogdGhpcy5maXhlZEZvbnJTaXplLFxyXG4gICAgICAgICAgICBsaW5lczogdGhpcy5saW5lcyxcclxuICAgICAgICAgICAgb3B0aW9uOiBvcHJpb25zLFxyXG4gICAgICAgICAgICBjb21tZW50TnVtYmVyOiBjb21tZW50TnVtYmVyLFxyXG4gICAgICAgICAgICBvbkRpc3Bvc2VkOiBjYWxsQmFjay5vbkRpc3Bhc2VkLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgY29tbWVudE9iaiA9IG5ldyBDb21tZW50QmFzZShwYXJhbSk7XHJcbiAgICAgICAgc3dpdGNoIChjb21tZW50T2JqLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnbmFrYSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ha2EuYWRkKGNvbW1lbnRPYmopO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NoaXRhJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FwcGVuZFNoaXRhKGNvbW1lbnRPYmopO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VlJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FwcGVuZFVlKGNvbW1lbnRPYmopO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDlh6bnkIZcclxuICAgICAqIEBwYXJhbSBjb3VudGVyIOODq+ODvOODl+WbnuaVsFxyXG4gICAgICovXHJcbiAgICB0aWNrKGNvdW50ZXIsIHZwb3MsIHJlbmRlcikge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWcG9zID0gdnBvcyA/IHZwb3MgOiAwO1xyXG4gICAgICAgIGNvbnN0IGRvUmVuZGVyID0gcmVuZGVyID09PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5jb21tZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvUmVuZGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcihjb21tZW50KTtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudGljayhjdXJyZW50VnBvcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL25ha2HjgrPjg6FcclxuICAgICAgICBpZiAoZG9SZW5kZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5uYWthLmdldExpc3QoKS5mb3JFYWNoKGNvbW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyKGNvbW1lbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5uYWthLnRpY2soY3VycmVudFZwb3MpO1xyXG4gICAgICAgIHRoaXMuX2NsZWFuKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaPj+WGmeWHpueQhlxyXG4gICAgICogQHBhcmFtIGNvbW1lbnQg44Kz44Oh44Oz44OIXHJcbiAgICAgKi9cclxuICAgIF9yZW5kZXIoY29tbWVudCkge1xyXG4gICAgICAgIHRoaXMuY3R4LnRleHRCYXNlbGluZSA9ICd0b3AnO1xyXG4gICAgICAgIC8v5o+D44GI5L2N572uXHJcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY29tbWVudC50eXBlID09PSAnbmFrYScgfHwgY29tbWVudC5maXhlZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9ICdsZWZ0JztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gYCR7Y29tbWVudC5jb2xvcn1gO1xyXG4gICAgICAgIHRoaXMuY3R4LnNoYWRvd0NvbG9yID0gY29tbWVudC5ib3JkZXJDb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5zaGFkb3dPZmZzZXRYID0gMS41O1xyXG4gICAgICAgIHRoaXMuY3R4LnNoYWRvd09mZnNldFkgPSAxLjU7XHJcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBjb21tZW50Lm9wYWNpdHk7XHJcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IGBib2xkICR7Y29tbWVudC5mb250U2l6ZX1weCBcIiR7Y29tbWVudC5mb250TmFtZX1cImA7XHJcbiAgICAgICAgLy/mj4/lhpnmmYLjgavogIPmha7jgZnjgovmraPosqBcclxuICAgICAgICBjb25zdCBkZWx0YU1pbnVzT3JQbHVzID0gY29tbWVudC50eXBlID09PSAnc2hpdGEnID8gLTEgOiAxO1xyXG4gICAgICAgIGNvbW1lbnQudGV4dEZvclJlbmRlci5mb3JFYWNoKCh0ZXh0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh0ZXh0LCBjb21tZW50LmxlZnQsIGNvbW1lbnQudG9wICsgY29tbWVudC5mb250U2l6ZSAqIGluZGV4ICogZGVsdGFNaW51c09yUGx1cyArIGNvbW1lbnQub2Zmc2V0WSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOCkuWJiumZpOOBmeOCi1xyXG4gICAgICogQHBhcmFtICBvcHRpb24g5pyA5Yid44Gu44Kz44Oh44Oz44OI44G+44Gf44Gv44CB5pyA5b6M44Gu44Kz44Oh44Oz44OI44Gu44G/44KS5YmK6Zmk44GZ44KL44GT44Go44GM5Ye65p2l44G+44GZ44CCXHJcbiAgICAgKi9cclxuICAgIGNsZWFyKG9wdGlvbikge1xyXG4gICAgICAgIHN3aXRjaCAob3B0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgdW5kZWZpbmVkOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4gY29tbWVudC5raWxsKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYWthID0gbmV3IE5ha2FMaW5lKHRoaXMubGluZXMuc21hbGwsIHRoaXMuY2FudmFzU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVlID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXRhID0gW107XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZmlyc3QnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29tbWVudHMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHNbMF0ua2lsbCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xhc3QnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29tbWVudHMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHNbdGhpcy5jb21tZW50cy5sZW5ndGggLSAxXS5raWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jphY3liJfjgYvjgonjg5Xjg6njgrDjgYzpmY3jgorjgabjgYTjgovjgrPjg6Hjg7Pjg4jjgpLliYrpmaRcclxuICAgICAqL1xyXG4gICAgX2NsZWFuKCkge1xyXG4gICAgICAgIHRoaXMuY29tbWVudHMgPSB0aGlzLmNvbW1lbnRzLmZpbHRlcihjb21tZXQgPT4gY29tbWV0LmFsaXZlKTtcclxuICAgICAgICAvL25ha2HjgrPjg6FcclxuICAgICAgICB0aGlzLm5ha2EuY2xlYW4oKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogc2hpdGHjgrPjg6Hjg7Pjg4jjgpLov73liqDjgZnjgotcclxuICAgICAqIEBwYXJhbSBjb21tZW50IOOCs+ODoeODs+ODiOOCquODluOCuOOCp+OCr+ODiFxyXG4gICAgICovXHJcbiAgICBfYXBwZW5kU2hpdGEoY29tbWVudCkge1xyXG4gICAgICAgIC8vc2hpdGHjgrPjg6Hjg7Pjg4hcclxuICAgICAgICBsZXQgYm90dG9tID0gdGhpcy5jYW52YXNTaXplLmhlaWdodDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF4bGluZXM7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zaGl0YVtpXSAmJiAhY29tbWVudC5maXhlZCkge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tIC09IHRoaXMuc2hpdGFbaV0ub3ZlcmFsbFNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5zaGl0YS5sZW5ndGggPT09IDA6XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuc2hpdGEubGVuZ3RoIDw9IGk6XHJcbiAgICAgICAgICAgICAgICBjYXNlICF0aGlzLnNoaXRhW2ldLmFsaXZlOlxyXG4gICAgICAgICAgICAgICAgLy/lm7rlrprjgrPjg6Hjg7Pjg4jjgafjgYLjgaPjgZ/loLTlkIhcclxuICAgICAgICAgICAgICAgIGNhc2UgY29tbWVudC5maXhlZDpcclxuICAgICAgICAgICAgICAgIC8v44Kz44Oh44Oz44OI44GM6KGo56S66ZmQ55WM44KS6LaF44GI44KL5aC05ZCIXHJcbiAgICAgICAgICAgICAgICBjYXNlIGJvdHRvbSAtIGNvbW1lbnQub3ZlcmFsbFNpemUgKyBjb21tZW50Lm9mZnNldFkgPCAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIGlmIChjb21tZW50LmZpeGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQgLSBjb21tZW50LmZvbnRTaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGJvdHRvbSAtIGNvbW1lbnQub3ZlcmFsbFNpemUgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IE1hdGgucmFuZG9tKCkgKiAodGhpcy5jYW52YXNTaXplLmhlaWdodCAtIGNvbW1lbnQub3ZlcmFsbFNpemUgKyBjb21tZW50Lm9mZnNldFkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC50b3AgPSBib3R0b20gLSBjb21tZW50Lm92ZXJhbGxTaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgdGhpcy5zaGl0YVtpXSA9IGNvbW1lbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWVudHMucHVzaChjb21tZW50KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogc2hpdGHjgrPjg6Hjg7Pjg4jjgpLov73liqDjgZnjgotcclxuICAgICAqIEBwYXJhbSBjb21tZW50IOOCs+ODoeODs+ODiOOCquODluOCuOOCp+OCr+ODiFxyXG4gICAgICovXHJcbiAgICBfYXBwZW5kVWUoY29tbWVudCkge1xyXG4gICAgICAgIC8vc2hpdGHjgrPjg6Hjg7Pjg4hcclxuICAgICAgICBsZXQgdG9wID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF4bGluZXM7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51ZVtpXSAmJiAhY29tbWVudC5maXhlZCkge1xyXG4gICAgICAgICAgICAgICAgdG9wICs9IHRoaXMudWVbaV0ub3ZlcmFsbFNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy51ZS5sZW5ndGggPT09IDA6XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMudWUubGVuZ3RoIDw9IGk6XHJcbiAgICAgICAgICAgICAgICBjYXNlICF0aGlzLnVlW2ldLmFsaXZlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBjb21tZW50LmZpeGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSB0b3AgKyBjb21tZW50Lm92ZXJhbGxTaXplID4gdGhpcy5jYW52YXNTaXplLmhlaWdodDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICBpZiAoY29tbWVudC5maXhlZCkge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC50b3AgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudWVbaV0pIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLmNhbnZhc1NpemUuaGVpZ2h0IC0gY29tbWVudC5vdmVyYWxsU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IHRvcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIHRoaXMudWVbaV0gPSBjb21tZW50O1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnB1c2goY29tbWVudCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaMh+WumuOBl+OBn+S9jee9ruOBq+WtmOWcqOOBmeOCi+OCs+ODoeODs+ODiOOCkuWPluW+l+OBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIHggWOW6p+aomVxyXG4gICAgICogQHBhcmFtIHkgWeW6p+aomVxyXG4gICAgICovXHJcbiAgICBnZXQoeCwgeSkge1xyXG4gICAgICAgIGNvbnN0IG5ha2EgPSB0aGlzLm5ha2EuZ2V0KHgsIHkpO1xyXG4gICAgICAgIGlmIChuYWthICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ha2E7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21tZW50cy5maW5kKGNvbW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFsZiA9IGNvbW1lbnQud2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNYID0geCA+IGNvbW1lbnQubGVmdCAtIGhhbGYgJiYgeCA8IGNvbW1lbnQubGVmdCArIGhhbGY7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1kgPSB5ID4gY29tbWVudC50b3AgJiYgeSA8IGNvbW1lbnQudG9wICsgY29tbWVudC5vdmVyYWxsU2l6ZTtcclxuICAgICAgICAgICAgICAgIGlmIChpc1ggJiYgaXNZKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIG5ha2HjgrPjg6Hjg7Pjg4hcclxuICovXHJcbmNsYXNzIE5ha2FMaW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKHNtYWxsTGluZXMsIHNpemUpIHtcclxuICAgICAgICAvL+mFjeWIl+WIneacn+WMllxyXG4gICAgICAgIHRoaXMuY29tbWVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLmxhc3RDb21tZW50U3RyZWFtID0gW107XHJcbiAgICAgICAgLy/phY3liJfplbdcclxuICAgICAgICB0aGlzLmFsbGluZXMgPSBzbWFsbExpbmVzO1xyXG4gICAgICAgIC8vY2FudmFz44K144Kk44K6XHJcbiAgICAgICAgdGhpcy5jYW52YXNTaXplID0gc2l6ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogbmFrYeOCs+ODoeODs+ODiOOCkui/veWKoOOBmeOCi1xyXG4gICAgICogQHBhcmFtIGNvbW1lbnQg44Kz44Oh44Oz44OIXHJcbiAgICAgKi9cclxuICAgIGFkZChjb21tZW50KSB7XHJcbiAgICAgICAgbGV0IHRvcCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFsbGluZXM7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gdGhpcy5sYXN0Q29tbWVudFN0cmVhbVtpXTtcclxuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAvL2nooYznm67jgavjgrPjg6Hjg7Pjg4jjgYznhKHjgYTloLTlkIhcclxuICAgICAgICAgICAgICAgIGNhc2UgKGxpbmUgPT09IHVuZGVmaW5lZCk6XHJcbiAgICAgICAgICAgICAgICAvL+WbuuWumuOCs+ODoeOBp+OBguOBo+OBn+WgtOWQiFxyXG4gICAgICAgICAgICAgICAgY2FzZSAoY29tbWVudC5maXhlZCk6XHJcbiAgICAgICAgICAgICAgICAvL+acgOe1gui/veWKoOOCs+ODoeODs+ODiOOBjOWFqOOBpuihqOekuuOBleOCjOOBpuOBhOOBpuOAgeOBquOBiuOBi+OBpOi/veOBhOOBpOOBi+OBquOBhOWgtOWQiFxyXG4gICAgICAgICAgICAgICAgY2FzZSAobGluZS5yZXZlYWwgPCAwICYmIGxpbmUubGlmZSA8IGNvbW1lbnQudG91Y2gpOlxyXG4gICAgICAgICAgICAgICAgLy/jgrPjg6Hjg7Pjg4jjga50b3DjgYxjYW52YXPjga7pq5jjgZXjgpLotoXjgYjjgabjgYTjgotcclxuICAgICAgICAgICAgICAgIGNhc2UgKHRvcCArIGNvbW1lbnQub3ZlcmFsbFNpemUgPiB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0KTpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8v44Gd44KM5Lul5aSW44Gv5qyh44Gu6KGM44KS56K66KqNXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRvcCArPSBsaW5lLm92ZXJhbGxTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgLy/luqfmqJnoqK3lrppcclxuICAgICAgICAgICAgaWYgKGNvbW1lbnQuZml4ZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0b3AgKyBjb21tZW50Lm92ZXJhbGxTaXplID4gdGhpcy5jYW52YXNTaXplLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgLy/lvL7luZXjg6Ljg7zjg4lcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLmNhbnZhc1NpemUuaGVpZ2h0IC0gY29tbWVudC5vdmVyYWxsU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IHRvcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnB1c2goY29tbWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENvbW1lbnRTdHJlYW1baV0gPSBjb21tZW50O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa1geOCjOOBn+OCs+ODoeODs+ODiOOCkuWJiumZpOOBmeOCi1xyXG4gICAgICovXHJcbiAgICBjbGVhbigpIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnRzID0gdGhpcy5jb21tZW50cy5maWx0ZXIoY29tbWVudCA9PiBjb21tZW50LmFsaXZlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5Yem55CGXHJcbiAgICAgKi9cclxuICAgIHRpY2sodnBvcykge1xyXG4gICAgICAgIHRoaXMuY29tbWVudHMuZm9yRWFjaChjb21tZW50ID0+IHtcclxuICAgICAgICAgICAgY29tbWVudC50aWNrKHZwb3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjga7jg6rjgrnjg4jjgpLlj5blvpfjgZnjgotcclxuICAgICAqL1xyXG4gICAgZ2V0TGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21tZW50cztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgKiBAcGFyYW0geCBY5bqn5qiZXHJcbiAgICAgKiBAcGFyYW0geSBZ5bqn5qiZXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBnZXQoeCwgeSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1lbnRzLmZpbmQoY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzWCA9IHggPiBjb21tZW50LmxlZnQgJiYgeCA8IGNvbW1lbnQubGVmdCArIGNvbW1lbnQud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzWSA9IHkgPiBjb21tZW50LnRvcCAmJiB5IDwgY29tbWVudC50b3AgKyBjb21tZW50Lm92ZXJhbGxTaXplO1xyXG4gICAgICAgICAgICBpZiAoaXNYICYmIGlzWSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdHtcclxuICAgIHZpcnNpb246J3YxLjAwJyxcclxuICAgIGJ1aWxkOidEZWJ1ZycsXHJcbiAgICBidWlsZERhdGU6JzIwMjAvMDgvMTUgMDg6MTUgQXNpYS9Ub3lrbycsXHJcbn0iLCJpbXBvcnQgeyBTaXplLCBMYXllciB9IGZyb20gJy4vbW9kdWxlL0NvbW1lbnQnO1xyXG5pbXBvcnQgZGVmYXVsdENvbmZpZyBmcm9tICcuL21vZHVsZS9jb25maWcnO1xyXG5pbXBvcnQgQ29uZmlnIGZyb20gJ3N5c0Vudic7XHJcbi8qKlxyXG4gKiDjg6HjgqTjg7Pjgq/jg6njgrlcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5pY29tbWVudEpTIHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpZCBjYW52YXPjga5JRFxyXG4gICAgICogQHBhcmFtIHdpZHRoIGNhbnZhc+OBruW5hVxyXG4gICAgICogQHBhcmFtIGhlaWdodCBjYW52YXPjga7pq5jjgZVcclxuICAgICAqIEBwYXJhbSBvcHRpb24g44Kq44OX44K344On44OzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGlkLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb24pIHtcclxuICAgICAgICBpZiAoSVNfREVWRUxPUE1FTlQpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLndyaXRlKCfjgZPjga7jg5Djg7zjgrjjg6fjg7Pjga/plovnmbrniYjjga7jgZ/jgoHjgIHkuI3lronlrprjgarmjJnli5XjgpLjgajjgovloLTlkIjjgYzjgYLjgorjgb7jgZnjgIJcXG4nXHJcbiAgICAgICAgICAgICAgICArIGB2ZXJzaW9uOiR7Q29uZmlnLnZpcnNpb259XFxuYFxyXG4gICAgICAgICAgICAgICAgKyBgYnVpbGREYXRlOiR7QlVJTERfREFURX1cXG5gXHJcbiAgICAgICAgICAgICAgICArIGBidWlsZDoke0NvbmZpZy5idWlsZH1gXHJcbiAgICAgICAgICAgICAgICArIGBidWcgcmVwb3J0Omh0dHBzOi8vZ2l0aHViLmNvbS9IYXlhby1IL25pY29tbWVudC1qcy9pc3N1ZXNgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoSVNfREVCVUcpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLndyaXRlKGDjgZPjga7jg5Djg7zjgrjjg6fjg7Pjga/jg4fjg5Djg4PjgrDniYjjgafjgZnjgIJcXG5gXHJcbiAgICAgICAgICAgICAgICArIGB2ZXJzaW9uOiR7Q29uZmlnLnZpcnNpb259XFxuYFxyXG4gICAgICAgICAgICAgICAgKyBgYnVpbGREYXRlOiR7QlVJTERfREFURX1cXG5gXHJcbiAgICAgICAgICAgICAgICArIGBidWlsZDoke0NvbmZpZy5idWlsZH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lvJXmlbDjg4Hjgqfjg4Pjgq9cclxuICAgICAgICB0aGlzLmNoZWNrQXJncyhpZCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgLy9jb250ZXh0XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLl9nZXRDb250ZXh0KGlkLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAvL+OCteOCpOOCulxyXG4gICAgICAgIHRoaXMuY2FudmFzU2l6ZSA9IG5ldyBTaXplKHsgaGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aCB9KTtcclxuICAgICAgICAvL+ODoeOCv+aDheWgsVxyXG4gICAgICAgIHRoaXMubWV0YSA9IG5ldyBNZXRhKCk7XHJcbiAgICAgICAgLy/ooajnpLrmmYLplpNcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gb3B0aW9uID8gb3B0aW9uLmR1cmF0aW9uID8gb3B0aW9uLmR1cmF0aW9uIDogZGVmYXVsdENvbmZpZy5kdXJhdGlvbiA6IGRlZmF1bHRDb25maWcuZHVyYXRpb247XHJcbiAgICAgICAgLy/oh6rli5Xmm7TmlrBcclxuICAgICAgICB0aGlzLm1haW5MYXllck5hbWUgPSBvcHRpb24gPyBvcHRpb24ubGF5ZXJOYW1lID8gb3B0aW9uLmxheWVyTmFtZSA6IGRlZmF1bHRDb25maWcuZGVmYXVsdExheWVyIDogZGVmYXVsdENvbmZpZy5kZWZhdWx0TGF5ZXI7XHJcbiAgICAgICAgLy/jgrXjgqTjgrrjg7vjg5Xjgqnjg7Pjg4hcclxuICAgICAgICB0aGlzLmxpbmVIZWlnaHQgPSBvcHRpb24gPyBvcHRpb24ubGluZWhlZ2h0ID8gb3B0aW9uLmxpbmVoZWdodCA6IGRlZmF1bHRDb25maWcubGluZUhlaWdodCA6IGRlZmF1bHRDb25maWcubGluZUhlaWdodDsgLy/ooajnpLrmmYLplpNcclxuICAgICAgICB0aGlzLmxpbmVzID0ge1xyXG4gICAgICAgICAgICBiaWc6IG9wdGlvbiA/IG9wdGlvbi5iaWdMaW5lcyA/IG9wdGlvbi5iaWdMaW5lcyA6IGRlZmF1bHRDb25maWcuYmlnTGluZXMgOiBkZWZhdWx0Q29uZmlnLmJpZ0xpbmVzLFxyXG4gICAgICAgICAgICBtZWRpdW06IG9wdGlvbiA/IG9wdGlvbi5tZWRpdW1MaW5lcyA/IG9wdGlvbi5tZWRpdW1MaW5lcyA6IGRlZmF1bHRDb25maWcubWVkaXVtTGluZXMgOiBkZWZhdWx0Q29uZmlnLm1lZGl1bUxpbmVzLFxyXG4gICAgICAgICAgICBzbWFsbDogb3B0aW9uID8gb3B0aW9uLnNtYWxsTGluZXMgPyBvcHRpb24uc21hbGxMaW5lcyA6IGRlZmF1bHRDb25maWcuc21hbGxMaW5lcyA6IGRlZmF1bHRDb25maWcuc21hbGxMaW5lc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5maXhlZExpbmVzID0geyBiaWc6IGRlZmF1bHRDb25maWcuZml4LmJpZywgbWVkaXVtOiBkZWZhdWx0Q29uZmlnLmZpeC5tZWRpdW0sIHNtYWxsOiBkZWZhdWx0Q29uZmlnLmZpeC5zbWFsIH07XHJcbiAgICAgICAgdGhpcy5mb25yU2l6ZSA9IHRoaXMuX2dldEZvbnRTaXplKGhlaWdodCwgdGhpcy5saW5lcyk7IC8vZmludFNJemXkuIDopqdcclxuICAgICAgICB0aGlzLmZpeGVkRm9uclNpemUgPSB0aGlzLl9nZXRGb250U2l6ZShoZWlnaHQsIHRoaXMuZml4ZWRMaW5lcyk7XHJcbiAgICAgICAgLy/jg6zjgqTjg6Tjg7xcclxuICAgICAgICB0aGlzLm1haW5MYXllck5hbWUgPSBvcHRpb24gPyBvcHRpb24ubGF5ZXJOYW1lID8gb3B0aW9uLmxheWVyTmFtZSA6IGRlZmF1bHRDb25maWcuZGVmYXVsdExheWVyIDogZGVmYXVsdENvbmZpZy5kZWZhdWx0TGF5ZXI7XHJcbiAgICAgICAgdGhpcy5sYXllcnMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMYXllcih0aGlzLm1haW5MYXllck5hbWUpO1xyXG4gICAgICAgIHRoaXMudG90YWwgPSAwO1xyXG4gICAgICAgIHRoaXMucnVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzUGxheSA9IHRydWU7XHJcbiAgICAgICAgLy/oh6rli5Xmm7TmlrDjg5Xjg6njgrBcclxuICAgICAgICB0aGlzLmF1dG9UaWNrRGlzYWJsZWQgPSBvcHRpb24gPyBvcHRpb24uYXV0b1RpY2tEaXNhYmxlZCA/IG9wdGlvbi5hdXRvVGlja0Rpc2FibGVkIDogZmFsc2UgOiBmYWxzZTtcclxuICAgICAgICBpZiAoSVNfREVCVUcpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLndyaXRlKGBjYW52YXNJRDoke2lkfSwgd2lkdGg6JHt3aWR0aH1weCwgaGVpZ2h0OiR7aGVpZ2h0fXB4YCk7XHJcbiAgICAgICAgICAgIExvZ2dlci53cml0ZSgn5Yid5pyf5YyW44GM5a6M5LqG44GX44G+44GX44Gf44CCJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5hdXRvVGlja0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci53cml0ZSgn5pu05paw5Yem55CG44KS6ZaL5aeL44GX44G+44GZ44CCJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGljaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOW8leaVsOODgeOCp+ODg+OCr1xyXG4gICAgICogQHBhcmFtIGlkIGlkXHJcbiAgICAgKiBAcGFyYW0gd2lkdGggd2lkdGhcclxuICAgICAqIEBwYXJhbSBoZWlnaHQgaGVpZ2h0XHJcbiAgICAgKi9cclxuICAgIGNoZWNrQXJncyhpZCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIGlmICghaWQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5BUkdVTUVOVFMuTk9UX0VYSVNULklEKTtcclxuICAgICAgICBpZiAoIXdpZHRoKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuX19JTklUX18uQVJHVU1FTlRTLk5PVF9FWElTVC5XSURUSCk7XHJcbiAgICAgICAgaWYgKCFoZWlnaHQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5BUkdVTUVOVFMuTk9UX0VYSVNULkhFSUdIVCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5BUkdVTUVOVFMuTmFOLldJRFRIKHdpZHRoKSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBoZWlnaHQgIT09ICdudW1iZXInKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuX19JTklUX18uQVJHVU1FTlRTLk5hTi5IRUlHSFQoaGVpZ2h0KSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOCkui/veWKoOOBmeOCi1xyXG4gICAgICogQHBhcmFtIHRleHQg6KGo56S644GZ44KL44Kz44Oh44Oz44OIXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9u44CA44Kq44OX44K344On44Oz44CCO1xyXG4gICAgICovXHJcbiAgICBzZW5kKHRleHQsIG9wdGlvbikge1xyXG4gICAgICAgIGxldCBjdXN0b21BdHRyID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGNvbnN0IGxheWVyID0gb3B0aW9uID8gb3B0aW9uLmxheWVyID8gb3B0aW9uLmxheWVyIDogdGhpcy5tYWluTGF5ZXJOYW1lIDogdGhpcy5tYWluTGF5ZXJOYW1lO1xyXG4gICAgICAgIGNvbnN0IGNvbVR5cGUgPSBvcHRpb24gPyBvcHRpb24udHlwZSA/IG9wdGlvbi50eXBlIDogJ25ha2EnIDogJ25ha2EnO1xyXG4gICAgICAgIGNvbnN0IGNvbVNpemUgPSBvcHRpb24gPyBvcHRpb24uc2l6ZSA/IG9wdGlvbi5zaXplIDogJ21lZGl1bScgOiAnbWVkaXVtJztcclxuICAgICAgICBjb25zdCBjb2xvciA9IG9wdGlvbiA/IG9wdGlvbi5jb2xvciA/IG9wdGlvbi5jb2xvciA6ICcjZmZmJyA6ICcjZmZmJztcclxuICAgICAgICBjb25zdCBiY29sb3IgPSB0aGlzLmdldEJjb2xvcihjb2xvcik7XHJcbiAgICAgICAgY29uc3QgdnBvcyA9IG9wdGlvbiA/IG9wdGlvbi52cG9zID8gb3B0aW9uLnZwb3MgOiAwIDogMDtcclxuICAgICAgICBjb25zdCBmb250TmFtZSA9IG9wdGlvbiA/IG9wdGlvbi5mb250TmFtZSA/IG9wdGlvbi5mb250TmFtZSA6IGRlZmF1bHRDb25maWcuZGVmYXVsdEZvbnQgOiBkZWZhdWx0Q29uZmlnLmRlZmF1bHRGb250O1xyXG4gICAgICAgIGNvbnN0IG9wYWNpdHkgPSBvcHRpb24gPyBvcHRpb24ub3BhY2l0eSA/IG9wdGlvbi5vcGFjaXR5IDogZGVmYXVsdENvbmZpZy5vcGFjaXR5IDogZGVmYXVsdENvbmZpZy5vcGFjaXR5O1xyXG4gICAgICAgIGNvbnN0IGZ1bGwgPSBvcHRpb24gPyBvcHRpb24uZnVsbCA/IG9wdGlvbi5mdWxsIDogZmFsc2UgOiBmYWxzZTtcclxuICAgICAgICBjb25zdCBvbkRpc3Bvc2VkID0gb3B0aW9uID8gb3B0aW9uLm9uRGlzcG9zZWQgPyBvcHRpb24ub25EaXNwb3NlZCA6ICgpID0+IHsgfSA6ICgpID0+IHsgfTtcclxuICAgICAgICB0aGlzLnRvdGFsKys7XHJcbiAgICAgICAgaWYgKG9wdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb24uY3VzdG9tQXR0ciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjdXN0b21BdHRyID0gdGhpcy5fZ2V0QXR0cihvcHRpb24uY3VzdG9tQXR0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY3VzdG9tQXR0ci5zZXQoJ2NvbG9yJywgY29sb3IpO1xyXG4gICAgICAgIGN1c3RvbUF0dHIuc2V0KCdiY29sb3InLCBiY29sb3IpO1xyXG4gICAgICAgIGN1c3RvbUF0dHIuc2V0KCdmb250TmFtZScsIGZvbnROYW1lKTtcclxuICAgICAgICBjdXN0b21BdHRyLnNldCgnb3BhY2l0eScsIG9wYWNpdHkpO1xyXG4gICAgICAgIGN1c3RvbUF0dHIuc2V0KCdmdWxsJywgZnVsbCk7XHJcbiAgICAgICAgY29uc3QgbGF5ZXJPYmogPSB0aGlzLmxheWVycy5nZXQobGF5ZXIpO1xyXG4gICAgICAgIGlmIChsYXllck9iaiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxheWVyT2JqLmFkZCh0ZXh0LCB0aGlzLnRvdGFsLCBjdXN0b21BdHRyLCBjb21UeXBlLCBjb21TaXplLCB7IG9uRGlzcGFzZWQ6IG9uRGlzcG9zZWQgfSwgdnBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuTEFZRVIuTEFZRVJfRE9FU19OT1RfRVhJU1QobGF5ZXIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOS4gOaZguWBnOatolxyXG4gICAgICovXHJcbiAgICBwYXVzZSgpIHtcclxuICAgICAgICB0aGlzLmlzUGxheSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlho3nlJ9cclxuICAgICAqL1xyXG4gICAgcGxheSgpIHtcclxuICAgICAgICB0aGlzLmlzUGxheSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOCkuWJiumZpOOBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIGxheWVyIOODrOOCpOODpOODvFxyXG4gICAgICovXHJcbiAgICBjbGVhcihsYXllcikge1xyXG4gICAgICAgIGlmIChsYXllcikge1xyXG4gICAgICAgICAgICBjb25zdCBsYXllck9iaiA9IHRoaXMubGF5ZXJzLmdldChsYXllcik7XHJcbiAgICAgICAgICAgIGlmIChsYXllck9iaiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBsYXllck9iai5jbGVhcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLkxBWUVSLkxBWUVSX0RPRVNfTk9UX0VYSVNUKGxheWVyKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGF5ZXIuY2xlYXIoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlhajjgabjga7lh6bnkIbjgpLntYLkuobjgZfjgb7jgZlcclxuICAgICAqL1xyXG4gICAgZGlzcG9zZSgpIHtcclxuICAgICAgICB0aGlzLnJ1biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNQbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGxheWVyLmNsZWFyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzU2l6ZS53aWR0aCwgdGhpcy5jYW52YXNTaXplLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5bGe5oCn44KS5Y+W5b6X44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gY3VzdG9tQXR0ciDjgqvjgrnjgr/jg6DlsZ7mgKdcclxuICAgICAqL1xyXG4gICAgX2dldEF0dHIoY3VzdG9tQXR0cikge1xyXG4gICAgICAgIGNvbnN0IG1hcG9iaiA9IG5ldyBNYXAoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhjdXN0b21BdHRyKSkge1xyXG4gICAgICAgICAgICBtYXBvYmouc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWFwb2JqO1xyXG4gICAgfVxyXG4gICAgX2dldEZvbnRTaXplKGhlaWdodCwgbGluZXMpIHtcclxuICAgICAgICBjb25zdCBiaWcgPSBoZWlnaHQgLyBsaW5lcy5iaWc7XHJcbiAgICAgICAgY29uc3QgbWVkaXVtID0gaGVpZ2h0IC8gbGluZXMubWVkaXVtO1xyXG4gICAgICAgIGNvbnN0IHNtYWxsID0gaGVpZ2h0IC8gbGluZXMuc21hbGw7XHJcbiAgICAgICAgcmV0dXJuIHsgYmlnOiBiaWcsIG1lZGl1bTogbWVkaXVtLCBzbWFsbDogc21hbGwgfTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogY2FudmFz44Kz44Oz44OG44Kt44K544OI44KS5Y+W5b6X44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gaWQgSURcclxuICAgICAqIEBwYXJhbSB3aWR0aCDmqKrluYVcclxuICAgICAqIEBwYXJhbSBoZWlnaHQg6auY44GVXHJcbiAgICAgKi9cclxuICAgIF9nZXRDb250ZXh0KGlkLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgY29uc3QgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIGlmICghZWxtKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5FTEVNRU5ULk5PVF9FWElTVChpZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWxtLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICAgICAgZWxtLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgIGVsbS5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcclxuICAgICAgICAgICAgZWxtLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XHJcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IGVsbS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICBpZiAoY3R4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3R4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOODoeOCpOODs+ODq+ODvOODl1xyXG4gICAgICovXHJcbiAgICB0aWNrKHZwb3MsIHJlbmRlcikge1xyXG4gICAgICAgIGlmICh0aGlzLm1ldGEuZ2V0Q291bnQoKSAlIDEyMCA9PT0gMCkge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdoZWxsbyEnKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGlyKHRoaXMubGF5ZXJzWzBdLmdldFN0YXRlKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzUGxheSkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNTaXplLndpZHRoLCB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgICAgICBsYXllci50aWNrKHRoaXMubWV0YS5nZXRDb3VudCgpLCB2cG9zLCByZW5kZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5tZXRhLmxvb3AoKTsgLy/jgqTjg7Pjgq/jg6rjg6Hjg7Pjg4hcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucnVuICYmICF0aGlzLmF1dG9UaWNrRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHsgdGhpcy50aWNrKHZwb3MpOyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDnuIHlj5bjgoroibLjgpLlj5blvpfjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBjb2xvciDoibJcclxuICAgICAqL1xyXG4gICAgZ2V0QmNvbG9yKGNvbG9yKSB7XHJcbiAgICAgICAgc3dpdGNoIChjb2xvcikge1xyXG4gICAgICAgICAgICBjYXNlICdibGFjayc6XHJcbiAgICAgICAgICAgIGNhc2UgJyMwMDAnOlxyXG4gICAgICAgICAgICBjYXNlICcjMDAwMDAwJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnI2ZmZic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnIzAwMCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmjIflrprjgZfjgZ/kvY3nva7jgavlrZjlnKjjgZnjgovjgrPjg6Hjg7Pjg4jjgpLlj5blvpfjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSB4IFjluqfmqJlcclxuICAgICAqIEBwYXJhbSB5IFnluqfmqJlcclxuICAgICAqL1xyXG4gICAgZ2V0KHgsIHkpIHtcclxuICAgICAgICBsZXQgY29tbWVudCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgY29tbWVudCA9IGxheWVyLmdldCh4LCB5KTtcclxuICAgICAgICAgICAgaWYgKGNvbW1lbnQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbW1lbnQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOODrOOCpOODpOODvOOCkui/veWKoOOBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIGxheWVyTmFtZSDjg6zjgqTjg6Tjg7zlkI1cclxuICAgICAqL1xyXG4gICAgYWRkTGF5ZXIobGF5ZXJOYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGF5ZXJzLmhhcyhsYXllck5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5MQVlFUi5EVVBMSUNBVElPTihsYXllck5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXJzLnNldChsYXllck5hbWUsIG5ldyBMYXllcih0aGlzLmN0eCwgdGhpcy5jYW52YXNTaXplLCB0aGlzLmxpbmVzLCB0aGlzLmZvbnJTaXplLCB0aGlzLmZpeGVkRm9uclNpemUsIHRoaXMuZHVyYXRpb24sIHRoaXMubGluZUhlaWdodCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSVNfREVCVUcpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLndyaXRlKGDjg6zjgqTjg6Tjg7wgXCIke2xheWVyTmFtZX1cIiDjgpLov73liqDjgZfjgb7jgZfjgZ/jgIJgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOODrOOCpOODpOODvOOCkuWJiumZpOOBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIGxheWVyTmFtZSDjg6zjgqTjg6Tjg7zlkI1cclxuICAgICAqL1xyXG4gICAgcmVtb3ZlTGF5ZXIobGF5ZXJOYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGF5ZXJzLmhhcyhsYXllck5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5MQVlFUi5EVVBMSUNBVElPTihsYXllck5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXJzLmRlbGV0ZShsYXllck5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSVNfREVCVUcpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLndyaXRlKGDjg6zjgqTjg6Tjg7wgXCIke2xheWVyTmFtZX1cIiDjgpLliYrpmaTjgZfjgb7jgZfjgZ/jgIJgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIOODoeOCv+aDheWgseOCr+ODqeOCuVxyXG4gKi9cclxuY2xhc3MgTWV0YSB7XHJcbiAgICAvKipcclxuICAgICAqIOWIneacn+WMllxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kr44Km44Oz44OI44KS5aKX44KE44GX44G+44GZXHJcbiAgICAgKi9cclxuICAgIGxvb3AoKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudCsrO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgqvjgqbjg7Pjg4jjgpLlj5blvpdcclxuICAgICAqL1xyXG4gICAgZ2V0Q291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnQ7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIOODreOCsFxyXG4gKi9cclxuY2xhc3MgTG9nZ2VyIHtcclxuICAgIC8qKlxyXG4gICAgICog44Ot44Kw44KS5Ye65Yqb44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gbG9nIOacrOaWh1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgd3JpdGUobG9nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFtOaWNvbW1lbnRKU10ke2xvZ31gKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICog44Ko44Op44O8XHJcbiAqL1xyXG5jb25zdCBOaWNvRXhjZXB0aW9ucyA9IHtcclxuICAgIC8qKlxyXG4gICAgICog5Yid5pyf5YyW44Ko44Op44O8XHJcbiAgICAgKi9cclxuICAgIF9fSU5JVF9fOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5byV5pWw44Ko44Op44O8XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgQVJHVU1FTlRTOiB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDlv4XopoHjgarlvJXmlbDjgYzlrZjlnKjjgZfjgarjgYRcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIE5PVF9FWElTVDoge1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiDpq5jjgZVcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgSEVJR0hUOiAnW0VSUl1hcmd1bWVudCBcImhlaWdodFwiIG11c3QgYmUgc3BlY2lmaWVkLicsXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIOaoquW5hVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBXSURUSDogJ1tFUlJdYXJndW1lbnQgXCJ3aWR0aFwiIG11c3QgYmUgc3BlY2lmaWVkLicsXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIElEXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIElEOiAnW0VSUl1hcmd1bWVudCBcImlkXCIgbXVzdCBiZSBzcGVjaWZpZWQuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOW8leaVsOOBruWApOOBjOS4jemBqeWIh+OBp+OBguOCi1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTmFOOiB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIOmrmOOBleOBjOaVsOWtl+OBp+OBquOBhFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBIRUlHSFQ6ICh2YWx1ZSkgPT4gYFtFUlJdJHt2YWx1ZX0gaXMgbm90IGEgbnVtYmVyLiBcImhlaWdodFwiIG11cyBiZSBhIG51bWJlci5gLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiDmqKrluYXjgYzmlbDlrZfjgafjgarjgYRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgV0lEVEg6ICh2YWx1ZSkgPT4gYFtFUlJdJHt2YWx1ZX0gaXMgbm90IGEgbnVtYmVyLiBcIndpZHRoXCIgbXVzIGJlIGEgbnVtYmVyLmAsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOBjOWtmOWcqOOBl+OBquOBhOODu2NhbnZhc+OBp+OBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIEVMRU1FTlQ6IHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOimgee0oOOBjOWtmOWcqOOBl+OBquOBhFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTk9UX0VYSVNUOiAoaWQpID0+IHsgcmV0dXJuIGBbRVJSXUNhbnZhcyBFbGVtZW50IHdoaWNoIGlkIGlzIFwiJHtpZH1cIiB3YXMgbm90IGZvdW5kLmA7IH0sXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDopoHntKDjgYxIVE1MQ2FudmFz44Gn44Gq44GEXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBOT1RfQV9DQU5WQVNfRUxFTUVOVDogKGlkKSA9PiB7IHJldHVybiBgW0VSUl1FbGVtZW50IHdoaWNoIGlkIGlzIFwiJHtpZH1cIiBpcyBub3QgYSBjYW52YXNIVE1MNSBFbGVtZW50LmA7IH1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI6L+95Yqg5pmC44Gu44Ko44Op44O8XHJcbiAgICAgKi9cclxuICAgIFNFTkQ6IHt9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDjg6zjgqTjg6Tjg7zplqLkv4Ljga7jgqjjg6njg7xcclxuICAgICAqL1xyXG4gICAgTEFZRVI6IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDph43opIdcclxuICAgICAgICAgKi9cclxuICAgICAgICBEVVBMSUNBVElPTjogKG5hbWUpID0+IHsgcmV0dXJuIGBbRVJSXVRoZSBsYXllciBuYW1lICR7bmFtZX0gYWxyZWFkeSBleGlzdHMuYDsgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6zjgqTjg6Tjg7zjgYzlrZjlnKjjgZfjgarjgYRcclxuICAgICAgICAgKi9cclxuICAgICAgICBMQVlFUl9ET0VTX05PVF9FWElTVDogKG5hbWUpID0+IHsgcmV0dXJuIGBbRVJSXUEgbGF5ZXIgbmFtZSBpcyAke25hbWV9IGRvZXMgbm90IGV4aXN0LmA7IH0sXHJcbiAgICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9