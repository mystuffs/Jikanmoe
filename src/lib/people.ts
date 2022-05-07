import fetchURL from "./util";
import type {
    IPeopleSearch,
    IPersonAnime,
    IPersonById,
    IPersonManga,
    IPersonPictures,
    IPersonVoices,
} from "../typings/people";

export default class Person {
    public async getPersonById(id: number): Promise<IPersonById> {
        const data = await fetchURL<IPersonById>(`/people/${id}`);
        return data;
    }

    public async getPersonAnime(id: number): Promise<IPersonAnime> {
        const data = await fetchURL<IPersonAnime>(`/people/${id}/anime`);
        return data;
    }

    public async getPersonVoices(id: number): Promise<IPersonVoices> {
        const data = await fetchURL<IPersonVoices>(`/people/${id}/anime`);
        return data;
    }

    public async getPersonManga(id: number): Promise<IPersonManga> {
        const data = await fetchURL<IPersonManga>(`/people/${id}/manga`);
        return data;
    }

    public async getPersonPictures(id: number): Promise<IPersonPictures> {
        const data = await fetchURL<IPersonPictures>(`/people/${id}/pictures`);
        return data;
    }

    public async getPeopleSearch(endpoint: string): Promise<IPeopleSearch> {
        const data = await fetchURL<IPeopleSearch>(`/people${endpoint}`);
        return data;
    }
}
