import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { App } from './components/App'
import FontStyles from './styles/fontStyles'
import GlobalStyles from './styles/globalStyles'
import theme from './styles/theme'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <FontStyles />
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
)
