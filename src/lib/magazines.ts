import type { IMagazines } from "../typings/magazines";
import fetchURL from "./util";

export default class Magazine {
    public async getMagazines(page?: number): Promise<IMagazines> {
        const data = await fetchURL<IMagazines>(page ? `/magazines?page=${page}` : "/magazines");
        return data;
    }
}
