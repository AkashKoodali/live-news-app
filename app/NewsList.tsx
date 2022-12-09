import Article from "./Article"


type Props = {
    news: NewsResponce
}

function NewsList({news} : Props) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
        {/* All articles */}

        {news.data.map((article) => (
            <Article key={article.title} article={article} />
        ))}
        
    </main>
  )
}

export default NewsList