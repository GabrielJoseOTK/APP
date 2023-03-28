import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRecipesComponent } from './recipe/list-recipes/list-recipes.component';
import { EstoqueService } from './recipe/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    ListRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EstoqueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
