import React, {useEffect, useReducer, useState, useRef, Ref} from "react";

import ArticleReducer from "./Reducers/article-reducer";
import fetchSearchStories from "./api/get-articles";

import { Search } from "./components/search";
import { Table } from "./components/table";
import { EmptyPage } from "./components/NoStories";
import { AppGlobalStyle } from "./components/component-styles/app.styles";
import { IArticle } from "./model/ArticleItem";
import { Button } from "./components/button";

const DEFAULT_QUERY: string = "redux";
const inputRef = React.createRef();
export default inputRef;
export const App = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [page, setPage]: [
    React.ComponentState,
    React.SetStateAction<React.ComponentState>
  ] = useState(0);
  const [{ cachedArticles, searchKey }, dispatch] = useReducer(ArticleReducer, {
    cachedArticles: [],
    searchKey: ''
  });

  useEffect(() => {
    fetchSearchStories(searchKey, page)
      .then(result => {
        setArticles(result.hits);
        return result.hits;
      })
      .then(results => addArticle(results, searchKey, page));
    // getHits().then(response => console.dir(response));
  }, [page, searchKey]);

  const addArticle = (result, searchTerm, page) => {
    dispatch({
      type: "add-article",
      payload: result,
      searchKey: searchTerm,
      page: page
    });
  };

  const onDismiss = id => {
    setArticles(articles.filter(item => id !== item.objectID));
  };

  const onSearchEngine = event => {
    addArticle([],event.target.value, page);
    setPage(0);
  };

  const onSearchSubmit = event => {
    fetchSearchStories(searchKey, page)
      .then(response => {
        setArticles(response.hits);
        return response.hits;
      })
      .then(result => addArticle(result, searchKey, page));
     // setSearchTerm("");
    // let [heyaaah] = cachedArticles;
    // let { wow } = heyaaah;
    // console.dir(heyaaah[searchKey]);
    // console.log(searchKey);
    event.preventDefault();
  };

  // async function getHits() {
  //   return await cachedArticles[searchTerm];
  // }
  return (
    <>
      <pre>{}</pre>
      <AppGlobalStyle />
      <div className="container">
        <div className="page">
          <div className="interactions">
            <Search
              ref={inputRef}
              onChange={onSearchEngine}
              onSubmit={onSearchSubmit}
              onClick={() => onSearchSubmit}
            >
              Search
            </Search>
          </div>
          {articles.length ? (
            <Table list={articles} onDismiss={onDismiss} />
          ) : (
            <EmptyPage />
          )}
        </div>
        <span className="pageNumber">Page: {page}</span>
        {articles.length !== 0 && (
          <Button
            onClick={() => setPage(page + 1)}
            className="button button-more"
          >
            Show more stories
          </Button>
        )}
      </div>
    </>
  );
};
