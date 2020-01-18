import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Food } from '../Model/Food.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class foodItemService{
    food : Food;
    constructor(private httpClient: HttpClient){}

    getFoodItem(item:string){
        this.httpClient.get<any>(`https://api.nal.usda.gov/ndb/search/?format=json&q=`+item+`&sort=n&max=25&offset=0%20&api_key=YTEsiJJM6e8sFRM9t0KOpEB1maUbDmA0en5RCFac`).subscribe((f:Food)=>{
                this.food = f;
               console.log(this.food);
               
        })
        return  this.httpClient.get<any>(`https://api.nal.usda.gov/ndb/search/?format=json&q=`+item+`&sort=n&max=25&offset=0%20&api_key=YTEsiJJM6e8sFRM9t0KOpEB1maUbDmA0en5RCFac`);
    }

    getFoodObject(){
        return this.food;
    }
}