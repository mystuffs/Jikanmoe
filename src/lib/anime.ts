import fetchURL from "./util";
import type {
    IAnimeByID,
    IAnimeCharecters,
    IAnimeEpisodeByID,
    IAnimeEpisodes,
    IAnimeExternal,
    IAnimeForum,
    IAnimeMoreInfo,
    IAnimeNews,
    IAnimePictures,
    IAnimeRecommendations,
    IAnimeRelations,
    IAnimeReviews,
    IAnimeSearch,
    IAnimeStaff,
    IAnimeStatistics,
    IAnimeThemes,
    IAnimeUserUpdates,
    IAnimeVideos,
} from "../typings/anime";

export default class Anime {
    public async getAnimeById(id: number): Promise<IAnimeByID> {
        const data = await fetchURL<IAnimeByID>(`/anime/${id}`);
        return data;
    }

    public async getAnimeCharacters(id: number): Promise<IAnimeCharecters> {
        const data = await fetchURL<IAnimeCharecters>(`/anime/${id}/characters`);
        return data;
    }

    public async getAnimeStaff(id: number): Promise<IAnimeStaff> {
        const data = await fetchURL<IAnimeStaff>(`/anime/${id}/staff`);
        return data;
    }

    public async getAnimeEpisodes(id: number, page?: number): Promise<IAnimeEpisodes> {
        const data = await fetchURL<IAnimeEpisodes>(page ? `/anime/${id}/episodes?page=${page}` : `/anime/${id}/episodes`);
        return data;
    }

    public async getAnimeEpisodeById(id: number, episode: number): Promise<IAnimeEpisodeByID> {
        const data = await fetchURL<IAnimeEpisodeByID>(`/anime/${id}/episodes/${episode}`);
        return data;
    }

    public async getAnimeNews(id: number, page?: number): Promise<IAnimeNews> {
        const data = await fetchURL<IAnimeNews>(page ? `/anime/${id}/news?page=${page}` : `/anime/${id}/news`);
        return data;
    }

    public async getAnimeForum(id: number, filter?: "all" | "episode" | "other"): Promise<IAnimeForum> {
        let data;
        if (filter) {
            if (!filter.includes("all") || !filter.includes("episode") || !filter.includes("other")) {
                throw new RangeError("Invalid filter. Must be \"all\" or \"episode\" or \"other\".");
            }
            data = await fetchURL<IAnimeForum>(`/anime/${id}/forum?filter=${filter}`);
        } else {
            data = await fetchURL<IAnimeForum>(`/anime/${id}/forum`);
        }
        return data as IAnimeForum;
    }

    public async getAnimeVideos(id: number): Promise<IAnimeVideos> {
        const data = await fetchURL<IAnimeVideos>(`/anime/${id}/videos`);
        return data;
    }

    public async getAnimePictures(id: number): Promise<IAnimePictures> {
        const data = await fetchURL<IAnimePictures>(`/anime/${id}/pictures`);
        return data;
    }

    public async getAnimeStatistics(id: number): Promise<IAnimeStatistics> {
        const data = await fetchURL<IAnimeStatistics>(`/anime/${id}/statistics`);
        return data;
    }

    public async getAnimeMoreInfo(id: number): Promise<IAnimeMoreInfo> {
        const data = await fetchURL<IAnimeMoreInfo>(`/anime/${id}/moreinfo`);
        return data;
    }

    public async getAnimeRecommendations(id: number): Promise<IAnimeRecommendations> {
        const data = await fetchURL<IAnimeRecommendations>(`/anime/${id}/recommendations`);
        return data;
    }

    public async getAnimeUserUpdates(id: number, page?: number): Promise<IAnimeUserUpdates> {
        const data = await fetchURL<IAnimeUserUpdates>(page ? `/anime/${id}/userupdates?page=${page}` : `/anime/${id}/userupdates`);
        return data;
    }

    public async getAnimeReviews(id: number, page?: number): Promise<IAnimeReviews> {
        const data = await fetchURL<IAnimeReviews>(page ? `/anime/${id}/reviews?page=${page}` : `/anime/${id}/reviews`);
        return data;
    }

    public async getAnimeRelations(id: number): Promise<IAnimeRelations> {
        const data = await fetchURL<IAnimeRelations>(`/anime/${id}/relations`);
        return data;
    }

    public async getAnimeThemes(id: number): Promise<IAnimeThemes> {
        const data = await fetchURL<IAnimeThemes>(`/anime/${id}/themes`);
        return data;
    }

    public async getAnimeExternal(id: number): Promise<IAnimeExternal> {
        const data = await fetchURL<IAnimeExternal>(`/anime/${id}/themes`);
        return data;
    }

    public async getAnimeSearch(endpoint?: string): Promise<IAnimeSearch> {
        let data;
        if (endpoint) {
            data = await fetchURL<IAnimeSearch>(`/anime${endpoint}`);
        } else {
            data = await fetchURL<IAnimeSearch>("/anime");
        }
        return data;
    }
}
