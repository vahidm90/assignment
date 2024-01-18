import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {getCategoryItemIds, getItemDetails} from "../services";
import {ItemCategoryEnum} from "../enums";
import {routeParams} from "./route-params.ts";
import {ListPage} from "../pages/ListPage/ListPage.tsx";

export const routerConfig = createBrowserRouter([
    {
        path: "/",
        element: <App />,
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