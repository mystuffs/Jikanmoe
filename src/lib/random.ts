import fetchURL from "./util";
import type {
    IRandomAnime,
    IRandomChatacters,
    IRandomManga,
    IRandomPeople,
    IRandomUsers,
} from "../typings/random";

export default class Random {
    public async getRandomAnime(): Promise<IRandomAnime> {
        const data = await fetchURL<IRandomAnime>("/random/anime");
        return data;
    }

    public async getRandomManga(): Promise<IRandomManga> {
        const data = await fetchURL<IRandomManga>("/random/manga");
        return data;
    }

    public async getRandomCharacters(): Promise<IRandomChatacters> {
        const data = await fetchURL<IRandomChatacters>("/random/characters");
        return data;
    }

    public async getRandomPeople(): Promise<IRandomPeople> {
        const data = await fetchURL<IRandomPeople>("/random/people");
        return data;
    }

    public async getRandomUsers(): Promise<IRandomUsers> {
        const data = await fetchURL<IRandomUsers>("/random/users");
        return data;
    }
}
