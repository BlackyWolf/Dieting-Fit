import { Measurement } from "./Measurement.ts";
import { Nutrient } from "./Nutrient.ts";

/**
 * Nutritional facts used to calculate which foods and recipes help stay in
 * line with a diet.
 */
export interface NutritionFacts {
    /**
     * The number of calories being consumed per serving.
     */
    caloriesPerServing: number;

    /**
     * The nutritional values that make up the ingredient or recipe.
     */
    nutrients: Nutrient[];

    /**
     * The number of servings per container.
     *
     * If there is only item, such as 1 egg, the value `1` may be used.
     */
    servingsPerContainer: number;

    /**
     * The appropriate serving sizes and measurements to use when using the
     * ingredient or recipe.
     */
    servingsSizes: Measurement[];
}
