import { createGlobalStyle } from 'styled-components'
import GilroyRegular from '../fonts/Gilroy-Regular.ttf'
import GilroySemibold from '../fonts/Gilroy-Semibold.ttf'

const FontStyles = createGlobalStyle`
	@font-face {
		font-family: 'Gilroy';
		src: local('Gilroy'), url(${GilroyRegular}) format('truetype');
		font-style: normal;
		font-weight: 400;
	}

	@font-face {
		font-family: 'Gilroy';
		src: local('Gilroy'), url(${GilroySemibold}) format('truetype');
		font-style: normal;
		font-weight: 600;
	}
`
export default FontStyles
