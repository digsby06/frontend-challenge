import { useEffect, useState } from 'react';
import useSWR from 'swr'
import { API_URL } from '../constants';
import { StoryResponse } from '../types';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const TIME_INTERVAL = 10000
const INITIAL_PAGE = 1

type UseFeedHook = {
    isLoading: boolean,
    hasStories: boolean,
    loadMore: () => void, 
    stories: StoryResponse[],
}

const useFeed = (): UseFeedHook => {
    const [index, setIndex] = useState(INITIAL_PAGE)
    const [stories, setStories] = useState([] as StoryResponse[])
    const [loadingMore, setLoadingMore] = useState(false);

    // Handles polling, hitting Barstool API every 10 secs 
    // Handles deep comparison via stable-hash and only returns when new data is available 
    const { data, isLoading } = useSWR(`${API_URL}`, fetcher, { refreshInterval: TIME_INTERVAL })
    
    const loadMore = () => {
        setIndex(index + 1)
    }

    const fetchMoreStories = async () => {
        // When the user clicks the [Load More] button, we need to pass the index into a new API call for the next page of content
        // We're keeping this separate from useSWR operations as to not interfere with polling. 
        try {
            const data: StoryResponse[] = await fetcher(`${API_URL}?page=${index}`);
            setStories([...stories, ...data])
        } catch (error) {
            console.log("error", error);
        } finally{
            setLoadingMore(false)
        }
    };

    useEffect(() => {
        if (data && !isLoading) {        
            if (stories.length) {
                // In this case, new data has been found on refresh
                // This will filter new stories that will be used in updated state
                const newStories: StoryResponse[] = data.filter((newStory: StoryResponse) => {
                    return stories.some(story => story.id !== newStory.id)
                })

                // New stories are prepended to existing stories
                const updatedStories = [...newStories, ...stories]
                setStories(updatedStories)
            } else {
                const newStories: StoryResponse[] = [...data]
                setStories(newStories)
            }
        }
    }, [data, isLoading])

    useEffect(() => {
        if (index !== 1) {
            setLoadingMore(true);
            fetchMoreStories();
        }

    }, [index])
    
    return {
        isLoading: isLoading || loadingMore,
        hasStories: stories.length > 0, 
        stories: stories,
        loadMore
    }
}

export default useFeed