const DEFAULT_HPP: string = "50";

const PATH_BASE: string = "https://hn.algolia.com/api/v1";
const PATH_SEARCH: string = "/search";
const PARAM_SEARCH: string = "query=";
const PARAM_PAGE: string = "page=";
const PARAM_HPP: string = "hitsPerPage=";

const fetchSearchStories = async (searchTerm: string, page: number) =>
  await (await fetch(
    `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`
  ))
    .json()
    .catch(error => error);

export default fetchSearchStories;
