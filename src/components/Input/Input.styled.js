import styled from "styled-components";

export const STag = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 10px 8px;
  margin-bottom: 7px;
  font-family: "Roboto", sans-serif;
  background-color: ${({ themeMode }) =>
    themeMode === "light" ? "#FFFFFF" : "#20202C"};

  &::placeholder {
    color: #94A6BE
  }
`;

// import styled from "styled-components";

// export const STag = styled.input`
//   width: 100%;
//   min-width: 100%;
//   border-radius: 8px;
//   border: 0.7px solid rgba(148, 166, 190, 0.4);
//   outline: none;
//   padding: 10px 8px;
//   margin-bottom: 7px;
//   font-family: "Roboto", sans-serif;
// `;
