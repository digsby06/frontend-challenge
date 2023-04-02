export type Author = {
    name: string,
    author_url: string,
    avatar: string,
}

export type Thumbnail = {
    desktop: string,
}

export type StoryResponse = {
    id: number,
    author: Author,
    thumbnail: Thumbnail,
    title: string,
    url: string,
}

