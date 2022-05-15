export interface IUsersSearch {
    data: [{}],
    pagination: {
        last_visible_page: number,
        has_next_page: boolean,
    }
}

export interface IUserID {
    data: {
        url: string,
        username: string,
    }
}

export interface IUserProfile {
    mal_id: number,
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
    last_online: string,
    gender: string,
    birthday: string,
    location: string,
    joined: string,
}

export interface IUserStatistics {
    data: {
        anime: {
            days_watched: number,
            mean_score: number,
            watching: number,
            completed: number,
            on_hold: number,
            dropped: number,
            plan_to_watch: number,
            total_entries: number,
            rewatched: number,
            episodes_watched: number,
        },
        manga: {
            days_read: number,
            mean_score: number,
            reading: number,
            completed: number,
            on_hold: number,
            dropped: number,
            plan_to_read: number,
            total_entries: number,
            reread: number,
            chapters_read: number,
            volumes_read: number,
        },
    }
}

export interface IUserFavorites {
    data: {
        anime: {
            type: string,
            start_year: number,
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
        manga: {
            type: string,
            start_year: number,
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
        characters: {
             : {
                mal_id: number,
                type: string,
                title: string,
                url: string,
            },
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
          name: string
      }[],
      people: {
           : {
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
        }[],
    }
}

export interface IUserUpdates {
    data: {
        anime: {
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
                    }
                },
                title: string,
            },
            score: number,
            status: string,
            episodes_seen: number,
            episodes_total: number,
            date: string,
        }[],
        manga: {
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
                    }
                },
                title: string,
            },
            score: number,
            status: string,
            chapters_read: number,
            chapters_total: number,
            volumes_read: number,
            volumes_total: number,
            date: string
        }[],
    }
}

export interface IUserAbout {
    data: {
        about: string,
    }[]
}

export interface IUserHistory {
    data: {}[]
}

export interface IUserFriends {
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
        last_online: string,
        friends_since: string,
    }[],
    pagination: {
        last_visible_page: number,
        has_next_page: boolean,
    }
}

export interface IUserReviews {
    data: {
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
            mal_id: number,
            url: string,
            type: string,
            votes: number,
            date: string,
            review: string,
            episodes_watched: number,
            scores: {
                overall: number,
                story: number,
                animation: number,
                sound: number,
                character: number,
                enjoyment: number
            },
        }[],
        pagination: {
            last_visible_page: number,
            has_next_page: boolean,
        },
    }
}

export interface IUserRecommendations {
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
        has_next_page: true,
    }
}

export interface IUserClubs {
    data: {
        mal_id: number,
        name: string,
        url: string,
    }[],
    pagination: {
        last_visible_page: number,
        has_next_page: boolean,
    }
}
