import { Food } from "@models/index.ts";
import { useCollection } from "../useCollection.ts";

export async function getFoods(skip = 0, take = 20) {
    return await useCollection<Food, Food[]>("foods", async (foods) => {
        return await foods.find().skip(skip).limit(take).toArray();
    });
}
