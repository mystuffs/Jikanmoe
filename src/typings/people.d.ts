export interface IPersonById {
    mal_id: number,
    url: string,
    website_url: string,
    images: {
        jpg: {
            image_url: string
        },
    },
    name: string,
    given_name: string,
    family_name: string,
    alternate_names: string[],
    birthday: string,
    favorites: number,
    about: string
}

export interface IPersonAnime {
    data: {
        position: string,
        anime: {
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

export interface IPersonVoices {
    data: {
        role: string,
        anime: {
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
    }[]
}

export interface IPersonManga {
    data: {
        position: string,
        manga: {
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

export interface IPersonPictures {
    data: {
        jpg: {
            image_url: string,
        }
    }[]
}

export interface IPeopleSearch {
    data: {
        mal_id: number,
        url: string,
        website_url: string,
        images: {
            jpg: {
                image_url: string,
            },
        },
        name: string,
        given_name: string,
        family_name: string,
        alternate_names: string[],
        birthday: string,
        favorites: number,
        about: string,
    }[],
    pagination: {
        last_visible_page: number,
        has_next_page: boolean,
        items: {
            count: number,
            total: number,
            per_page: number,
        },
    }
}
