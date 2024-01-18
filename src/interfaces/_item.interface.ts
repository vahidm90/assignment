import {ItemTypeEnum} from "../enums";

export interface IItem {
    id: number;
    deleted?: boolean;
    type?: ItemTypeEnum;
    by?: string;
    time?: number;
    text?: string;
    dead?: boolean;
    parent?: number;
    poll?: number;
    kids?: number[];
    url?: string;
    score?: number;
    title?: string;
    parts?: number[];
    descendants?: number;
}