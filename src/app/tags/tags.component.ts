import { Component, Input } from "@angular/core";
import { Tag } from "../shared/models/Tag";
import { NgFor, NgIf } from "@angular/common";
import { RouterLink } from "@angular/router";
import { FoodService } from "../services/food/food.service";

@Component({
	selector: "app-tags",
	standalone: true,
	imports: [NgIf, NgFor, RouterLink],
	templateUrl: "./tags.component.html",
	styleUrl: "./tags.component.css",
})
export class TagsComponent {
  @Input()
  foodPageTags?:string[];
	tags?: Tag[];

  constructor(private foodService: FoodService){}

  ngOnInit():void {
    if (!this.foodPageTags) {
      this.tags = this.foodService.getAllTags();
    }
  }
}
