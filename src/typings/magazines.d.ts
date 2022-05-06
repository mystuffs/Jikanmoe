export interface IMagazines {
    data: {
        mal_id: number,
        name: string,
        url: string,
        count: number,
    }[],
    pagination: {
        last_visible_page: 0,
        has_next_page: boolean,
    }
}
