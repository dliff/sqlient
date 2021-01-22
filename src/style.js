import {css} from "@emotion/react";

// QueryView Styles
export const columnStyle = css`
display: flex;
height:100%;
min-height:100%;
max-height:100%;
padding:40px;
`;
export const fullHeightStyle = css`
* {
box-sizing: border-box;
}
body, html, #root {
height:100%;
min-height:100%;
}
`;
export const col1Style = css`
display: flex;
flex-flow: column;
height:100%;
min-height:100%;
max-height:100%;
flex: 20%;
padding-right:20px;
`;
export const col2Style = css`
display: flex;
flex-flow: column;
height:100%;
min-height:100%;
max-height:100%;
flex: 80%;
padding-left:20px;
overflow:hidden;
`;
export const col3Style = css`
display: flex;
flex-flow: column;
height:100%;
min-height:100%;
max-height:100%;
flex: 40%;
padding-left:20px;
`;
export const flexRow = css`
display: flex;
flex-flow: row;
`;
export const editorColumn = css`
flex: 60%;
padding-right:20px;
`;
export const schemaColumn = css`
padding-left:20px;
flex: 40%;
`;
export const tableListStyle = css`
flex: 0 1 auto;
overflow:scroll;
border-radius:5px;
border:2px solid black;
margin:0;
padding:0;
li {
overflow:hidden;
list-style-type: none;
margin:5px;
cursor:pointer;
text-overflow: ellipsis;
:hover {
color: #cb4c11;
}
`;
export const activeStyle = css`
font-weight:bold;
color: #cb4c11;
`;
export const editorWrapperStyle = css`
flex: 0 1 auto;
overflow:scroll;
width:100%;
`;
export const queryButtonStyle = css`
border-radius:20px;
border:0;
display:block;
float:right;
color:black;
text-transform:uppercase;
padding:15px;
font-weight:bold;
background-color: transparent;
cursor:pointer;
font-size:20px;
:hover {
color: #cb4c11;
}
`;
export const queryStatus = css`
float:left;
margin-top:10px;
`

// ConnectView Styles
export const mainStyle = css`
padding: 32px;
background-color: #cb4c11;
font-size: 24px;
border-radius: 25px;
width:400px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;
export const inputGroupStyle = css`
p {
  font-size:10px;
  margin-bottom:0;
}
input {
margin-top:0;
border-radius:20px;
border:0;
height:25px;
width:100%;
padding-left:10px;
}
`;
export const connectButtonStyle = css`
border-radius:20px;
border:0;
height:25px;
margin: 0 auto;
display:block;
margin-top:25px;
`;
export const resultsTable = css`
 display: grid;
}
`;
export const equalRow = css`
flex:50%;
overflow:scroll;
`;
export const tableWrapper = css`
`;
export const resultsTableHeader = css`
font-weight:bold;
text-size:10px;
text-transform:uppercase;
padding:5px;
`;
export const resultsTableCell = css`
padding:5px;
`;