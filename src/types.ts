export type DealType = {
    id?: number;
    institution: string;
    dealSize: string;
    dealType: string;
    isPublished: boolean
}

// export type MessageType = {
//     institution: string;
//     dealSize: string;
//     dealType: string
// }

export type DealsListType = {
    deals: DealType[]
}
