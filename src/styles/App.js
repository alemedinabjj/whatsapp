import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'

export const GlobalStyles = css`
  :root {
    --bg-color: #d2dbdc;
    --bg-color-secondary: #ededed;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }

  body {
    background: var(--bg-color);
    font-family: 'Segoe UI', Helvetica Neue, Helvetica, monospace, sans-serif;
    margin: 0;
    padding: 0;
  }

  html {
    --webkit-font-smoothing: antialiased;
    --moz-osx-font-smoothing: grayscale;

    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`

export const Sidebar = styled.aside`
  width: 35%;
  max-width: 415px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;
`

export const AppWindow = styled.main`
  display: flex;
  height: 100vh;
  background: var(--bg-color-secondary);
`

export const ContentArea = styled.section`
  flex: 1;
`

export const Header = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  > img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
  }
`
export const ButtonGroup = styled.div`
  display: flex;
`

export const Button = styled.button`
  //reset button css

  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SearchInput = styled.div`
  background: #fff;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 10px;

  input {
    flex: 1;
    border: 0;
    outline: 0;
    background: transparent;
    margin-left: 10px;
  }
`

export const Search = styled.div`
  background: #f6f6f6;
  border-bottom: 1px solid #eee;
  padding: 5px 15px;
`

export const ChatList = styled.div`
  flex: 1;
  background-color: #fff;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 3px;
  }
`
