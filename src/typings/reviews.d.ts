export interface IRecentAnimeReviews {
    data: {
        data: {
            user: {
                username: string;
                url: string;
                images: {
                    jpg: {
                    image_url: string;
                },
                webp: {
                    image_url: string;
                },
            },
          },
          anime: {
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
            mal_id: number;
            url: string;
            type: string;
            votes: number;
            date: string;
            review: string;
            episodes_watched: number;
            scores: {
                overall: number;
                story: number;
                animation: number;
                sound: number;
                character: number;
                enjoyment: number;
            },
        }[],
        pagination: {
            last_visible_page: number;
            has_next_page: boolean;
        },
    }
}

export interface IRecentMangaReviews {
    data: {
        data: {
            user: {
                username: string;
                url: string;
                images: {
                    jpg: {
                        image_url: string;
                    },
                    webp: {
                        image_url: string;
                    },
                },
            },
            manga: {
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
            mal_id: number;
            url: string;
            type: string;
            votes: number;
            date: string;
            chapters_read: number;
            review: string;
            scores: {
                overall: number;
                story: number;
                art: number;
                character: number;
                enjoyment: number;
            },
        }[],
        pagination: {
            last_visible_page: number;
            has_next_page: boolean;
        },
    }
}
