import { IClubMembers, IClubRelations, IClubsById, IClubsSearch, IClubStaff } from "../typings/clubs";
import fetchURL from "./util";

export default class Clubs {
    public async getClubsById(id: number): Promise<IClubsById> {
        const data = await fetchURL<IClubsById>(`/clubs/${id}`);
        return data;
    }

    public async getClubMembers(id: number, page?: number): Promise<IClubMembers> {
        const data = await fetchURL<IClubMembers>(page ? `/clubs/${id}/members?page=${page}` : `/clubs/${id}/members`);
        return data;
    }

    public async getClubStaff(id: number): Promise<IClubStaff> {
        const data = await fetchURL<IClubStaff>(`/clubs/${id}/staff`);
        return data;
    }

    public async getClubRelations(id: number): Promise<IClubRelations> {
        const data = await fetchURL<IClubRelations>(`/clubs/${id}/staff`);
        return data;
    }

    public async getClubsSearch(endpoint: string): Promise<IClubsSearch> {
        const data = await fetchURL<IClubsSearch>(`/clubs${endpoint}`);
        return data;
    }
}