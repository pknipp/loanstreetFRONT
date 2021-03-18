export type DealType = {
    id?: number;
    institution: string;
    dealSize: string;
    dealType: string;
    isPublished: boolean
}

export type DealsListType = {
    deals: DealType[]
}
