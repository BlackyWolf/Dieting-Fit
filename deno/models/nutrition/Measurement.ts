/**
 * Represents a measurement for an ingredient or recipe.
 */
export interface Measurement {
    /**
     * The numeric amount of the measurement. This must be a number for
     * calculation purposes.
     */
    amount: number;

    /**
     * The true name of the measurement type, e.g. grams, cups, egg, teaspoon,
     * etc.
     */
    name: string;

    /**
     * The shorthand name of the measurement type, e.g. g, c, tsp, etc.
     *
     * This may be blank where having a shorthand may not make sense, e.g. for
     * a measurement of 1 egg.
     */
    symbol?: string;
}
