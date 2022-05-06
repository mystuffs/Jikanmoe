import fetchURL from "./util";
import type {
    ICharacterAnime,
    ICharacterById,
    ICharacterManga,
    ICharacterPictures,
    ICharactersSearch,
    ICharacterVoiceActors,
} from "../typings/characters";

export default class Characters {
    public async getCharacterById(id: number): Promise<ICharacterById> {
        const data = await fetchURL<ICharacterById>(`/characters/${id}`);
        return data;
    }

    public async getCharacterAnime(id: number): Promise<ICharacterAnime> {
        const data = await fetchURL<ICharacterAnime>(`/characters/${id}`);
        return data;
    }

    public async getCharacterManga(id: number): Promise<ICharacterManga> {
        const data = await fetchURL<ICharacterManga>(`/characters/${id}`);
        return data;
    }

    public async getCharacterVoiceActors(id: number): Promise<ICharacterVoiceActors> {
        const data = await fetchURL<ICharacterVoiceActors>(`/characters/${id}`);
        return data;
    }

    public async getCharacterPictures(id: number): Promise<ICharacterPictures> {
        const data = await fetchURL<ICharacterPictures>(`/characters/${id}`);
        return data;
    }

    public async getCharactersSearch(endpoint: string): Promise<ICharactersSearch> {
        const data = await fetchURL<ICharactersSearch>(`/characters${endpoint}`);
        return data;
    }
}
