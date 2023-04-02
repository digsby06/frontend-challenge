import { StoryResponse } from "../../types"

type StoryProps = {
    story: StoryResponse
}

const Story = ({ story }: StoryProps) => {
    return (
        <article className="flex flex-row w-full bg-white border border-gray mb-4 p-4">
            <img className="h-auto w-48" src={story.thumbnail.desktop} alt='Story thumbnail' />
            
            <div className="flex flex-col justify-between pl-4">
                <div className="flex items-center">
                    <a href={story.url} target="_blank">
                        <h5 className="font-bold">{story.title}</h5>
                    </a>
                </div>

            
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={story.author.avatar} alt={`${story.author.name} Picture`} />
                    </div>

                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate pl-2">{story.author.name}</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Story