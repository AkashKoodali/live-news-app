import { gql } from "graphql-request";
import sortNewsByImage from "./sourceNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  //GraphQL query

  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  // Fetch function with nextjs 13 caching...
  const res = await fetch('https://zoersel.stepzen.net/api/hopping-giraffe/__graphql', {
    method: "POST",
    cache: isDynamic ? "no-cache" : "default",
    next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
    headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`
    },
    body: JSON.stringify({
        query,
        variables: {
            access_key: process.env.MEDIASTACK_API_KEY,
            categories: category,
            keywords: keywords
        }
    })
  });

  // console.log("Loading New Data From API for Category >>>",
  // category,
  // keywords);
  
const newsResponse = await res.json();

//sort function by images present
const news = sortNewsByImage(newsResponse.data.myQuery)

//return res
return news;
};

export default fetchNews;
