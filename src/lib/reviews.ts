import fetchURL from "./util";
import type { IRecentAnimeReviews, IRecentMangaReviews } from "../typings/reviews";

export default class Reviews {
    public async getRecentAnimeReviews(): Promise<IRecentAnimeReviews> {
        const data = await fetchURL<IRecentAnimeReviews>("/reviews/anime");
        return data;
    }

    public async getRecentMangaReviews(): Promise<IRecentMangaReviews> {
        const data = await fetchURL<IRecentMangaReviews>("/reviews/anime");
        return data;
    }
}
