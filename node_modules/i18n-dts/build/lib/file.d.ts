import { Config, JsonObject } from '../interfaces';
export declare const getConfigFromPackageJson: (dir: string) => Config | Error;
export declare const isJson: (extname: string) => boolean;
export declare const isSource: (extname: string) => boolean;
export declare const getTranslationFromModel: (filePath: string) => JsonObject | Error;
