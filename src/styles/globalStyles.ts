import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Gilroy';
	}

	body {
  	background-color: #0f032e;
	}

	::-webkit-scrollbar {
		width: 10px;
	}

	::-webkit-scrollbar-track {
		background: #0f032e;
	}

	::-webkit-scrollbar-thumb {
		background: #501cd5;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #0f032e;
	}
`

export default GlobalStyles
