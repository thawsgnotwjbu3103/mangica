import { createContext, useEffect, useState } from "react";
import { BREAK_POINT_CLOSE_SIDE_BAR } from "../utils/constant";

export const HomeContext = createContext({});

export const HomeProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);
    const [title, setTitle] = useState(null);

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

    useEffect(() => {
        if(title) {
            document.title =  `${title} - NgfManga`;
        } else {
            document.title = `NgfManga`
        }
    }, [title])

    return <HomeContext.Provider value={{ isOpen, setIsOpen, width, setTitle}}>
        {children}
    </HomeContext.Provider>
}