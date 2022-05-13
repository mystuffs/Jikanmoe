import fetchURL from "./util";
import type { ISchedules } from "../typings/schedules";

export default class Schedules {
    public async getSchedules(endpoint: string): Promise<ISchedules> {
        const data = await fetchURL<ISchedules>(`/schedules${endpoint}`);
        return data;
    }
}
