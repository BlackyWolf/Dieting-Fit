import { Measurement } from "./Measurement.ts";

/**
 * Represents a nutritional value in the Nutrition Facts section if the
 * ingredient or recipe.
 */
export interface Nutrient {
    /**
     * The numeric daily value amount.
     *
     * This should be a decimal so it may be formatted as a percentage by the
     * UI, e.g. 0.13 for 13% of the daily value.
     */
    dailyValue: number;

    /**
     * The measurement used to reflect the actual amount of nutrition in grams,
     * milligrams, or whatever measurement type makes sense.
     */
    measurement: Measurement;

    /**
     * The name of the nutritional value.
     *
     * This will typically be something like Fat, Total Fat, Cholesterol,
     * Dietary Fiber, etc.
     */
    name: string;
}
