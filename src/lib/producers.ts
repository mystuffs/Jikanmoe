import fetchURL from "./util";
import type { IProducers } from "../typings/producers";

export default class Producers {
    public async getProducers(page?: number): Promise<IProducers> {
        const data = await fetchURL<IProducers>(page ? `/producers?page=${page}` : "/producers");
        return data;
    }
}
