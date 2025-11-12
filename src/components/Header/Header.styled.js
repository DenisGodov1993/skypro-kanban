import styled from "styled-components";

export const SHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  /* background-color: #ffffff; */
  background-color: ${({ theme }) => theme.secondary};
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const Logo = styled.div`
  & img {
    width: 85px;
  }
`;

export const Nav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainButton = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  /* background-color: #565eef; */
  background-color: ${({ theme }) => theme.primary};
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  &._hover01:hover {
    background-color: #33399b;
  }
`;

export const UserButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  /* color: #565eef; */
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    margin-left: 6px;
    /* border-left: 2px solid #565eef; */
    /* border-bottom: 2px solid #565eef; */
    border-left: 2px solid ${({ theme }) => theme.primary};
    border-bottom: 2px solid ${({ theme }) => theme.primary};
    transform: rotate(-45deg);
  }

  &:hover {
    color: #33399b;

    &::after {
      border-left-color: #33399b;
      border-bottom-color: #33399b;
    }
  }
`;

export const PopupUserSet = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  /* background: #fff; */
  background: ${({ theme }) => theme.secondary};
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;

  & button {
    width: 72px;
    height: 30px;
    background: transparent;
    /* color: #565eef; */
    color: ${({ theme }) => theme.primary};
    border-radius: 4px;
    /* border: 1px solid #565eef; */
    border: 1px solid ${({ theme }) => theme.primary};
  }

  & button:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;

//  Новые элементы внутри PopupUserSet

export const PopUserName = styled.p`
  /* color: #000; */
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const PopUserMail = styled.p`
  /* color: #94a6be; */
  color: ${({ theme }) => theme.textSecondary};
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    /* color: #000; */
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }

  input[type="checkbox"] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: #eaeef6;
    outline: none;
    appearance: none;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      top: 1px;
      left: 1px;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: #94a6be;
      transition: 0.5s;
    }

    &:checked::before {
      left: 12px;
    }
  }
`;

export const PopUserButton = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  /* color: #565eef; */
  color: ${({ theme }) => theme.primary};
  border-radius: 4px;
  /* border: 1px solid #565eef; */
  border: 1px solid ${({ theme }) => theme.primary};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
    color: #fff;
  }
`;
