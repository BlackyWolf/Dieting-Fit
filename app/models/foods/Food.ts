import { NutritionFacts } from "../nutrition/index.ts";

export interface Food {
    id: string;
    description: string;
    enabled: boolean;
    name: string;
    nutrition: NutritionFacts;
}
