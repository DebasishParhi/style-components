import styled from "styled-components";

const Button = styled.button`
  margin: 30px;
  margin-left:10%;
  cursor: pointer;
  padding: 15px 30px;
  border: 0;
  background-color: ${(props) =>
    props.theme === "primary" ? "#0000ff" : "#ededed"};
  color: ${(props) =>
    props.theme === "primary"
      ? "whitesmoke"
    //   :"#ededed"}
      : props.theme === "linkbtn"
      ? "#77a6ce"
      : "0#00"};
  border: 3px #0000ff
    ${(props) =>
      props.theme === "dashed" && props.theme != "textbtn"
        ? "dotted"
        : props.theme === "defaultt"
        ? ""
        : ""};
        border: 3px black

  &:hover {
    background-color: ${(props) =>
      props.theme === "textbtn" ? "#aaaab3" : ""};
  }
`;

export { Button };
