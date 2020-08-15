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
                + `buildDate:${"2020/7/15 20:6"}\n`
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
            if (true)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OaWNvbW1lbnRKUy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvLi9zcmMvdXRpbHMvRGF0YVV0aWxzLnRzIiwid2VicGFjazovL05pY29tbWVudEpTLy4vc3JjL21vZHVsZS9jb25maWcudHMiLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvLi9zcmMvbW9kdWxlL0NvbW1lbnQudHMiLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvLi9lbnYvREVCLmpzIiwid2VicGFjazovL05pY29tbWVudEpTLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbInZpcnNpb24iLCJidWlsZCIsImJ1aWxkRGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNE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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1CQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsSUFBSTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsTUFBTTtBQUNqRDtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsTUFBTTtBQUNoRDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw0Q0FBNEMsR0FBRyxrQkFBa0IsRUFBRTtBQUNuRztBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMscUNBQXFDLEdBQUcsaUNBQWlDO0FBQ3BILFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLCtCQUErQixLQUFLLGtCQUFrQixFQUFFO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxnQ0FBZ0MsS0FBSyxrQkFBa0IsRUFBRTtBQUNsRyxLQUFLO0FBQ0wiLCJmaWxlIjoiTmljb21tZW50SlMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJOaWNvbW1lbnRKU1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJOaWNvbW1lbnRKU1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImV4cG9ydCBjbGFzcyBEYXRhVXRpbHMge1xyXG4gICAgc3BsaXR0ZXIodmFsdWUsIHNwbGl0QnkgPSAnLCcpIHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnNwbGl0KHNwbGl0QnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICAvLzDln4vjgoFcclxuICAgIHBhZGRpbmcobnVtLCBkaWdpdCA9IDIsIHBhZGRTdHJpbmcgPSAnMCcpIHtcclxuICAgICAgICBpZiAobnVtIDwgMTAgKiogZGlnaXQpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luID0gbnVtLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGxldCBwYWRkZWQgPSBvcmlnaW47XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlnaXQgLSBvcmlnaW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHBhZGRlZCA9IHBhZGRTdHJpbmcgKyBwYWRkZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBhZGRlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudW0udG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOODjeOCueODiOOBleOCjOOBn+mFjeWIl+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAgICogQHBhcmFtIGxlbiDphY3liJfplbdcclxuICAgICAqL1xyXG4gICAgY3JlYXRlTmVzdGVkQXJyYXkobGVuKSB7XHJcbiAgICAgICAgY29uc3QgYXJyID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBhcnIucHVzaChbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVBcnJheShsZW4pIHtcclxuICAgICAgICBjb25zdCBhcnIgPSBbXTtcclxuICAgICAgICBhcnIubGVuZ3RoID0gbGVuO1xyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFZQT1PjgYvjgonmmYLplpPjgpLoqIjnrpfjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSB2cG9zIFZQT1NcclxuICAgICAqL1xyXG4gICAgY2FsY1ZQT1ModnBvcykge1xyXG4gICAgICAgIGNvbnN0IHNlY29uZCA9IE1hdGguZmxvb3IodnBvcyAvIDEwMCk7XHJcbiAgICAgICAgY29uc3QgbWludXRlID0gTWF0aC5mbG9vcihzZWNvbmQgLyA2MCk7XHJcbiAgICAgICAgY29uc3QgZXh0cmEgPSBNYXRoLmZsb29yKHNlY29uZCAlIDYwKTtcclxuICAgICAgICByZXR1cm4geyBtczogeyBtaW46IG1pbnV0ZSwgc2VjOiBleHRyYSB9LCBzZWM6IHNlY29uZCB9O1xyXG4gICAgfVxyXG59XHJcbiIsIi8v5a6a5pWwXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGZwczogNjAsXHJcbiAgICBkdXJhdGlvbjogMyxcclxuICAgIGxpbmVIZWlnaHQ6IDEuMixcclxuICAgIGJpZ0xpbmVzOiA4LFxyXG4gICAgbWVkaXVtTGluZXM6IDExLFxyXG4gICAgc21hbGxMaW5lczogMTYsXHJcbiAgICBmaXg6IHtcclxuICAgICAgICBzbWFsOiAzOCxcclxuICAgICAgICBiaWc6IDE2LFxyXG4gICAgICAgIG1lZGl1bTogMjUsXHJcbiAgICB9LFxyXG4gICAgZGVmYXVsdENvbG9yOiAnI2ZmZicsXHJcbiAgICBkZWZhdWx0TGF5ZXI6ICdiYXNlJyxcclxuICAgIGRlZmF1bHRGb250OiAnTVMgUEdvdGhpYycsXHJcbiAgICBvcGFjaXR5OiAxLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBEYXRhVXRpbHMgfSBmcm9tICcuLi91dGlscy9EYXRhVXRpbHMnO1xyXG5pbXBvcnQgZGVmYXVsdENvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcbi8vdXRpbFxyXG5jb25zdCBkYXRhdXRsID0gbmV3IERhdGFVdGlscygpO1xyXG4vL+OCs+ODoeODs+ODiOOCquODluOCuOOCp+OCr+ODiFxyXG5leHBvcnQgY2xhc3MgQ29tbWVudEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IocGFyYW0pIHtcclxuICAgICAgICB0aGlzLmxpZmUgPSAwOyAvL+aui+OCiuOCs+ODnuaVsFxyXG4gICAgICAgIHRoaXMuZGVsdGEgPSAwOyAvLzHjgrPjg57lvZPjgZ/jgorjga5Y5bqn5qiZ44Gu5aSJ6YePXHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gMDsgLy9Y5bqn5qiZXHJcbiAgICAgICAgdGhpcy50b3AgPSAwOyAvL1nluqfmqJko5Y6f54K544Gv5bem5LiKKVxyXG4gICAgICAgIHRoaXMucmV2ZWFsID0gMDsgLy/jgrPjg6Hjg7Pjg4jjgYznlLvpnaLlj7PjgYvjgonlrozlhajjgavpnLLlh7rjgZnjgovjgb7jgafjga7jgrPjg57mlbBcclxuICAgICAgICB0aGlzLnRvdWNoID0gMDsgLy/jgrPjg6Hjg7Pjg4jjga7lt6bnq6/jgYznlLvpnaLlt6bjgavliLDpgZTjgZnjgovjgb7jgafjga7jgrPjg57mlbBcclxuICAgICAgICB0aGlzLmZpeGVkID0gZmFsc2U7IC8v5Zu65a6a44OV44Op44KwXHJcbiAgICAgICAgdGhpcy50eXBlID0gcGFyYW0ub3B0aW9uLm1vZGU7IC8v44K/44Kk44OXXHJcbiAgICAgICAgdGhpcy5jdXN0b21BdHRyID0gcGFyYW0ub3B0aW9uLmN1c3RvbUF0dHI7IC8v44Kr44K544K/44Og5bGe5oCnXHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbFRleHQgPSBwYXJhbS50ZXh0O1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRoaXMuX2Zvcm1hdENvbW1lbnQocGFyYW0udGV4dCwgdGhpcy50eXBlKTsgLy/mnKzmlodcclxuICAgICAgICB0aGlzLnRleHRGb3JSZW5kZXIgPSB0aGlzLl9mb3JtYXRSZW5kZXJDb21tZW50KHRoaXMudGV4dCk7XHJcbiAgICAgICAgdGhpcy50ZXh0TGVuZ3RoID0gTWF0aC5tYXgoLi4udGhpcy50ZXh0Lm1hcCh0ZXh0ID0+IHRleHQubGVuZ3RoKSk7XHJcbiAgICAgICAgdGhpcy5tYXhMZW5ndGhJbmRleCA9IHRoaXMudGV4dC5tYXAoY29tbWVudCA9PiBjb21tZW50Lmxlbmd0aCkuaW5kZXhPZih0aGlzLnRleHRMZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuY29tbWVudE51bWJlciA9IHBhcmFtLmNvbW1lbnROdW1iZXI7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IHBhcmFtLm9wdGlvbi5jb2xvcjsgLy/oibJcclxuICAgICAgICB0aGlzLmJvcmRlckNvbG9yID0gcGFyYW0ub3B0aW9uLmJvcmRlckNvbG9yO1xyXG4gICAgICAgIHRoaXMubGluZXMgPSB0aGlzLl9nZXRMaW5lcyhwYXJhbS5vcHRpb24uY29tbWVudFNpemUsIHBhcmFtLmxpbmVzKTtcclxuICAgICAgICB0aGlzLnNlbGZMaW5lcyA9IHRoaXMudGV4dC5sZW5ndGg7IC8v6KGM5pWwXHJcbiAgICAgICAgdGhpcy5jdHggPSBwYXJhbS5jdHg7XHJcbiAgICAgICAgdGhpcy5mb250TmFtZSA9IHBhcmFtLm9wdGlvbi5mb250TmFtZTsgLy/jg5Xjgqnjg7Pjg4jlkI1cclxuICAgICAgICB0aGlzLm9wYWNpdHkgPSBwYXJhbS5vcHRpb24ub3BhY2l0eTsgLy/pgI/pgY7luqZcclxuICAgICAgICB0aGlzLmZ1bGwgPSBwYXJhbS5vcHRpb24uZnVsbDsgLy/oh6jnlYzngrnjg6rjgrXjgqTjgrpcclxuICAgICAgICB0aGlzLmNhbnZhc1NpemUgPSBwYXJhbS5jYW52YXNTaXplO1xyXG4gICAgICAgIHRoaXMuY2FudmFzV2lkdGhGbGFzaCA9IHBhcmFtLmNhbnZhc1dpZHRoRmxhc2g7XHJcbiAgICAgICAgLy/lm7rlrprjg5Xjg6njgrBcclxuICAgICAgICBpZiAodGhpcy50ZXh0Lmxlbmd0aCA+PSB0aGlzLmxpbmVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZml4ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgLy92cG9z44O76KGo56S65pmC6ZaTXHJcbiAgICAgICAgdGhpcy52cG9zID0gcGFyYW0ub3B0aW9uLnZwb3M7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IHBhcmFtLm9wdGlvbi5kdXJhdGlvbiB8fCBkZWZhdWx0Q29uZmlnLmR1cmF0aW9uO1xyXG4gICAgICAgIC8v44OV44Kp44Oz44OI6Zai5L+CXHJcbiAgICAgICAgdGhpcy5mb250U2l6ZVN0cmluZyA9IHBhcmFtLm9wdGlvbi5jb21tZW50U2l6ZTtcclxuICAgICAgICBbdGhpcy5mb250U2l6ZSwgdGhpcy53aWR0aCwgdGhpcy5vZmZzZXRZXSA9IHRoaXMuX2dldEZvbnQodGhpcy50ZXh0W3RoaXMubWF4TGVuZ3RoSW5kZXhdLCB0aGlzLmNhbnZhc1NpemUsIHRoaXMuY2FudmFzV2lkdGhGbGFzaCwgcGFyYW0ub3B0aW9uLmNvbW1lbnRTaXplLCBwYXJhbS5mb250U2l6ZSwgcGFyYW0uZml4ZWRGb250U2l6ZSwgdGhpcy50eXBlLCBwYXJhbS5vcHRpb24ubGluZWhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5mb250U2l6ZVN0cmluZyA9IHBhcmFtLm9wdGlvbi5jb21tZW50U2l6ZTtcclxuICAgICAgICB0aGlzLm92ZXJhbGxTaXplID0gdGhpcy5mb250U2l6ZSAqIHRoaXMuc2VsZkxpbmVzO1xyXG4gICAgICAgIHRoaXMuYWxpdmUgPSB0cnVlOyAvL+eUn+WtmOODleODqeOCsFxyXG4gICAgICAgIHRoaXMub25EaXNwb3NlZCA9IHBhcmFtLm9uRGlzcG9zZWQ7IC8v44Kz44O844Or44OQ44OD44KvXHJcbiAgICAgICAgdGhpcy5fc2V0KCk7IC8v44K744OD44OI5a6f6KGMXHJcbiAgICB9XHJcbiAgICAvL+WxnuaAp+WPluW+l1xyXG4gICAgZ2V0UHJvcChrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXN0b21BdHRyLmdldChrZXkpO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDlh6bnkIZcclxuICAgICAqL1xyXG4gICAgdGljayh2cG9zKSB7XHJcbiAgICAgICAgLy/jgrPjg6Hjg7Pjg4jjga7ntK/oqIjooajnpLrmmYLplpPjgYzml6Llrprjga4y5YCN5Lul5LiK44Gn44GC44Gj44Gf5aC05ZCI44CB44Kz44Oh44Oz44OI44KS5YmK6Zmk44GZ44KLXHJcbiAgICAgICAgaWYgKHZwb3MgPj0gdGhpcy52cG9zICsgdGhpcy5kdXJhdGlvbiAqIDIwMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsaXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5saWZlLS07XHJcbiAgICAgICAgLy9uYWth44Kz44Oh44Oz44OI44Gu5aC05ZCIXHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ25ha2EnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCAtPSB0aGlzLmRlbHRhO1xyXG4gICAgICAgICAgICB0aGlzLnJldmVhbC0tO1xyXG4gICAgICAgICAgICB0aGlzLnRvdWNoLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxpZmUgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMua2lsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI44Gu55Sf5a2Y44OV44Op44Kw44KS5by35Yi255qE44Gr6ZmN44KN44GX44G+44GZXHJcbiAgICAgKi9cclxuICAgIGtpbGwoKSB7XHJcbiAgICAgICAgdGhpcy5hbGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25EaXNwb3NlZCgpO1xyXG4gICAgfVxyXG4gICAgLy/jgrvjg4Pjg4hcclxuICAgIF9zZXQoKSB7XHJcbiAgICAgICAgdGhpcy5saWZlID0gMDsgLy/mrovjgorjgrPjg57mlbBcclxuICAgICAgICB0aGlzLmxlZnQgPSAwOyAvL1jluqfmqJlcclxuICAgICAgICB0aGlzLnRvcCA9IDA7IC8vWeW6p+aomSjljp/ngrnjga/lt6bkuIopXHJcbiAgICAgICAgdGhpcy5kZWx0YSA9IDA7IC8vMeOCs+ODnuW9k+OBn+OCiuOBrljluqfmqJnjga7lpInph49cclxuICAgICAgICB0aGlzLnJldmVhbCA9IDA7IC8v44Kz44Oh44Oz44OI44GM55S76Z2i5Y+z44GL44KJ5a6M5YWo44Gr6Zyy5Ye644GZ44KL44G+44Gn44Gu44Kz44Oe5pWwXHJcbiAgICAgICAgdGhpcy50b3VjaCA9IDA7IC8v44Kz44Oh44Oz44OI44Gu5bem56uv44GM55S76Z2i5bem44Gr5Yiw6YGU44GZ44KL44G+44Gn44Gu44Kz44Oe5pWwXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnbmFrYSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXROYWthKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc2hpdGEnOlxyXG4gICAgICAgICAgICBjYXNlICd1ZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRTaGl0YVVlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9uYWth44Kz44Oh44Oz44OI6Kit5a6aXHJcbiAgICBfc2V0TmFrYSgpIHtcclxuICAgICAgICB0aGlzLmxpZmUgPSBkZWZhdWx0Q29uZmlnLmZwcyAqIHRoaXMuZHVyYXRpb247XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy5jYW52YXNTaXplLndpZHRoO1xyXG4gICAgICAgIHRoaXMuZGVsdGEgPSAodGhpcy5jYW52YXNTaXplLndpZHRoICsgdGhpcy53aWR0aCkgLyB0aGlzLmxpZmU7XHJcbiAgICAgICAgdGhpcy5yZXZlYWwgPSB0aGlzLndpZHRoIC8gdGhpcy5kZWx0YTtcclxuICAgICAgICB0aGlzLnRvdWNoID0gdGhpcy5jYW52YXNTaXplLndpZHRoIC8gdGhpcy5kZWx0YTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogc2hpdOODu3Vl44Kz44Oh44Oz44OI44KS6Kit5a6a44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gd2lkdGggY2FudmFz44Gu5qiq5bmFXHJcbiAgICAgKiBAcGFyYW0gZHVyYXRpb24g44Kz44Oh44Oz44OI6KGo56S65pmC6ZaTXHJcbiAgICAgKi9cclxuICAgIF9zZXRTaGl0YVVlKCkge1xyXG4gICAgICAgIHRoaXMubGlmZSA9IGRlZmF1bHRDb25maWcuZnBzICogdGhpcy5kdXJhdGlvbjtcclxuICAgICAgICBpZiAodGhpcy5maXhlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnQgPSAodGhpcy5jYW52YXNTaXplLndpZHRoIC0gdGhpcy53aWR0aCkgLyAyO1xyXG4gICAgICAgICAgICAvL3RoaXMubGVmdCA9IHRoaXMuY2FudmFzU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLmNhbnZhc1NpemUud2lkdGggLyAyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vZm9udOOCkuaxuuWumuOBmeOCi1xyXG4gICAgX2dldEZvbnQodGV4dCwgY2FudmFzU2l6ZSwgZmxhc2hXaWR0aCwgY29tbWVudFNpemUsIGZvbnRTaXplLCBmaXhlZEZvbnRTaXplLCB0eXBlLCBsaW5lSGVpZ2h0KSB7XHJcbiAgICAgICAgbGV0IG9yaWdpbmFsRm9udCA9IHRoaXMuX2dldFNpemUoY29tbWVudFNpemUsIGZvbnRTaXplKTtcclxuICAgICAgICBsZXQgZm9udCA9IG9yaWdpbmFsRm9udDtcclxuICAgICAgICAvL+ODu+aUueihjOODquOCteOCpOOCulxyXG4gICAgICAgIC8vb3ZlcmFsbFNpemXjgavnm7jlvZPjgZnjgovpq5jjgZXjgYzjgIHmj4/lhpnpoJjln5/jga4xLzPjgpLkuIrlm57jgovloLTlkIjjgavjgIFcclxuICAgICAgICAvL+ODquOCteOCpOOCuuOCkuihjOOBhuOAglxyXG4gICAgICAgIGlmIChvcmlnaW5hbEZvbnQgKiB0aGlzLnNlbGZMaW5lcyA+IGNhbnZhc1NpemUuaGVpZ2h0IC8gMykge1xyXG4gICAgICAgICAgICBmb250ID0gdGhpcy5fZ2V0U2l6ZShjb21tZW50U2l6ZSwgZml4ZWRGb250U2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBgJHtmb250fXB4IFwiWXUgR290aGljXCJgO1xyXG4gICAgICAgIGxldCBjb21XaWR0aCA9IHRoaXMuY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xyXG4gICAgICAgIC8v44O76Ieo55WM5bmF44Oq44K144Kk44K6XHJcbiAgICAgICAgLy/jgrPjg6Hjg7Pjg4jjga7mnIDlpKfluYXjgYzmj4/lhpnpoJjln5/jgpLkuIrlm57jgovloLTlkIjjgavjgIHmj4/lhpnpoJjln5/jgavlj47jgb7jgovjgojjgYbjgavjg6rjgrXjgqTjgrrjgZnjgotcclxuICAgICAgICBjb25zdCB3aWR0aE92ZXJmbG93ID0gY29tV2lkdGggPiB0aGlzLmNhbnZhc1NpemUud2lkdGggJiYgdHlwZSAhPT0gJ25ha2EnO1xyXG4gICAgICAgIGlmICh3aWR0aE92ZXJmbG93ICYmICF0aGlzLmZ1bGwpIHtcclxuICAgICAgICAgICAgZm9udCA9IHRoaXMuX21vZFNpemUob3JpZ2luYWxGb250LCBjb21XaWR0aCwgdGhpcy5jYW52YXNXaWR0aEZsYXNoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IGAke2ZvbnR9cHggXCJZdSBHb3RoaWNcImA7XHJcbiAgICAgICAgICAgIGNvbVdpZHRoID0gdGhpcy5jdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHdpZHRoT3ZlcmZsb3cgJiYgdGhpcy5mdWxsKSB7XHJcbiAgICAgICAgICAgIGZvbnQgPSB0aGlzLl9tb2RTaXplKG9yaWdpbmFsRm9udCwgY29tV2lkdGgsIHRoaXMuY2FudmFzU2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBgJHtmb250fXB4IFwiWXUgR290aGljXCJgO1xyXG4gICAgICAgICAgICBjb21XaWR0aCA9IHRoaXMuY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvZmZzZXRZID0gdHlwZSA9PT0gJ3NoaXRhJyA/IGZvbnQgKiAobGluZUhlaWdodCAtIDEpICogLTEgOiBmb250ICogKGxpbmVIZWlnaHQgLSAxKTtcclxuICAgICAgICByZXR1cm4gW2ZvbnQsIGNvbVdpZHRoLCBvZmZzZXRZXTtcclxuICAgIH1cclxuICAgIC8v44OV44Kp44Oz44OI44K144Kk44K65L+u5q2jXHJcbiAgICBfbW9kU2l6ZShmb250LCB3aWR0aCwgY2FudmFzV2lkdGgpIHtcclxuICAgICAgICByZXR1cm4gZm9udCAqIGNhbnZhc1dpZHRoIC8gd2lkdGg7XHJcbiAgICB9XHJcbiAgICAvL+aUueihjOODquOCteOCpOOCulxyXG4gICAgLy9mb250U2l6ZeWPluW+l1xyXG4gICAgX2dldFNpemUoY29tbWVudFNpemUsIGZvbnRTaXplKSB7XHJcbiAgICAgICAgc3dpdGNoIChjb21tZW50U2l6ZSkge1xyXG4gICAgICAgICAgICBjYXNlICdiaWcnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbnRTaXplLmJpZztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzbWFsbCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9udFNpemUuc21hbGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb250U2l6ZS5tZWRpdW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDooYzmlbDjgpLmsYLjgoHjgotcclxuICAgICAqIEBwYXJhbSBzaXplIGJpZy9zbWFsbC9tZWRpdW3jga7jgYTjgZrjgozjgYtcclxuICAgICAqIEBwYXJhbSBhbGxMaW5lcyBjb21tZW50TGluZXPlnovjga7jgqrjg5bjgrjjgqfjgq/jg4go44Gd44KM44Ge44KM44Gu44K144Kk44K644Gr44Gk44GE44Gm6KGM5pWw44KS6KGo44GZKVxyXG4gICAgICovXHJcbiAgICBfZ2V0TGluZXMoc2l6ZSwgYWxsTGluZXMpIHtcclxuICAgICAgICBzd2l0Y2ggKHNpemUpIHtcclxuICAgICAgICAgICAgY2FzZSAnYmlnJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGxMaW5lcy5iaWc7XHJcbiAgICAgICAgICAgIGNhc2UgJ21lZGl1bSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxsTGluZXMubWVkaXVtO1xyXG4gICAgICAgICAgICBjYXNlICdzbWFsbCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxsTGluZXMuc21hbGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjgpLmlbTlvaLjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBvcmlnaW4g44Kz44Oh44Oz44OIXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudFBvcyDjgrPjg6Hjg7Pjg4jjga7jgr/jgqTjg5dcclxuICAgICAqL1xyXG4gICAgX2Zvcm1hdENvbW1lbnQob3JpZ2luLCBjb21tZW50UG9zKSB7XHJcbiAgICAgICAgbGV0IGZvcm1hdGVkID0gZGF0YXV0bC5zcGxpdHRlcihvcmlnaW4sICdcXG4nKTtcclxuICAgICAgICBmb3JtYXRlZCA9IHRoaXMuX2RlbGV0ZUJsYW5rKGZvcm1hdGVkKTtcclxuICAgICAgICBmb3JtYXRlZCA9IHRoaXMuX2RlbGV0ZUZpcnN0QW5kbGFzdEJsYW5rKGZvcm1hdGVkKTtcclxuICAgICAgICBmb3JtYXRlZCA9IHRoaXMuX3NvcnRCeVR5cGUoZm9ybWF0ZWQsIGNvbW1lbnRQb3MpO1xyXG4gICAgICAgIHJldHVybiBmb3JtYXRlZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5o+P5YaZ55So44Kz44Oh44Oz44OI44KS5pW05b2i44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gb3JpZ2luIOOCs+ODoeODs+ODiFxyXG4gICAgICogQHBhcmFtIGNvbW1lbnRQb3Mg44Kz44Oh44Oz44OI44Gu44K/44Kk44OXXHJcbiAgICAgKi9cclxuICAgIF9mb3JtYXRSZW5kZXJDb21tZW50KG9yaWdpbikge1xyXG4gICAgICAgIGxldCBmb3JtYXRlZCA9IFsuLi5vcmlnaW5dO1xyXG4gICAgICAgIGZvcm1hdGVkID0gdGhpcy5fZGVsZXRlQmxhbmtMaW5lRnJvbUVuZChvcmlnaW4pO1xyXG4gICAgICAgIHJldHVybiBmb3JtYXRlZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI44GL44KJM+WbnuS7peS4iumAo+e2muOBmeOCi+aUueihjOOCkuWJiumZpOOBl+OBvuOBmeOAglxyXG4gICAgICogQHBhcmFtIGNvbW1lbnRzIOOCs+ODoeODs+ODiOOBruODquOCueODiFxyXG4gICAgICovXHJcbiAgICBfZGVsZXRlQmxhbmsoY29tbWVudExpc3QpIHtcclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZWQgPSBbXTtcclxuICAgICAgICAvL2Zvci4uLmlu44Or44O844OX44Gn5Zue44GZIFxyXG4gICAgICAgIGZvciAoY29uc3QgdGV4dCBvZiBjb21tZW50TGlzdCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc0JsYW5rID0gIXRleHQ7XHJcbiAgICAgICAgICAgIGlmIChpc0JsYW5rKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA8IDMpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZWQucHVzaCh0ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGVsZXRlZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pyA5Yid44Go5pyA5b6M44Gu56m655m96KGM44KS5YmK6Zmk44GX44G+44GZ44CCXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudHMg44Kz44Oh44Oz44OI44Gu44Oq44K544OIXHJcbiAgICAgKi9cclxuICAgIF9kZWxldGVGaXJzdEFuZGxhc3RCbGFuayhjb21tZW50cykge1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZWQgPSBbLi4uY29tbWVudHNdO1xyXG4gICAgICAgIGZvciAoY29uc3QgY29tbWVudCBvZiBjb21tZW50cykge1xyXG4gICAgICAgICAgICBpZiAoIWNvbW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZWQuc2hpZnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5b6M44KN44GL44KJXHJcbiAgICAgICAgY29uc3QgcmV2ZXJzZWQgPSBbLi4uZGVsZXRlZF0ucmV2ZXJzZSgpO1xyXG4gICAgICAgIGZvciAoY29uc3QgY29tbWVudCBvZiByZXZlcnNlZCkge1xyXG4gICAgICAgICAgICBpZiAoIWNvbW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZWQucG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGVsZXRlZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI44Gu5L2N572u44Gr44KI44Gj44Gm44K944O844OI44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudHMg44Kz44Oh44Oz44OI44Gu44Oq44K544OIXHJcbiAgICAgKiBAcGFyYW0gdHlwZSDjgrPjg6Hjg7Pjg4jjga7kvY3nva5cclxuICAgICAqL1xyXG4gICAgX3NvcnRCeVR5cGUoY29tbWVudHMsIHR5cGUpIHtcclxuICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ3NoaXRhJyA/IGNvbW1lbnRzLnJldmVyc2UoKSA6IGNvbW1lbnRzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDnqbrooYzjgpLliYrpmaTjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBjb21tZW50cyDjgrPjg6Hjg7Pjg4hcclxuICAgICAqL1xyXG4gICAgX2RlbGV0ZUJsYW5rTGluZUZyb21FbmQoY29tbWVudHMpIHtcclxuICAgICAgICBjb25zdCBmb3JtYXRlZCA9IFsuLi5jb21tZW50c107XHJcbiAgICAgICAgY29uc3QgcmV2ZXJzZWQgPSBbLi4uY29tbWVudHNdLnJldmVyc2UoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgcmV2ZXJzZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNCbGFuayA9IC9eXFxzKyQvLnRlc3QobGluZSkgfHwgbGluZS5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgICAgIGlmIChpc0JsYW5rKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXRlZC5wb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmN1c3RvbUF0dHIuZ2V0KCdjb21tZW50TnVtYmVyJykgPT09IDk1NTYwMSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtYXRlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmb3JtYXRlZDtcclxuICAgIH1cclxufVxyXG4vL+W6p+aomeaDheWgsVxyXG5leHBvcnQgY2xhc3MgUG9pbnQge1xyXG4gICAgY29uc3RydWN0b3IocG9zKSB7XHJcbiAgICAgICAgdGhpcy54ID0gcG9zLng7XHJcbiAgICAgICAgdGhpcy55ID0gcG9zLnk7XHJcbiAgICB9XHJcbn1cclxuLy9oZWlnaHQ6d2lkdGhcclxuZXhwb3J0IGNsYXNzIFNpemUge1xyXG4gICAgY29uc3RydWN0b3Ioc2l6ZSkge1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHNpemUud2lkdGg7XHJcbiAgICB9XHJcbn1cclxuLy/jg6zjgqTjg6Tjg7zjgq/jg6njgrlcclxuZXhwb3J0IGNsYXNzIExheWVyIHtcclxuICAgIC8v5Yid5pyf5YyWXHJcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhc1NpemUsIGxpbmVzLCBjb21tZW50U2l6ZSwgY29tbWVudFNpemVGaXhlZCwgZHVyYXRpb24sIGxpbmVIZWlnaHQpIHtcclxuICAgICAgICB0aGlzLm9uRGlzYXBvc2VkID0gKCkgPT4geyB9O1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgICAgIHRoaXMuY2FudmFzU2l6ZSA9IGNhbnZhc1NpemU7XHJcbiAgICAgICAgdGhpcy5jYW52YXNXaWR0aEZsYXNoID0gY2FudmFzU2l6ZS5oZWlnaHQgLyAzICogNDtcclxuICAgICAgICB0aGlzLmxpbmVIZWlnaHQgPSBsaW5lSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubGluZXMgPSBsaW5lcztcclxuICAgICAgICB0aGlzLmZvbnJTaXplID0gY29tbWVudFNpemU7XHJcbiAgICAgICAgdGhpcy5maXhlZEZvbnJTaXplID0gY29tbWVudFNpemVGaXhlZDtcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XHJcbiAgICAgICAgdGhpcy5jb21tZW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMubWF4bGluZXMgPSBsaW5lcy5zbWFsbDtcclxuICAgICAgICB0aGlzLm5ha2EgPSBuZXcgTmFrYUxpbmUobGluZXMuc21hbGwsIGNhbnZhc1NpemUpO1xyXG4gICAgICAgIHRoaXMuc2hpdGEgPSBbXTtcclxuICAgICAgICB0aGlzLnVlID0gW107XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOODrOOCpOODpOODvOOBq+OCs+ODoeODs+ODiOOCkui/veWKoOOBmeOCi1xyXG4gICAgICogQHBhcmFtIHRleHQg44Kz44Oh44Oz44OI5pys5paHXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudE51bWJlciDjgrPjg6HnlapcclxuICAgICAqIEBwYXJhbSBjdXN0b21BdHRyIOOCq+OCueOCv+ODoOWxnuaAp1xyXG4gICAgICogQHBhcmFtIHR5cGUgbmFrYS9zaGl0YS91ZeOBruOBhOOBmuOCjOOBi1xyXG4gICAgICogQHBhcmFtIHNpemUgYmlnL21lZGl1bS9sYXJnZeOBruOBhOOBmuOCjOOBi1xyXG4gICAgICogQHBhcmFtIHZwb3MgVlBPU1xyXG4gICAgICovXHJcbiAgICBhZGQodGV4dCwgY29tbWVudE51bWJlciwgY3VzdG9tQXR0ciwgdHlwZSA9ICduYWthJywgc2l6ZSA9ICdtZWRpdW0nLCBjYWxsQmFjaywgdnBvcykge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbW1lbnRzLmxlbmd0aCA+IDQwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY29uc3Qgb3ByaW9ucyA9IHtcclxuICAgICAgICAgICAgbW9kZTogdHlwZSxcclxuICAgICAgICAgICAgY29sb3I6IGN1c3RvbUF0dHIuZ2V0KCdjb2xvcicpIHx8ICcjZmZmJyxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGN1c3RvbUF0dHIuZ2V0KCdiY29sb3InKSB8fCAnIzAwMCcsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uLFxyXG4gICAgICAgICAgICBjdXN0b21BdHRyOiBjdXN0b21BdHRyLFxyXG4gICAgICAgICAgICBjb21tZW50U2l6ZTogc2l6ZSxcclxuICAgICAgICAgICAgbGluZWhlaWdodDogdGhpcy5saW5lSGVpZ2h0LFxyXG4gICAgICAgICAgICB2cG9zOiB2cG9zLFxyXG4gICAgICAgICAgICBmb250TmFtZTogY3VzdG9tQXR0ci5nZXQoJ2ZvbnROYW1lJyksXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IGN1c3RvbUF0dHIuZ2V0KCdvcGFjaXR5JyksXHJcbiAgICAgICAgICAgIGZ1bGw6IGN1c3RvbUF0dHIuZ2V0KCdmdWxsJyksXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgICAgICAgdGV4dDogdGV4dCxcclxuICAgICAgICAgICAgY3R4OiB0aGlzLmN0eCxcclxuICAgICAgICAgICAgY2FudmFzU2l6ZTogdGhpcy5jYW52YXNTaXplLFxyXG4gICAgICAgICAgICBjYW52YXNXaWR0aEZsYXNoOiB0aGlzLmNhbnZhc1dpZHRoRmxhc2gsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGlzLmZvbnJTaXplLFxyXG4gICAgICAgICAgICBmaXhlZEZvbnRTaXplOiB0aGlzLmZpeGVkRm9uclNpemUsXHJcbiAgICAgICAgICAgIGxpbmVzOiB0aGlzLmxpbmVzLFxyXG4gICAgICAgICAgICBvcHRpb246IG9wcmlvbnMsXHJcbiAgICAgICAgICAgIGNvbW1lbnROdW1iZXI6IGNvbW1lbnROdW1iZXIsXHJcbiAgICAgICAgICAgIG9uRGlzcG9zZWQ6IGNhbGxCYWNrLm9uRGlzcGFzZWQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBjb21tZW50T2JqID0gbmV3IENvbW1lbnRCYXNlKHBhcmFtKTtcclxuICAgICAgICBzd2l0Y2ggKGNvbW1lbnRPYmoudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICduYWthJzpcclxuICAgICAgICAgICAgICAgIHRoaXMubmFrYS5hZGQoY29tbWVudE9iaik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc2hpdGEnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwZW5kU2hpdGEoY29tbWVudE9iaik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAndWUnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwZW5kVWUoY29tbWVudE9iaik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOWHpueQhlxyXG4gICAgICogQHBhcmFtIGNvdW50ZXIg44Or44O844OX5Zue5pWwXHJcbiAgICAgKi9cclxuICAgIHRpY2soY291bnRlciwgdnBvcywgcmVuZGVyKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFZwb3MgPSB2cG9zID8gdnBvcyA6IDA7XHJcbiAgICAgICAgY29uc3QgZG9SZW5kZXIgPSByZW5kZXIgPT09IGZhbHNlID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzLmZvckVhY2goY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9SZW5kZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyKGNvbW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC50aWNrKGN1cnJlbnRWcG9zKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vbmFrYeOCs+ODoVxyXG4gICAgICAgIGlmIChkb1JlbmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLm5ha2EuZ2V0TGlzdCgpLmZvckVhY2goY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXIoY29tbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5ha2EudGljayhjdXJyZW50VnBvcyk7XHJcbiAgICAgICAgdGhpcy5fY2xlYW4oKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5o+P5YaZ5Yem55CGXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudCDjgrPjg6Hjg7Pjg4hcclxuICAgICAqL1xyXG4gICAgX3JlbmRlcihjb21tZW50KSB7XHJcbiAgICAgICAgdGhpcy5jdHgudGV4dEJhc2VsaW5lID0gJ3RvcCc7XHJcbiAgICAgICAgLy/mj4PjgYjkvY3nva5cclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgY2FzZSBjb21tZW50LnR5cGUgPT09ICduYWthJyB8fCBjb21tZW50LmZpeGVkOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2xlZnQnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBgJHtjb21tZW50LmNvbG9yfWA7XHJcbiAgICAgICAgdGhpcy5jdHguc2hhZG93Q29sb3IgPSBjb21tZW50LmJvcmRlckNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3R4LnNoYWRvd09mZnNldFggPSAxLjU7XHJcbiAgICAgICAgdGhpcy5jdHguc2hhZG93T2Zmc2V0WSA9IDEuNTtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IGNvbW1lbnQub3BhY2l0eTtcclxuICAgICAgICB0aGlzLmN0eC5mb250ID0gYGJvbGQgJHtjb21tZW50LmZvbnRTaXplfXB4IFwiJHtjb21tZW50LmZvbnROYW1lfVwiYDtcclxuICAgICAgICAvL+aPj+WGmeaZguOBq+iAg+aFruOBmeOCi+ato+iyoFxyXG4gICAgICAgIGNvbnN0IGRlbHRhTWludXNPclBsdXMgPSBjb21tZW50LnR5cGUgPT09ICdzaGl0YScgPyAtMSA6IDE7XHJcbiAgICAgICAgY29uc3QgZGVsdGEgPSBkZWx0YU1pbnVzT3JQbHVzICogY29tbWVudC5mb250U2l6ZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbW1lbnQudGV4dEZvclJlbmRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChjb21tZW50LnRleHRGb3JSZW5kZXJbaV0sIGNvbW1lbnQubGVmdCwgY29tbWVudC50b3AgKyBjb21tZW50Lm9mZnNldFkgKyBkZWx0YSAqIGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI44KS5YmK6Zmk44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gIG9wdGlvbiDmnIDliJ3jga7jgrPjg6Hjg7Pjg4jjgb7jgZ/jga/jgIHmnIDlvozjga7jgrPjg6Hjg7Pjg4jjga7jgb/jgpLliYrpmaTjgZnjgovjgZPjgajjgYzlh7rmnaXjgb7jgZnjgIJcclxuICAgICAqL1xyXG4gICAgY2xlYXIob3B0aW9uKSB7XHJcbiAgICAgICAgc3dpdGNoIChvcHRpb24pIHtcclxuICAgICAgICAgICAgY2FzZSB1bmRlZmluZWQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzLmZvckVhY2goY29tbWVudCA9PiBjb21tZW50LmtpbGwoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ha2EgPSBuZXcgTmFrYUxpbmUodGhpcy5saW5lcy5zbWFsbCwgdGhpcy5jYW52YXNTaXplKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudWUgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hpdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdmaXJzdCc6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21tZW50cy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50c1swXS5raWxsKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbGFzdCc6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21tZW50cy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50c1t0aGlzLmNvbW1lbnRzLmxlbmd0aCAtIDFdLmtpbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOmFjeWIl+OBi+OCieODleODqeOCsOOBjOmZjeOCiuOBpuOBhOOCi+OCs+ODoeODs+ODiOOCkuWJiumZpFxyXG4gICAgICovXHJcbiAgICBfY2xlYW4oKSB7XHJcbiAgICAgICAgdGhpcy5jb21tZW50cyA9IHRoaXMuY29tbWVudHMuZmlsdGVyKGNvbW1ldCA9PiBjb21tZXQuYWxpdmUpO1xyXG4gICAgICAgIC8vbmFrYeOCs+ODoVxyXG4gICAgICAgIHRoaXMubmFrYS5jbGVhbigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBzaGl0YeOCs+ODoeODs+ODiOOCkui/veWKoOOBmeOCi1xyXG4gICAgICogQHBhcmFtIGNvbW1lbnQg44Kz44Oh44Oz44OI44Kq44OW44K444Kn44Kv44OIXHJcbiAgICAgKi9cclxuICAgIF9hcHBlbmRTaGl0YShjb21tZW50KSB7XHJcbiAgICAgICAgLy9zaGl0YeOCs+ODoeODs+ODiFxyXG4gICAgICAgIGxldCBib3R0b20gPSB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDA7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zaGl0YVtpXSAmJiB0aGlzLnNoaXRhW2ldLmFsaXZlICYmICFjb21tZW50LmZpeGVkKSB7XHJcbiAgICAgICAgICAgICAgICBib3R0b20gLT0gdGhpcy5zaGl0YVtpXS5vdmVyYWxsU2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnNoaXRhLmxlbmd0aCA9PT0gMDpcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5zaGl0YS5sZW5ndGggPD0gaTpcclxuICAgICAgICAgICAgICAgIGNhc2UgIXRoaXMuc2hpdGFbaV0uYWxpdmU6XHJcbiAgICAgICAgICAgICAgICAvL+WbuuWumuOCs+ODoeODs+ODiOOBp+OBguOBo+OBn+WgtOWQiFxyXG4gICAgICAgICAgICAgICAgY2FzZSBjb21tZW50LmZpeGVkOlxyXG4gICAgICAgICAgICAgICAgLy/jgrPjg6Hjg7Pjg4jjgYzooajnpLrpmZDnlYzjgpLotoXjgYjjgovloLTlkIhcclxuICAgICAgICAgICAgICAgIGNhc2UgYm90dG9tIC0gY29tbWVudC5vdmVyYWxsU2l6ZSArIGNvbW1lbnQub2Zmc2V0WSA8IDA6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgaWYgKGNvbW1lbnQuZml4ZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gdGhpcy5jYW52YXNTaXplLmhlaWdodCAtIGNvbW1lbnQuZm9udFNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYm90dG9tIC0gY29tbWVudC5vdmVyYWxsU2l6ZSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLmNhbnZhc1NpemUuaGVpZ2h0IC0gY29tbWVudC5vdmVyYWxsU2l6ZSArIGNvbW1lbnQub2Zmc2V0WSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IGJvdHRvbSAtIGNvbW1lbnQub3ZlcmFsbFNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICB0aGlzLnNoaXRhW2ldID0gY29tbWVudDtcclxuICAgICAgICAgICAgdGhpcy5jb21tZW50cy5wdXNoKGNvbW1lbnQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBzaGl0YeOCs+ODoeODs+ODiOOCkui/veWKoOOBmeOCi1xyXG4gICAgICogQHBhcmFtIGNvbW1lbnQg44Kz44Oh44Oz44OI44Kq44OW44K444Kn44Kv44OIXHJcbiAgICAgKi9cclxuICAgIF9hcHBlbmRVZShjb21tZW50KSB7XHJcbiAgICAgICAgLy9zaGl0YeOCs+ODoeODs+ODiFxyXG4gICAgICAgIGxldCB0b3AgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDA7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51ZVtpXSAmJiB0aGlzLnVlW2ldLmFsaXZlICYmICFjb21tZW50LmZpeGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0b3AgKz0gdGhpcy51ZVtpXS5vdmVyYWxsU2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnVlLmxlbmd0aCA9PT0gMDpcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy51ZS5sZW5ndGggPD0gaTpcclxuICAgICAgICAgICAgICAgIGNhc2UgIXRoaXMudWVbaV0uYWxpdmU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNvbW1lbnQuZml4ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRvcCArIGNvbW1lbnQub3ZlcmFsbFNpemUgKyBjb21tZW50Lm9mZnNldFkgPiB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIGlmIChjb21tZW50LmZpeGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodG9wICsgY29tbWVudC5vdmVyYWxsU2l6ZSArIGNvbW1lbnQub2Zmc2V0WSA+IHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLmNhbnZhc1NpemUuaGVpZ2h0IC0gY29tbWVudC5vdmVyYWxsU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IHRvcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIHRoaXMudWVbaV0gPSBjb21tZW50O1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnB1c2goY29tbWVudCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaMh+WumuOBl+OBn+S9jee9ruOBq+WtmOWcqOOBmeOCi+OCs+ODoeODs+ODiOOCkuWPluW+l+OBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIHggWOW6p+aomVxyXG4gICAgICogQHBhcmFtIHkgWeW6p+aomVxyXG4gICAgICovXHJcbiAgICBnZXQoeCwgeSkge1xyXG4gICAgICAgIGNvbnN0IG5ha2EgPSB0aGlzLm5ha2EuZ2V0KHgsIHkpO1xyXG4gICAgICAgIGlmIChuYWthICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ha2E7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21tZW50cy5maW5kKGNvbW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFsZiA9IGNvbW1lbnQud2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNYID0geCA+IGNvbW1lbnQubGVmdCAtIGhhbGYgJiYgeCA8IGNvbW1lbnQubGVmdCArIGhhbGY7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1kgPSB5ID4gY29tbWVudC50b3AgJiYgeSA8IGNvbW1lbnQudG9wICsgY29tbWVudC5vdmVyYWxsU2l6ZTtcclxuICAgICAgICAgICAgICAgIGlmIChpc1ggJiYgaXNZKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIG5ha2HjgrPjg6Hjg7Pjg4hcclxuICovXHJcbmNsYXNzIE5ha2FMaW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKHNtYWxsTGluZXMsIHNpemUpIHtcclxuICAgICAgICAvL+mFjeWIl+WIneacn+WMllxyXG4gICAgICAgIHRoaXMuY29tbWVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLmxhc3RDb21tZW50U3RyZWFtID0gW107XHJcbiAgICAgICAgLy/phY3liJfplbdcclxuICAgICAgICB0aGlzLmFsbGluZXMgPSBzbWFsbExpbmVzO1xyXG4gICAgICAgIC8vY2FudmFz44K144Kk44K6XHJcbiAgICAgICAgdGhpcy5jYW52YXNTaXplID0gc2l6ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogbmFrYeOCs+ODoeODs+ODiOOCkui/veWKoOOBmeOCi1xyXG4gICAgICogQHBhcmFtIGNvbW1lbnQg44Kz44Oh44Oz44OIXHJcbiAgICAgKi9cclxuICAgIGFkZChjb21tZW50KSB7XHJcbiAgICAgICAgbGV0IHRvcCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFsbGluZXM7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gdGhpcy5sYXN0Q29tbWVudFN0cmVhbVtpXTtcclxuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAvL2nooYznm67jgavjgrPjg6Hjg7Pjg4jjgYznhKHjgYTloLTlkIhcclxuICAgICAgICAgICAgICAgIGNhc2UgKGxpbmUgPT09IHVuZGVmaW5lZCk6XHJcbiAgICAgICAgICAgICAgICAvL+WbuuWumuOCs+ODoeOBp+OBguOBo+OBn+WgtOWQiFxyXG4gICAgICAgICAgICAgICAgY2FzZSAoY29tbWVudC5maXhlZCk6XHJcbiAgICAgICAgICAgICAgICAvL+acgOe1gui/veWKoOOCs+ODoeODs+ODiOOBjOWFqOOBpuihqOekuuOBleOCjOOBpuOBhOOBpuOAgeOBquOBiuOBi+OBpOi/veOBhOOBpOOBi+OBquOBhOWgtOWQiFxyXG4gICAgICAgICAgICAgICAgY2FzZSAobGluZS5yZXZlYWwgPCAwICYmIGxpbmUubGlmZSA8IGNvbW1lbnQudG91Y2gpOlxyXG4gICAgICAgICAgICAgICAgLy/jgrPjg6Hjg7Pjg4jjga50b3DjgYxjYW52YXPjga7pq5jjgZXjgpLotoXjgYjjgabjgYTjgotcclxuICAgICAgICAgICAgICAgIGNhc2UgKHRvcCArIGNvbW1lbnQub3ZlcmFsbFNpemUgPiB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0KTpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8v44Gd44KM5Lul5aSW44Gv5qyh44Gu6KGM44KS56K66KqNXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRvcCArPSBsaW5lLm92ZXJhbGxTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgLy/luqfmqJnoqK3lrppcclxuICAgICAgICAgICAgaWYgKGNvbW1lbnQuZml4ZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0b3AgKyBjb21tZW50Lm92ZXJhbGxTaXplID4gdGhpcy5jYW52YXNTaXplLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgLy/lvL7luZXjg6Ljg7zjg4lcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLmNhbnZhc1NpemUuaGVpZ2h0IC0gY29tbWVudC5vdmVyYWxsU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IHRvcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnB1c2goY29tbWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENvbW1lbnRTdHJlYW1baV0gPSBjb21tZW50O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa1geOCjOOBn+OCs+ODoeODs+ODiOOCkuWJiumZpOOBmeOCi1xyXG4gICAgICovXHJcbiAgICBjbGVhbigpIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnRzID0gdGhpcy5jb21tZW50cy5maWx0ZXIoY29tbWVudCA9PiBjb21tZW50LmFsaXZlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5Yem55CGXHJcbiAgICAgKi9cclxuICAgIHRpY2sodnBvcykge1xyXG4gICAgICAgIHRoaXMuY29tbWVudHMuZm9yRWFjaChjb21tZW50ID0+IHtcclxuICAgICAgICAgICAgY29tbWVudC50aWNrKHZwb3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjga7jg6rjgrnjg4jjgpLlj5blvpfjgZnjgotcclxuICAgICAqL1xyXG4gICAgZ2V0TGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21tZW50cztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgKiBAcGFyYW0geCBY5bqn5qiZXHJcbiAgICAgKiBAcGFyYW0geSBZ5bqn5qiZXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBnZXQoeCwgeSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1lbnRzLmZpbmQoY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzWCA9IHggPiBjb21tZW50LmxlZnQgJiYgeCA8IGNvbW1lbnQubGVmdCArIGNvbW1lbnQud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzWSA9IHkgPiBjb21tZW50LnRvcCAmJiB5IDwgY29tbWVudC50b3AgKyBjb21tZW50Lm92ZXJhbGxTaXplO1xyXG4gICAgICAgICAgICBpZiAoaXNYICYmIGlzWSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdHtcclxuICAgIHZpcnNpb246J3YxLjAwJyxcclxuICAgIGJ1aWxkOidEZWJ1ZycsXHJcbiAgICBidWlsZERhdGU6JzIwMjAvMDgvMTUgMDg6MTUgQXNpYS9Ub3lrbycsXHJcbn0iLCJpbXBvcnQgeyBTaXplLCBMYXllciB9IGZyb20gJy4vbW9kdWxlL0NvbW1lbnQnO1xyXG5pbXBvcnQgZGVmYXVsdENvbmZpZyBmcm9tICcuL21vZHVsZS9jb25maWcnO1xyXG5pbXBvcnQgQ29uZmlnIGZyb20gJ3N5c0Vudic7XHJcbi8qKlxyXG4gKiDjg6HjgqTjg7Pjgq/jg6njgrlcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5pY29tbWVudEpTIHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpZCBjYW52YXPjga5JRFxyXG4gICAgICogQHBhcmFtIHdpZHRoIGNhbnZhc+OBruW5hVxyXG4gICAgICogQHBhcmFtIGhlaWdodCBjYW52YXPjga7pq5jjgZVcclxuICAgICAqIEBwYXJhbSBvcHRpb24g44Kq44OX44K344On44OzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGlkLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb24pIHtcclxuICAgICAgICBpZiAoSVNfREVWRUxPUE1FTlQpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLndyaXRlKCfjgZPjga7jg5Djg7zjgrjjg6fjg7Pjga/plovnmbrniYjjga7jgZ/jgoHjgIHkuI3lronlrprjgarmjJnli5XjgpLjgajjgovloLTlkIjjgYzjgYLjgorjgb7jgZnjgIJcXG4nXHJcbiAgICAgICAgICAgICAgICArIGB2ZXJzaW9uOiR7Q29uZmlnLnZpcnNpb259XFxuYFxyXG4gICAgICAgICAgICAgICAgKyBgYnVpbGREYXRlOiR7QlVJTERfREFURX1cXG5gXHJcbiAgICAgICAgICAgICAgICArIGBidWlsZDoke0NvbmZpZy5idWlsZH1gXHJcbiAgICAgICAgICAgICAgICArIGBidWcgcmVwb3J0Omh0dHBzOi8vZ2l0aHViLmNvbS9IYXlhby1IL25pY29tbWVudC1qcy9pc3N1ZXNgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoSVNfREVCVUcpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLndyaXRlKGDjgZPjga7jg5Djg7zjgrjjg6fjg7Pjga/jg4fjg5Djg4PjgrDniYjjgafjgZnjgIJcXG5gXHJcbiAgICAgICAgICAgICAgICArIGB2ZXJzaW9uOiR7Q29uZmlnLnZpcnNpb259XFxuYFxyXG4gICAgICAgICAgICAgICAgKyBgYnVpbGREYXRlOiR7QlVJTERfREFURX1cXG5gXHJcbiAgICAgICAgICAgICAgICArIGBidWlsZDoke0NvbmZpZy5idWlsZH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lvJXmlbDjg4Hjgqfjg4Pjgq9cclxuICAgICAgICB0aGlzLmNoZWNrQXJncyhpZCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgLy9jb250ZXh0XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLl9nZXRDb250ZXh0KGlkLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAvL+OCteOCpOOCulxyXG4gICAgICAgIHRoaXMuY2FudmFzU2l6ZSA9IG5ldyBTaXplKHsgaGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aCB9KTtcclxuICAgICAgICAvL+ODoeOCv+aDheWgsVxyXG4gICAgICAgIHRoaXMubWV0YSA9IG5ldyBNZXRhKCk7XHJcbiAgICAgICAgLy/ooajnpLrmmYLplpNcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gb3B0aW9uID8gb3B0aW9uLmR1cmF0aW9uID8gb3B0aW9uLmR1cmF0aW9uIDogZGVmYXVsdENvbmZpZy5kdXJhdGlvbiA6IGRlZmF1bHRDb25maWcuZHVyYXRpb247XHJcbiAgICAgICAgLy/oh6rli5Xmm7TmlrBcclxuICAgICAgICB0aGlzLm1haW5MYXllck5hbWUgPSBvcHRpb24gPyBvcHRpb24ubGF5ZXJOYW1lID8gb3B0aW9uLmxheWVyTmFtZSA6IGRlZmF1bHRDb25maWcuZGVmYXVsdExheWVyIDogZGVmYXVsdENvbmZpZy5kZWZhdWx0TGF5ZXI7XHJcbiAgICAgICAgLy/jgrXjgqTjgrrjg7vjg5Xjgqnjg7Pjg4hcclxuICAgICAgICB0aGlzLmxpbmVIZWlnaHQgPSBvcHRpb24gPyBvcHRpb24ubGluZWhlZ2h0ID8gb3B0aW9uLmxpbmVoZWdodCA6IGRlZmF1bHRDb25maWcubGluZUhlaWdodCA6IGRlZmF1bHRDb25maWcubGluZUhlaWdodDsgLy/ooajnpLrmmYLplpNcclxuICAgICAgICB0aGlzLmxpbmVzID0ge1xyXG4gICAgICAgICAgICBiaWc6IG9wdGlvbiA/IG9wdGlvbi5iaWdMaW5lcyA/IG9wdGlvbi5iaWdMaW5lcyA6IGRlZmF1bHRDb25maWcuYmlnTGluZXMgOiBkZWZhdWx0Q29uZmlnLmJpZ0xpbmVzLFxyXG4gICAgICAgICAgICBtZWRpdW06IG9wdGlvbiA/IG9wdGlvbi5tZWRpdW1MaW5lcyA/IG9wdGlvbi5tZWRpdW1MaW5lcyA6IGRlZmF1bHRDb25maWcubWVkaXVtTGluZXMgOiBkZWZhdWx0Q29uZmlnLm1lZGl1bUxpbmVzLFxyXG4gICAgICAgICAgICBzbWFsbDogb3B0aW9uID8gb3B0aW9uLnNtYWxsTGluZXMgPyBvcHRpb24uc21hbGxMaW5lcyA6IGRlZmF1bHRDb25maWcuc21hbGxMaW5lcyA6IGRlZmF1bHRDb25maWcuc21hbGxMaW5lc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5maXhlZExpbmVzID0geyBiaWc6IGRlZmF1bHRDb25maWcuZml4LmJpZywgbWVkaXVtOiBkZWZhdWx0Q29uZmlnLmZpeC5tZWRpdW0sIHNtYWxsOiBkZWZhdWx0Q29uZmlnLmZpeC5zbWFsIH07XHJcbiAgICAgICAgdGhpcy5mb25yU2l6ZSA9IHRoaXMuX2dldEZvbnRTaXplKGhlaWdodCwgdGhpcy5saW5lcyk7IC8vZmludFNJemXkuIDopqdcclxuICAgICAgICB0aGlzLmZpeGVkRm9uclNpemUgPSB0aGlzLl9nZXRGb250U2l6ZShoZWlnaHQsIHRoaXMuZml4ZWRMaW5lcyk7XHJcbiAgICAgICAgLy/jg6zjgqTjg6Tjg7xcclxuICAgICAgICB0aGlzLm1haW5MYXllck5hbWUgPSBvcHRpb24gPyBvcHRpb24ubGF5ZXJOYW1lID8gb3B0aW9uLmxheWVyTmFtZSA6IGRlZmF1bHRDb25maWcuZGVmYXVsdExheWVyIDogZGVmYXVsdENvbmZpZy5kZWZhdWx0TGF5ZXI7XHJcbiAgICAgICAgdGhpcy5sYXllcnMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMYXllcih0aGlzLm1haW5MYXllck5hbWUpO1xyXG4gICAgICAgIHRoaXMudG90YWwgPSAwO1xyXG4gICAgICAgIHRoaXMucnVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzUGxheSA9IHRydWU7XHJcbiAgICAgICAgLy/oh6rli5Xmm7TmlrDjg5Xjg6njgrBcclxuICAgICAgICB0aGlzLmF1dG9UaWNrRGlzYWJsZWQgPSBvcHRpb24gPyBvcHRpb24uYXV0b1RpY2tEaXNhYmxlZCA/IG9wdGlvbi5hdXRvVGlja0Rpc2FibGVkIDogZmFsc2UgOiBmYWxzZTtcclxuICAgICAgICBpZiAoSVNfREVCVUcpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLndyaXRlKGBjYW52YXNJRDoke2lkfSwgd2lkdGg6JHt3aWR0aH1weCwgaGVpZ2h0OiR7aGVpZ2h0fXB4YCk7XHJcbiAgICAgICAgICAgIExvZ2dlci53cml0ZSgn5Yid5pyf5YyW44GM5a6M5LqG44GX44G+44GX44Gf44CCJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5hdXRvVGlja0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChJU19ERUJVRylcclxuICAgICAgICAgICAgICAgIExvZ2dlci53cml0ZSgn5pu05paw5Yem55CG44KS6ZaL5aeL44GX44G+44GZ44CCJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGljaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOW8leaVsOODgeOCp+ODg+OCr1xyXG4gICAgICogQHBhcmFtIGlkIGlkXHJcbiAgICAgKiBAcGFyYW0gd2lkdGggd2lkdGhcclxuICAgICAqIEBwYXJhbSBoZWlnaHQgaGVpZ2h0XHJcbiAgICAgKi9cclxuICAgIGNoZWNrQXJncyhpZCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIGlmICghaWQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5BUkdVTUVOVFMuTk9UX0VYSVNULklEKTtcclxuICAgICAgICBpZiAoIXdpZHRoKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuX19JTklUX18uQVJHVU1FTlRTLk5PVF9FWElTVC5XSURUSCk7XHJcbiAgICAgICAgaWYgKCFoZWlnaHQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5BUkdVTUVOVFMuTk9UX0VYSVNULkhFSUdIVCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5BUkdVTUVOVFMuTmFOLldJRFRIKHdpZHRoKSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBoZWlnaHQgIT09ICdudW1iZXInKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuX19JTklUX18uQVJHVU1FTlRTLk5hTi5IRUlHSFQoaGVpZ2h0KSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOCkui/veWKoOOBmeOCi1xyXG4gICAgICogQHBhcmFtIHRleHQg6KGo56S644GZ44KL44Kz44Oh44Oz44OIXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9u44CA44Kq44OX44K344On44Oz44CCO1xyXG4gICAgICovXHJcbiAgICBzZW5kKHRleHQsIG9wdGlvbikge1xyXG4gICAgICAgIGxldCBjdXN0b21BdHRyID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGNvbnN0IGxheWVyID0gb3B0aW9uID8gb3B0aW9uLmxheWVyID8gb3B0aW9uLmxheWVyIDogdGhpcy5tYWluTGF5ZXJOYW1lIDogdGhpcy5tYWluTGF5ZXJOYW1lO1xyXG4gICAgICAgIGNvbnN0IGNvbVR5cGUgPSBvcHRpb24gPyBvcHRpb24udHlwZSA/IG9wdGlvbi50eXBlIDogJ25ha2EnIDogJ25ha2EnO1xyXG4gICAgICAgIGNvbnN0IGNvbVNpemUgPSBvcHRpb24gPyBvcHRpb24uc2l6ZSA/IG9wdGlvbi5zaXplIDogJ21lZGl1bScgOiAnbWVkaXVtJztcclxuICAgICAgICBjb25zdCBjb2xvciA9IG9wdGlvbiA/IG9wdGlvbi5jb2xvciA/IG9wdGlvbi5jb2xvciA6ICcjZmZmJyA6ICcjZmZmJztcclxuICAgICAgICBjb25zdCBiY29sb3IgPSB0aGlzLmdldEJjb2xvcihjb2xvcik7XHJcbiAgICAgICAgY29uc3QgdnBvcyA9IG9wdGlvbiA/IG9wdGlvbi52cG9zID8gb3B0aW9uLnZwb3MgOiAwIDogMDtcclxuICAgICAgICBjb25zdCBmb250TmFtZSA9IG9wdGlvbiA/IG9wdGlvbi5mb250TmFtZSA/IG9wdGlvbi5mb250TmFtZSA6IGRlZmF1bHRDb25maWcuZGVmYXVsdEZvbnQgOiBkZWZhdWx0Q29uZmlnLmRlZmF1bHRGb250O1xyXG4gICAgICAgIGNvbnN0IG9wYWNpdHkgPSBvcHRpb24gPyBvcHRpb24ub3BhY2l0eSA/IG9wdGlvbi5vcGFjaXR5IDogZGVmYXVsdENvbmZpZy5vcGFjaXR5IDogZGVmYXVsdENvbmZpZy5vcGFjaXR5O1xyXG4gICAgICAgIGNvbnN0IGZ1bGwgPSBvcHRpb24gPyBvcHRpb24uZnVsbCA/IG9wdGlvbi5mdWxsIDogZmFsc2UgOiBmYWxzZTtcclxuICAgICAgICBjb25zdCBvbkRpc3Bvc2VkID0gb3B0aW9uID8gb3B0aW9uLm9uRGlzcG9zZWQgPyBvcHRpb24ub25EaXNwb3NlZCA6ICgpID0+IHsgfSA6ICgpID0+IHsgfTtcclxuICAgICAgICB0aGlzLnRvdGFsKys7XHJcbiAgICAgICAgaWYgKG9wdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb24uY3VzdG9tQXR0ciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjdXN0b21BdHRyID0gdGhpcy5fZ2V0QXR0cihvcHRpb24uY3VzdG9tQXR0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY3VzdG9tQXR0ci5zZXQoJ2NvbG9yJywgY29sb3IpO1xyXG4gICAgICAgIGN1c3RvbUF0dHIuc2V0KCdiY29sb3InLCBiY29sb3IpO1xyXG4gICAgICAgIGN1c3RvbUF0dHIuc2V0KCdmb250TmFtZScsIGZvbnROYW1lKTtcclxuICAgICAgICBjdXN0b21BdHRyLnNldCgnb3BhY2l0eScsIG9wYWNpdHkpO1xyXG4gICAgICAgIGN1c3RvbUF0dHIuc2V0KCdmdWxsJywgZnVsbCk7XHJcbiAgICAgICAgY29uc3QgbGF5ZXJPYmogPSB0aGlzLmxheWVycy5nZXQobGF5ZXIpO1xyXG4gICAgICAgIGlmIChsYXllck9iaiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxheWVyT2JqLmFkZCh0ZXh0LCB0aGlzLnRvdGFsLCBjdXN0b21BdHRyLCBjb21UeXBlLCBjb21TaXplLCB7IG9uRGlzcGFzZWQ6IG9uRGlzcG9zZWQgfSwgdnBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuTEFZRVIuTEFZRVJfRE9FU19OT1RfRVhJU1QobGF5ZXIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOS4gOaZguWBnOatolxyXG4gICAgICovXHJcbiAgICBwYXVzZSgpIHtcclxuICAgICAgICB0aGlzLmlzUGxheSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlho3nlJ9cclxuICAgICAqL1xyXG4gICAgcGxheSgpIHtcclxuICAgICAgICB0aGlzLmlzUGxheSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOCkuWJiumZpOOBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIGxheWVyIOODrOOCpOODpOODvFxyXG4gICAgICovXHJcbiAgICBjbGVhcihsYXllcikge1xyXG4gICAgICAgIGlmIChsYXllcikge1xyXG4gICAgICAgICAgICBjb25zdCBsYXllck9iaiA9IHRoaXMubGF5ZXJzLmdldChsYXllcik7XHJcbiAgICAgICAgICAgIGlmIChsYXllck9iaiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBsYXllck9iai5jbGVhcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLkxBWUVSLkxBWUVSX0RPRVNfTk9UX0VYSVNUKGxheWVyKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGF5ZXIuY2xlYXIoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlhajjgabjga7lh6bnkIbjgpLntYLkuobjgZfjgb7jgZlcclxuICAgICAqL1xyXG4gICAgZGlzcG9zZSgpIHtcclxuICAgICAgICB0aGlzLnJ1biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNQbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGxheWVyLmNsZWFyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzU2l6ZS53aWR0aCwgdGhpcy5jYW52YXNTaXplLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5bGe5oCn44KS5Y+W5b6X44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gY3VzdG9tQXR0ciDjgqvjgrnjgr/jg6DlsZ7mgKdcclxuICAgICAqL1xyXG4gICAgX2dldEF0dHIoY3VzdG9tQXR0cikge1xyXG4gICAgICAgIGNvbnN0IG1hcG9iaiA9IG5ldyBNYXAoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhjdXN0b21BdHRyKSkge1xyXG4gICAgICAgICAgICBtYXBvYmouc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWFwb2JqO1xyXG4gICAgfVxyXG4gICAgX2dldEZvbnRTaXplKGhlaWdodCwgbGluZXMpIHtcclxuICAgICAgICBjb25zdCBiaWcgPSBoZWlnaHQgLyBsaW5lcy5iaWc7XHJcbiAgICAgICAgY29uc3QgbWVkaXVtID0gaGVpZ2h0IC8gbGluZXMubWVkaXVtO1xyXG4gICAgICAgIGNvbnN0IHNtYWxsID0gaGVpZ2h0IC8gbGluZXMuc21hbGw7XHJcbiAgICAgICAgcmV0dXJuIHsgYmlnOiBiaWcsIG1lZGl1bTogbWVkaXVtLCBzbWFsbDogc21hbGwgfTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogY2FudmFz44Kz44Oz44OG44Kt44K544OI44KS5Y+W5b6X44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gaWQgSURcclxuICAgICAqIEBwYXJhbSB3aWR0aCDmqKrluYVcclxuICAgICAqIEBwYXJhbSBoZWlnaHQg6auY44GVXHJcbiAgICAgKi9cclxuICAgIF9nZXRDb250ZXh0KGlkLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgY29uc3QgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIGlmICghZWxtKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5FTEVNRU5ULk5PVF9FWElTVChpZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWxtLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICAgICAgZWxtLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgIGVsbS5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcclxuICAgICAgICAgICAgZWxtLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XHJcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IGVsbS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICBpZiAoY3R4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3R4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOODoeOCpOODs+ODq+ODvOODl1xyXG4gICAgICovXHJcbiAgICB0aWNrKHZwb3MsIHJlbmRlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUGxheSkge1xyXG4gICAgICAgICAgICBpZiAocmVuZGVyID09PSB1bmRlZmluZWQgfHwgcmVuZGVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNTaXplLndpZHRoLCB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgICAgIGxheWVyLnRpY2sodGhpcy5tZXRhLmdldENvdW50KCksIHZwb3MsIHJlbmRlcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLm1ldGEubG9vcCgpOyAvL+OCpOODs+OCr+ODquODoeODs+ODiFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ydW4gJiYgIXRoaXMuYXV0b1RpY2tEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4geyB0aGlzLnRpY2sodnBvcyk7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOe4geWPluOCiuiJsuOCkuWPluW+l+OBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIGNvbG9yIOiJslxyXG4gICAgICovXHJcbiAgICBnZXRCY29sb3IoY29sb3IpIHtcclxuICAgICAgICBzd2l0Y2ggKGNvbG9yKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JsYWNrJzpcclxuICAgICAgICAgICAgY2FzZSAnIzAwMCc6XHJcbiAgICAgICAgICAgIGNhc2UgJyMwMDAwMDAnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcjZmZmJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcjMDAwJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaMh+WumuOBl+OBn+S9jee9ruOBq+WtmOWcqOOBmeOCi+OCs+ODoeODs+ODiOOCkuWPluW+l+OBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIHggWOW6p+aomVxyXG4gICAgICogQHBhcmFtIHkgWeW6p+aomVxyXG4gICAgICovXHJcbiAgICBnZXQoeCwgeSkge1xyXG4gICAgICAgIGxldCBjb21tZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICBjb21tZW50ID0gbGF5ZXIuZ2V0KHgsIHkpO1xyXG4gICAgICAgICAgICBpZiAoY29tbWVudClcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gY29tbWVudDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Os44Kk44Ok44O844KS6L+95Yqg44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gbGF5ZXJOYW1lIOODrOOCpOODpOODvOWQjVxyXG4gICAgICovXHJcbiAgICBhZGRMYXllcihsYXllck5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5sYXllcnMuaGFzKGxheWVyTmFtZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLkxBWUVSLkRVUExJQ0FUSU9OKGxheWVyTmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYXllcnMuc2V0KGxheWVyTmFtZSwgbmV3IExheWVyKHRoaXMuY3R4LCB0aGlzLmNhbnZhc1NpemUsIHRoaXMubGluZXMsIHRoaXMuZm9uclNpemUsIHRoaXMuZml4ZWRGb25yU2l6ZSwgdGhpcy5kdXJhdGlvbiwgdGhpcy5saW5lSGVpZ2h0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChJU19ERUJVRykge1xyXG4gICAgICAgICAgICBMb2dnZXIud3JpdGUoYOODrOOCpOODpOODvCBcIiR7bGF5ZXJOYW1lfVwiIOOCkui/veWKoOOBl+OBvuOBl+OBn+OAgmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Os44Kk44Ok44O844KS5YmK6Zmk44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gbGF5ZXJOYW1lIOODrOOCpOODpOODvOWQjVxyXG4gICAgICovXHJcbiAgICByZW1vdmVMYXllcihsYXllck5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5sYXllcnMuaGFzKGxheWVyTmFtZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLkxBWUVSLkRVUExJQ0FUSU9OKGxheWVyTmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYXllcnMuZGVsZXRlKGxheWVyTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChJU19ERUJVRykge1xyXG4gICAgICAgICAgICBMb2dnZXIud3JpdGUoYOODrOOCpOODpOODvCBcIiR7bGF5ZXJOYW1lfVwiIOOCkuWJiumZpOOBl+OBvuOBl+OBn+OAgmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKipcclxuICog44Oh44K/5oOF5aCx44Kv44Op44K5XHJcbiAqL1xyXG5jbGFzcyBNZXRhIHtcclxuICAgIC8qKlxyXG4gICAgICog5Yid5pyf5YyWXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgqvjgqbjg7Pjg4jjgpLlopfjgoTjgZfjgb7jgZlcclxuICAgICAqL1xyXG4gICAgbG9vcCgpIHtcclxuICAgICAgICB0aGlzLmNvdW50Kys7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCq+OCpuODs+ODiOOCkuWPluW+l1xyXG4gICAgICovXHJcbiAgICBnZXRDb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3VudDtcclxuICAgIH1cclxufVxyXG4vKipcclxuICog44Ot44KwXHJcbiAqL1xyXG5jbGFzcyBMb2dnZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiDjg63jgrDjgpLlh7rlipvjgZnjgotcclxuICAgICAqIEBwYXJhbSBsb2cg5pys5paHXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB3cml0ZShsb2cpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgW05pY29tbWVudEpTXSR7bG9nfWApO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiDjgqjjg6njg7xcclxuICovXHJcbmNvbnN0IE5pY29FeGNlcHRpb25zID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3mnJ/ljJbjgqjjg6njg7xcclxuICAgICAqL1xyXG4gICAgX19JTklUX186IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvJXmlbDjgqjjg6njg7xcclxuICAgICAgICAgKi9cclxuICAgICAgICBBUkdVTUVOVFM6IHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOW/heimgeOBquW8leaVsOOBjOWtmOWcqOOBl+OBquOBhFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTk9UX0VYSVNUOiB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIOmrmOOBlVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBIRUlHSFQ6ICdbRVJSXWFyZ3VtZW50IFwiaGVpZ2h0XCIgbXVzdCBiZSBzcGVjaWZpZWQuJyxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICog5qiq5bmFXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIFdJRFRIOiAnW0VSUl1hcmd1bWVudCBcIndpZHRoXCIgbXVzdCBiZSBzcGVjaWZpZWQuJyxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogSURcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgSUQ6ICdbRVJSXWFyZ3VtZW50IFwiaWRcIiBtdXN0IGJlIHNwZWNpZmllZC4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5byV5pWw44Gu5YCk44GM5LiN6YGp5YiH44Gn44GC44KLXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBOYU46IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICog6auY44GV44GM5pWw5a2X44Gn44Gq44GEXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIEhFSUdIVDogKHZhbHVlKSA9PiBgW0VSUl0ke3ZhbHVlfSBpcyBub3QgYSBudW1iZXIuIFwiaGVpZ2h0XCIgbXVzIGJlIGEgbnVtYmVyLmAsXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIOaoquW5heOBjOaVsOWtl+OBp+OBquOBhFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBXSURUSDogKHZhbHVlKSA9PiBgW0VSUl0ke3ZhbHVlfSBpcyBub3QgYSBudW1iZXIuIFwid2lkdGhcIiBtdXMgYmUgYSBudW1iZXIuYCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44GM5a2Y5Zyo44GX44Gq44GE44O7Y2FudmFz44Gn44Gq44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgRUxFTUVOVDoge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6KaB57Sg44GM5a2Y5Zyo44GX44Gq44GEXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBOT1RfRVhJU1Q6IChpZCkgPT4geyByZXR1cm4gYFtFUlJdQ2FudmFzIEVsZW1lbnQgd2hpY2ggaWQgaXMgXCIke2lkfVwiIHdhcyBub3QgZm91bmQuYDsgfSxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOimgee0oOOBjEhUTUxDYW52YXPjgafjgarjgYRcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIE5PVF9BX0NBTlZBU19FTEVNRU5UOiAoaWQpID0+IHsgcmV0dXJuIGBbRVJSXUVsZW1lbnQgd2hpY2ggaWQgaXMgXCIke2lkfVwiIGlzIG5vdCBhIGNhbnZhc0hUTUw1IEVsZW1lbnQuYDsgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jov73liqDmmYLjga7jgqjjg6njg7xcclxuICAgICAqL1xyXG4gICAgU0VORDoge30sXHJcbiAgICAvKipcclxuICAgICAqIOODrOOCpOODpOODvOmWouS/guOBruOCqOODqeODvFxyXG4gICAgICovXHJcbiAgICBMQVlFUjoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOmHjeikh1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIERVUExJQ0FUSU9OOiAobmFtZSkgPT4geyByZXR1cm4gYFtFUlJdVGhlIGxheWVyIG5hbWUgJHtuYW1lfSBhbHJlYWR5IGV4aXN0cy5gOyB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODrOOCpOODpOODvOOBjOWtmOWcqOOBl+OBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIExBWUVSX0RPRVNfTk9UX0VYSVNUOiAobmFtZSkgPT4geyByZXR1cm4gYFtFUlJdQSBsYXllciBuYW1lIGlzICR7bmFtZX0gZG9lcyBub3QgZXhpc3QuYDsgfSxcclxuICAgIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=