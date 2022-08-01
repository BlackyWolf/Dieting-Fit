import { NutritionFacts } from '../nutrition';

/**
 * Represents an ingredient or food used in a recipe.
 */
export interface Food {
    /**
     * The primary identifier.
     */
    id: string;

    /**
     * A description of the food or ingredient, such as what it is good for,
     * how it is used, where it comes from, etc.
     */
    description: string;

    /**
     * Determines whether the food or ingredient is publicly searchable.
     */
    enabled: boolean;

    /**
     * The human-readable name.
     */
    name: string;

    /**
     * The nutritional facts of the food or ingredient.
     */
    nutrition: NutritionFacts;
}
