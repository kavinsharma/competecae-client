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
import fitbit from "../../assets/cardimg/fitbit.png";
import worun from "../../assets/cardimg/worun.png";
import garmin from "../../assets/cardimg/garmin.png";
import img from "../../assets/cardimg/img.png";
import logo from "../../assets/cardimg/caemobile.png";
import { FaBars } from 'react-icons/fa';

import {BsReverseLayoutTextSidebarReverse,BsFillPlayBtnFill,BsImage } from 'react-icons/bs'
import "./Dashbaord.css";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Dashboard = () => {
  const data = [
    {
      "name": "0",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "1",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "2",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "3",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": " 4",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "5",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "6",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
    {
      "name": "7",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
    {
      "name": "8",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
    {
      "name": "9",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]

  return (
    <>
      <div className="dashboard">
        {/* <Header /> */}
        <div className="contentWrapper">
          <div className="leftcontent">
            <Sidebar />
          </div>
          <div className="rightcontent">
            <div className="leftSide">
              <div className="tabs">
                <button>Fitness</button>
                <button>Finance</button>
                <button>Sports</button>
              </div>
              <div className="slider">
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
              </div>

              <div className="firstChart">
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

                <div className="steps">
                  <div className="step">
                    <h1>1567</h1>
                    <h6>steps</h6>
                  </div>
                </div>
              </div>

              <div className="secondCharts">
                <div className="oneChart">
                  <div className="chartsmall">
                  <LineChart width={250} height={120} data={data}>

<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<legend />
<Line type="monotone" dataKey="pv" stroke="#8884d8" />
<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>
                  </div>
                  <div className="saving">
                    <p>savings</p>
                    <h2>
                      
                      <img src={arrup} alt="" /> 30000
                    </h2>
                    <h2>
                    
                      <img src={arrdown} alt="" /> 50000
                    </h2>
                  </div>
                </div>

                <div className="twoChart">
                  <div className="chartsmall">
                  <LineChart width={250} height={120} data={data}>

<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<legend />
<Line type="monotone" dataKey="pv" stroke="#8884d8" />
<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>
                  </div>
                  <div className="saving">
                    <p>savings</p>
                    <h2>
                      {" "}
                      <img src={arrup} alt="" /> 30000
                    </h2>
                    <h2>
                      {" "}
                      <img src={arrdown} alt="" /> 50000
                    </h2>
                  </div>
                </div>
              </div>

              <div className="imgSlider">
                <div>
                  <img src={five} alt="" />
                </div>
                <div>
                  <img src={one} alt="" />
                </div>
                <div>
                  <img src={two} alt="" />
                </div>
                <div>
                  <img src={one} alt="" className="imgimg" />
                </div>

                <div>
                  <img src={four} alt="" />
                </div>
              </div>
              <div className="downBtn">
  <button> <img src={arrowdown} alt="" /> </button>
</div>
            </div>

            <div className="rightSide">
<div className="wrapperRight">
  <div>
  <h5>connect Api</h5>

  </div>
  <div className="colors">

  <div className="organge">

  </div>
  <div className="yellowgreen">

  </div>
  <div className="purple">

  </div>
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
<input type="range" name="" id="" value={80} max = {100} className ='range' />

</div>
</div>
  <div className="LowerslideWraper">

<div className="lables">
<div>
<input type="radio"  />
<span>Yes</span>
</div>
<div>
  <h6>80%</h6>
</div>
</div>
<div className="Rangeslider">
<input type="range" name="" id="" value={20} max = {100} className ='range' />
</div>
</div>



</div>
<div className="socialmedia">
  <div className="borderWrapper" >
   <span> <BsFillPlayBtnFill /> </span>
   <span> <BsReverseLayoutTextSidebarReverse /> </span>
   <span> <BsImage /> </span>
  </div>
  <div className="yellowBtn">
    <button>Submit</button>
  </div>
</div>









            </div>
          </div>
        </div>
      </div>


        {/* mobile view of dashboard started from here */}

        <div className="mobileDashboard">
        {/* <div className="header">
          <div className="user">
            <img src={img} alt="" />
          </div>
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="bars">
            <button>
              <FaBars />
            </button>
          </div>
        </div> */}
        <div className="tabs">
                <button>Fitness</button>
                <button>Finance</button>
                <button>Sports</button>
              </div>
      <div className="apiMobile">
        <div className="apiHead">
          <h4>connect Api</h4>
        </div>
        <div className="threeLogo">
          <img src={fitbit} alt="" />
          <img src={garmin} alt="" />
          <img src={worun} alt="" />
        </div>
        <div className="learnmore">
          <p>learn more</p>
        </div>
      </div>

      <div className="followersMobile">
                <h1>1567</h1>
                <p>Number of followers</p>
              </div>
              <div className="MobilePrediction">
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

              <div className="sliderMobile">
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
              </div>
              <div className="chartMobile">
                <div className="charts">

                  <LineChart width={280} height={130} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                  </LineChart>
<div className="miles">
<p>Miles</p>
                    <h2>
                      <img src={arrup} alt="" /> 30000
                    </h2>
                    <h2>
                      <img src={arrdown} alt="" /> 50000
                    </h2>
</div>


                </div>
                </div>
              <div className="chartMobile">
                <div className="charts">

                  <LineChart width={280} height={130} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                  </LineChart>
<div className="miles">
<p>Pushups</p>
                    <h2>
                      <img src={arrup} alt="" /> 30000
                    </h2>
                  
</div>


                </div>
                </div>
              <div className="chartMobile">
                <div className="charts">

                  <LineChart width={280} height={130} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                  </LineChart>
<div className="miles">
<p>Crunches</p>
                    <h2>
                      <img src={arrup} alt="" /> 30000
                    </h2>
                    <h2>
                      <img src={arrdown} alt="" /> 50000
                    </h2>
</div>


                </div>
                </div>


                <div className="imgSliderMobile">
                <div>
                  <img src={five} alt="" />
                </div>
                <div>
                  <img src={one} alt="" />
                </div>
                <div>
                  <img src={two} alt="" />
                </div>
                <div>
                  <img src={one} alt="" className="imgimg" />
                </div>

                <div>
                  <img src={four} alt="" />
                </div>
              </div>

              <div className="socialmedia">
                <div className="borderWrapper">
                  <span>
                    
                   videos <BsFillPlayBtnFill className="icn" />
                  </span>
                  <span>
                    
                   post <BsReverseLayoutTextSidebarReverse  className="icn" />
                  </span>
                  <span>
                    
                  photo  <BsImage className="icn" />
                  </span>
                </div>
                <div className="yellowBtn">
                  <button>Submit</button>
                </div>
              </div>



              <div className="downBtn">
                <button>
                  
                  <img src={arrowdown} alt="" />
                </button>
              </div>










      </div>
    </>
  );
};

export default Dashboard;
