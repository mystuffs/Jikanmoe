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
        comments: 0,
        last_comment: {
            url: string,
            author_username: string,
            author_url: string,
            date: string,
        },
    }[],
}
