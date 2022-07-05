import { Nutrient } from "./Nutrient.ts";
import { ServingSize } from "./ServingSize.ts";

export interface NutritionFacts {
    caloriesPerServing: number;
    nutrients: Nutrient[];
    servingsPer: number;
    servingsSizes: ServingSize[];
}
