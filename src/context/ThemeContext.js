import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [isLight, setIsLight] = useState(true);
    // const [theme, setTheme] = useState({
    //     // light: {
    //     //     bgColor: '#fff',
    //     //     color: '#000'
    //     // },
    //     // dark: {
    //     //     bgColor: '#000',
    //     //     color: '#fff'
    //     // }
    // });

    // const themeToggler = (theme) => {
    //     if (theme === 'light') {
    //         setTheme({
    //             bgColor: '#fff',
    //             color: '#000'
    //         })
    //         console.log('light theme')
    //     } else {
    //         setTheme({
    //             bgColor: '#000',
    //             color: '#fff'
    //         })
    //         console.log('dark theme')

    //     }
    // }

    return (
        <ThemeContext.Provider value={{isLight, setIsLight}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;

export const useThemeProviderValue = () => useContext(ThemeContext);