import type { IUsersSearch } from "../typings/users";
import fetchURL from "./util";

export default class Users {
    public async getUsersSearch(endpoint: string): Promise<IUsersSearch> {
        const data = await fetchURL<IUsersSearch>(`/users${endpoint}`);
        return data;
    }
}