import fetchURL from "./util";
import type {
    ISeasonNow,
    ISeasons,
    ISeasonsList,
    ISeasonUpcoming,
} from "../typings/seasons";

export default class Seasons {
    public async getSeason(year: number, season: string): Promise<ISeasons> {
        const data = await fetchURL<ISeasons>(`/seasons/${year}/${season}`);
        return data;
    }

    public async getSeasonNow(): Promise<ISeasonNow> {
        const data = await fetchURL<ISeasonNow>("/seasons/now");
        return data;
    }

    public async getSeasonsList(): Promise<ISeasonsList> {
        const data = await fetchURL<ISeasonsList>("/seasons");
        return data;
    }

    public async getSeasonUpcoming(): Promise<ISeasonUpcoming> {
        const data = await fetchURL<ISeasonUpcoming>("/seasons/upcoming");
        return data;
    }
}
