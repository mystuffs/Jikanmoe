import { IWatchPopularEpisodes, IWatchPopularPromos, IWatchRecentEpisodes, IWatchRecentPromos } from "../typings/watch";
import fetchURL from "./util";

export default class Watch {
    public async getWatchRecentEpisodes(limit?: number): Promise<IWatchRecentEpisodes> {
        let data;
        if (limit) {
            data = await fetchURL<IWatchRecentEpisodes>(`/watch/episodes?limit=${limit}`);
        } else {
            data = await fetchURL<IWatchRecentEpisodes>("/watch/episodes");
        }
        return data;
    }

    public async getWatchPopularEpisodes(limit?: number): Promise<IWatchPopularEpisodes> {
        let data;
        if (limit) {
            data = await fetchURL<IWatchPopularEpisodes>(`/watch/episodes/popular?limit=${limit}`);
        } else {
            data = await fetchURL<IWatchPopularEpisodes>("/watch/episodes/popular");
        }
        return data;
    }

    public async getWatchRecentPromos(): Promise<IWatchRecentPromos> {
        const data = await fetchURL<IWatchRecentPromos>("/watch/promos");
        return data;
    }

    public async getWatchPopularPromos(): Promise<IWatchPopularPromos> {
        const data = await fetchURL<IWatchPopularPromos>("/watch/promos/popular");
        return data;
    }
}
