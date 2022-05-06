import type {
    IMangaById,
    IMangaCharacters,
    IMangaNews,
    IMangaTopics,
} from "../typings/manga";
import fetchURL from "./util";

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
}
