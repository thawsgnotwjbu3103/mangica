import { createContext, useEffect, useState } from "react";
import { BREAK_POINT_CLOSE_SIDE_BAR } from "../utils/constant";

export const HomeContext = createContext({});

export const HomeProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);

    const handleSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleSizeChange);
        return () => {
            window.removeEventListener('resize', handleSizeChange);
        }
    }, [])

    useEffect(() => {
        setIsOpen(width > BREAK_POINT_CLOSE_SIDE_BAR)
    }, [width])

    return <HomeContext.Provider value={{ isOpen, setIsOpen, width}}>
        {children}
    </HomeContext.Provider>
}