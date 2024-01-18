import {ItemCategoryEnum} from "../../enums";
import React, {useEffect, useState} from "react";
import {IItem} from "../../interfaces";
import {getItemDetails} from "../../services";
import ListEntry from "../ListEntry/ListEntry.tsx";
import LoadProgress from "../LoadProgress/LoadProgress.tsx";

export interface ItemListProps {
    category: ItemCategoryEnum;
    initialItemCount: number;
    itemIds: number[];
    title: string;
}

export const ItemList: React.FC<ItemListProps> = ({initialItemCount, itemIds, title}) => {
    const [items, setItems] = useState<IItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchInitialItems();
    }, []);

    useEffect(() => {
        if (items.length === initialItemCount) setIsLoading(false);
    }, [items.length]);

    const fetchInitialItems: () => void = () => {
        itemIds.slice(0, initialItemCount).forEach((itemId) => {
            getItemDetails(itemId).then((item) => {
                setItems((prevItems) => [...prevItems, item]);
            });
        });
    }

    const fetchMoreItems: () => void = () => {
        setIsLoading(true);
        itemIds.slice(initialItemCount, initialItemCount + 10).forEach((itemId) => {
            getItemDetails(itemId).then((item) => {
                setItems((prevItems) => [...prevItems, item]);
            });
        });
    };

    return (
        <>
            <header>
                <h1>{title}</h1>
            </header>
            {items.length && (
                items.map((item) => <ListEntry item={item}/>)
            )}
            {isLoading && <LoadProgress/>}
            <button onClick={fetchMoreItems}>Load more</button>
        </>
    );
};

export default ItemList;
