export interface IAnimeByID {
  data: {
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
      }
    },
    trailer: {
      youtube_id: string,
      url: string,
      embed_url: string
    },
    title: string,
    title_english: string,
    title_japanese: string,
    title_synonyms: string[],
    type: string,
    source: string,
    episodes: number,
    status: string,
    airing: boolean,
    aired: {
      from: string,
      to: string,
      prop: {
        from: {
          day: number,
          month: number,
          year: number
        },
        to: {
          day: number,
          month: number,
          year: number
        },
        string: string
      },
    },
    duration: string,
    rating: string,
    score: number,
    scored_by: number,
    rank: number,
    popularity: number,
    members: number,
    favorites: number,
    synopsis: string,
    background: string,
    season: string,
    year: number,
    broadcast: {
      day: string,
      time: string,
      timezone: string,
      string: string,
    },
    producers: {
      mal_id: number,
      type: string,
      name: string,
      url: string,
    }[],
    licensors: {
      mal_id: number,
      type: string,
      name: string,
      url: string,
    }[],
    studios: {
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
    }[],
  }
}

export interface IAnimeCharecters {
  data: {
    character: {
      mal_id: number,
      url: string,
      images: {
        jpg: {
          image_url: string,
          small_image_url: string
        },
        webp: {
          image_url: string,
          small_image_url: string
        },
      },
      name: string
    },
    role: string,
    voice_actors: {
      person: {
        mal_id: number,
        url: string,
        images: {
          jpg: {
            image_url: string,
          },
        },
        name: string,
      },
      language: string
    }
  }[]
}

export interface IAnimeStaff {
  data: {
    person: {
      mal_id: number,
      url: string,
      images: {
        jpg: {
          image_url: string,
        }
      },
      name: string,
    },
    positions: string[],
  }[]
}

export interface IAnimeEpisodes {
  data: {
    mal_id: number,
    url: string,
    title: string,
    title_japanese: string,
    title_romanji: string,
    duration: 0,
    aired: string,
    filler: boolean,
    recap: boolean,
    forum_url: string,
  }[],
  pagination: {
    last_visible_page: number,
    has_next_page: boolean,
  }
}

export interface IAnimeEpisodeByID {
  data: {
    mal_id: number,
    url: string,
    title: string,
    title_japanese: string,
    title_romanji: string,
    duration: number,
    aired: string,
    filler: boolean,
    recap: boolean,
    synopsis: string
  }
}

export interface IAnimeNews {
  pagination: {
    last_visible_page: number,
    has_next_page: true
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
        image_url: string
      },
    },
    comments: number,
    excerpt: string
  }[]
}

export interface IAnimeForum {
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
  }[]
}

export interface IAnimeVideos {
  data: {
    promo: {
      title: string,
      trailer: {
        youtube_id: string,
        url: string,
        embed_url: string,
        images: {
          image_url: string,
          small_image_url: string,
          medium_image_url: string,
          large_image_url: string,
          maximum_image_url: string,
        },
      },
    }[],
    episodes: {
      mal_id: number,
      url: string,
      title: string,
      episode: string,
      images: {
        jpg: {
          image_url: string
        },
      },
    }[],
  }
}

export interface IAnimePictures {
  data: {
    images: {
      jpg: {
        image_url: string,
      },
    },
  }[]
}

export interface IAnimeStatistics {
  data: {
    watching: number,
    completed: number,
    on_hold: number,
    dropped: number,
    plan_to_watch: number,
    total: number,
    scores: {
      score: number,
      votes: number,
      percentage: number,
    }[],
  }
}

export interface IAnimeMoreInfo {
  data: {
    moreinfo: string,
  }
}

export interface IAnimeRecommendations {
  data: {
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
        }
      },
      title: string
    }
  }[]
}

export interface IAnimeUserUpdates {
  data: {
    user: {
      username: string,
      url: string,
      images: {
        jpg: {
          image_url: string
        },
        webp: {
          image_url: string
        }
      }
    },
    score: number,
    status: string,
    episodes_seen: number,
    episodes_total: number,
    date: string
  }[],
  pagination: {
    last_visible_page: number,
    has_next_page: true
  }
}

export interface IAnimeReviews {
  data: {
    user: {
      username: string,
      url: string,
      images: {
        jpg: {
          image_url: string
        },
        webp: {
          image_url: string
        }
      }
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
    has_next_page: boolean
  }
}

export interface IAnimeRelations {
  data: {
    relation: string,
    entry: {
      mal_id: number,
      type: string,
      name: string,
      url: string
    }[],
  }[],
}

export interface IAnimeThemes {
  data: {
    openings: string[],
    endings: string[],
  }
}

export interface IAnimeExternal {
  data: {
    name: string,
    url: string,
  }[]
}

export interface IAnimeSearch {
  data: {
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
      }
    },
    trailer: {
      youtube_id: string,
      url: string,
      embed_url: string
    },
    title: string,
    title_english: string,
    title_japanese: string,
    title_synonyms:string[],
    type: string,
    source: string,
    episodes: number,
    status: string,
    airing: true,
    aired: {
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
      },
    },
    duration: string,
    rating: string,
    score: number,
    scored_by: number,
    rank: number,
    popularity: number,
    members: number,
    favorites: number,
    synopsis: string,
    background: string,
    season: string,
    year: number,
    broadcast: {
      day: string,
      time: string,
      timezone: string,
      string: string,
    },
    producers: {
      mal_id: number,
      type: string,
      name: string,
      url: string,
    }[],
    licensors: {
      mal_id: number,
      type: string,
      name: string,
      url: string,
    }[],
    studios: {
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
    }[],
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
