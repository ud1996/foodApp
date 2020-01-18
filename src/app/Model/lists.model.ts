import { Item } from './Item.model';

export class Lists{
    q ?: string;
    sr ?: number;
    ds ?: string;
    start ?: number;
    end ?: number;
    total ?: number;
    group ?: string;
    sort ?: string;
    item ?:Item[]
}