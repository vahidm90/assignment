import {IItem} from "../../interfaces";
import React from "react";

export interface ListEntryProps {
    item: IItem;
}

export const ListEntry: React.FC<ListEntryProps> = ({item}) => {
    return (
        <article>
            <h1>{item.title}</h1>
            <p>{item.text}</p>
        </article>
    );
};

export default ListEntry;
