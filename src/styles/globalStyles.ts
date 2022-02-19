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

.agreement {
  width: 100%;
  max-width: 1560px;
  box-sizing: border-box;
  padding: 0px 80px;
  justify-self: center;
  @media screen and (max-width: $tab-size) {
    padding: 0px 40px;
  }

  @media screen and (max-width: $mob-size) {
    padding: 0px 20px;
    margin-top: 20px;
  }
}

.agreement {
  display: grid;
  align-self: start;
  padding-bottom: 40px;
}

h1 {
  justify-self: center;
  text-align: center;
}

p.important {
  font-size: 18px;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 60px;
}

p {
  font-size: 16px;
  font-weight: 300;
  &.point {
    margin-left: 20px;
  }

  span.name {
    font-weight: 500;
  }
}

h2 {
  font-size: 18px;
  font-weight: 500;
}

.info-block {
  display: grid;
  row-gap: 20px;
  justify-items: start;
  > .info {
    display: grid;
    row-gap: 10px;
  }
}

.content {
  display: grid;
  row-gap: 60px;
}

a {
  text-decoration: underline;
  color: #e5e5e5;
  cursor: text;
  &.pointer {
    cursor: pointer;
  }
}

`

export default GlobalStyles
