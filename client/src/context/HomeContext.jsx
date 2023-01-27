import { createContext, useEffect, useState } from "react";

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
        setIsOpen(width > 768)
    }, [width])

    return <HomeContext.Provider value={{ isOpen, setIsOpen, width }}>
        {children}
    </HomeContext.Provider>
}