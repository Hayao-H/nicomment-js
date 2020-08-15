declare var IS_DEVELOPMENT:boolean;
declare var IS_DEBUG:boolean;
declare var BUILD_DATE:string;
declare module "sysEnv"{
    export var virsion:string;
    export var build:'Poduction'|'Debug'|'Development';
}
