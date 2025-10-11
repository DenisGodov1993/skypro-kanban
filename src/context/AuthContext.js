// import { createContext } from "react";

// export const AuthContext = createContext({
//   user: null,
//   updateUserInfo: () => {},
// });


import { createContext } from "react";

// export const AuthContext = createContext(null); // Создали контекст (коробку)

export const AuthContext = createContext({
    tasks: [],
    loading: false,
    error: "",
}); // Создали контекст гланой страницы канбан