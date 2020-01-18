import { Measures } from './measures.model';

export class Nutrient{

    nutrient_id ?: number;
    name ?: string;
    derivation ?: string;
    group ?: string;
    unit ?: string;
    value ?: number;
    measures ?: Measures[]
}