declare module '@langurama/type-check' {
    export default {
        array: (object: any) => boolean;
        asyncFunction: (object: any) => boolean;
        bigint: (object: any) => boolean;
        boolean: (object: any) => boolean;
        date: (object: any) => boolean;
        error: (object: any) => boolean;
        function: (object: any) => boolean;
        generatorFunction: (object: any) => boolean;
        nan: (object: any) => boolean;
        null: (object: any) => boolean;
        number: (object: any) => boolean;
        object: (object: any) => boolean;
        promise: (object: any) => boolean;
        string: (object: any) => boolean;
        symbol: (object: any) => boolean;
        undefined: (object: any) => boolean;
    }
}
