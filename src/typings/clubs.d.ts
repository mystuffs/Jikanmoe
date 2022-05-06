export interface IClubsById {
    data: {
        mal_id:number,
        name: string,
        url: string,
        images: {
            jpg: {
                image_url: string
            }
        },
        members: number,
        category: string,
        created: string,
        access: string,
    }
}
