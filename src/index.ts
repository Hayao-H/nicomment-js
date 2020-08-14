import { fontSize, sendoption, commentPosition, commentSizeString, commentLinesBySize} from './module/types'
import { Size, Layer, CommentBase } from './module/Comment';
import defaultConfig from './module/config';


//nicommentJSメインクラス
export default class NicommentJS {

    private readonly ctx: CanvasRenderingContext2D;//context
    private readonly canvasSize: Size;//canvasサイズ
    private readonly meta: Meta;//メタ情報
    private readonly lines: commentLinesBySize;//行数
    private readonly fixedLines: commentLinesBySize;//行数
    private readonly fonrSize: fontSize;//fontSize
    private readonly fixedFonrSize: fontSize;//固定fontSize
    private readonly duration: number;
    private readonly lineHeight:number;
    private readonly autoTickDisabled:boolean;//自動更新フラグ
    private mainLayerName:string;//メインレイヤー
    private run: boolean;//フラグ
    private isPlay:boolean;//再生フラグ
    private layers: Map<string,Layer>;//レイヤー
    private total: number;//トータルコメ数


    /**
     * 
     * @param id canvasのID
     * @param width canvasの幅
     * @param height canvasの高さ
     * @param option オプション
     */
    constructor(id: string, width: number, height: number, option?: NicommentJSParam) {
        
        //引数チェック
        this.checkArgs(id, width, height);

        //context
        this.ctx= this._getContext(id, width, height);
        

        //サイズ
        this.canvasSize = new Size({ height: height, width: width });

        //メタ情報
        this.meta = new Meta();

        //表示時間
        this.duration = option ? option.duration ? option.duration : defaultConfig.duration : defaultConfig.duration;

        //自動更新
        this.mainLayerName=option ? option.layerName ? option.layerName : defaultConfig.defaultLayer : defaultConfig.defaultLayer

        //サイズ・フォント
        this.lineHeight = option ? option.lineheght ? option.lineheght : defaultConfig.lineHeight : defaultConfig.lineHeight;//表示時間
        this.lines = {
            big: option ? option.bigLines ? option.bigLines : defaultConfig.bigLines : defaultConfig.bigLines,
            medium: option ? option.mediumLines ? option.mediumLines : defaultConfig.mediumLines : defaultConfig.mediumLines,
            small: option ? option.smallLines ? option.smallLines : defaultConfig.smallLines : defaultConfig.smallLines
        };
        this.fixedLines={big:defaultConfig.fix.big,medium:defaultConfig.fix.medium,small:defaultConfig.fix.smal};
        
        this.fonrSize = this._getFontSize(height, this.lines);//fintSIze一覧
        this.fixedFonrSize=this._getFontSize(height,this.fixedLines);

        //レイヤー
        this.mainLayerName=option ? option.layerName ? option.layerName : defaultConfig.defaultLayer : defaultConfig.defaultLayer
        this.layers=new Map();
        this.layers.set(this.mainLayerName,new Layer(this.ctx, this.canvasSize, this.lines, this.fonrSize,this.fixedFonrSize, this.duration,this.lineHeight))
        this.total = 0;
        this.run = true;
        this.isPlay=true;

        //自動更新フラグ
        this.autoTickDisabled = option ? option.autoTickDisabled ? option.autoTickDisabled : false : false;

        if (!this.autoTickDisabled)this.tick();
    }

    /**
     * 引数チェック
     * @param id id
     * @param width width
     * @param height height
     */
    private checkArgs(id: string, width: number, height: number): void {
        if (!id) throw new Error(NicoExceptions.__INIT__.ARGUMENTS.NOT_EXIST.ID);
        if (!width) throw new Error(NicoExceptions.__INIT__.ARGUMENTS.NOT_EXIST.WIDTH);
        if (!height) throw new Error(NicoExceptions.__INIT__.ARGUMENTS.NOT_EXIST.HEIGHT);

        if (typeof width !== 'number') throw new Error(NicoExceptions.__INIT__.ARGUMENTS.NaN.WIDTH(width));
        if (typeof height !== 'number') throw new Error(NicoExceptions.__INIT__.ARGUMENTS.NaN.HEIGHT(height));
    }

