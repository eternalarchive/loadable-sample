// hook 버전
// import React, { useState } from "react";

// function App2() {
//   const [{ SplitMe2 }, setState] = useState({
//     SplitMe2: null,
//   });

//   const handleClick = () => {
//     // import("./notify").then(({ default: notify }) => {
//     //   notify();
//     // });
//     import("./SplitMe").then(({ default: SplitMe }) => {
//       setState({ SplitMe2: SplitMe });
//     });
//   };

//   return (
//     <>
//       <div className="App">
//         {/* <button onClick={handleClick}>Play!</button> */}
//         <button onClick={handleClick}>조각 조각 추가</button>
//         {SplitMe2 && <SplitMe2 />}
//       </div>
//     </>
//   );
// }

// export default App2;

// 클래스 버전
// import React, { Component } from "react";

// class App2 extends Component {
//   state = {
//     SplitMe: null,
//   };
//   handleClick = () => {
//     import("./SplitMe").then(({ default: SplitMe }) => {
//       this.setState({
//         SplitMe,
//       });
//     });
//   };
//   render() {
//     const { SplitMe } = this.state;
//     return (
//       <div>
//         <button onClick={this.handleClick}>Click Me</button>
//         {SplitMe && <SplitMe />}
//       </div>
//     );
//   }
// }

// export default App2;

// hook 버전(withSplitting 사용 버전)
import React, { useState } from "react";
// import withSplitting from "./withSplitting";
import withSplittingHooks from "./withSplittingHooks";

// const SplitMe2 = withSplitting(() => import("./SplitMe"));
const SplitMe2 = withSplittingHooks(() => import("./SplitMe"));

function App2() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      {visible && <SplitMe2 />}
    </div>
  );
}

export default App2;
