export interface ITopAnime {
    data: {
        mal_id: number;
        url: string;
        images: {
            jpg: {
                image_url: string;
                small_image_url: string;
                large_image_url: string
            },
            webp: {
                image_url: string;
                small_image_url: string;
                large_image_url: string
            },
        },
        trailer: {
            youtube_id: string;
            url: string;
            embed_url: string
        },
        title: string;
        title_english: string;
        title_japanese: string;
        title_synonyms: string[];
        type: string;
        source: string;
        episodes: number;
        status: string;
        airing: boolean;
        aired: {
            from: string;
            to: string;
            prop: {
                from: {
                    day: number;
                    month: number;
                    year: number;
                },
                to: {
                    day: number;
                    month: number;
                    year: number;
                },
                string: string;
            },
        },
        duration: string;
        rating: string;
        score: number;
        scored_by: number;
        rank: number;
        popularity: number;
        members: number;
        favorites: number;
        synopsis: string;
        background: string;
        season: string;
        year: number;
        broadcast: {
            day: string;
            time: string;
            timezone: string;
            string: string;
        },
        producers: {
            mal_id: number;
            type: string;
            name: string;
            url: string;
        }[],
        licensors: {
            mal_id: number;
            type: string;
            name: string;
            url: string;
        }[],
        studios: {
            mal_id: number;
            type: string;
            name: string;
            url: string;
        }[],
        genres: {
            mal_id: number;
            type: string;
            name: string;
            url: string;
        }[],
        explicit_genres:{
            mal_id: number;
            type: string;
            name: string;
            url: string;
        }[],
        themes: {
            mal_id: number;
            type: string;
            name: string;
            url: string;
        }[],
        demographics: {
            mal_id: number;
            type: string;
            name: string;
            url: string;
        }[],
    }[],
    pagination: {
        last_visible_page: number;
        has_next_page: boolean;
        items: {
            count: number;
            total: number;
            per_page: number;
        },
    }
}

export interface ITopManga {
    data: {
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
        trailer: {
            youtube_id: string;
            url: string;
            embed_url: string;
        },
        title: string;
        title_english: string;
        title_japanese: string;
        title_synonyms: string[];
        type: string;
        source: string;
        episodes: number;
        status: string;
        airing: boolean;
        aired: {
            from: string;
            to: string;
            prop: {
                from: {
                    day: number;
                    month: number;
                    year: number;
                },
                to: {
                    day: number;
                    month: number;
                    year: number;
                },
                string: string;
            },
        },
        duration: string;
        rating: string;
        score: number;
        scored_by: number;
        rank: number;
        popularity: number;
        members: number;
        favorites: number;
        synopsis: string;
        background: string;
        season: string;
        year: number;
        broadcast: {
            day: string;
            time: string;
            timezone: string;
            string: string;
        },
        producers: {
            mal_id: number;
            type: string;
            name: string;
            url: string;
        }[],
        licensors: {
            mal_id: number;
            type: string;
            name: string;
            url: string;
        }[],
        studios: {
            mal_id: number;
            type: string;
            name: string;
            url: string;
        }[],
        genres: {
            mal_id: number;
            type: string;
            name: string;
            url: string;
        }[],
        explicit_genres:{
            mal_id: number;
            type: string;
            name: string;
            url: string;
        }[],
        themes: {
            mal_id: number;
            type: string;
            name: string;
            url: string;
        }[],
        demographics: {
            mal_id: number;
            type: string;
            name: string;
            url: string;
        }[],
    }[],
    pagination: {
        last_visible_page: number;
        has_next_page: boolean;
        items: {
            count: number;
            total: number;
            per_page: number;
        },
    }
}

export interface ITopPeople {
    data: {
        mal_id: number;
        url: string;
        website_url: string;
        images: {
            jpg: {
                image_url: string;
            },
        },
        name: string;
        given_name: string;
        family_name: string;
        alternate_names: string[];
        birthday: string;
        favorites: number;
        about: string;
    }[],
    pagination: {
        last_visible_page: number;
        has_next_page: boolean;
        items: {
            count: number;
            total: number;
            per_page: number;
        },
    }
}

export interface ITopCharacters {
    data: {
        mal_id: number;
        url: string;
        images: {
            jpg: {
                image_url: string;
                small_image_url: string;
          },
          webp: {
              image_url: string;
              small_image_url: string;
            },
        },
        name: string;
        name_kanji: string;
        nicknames: string[];
        favorites: number;
        about: string;
    }[],
    pagination: {
        last_visible_page: number;
        has_next_page: boolean;
        items: {
            count: number;
            total: number;
            per_page: number;
        },
    }
}

export interface ITopReviews {
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
