import { User } from "./user";

export type Campaign = {
    name: string;
    description: string ;
    endDate: Date;
    candidates:User[]
};