import { Plugin } from 'vue';
export declare type SFCWithInstall<T> = T & Plugin;
export declare function widthInstall<T extends {
    name?: string;
}>(comp: T): SFCWithInstall<T>;
