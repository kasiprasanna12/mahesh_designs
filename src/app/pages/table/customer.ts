export interface Country {
    item?: string;
    detail?: string;
}

export interface Representative {
    item?: string;
    detail?: string;
}

export interface Customer {
    item?: string | number;
    detail?: string;
    itemdescription?: string;
    detailtype?: string;
    detaildescription?: string | Date;
    setcondition?: string;
    table?: number;
}