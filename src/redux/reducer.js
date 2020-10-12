import data from "../data";
const initialState = {
  authors: data,
  newAuthorId: 5,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTHORS":
      return {
        ...state,
        authors: state.authors,
      };
    case "ADD_AUTHOR":
      const newAuthor = {
        id: state.newAuthorId,
        first_name: "Shahd",
        last_name: "Allemie",
        imageUrl:
          "https://www.netz.de/images/2016-11-21-firefox-focus-header-58cfedd908c25_500_300.jpg",
        books: [
          {
            title: "Anonymous book",
            color: "mysterious color",
          },
          {
            title: "Anonymous book",
            color: "mysterious color",
          },
        ],
      };
      const newID = state.newAuthorId + 1;
      return {
        ...state,
        newAuthorId: newID,
        authors: state.authors.concat(newAuthor),
      };
    case "DELETE_AUTHOR":
      return {
        ...state,
        authors: state.authors.filter(
          (author) => author.id !== action.author.id
        ),
      };
    default:
      return state;
  }
};
export default reducer;
