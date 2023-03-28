import { Component } from '@angular/core';

import { Estoque } from '../recipe';
import { EstoqueService } from '../recipe.service';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent {
  estoque: Estoque[] = []

  constructor(private EstoqueService: EstoqueService) {

    EstoqueService.getEstoque().subscribe(
      estoque => this.estoque = estoque
    );

  }

}
