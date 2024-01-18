import {createBrowserRouter} from "react-router-dom";
import {getCategoryItemIds, getItemDetails} from "../services";
import {ItemCategoryEnum} from "../enums";
import {routeParams} from "./route-params.ts";
import {ListPage} from "../pages/ListPage/ListPage.tsx";
import {HomePage} from "../pages/HomePage/HomePage.tsx";

export const routerConfig = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        children: [
            {
                path: `lists/:${routeParams.categoryName}`,
                element: <ListPage />,
                loader: async ({ params }) => {
                    return getCategoryItemIds(params[routeParams.categoryName] as ItemCategoryEnum);
                },
            },
            {
                path: `item/:${routeParams.itemId}`,
                loader: async ({ params }) => {
                    return getItemDetails(parseInt(params[routeParams.itemId]!, 10) as number);
                },
            }
        ],
    }
]);