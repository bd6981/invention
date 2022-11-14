import React from 'react'
import {useQuery} from "react-query"
import {getPatent} from "./Fetch"

function Patents () {
    const {} = useQuery("patent", getPatent());
  return <img src={data?.url} width={100} />;

}

export default Patents
