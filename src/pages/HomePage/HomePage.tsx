import React from "react";
import {Link} from "react-router-dom";
import {ItemCategoryEnum} from "../../enums";
import {itemCategoryTitle} from "../../helpers";

export const HomePage: React.FC<{}> = () => {
    return (Object.keys(ItemCategoryEnum).map((categoryName) => (
        <Link to={`lists/${categoryName}`} key={`${categoryName}`}>{itemCategoryTitle[categoryName as ItemCategoryEnum]}</Link>
    )));
}

export default HomePage;