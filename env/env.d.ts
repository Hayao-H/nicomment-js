declare var IS_DEVELOPMENT:boolean;
declare var IS_DEBUG:boolean;
declare var BUILD_DATE:string;
declare var BUILD_DATE_DEV:string;
declare module "sysEnv"{
    export var version:string;
    export var build:'Poduction'|'Debug'|'Development';
}
