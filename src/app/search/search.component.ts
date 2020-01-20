import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { foodItemService } from '../services/foodItemServices.service';
import { Food } from '../Model/Food.model';
import { Router } from '@angular/router';
import { Item } from '../Model/Item.model';
import { Lists } from '../Model/lists.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  foodItem:string="";
  searchForm:FormGroup;
  searchNutrient:FormGroup
  food:Food;
  items:Item[];
  showNutrient: boolean = false;
  nutrientName:string;
  @Output() foodOutput = new EventEmitter<Food>();
  constructor(private foodItemService:foodItemService,private router:Router) { }

  ngOnInit() {

    this.searchForm = new FormGroup({
      'item': new FormControl(null,Validators.required)
    })

    this.searchNutrient = new FormGroup({
      'nutrient' : new FormControl(null,Validators.required)
    })
  }

   save(){
     console.log("incsave");
     this.foodItem = this.searchForm.get('item').value;
     console.log(this.foodItem);
     this.foodItemService.getFoodItem(this.foodItem).subscribe((data:Food)=>{
          this.food = data;
          console.log("dfdfdqwwq");
          
          console.log(this.food.lists);
          this.showNutrient = true;
          this.items = data['list']['item'];
          console.log(this.items);
          this.emitFood();
          this.router.navigate(['/food']);
     })
     
   }

   searchNutrients(){

    this.nutrientName = this.searchNutrient.get('nutrient').value;
   }

   emitFood(){
     this.foodOutput.emit(this.food);
   }

}
