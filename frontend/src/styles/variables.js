export const darkColors = {
  primary: {
    // blue
    100: '#d3d4de',
    200: '#a6a9be',
    300: '#7a7f9d',
    400: '#4d547d',
    500: '#21295c',
    600: '#191F45', // manually adjusted
    700: '#141937',
    800: '#0d1025',
    900: '#070812',
  },
  secondary: {
    // yellow
    50: '#f0f0f0', // manually adjusted
    100: '#fff6e0',
    200: '#ffedc2',
    300: '#ffe3a3',
    400: '#ffda85',
    500: '#ffd166',
    600: '#cca752',
    700: '#997d3d',
    800: '#665429',
    900: '#332a14',
  },
  grey: {
    0: '#ffffff', // manually adjusted
    10: '#f6f6f6', // manually adjusted
    50: '#f0f0f0', // manually adjusted
    100: '#e0e0e0',
    200: '#c2c2c2',
    300: '#a3a3a3',
    400: '#858585',
    500: '#666666',
    600: '#525252',
    700: '#3d3d3d',
    800: '#292929',
    900: '#141414',
    1000: '#000000', // manually adjusted
  },
}

const lightColors = (darkColors) => {
  return Object.entries(darkColors).reduce((acc, [key, val]) => {
    const reversedObj = Object.keys(val).reduce((reversed, k, i, arr) => {
      reversed[k] = val[arr[arr.length - i - 1]] // Reverse value assignment
      return reversed
    }, {})

    acc[key] = reversedObj
    return acc
  }, {})
}

export const tokensLight = lightColors(darkColors)

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            primary: {
              ...darkColors.primary,
              main: darkColors.primary[400],
              light: darkColors.primary[400],
            },
            secondary: {
              ...darkColors.secondary,
              main: darkColors.secondary[300],
            },
            neutral: {
              ...darkColors.grey,
              main: darkColors.grey[500],
            },
            background: {
              default: darkColors.primary[600],
              alt: darkColors.primary[500],
            },
          }
        : {
            primary: {
              ...tokensLight.primary,
              main: darkColors.grey[50],
              light: darkColors.grey[100],
            },
            secondary: {
              ...tokensLight.secondary,
              main: darkColors.secondary[600],
              light: darkColors.secondary[700],
            },
            neutral: {
              ...tokensLight.grey,
              main: darkColors.grey[500],
            },
            background: {
              default: darkColors.grey[0],
              alt: darkColors.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 14,
      },
    },
  }
}
