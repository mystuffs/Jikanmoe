export interface IMangaById {
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
    title_english: string,
    title_japanese: string,
    title_synonyms: string[],
    type: string,
    chapters: number,
    volumes: number,
    status: string,
    publishing: boolean,
    published: {
        from: string,
        to: string,
        prop: {
            from: {
                day: number,
                month: number,
                year: number,
            },
            to: {
                day: number,
                month: number,
                year: number,
            },
            string: string,
        }
    },
    score: number,
    scored_by: number,
    rank: number,
    popularity: number,
    members: number,
    favorites: number,
    synopsis: string,
    background: string,
    authors: {
        mal_id: number,
        type: string,
        name: string,
        url: string,
    }[],
    serializations: {
        mal_id: number,
        type: string,
        name: string,
        url: string,
    }[],
    genres: {
        mal_id: number,
        type: string,
        name: string,
        url: string,
    }[],
    explicit_genres: {
        mal_id: number,
        type: string,
        name: string,
        url: string,
    }[],
    themes: {
        mal_id: number,
        type: string,
        name: string,
        url: string,
    }[],
    demographics: {
        mal_id: number,
        type: string,
        name: string,
        url: string,
    }[]
}

export interface IMangaCharacters {
    data: {
        character: {
            mal_id: number,
            url: string,
            images: {
                jpg: {
                    image_url: string,
                    small_image_url: string,
                },
                webp: {
                    image_url: string,
                    small_image_url: string,
                },
            },
            name: string,
        },
        role: string,
    }[]
}

export interface IMangaNews {
    pagination: {
        last_visible_page: number,
        has_next_page: boolean,
    },
    data: {
        mal_id: number,
        url: string,
        title: string,
        date: string,
        author_username: string,
        author_url: string,
        forum_url: string,
        images: {
            jpg: {
                image_url: string,
            },
        },
        comments: number,
        excerpt: string,
    }[]
}

export interface IMangaTopics {
    data: {
        mal_id: number,
        url: string,
        title: string,
        date: string,
        author_username: string,
        author_url: string,
        comments: number,
        last_comment: {
            url: string,
            author_username: string,
            author_url: string,
            date: string,
        },
    }[],
}

export interface IMangaPictures {
    data: {
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
    }[]
}

export interface IMangaStatistics {
    data: {
        reading: number,
        completed: number,
        on_hold: number,
        dropped: number,
        plan_to_read: number,
        total: number,
        scores: {
            score: number,
            votes: number,
            percentage: number,
        }[],
    }
}

export interface IMangaMoreInfo {
    data: {
        moreinfo: string,
    }
}

export interface IMangaRecommendations {
    data: {
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
        },
    }[]
}

export interface IMangaUserUpdates {
    data: {
        user: {
            username: string,
            url: string,
            images: {
                jpg: {
                    image_url: string,
                },
                webp: {
                    image_url: string,
                },
            },
        },
        score: number,
        status: string,
        volumes_read: number,
        volumes_total: number,
        chapters_read: number,
        chapters_total: number,
        date: string,
    }[],
    pagination: {
        last_visible_page: number,
        has_next_page: boolean,
    }
}

export interface IMangaReviews {
    data: {
        user: {
            username: string,
            url: string,
            images: {
                jpg: {
                    image_url: string,
                },
                webp: {
                    image_url: string,
                },
            },
        },
        mal_id: number,
        url: string,
        type: string,
        votes: number,
        date: string,
        chapters_read: number,
        review: string,
        scores: {
            overall: number,
            story: number,
            art: number,
            character: number,
            enjoyment: number,
        }
    }[],
    pagination: {
        last_visible_page: number,
        has_next_page: boolean,
    }
}

export interface IMangaRelations {
    data: {
        relation: string,
        entry: {
            mal_id: number,
            type: string,
            name: string,
            url: string,
        }[],
    }[],
}

export interface IMangaExternal {
    data: {
        name: string,
        url: string,
    }[]
}

export interface IMangaSearch {
    data: {
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
        title_english: string,
        title_japanese: string,
        title_synonyms: string[],
        type: string,
        chapters: number,
        volumes: number,
        status: string,
        publishing: boolean,
        published: {
            from: string,
            to: string,
            prop: {
                from: {
                    day: number,
                    month: number,
                    year: number,
                },
                to: {
                    day: number,
                    month: number,
                    year: number,
                },
                string: string,
            }
        },
        score: number,
        scored_by: number,
        rank: number,
        popularity: number,
        members: number,
        favorites: number,
        synopsis: string,
        background: string,
        authors: {
            mal_id: number,
            type: string,
            name: string,
            url: string,
        }[],
        serializations: {
            mal_id: number,
            type: string,
            name: string,
            url: string,
        }[],
        genres: {
            mal_id: number,
            type: string,
            name: string,
            url: string
        }[],
        explicit_genres: {
            mal_id: number,
            type: string,
            name: string,
            url: string
        }[],
        themes: {
            mal_id: number,
            type: string,
            name: string,
            url: string
        }[],
        demographics: {
            mal_id: number,
            type: string,
            name: string,
            url: string
          }[],
      }[],
    pagination: {
        last_visible_page: number,
        has_next_page: boolean,
        items: {
            count: number,
            total: number,
            per_page: number,
        }
    }
}
