import { createContext, useState, useEffect } from "react";

export const BookmarkContext = createContext();

const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(() => {
    // Load bookmarks from localStorage when the app is initialized
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    return savedBookmarks;
  });

  useEffect(() => {
    if (bookmarks.length > 0) {
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  }, [bookmarks]);

  const toggleBookmark = (title) => {
    if (bookmarks.includes(title)) {
      setBookmarks(bookmarks.filter((bookmark) => bookmark !== title));
    } else {
      setBookmarks([...bookmarks, title]);
    }
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkProvider;
