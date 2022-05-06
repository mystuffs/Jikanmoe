import fetchURL from "./util";
import type { IAnimeGenres } from "../typings/genres";

export default class Genres {
    public async getAnimeGenres(endpoint: string): Promise<IAnimeGenres> {
        const data = await fetchURL<IAnimeGenres>(`/genres/anime${endpoint}`);
        return data;
    }

    public async getMangaGenres(endpoint: string): Promise<IAnimeGenres> {
        const data = await fetchURL<IAnimeGenres>(`/genres/anime${endpoint}`);
        return data;
    }
}
