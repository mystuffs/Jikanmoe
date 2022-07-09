export interface IWatchRecentEpisodes {
    data: [
        {
            entry: {
                mal_id: number;
                url: string;
                images: {
                    jpg: {
                        image_url: string;
                        small_image_url: string;
                        large_image_url: string;
                    },
                    webp: {
                        image_url: string;
                        small_image_url: string;
                        large_image_url: string;
                    },
                },
                title: string;
            },
            episodes: [
                {
                    mal_id: string;
                    url: string;
                    title: string;
                    premium: boolean;
                },
            ],
            region_locked: boolean;
        },
    ],
    pagination: {
        last_visible_page: number;
        has_next_page: boolean;
    }
}

export interface IWatchPopularEpisodes {
    data: [
        {
            entry: {
                mal_id: number;
                url: string;
                images: {
                    jpg: {
                        image_url: string;
                        small_image_url: string;
                        large_image_url: string;
                    },
                    webp: {
                        image_url: string;
                        small_image_url: string;
                        large_image_url: string;
                    },
                },
                title: string;
            },
            episodes: [
                {
                    mal_id: string;
                    url: string;
                    title: string;
                    premium: boolean;
                },
            ],
            region_locked: boolean;
        },
    ],
    pagination: {
        last_visible_page: number;
        has_next_page: boolean;
    }
}

export interface IWatchRecentPromos {
    pagination: {
        last_visible_page: number;
        has_next_page: boolean;
    },
    title: string;
    data: [
        {
            entry: {
                mal_id: number;
                url: string;
                images: {
                    jpg: {
                        image_url: string;
                        small_image_url: string;
                        large_image_url: string;
                    },
                    webp: {
                        image_url: string;
                        small_image_url: string;
                        large_image_url: string;
                    },
                },
                title: string;
            },
            trailer: [
                {
                    youtube_id: string;
                    url: string;
                    embed_url: string;
                    images: {
                        image_url: string;
                        small_image_url: string;
                        medium_image_url: string;
                        large_image_url: string;
                        maximum_image_url: string;
                    },
                },
            ],
        },
    ]
}

export interface IWatchPopularPromos {
    pagination: {
        last_visible_page: number;
        has_next_page: boolean;
    },
    title: string;
    data: [
        {
            entry: {
                mal_id: number;
                url: string;
                images: {
                    jpg: {
                        image_url: string;
                        small_image_url: string;
                        large_image_url: string;
                    },
                    webp: {
                        image_url: string;
                        small_image_url: string;
                        large_image_url: string;
                    },
                },
                title: string;
            },
            trailer: [
                {
                    youtube_id: string;
                    url: string;
                    embed_url: string;
                    images: {
                        image_url: string;
                        small_image_url: string;
                        medium_image_url: string;
                        large_image_url: string;
                        maximum_image_url: string;
                    },
                },
            ],
        },
    ]
}
