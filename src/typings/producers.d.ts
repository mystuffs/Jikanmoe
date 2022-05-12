export interface IProducers {
    data: {
        mal_id: number,
        name: string,
        url: string,
        count: number,
    }[],
    pagination: {
        last_visible_page: number,
        has_next_page: boolean,
    }
}
