import {Query, QueryClient, QueryClientProvider, useQuery} from "react-query"


function ReactQuery () {
  const client = new QueryClient({
    defaultOptions:{
    queries:{
        suspense: true,
    }
    },

  });


  return (
    <QueryClientProvider client={client}>
        <Patents data={data}/>
    </QueryClientProvider>
  )
  }
  export default Query;