import { Measurement } from "./Measurement.ts";

export interface Nutrient {
    amount: number;
    dailyValue: number;
    measurement: Measurement;
    name: string;
}
