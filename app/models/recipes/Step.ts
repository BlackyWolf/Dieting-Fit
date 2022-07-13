/**
 * Represents a preparation step used in recipes to guide users recreating a
 * recipe.
 */
export interface Step {
    /**
     * Directions used to guide the user in recreating a recipe.
     */
    instructions: string;

    /**
     * The order the step should be shown in.
     */
    order: number;
}
