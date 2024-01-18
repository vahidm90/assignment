import {ItemCategoryEnum} from "../enums/_item-category.enum.ts";

export const itemCategoryTitle: { [key in ItemCategoryEnum]: string; } = {
    [ItemCategoryEnum.NewStories]: 'New Stories',
    [ItemCategoryEnum.TopStories]: 'Top Stories',
    [ItemCategoryEnum.BestStories]: 'Best Stories',
    [ItemCategoryEnum.AskHN]: 'Ask HN',
    [ItemCategoryEnum.ShowHN]: 'Show HN',
};
