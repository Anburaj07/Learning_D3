// import LinePlot from "./pages/LinePlot";
// import LinePlotB from "./pages/LinePlotB";

import BarChart from "./pages/BarChart";
import MyChart from "./pages/MyChart";
import PieChart from "./pages/PieChat";
import DoughnutChart from "./pages/DoughnutChart";

function App() {
  // const data = [100, 200, 300, 500, 100, 400,700];
  return (
    <div className="">
      {/* <LinePlot data={data} />
      <LinePlotB data={data} /> */}
      <div style={{width:"50%",margin:"auto",display:"flex",flexDirection:"column",gap:"100px"}}>
      <MyChart/>
      <BarChart/>
      <PieChart/>
      <DoughnutChart/>
      </div>
    </div>
  );
}

export default App;
