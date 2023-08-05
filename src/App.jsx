import C1 from "./Components/C1";
import C2 from "./Components/C2";
import C3 from "./Components/C3";
import C4 from "./Components/C4";

let App =()=>{

return(
<div className="main-container">
<div className="container">
    <div className="inner-container">
    <C1/>
    <C2/>
    </div>
    <C3/>
</div>
<C4></C4>
</div>
)

}

export default App;