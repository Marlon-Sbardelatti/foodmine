import { Component, OnInit } from "@angular/core";
import { FoodService } from "../services/food/food.service";
import { NgFor } from "@angular/common";
import { Food } from "../shared/models/Food";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { SearchComponent } from "../search/search.component";
import { TagsComponent } from "../tags/tags.component";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [NgFor, SearchComponent, TagsComponent, RouterLink],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css",
})
export class HomeComponent {
	foods: Food[] = [];

	constructor(
		private foodService: FoodService,
		private route: ActivatedRoute,
	) {}

	ngOnInit(): void {
		this.route.params.subscribe((params) => {
			if (params["searchTerm"]) {
        this.foods = [];
				for (const food of this.foodService.getAll()) {
					if (
						food.name.toLowerCase().includes(params["searchTerm"].toLowerCase())
					) {
						this.foods.push(food);
					}
				}
			} else if (params["tag"]) {
        this.foods = this.foodService.getAllFoodsByTag(params["tag"]);
			}
      else {
				this.foods = this.foodService.getAll();
			}
		});
	}
}
