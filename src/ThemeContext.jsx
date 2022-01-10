import React, { createContext, useContext, useEffect, useState } from 'react'
/* eslint import/no-webpack-loader-syntax: off */
import tema1light from '!!raw-loader!@meiuca/dsc-design-tokens/dist/css/marca-a/tema-1/light.css'
import tema1dark from '!!raw-loader!@meiuca/dsc-design-tokens/dist/css/marca-a/tema-1/dark.css'
import tema2light from '!!raw-loader!@meiuca/dsc-design-tokens/dist/css/marca-a/tema-2/light.css'
import tema2dark from '!!raw-loader!@meiuca/dsc-design-tokens/dist/css/marca-a/tema-2/dark.css'

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

    if(theme === 'tema-1'){
      (mode === 'dark')
        ? themeStyle.appendChild(document.createTextNode(tema1dark))
        : themeStyle.appendChild(document.createTextNode(tema1light));
    }
    if (theme === 'tema-2')  {
      (mode === 'dark')
        ? themeStyle.appendChild(document.createTextNode(tema2dark))
        : themeStyle.appendChild(document.createTextNode(tema2light));
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