import { Component, OnInit } from '@angular/core';
import { Food } from '../Model/Food.model';
import { getLocaleFirstDayOfWeek } from '@angular/common';
import { foodItemService } from '../services/foodItemServices.service';
import { Lists } from '../Model/lists.model';

@Component({
  selector: 'app-fooditems',
  templateUrl: './fooditems.component.html',
  styleUrls: ['./fooditems.component.css']
})
export class FooditemsComponent implements OnInit {

  constructor(private foodService: foodItemService) { }
  foodItem:Food;
  foodList:Lists;
  ngOnInit() {

    this.foodItem = this.foodService.getFoodObject();
    console.log(this.foodItem);
    this.foodList = this.foodItem.lists;
    console.log(this.foodList);
    
  }


}
