import { writeDataRdb } from "./utils";
import {v4 as uuidv4} from 'uuid';

type Comment = {
    name: string;
    comment: string;
}

export const addComment = ({ name, comment }: Comment) => {
    writeDataRdb('/comments', {
        [uuidv4()]: {
            name,
            comment
        }
    })
}