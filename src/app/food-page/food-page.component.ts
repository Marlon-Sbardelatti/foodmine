import { Component } from '@angular/core';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { NgFor } from '@angular/common';
import { TagsComponent } from '../tags/tags.component';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [NgFor, TagsComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
  food!: Food;

  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService){
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = foodService.getFoodById(params['id'])
      }
    })
  }

  ngOnInit(): void {

  }
}
