import * as React from "react";

export const AppContext = React.createContext({
    total: 0,
    updateTotal: () => {},
});

export const AppContextProvider = ({ children }) => {
    const [total, setTotal] = React.useState(0);

    const updateTotal = num => setTotal(total + num);
    return <AppContext.Provider value={{ total, updateTotal }}>{children}</AppContext.Provider>;
};
