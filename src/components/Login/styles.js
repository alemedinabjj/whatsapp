import styled from '@emotion/styled'

export const Background = styled.div`
  background: #ffff;
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;


  .images1 {
    position: absolute;
    top: 0%;
    right: 4%;
    z-index: 1;
  }
  .images2 {
    position: absolute;
    top: -10%;
    left: -5%;
    z-index: 1;
  }

  @media (max-width: 768px) {
    .images1 {
      display: none;
    }
    .images2 {
      display: none;
    }
  }
`

export const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;

  width: 354px;
  height: 54px;
  border-radius: 10px;
  padding: 14px;
  background: ${props => props.background};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${props => props.hover};
  }

  span {
    font-family: 'Helvetica', sans-serif;
    font-size: 20px;
    line-height: 23px;
    color: #ffff;
  }
`

export const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  z-index: 2;
  background: #fff;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.25);
  padding-block: 100px;
  padding-inline: 120px;


  @media (max-width: 1268px) {
    padding-block: 50px;
    padding-inline: 50px;
  }
`

export const Container = styled.main`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-color: #f5f5f5; */

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const TextContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  color: #333;
  position: relative;
  z-index: 2;
`

export const Title = styled.h1`
  font-size: ${props => props.size};
  font-weight: 700;
  color: #4adf83;
  text-align: center;
`

export const SubTitle = styled.h2`
  font-size: 30px;
  font-weight: 400;
  color: #333;
  text-align: center;
`

export const Content = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: #d1d1d1; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 100%;
  }
`
