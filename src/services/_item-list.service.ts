import {ItemCategoryEnum} from "../enums/_item-category.enum.ts";
import axios from "axios";
import {apiBaseUrl, itemCategoryApi} from "../helpers";

export const getCategoryItemIds: (category: ItemCategoryEnum) => Promise<number[]> = (category) => axios
    .get<number[]>(`${apiBaseUrl}/${itemCategoryApi[category]}.json`)
    .then((response) => response.data);
