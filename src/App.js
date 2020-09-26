import React from 'react';
//import { ListGroupItem } from 'react-bootstrap';
import Badge from "react-bootstrap/Badge";
let marked = require("marked");

const intialState = `This is a paragraph
# header (H1 size)
## sub header (H2 size)
[link](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer)
inline code \` <div> </div>  \`
code block
\`\`\`
let x=1;
let y=2;
let z=x+y;
\`\`\`

- list item1
- list item2
- list item3

> Block Quotes!

![React](https://goo.gle/Umyytc)

**bolded text**
`;

export default class App extends React.Component{
  // constructor(props){
  //   super(props)
    //this.
    state = {
      text: intialState
    };
  //}

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  render (){
    const {text} = this.state;
    var inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px"
    };

    var outputStyle = {
      width: "400px",
      height: "50vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px"
    };
    const markdown = marked(text, {breaks: true} );
    return(
      <div className="App">
        <div className="container">

        <div className="row mt-4">
                <div className="col text-center">
        <h1>
 <Badge className="text-align-center" variant="light">
 Markdown Previewer
</Badge>
 </h1>
 </div>
 </div>
 <div className="row mt-4">
          <div className="col-md-6">
          <div className="col text-center">
          <h4>
 <Badge className="text-align-center" variant="secondary">
 Markdown Input
</Badge>
 </h4>
 <div className="mark-input" style={inputStyle}>
   <textarea id="editor" 
   className="input" 
   style={inputStyle} 
   value= {text}
   onChange={this.handleChange}
    >
    </textarea>;
 </div>
 </div>
          
          </div>
          <div className="col-md-6">
          <div className="col text-center">
          <h4>
 <Badge className="text-align-center" variant="secondary">
 Preview
</Badge>
 </h4>
 <div id="preview" style={outputStyle}
 dangerouslySetInnerHTML= {{__html: markdown}}
 >

 </div>
 </div>            
          </div>
        </div>
        </div>
      </div>
    );
  }
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
