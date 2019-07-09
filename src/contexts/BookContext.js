import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: "Lord of The Rings", id: 1},
        {title: "The Art of War", id: 2},
        {title: "The Witcher", id: 3},
        {title: "451 F", id: 4},
    ])
    return(
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
};

export default BookContextProvider;