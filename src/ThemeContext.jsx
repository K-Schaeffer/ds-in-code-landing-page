import React, { createContext, useContext, useEffect, useState } from 'react'
/* eslint import/no-webpack-loader-syntax: off */
import theme1light from '!!raw-loader!ds-in-code-design-tokens/dist/css/brand-a/theme-1/light.css'
import theme1dark from '!!raw-loader!ds-in-code-design-tokens/dist/css/brand-a/theme-1/dark.css'
import theme2light from '!!raw-loader!ds-in-code-design-tokens/dist/css/brand-a/theme-2/light.css'
import theme2dark from '!!raw-loader!ds-in-code-design-tokens/dist/css/brand-a/theme-2/dark.css'

export const ThemeContext = createContext()

export function ThemeProvider({
  brand,
  themeName,
  mode,
  children
}) {

  const [theme, setTheme] = useState(null)

  useEffect(() => {
    const tagStyle = document.createElement("style");
    tagStyle.setAttribute('id', 'theme-style');
    document.head.appendChild(tagStyle);
  }, [])

  useEffect(() => {
    changeTheme(brand, themeName, mode)
  }, [brand, themeName, mode])

  function changeTheme(brand, theme, mode) {
    const themeStyle = document.getElementById('theme-style');

    themeStyle.innerHTML = '';

    if(theme === 'theme-1'){
      (mode === 'dark')
        ? themeStyle.appendChild(document.createTextNode(theme1dark))
        : themeStyle.appendChild(document.createTextNode(theme1light));
    }
    if (theme === 'theme-2')  {
      (mode === 'dark')
        ? themeStyle.appendChild(document.createTextNode(theme2dark))
        : themeStyle.appendChild(document.createTextNode(theme2light));
    }

    setTheme({
      brand: brand,
      themeName: theme,
      mode: mode
    })
  }

  function handleTheme(newTheme = themeName, newBrand = brand, newMode = mode) {
    changeTheme(newBrand, newTheme, newMode);
  }

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {theme && children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  return context
}