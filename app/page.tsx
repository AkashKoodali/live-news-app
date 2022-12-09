import {categories} from '../constants'
import fetchNews from '../lib/fetchNews';


async function HomePage() {
    //fetch the news data
    const news: NewsResponce = await fetchNews(categories.join(','))
    console.log(news);
    
  return (
    <div>
        {/* News list news */}
    </div>
  )
}

//stepzen import curl http://api.mediastack.com/v1/news?access_key=abc&sources=business,sports
export default HomePage;