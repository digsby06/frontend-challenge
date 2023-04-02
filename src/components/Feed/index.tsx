import { StoryResponse } from "../../types"
import Story from "../Story"

type FeedProps = {
    stories: StoryResponse[]
}

const Feed = ({ stories }: FeedProps) => {
    return (
        <>
            {
                stories.map((story) => (
                    <Story key={story.id} story={story} />
                ))
            }
        </>
    )
}

export default Feed