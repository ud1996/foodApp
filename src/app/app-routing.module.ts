import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FooditemsComponent } from './fooditems/fooditems.component';
import { NutritionComponent } from './nutrition/nutrition.component';


const routes: Routes = [
  {path:'',component: SearchComponent},
  {path:'food',component : FooditemsComponent},
  {path:'nutrition/:nbd',component : NutritionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
