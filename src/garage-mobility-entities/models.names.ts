import { Post } from "./Post";

export enum ModelNames {
    POST = "post",
}

export type ModelTypeMap = {
    [ModelNames.POST]: Post,
}