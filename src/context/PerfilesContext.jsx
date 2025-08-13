import { createContext, useContext } from "react";
import { PerfilesJ } from "../hook/PerfilesHook";

const PerfilesContext = createContext();

export const PerfilesProvider = ({ children }) => {

const hook = PerfilesJ()

     return (
        <PerfilesContext.Provider value={hook}>
        {children}
        </PerfilesContext.Provider>
    )
}

export function usePerfiles() {
    return useContext(PerfilesContext)
}