'use client'

import { createContext, useState } from 'react'

type AppContextType = {

};

type AppContextProviderProps = {
    children: React.ReactNode
}



export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = (props: AppContextProviderProps) => {
    const { children } = props


    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}