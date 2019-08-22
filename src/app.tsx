import React, { useState, useEffect, useReducer } from "react";

import ArticleReducer from "./Reducers/article-reducer";
import fetchSearchStories from "./api/get-articles";

import { Search } from "./components/search";
import { Table } from "./components/table";
import { EmptyPage } from "./components/NoStories";
import { AppGlobalStyle } from "./components/component-styles/app.styles";
import { IArticle } from "./model/ArticleItem";
import { Button } from "./components/button";

const DEFAULT_QUERY: string = "redux";

export const App = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [page, setPage]: [
    React.ComponentState,
    React.SetStateAction<React.ComponentState>
  ] = useState(0);
  const [searchTerm, setSearchTerm] = useState(DEFAULT_QUERY);

  const [{ cachedArticles }, dispatch] = useReducer(ArticleReducer, {
    cachedArticles: []
  });


  useEffect(() => {
    fetchSearchStories(searchTerm, page).then(result =>
      setArticles(result.hits)
    );
    addArticle(articles, searchTerm, page);
  }, [page]);

  const addArticle = (articles, searchTerm, page) => {
    dispatch({
      type: "add-article",
      payload: articles,
      searchKey: searchTerm,
      page: page
    });
  };

  const onDismiss = id => {
    setArticles(articles.filter(item => id !== item.objectID));
  };

  const onSearchEngine = event => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const onSearchSubmit = event => {
    fetchSearchStories(searchTerm, page).then(response =>
      setArticles(response.hits)
    );
    addArticle(articles, searchTerm, page);
    setSearchTerm("");
    event.preventDefault();
  };

  return (
    <>
      <pre>{JSON.stringify(cachedArticles)}</pre>
      <AppGlobalStyle />
      <div className="container">
        <div className="page">
          <div className="interactions">
            <Search
              value={searchTerm}
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
