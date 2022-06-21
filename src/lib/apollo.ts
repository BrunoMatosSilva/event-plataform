import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ocgm1i1qxs01z74k2i51ah/master',
    cache: new InMemoryCache()
});