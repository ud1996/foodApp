import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { foodItemService } from '../services/foodItemServices.service';
import { Food } from '../Model/Food.model';
import { Nutrient } from '../Model/nutrients.model';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css']
})
export class NutritionComponent implements OnInit {
  filtrerValue=["viewAll","Energy","Protien","Total lipid","Carbohydrate, by difference","Fiber, total dietary","Sugars, total","Calcium, Ca","Iron, Fe"]
  constructor(private route:ActivatedRoute, private foodService:foodItemService) { }
  nbd:number;
  nutrient:Nutrient[];
  nutrientObject:Nutrient
  showFilter:boolean = false;
  ngOnInit() {
    this.showFilter = false;
    this.route.params.subscribe((params:Params)=>{
       this.nbd = params['nbd'];
    })
    
    this.foodService.getNutrition(this.nbd).subscribe((food)=>{
        console.log(food['foods'][0]['food']['nutrients']);
      
        this.nutrient = food['foods'][0]['food']['nutrients']
        console.log(this.nutrient);
        
    })

 

}
onChange(event:any){
  let nval = event.target.value;
  console.log(nval);
  if(nval !== 'viewAll'){
  for(let i=0;i<this.nutrient.length;i++){
    if(this.nutrient[i].name === nval){
      this.nutrientObject = this.nutrient[i];
      this.showFilter = true;
    }
  }
}
else{
  this.ngOnInit();
}
}
}

