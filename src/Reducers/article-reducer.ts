const ArticleReducer = (state, action) => {
  switch (action.type) {
    case "add-article":
      // const titles = action.payload.map(el => el.title);
      // let [prevTitles] = state.cachedArticles
      //   .map(el => el[action.searchKey].hits.map(item => item.title))
      //   .slice(state.cachedArticles.length - 1);
      // console.dir(titles);
      // console.dir(prevTitles);
      // console.log(JSON.stringify(titles) == JSON.stringify(prevTitles));

      return {
        cachedArticles: [
          ...state.cachedArticles,
          { [action.searchKey]: { hits: action.payload, page: action.page } }
        ],
        searchKey: action.searchKey
      };

    default:
      return state;
  }
};
export default ArticleReducer;
