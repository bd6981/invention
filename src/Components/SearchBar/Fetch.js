export const getPatent = () => () =>
fetch ('https://api.patentsview.org/patents/query?q={"_gte":{"patent_date":"2007-01-04"}}').then((res) => res.json());