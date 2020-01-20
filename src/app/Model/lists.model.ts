import { Item } from './Item.model';
import { Nutrient } from './nutrients.model';
import { Measures } from './measures.model';

export class Lists{
    q ?: string;
    sr ?: number;
    ds ?: string;
    start ?: number;
    end ?: number;
    total ?: number;
    group ?: string;
    sort ?: string;
    item ?:Item[];
    nutrients ?: Nutrient[];
    measures:Measures[];
}