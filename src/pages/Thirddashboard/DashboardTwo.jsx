import React from "react";
import Header from "../../components/Navbar/Header";
import Sidebar from "../../components/SideBarForDashboard/Sidebar";
import arrow from "../../assets/cardimg/arrowdown.png";
// import arrow from "../../";
import arrup from "../../assets/cardimg/arrup.png";
import arrdown from "../../assets/cardimg/arrdown.png";
import one from "../../assets/cardimg/one.png";
import two from "../../assets/cardimg/two.png";
import three from "../../assets/cardimg/three.png";
import four from "../../assets/cardimg/four.png";
import five from "../../assets/cardimg/five.png";
import arrowdown from "../../assets/cardimg/arrowdown.png";
import image from "../../assets/cardimg/image.png";
import post from "../../assets/cardimg/video.png";
import video from "../../assets/cardimg/post.png";
import {
  BsReverseLayoutTextSidebarReverse,
  BsFillPlayBtnFill,
  BsImage,
} from "react-icons/bs";
import "./DashboardTwo.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const DashboardTwo = () => {
  const data = [
    {
      name: "0",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "1",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "2",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "3",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: " 4",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "5",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "6",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "7",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "8",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "9",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
      <div className="dashboardTwo">
        {/* <Header /> */}
        <div className="contentWrapper">
          <div className="leftcontent">
            <Sidebar />
          </div>
          <div className="rightcontent">
            <div className="leftSide">
              <div className="tabs">
                <button>Update</button>
                <button>Competition Activity</button>
              </div>
              {/* <div className="slider">
                <div className="one1">
                  <h6>Lorem</h6>
                  <h1>1567</h1>
                </div>
                <div className="one2">
                  <h6>Lorem</h6>
                  <h1>1567</h1>
                </div>
                <div className="one3">
                  <h6>Lorem</h6>
                  <h1>1567</h1>
                </div>
                <div className="one4">
                  <h6>Lorem</h6>
                  <h1>1567</h1>
                </div>
                <div className="one5">
                  <h6>Lorem</h6>
                  <h1>1567</h1>
                </div>
                <div className="one6">
                  <img src={arrow} alt="" />
                </div>
              </div> */}

              <div className="firstChartDashboardTwo">
                <div className="Info">
                  <div className="Infoleft">
                    <div className="infoUpper">
                      <h2>Testing</h2>
                      <span>04-06-2022 </span>
                      <span>to</span>
                      <span>04-05-2023</span>
                    </div>

                    <div className="type">
                      <div className="typeUpper">
                        <h3>Type </h3>
                        <h3>Category </h3>
                      </div>

                      <div>
                        <h3>Lorem</h3>
                        <h3>Lorem</h3>
                      </div>
                    </div>
                  </div>
                  <div className="InfoRight">
                    <div className="RightUpper">
                      <h3>Sub Category </h3>
                      <h3>Measurement </h3>
                      <h3>Measure by </h3>
                      <h3>Measure by </h3>
                    </div>
                    <div>
                      <h3>Lorem</h3>
                      <h3>Lorem</h3>
                      <h3>Lorem</h3>
                      <h3>Lorem</h3>
                    </div>
                  </div>
                </div>

                <div className="fitbit">
                  <h1>FitBIT</h1>
                  <h5>current Api</h5>
                </div>
              </div>

              <div className="colorBox">
                <div className="colorOne">         
                </div>
                <div className="colorTwo">
                </div>
                <div className="colorThree">
                </div>
                <div className="colorFour">
                </div>

              </div>

              <div className="compBtn">
                <div className="button">
                    <div className="my">
                        My Competitions
                    </div>

                    <div className="all">
                        All Competitions
                    </div>
                </div>
              </div>
              <div className="chart">
              <LineChart width={580} height={200} data={data}>

<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<legend />
<Line type="monotone" dataKey="pv" stroke="#8884d8" />
<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>
              </div>
<div className="lines">
    <div className="lineone"></div>
    <div className="linetwo"></div>
    <div className="linethree"></div>
    <div className="linefour"></div>
</div>



            </div>

            <div className="rightSide">
              <div className="wrapperRight">
                <div>
                  <h5>connect Api</h5>
                </div>
                <div className="colors">
                  <div className="organge"></div>
                  <div className="yellowgreen"></div>
                  <div className="purple"></div>
                </div>

                <div>
                  <p>more details</p>
                </div>
              </div>

              <div className="followers">
                <h1>1567</h1>
                <p>Number of followers</p>
              </div>

              <div className="pridiction">
                <div>
                  <h5>Pridictions</h5>
                </div>
                <div className="slideWraper">
                  <div className="lables">
                    <div>
                      <input type="radio" checked />
                      <span>Yes</span>
                    </div>
                    <div>
                      <h6>80%</h6>
                    </div>
                  </div>
                  <div className="Rangeslider">
                    <input
                      type="range"
                      name=""
                      id=""
                      value={80}
                      max={100}
                      className="range"
                    />
                  </div>
                </div>
                <div className="LowerslideWraper">
                  <div className="lables">
                    <div>
                      <input type="radio" />
                      <span>Yes</span>
                    </div>
                    <div>
                      <h6>80%</h6>
                    </div>
                  </div>
                  <div className="Rangeslider">
                    <input
                      type="range"
                      name=""
                      id=""
                      value={20}
                      max={100}
                      className="range"
                    />
                  </div>
                </div>
              </div>
              <div className="socialmedia">
                <h5>Prediction</h5>
                <input type="text" placeholder="Input" />
        <div className="lowerbutton">
            <button>
                +
            </button>
            <button>Submit</button>
        </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTwo;
