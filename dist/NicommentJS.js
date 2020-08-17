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

// CONCATENATED MODULE: ./env/DEB.js
/* harmony default export */ var DEB = ({
  version: 'v1.02',
  build: 'Debug'
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
                + `version:${DEB.version}\n`
                + `buildDate:${"2020/7/17 10:37"}\n`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OaWNvbW1lbnRKUy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvLi9zcmMvdXRpbHMvRGF0YVV0aWxzLnRzIiwid2VicGFjazovL05pY29tbWVudEpTLy4vc3JjL21vZHVsZS9jb25maWcudHMiLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvLi9zcmMvbW9kdWxlL0NvbW1lbnQudHMiLCJ3ZWJwYWNrOi8vTmljb21tZW50SlMvLi9lbnYvREVCLmpzIiwid2VicGFjazovL05pY29tbWVudEpTLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbInZlcnNpb24iLCJidWlsZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1CQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxJQUFJO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxNQUFNO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxNQUFNO0FBQ2hEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDRDQUE0QyxHQUFHLGtCQUFrQixFQUFFO0FBQ25HO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxxQ0FBcUMsR0FBRyxpQ0FBaUM7QUFDcEgsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsK0JBQStCLEtBQUssa0JBQWtCLEVBQUU7QUFDeEY7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGdDQUFnQyxLQUFLLGtCQUFrQixFQUFFO0FBQ2xHLEtBQUs7QUFDTCIsImZpbGUiOiJOaWNvbW1lbnRKUy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk5pY29tbWVudEpTXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk5pY29tbWVudEpTXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGNsYXNzIERhdGFVdGlscyB7XHJcbiAgICBzcGxpdHRlcih2YWx1ZSwgc3BsaXRCeSA9ICcsJykge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuc3BsaXQoc3BsaXRCeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxuICAgIC8vMOWfi+OCgVxyXG4gICAgcGFkZGluZyhudW0sIGRpZ2l0ID0gMiwgcGFkZFN0cmluZyA9ICcwJykge1xyXG4gICAgICAgIGlmIChudW0gPCAxMCAqKiBkaWdpdCkge1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW4gPSBudW0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgbGV0IHBhZGRlZCA9IG9yaWdpbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWdpdCAtIG9yaWdpbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcGFkZGVkID0gcGFkZFN0cmluZyArIHBhZGRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGFkZGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44ON44K544OI44GV44KM44Gf6YWN5YiX44KS6L+U44GX44G+44GZ44CCXHJcbiAgICAgKiBAcGFyYW0gbGVuIOmFjeWIl+mVt1xyXG4gICAgICovXHJcbiAgICBjcmVhdGVOZXN0ZWRBcnJheShsZW4pIHtcclxuICAgICAgICBjb25zdCBhcnIgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuICAgIGNyZWF0ZUFycmF5KGxlbikge1xyXG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgICAgIGFyci5sZW5ndGggPSBsZW47XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVlBPU+OBi+OCieaZgumWk+OCkuioiOeul+OBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIHZwb3MgVlBPU1xyXG4gICAgICovXHJcbiAgICBjYWxjVlBPUyh2cG9zKSB7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kID0gTWF0aC5mbG9vcih2cG9zIC8gMTAwKTtcclxuICAgICAgICBjb25zdCBtaW51dGUgPSBNYXRoLmZsb29yKHNlY29uZCAvIDYwKTtcclxuICAgICAgICBjb25zdCBleHRyYSA9IE1hdGguZmxvb3Ioc2Vjb25kICUgNjApO1xyXG4gICAgICAgIHJldHVybiB7IG1zOiB7IG1pbjogbWludXRlLCBzZWM6IGV4dHJhIH0sIHNlYzogc2Vjb25kIH07XHJcbiAgICB9XHJcbn1cclxuIiwiLy/lrprmlbBcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZnBzOiA2MCxcclxuICAgIGR1cmF0aW9uOiAzLFxyXG4gICAgbGluZUhlaWdodDogMS4yLFxyXG4gICAgYmlnTGluZXM6IDgsXHJcbiAgICBtZWRpdW1MaW5lczogMTEsXHJcbiAgICBzbWFsbExpbmVzOiAxNixcclxuICAgIGZpeDoge1xyXG4gICAgICAgIHNtYWw6IDM4LFxyXG4gICAgICAgIGJpZzogMTYsXHJcbiAgICAgICAgbWVkaXVtOiAyNSxcclxuICAgIH0sXHJcbiAgICBkZWZhdWx0Q29sb3I6ICcjZmZmJyxcclxuICAgIGRlZmF1bHRMYXllcjogJ2Jhc2UnLFxyXG4gICAgZGVmYXVsdEZvbnQ6ICdNUyBQR290aGljJyxcclxuICAgIG9wYWNpdHk6IDEsXHJcbn07XHJcbiIsImltcG9ydCB7IERhdGFVdGlscyB9IGZyb20gJy4uL3V0aWxzL0RhdGFVdGlscyc7XHJcbmltcG9ydCBkZWZhdWx0Q29uZmlnIGZyb20gJy4vY29uZmlnJztcclxuLy91dGlsXHJcbmNvbnN0IGRhdGF1dGwgPSBuZXcgRGF0YVV0aWxzKCk7XHJcbi8v44Kz44Oh44Oz44OI44Kq44OW44K444Kn44Kv44OIXHJcbmV4cG9ydCBjbGFzcyBDb21tZW50QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbSkge1xyXG4gICAgICAgIHRoaXMubGlmZSA9IDA7IC8v5q6L44KK44Kz44Oe5pWwXHJcbiAgICAgICAgdGhpcy5kZWx0YSA9IDA7IC8vMeOCs+ODnuW9k+OBn+OCiuOBrljluqfmqJnjga7lpInph49cclxuICAgICAgICB0aGlzLmxlZnQgPSAwOyAvL1jluqfmqJlcclxuICAgICAgICB0aGlzLnRvcCA9IDA7IC8vWeW6p+aomSjljp/ngrnjga/lt6bkuIopXHJcbiAgICAgICAgdGhpcy5yZXZlYWwgPSAwOyAvL+OCs+ODoeODs+ODiOOBjOeUu+mdouWPs+OBi+OCieWujOWFqOOBq+mcsuWHuuOBmeOCi+OBvuOBp+OBruOCs+ODnuaVsFxyXG4gICAgICAgIHRoaXMudG91Y2ggPSAwOyAvL+OCs+ODoeODs+ODiOOBruW3puerr+OBjOeUu+mdouW3puOBq+WIsOmBlOOBmeOCi+OBvuOBp+OBruOCs+ODnuaVsFxyXG4gICAgICAgIHRoaXMuZml4ZWQgPSBmYWxzZTsgLy/lm7rlrprjg5Xjg6njgrBcclxuICAgICAgICB0aGlzLnR5cGUgPSBwYXJhbS5vcHRpb24ubW9kZTsgLy/jgr/jgqTjg5dcclxuICAgICAgICB0aGlzLmN1c3RvbUF0dHIgPSBwYXJhbS5vcHRpb24uY3VzdG9tQXR0cjsgLy/jgqvjgrnjgr/jg6DlsZ7mgKdcclxuICAgICAgICB0aGlzLm9yaWdpbmFsVGV4dCA9IHBhcmFtLnRleHQ7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGhpcy5fZm9ybWF0Q29tbWVudChwYXJhbS50ZXh0LCB0aGlzLnR5cGUpOyAvL+acrOaWh1xyXG4gICAgICAgIHRoaXMudGV4dEZvclJlbmRlciA9IHRoaXMuX2Zvcm1hdFJlbmRlckNvbW1lbnQodGhpcy50ZXh0KTtcclxuICAgICAgICB0aGlzLnRleHRMZW5ndGggPSBNYXRoLm1heCguLi50aGlzLnRleHQubWFwKHRleHQgPT4gdGV4dC5sZW5ndGgpKTtcclxuICAgICAgICB0aGlzLm1heExlbmd0aEluZGV4ID0gdGhpcy50ZXh0Lm1hcChjb21tZW50ID0+IGNvbW1lbnQubGVuZ3RoKS5pbmRleE9mKHRoaXMudGV4dExlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5jb21tZW50TnVtYmVyID0gcGFyYW0uY29tbWVudE51bWJlcjtcclxuICAgICAgICB0aGlzLmNvbG9yID0gcGFyYW0ub3B0aW9uLmNvbG9yOyAvL+iJslxyXG4gICAgICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBwYXJhbS5vcHRpb24uYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgdGhpcy5saW5lcyA9IHRoaXMuX2dldExpbmVzKHBhcmFtLm9wdGlvbi5jb21tZW50U2l6ZSwgcGFyYW0ubGluZXMpO1xyXG4gICAgICAgIHRoaXMuc2VsZkxpbmVzID0gdGhpcy50ZXh0Lmxlbmd0aDsgLy/ooYzmlbBcclxuICAgICAgICB0aGlzLmN0eCA9IHBhcmFtLmN0eDtcclxuICAgICAgICB0aGlzLmZvbnROYW1lID0gcGFyYW0ub3B0aW9uLmZvbnROYW1lOyAvL+ODleOCqeODs+ODiOWQjVxyXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IHBhcmFtLm9wdGlvbi5vcGFjaXR5OyAvL+mAj+mBjuW6plxyXG4gICAgICAgIHRoaXMuZnVsbCA9IHBhcmFtLm9wdGlvbi5mdWxsOyAvL+iHqOeVjOeCueODquOCteOCpOOCulxyXG4gICAgICAgIHRoaXMuY2FudmFzU2l6ZSA9IHBhcmFtLmNhbnZhc1NpemU7XHJcbiAgICAgICAgdGhpcy5jYW52YXNXaWR0aEZsYXNoID0gcGFyYW0uY2FudmFzV2lkdGhGbGFzaDtcclxuICAgICAgICAvL+WbuuWumuODleODqeOCsFxyXG4gICAgICAgIGlmICh0aGlzLnRleHQubGVuZ3RoID49IHRoaXMubGluZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5maXhlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICAvL3Zwb3Pjg7vooajnpLrmmYLplpNcclxuICAgICAgICB0aGlzLnZwb3MgPSBwYXJhbS5vcHRpb24udnBvcztcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gcGFyYW0ub3B0aW9uLmR1cmF0aW9uIHx8IGRlZmF1bHRDb25maWcuZHVyYXRpb247XHJcbiAgICAgICAgLy/jg5Xjgqnjg7Pjg4jplqLkv4JcclxuICAgICAgICB0aGlzLmZvbnRTaXplU3RyaW5nID0gcGFyYW0ub3B0aW9uLmNvbW1lbnRTaXplO1xyXG4gICAgICAgIFt0aGlzLmZvbnRTaXplLCB0aGlzLndpZHRoLCB0aGlzLm9mZnNldFldID0gdGhpcy5fZ2V0Rm9udCh0aGlzLnRleHRbdGhpcy5tYXhMZW5ndGhJbmRleF0sIHRoaXMuY2FudmFzU2l6ZSwgdGhpcy5jYW52YXNXaWR0aEZsYXNoLCBwYXJhbS5vcHRpb24uY29tbWVudFNpemUsIHBhcmFtLmZvbnRTaXplLCBwYXJhbS5maXhlZEZvbnRTaXplLCB0aGlzLnR5cGUsIHBhcmFtLm9wdGlvbi5saW5laGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmZvbnRTaXplU3RyaW5nID0gcGFyYW0ub3B0aW9uLmNvbW1lbnRTaXplO1xyXG4gICAgICAgIHRoaXMub3ZlcmFsbFNpemUgPSB0aGlzLmZvbnRTaXplICogdGhpcy5zZWxmTGluZXM7XHJcbiAgICAgICAgdGhpcy5hbGl2ZSA9IHRydWU7IC8v55Sf5a2Y44OV44Op44KwXHJcbiAgICAgICAgdGhpcy5vbkRpc3Bvc2VkID0gcGFyYW0ub25EaXNwb3NlZDsgLy/jgrPjg7zjg6vjg5Djg4Pjgq9cclxuICAgICAgICB0aGlzLl9zZXQoKTsgLy/jgrvjg4Pjg4jlrp/ooYxcclxuICAgIH1cclxuICAgIC8v5bGe5oCn5Y+W5b6XXHJcbiAgICBnZXRQcm9wKGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1c3RvbUF0dHIuZ2V0KGtleSk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOWHpueQhlxyXG4gICAgICovXHJcbiAgICB0aWNrKHZwb3MpIHtcclxuICAgICAgICAvL+OCs+ODoeODs+ODiOOBrue0r+ioiOihqOekuuaZgumWk+OBjOaXouWumuOBrjLlgI3ku6XkuIrjgafjgYLjgaPjgZ/loLTlkIjjgIHjgrPjg6Hjg7Pjg4jjgpLliYrpmaTjgZnjgotcclxuICAgICAgICBpZiAodnBvcyA+PSB0aGlzLnZwb3MgKyB0aGlzLmR1cmF0aW9uICogMjAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpZmUtLTtcclxuICAgICAgICAvL25ha2HjgrPjg6Hjg7Pjg4jjga7loLTlkIhcclxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnbmFrYScpIHtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0IC09IHRoaXMuZGVsdGE7XHJcbiAgICAgICAgICAgIHRoaXMucmV2ZWFsLS07XHJcbiAgICAgICAgICAgIHRoaXMudG91Y2gtLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubGlmZSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5raWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjga7nlJ/lrZjjg5Xjg6njgrDjgpLlvLfliLbnmoTjgavpmY3jgo3jgZfjgb7jgZlcclxuICAgICAqL1xyXG4gICAga2lsbCgpIHtcclxuICAgICAgICB0aGlzLmFsaXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbkRpc3Bvc2VkKCk7XHJcbiAgICB9XHJcbiAgICAvL+OCu+ODg+ODiFxyXG4gICAgX3NldCgpIHtcclxuICAgICAgICB0aGlzLmxpZmUgPSAwOyAvL+aui+OCiuOCs+ODnuaVsFxyXG4gICAgICAgIHRoaXMubGVmdCA9IDA7IC8vWOW6p+aomVxyXG4gICAgICAgIHRoaXMudG9wID0gMDsgLy9Z5bqn5qiZKOWOn+eCueOBr+W3puS4iilcclxuICAgICAgICB0aGlzLmRlbHRhID0gMDsgLy8x44Kz44Oe5b2T44Gf44KK44GuWOW6p+aomeOBruWkiemHj1xyXG4gICAgICAgIHRoaXMucmV2ZWFsID0gMDsgLy/jgrPjg6Hjg7Pjg4jjgYznlLvpnaLlj7PjgYvjgonlrozlhajjgavpnLLlh7rjgZnjgovjgb7jgafjga7jgrPjg57mlbBcclxuICAgICAgICB0aGlzLnRvdWNoID0gMDsgLy/jgrPjg6Hjg7Pjg4jjga7lt6bnq6/jgYznlLvpnaLlt6bjgavliLDpgZTjgZnjgovjgb7jgafjga7jgrPjg57mlbBcclxuICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICduYWthJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldE5ha2EoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzaGl0YSc6XHJcbiAgICAgICAgICAgIGNhc2UgJ3VlJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldFNoaXRhVWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL25ha2HjgrPjg6Hjg7Pjg4joqK3lrppcclxuICAgIF9zZXROYWthKCkge1xyXG4gICAgICAgIHRoaXMubGlmZSA9IGRlZmF1bHRDb25maWcuZnBzICogdGhpcy5kdXJhdGlvbjtcclxuICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLmNhbnZhc1NpemUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5kZWx0YSA9ICh0aGlzLmNhbnZhc1NpemUud2lkdGggKyB0aGlzLndpZHRoKSAvIHRoaXMubGlmZTtcclxuICAgICAgICB0aGlzLnJldmVhbCA9IHRoaXMud2lkdGggLyB0aGlzLmRlbHRhO1xyXG4gICAgICAgIHRoaXMudG91Y2ggPSB0aGlzLmNhbnZhc1NpemUud2lkdGggLyB0aGlzLmRlbHRhO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBzaGl044O7dWXjgrPjg6Hjg7Pjg4jjgpLoqK3lrprjgZnjgotcclxuICAgICAqIEBwYXJhbSB3aWR0aCBjYW52YXPjga7mqKrluYVcclxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiDjgrPjg6Hjg7Pjg4jooajnpLrmmYLplpNcclxuICAgICAqL1xyXG4gICAgX3NldFNoaXRhVWUoKSB7XHJcbiAgICAgICAgdGhpcy5saWZlID0gZGVmYXVsdENvbmZpZy5mcHMgKiB0aGlzLmR1cmF0aW9uO1xyXG4gICAgICAgIGlmICh0aGlzLmZpeGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCA9ICh0aGlzLmNhbnZhc1NpemUud2lkdGggLSB0aGlzLndpZHRoKSAvIDI7XHJcbiAgICAgICAgICAgIC8vdGhpcy5sZWZ0ID0gdGhpcy5jYW52YXNTaXplLndpZHRoIC8gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IHRoaXMuY2FudmFzU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9mb25044KS5rG65a6a44GZ44KLXHJcbiAgICBfZ2V0Rm9udCh0ZXh0LCBjYW52YXNTaXplLCBmbGFzaFdpZHRoLCBjb21tZW50U2l6ZSwgZm9udFNpemUsIGZpeGVkRm9udFNpemUsIHR5cGUsIGxpbmVIZWlnaHQpIHtcclxuICAgICAgICBsZXQgb3JpZ2luYWxGb250ID0gdGhpcy5fZ2V0U2l6ZShjb21tZW50U2l6ZSwgZm9udFNpemUpO1xyXG4gICAgICAgIGxldCBmb250ID0gb3JpZ2luYWxGb250O1xyXG4gICAgICAgIC8v44O75pS56KGM44Oq44K144Kk44K6XHJcbiAgICAgICAgLy9vdmVyYWxsU2l6ZeOBq+ebuOW9k+OBmeOCi+mrmOOBleOBjOOAgeaPj+WGmemgmOWfn+OBrjEvM+OCkuS4iuWbnuOCi+WgtOWQiOOBq+OAgVxyXG4gICAgICAgIC8v44Oq44K144Kk44K644KS6KGM44GG44CCXHJcbiAgICAgICAgaWYgKG9yaWdpbmFsRm9udCAqIHRoaXMuc2VsZkxpbmVzID4gY2FudmFzU2l6ZS5oZWlnaHQgLyAzKSB7XHJcbiAgICAgICAgICAgIGZvbnQgPSB0aGlzLl9nZXRTaXplKGNvbW1lbnRTaXplLCBmaXhlZEZvbnRTaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IGAke2ZvbnR9cHggXCJZdSBHb3RoaWNcImA7XHJcbiAgICAgICAgbGV0IGNvbVdpZHRoID0gdGhpcy5jdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XHJcbiAgICAgICAgLy/jg7voh6jnlYzluYXjg6rjgrXjgqTjgrpcclxuICAgICAgICAvL+OCs+ODoeODs+ODiOOBruacgOWkp+W5heOBjOaPj+WGmemgmOWfn+OCkuS4iuWbnuOCi+WgtOWQiOOBq+OAgeaPj+WGmemgmOWfn+OBq+WPjuOBvuOCi+OCiOOBhuOBq+ODquOCteOCpOOCuuOBmeOCi1xyXG4gICAgICAgIGNvbnN0IHdpZHRoT3ZlcmZsb3cgPSBjb21XaWR0aCA+IHRoaXMuY2FudmFzU2l6ZS53aWR0aCAmJiB0eXBlICE9PSAnbmFrYSc7XHJcbiAgICAgICAgaWYgKHdpZHRoT3ZlcmZsb3cgJiYgIXRoaXMuZnVsbCkge1xyXG4gICAgICAgICAgICBmb250ID0gdGhpcy5fbW9kU2l6ZShvcmlnaW5hbEZvbnQsIGNvbVdpZHRoLCB0aGlzLmNhbnZhc1dpZHRoRmxhc2gpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gYCR7Zm9udH1weCBcIll1IEdvdGhpY1wiYDtcclxuICAgICAgICAgICAgY29tV2lkdGggPSB0aGlzLmN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAod2lkdGhPdmVyZmxvdyAmJiB0aGlzLmZ1bGwpIHtcclxuICAgICAgICAgICAgZm9udCA9IHRoaXMuX21vZFNpemUob3JpZ2luYWxGb250LCBjb21XaWR0aCwgdGhpcy5jYW52YXNTaXplLndpZHRoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IGAke2ZvbnR9cHggXCJZdSBHb3RoaWNcImA7XHJcbiAgICAgICAgICAgIGNvbVdpZHRoID0gdGhpcy5jdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG9mZnNldFkgPSB0eXBlID09PSAnc2hpdGEnID8gZm9udCAqIChsaW5lSGVpZ2h0IC0gMSkgKiAtMSA6IGZvbnQgKiAobGluZUhlaWdodCAtIDEpO1xyXG4gICAgICAgIHJldHVybiBbZm9udCwgY29tV2lkdGgsIG9mZnNldFldO1xyXG4gICAgfVxyXG4gICAgLy/jg5Xjgqnjg7Pjg4jjgrXjgqTjgrrkv67mraNcclxuICAgIF9tb2RTaXplKGZvbnQsIHdpZHRoLCBjYW52YXNXaWR0aCkge1xyXG4gICAgICAgIHJldHVybiBmb250ICogY2FudmFzV2lkdGggLyB3aWR0aDtcclxuICAgIH1cclxuICAgIC8v5pS56KGM44Oq44K144Kk44K6XHJcbiAgICAvL2ZvbnRTaXpl5Y+W5b6XXHJcbiAgICBfZ2V0U2l6ZShjb21tZW50U2l6ZSwgZm9udFNpemUpIHtcclxuICAgICAgICBzd2l0Y2ggKGNvbW1lbnRTaXplKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JpZyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9udFNpemUuYmlnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NtYWxsJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb250U2l6ZS5zbWFsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbnRTaXplLm1lZGl1bTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOihjOaVsOOCkuaxguOCgeOCi1xyXG4gICAgICogQHBhcmFtIHNpemUgYmlnL3NtYWxsL21lZGl1beOBruOBhOOBmuOCjOOBi1xyXG4gICAgICogQHBhcmFtIGFsbExpbmVzIGNvbW1lbnRMaW5lc+Wei+OBruOCquODluOCuOOCp+OCr+ODiCjjgZ3jgozjgZ7jgozjga7jgrXjgqTjgrrjgavjgaTjgYTjgabooYzmlbDjgpLooajjgZkpXHJcbiAgICAgKi9cclxuICAgIF9nZXRMaW5lcyhzaXplLCBhbGxMaW5lcykge1xyXG4gICAgICAgIHN3aXRjaCAoc2l6ZSkge1xyXG4gICAgICAgICAgICBjYXNlICdiaWcnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbExpbmVzLmJpZztcclxuICAgICAgICAgICAgY2FzZSAnbWVkaXVtJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGxMaW5lcy5tZWRpdW07XHJcbiAgICAgICAgICAgIGNhc2UgJ3NtYWxsJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGxMaW5lcy5zbWFsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOCkuaVtOW9ouOBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIG9yaWdpbiDjgrPjg6Hjg7Pjg4hcclxuICAgICAqIEBwYXJhbSBjb21tZW50UG9zIOOCs+ODoeODs+ODiOOBruOCv+OCpOODl1xyXG4gICAgICovXHJcbiAgICBfZm9ybWF0Q29tbWVudChvcmlnaW4sIGNvbW1lbnRQb3MpIHtcclxuICAgICAgICBsZXQgZm9ybWF0ZWQgPSBkYXRhdXRsLnNwbGl0dGVyKG9yaWdpbiwgJ1xcbicpO1xyXG4gICAgICAgIGZvcm1hdGVkID0gdGhpcy5fZGVsZXRlQmxhbmsoZm9ybWF0ZWQpO1xyXG4gICAgICAgIGZvcm1hdGVkID0gdGhpcy5fZGVsZXRlRmlyc3RBbmRsYXN0QmxhbmsoZm9ybWF0ZWQpO1xyXG4gICAgICAgIGZvcm1hdGVkID0gdGhpcy5fc29ydEJ5VHlwZShmb3JtYXRlZCwgY29tbWVudFBvcyk7XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdGVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmj4/lhpnnlKjjgrPjg6Hjg7Pjg4jjgpLmlbTlvaLjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBvcmlnaW4g44Kz44Oh44Oz44OIXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudFBvcyDjgrPjg6Hjg7Pjg4jjga7jgr/jgqTjg5dcclxuICAgICAqL1xyXG4gICAgX2Zvcm1hdFJlbmRlckNvbW1lbnQob3JpZ2luKSB7XHJcbiAgICAgICAgbGV0IGZvcm1hdGVkID0gWy4uLm9yaWdpbl07XHJcbiAgICAgICAgZm9ybWF0ZWQgPSB0aGlzLl9kZWxldGVCbGFua0xpbmVGcm9tRW5kKG9yaWdpbik7XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdGVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjgYvjgokz5Zue5Lul5LiK6YCj57aa44GZ44KL5pS56KGM44KS5YmK6Zmk44GX44G+44GZ44CCXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudHMg44Kz44Oh44Oz44OI44Gu44Oq44K544OIXHJcbiAgICAgKi9cclxuICAgIF9kZWxldGVCbGFuayhjb21tZW50TGlzdCkge1xyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlZCA9IFtdO1xyXG4gICAgICAgIC8vZm9yLi4uaW7jg6vjg7zjg5fjgaflm57jgZkgXHJcbiAgICAgICAgZm9yIChjb25zdCB0ZXh0IG9mIGNvbW1lbnRMaXN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQmxhbmsgPSAhdGV4dDtcclxuICAgICAgICAgICAgaWYgKGlzQmxhbmspIHtcclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvdW50IDwgMykge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlZC5wdXNoKHRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkZWxldGVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmnIDliJ3jgajmnIDlvozjga7nqbrnmb3ooYzjgpLliYrpmaTjgZfjgb7jgZnjgIJcclxuICAgICAqIEBwYXJhbSBjb21tZW50cyDjgrPjg6Hjg7Pjg4jjga7jg6rjgrnjg4hcclxuICAgICAqL1xyXG4gICAgX2RlbGV0ZUZpcnN0QW5kbGFzdEJsYW5rKGNvbW1lbnRzKSB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlZCA9IFsuLi5jb21tZW50c107XHJcbiAgICAgICAgZm9yIChjb25zdCBjb21tZW50IG9mIGNvbW1lbnRzKSB7XHJcbiAgICAgICAgICAgIGlmICghY29tbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlZC5zaGlmdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lvozjgo3jgYvjgolcclxuICAgICAgICBjb25zdCByZXZlcnNlZCA9IFsuLi5kZWxldGVkXS5yZXZlcnNlKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb21tZW50IG9mIHJldmVyc2VkKSB7XHJcbiAgICAgICAgICAgIGlmICghY29tbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlZC5wb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkZWxldGVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjga7kvY3nva7jgavjgojjgaPjgabjgr3jg7zjg4jjgZfjgb7jgZlcclxuICAgICAqIEBwYXJhbSBjb21tZW50cyDjgrPjg6Hjg7Pjg4jjga7jg6rjgrnjg4hcclxuICAgICAqIEBwYXJhbSB0eXBlIOOCs+ODoeODs+ODiOOBruS9jee9rlxyXG4gICAgICovXHJcbiAgICBfc29ydEJ5VHlwZShjb21tZW50cywgdHlwZSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlID09PSAnc2hpdGEnID8gY29tbWVudHMucmV2ZXJzZSgpIDogY29tbWVudHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOepuuihjOOCkuWJiumZpOOBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIGNvbW1lbnRzIOOCs+ODoeODs+ODiFxyXG4gICAgICovXHJcbiAgICBfZGVsZXRlQmxhbmtMaW5lRnJvbUVuZChjb21tZW50cykge1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdGVkID0gWy4uLmNvbW1lbnRzXTtcclxuICAgICAgICBjb25zdCByZXZlcnNlZCA9IFsuLi5jb21tZW50c10ucmV2ZXJzZSgpO1xyXG4gICAgICAgIGZvciAoY29uc3QgbGluZSBvZiByZXZlcnNlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc0JsYW5rID0gL15cXHMrJC8udGVzdChsaW5lKSB8fCBsaW5lLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICAgICAgaWYgKGlzQmxhbmspIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdGVkLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tQXR0ci5nZXQoJ2NvbW1lbnROdW1iZXInKSA9PT0gOTU1NjAxKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1hdGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdGVkO1xyXG4gICAgfVxyXG59XHJcbi8v5bqn5qiZ5oOF5aCxXHJcbmV4cG9ydCBjbGFzcyBQb2ludCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3MpIHtcclxuICAgICAgICB0aGlzLnggPSBwb3MueDtcclxuICAgICAgICB0aGlzLnkgPSBwb3MueTtcclxuICAgIH1cclxufVxyXG4vL2hlaWdodDp3aWR0aFxyXG5leHBvcnQgY2xhc3MgU2l6ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBzaXplLmhlaWdodDtcclxuICAgICAgICB0aGlzLndpZHRoID0gc2l6ZS53aWR0aDtcclxuICAgIH1cclxufVxyXG4vL+ODrOOCpOODpOODvOOCr+ODqeOCuVxyXG5leHBvcnQgY2xhc3MgTGF5ZXIge1xyXG4gICAgLy/liJ3mnJ/ljJZcclxuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzU2l6ZSwgbGluZXMsIGNvbW1lbnRTaXplLCBjb21tZW50U2l6ZUZpeGVkLCBkdXJhdGlvbiwgbGluZUhlaWdodCkge1xyXG4gICAgICAgIHRoaXMub25EaXNhcG9zZWQgPSAoKSA9PiB7IH07XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTaXplID0gY2FudmFzU2l6ZTtcclxuICAgICAgICB0aGlzLmNhbnZhc1dpZHRoRmxhc2ggPSBjYW52YXNTaXplLmhlaWdodCAvIDMgKiA0O1xyXG4gICAgICAgIHRoaXMubGluZUhlaWdodCA9IGxpbmVIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5saW5lcyA9IGxpbmVzO1xyXG4gICAgICAgIHRoaXMuZm9uclNpemUgPSBjb21tZW50U2l6ZTtcclxuICAgICAgICB0aGlzLmZpeGVkRm9uclNpemUgPSBjb21tZW50U2l6ZUZpeGVkO1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICB0aGlzLmNvbW1lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5tYXhsaW5lcyA9IGxpbmVzLnNtYWxsO1xyXG4gICAgICAgIHRoaXMubmFrYSA9IG5ldyBOYWthTGluZShsaW5lcy5zbWFsbCwgY2FudmFzU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5zaGl0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMudWUgPSBbXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Os44Kk44Ok44O844Gr44Kz44Oh44Oz44OI44KS6L+95Yqg44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gdGV4dCDjgrPjg6Hjg7Pjg4jmnKzmlodcclxuICAgICAqIEBwYXJhbSBjb21tZW50TnVtYmVyIOOCs+ODoeeVqlxyXG4gICAgICogQHBhcmFtIGN1c3RvbUF0dHIg44Kr44K544K/44Og5bGe5oCnXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBuYWthL3NoaXRhL3Vl44Gu44GE44Ga44KM44GLXHJcbiAgICAgKiBAcGFyYW0gc2l6ZSBiaWcvbWVkaXVtL2xhcmdl44Gu44GE44Ga44KM44GLXHJcbiAgICAgKiBAcGFyYW0gdnBvcyBWUE9TXHJcbiAgICAgKi9cclxuICAgIGFkZCh0ZXh0LCBjb21tZW50TnVtYmVyLCBjdXN0b21BdHRyLCB0eXBlID0gJ25ha2EnLCBzaXplID0gJ21lZGl1bScsIGNhbGxCYWNrLCB2cG9zKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tbWVudHMubGVuZ3RoID4gNDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjb25zdCBvcHJpb25zID0ge1xyXG4gICAgICAgICAgICBtb2RlOiB0eXBlLFxyXG4gICAgICAgICAgICBjb2xvcjogY3VzdG9tQXR0ci5nZXQoJ2NvbG9yJykgfHwgJyNmZmYnLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogY3VzdG9tQXR0ci5nZXQoJ2Jjb2xvcicpIHx8ICcjMDAwJyxcclxuICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGN1c3RvbUF0dHI6IGN1c3RvbUF0dHIsXHJcbiAgICAgICAgICAgIGNvbW1lbnRTaXplOiBzaXplLFxyXG4gICAgICAgICAgICBsaW5laGVpZ2h0OiB0aGlzLmxpbmVIZWlnaHQsXHJcbiAgICAgICAgICAgIHZwb3M6IHZwb3MsXHJcbiAgICAgICAgICAgIGZvbnROYW1lOiBjdXN0b21BdHRyLmdldCgnZm9udE5hbWUnKSxcclxuICAgICAgICAgICAgb3BhY2l0eTogY3VzdG9tQXR0ci5nZXQoJ29wYWNpdHknKSxcclxuICAgICAgICAgICAgZnVsbDogY3VzdG9tQXR0ci5nZXQoJ2Z1bGwnKSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICAgICAgICB0ZXh0OiB0ZXh0LFxyXG4gICAgICAgICAgICBjdHg6IHRoaXMuY3R4LFxyXG4gICAgICAgICAgICBjYW52YXNTaXplOiB0aGlzLmNhbnZhc1NpemUsXHJcbiAgICAgICAgICAgIGNhbnZhc1dpZHRoRmxhc2g6IHRoaXMuY2FudmFzV2lkdGhGbGFzaCxcclxuICAgICAgICAgICAgZm9udFNpemU6IHRoaXMuZm9uclNpemUsXHJcbiAgICAgICAgICAgIGZpeGVkRm9udFNpemU6IHRoaXMuZml4ZWRGb25yU2l6ZSxcclxuICAgICAgICAgICAgbGluZXM6IHRoaXMubGluZXMsXHJcbiAgICAgICAgICAgIG9wdGlvbjogb3ByaW9ucyxcclxuICAgICAgICAgICAgY29tbWVudE51bWJlcjogY29tbWVudE51bWJlcixcclxuICAgICAgICAgICAgb25EaXNwb3NlZDogY2FsbEJhY2sub25EaXNwYXNlZCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRPYmogPSBuZXcgQ29tbWVudEJhc2UocGFyYW0pO1xyXG4gICAgICAgIHN3aXRjaCAoY29tbWVudE9iai50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ25ha2EnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5uYWthLmFkZChjb21tZW50T2JqKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzaGl0YSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmRTaGl0YShjb21tZW50T2JqKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd1ZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmRVZShjb21tZW50T2JqKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5Yem55CGXHJcbiAgICAgKiBAcGFyYW0gY291bnRlciDjg6vjg7zjg5flm57mlbBcclxuICAgICAqL1xyXG4gICAgdGljayhjb3VudGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFZwb3MgPSBvcHRpb25zID8gb3B0aW9ucy52cG9zID8gb3B0aW9ucy52cG9zIDogMCA6IDA7XHJcbiAgICAgICAgY29uc3QgZG9SZW5kZXIgPSBvcHRpb25zID8gb3B0aW9ucy5yZW5kZXIgPyB0cnVlIDogZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzLmZvckVhY2goY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9SZW5kZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyKGNvbW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC50aWNrKGN1cnJlbnRWcG9zKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vbmFrYeOCs+ODoVxyXG4gICAgICAgIGlmIChkb1JlbmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLm5ha2EuZ2V0TGlzdCgpLmZvckVhY2goY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXIoY29tbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5ha2EudGljayhjdXJyZW50VnBvcyk7XHJcbiAgICAgICAgdGhpcy5fY2xlYW4oKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5o+P5YaZ5Yem55CGXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudCDjgrPjg6Hjg7Pjg4hcclxuICAgICAqL1xyXG4gICAgX3JlbmRlcihjb21tZW50KSB7XHJcbiAgICAgICAgdGhpcy5jdHgudGV4dEJhc2VsaW5lID0gJ3RvcCc7XHJcbiAgICAgICAgLy/mj4PjgYjkvY3nva5cclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgY2FzZSBjb21tZW50LnR5cGUgPT09ICduYWthJyB8fCBjb21tZW50LmZpeGVkOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2xlZnQnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBgJHtjb21tZW50LmNvbG9yfWA7XHJcbiAgICAgICAgdGhpcy5jdHguc2hhZG93Q29sb3IgPSBjb21tZW50LmJvcmRlckNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3R4LnNoYWRvd09mZnNldFggPSAxLjU7XHJcbiAgICAgICAgdGhpcy5jdHguc2hhZG93T2Zmc2V0WSA9IDEuNTtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IGNvbW1lbnQub3BhY2l0eTtcclxuICAgICAgICB0aGlzLmN0eC5mb250ID0gYGJvbGQgJHtjb21tZW50LmZvbnRTaXplfXB4IFwiJHtjb21tZW50LmZvbnROYW1lfVwiYDtcclxuICAgICAgICAvL+aPj+WGmeaZguOBq+iAg+aFruOBmeOCi+ato+iyoFxyXG4gICAgICAgIGNvbnN0IGRlbHRhTWludXNPclBsdXMgPSBjb21tZW50LnR5cGUgPT09ICdzaGl0YScgPyAtMSA6IDE7XHJcbiAgICAgICAgY29uc3QgZGVsdGEgPSBkZWx0YU1pbnVzT3JQbHVzICogY29tbWVudC5mb250U2l6ZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbW1lbnQudGV4dEZvclJlbmRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChjb21tZW50LnRleHRGb3JSZW5kZXJbaV0sIGNvbW1lbnQubGVmdCwgY29tbWVudC50b3AgKyBjb21tZW50Lm9mZnNldFkgKyBkZWx0YSAqIGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI44KS5YmK6Zmk44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gIG9wdGlvbiDmnIDliJ3jga7jgrPjg6Hjg7Pjg4jjgb7jgZ/jga/jgIHmnIDlvozjga7jgrPjg6Hjg7Pjg4jjga7jgb/jgpLliYrpmaTjgZnjgovjgZPjgajjgYzlh7rmnaXjgb7jgZnjgIJcclxuICAgICAqL1xyXG4gICAgY2xlYXIob3B0aW9uKSB7XHJcbiAgICAgICAgc3dpdGNoIChvcHRpb24pIHtcclxuICAgICAgICAgICAgY2FzZSB1bmRlZmluZWQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzLmZvckVhY2goY29tbWVudCA9PiBjb21tZW50LmtpbGwoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ha2EgPSBuZXcgTmFrYUxpbmUodGhpcy5saW5lcy5zbWFsbCwgdGhpcy5jYW52YXNTaXplKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudWUgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hpdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdmaXJzdCc6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21tZW50cy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50c1swXS5raWxsKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbGFzdCc6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21tZW50cy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50c1t0aGlzLmNvbW1lbnRzLmxlbmd0aCAtIDFdLmtpbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOmFjeWIl+OBi+OCieODleODqeOCsOOBjOmZjeOCiuOBpuOBhOOCi+OCs+ODoeODs+ODiOOCkuWJiumZpFxyXG4gICAgICovXHJcbiAgICBfY2xlYW4oKSB7XHJcbiAgICAgICAgdGhpcy5jb21tZW50cyA9IHRoaXMuY29tbWVudHMuZmlsdGVyKGNvbW1ldCA9PiBjb21tZXQuYWxpdmUpO1xyXG4gICAgICAgIC8vbmFrYeOCs+ODoVxyXG4gICAgICAgIHRoaXMubmFrYS5jbGVhbigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBzaGl0YeOCs+ODoeODs+ODiOOCkui/veWKoOOBmeOCi1xyXG4gICAgICogQHBhcmFtIGNvbW1lbnQg44Kz44Oh44Oz44OI44Kq44OW44K444Kn44Kv44OIXHJcbiAgICAgKi9cclxuICAgIF9hcHBlbmRTaGl0YShjb21tZW50KSB7XHJcbiAgICAgICAgLy9zaGl0YeOCs+ODoeODs+ODiFxyXG4gICAgICAgIGxldCBib3R0b20gPSB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDA7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zaGl0YVtpXSAmJiB0aGlzLnNoaXRhW2ldLmFsaXZlICYmICFjb21tZW50LmZpeGVkKSB7XHJcbiAgICAgICAgICAgICAgICBib3R0b20gLT0gdGhpcy5zaGl0YVtpXS5vdmVyYWxsU2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnNoaXRhLmxlbmd0aCA9PT0gMDpcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5zaGl0YS5sZW5ndGggPD0gaTpcclxuICAgICAgICAgICAgICAgIGNhc2UgIXRoaXMuc2hpdGFbaV0uYWxpdmU6XHJcbiAgICAgICAgICAgICAgICAvL+WbuuWumuOCs+ODoeODs+ODiOOBp+OBguOBo+OBn+WgtOWQiFxyXG4gICAgICAgICAgICAgICAgY2FzZSBjb21tZW50LmZpeGVkOlxyXG4gICAgICAgICAgICAgICAgLy/jgrPjg6Hjg7Pjg4jjgYzooajnpLrpmZDnlYzjgpLotoXjgYjjgovloLTlkIhcclxuICAgICAgICAgICAgICAgIGNhc2UgYm90dG9tIC0gY29tbWVudC5vdmVyYWxsU2l6ZSArIGNvbW1lbnQub2Zmc2V0WSA8IDA6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgaWYgKGNvbW1lbnQuZml4ZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gdGhpcy5jYW52YXNTaXplLmhlaWdodCAtIGNvbW1lbnQuZm9udFNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYm90dG9tIC0gY29tbWVudC5vdmVyYWxsU2l6ZSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLmNhbnZhc1NpemUuaGVpZ2h0IC0gY29tbWVudC5vdmVyYWxsU2l6ZSArIGNvbW1lbnQub2Zmc2V0WSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IGJvdHRvbSAtIGNvbW1lbnQub3ZlcmFsbFNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICB0aGlzLnNoaXRhW2ldID0gY29tbWVudDtcclxuICAgICAgICAgICAgdGhpcy5jb21tZW50cy5wdXNoKGNvbW1lbnQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBzaGl0YeOCs+ODoeODs+ODiOOCkui/veWKoOOBmeOCi1xyXG4gICAgICogQHBhcmFtIGNvbW1lbnQg44Kz44Oh44Oz44OI44Kq44OW44K444Kn44Kv44OIXHJcbiAgICAgKi9cclxuICAgIF9hcHBlbmRVZShjb21tZW50KSB7XHJcbiAgICAgICAgLy9zaGl0YeOCs+ODoeODs+ODiFxyXG4gICAgICAgIGxldCB0b3AgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDA7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51ZVtpXSAmJiB0aGlzLnVlW2ldLmFsaXZlICYmICFjb21tZW50LmZpeGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0b3AgKz0gdGhpcy51ZVtpXS5vdmVyYWxsU2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnVlLmxlbmd0aCA9PT0gMDpcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy51ZS5sZW5ndGggPD0gaTpcclxuICAgICAgICAgICAgICAgIGNhc2UgIXRoaXMudWVbaV0uYWxpdmU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNvbW1lbnQuZml4ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRvcCArIGNvbW1lbnQub3ZlcmFsbFNpemUgKyBjb21tZW50Lm9mZnNldFkgPiB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIGlmIChjb21tZW50LmZpeGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodG9wICsgY29tbWVudC5vdmVyYWxsU2l6ZSArIGNvbW1lbnQub2Zmc2V0WSA+IHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLmNhbnZhc1NpemUuaGVpZ2h0IC0gY29tbWVudC5vdmVyYWxsU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnRvcCA9IHRvcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIHRoaXMudWVbaV0gPSBjb21tZW50O1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnB1c2goY29tbWVudCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaMh+WumuOBl+OBn+S9jee9ruOBq+WtmOWcqOOBmeOCi+OCs+ODoeODs+ODiOOBrumFjeWIl+OCkuWPluW+l+OBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIHggWOW6p+aomVxyXG4gICAgICogQHBhcmFtIHkgWeW6p+aomVxyXG4gICAgICovXHJcbiAgICBnZXQoeCwgeSkge1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRzID0gW107XHJcbiAgICAgICAgY29uc3QgbmFrYSA9IHRoaXMubmFrYS5nZXQoeCwgeSk7XHJcbiAgICAgICAgaWYgKG5ha2EgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb21tZW50cy5wdXNoKG5ha2EpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1ZXNoaXRhID0gdGhpcy5jb21tZW50cy5maWx0ZXIoY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhbGYgPSBjb21tZW50LndpZHRoIC8gMjtcclxuICAgICAgICAgICAgY29uc3QgaXNYID0geCA+IGNvbW1lbnQubGVmdCAtIGhhbGYgJiYgeCA8IGNvbW1lbnQubGVmdCArIGhhbGY7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzWSA9IHkgPiBjb21tZW50LnRvcCAmJiB5IDwgY29tbWVudC50b3AgKyBjb21tZW50Lm92ZXJhbGxTaXplO1xyXG4gICAgICAgICAgICByZXR1cm4gaXNYICYmIGlzWTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb21tZW50cy5wdXNoKC4uLnVlc2hpdGEpO1xyXG4gICAgICAgIHJldHVybiBjb21tZW50cztcclxuICAgIH1cclxufVxyXG4vKipcclxuICogbmFrYeOCs+ODoeODs+ODiFxyXG4gKi9cclxuY2xhc3MgTmFrYUxpbmUge1xyXG4gICAgY29uc3RydWN0b3Ioc21hbGxMaW5lcywgc2l6ZSkge1xyXG4gICAgICAgIC8v6YWN5YiX5Yid5pyf5YyWXHJcbiAgICAgICAgdGhpcy5jb21tZW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMubGFzdENvbW1lbnRTdHJlYW0gPSBbXTtcclxuICAgICAgICAvL+mFjeWIl+mVt1xyXG4gICAgICAgIHRoaXMuYWxsaW5lcyA9IHNtYWxsTGluZXM7XHJcbiAgICAgICAgLy9jYW52YXPjgrXjgqTjgrpcclxuICAgICAgICB0aGlzLmNhbnZhc1NpemUgPSBzaXplO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBuYWth44Kz44Oh44Oz44OI44KS6L+95Yqg44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gY29tbWVudCDjgrPjg6Hjg7Pjg4hcclxuICAgICAqL1xyXG4gICAgYWRkKGNvbW1lbnQpIHtcclxuICAgICAgICBsZXQgdG9wID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWxsaW5lczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSB0aGlzLmxhc3RDb21tZW50U3RyZWFtW2ldO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIC8vaeihjOebruOBq+OCs+ODoeODs+ODiOOBjOeEoeOBhOWgtOWQiFxyXG4gICAgICAgICAgICAgICAgY2FzZSAobGluZSA9PT0gdW5kZWZpbmVkKTpcclxuICAgICAgICAgICAgICAgIC8v5Zu65a6a44Kz44Oh44Gn44GC44Gj44Gf5aC05ZCIXHJcbiAgICAgICAgICAgICAgICBjYXNlIChjb21tZW50LmZpeGVkKTpcclxuICAgICAgICAgICAgICAgIC8v5pyA57WC6L+95Yqg44Kz44Oh44Oz44OI44GM5YWo44Gm6KGo56S644GV44KM44Gm44GE44Gm44CB44Gq44GK44GL44Gk6L+944GE44Gk44GL44Gq44GE5aC05ZCIXHJcbiAgICAgICAgICAgICAgICBjYXNlIChsaW5lLnJldmVhbCA8IDAgJiYgbGluZS5saWZlIDwgY29tbWVudC50b3VjaCk6XHJcbiAgICAgICAgICAgICAgICAvL+OCs+ODoeODs+ODiOOBrnRvcOOBjGNhbnZhc+OBrumrmOOBleOCkui2heOBiOOBpuOBhOOCi1xyXG4gICAgICAgICAgICAgICAgY2FzZSAodG9wICsgY29tbWVudC5vdmVyYWxsU2l6ZSA+IHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQpOlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy/jgZ3jgozku6XlpJbjga/mrKHjga7ooYzjgpLnorroqo1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wICs9IGxpbmUub3ZlcmFsbFNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAvL+W6p+aomeioreWumlxyXG4gICAgICAgICAgICBpZiAoY29tbWVudC5maXhlZCkge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC50b3AgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRvcCArIGNvbW1lbnQub3ZlcmFsbFNpemUgPiB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAvL+W8vuW5leODouODvOODiVxyXG4gICAgICAgICAgICAgICAgY29tbWVudC50b3AgPSBNYXRoLnJhbmRvbSgpICogKHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQgLSBjb21tZW50Lm92ZXJhbGxTaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudG9wID0gdG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWVudHMucHVzaChjb21tZW50KTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q29tbWVudFN0cmVhbVtpXSA9IGNvbW1lbnQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5rWB44KM44Gf44Kz44Oh44Oz44OI44KS5YmK6Zmk44GZ44KLXHJcbiAgICAgKi9cclxuICAgIGNsZWFuKCkge1xyXG4gICAgICAgIHRoaXMuY29tbWVudHMgPSB0aGlzLmNvbW1lbnRzLmZpbHRlcihjb21tZW50ID0+IGNvbW1lbnQuYWxpdmUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDlh6bnkIZcclxuICAgICAqL1xyXG4gICAgdGljayh2cG9zKSB7XHJcbiAgICAgICAgdGhpcy5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBjb21tZW50LnRpY2sodnBvcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOBruODquOCueODiOOCkuWPluW+l+OBmeOCi1xyXG4gICAgICovXHJcbiAgICBnZXRMaXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1lbnRzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgrPjg6Hjg7Pjg4jjgpLlj5blvpfjgZnjgotcclxuICAgICAqIEBwYXJhbSB4IFjluqfmqJlcclxuICAgICAqIEBwYXJhbSB5IFnluqfmqJlcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGdldCh4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWVudHMuZmluZChjb21tZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNYID0geCA+IGNvbW1lbnQubGVmdCAmJiB4IDwgY29tbWVudC5sZWZ0ICsgY29tbWVudC53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaXNZID0geSA+IGNvbW1lbnQudG9wICYmIHkgPCBjb21tZW50LnRvcCArIGNvbW1lbnQub3ZlcmFsbFNpemU7XHJcbiAgICAgICAgICAgIGlmIChpc1ggJiYgaXNZKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0e1xyXG4gICAgdmVyc2lvbjondjEuMDInLFxyXG4gICAgYnVpbGQ6J0RlYnVnJyxcclxufSIsImltcG9ydCB7IFNpemUsIExheWVyIH0gZnJvbSAnLi9tb2R1bGUvQ29tbWVudCc7XHJcbmltcG9ydCBkZWZhdWx0Q29uZmlnIGZyb20gJy4vbW9kdWxlL2NvbmZpZyc7XHJcbmltcG9ydCBDb25maWcgZnJvbSAnc3lzRW52JztcclxuLyoqXHJcbiAqIOODoeOCpOODs+OCr+ODqeOCuVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmljb21tZW50SlMge1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGlkIGNhbnZhc+OBrklEXHJcbiAgICAgKiBAcGFyYW0gd2lkdGggY2FudmFz44Gu5bmFXHJcbiAgICAgKiBAcGFyYW0gaGVpZ2h0IGNhbnZhc+OBrumrmOOBlVxyXG4gICAgICogQHBhcmFtIG9wdGlvbiDjgqrjg5fjgrfjg6fjg7NcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoaWQsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbikge1xyXG4gICAgICAgIGlmIChJU19ERVZFTE9QTUVOVCkge1xyXG4gICAgICAgICAgICBMb2dnZXIud3JpdGUoJ+OBk+OBruODkOODvOOCuOODp+ODs+OBr+mWi+eZuueJiOOBruOBn+OCgeOAgeS4jeWuieWumuOBquaMmeWLleOCkuOBqOOCi+WgtOWQiOOBjOOBguOCiuOBvuOBmeOAglxcbidcclxuICAgICAgICAgICAgICAgICsgYHZlcnNpb246JHtDb25maWcudmVyc2lvbn1AYnVpbGQ6JHtCVUlMRF9EQVRFX0RFVn1cXG5gXHJcbiAgICAgICAgICAgICAgICArIGBidWlsZERhdGU6JHtCVUlMRF9EQVRFfVxcbmBcclxuICAgICAgICAgICAgICAgICsgYGJ1aWxkOiR7Q29uZmlnLmJ1aWxkfVxcbmBcclxuICAgICAgICAgICAgICAgICsgYGJ1ZyByZXBvcnQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9IYXlhby1IL25pY29tbWVudC1qcy9pc3N1ZXNgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoSVNfREVCVUcpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLndyaXRlKGDjgZPjga7jg5Djg7zjgrjjg6fjg7Pjga/jg4fjg5Djg4PjgrDniYjjgafjgZnjgIJcXG5gXHJcbiAgICAgICAgICAgICAgICArIGB2ZXJzaW9uOiR7Q29uZmlnLnZlcnNpb259XFxuYFxyXG4gICAgICAgICAgICAgICAgKyBgYnVpbGREYXRlOiR7QlVJTERfREFURX1cXG5gXHJcbiAgICAgICAgICAgICAgICArIGBidWlsZDoke0NvbmZpZy5idWlsZH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lvJXmlbDjg4Hjgqfjg4Pjgq9cclxuICAgICAgICB0aGlzLmNoZWNrQXJncyhpZCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgLy9jb250ZXh0XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLl9nZXRDb250ZXh0KGlkLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAvL+OCteOCpOOCulxyXG4gICAgICAgIHRoaXMuY2FudmFzU2l6ZSA9IG5ldyBTaXplKHsgaGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aCB9KTtcclxuICAgICAgICAvL+ODoeOCv+aDheWgsVxyXG4gICAgICAgIHRoaXMubWV0YSA9IG5ldyBNZXRhKCk7XHJcbiAgICAgICAgLy/ooajnpLrmmYLplpNcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gb3B0aW9uID8gb3B0aW9uLmR1cmF0aW9uID8gb3B0aW9uLmR1cmF0aW9uIDogZGVmYXVsdENvbmZpZy5kdXJhdGlvbiA6IGRlZmF1bHRDb25maWcuZHVyYXRpb247XHJcbiAgICAgICAgLy/oh6rli5Xmm7TmlrBcclxuICAgICAgICB0aGlzLm1haW5MYXllck5hbWUgPSBvcHRpb24gPyBvcHRpb24ubGF5ZXJOYW1lID8gb3B0aW9uLmxheWVyTmFtZSA6IGRlZmF1bHRDb25maWcuZGVmYXVsdExheWVyIDogZGVmYXVsdENvbmZpZy5kZWZhdWx0TGF5ZXI7XHJcbiAgICAgICAgLy/jgrXjgqTjgrrjg7vjg5Xjgqnjg7Pjg4hcclxuICAgICAgICB0aGlzLmxpbmVIZWlnaHQgPSBvcHRpb24gPyBvcHRpb24ubGluZWhlZ2h0ID8gb3B0aW9uLmxpbmVoZWdodCA6IGRlZmF1bHRDb25maWcubGluZUhlaWdodCA6IGRlZmF1bHRDb25maWcubGluZUhlaWdodDsgLy/ooajnpLrmmYLplpNcclxuICAgICAgICB0aGlzLmxpbmVzID0ge1xyXG4gICAgICAgICAgICBiaWc6IG9wdGlvbiA/IG9wdGlvbi5iaWdMaW5lcyA/IG9wdGlvbi5iaWdMaW5lcyA6IGRlZmF1bHRDb25maWcuYmlnTGluZXMgOiBkZWZhdWx0Q29uZmlnLmJpZ0xpbmVzLFxyXG4gICAgICAgICAgICBtZWRpdW06IG9wdGlvbiA/IG9wdGlvbi5tZWRpdW1MaW5lcyA/IG9wdGlvbi5tZWRpdW1MaW5lcyA6IGRlZmF1bHRDb25maWcubWVkaXVtTGluZXMgOiBkZWZhdWx0Q29uZmlnLm1lZGl1bUxpbmVzLFxyXG4gICAgICAgICAgICBzbWFsbDogb3B0aW9uID8gb3B0aW9uLnNtYWxsTGluZXMgPyBvcHRpb24uc21hbGxMaW5lcyA6IGRlZmF1bHRDb25maWcuc21hbGxMaW5lcyA6IGRlZmF1bHRDb25maWcuc21hbGxMaW5lc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5maXhlZExpbmVzID0geyBiaWc6IGRlZmF1bHRDb25maWcuZml4LmJpZywgbWVkaXVtOiBkZWZhdWx0Q29uZmlnLmZpeC5tZWRpdW0sIHNtYWxsOiBkZWZhdWx0Q29uZmlnLmZpeC5zbWFsIH07XHJcbiAgICAgICAgdGhpcy5mb25yU2l6ZSA9IHRoaXMuX2dldEZvbnRTaXplKGhlaWdodCwgdGhpcy5saW5lcyk7IC8vZmludFNJemXkuIDopqdcclxuICAgICAgICB0aGlzLmZpeGVkRm9uclNpemUgPSB0aGlzLl9nZXRGb250U2l6ZShoZWlnaHQsIHRoaXMuZml4ZWRMaW5lcyk7XHJcbiAgICAgICAgLy/jg6zjgqTjg6Tjg7xcclxuICAgICAgICB0aGlzLm1haW5MYXllck5hbWUgPSBvcHRpb24gPyBvcHRpb24ubGF5ZXJOYW1lID8gb3B0aW9uLmxheWVyTmFtZSA6IGRlZmF1bHRDb25maWcuZGVmYXVsdExheWVyIDogZGVmYXVsdENvbmZpZy5kZWZhdWx0TGF5ZXI7XHJcbiAgICAgICAgdGhpcy5sYXllcnMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMYXllcih0aGlzLm1haW5MYXllck5hbWUpO1xyXG4gICAgICAgIHRoaXMudG90YWwgPSAwO1xyXG4gICAgICAgIHRoaXMucnVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzUGxheSA9IHRydWU7XHJcbiAgICAgICAgLy/oh6rli5Xmm7TmlrDjg5Xjg6njgrBcclxuICAgICAgICB0aGlzLmF1dG9UaWNrRGlzYWJsZWQgPSBvcHRpb24gPyBvcHRpb24uYXV0b1RpY2tEaXNhYmxlZCA/IG9wdGlvbi5hdXRvVGlja0Rpc2FibGVkIDogZmFsc2UgOiBmYWxzZTtcclxuICAgICAgICBpZiAoSVNfREVCVUcpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLndyaXRlKGBjYW52YXNJRDoke2lkfSwgd2lkdGg6JHt3aWR0aH1weCwgaGVpZ2h0OiR7aGVpZ2h0fXB4YCk7XHJcbiAgICAgICAgICAgIExvZ2dlci53cml0ZSgn5Yid5pyf5YyW44GM5a6M5LqG44GX44G+44GX44Gf44CCJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5hdXRvVGlja0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChJU19ERUJVRylcclxuICAgICAgICAgICAgICAgIExvZ2dlci53cml0ZSgn5pu05paw5Yem55CG44KS6ZaL5aeL44GX44G+44GZ44CCJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGljaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOW8leaVsOODgeOCp+ODg+OCr1xyXG4gICAgICogQHBhcmFtIGlkIGlkXHJcbiAgICAgKiBAcGFyYW0gd2lkdGggd2lkdGhcclxuICAgICAqIEBwYXJhbSBoZWlnaHQgaGVpZ2h0XHJcbiAgICAgKi9cclxuICAgIGNoZWNrQXJncyhpZCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIGlmICghaWQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5BUkdVTUVOVFMuTk9UX0VYSVNULklEKTtcclxuICAgICAgICBpZiAoIXdpZHRoKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuX19JTklUX18uQVJHVU1FTlRTLk5PVF9FWElTVC5XSURUSCk7XHJcbiAgICAgICAgaWYgKCFoZWlnaHQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5BUkdVTUVOVFMuTk9UX0VYSVNULkhFSUdIVCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5BUkdVTUVOVFMuTmFOLldJRFRIKHdpZHRoKSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBoZWlnaHQgIT09ICdudW1iZXInKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuX19JTklUX18uQVJHVU1FTlRTLk5hTi5IRUlHSFQoaGVpZ2h0KSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOCkui/veWKoOOBmeOCi1xyXG4gICAgICogQHBhcmFtIHRleHQg6KGo56S644GZ44KL44Kz44Oh44Oz44OIXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9u44CA44Kq44OX44K344On44Oz44CCO1xyXG4gICAgICovXHJcbiAgICBzZW5kKHRleHQsIG9wdGlvbikge1xyXG4gICAgICAgIGxldCBjdXN0b21BdHRyID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGNvbnN0IGxheWVyID0gb3B0aW9uID8gb3B0aW9uLmxheWVyID8gb3B0aW9uLmxheWVyIDogdGhpcy5tYWluTGF5ZXJOYW1lIDogdGhpcy5tYWluTGF5ZXJOYW1lO1xyXG4gICAgICAgIGNvbnN0IGNvbVR5cGUgPSBvcHRpb24gPyBvcHRpb24udHlwZSA/IG9wdGlvbi50eXBlIDogJ25ha2EnIDogJ25ha2EnO1xyXG4gICAgICAgIGNvbnN0IGNvbVNpemUgPSBvcHRpb24gPyBvcHRpb24uc2l6ZSA/IG9wdGlvbi5zaXplIDogJ21lZGl1bScgOiAnbWVkaXVtJztcclxuICAgICAgICBjb25zdCBjb2xvciA9IG9wdGlvbiA/IG9wdGlvbi5jb2xvciA/IG9wdGlvbi5jb2xvciA6ICcjZmZmJyA6ICcjZmZmJztcclxuICAgICAgICBjb25zdCBiY29sb3IgPSB0aGlzLmdldEJjb2xvcihjb2xvcik7XHJcbiAgICAgICAgY29uc3QgdnBvcyA9IG9wdGlvbiA/IG9wdGlvbi52cG9zID8gb3B0aW9uLnZwb3MgOiAwIDogMDtcclxuICAgICAgICBjb25zdCBmb250TmFtZSA9IG9wdGlvbiA/IG9wdGlvbi5mb250TmFtZSA/IG9wdGlvbi5mb250TmFtZSA6IGRlZmF1bHRDb25maWcuZGVmYXVsdEZvbnQgOiBkZWZhdWx0Q29uZmlnLmRlZmF1bHRGb250O1xyXG4gICAgICAgIGNvbnN0IG9wYWNpdHkgPSBvcHRpb24gPyBvcHRpb24ub3BhY2l0eSA/IG9wdGlvbi5vcGFjaXR5IDogZGVmYXVsdENvbmZpZy5vcGFjaXR5IDogZGVmYXVsdENvbmZpZy5vcGFjaXR5O1xyXG4gICAgICAgIGNvbnN0IGZ1bGwgPSBvcHRpb24gPyBvcHRpb24uZnVsbCA/IG9wdGlvbi5mdWxsIDogZmFsc2UgOiBmYWxzZTtcclxuICAgICAgICBjb25zdCBvbkRpc3Bvc2VkID0gb3B0aW9uID8gb3B0aW9uLm9uRGlzcG9zZWQgPyBvcHRpb24ub25EaXNwb3NlZCA6ICgpID0+IHsgfSA6ICgpID0+IHsgfTtcclxuICAgICAgICB0aGlzLnRvdGFsKys7XHJcbiAgICAgICAgaWYgKG9wdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb24uY3VzdG9tQXR0ciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjdXN0b21BdHRyID0gdGhpcy5fZ2V0QXR0cihvcHRpb24uY3VzdG9tQXR0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY3VzdG9tQXR0ci5zZXQoJ2NvbG9yJywgY29sb3IpO1xyXG4gICAgICAgIGN1c3RvbUF0dHIuc2V0KCdiY29sb3InLCBiY29sb3IpO1xyXG4gICAgICAgIGN1c3RvbUF0dHIuc2V0KCdmb250TmFtZScsIGZvbnROYW1lKTtcclxuICAgICAgICBjdXN0b21BdHRyLnNldCgnb3BhY2l0eScsIG9wYWNpdHkpO1xyXG4gICAgICAgIGN1c3RvbUF0dHIuc2V0KCdmdWxsJywgZnVsbCk7XHJcbiAgICAgICAgY29uc3QgbGF5ZXJPYmogPSB0aGlzLmxheWVycy5nZXQobGF5ZXIpO1xyXG4gICAgICAgIGlmIChsYXllck9iaiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxheWVyT2JqLmFkZCh0ZXh0LCB0aGlzLnRvdGFsLCBjdXN0b21BdHRyLCBjb21UeXBlLCBjb21TaXplLCB7IG9uRGlzcGFzZWQ6IG9uRGlzcG9zZWQgfSwgdnBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTmljb0V4Y2VwdGlvbnMuTEFZRVIuTEFZRVJfRE9FU19OT1RfRVhJU1QobGF5ZXIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOS4gOaZguWBnOatolxyXG4gICAgICovXHJcbiAgICBwYXVzZSgpIHtcclxuICAgICAgICB0aGlzLmlzUGxheSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlho3nlJ9cclxuICAgICAqL1xyXG4gICAgcGxheSgpIHtcclxuICAgICAgICB0aGlzLmlzUGxheSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOOCs+ODoeODs+ODiOOCkuWJiumZpOOBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIGxheWVyIOODrOOCpOODpOODvFxyXG4gICAgICovXHJcbiAgICBjbGVhcihsYXllcikge1xyXG4gICAgICAgIGlmIChsYXllcikge1xyXG4gICAgICAgICAgICBjb25zdCBsYXllck9iaiA9IHRoaXMubGF5ZXJzLmdldChsYXllcik7XHJcbiAgICAgICAgICAgIGlmIChsYXllck9iaiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBsYXllck9iai5jbGVhcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5pY29FeGNlcHRpb25zLkxBWUVSLkxBWUVSX0RPRVNfTk9UX0VYSVNUKGxheWVyKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGF5ZXIuY2xlYXIoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlhajjgabjga7lh6bnkIbjgpLntYLkuobjgZfjgb7jgZlcclxuICAgICAqL1xyXG4gICAgZGlzcG9zZSgpIHtcclxuICAgICAgICB0aGlzLnJ1biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNQbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGxheWVyLmNsZWFyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzU2l6ZS53aWR0aCwgdGhpcy5jYW52YXNTaXplLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5bGe5oCn44KS5Y+W5b6X44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gY3VzdG9tQXR0ciDjgqvjgrnjgr/jg6DlsZ7mgKdcclxuICAgICAqL1xyXG4gICAgX2dldEF0dHIoY3VzdG9tQXR0cikge1xyXG4gICAgICAgIGNvbnN0IG1hcG9iaiA9IG5ldyBNYXAoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhjdXN0b21BdHRyKSkge1xyXG4gICAgICAgICAgICBtYXBvYmouc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWFwb2JqO1xyXG4gICAgfVxyXG4gICAgX2dldEZvbnRTaXplKGhlaWdodCwgbGluZXMpIHtcclxuICAgICAgICBjb25zdCBiaWcgPSBoZWlnaHQgLyBsaW5lcy5iaWc7XHJcbiAgICAgICAgY29uc3QgbWVkaXVtID0gaGVpZ2h0IC8gbGluZXMubWVkaXVtO1xyXG4gICAgICAgIGNvbnN0IHNtYWxsID0gaGVpZ2h0IC8gbGluZXMuc21hbGw7XHJcbiAgICAgICAgcmV0dXJuIHsgYmlnOiBiaWcsIG1lZGl1bTogbWVkaXVtLCBzbWFsbDogc21hbGwgfTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogY2FudmFz44Kz44Oz44OG44Kt44K544OI44KS5Y+W5b6X44GX44G+44GZXHJcbiAgICAgKiBAcGFyYW0gaWQgSURcclxuICAgICAqIEBwYXJhbSB3aWR0aCDmqKrluYVcclxuICAgICAqIEBwYXJhbSBoZWlnaHQg6auY44GVXHJcbiAgICAgKi9cclxuICAgIF9nZXRDb250ZXh0KGlkLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgY29uc3QgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIGlmICghZWxtKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5fX0lOSVRfXy5FTEVNRU5ULk5PVF9FWElTVChpZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWxtLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICAgICAgZWxtLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgIGVsbS5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcclxuICAgICAgICAgICAgZWxtLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XHJcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IGVsbS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICBpZiAoY3R4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3R4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOODoeOCpOODs+ODq+ODvOODl1xyXG4gICAgICovXHJcbiAgICB0aWNrKG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1BsYXkpIHtcclxuICAgICAgICAgICAgY29uc3QgZG9SZW5kZXIgPSBvcHRpb25zID8gb3B0aW9ucy5yZW5kZXIgPyB0cnVlIDogZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VnBvcyA9IG9wdGlvbnMgPyBvcHRpb25zLnZwb3MgPyBvcHRpb25zLnZwb3MgOiAwIDogMDtcclxuICAgICAgICAgICAgaWYgKGRvUmVuZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNTaXplLndpZHRoLCB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgICAgIGxheWVyLnRpY2sodGhpcy5tZXRhLmdldENvdW50KCksIHsgdnBvczogY3VycmVudFZwb3MsIHJlbmRlcjogZG9SZW5kZXIgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLm1ldGEubG9vcCgpOyAvL+OCpOODs+OCr+ODquODoeODs+ODiFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ydW4gJiYgIXRoaXMuYXV0b1RpY2tEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4geyB0aGlzLnRpY2sob3B0aW9ucyk7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOe4geWPluOCiuiJsuOCkuWPluW+l+OBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIGNvbG9yIOiJslxyXG4gICAgICovXHJcbiAgICBnZXRCY29sb3IoY29sb3IpIHtcclxuICAgICAgICBzd2l0Y2ggKGNvbG9yKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JsYWNrJzpcclxuICAgICAgICAgICAgY2FzZSAnIzAwMCc6XHJcbiAgICAgICAgICAgIGNhc2UgJyMwMDAwMDAnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcjZmZmJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcjMDAwJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaMh+WumuOBl+OBn+S9jee9ruOBq+WtmOWcqOOBmeOCi+OCs+ODoeODs+ODiOOCkuWPluW+l+OBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIHggWOW6p+aomVxyXG4gICAgICogQHBhcmFtIHkgWeW6p+aomVxyXG4gICAgICovXHJcbiAgICBnZXQoeCwgeSkge1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGNvbW1lbnRzLnB1c2goLi4ubGF5ZXIuZ2V0KHgsIHkpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gY29tbWVudHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOODrOOCpOODpOODvOOCkui/veWKoOOBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIGxheWVyTmFtZSDjg6zjgqTjg6Tjg7zlkI1cclxuICAgICAqL1xyXG4gICAgYWRkTGF5ZXIobGF5ZXJOYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGF5ZXJzLmhhcyhsYXllck5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5MQVlFUi5EVVBMSUNBVElPTihsYXllck5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXJzLnNldChsYXllck5hbWUsIG5ldyBMYXllcih0aGlzLmN0eCwgdGhpcy5jYW52YXNTaXplLCB0aGlzLmxpbmVzLCB0aGlzLmZvbnJTaXplLCB0aGlzLmZpeGVkRm9uclNpemUsIHRoaXMuZHVyYXRpb24sIHRoaXMubGluZUhlaWdodCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSVNfREVCVUcpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLndyaXRlKGDjg6zjgqTjg6Tjg7wgXCIke2xheWVyTmFtZX1cIiDjgpLov73liqDjgZfjgb7jgZfjgZ/jgIJgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOODrOOCpOODpOODvOOCkuWJiumZpOOBl+OBvuOBmVxyXG4gICAgICogQHBhcmFtIGxheWVyTmFtZSDjg6zjgqTjg6Tjg7zlkI1cclxuICAgICAqL1xyXG4gICAgcmVtb3ZlTGF5ZXIobGF5ZXJOYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGF5ZXJzLmhhcyhsYXllck5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOaWNvRXhjZXB0aW9ucy5MQVlFUi5EVVBMSUNBVElPTihsYXllck5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXJzLmRlbGV0ZShsYXllck5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSVNfREVCVUcpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLndyaXRlKGDjg6zjgqTjg6Tjg7wgXCIke2xheWVyTmFtZX1cIiDjgpLliYrpmaTjgZfjgb7jgZfjgZ/jgIJgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIOODoeOCv+aDheWgseOCr+ODqeOCuVxyXG4gKi9cclxuY2xhc3MgTWV0YSB7XHJcbiAgICAvKipcclxuICAgICAqIOWIneacn+WMllxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog44Kr44Km44Oz44OI44KS5aKX44KE44GX44G+44GZXHJcbiAgICAgKi9cclxuICAgIGxvb3AoKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudCsrO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDjgqvjgqbjg7Pjg4jjgpLlj5blvpdcclxuICAgICAqL1xyXG4gICAgZ2V0Q291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnQ7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIOODreOCsFxyXG4gKi9cclxuY2xhc3MgTG9nZ2VyIHtcclxuICAgIC8qKlxyXG4gICAgICog44Ot44Kw44KS5Ye65Yqb44GZ44KLXHJcbiAgICAgKiBAcGFyYW0gbG9nIOacrOaWh1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgd3JpdGUobG9nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFtOaWNvbW1lbnRKU10ke2xvZ31gKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICog44Ko44Op44O8XHJcbiAqL1xyXG5jb25zdCBOaWNvRXhjZXB0aW9ucyA9IHtcclxuICAgIC8qKlxyXG4gICAgICog5Yid5pyf5YyW44Ko44Op44O8XHJcbiAgICAgKi9cclxuICAgIF9fSU5JVF9fOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5byV5pWw44Ko44Op44O8XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgQVJHVU1FTlRTOiB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDlv4XopoHjgarlvJXmlbDjgYzlrZjlnKjjgZfjgarjgYRcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIE5PVF9FWElTVDoge1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiDpq5jjgZVcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgSEVJR0hUOiAnW0VSUl1hcmd1bWVudCBcImhlaWdodFwiIG11c3QgYmUgc3BlY2lmaWVkLicsXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIOaoquW5hVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBXSURUSDogJ1tFUlJdYXJndW1lbnQgXCJ3aWR0aFwiIG11c3QgYmUgc3BlY2lmaWVkLicsXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIElEXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIElEOiAnW0VSUl1hcmd1bWVudCBcImlkXCIgbXVzdCBiZSBzcGVjaWZpZWQuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOW8leaVsOOBruWApOOBjOS4jemBqeWIh+OBp+OBguOCi1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTmFOOiB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIOmrmOOBleOBjOaVsOWtl+OBp+OBquOBhFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBIRUlHSFQ6ICh2YWx1ZSkgPT4gYFtFUlJdJHt2YWx1ZX0gaXMgbm90IGEgbnVtYmVyLiBcImhlaWdodFwiIG11cyBiZSBhIG51bWJlci5gLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiDmqKrluYXjgYzmlbDlrZfjgafjgarjgYRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgV0lEVEg6ICh2YWx1ZSkgPT4gYFtFUlJdJHt2YWx1ZX0gaXMgbm90IGEgbnVtYmVyLiBcIndpZHRoXCIgbXVzIGJlIGEgbnVtYmVyLmAsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOBjOWtmOWcqOOBl+OBquOBhOODu2NhbnZhc+OBp+OBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIEVMRU1FTlQ6IHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOimgee0oOOBjOWtmOWcqOOBl+OBquOBhFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTk9UX0VYSVNUOiAoaWQpID0+IHsgcmV0dXJuIGBbRVJSXUNhbnZhcyBFbGVtZW50IHdoaWNoIGlkIGlzIFwiJHtpZH1cIiB3YXMgbm90IGZvdW5kLmA7IH0sXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDopoHntKDjgYxIVE1MQ2FudmFz44Gn44Gq44GEXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBOT1RfQV9DQU5WQVNfRUxFTUVOVDogKGlkKSA9PiB7IHJldHVybiBgW0VSUl1FbGVtZW50IHdoaWNoIGlkIGlzIFwiJHtpZH1cIiBpcyBub3QgYSBjYW52YXNIVE1MNSBFbGVtZW50LmA7IH1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog44Kz44Oh44Oz44OI6L+95Yqg5pmC44Gu44Ko44Op44O8XHJcbiAgICAgKi9cclxuICAgIFNFTkQ6IHt9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDjg6zjgqTjg6Tjg7zplqLkv4Ljga7jgqjjg6njg7xcclxuICAgICAqL1xyXG4gICAgTEFZRVI6IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDph43opIdcclxuICAgICAgICAgKi9cclxuICAgICAgICBEVVBMSUNBVElPTjogKG5hbWUpID0+IHsgcmV0dXJuIGBbRVJSXVRoZSBsYXllciBuYW1lICR7bmFtZX0gYWxyZWFkeSBleGlzdHMuYDsgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6zjgqTjg6Tjg7zjgYzlrZjlnKjjgZfjgarjgYRcclxuICAgICAgICAgKi9cclxuICAgICAgICBMQVlFUl9ET0VTX05PVF9FWElTVDogKG5hbWUpID0+IHsgcmV0dXJuIGBbRVJSXUEgbGF5ZXIgbmFtZSBpcyAke25hbWV9IGRvZXMgbm90IGV4aXN0LmA7IH0sXHJcbiAgICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9