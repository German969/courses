

//declare module "lodash" {
    declare interface FirstFunction {
        (data:any[]): any;
    }

    declare interface Lodash {
        first: FirstFunction;
    }

  //  export const _: Lodash;
//}