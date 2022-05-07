import fetchURL from "./util";
import type {
    IMangaById,
    IMangaCharacters,
    IMangaExternal,
    IMangaMoreInfo,
    IMangaNews,
    IMangaPictures,
    IMangaRecommendations,
    IMangaRelations,
    IMangaReviews,
    IMangaSearch,
    IMangaStatistics,
    IMangaTopics,
    IMangaUserUpdates,
} from "../typings/manga";

export default class Manga {
    public async getMangaById(id: number): Promise<IMangaById> {
        const data = await fetchURL<IMangaById>(`/manga/${id}`);
        return data;
    }

    public async getMangaCharacters(id: number): Promise<IMangaCharacters> {
        const data = await fetchURL<IMangaCharacters>(`/manga/${id}/characters`);
        return data;
    }

    public async getMangaNews(id: number, page?: number): Promise<IMangaNews> {
        const data = await fetchURL<IMangaNews>(page ? `/manga/${id}/characters?page=${page}` : `/manga/${id}/characters`);
        return data;
    }

    public async getMangaTopics(id: number, filter: "all" | "episode" | "other"): Promise<IMangaTopics> {
        let data;
        if (filter) {
            if (!filter.includes("all") || !filter.includes("episode") || !filter.includes("other")) {
                throw new RangeError("Invalid filter. Must be \"all\" or \"episode\" or \"other\".");
            }
            data = await fetchURL<IMangaTopics>(`/manga/${id}/forum?filter=${filter}`);
        } else {
            data = await fetchURL<IMangaTopics>(`/manga/${id}/forum`);
        }
        return data;
    }

    public async getMangaPictures(id: number): Promise<IMangaPictures> {
        const data = await fetchURL<IMangaPictures>(`/manga/${id}/pictures`);
        return data;
    }

    public async getMangaStatistics(id: number): Promise<IMangaStatistics> {
        const data = await fetchURL<IMangaStatistics>(`/manga/${id}/statistics`);
        return data;
    }

    public async getMangaMoreInfo(id: number): Promise<IMangaMoreInfo> {
        const data = await fetchURL<IMangaMoreInfo>(`/manga/${id}/moreinfo`);
        return data;
    }

    public async getMangaRecommendations(id: number): Promise<IMangaRecommendations> {
        const data = await fetchURL<IMangaRecommendations>(`/manga/${id}/recommendations`);
        return data;
    }

    public async getMangaUserUpdates(id: number, page?: number): Promise<IMangaUserUpdates> {
        const data = await fetchURL<IMangaUserUpdates>(page ? `/manga/${id}/userupdates?page=${page}` : `/manga/${id}/userupdates`);
        return data;
    }

    public async getMangaReviews(id: number, page?: number): Promise<IMangaReviews> {
        const data = await fetchURL<IMangaReviews>(page ? `/manga/${id}/reviews?page=${page}` : `/manga/${id}/reviews`);
        return data;
    }

    public async getMangaRelations(id: number): Promise<IMangaRelations> {
        const data = await fetchURL<IMangaRelations>(`/manga/${id}/relations`);
        return data;
    }

    public async getMangaExternal(id: number): Promise<IMangaExternal> {
        const data = await fetchURL<IMangaExternal>(`/manga/${id}/external`);
        return data;
    }

    public async getMangaSearch(endpoint?: string): Promise<IMangaSearch> {
        let data;
        if (endpoint) {
            data = await fetchURL<IMangaSearch>(`/manga${endpoint}`);
        } else {
            data = await fetchURL<IMangaSearch>("/manga");
        }
        return data;
    }
}
