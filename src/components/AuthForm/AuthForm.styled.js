import styled from "styled-components";

export const SWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: #EAEEF6;
`;

export const SContainerSignIn = styled.div`
    display: block;
    width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
`;

export const SModal = styled.div`
    width: 100%;
    height: 100%;
    min-width: 320px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SModalBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 368px;
    width: 100%;
    padding: 50px 60px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const SModalTtl = styled.div`
  
  & h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    margin-bottom: 20px;
  }
`;

export const SModalFormLogin = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SFormGroup = styled.div`
    text-align: center;

    & p {
        color: rgba(148, 166, 190, 0.4);
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: -0.14px;
    }

    & a {
        text-decoration: underline;
        color: rgba(148, 166, 190, 0.4);
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: -0.14px;
    }
`;