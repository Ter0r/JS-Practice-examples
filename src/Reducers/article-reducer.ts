const ArticleReducer = (state, action) => {
  switch (action.type) {
    case "add-article":
      return {
        cachedArticles: [
          ...state.cachedArticles,
          { [action.searchKey]: { hits: action.payload , page: action.page} }
        ]
      };
    default:
      return state;
  }
};
export default ArticleReducer;