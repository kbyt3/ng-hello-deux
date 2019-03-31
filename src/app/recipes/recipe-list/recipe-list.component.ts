import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'Recipe',
      'Test Description',
      '../../../assets/img/sample_img_valentina_solfrini.jpg'),
    new Recipe(
      'Recipe',
      'Test Description',
      '../../../assets/img/sample_img_valentina_solfrini.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
