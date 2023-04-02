
import Head from 'next/head'
import Image from 'next/image'
import BarStoolButton from '../src/components/BarStoolButton'
import Feed from '../src/components/Feed'
import useFeed from '../src/hooks/feed'

const HOME_CONTENT = {
  barstoolText: 'Barstool Sports',
  loading: 'Loading...',
  btnText: 'Load More'
}

export default function Home() {
  const { 
    hasStories,
    isLoading,
    loadMore,  
    stories
  } = useFeed()

  return (
    <div className="max-w-xl mx-auto py-4">
      <Head>
        <title>{HOME_CONTENT.barstoolText}</title>
      </Head>

      <header className="px-4 flex justify-center mb-4">
        <Image src="/logo.png" alt={HOME_CONTENT.barstoolText} width="200" height="64" />
      </header>
      
      <main>
        {
          hasStories && (
            <Feed stories={stories} />
          )
        }
   
        <BarStoolButton handleClick={loadMore} loading={isLoading} loadingText={HOME_CONTENT.loading} text={HOME_CONTENT.btnText} />
      </main>

      <footer className="flex justify-center items-center w-full py-5 mt-10 border-t border-gray">
        &copy; {HOME_CONTENT.barstoolText}
      </footer>
    </div>
  )
}
