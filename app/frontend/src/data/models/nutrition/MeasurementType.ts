/**
 * A type of measurement used for ingredients, recipes, and nutritional facts.
 */
 export interface MeasurementType {
    /**
     * The primary identifier.
     */
    id: string;

    /**
     * A brief description of the purpose and use of the measurement type.
     */
    description: string;

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
