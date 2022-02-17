import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { App } from './components/App'
import FontStyles from './styles/fontStyles'
import GlobalStyles from './styles/globalStyles'
import theme from './styles/theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <FontStyles />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
