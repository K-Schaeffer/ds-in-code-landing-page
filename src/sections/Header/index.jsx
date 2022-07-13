import 'ds-in-code-design-system/dist/components/header';
import 'ds-in-code-design-system/dist/components/typography';
import 'ds-in-code-design-system/dist/components/radio-group';
import 'ds-in-code-design-system/dist/components/radio';
import 'ds-in-code-design-system/dist/components/switch';
import 'ds-in-code-design-system/dist/components/button';

import './style.scss';
import { useEffect, useState } from 'react';
import { useTheme } from '../../ThemeContext';


export default function AppHeader () {

  const { theme, handleTheme } = useTheme()
  const [mode, setMode] = useState('light');
  const [actualTheme, setActualTheme] = useState('theme-1');

  useEffect(() => {
    document.getElementsByTagName('dsc-switch')[0]
      .addEventListener("dsc-change", (e) =>
        setMode(!e.detail.checked ? 'light' : 'dark')
      )
    document.getElementsByTagName('dsc-radio-group')[0]
      .addEventListener("dsc-change", (e) =>
        setActualTheme(e.detail.value)
      )
  }, [])

  useEffect(() => {
    handleTheme(
      actualTheme,
      theme.brand,
      mode
    )
  },[mode, actualTheme, handleTheme, theme.brand])

  return (
    <div className='header'>
      <div className="container grid grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
        <div className="col-span-12">
          <dsc-header>
            <div className='header-content'>
              <dsc-typography
                class="only-mobile"
                component="heading"
                size="xs"
              >
                Trocar theme da Landing Page
              </dsc-typography>
              <dsc-radio-group>
                <dsc-radio
                  label="theme 01"
                  value="theme-1"
                  checked
                ></dsc-radio>

                <dsc-radio
                  label="theme 02"
                  value="theme-2"
                ></dsc-radio>
              </dsc-radio-group>
              <dsc-typography
                class="only-mobile"
                component="heading"
                size="xs"
              >
                Ativar Dark Mode
              </dsc-typography>
              <dsc-switch label="Dark"></dsc-switch>
            </div>
          </dsc-header>
        </div>
      </div>
    </div>
  )
}