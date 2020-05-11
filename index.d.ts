declare module '@langurama/type-check' {
    interface LanguramaTypeCheck {
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

    export const languramaTypeCheck: LanguramaTypeCheck;

    export default languramaTypeCheck;
}

// declare module '@langurama/log' {
//     interface LanguramaTerminalConfiguration {
//         type: 'terminal';
//         level?: 'error' | 'warn' | 'info' | 'debug' | 'trace';
//         callee?: boolean;
//         chalk?: Object;
//     }

//     interface LanguramaFileConfiguration {
//         type: 'file';
//         level?: 'error' | 'warn' | 'info' | 'debug' | 'trace';
//         callee?: boolean;
//         path?: string;
//         json?: boolean;
//     }

//     type LanguramaConfiguration = LanguramaTerminalConfiguration | LanguramaFileConfiguration;

//     interface LanguramaLog {
//         error: (...messages: any) => void;
//         warn: (...messages: any) => void;
//         info: (...messages: any) => void;
//         debug: (...messages: any) => void;
//         trace: (...messages: any) => void;
//     }

//     export default function languramaLog(
//         configuration?: LanguramaConfiguration | LanguramaConfiguration[]
//     ): LanguramaLog;
// }