    /**
     * コメントを追加する
     * @param text 表示するコメント
     * @param option　オプション。;
     */
    send(text: string, option?: sendoption) {
        let customAttr: Map<string, any> = new Map();
        const layer: string = option ? option.layer ? option.layer : this.mainLayerName : this.mainLayerName;
        const comType: commentPosition = option ? option.type ? option.type : 'naka' : 'naka';
        const comSize: commentSizeString = option ? option.size ? option.size : 'medium' : 'medium';
        const color: string = option ? option.color ? option.color : '#fff' : '#fff';
        const bcolor: string = this.getBcolor(color);
        const vpos:number=option ? option.vpos ? option.vpos :0:0;
        const fontName:string=option?option.fontName?option.fontName:defaultConfig.defaultFont:defaultConfig.defaultFont;
        const opacity:number=option?option.opacity?option.opacity:defaultConfig.opacity:defaultConfig.opacity;
        const full:boolean=option?option.full?option.full:false:false;
        const onDisposed: () => any = option ? option.onDisposed ? option.onDisposed : () => { } : () => { };


        this.total++;
        if (option !== undefined) {
            if (option.customAttr !== undefined) {
                customAttr = this._getAttr(option.customAttr);
            }
        }
        customAttr.set('color', color);
        customAttr.set('bcolor', bcolor);
        customAttr.set('fontName',fontName);
        customAttr.set('opacity',opacity);
        customAttr.set('full',full)


        const layerObj=this.layers.get(layer);
        if (layerObj!==undefined){
            layerObj.add(text, this.total, customAttr, comType, comSize, { onDispased: onDisposed },vpos)
        }
    }

    /**
     * 一時停止
     */
    pause(): void {
        this.isPlay = false;
    }

    /**
     * 再生
     */
    play(): void {
        this.isPlay = true;
    }

    /**
     * コメントを削除します
     * @param layer レイヤー
     */
    clear(layer?:string):void{
        if (layer){
            const layerObj=this.layers.get(layer)
            if (layerObj!==undefined){
                layerObj.clear();
            }
        } else {
            this.layers.forEach(layer=>{
                layer.clear();
            })
        }
    }
    
    /**
     * 全ての処理を終了します
     */
    dispose():void{
        this.run=false;
        this.isPlay=false;
        this.layers.forEach(layer=>{
            layer.clear();
        });
        this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
        this.layers.clear();
    }

    /**
     * 属性を取得します
     * @param customAttr カスタム属性
     */
    private _getAttr(customAttr: { [key: string]: any }): Map<string, any> {
        const mapobj: Map<string, any> = new Map();
        for (const [key, value] of Object.entries(customAttr)) {
            mapobj.set(key, value)
        }
        return mapobj;
    }

    private _getFontSize(height: number, lines: commentLinesBySize): fontSize {
        const big: number = height / lines.big;
        const medium: number = height / lines.medium;
        const small: number = height / lines.small;

        return { big: big, medium: medium, small: small }
    }

    //getContext
    private _getContext(id: string, width: number, height: number): CanvasRenderingContext2D {
        const elm: HTMLCanvasElement = document.getElementById(id) as HTMLCanvasElement;
        if (!elm){
            throw new Error(NicoExceptions.__INIT__.ELEMENT.NOT_EXIST(id));
        }  else {
            elm.height = height;
            elm.width = width;
            elm.style.width = `${width}px`;
            elm.style.height = `${height}px`;
            const ctx=elm.getContext('2d');
            if (ctx!==null){
                return ctx
            } else {
                throw new Error()
            }
        }
    }

    /**
     * メインループ
     */
    tick(vpos?:number,render?:boolean): void {

        if (this.meta.getCount() % 120 === 0) {
            //console.log('hello!')
            //console.dir(this.layers[0].getState())
        }
        if (this.isPlay) {

            this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);

            this.layers.forEach(layer => {
                layer.tick(this.meta.getCount(),vpos,render);
            })

            this.meta.loop();//インクリメント
        }

        if (this.run&&!this.autoTickDisabled){
            requestAnimationFrame(()=>{this.tick(vpos)});
        };
    }

    //縁取り色を取得
    private getBcolor(color: string): string {
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
    get(x:number,y:number):CommentBase|undefined{
        let comment:CommentBase|undefined=undefined;
        this.layers.forEach(layer=>{
            comment=layer.get(x,y);
            if (comment) return false;
        })

        return comment;
    }

}

//メタ情報
class Meta {
    count: number;//ループ回数

    //初期化
    constructor() {
        this.count = 0;
    }

    //カウントを増やす
    loop(): void {
        this.count++;
    }

    //カウントを取得
    getCount(): number {
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
                HEIGHT: (value:string) => `[ERR]${value} is not a number. "height" mus be a number.`,
                WIDTH: (value:string) => `[ERR]${value} is not a number. "width" mus be a number.`,
            }
        },
        ELEMENT:{
            NOT_EXIST:(id:string)=>{return `[ERR]Canvas Element which id is "${id}" was not found.`},
            NOT_A_CANVAS_ELEMENT:(id:string)=>{return `[ERR]Element which id is "${id}" is not a canvasHTML5 Element.`}
        },
    }
}

//メインクラスオプション引数
interface NicommentJSParam {
    bigLines?: number;
    mediumLines?: number;
    smallLines?: number;
    duration?: number;
    layerName?:string;
    lineheght?:number;
    autoTickDisabled?:boolean;
}