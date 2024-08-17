import { useMemo } from "react";

//required key 'title' in any post
//each key in post object is string
type post = {
    title: string;
    [key: string] : any;
}

export const useSortedPosts = <T extends post>(posts: T[], sort: string): T[] => {
    const sortedPosts: T[] = useMemo((): T[] => {
        if (sort) {
            return (sort == 'evaluationDown' || sort == 'priceDown')
                ? [...posts].sort((a: T, b: T): number => -(`${a[sort]}`.localeCompare(`${b[sort]}`))) //decreasing sort
                : [...posts].sort((a: T, b: T): number => `${a[sort]}`.localeCompare(`${b[sort]}`)) //text sort, increasing sort
        }
        return posts
    }, [sort, posts])

    return sortedPosts;
}

export const usePosts = <T extends post>(posts: T[], sort: string, query: string): T[] => {
    const sortedPosts: T[] = useSortedPosts(posts, sort)

    const sortedSearchedPosts: T[] = useMemo((): T[] => {
        return sortedPosts.filter((post: T):boolean => post.title.toLowerCase().includes(query.toLowerCase())) //search post by title
    }, [query, sortedPosts])

    return sortedSearchedPosts;
}
