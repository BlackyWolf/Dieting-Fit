import { Food } from "@models/foods/Food.ts";
import { useCollection } from "../useCollection.ts";

export async function getFoods(skip = 0, take = 20) {
    return await useCollection<Food, Food[]>("foods", async (foods) => {
        return await foods.find().skip(skip).limit(take).toArray();
    });
}
