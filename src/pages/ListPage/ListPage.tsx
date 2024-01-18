import React from "react";
import {useLoaderData, useParams} from "react-router";
import {routeParams} from "../../routes/route-params.ts";
import {ItemList} from "../../components";
import {ItemCategoryEnum} from "../../enums";
import {itemCategoryTitle} from "../../helpers";

export const ListPage: React.FC<{}> = () => {
    const params = useParams();
    const categoryName = params[routeParams.categoryName] as ItemCategoryEnum;
    const itemIds  = useLoaderData() as number[];
    return (<ItemList category={categoryName} initialItemCount={20} title={itemCategoryTitle[categoryName]} itemIds={itemIds} />);
}