import React from 'react'
import "./index.css";
import Header from './component/Header';
import GENESYS_PARENT from './component/Genesys/GENESYS_PARENT';
import NICE_PARENT from './component/NICE/NICE_PARENT';
import VPI_PARENT from "./component/VPI_PARENT"
function App() {
  return (
   <>
   <Header/>
   <VPI_PARENT/>

   </> 
  )

  // const [activeComponent, setActiveComponent] = useState(1);
  // setActiveComponent(1);
  // const renderComponent = () => {
  //   switch (activeComponent) {
  //     case 1:
  //       return <VPI_PARENT />;
  //     case 2:
  //       return <NICE_PARENT />;
  //     case 3:
  //       return <GENESYS_PARENT />;
  //     default:
  //       return null;
  //   }
  // };

  // return (
  //   <>
  //     <Header />
  //     <div>
  //       <button onClick={() => setActiveComponent(1)}>VPI_PARENT</button>
  //       <button onClick={() => setActiveComponent(2)}>NICE_PARENT</button>
  //       <button onClick={() => setActiveComponent(3)}>GENESYS_PARENT</button>
  //     </div>
  //     <VPI_PARENT/>
  //   </>
  // )

}


export default App