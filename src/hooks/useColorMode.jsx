import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

const useColorMode = () => {
  // Retrieve color mode from local storage, default to 'light' if not present
  const [colorMode, setColorMode] = useLocalStorage('color-theme', 'light')

  useEffect(() => {
    // console.log(colorMode)
    const className = 'dark'
    const bodyClass = window.document.body.classList

    // Check if colorMode is defined before applying changes
    if (colorMode) {
      // Add or remove 'dark' class based on color mode
      colorMode === 'dark'
        ? bodyClass.add(className)
        : bodyClass.remove(className)
    } else {
      // Handle the case when colorMode is undefined (for debugging purposes)
      console.error('Color mode is undefined')
    }
  }, [colorMode])

  return [colorMode, setColorMode]
}

export default useColorMode
