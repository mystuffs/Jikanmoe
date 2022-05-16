import { ITopAnime, ITopCharacters, ITopManga, ITopPeople, ITopReviews } from "../typings/top";
import fetchURL from "./util";

export default class Top {
    public async getTopAnime(params?: string): Promise<ITopAnime> {
        const data = await fetchURL<ITopAnime>(params ? `/top/anime/${params}` : "top/anime");
        return data;
    }

    public async getTopManga(params?: string): Promise<ITopManga> {
        const data = await fetchURL<ITopManga>(params ? `/top/anime/${params}` : "top/anime");
        return data;
    }

    public async getTopPeople(page?: number): Promise<ITopPeople> {
        const data = await fetchURL<ITopPeople>(page ? `/top/people?page=${page}` : "top/people");
        return data;
    }

    public async getTopCharacters(page?: number): Promise<ITopCharacters> {
        const data = await fetchURL<ITopCharacters>(page ? `/top/characters?page=${page}` : "top/characters");
        return data;
    }

    public async getTopReviews(page?: number): Promise<ITopReviews> {
        const data = await fetchURL<ITopReviews>(page ? `/top/reviews?page=${page}` : "top/reviews");
        return data;
    }
}
