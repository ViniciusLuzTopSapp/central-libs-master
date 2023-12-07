import { Cancel } from "./Cancel";
declare type Canceler = (message?: string) => void;
/**
 * Based of https://github.com/axios/axios
 * Copyright (c) 2014-present Matt Zabriskie
 */
export default class CancelToken {
    static source(): {
        cancel: Canceler;
        token: CancelToken;
    };
    promise: Promise<Cancel>;
    constructor(executor: (cancel: Canceler) => void);
    throwIfRequested(): void;
}
export {};
