export interface IRecentAnimeRecommendations{
    data: {
        mal_id: string,
        entry: {
            mal_id: number,
            url: string,
            images: {
                jpg: {
                    image_url: string,
                    small_image_url: string,
                    large_image_url: string,
                },
                webp: {
                    image_url: string,
                    small_image_url: string,
                    large_image_url: string,
                },
            },
            title: string,
        }[],
        content: string,
        user: {
            data: {
                url: string,
                username: string,
            },
        },
    }[],
    pagination: {
        last_visible_page: number,
        has_next_page: boolean,
    }
}

export interface IRecentMangaRecommendations {
    data: {
        mal_id: string,
        entry: {
            mal_id: number,
            url: string,
            images: {
                jpg: {
                    image_url: string,
                    small_image_url: string,
                    large_image_url: string
                },
                webp: {
                    image_url: string,
                    small_image_url: string,
                    large_image_url: string
                },
            },
            title: string,
        }[],
        content: string,
        user: {
            data: {
                url: string,
                username: string,
            },
        },
    }[],
    pagination: {
        last_visible_page: number,
        has_next_page: boolean,
    }
}
