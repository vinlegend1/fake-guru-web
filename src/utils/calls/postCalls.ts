import { fetchOpts, serverURL } from "src/constants"
import { GetPostType } from "../../types";

export const callPostsFromBoardId = async (boardId: number): Promise<GetPostType[] | null> => {
    const response = await fetch(serverURL + `/api/post/from/board/${boardId}`, fetchOpts);
    if (response.status === 200) {
        return response.json();
    }
    return null;
}

export const callPostsFromBoardName = async (boardName: string): Promise<GetPostType[] | null> => {
    const response = await fetch(serverURL + `/api/post/from/board/name/${boardName}`, fetchOpts);
    if (response.status === 200) {
        return response.json();
    }
    return null;
}

export const callPostsFromUsername = async (username: string): Promise<GetPostType[] | null> => {
    const response = await fetch(serverURL + `/api/post/from/${username}`, fetchOpts);
    if (response.status === 200) {
        return response.json();
    }
    return null;
}

export const callPostsFromCreatorId = async (creatorId: number): Promise<GetPostType[] | null> => {
    const response = await fetch(serverURL + `/api/post/from/user/${creatorId}`, fetchOpts);
    if (response.status === 200) {
        return response.json();
    }
    return null;
}

export const callPostsFromFollowed = async (): Promise<GetPostType[] | null> => {
    const response = await fetch(serverURL + `/api/post/get/follow`, fetchOpts);
    if (response.status === 200) {
        return response.json();
    }
    return null;
}

export const postNewByBoardId = async () => {

}

export const postNewByBoardName = async () => {

}