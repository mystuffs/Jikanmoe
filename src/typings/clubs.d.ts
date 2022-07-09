export interface IClubsById {
    data: {
        mal_id:number;
        name: string;
        url: string;
        images: {
            jpg: {
                image_url: string;
            },
        },
        members: number;
        category: string;
        created: string;
        access: string;
    }
}

export interface IClubMembers {
    pagination: {
        last_visible_page: 0,
        has_next_page: true,
    },
    data: {
        jpg: {
            image_url: string;
        },
        webp: {
            image_url: string;
        },
    }[]
}

export interface IClubStaff {
    data: {
        url: string;
        username: string;
    }[]
}

export interface IClubRelations {
    data: {
        anime: {
            mal_id: 0,
            type: string;
            name: string;
            url: string;
        }[],
        manga: {
            mal_id: 0,
            type: string;
            name: string;
            url: string;
        }[],
        characters: {
            mal_id: 0,
            type: string;
            name: string;
            url: string;
        }[],
    }
}

export interface IClubsSearch {
    data: {
        data: {
            mal_id: number;
            name: string;
            url: string;
            images: {
                jpg: {
                    image_url: string;
                },
            },
            members: number;
            category: string;
            created: string;
            access: string;
        }[],
        pagination: {
            last_visible_page: number;
            has_next_page: boolean;
        },
    }
}
