import React from 'react'
import {useQuery} from "./Query"
import {getPatent} from "./Fetch"

function Patents () {
    const {data, isLoading} = useQuery("patent", getPatent());
    if (isLoading) return <h1>Loading...</h1>
  return <img src={data?.url} width={100} />;

}

export default Patents
