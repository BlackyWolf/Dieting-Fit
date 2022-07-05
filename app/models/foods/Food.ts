import { NutritionFacts } from "../nutrition.ts/Nutrition.ts";

export interface Food {
    id: string;
    description: string;
    enabled: boolean;
    name: string;
    nutrition: NutritionFacts;
}
