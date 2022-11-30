import React from "react"
import { useCookies } from "react-cookie";

export const CurrentUserContext = React.createContext()

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState(null)
    const [cookies] = useCookies(["user"]);

    const fetchCurrentUser = async () => {
        const meRes = await fetch(`${import.meta.env.VITE_API_URL}/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + cookies["token"],
            }
        });
        const me = await meRes.json();
        setCurrentUser(me)
    }

    return (
        <CurrentUserContext.Provider value={{ currentUser, fetchCurrentUser }}>
            {children}
        </CurrentUserContext.Provider>
    )
}

export const useCurrentUser = () => React.useContext(CurrentUserContext)