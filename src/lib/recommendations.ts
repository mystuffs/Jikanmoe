import fetchURL from "./util";
import type { IRecentAnimeRecommendations, IRecentMangaRecommendations } from "../typings/recommendations";

export default class Recommendations {
    public async getRecentAnimeRecommendations(): Promise<IRecentAnimeRecommendations> {
        const data = await fetchURL<IRecentAnimeRecommendations>("/recommendations/anime");
        return data;
    }

    public async getRecentMangaRecommendations(): Promise<IRecentMangaRecommendations> {
        const data = await fetchURL<IRecentMangaRecommendations>("/recommendations/manga");
        return data;
    }
}
