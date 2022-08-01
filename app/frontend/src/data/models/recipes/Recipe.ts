import { NutritionFacts } from '../nutrition';
import { Food } from './Food';
import { Step } from './Step';

/**
 * A recipe for food.
 */
export interface Recipe {
    /**
     * The primary identifier.
     */
    id: string;

    /**
     * A description of the recipe, such as what it is good for,
     * how it is used, where it comes from, etc.
     */
    description: string;

    /**
     * Determines whether the recipe is publicly searchable.
     */
    enabled: boolean;

    /**
     * Ingredients/food used in creating a recipe.
     */
    ingredients: Food[];

    /**
     * The human-readable name.
     */
    name: string;

    /**
     * The nutritional facts of the food or ingredient.
     */
    nutrition: NutritionFacts;

    /**
     * Instructions used to recreate the recipe.
     */
    steps: Step[];
}
