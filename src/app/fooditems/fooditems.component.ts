import { Component, OnInit } from '@angular/core';
import { Food } from '../Model/Food.model';
import { getLocaleFirstDayOfWeek } from '@angular/common';
import { foodItemService } from '../services/foodItemServices.service';
import { Lists } from '../Model/lists.model';
import { Item } from '../Model/Item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fooditems',
  templateUrl: './fooditems.component.html',
  styleUrls: ['./fooditems.component.css']
})
export class FooditemsComponent implements OnInit {

  constructor(private foodService: foodItemService,private router:Router) { }
  foodItem:Food;
  foodList:Lists;
  items:Item[];
  ngOnInit() {

    this.items = this.foodService.getFoodObject();
    console.log(this.items[0].ndbno);
    
    console.log(this.items);
   
    
  }

  execute(nbd:number){
      this.router.navigate(['/nutrition',nbd])
  }

}
