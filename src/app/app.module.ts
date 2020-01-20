import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FooditemsComponent } from './fooditems/fooditems.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodComponent } from './food/food.component';
import { NutritionComponent } from './nutrition/nutrition.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FooditemsComponent,
    FoodComponent,
    NutritionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
