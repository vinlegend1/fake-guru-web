export const genUniqKeyForPosts = (boardId: number, creatorId: number, postId: number): string => {
    return `${boardId}_${postId}_${creatorId}`;
}