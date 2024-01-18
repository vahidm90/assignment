import {ItemCategoryEnum} from "../enums/_item-category.enum.ts";

export const itemCategoryApi: { [key in ItemCategoryEnum]: string; } = {
    [ItemCategoryEnum.NewStories]: 'newstories',
    [ItemCategoryEnum.TopStories]: 'topstories',
    [ItemCategoryEnum.BestStories]: 'beststories',
    [ItemCategoryEnum.AskHN]: 'askstories',
    [ItemCategoryEnum.ShowHN]: 'showstories',
};
