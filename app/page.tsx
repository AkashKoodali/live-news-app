import {categories} from '../constants'
import fetchNews from '../lib/fetchNews';
import NewsList from './NewsList';
//import response from '../responce.json';

async function HomePage() {
    //fetch the news data
    const news: NewsResponce = await fetchNews(categories.join(','));   
    
  return (
    <div>
        {/* News list news */}
        <NewsList news={news} />
    </div>
  )
}

//stepzen import curl http://api.mediastack.com/v1/news?access_key=abc&sources=business,sports
export default HomePage;