export const ADD_BOOKMARK = "ADD_BOOKMARK";

export function addBookmark(data) {
  return Object.assign({ type: ADD_BOOKMARK }, data);
}