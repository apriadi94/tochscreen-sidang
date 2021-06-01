import { createContext, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

    const [form, setForm] = useState({
        jenis_perkara : '', nomor_perkara : '', jenis_pihak : [], action : ''
    })

    const GlobalState = {form, setForm}
    return(
        <GlobalContext.Provider value={GlobalState}>
            {children}
        </GlobalContext.Provider>
    )
}