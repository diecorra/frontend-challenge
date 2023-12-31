import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Inter', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
button {
  font-family: 'Inter', sans-serif;
}
`;

export const BoxContainer = styled.div`
  height: 100vh;
  display: flex;
`;

export const PageContainer = styled.div`
  flex: 1;
  width: 100%;
  overflow: auto;
  background-color: ${({ theme }) => theme.body};
`;

export const PageContainerMax = styled(PageContainer)`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const PageContainerWithPadding = styled(PageContainer)`
  padding: 20px;
`;

export const ContainerMessage = styled.div`
  color: ${({ theme }) => theme.text.primary};
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 12px;
`;

export const Overlay = styled.div`
  background-color: ${({ theme }) => theme.overlay};
  position: fixed;
  inset: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const LoadingImg = styled.img`
  width: 5rem;
  height: 5rem;
`;
