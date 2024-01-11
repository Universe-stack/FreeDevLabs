import {request,gql} from 'graphql-request'

export const getCourseData = async ()=>{
  const url = `https://api-eu-west-2.hygraph.com/v2/clfy93uj66em101un4ctfazj5/master`;
    const query = gql`
    query MyQuery {
      niches {
        id
        name
        skills {
          id
          name
          isniche
          techs {
            id
            link
            name
            slug
          }
          slug
        }
        isNiched
        slug
      }
    }     
    `
    const res = await request(url,query);
    return res;
}

