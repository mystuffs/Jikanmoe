import type {
    IUserAbout,
    IUserClubs,
    IUserFavorites,
    IUserFriends,
    IUserHistory,
    IUserID,
    IUserProfile,
    IUserRecommendations,
    IUserReviews,
    IUsersSearch,
    IUserStatistics,
    IUserUpdates,
} from "../typings/users";
import fetchURL from "./util";

export default class Users {
    public async getUsersSearch(params?: string): Promise<IUsersSearch> {
        const data = await fetchURL<IUsersSearch>(params ? `/users${params}` : "/users");
        return data;
    }

    public async getUserById(): Promise<IUserID> {
        const data = await fetchURL<IUserID>("/users/userbyid");
        return data;
    }

    public async getUserProfile(username: string): Promise<IUserProfile> {
        const data = await fetchURL<IUserProfile>(`/users/${username}`);
        return data;
    }

    public async getUserStatistics(username: string): Promise<IUserStatistics> {
        const data = await fetchURL<IUserStatistics>(`/users/${username}/statistics`);
        return data;
    }

    public async getUserFavorites(username: string): Promise<IUserFavorites> {
        const data = await fetchURL<IUserFavorites>(`/users/${username}/favorites`);
        return data;
    }

    public async getUserUpdates(username: string): Promise<IUserUpdates> {
        const data = await fetchURL<IUserUpdates>(`/users/${username}/userupdates`);
        return data;
    }

    public async getUserAbout(username: string): Promise<IUserAbout> {
        const data = await fetchURL<IUserAbout>(`/users/${username}/about`);
        return data;
    }

    public async getUserHistory(username: string, params?: string): Promise<IUserHistory> {
        const data = await fetchURL<IUserHistory>(params ? `/users/${username}/history${params}` : `/users/${username}/history`);
        return data;
    }

    public async getUserFriends(username: string): Promise<IUserFriends> {
        const data = await fetchURL<IUserFriends>(`/users/${username}/friends`);
        return data;
    }

    public async getUserReviews(username: string): Promise<IUserReviews> {
        const data = await fetchURL<IUserReviews>(`/users/${username}/friends`);
        return data;
    }

    public async getUserRecommendations(username: string): Promise<IUserRecommendations> {
        const data = await fetchURL<IUserRecommendations>(`/users/${username}/recommendations`);
        return data;
    }

    public async getUserClubs(username: string): Promise<IUserClubs> {
        const data = await fetchURL<IUserClubs>(`/users/${username}/clubs`);
        return data;
    }
}
