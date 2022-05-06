import { fetch } from "undici";

export default async function fetchURL<T>(endpoint: string): Promise<T> {
    const f = await fetch(`https://api.jikan.moe/v4${endpoint}`);
    const json = await f.json();
    return json as T;
}
