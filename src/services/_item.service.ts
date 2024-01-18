import axios from "axios";
import {apiBaseUrl} from "../helpers";
import {IItem} from "../interfaces";

export const getItemDetails: (itemId: number) => Promise<IItem> = (id) => axios
    .get<IItem>(`${apiBaseUrl}/item/${id}.json`)
    .then((response) => response.data);