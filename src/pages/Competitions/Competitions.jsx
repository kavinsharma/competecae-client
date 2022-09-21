import "./Competitions.scss";
import { useState, useEffect } from "react";
import PageContent from "../../components/PageContent/PageContent";
import Select from "react-select";
import Bike from "../../assets/images/types/bike.svg";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthUser } from "react-auth-kit";
import Modal from "react-modal";
import Form from "react-bootstrap/Form";
import Input from "../../components/Input/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHeart } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import ReactRoundedImage from "react-rounded-image";
import moment from "moment";
import NA from "../../assets/images/image-not-available.jpg";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import {
  LinearProgress,
  createTheme,
  ThemeProvider,
  makeStyles,
  Box,
} from "@material-ui/core";
import ProgressBar from "react-bootstrap/ProgressBar";
import WagePayment from "../../utils/WagePayment";
import SideBar from "../../components/Side-bar-fixed/Side-bar-fixed";
import useScrollReset from "../../hooks/useScrollReset.ts";

import arrow from '../../assets/cardimg/arrowdown.png';
import star from '../../assets/cardimg/star.png';
import man from '../../assets/cardimg/man.png';
import frame from '../../assets/cardimg/Frame.png';
import frame2 from '../../assets/cardimg/frame2.png';









const Competitions = ({ categories, types }) => {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
  const [isEnabled, setIsEnabled] = useState(false);
  const [latestCompetitions, setLatestCompetitions] = useState(null);
  const [pastCompetitions, setPastCompetitions] = useState(null);
  const [userCompetitions, setUserCompetitions] = useState(null);
  const [currentCompetitions, setCurrentCompetitions] = useState({});
  const [count, setCount] = useState({ bidCount: null });
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(false);
  const authUser = useAuthUser();
  const [data, setData] = useState({
    latest: null,
    past: null,
  });

  const [userBase, setUserBase] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [typeOptions, setTypeOptions] = useState([
    { value: -1, label: "All Types" },
  ]);
  const [categoryOptions, setCategoryOptions] = useState([
    { value: -1, label: "All Categories" },
  ]);
  const [subCategoryOptions, setSubCategoryOptions] = useState([
    { value: -1, label: "All Sub Categories" },
  ]);

  const [selectedType, setSelectedType] = useState(typeOptions[0]);
  const [selectedCategory, setSelectedCategory] = useState(categoryOptions[0]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    subCategoryOptions[0]
  );
  const [DataForDisplay, setDataForDisplay] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endingIndex, setEndingIndex] = useState(20);

  useEffect(() => {
    let typeObj = [];
    typeObj.push(typeOptions[0]);
    types.forEach((type, i) => {
      typeObj.push({ value: i, label: type });
    });
    setTypeOptions(typeObj);

    let categoryObj = [];
    categoryObj.push(categoryOptions[0]);
    categories.forEach((category, i) => {
      categoryObj.push({ value: i, label: category.name });
    });
    setCategoryOptions(categoryObj);

    let subCategoryObj = [];
    subCategoryObj.push(subCategoryOptions[0]);
    categories[0].sub_categories.forEach((sub_category, i) => {
      subCategoryObj.push({ value: i, label: sub_category.name });
    });
    setSubCategoryOptions(subCategoryObj);
  }, []);

  useEffect(() => {
    console.log("user_id", authUser().user_id);
    axios
      .get(`${process.env.REACT_APP_API_URL}/challenges/latest`)
      .then((res) => {
        console.log("Latest_ID", res.data);
        setLatestCompetitions(res.data);
        return axios.get(`${process.env.REACT_APP_API_URL}/challenges/past`);
      })
      .then((res) => {
        setPastCompetitions(res.data);
        return axios.get(
          `${process.env.REACT_APP_API_URL}/challenges/user/${
            authUser().user_id
          }`
        );
      })
      .then((res) => {
        setUserCompetitions(res.data);
      })

      .catch((err) => console.err(err));
  }, []);

  const getCompetitions = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/challenges/latest`)
      .then((res) => {
        console.log("Latest_ID", res.data);
        setLatestCompetitions(res.data);
        return axios.get(`${process.env.REACT_APP_API_URL}/challenges/past`);
      })
      .then((res) => {
        setPastCompetitions(res.data);
        return axios.get(
          `${process.env.REACT_APP_API_URL}/challenges/user/${
            authUser().user_id
          }`
        );
      })
      .then((res) => {
        setUserCompetitions(res.data);
      })

      .catch((err) => console.err(err));
  };

  useEffect(() => {
    if (latestCompetitions) {
      latestCompetitions.map((item) => {
        getCount(item._id);
      });
    }
  }, [latestCompetitions]);

  useEffect(() => {
    if (userCompetitions && latestCompetitions && pastCompetitions) {
      if (userBase === 0) {
        setData({
          latest: userCompetitions
            .filter((comp) => comp.status === true)
            .filter((comp) =>
              selectedType.value === -1
                ? comp.status === true
                : comp.type === selectedType.value
            )
            .filter((comp) =>
              selectedCategory.value === -1
                ? comp.status === true
                : comp.category === selectedCategory.value
            )
            .filter((comp) =>
              selectedSubCategory.value === -1
                ? comp.status === true
                : comp.sub_category === selectedSubCategory.value
            ),
          past: userCompetitions
            .filter((comp) => comp.status === false)
            .filter((comp) =>
              selectedType.value === -1
                ? comp.status === false
                : comp.type === selectedType.value
            )
            .filter((comp) =>
              selectedCategory.value === -1
                ? comp.status === false
                : comp.category === selectedCategory.value
            )
            .filter((comp) =>
              selectedSubCategory.value === -1
                ? comp.status === false
                : comp.sub_category === selectedSubCategory.value
            ),
        });
        setDataForDisplay({
          latest: userCompetitions
            .filter((comp) => comp.status === true)
            .filter((comp) =>
              selectedType.value === -1
                ? comp.status === true
                : comp.type === selectedType.value
            )
            .filter((comp) =>
              selectedCategory.value === -1
                ? comp.status === true
                : comp.category === selectedCategory.value
            )
            .filter((comp) =>
              selectedSubCategory.value === -1
                ? comp.status === true
                : comp.sub_category === selectedSubCategory.value
            ),
          past: userCompetitions
            .filter((comp) => comp.status === false)
            .filter((comp) =>
              selectedType.value === -1
                ? comp.status === false
                : comp.type === selectedType.value
            )
            .filter((comp) =>
              selectedCategory.value === -1
                ? comp.status === false
                : comp.category === selectedCategory.value
            )
            .filter((comp) =>
              selectedSubCategory.value === -1
                ? comp.status === false
                : comp.sub_category === selectedSubCategory.value
            ),
        });
      } else {
        setData({
          latest: latestCompetitions
            .filter((comp) => comp.status === true)
            .filter((comp) =>
              selectedType.value === -1
                ? comp.status === true
                : comp.type === selectedType.value
            )
            .filter((comp) =>
              selectedCategory.value === -1
                ? comp.status === true
                : comp.category === selectedCategory.value
            )
            .filter((comp) =>
              selectedSubCategory.value === -1
                ? comp.status === true
                : comp.sub_category === selectedSubCategory.value
            ),
          past: pastCompetitions
            .filter((comp) => comp.status === false)
            .filter((comp) =>
              selectedType.value === -1
                ? comp.status === false
                : comp.type === selectedType.value
            )
            .filter((comp) =>
              selectedCategory.value === -1
                ? comp.status === false
                : comp.category === selectedCategory.value
            )
            .filter((comp) =>
              selectedSubCategory.value === -1
                ? comp.status === false
                : comp.sub_category === selectedSubCategory.value
            ),
        });
        setDataForDisplay({
          latest: latestCompetitions
            .filter((comp) => comp.status === true)
            .filter((comp) =>
              selectedType.value === -1
                ? comp.status === true
                : comp.type === selectedType.value
            )
            .filter((comp) =>
              selectedCategory.value === -1
                ? comp.status === true
                : comp.category === selectedCategory.value
            )
            .filter((comp) =>
              selectedSubCategory.value === -1
                ? comp.status === true
                : comp.sub_category === selectedSubCategory.value
            ),
          past: pastCompetitions
            .filter((comp) => comp.status === false)
            .filter((comp) =>
              selectedType.value === -1
                ? comp.status === false
                : comp.type === selectedType.value
            )
            .filter((comp) =>
              selectedCategory.value === -1
                ? comp.status === false
                : comp.category === selectedCategory.value
            )
            .filter((comp) =>
              selectedSubCategory.value === -1
                ? comp.status === false
                : comp.sub_category === selectedSubCategory.value
            ),
        });
      }
      setStartIndex(0);
      setEndingIndex(20);
    }
  }, [
    userBase,
    latestCompetitions,
    pastCompetitions,
    userCompetitions,
    selectedType,
    selectedCategory,
    selectedSubCategory,
  ]);

  const customStylesModal = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      minWidth: "500px",
    },
  };

  const getCount = (comp) => {
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/wager/getBid`,
      headers: {},
      data: {
        id: comp._id,
      },
    }).then((res) => {
      console.log(res.data);
      setCount({
        bidCount: {
          win: res?.data?.bidCount?.win,
          lose: res?.data?.bidCount?.lose,
        },
      });
    });
  };

  const setModal = (comp, enable) => {
    console.log("Comp", comp);
    setCurrentCompetitions(comp);
    setIsEnabled(enable);
    setModalOpen(true);
  };

  const submitWage = async (paymentId) => {
    setModalOpen(false);
    console.log("Payment", paymentId);
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/wager/setBid`,
      headers: {},
      data: {
        user_id: authUser().user_id,
        challenge_id: currentCompetitions._id,
        bid: amount,
        expected_result: isEnabled ? true : false,
        stripe_id: paymentId,
      },
    });

    setCurrentCompetitions({});
    getCompetitions();
  };
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#725095" : "#725095",
      background: state.isSelected ? "#F0EFFF" : "white",
      ":hover": {
        background: "#F0EFFF",
      },
    }),
  };

  const navigate = useNavigate();


  return (
    <section className="competitions">
      {/* <Sidebar /> */}
      <PageContent>
        <div className="competitions__wrapper">
          <div className="competitions__header">
            <div className="competitions__switch">
              <span
                className={
                  userBase === 0
                    ? "competitions__switch-value competitions__switch-value--active"
                    : "competitions__switch-value"
                }
                onClick={() => setUserBase(0)}
              >
                My Competitions
              </span>
              <span
                className={
                  userBase === 1
                    ? "competitions__switch-value competitions__switch-value--active"
                    : "competitions__switch-value"
                }
                onClick={() => setUserBase(1)}
              >
                All Competitions
              </span>
            </div>
            <Link to="/new-competition">
              <Button
                className="competitions__header-button"
                text="New Competition"
                type="primary"
              />
            </Link>
          </div>
          <div className="competitions__filter">
            <Select
              options={typeOptions}
              styles={customStyles}
              placeholder="Select Type"
              value={selectedType}
              onChange={(e) => setSelectedType(e)}
            />
            <Select
              options={categoryOptions}
              styles={customStyles}
              placeholder="Select Category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e)}
            />
            <Select
              options={subCategoryOptions}
              styles={customStyles}
              placeholder="Select Sub Category"
              value={selectedSubCategory}
              onChange={(e) => setSelectedSubCategory(e)}
            />
          </div>

          <div className="competitions__latest">
            <h2>Latest Competitions</h2>
            {/* <div className="competitions__competitions">
              {DataForDisplay.latest
                ? DataForDisplay.latest
                    .slice(startIndex, endingIndex)
                    .map((comp) => {
                      return (
                        <div
                          style={{
                            width: "35rem",
                            boxShadow: "1px 2px 9px rgb(225 220 221)",
                          }}
                        >
                          <div className="row">
                            <div
                              className="col-9"
                              style={{
                                backgroundImage:
                                  "linear-gradient(to right, #FFCC66, #AE7400)",
                                padding: "2%",
                              }}
                            >
                              <Link to={`/competition/${comp._id}`}>
                                <div>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      padding: "5px",
                                    }}
                                  >
                                    <div className="d-flex flex-row justify-content-between">
                                      <h3>
                                        <FaHeart style={{ color: "white" }} />
                                      </h3>

                                      <h3>
                                        <FaChevronDown
                                          style={{ color: "white" }}
                                        />
                                      </h3>
                                    </div>
                                  </div>

                                  <div className="d-flex justify-content-center">
                                    <ReactRoundedImage
                                      image={
                                        comp.userDetails[0].profilePicture.includes(
                                          "amazonaws"
                                        )
                                          ? comp.userDetails[0].profilePicture
                                          : NA
                                      }
                                      imageWidth="50"
                                      imageHeight="50"
                                      roundedSize="0"
                                      borderRadius="70"
                                    />
                                  </div>

                                  <div className=" d-flex text-white justify-content-center">
                                    <p className="card-info">
                                      <strong>
                                        {comp.userDetails[0].userName}
                                      </strong>
                                    </p>
                                  </div>

                                  <div className=" d-flex text-white justify-content-center">
                                    <p>{comp.name}</p>
                                  </div>

                                  <div
                                    style={{ height: "7%" }}
                                    className="d-flex justify-content-center text-white justify-content-around card-info"
                                  >
                                    <p className="card-info">Starting Date</p>
                                    <p class="ml-4 card-info ">
                                      {moment(new Date(comp.start_date)).format(
                                        "DD-MM-YYYY"
                                      )}
                                    </p>
                                  </div>

                                  <div
                                    style={{ height: "7%" }}
                                    className="d-flex justify-content-center justify-content-around text-white card-info"
                                  >
                                    <p className="card-info">Ending Date</p>
                                    <p className="card-info">
                                      {moment(new Date(comp.end_date)).format(
                                        "DD-MM-YYYY"
                                      )}
                                    </p>
                                  </div>

                                  <div className=" d-flex justify-content-around text-white">
                                    <span
                                      className="d-flex flex-column justify-content-center"
                                      style={{ width: "min-content" }}
                                    >
                                      <p className="text-center text-white sidelabel-data">
                                        10
                                      </p>
                                      <p class="text-center text-white sidelabel">
                                        Starting Points
                                      </p>
                                    </span>

                                    <span
                                      className="d-flex flex-column justify-content-center"
                                      style={{ width: "min-content" }}
                                    >
                                      <p className="text-center text-white sidelabel-data">
                                        {comp.wager}
                                      </p>
                                      <p class="text-center text-white sidelabel">
                                        Current Points
                                      </p>
                                    </span>

                                    <span
                                      className="d-flex flex-column justify-content-center"
                                      style={{
                                        width: "min-content",
                                        transform: "translate(0%, -12%)",
                                      }}
                                    >
                                      <p className="text-center text-white sidelabel-data">
                                        {comp.goal}
                                      </p>
                                      <p class="text-center text-white sidelabel">
                                        Goal
                                      </p>
                                    </span>
                                  </div>

                                  <div>
                                    <hr
                                      style={{ color: "white", color: "white" }}
                                      class="my-2"
                                    ></hr>
                                  </div>
                                </div>
                              </Link>
                              <div className="mt-4 d-flex justify-content-center text-white">
                                <p className="card-info">
                                  <strong>
                                    Will {comp.userDetails[0].userName} Succeed?
                                  </strong>
                                </p>
                              </div>

                              <div className=" mb-2 d-flex justify-content-center">
                                <button
                                  onClick={() => setModal(comp, true)}
                                  style={{ marginRight: "10%" }}
                                  type="button"
                                  class="btn btn-light btn-circle btn-xl"
                                >
                                  Yes
                                </button>

                                <button
                                  onClick={() => setModal(comp, false)}
                                  type="button"
                                  class="btn btn-light btn-circle btn-xl"
                                >
                                  No
                                </button>
                              </div>

                              <div className="mb-5 d-flex flex-row justify-content-center">
                                <p
                                  className="circle"
                                  style={{ marginTop: "-10px" }}
                                >
                                  Yes
                                </p>
                                <LinearProgress
                                  style={{ width: "50%", marginTop: "3px" }}
                                  variant="determinate"
                                  value={
                                    (comp?.bidCount[0].win /
                                      (comp?.bidCount[0].win +
                                        comp?.bidCount[0].lose)) *
                                    100
                                  }
                                />
                                <p
                                  className="circle"
                                  style={{
                                    marginTop: "-10px",
                                    marginRight: "10px",
                                  }}
                                >
                                  {comp?.bidCount[0].win}
                                </p>
                              </div>

                              <div className="mb-5 d-flex flex-row justify-content-center">
                                <p
                                  className="circle"
                                  style={{ marginTop: "-10px" }}
                                >
                                  No
                                </p>
                                <LinearProgress
                                  style={{ width: "50%", marginTop: "3px" }}
                                  variant="determinate"
                                  value={
                                    (comp?.bidCount[0].lose /
                                      (comp?.bidCount[0].win +
                                        comp?.bidCount[0].lose)) *
                                    100
                                  }
                                />
                                <p
                                  className="circle"
                                  style={{
                                    marginTop: "-10px",
                                    marginRight: "10px",
                                  }}
                                >
                                  {comp?.bidCount[0].lose}
                                </p>
                              </div>
                            </div>
                            <div className="col-3 d-flex flex-wrap align-content-around justify-content-center">
                              <span className="d-flex flex-column transformText justify-content-center w-100">
                                <p class="text-center text-dark sidelabel-data">
                                  0-0
                                </p>
                                <p class="text-center text-dark sidelabel">
                                  Record
                                </p>
                              </span>

                              <span className="d-flex flex-column transformText justify-content-center w-100">
                                <p class="text-center text-dark sidelabel-data">
                                  {comp?.bidCount[0].win} -{" "}
                                  {comp?.bidCount[0].lose}
                                </p>
                                <p class="text-center text-dark sidelabel">
                                  Investing Record
                                </p>
                              </span>

                              <span className="d-flex flex-column transformText justify-content-center w-100">
                                <p class="text-center text-dark sidelabel-data">
                                  50
                                </p>
                                <p class="text-center text-dark sidelabel">
                                  Total Winning
                                </p>
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })
                : ""}
            </div> */}
            <div className="cardOuterWrapper">

{
DataForDisplay.latest
? DataForDisplay.latest
    .slice(startIndex, endingIndex)
    .map((comp) => {
      return (

        <div className='cardWrapper'>

        <div className="card">
            <div className="cardUppertitle">
                <span> <img src={star} alt="" /> </span>
                <span>Fitness</span>
                <span> <img src={arrow} alt="" /> </span>
            </div>
            <div className="manstand">
                <div>
        
                <img src={   comp.userDetails[0].profilePicture.includes(
                                          "amazonaws"
                                        )
                                          ? comp.userDetails[0].profilePicture
                                          : NA} alt="" />
                </div>
                <div>
                    <h4>{comp.userDetails[0].userName}</h4>
                    <h4>Loose 40 Lounds</h4>
                </div>
            </div>
        
        <div className="main">
            <div className="mainFrist">
                <h1>$5k</h1>
                <h4>{comp.userDetails[0].userName} is Risking</h4>
            </div>
            <div className="hr">
            <hr />
        
            </div>
            <div className="mainsecond">
                <div className="left">
        <h5>{comp.name} end in</h5>
        <h2>34 days</h2>
                </div>
                <div className="right">
        <div className='one'>
            <h6>
                user Record
            </h6>
            <h1>
                8-0
            </h1>
        </div>
        
        
        <div className='two'>
        <h6>other current Competitions</h6>
        <h1>8</h1>
        </div>
                </div>
            </div>
        
            <div className="mainthird">
                <div className="upperMainthird">
                    <div className='upperHead'>
                    <h2>Will {comp.userDetails[0].userName} Succeed?</h2>
        
                    </div>
                    <div className='img'>
                    <img src={frame} alt="" />
        <span>{comp?.bidCount[0].win}</span>
                    </div>
                    <div className='img'>
        
                    <img src={frame2} alt="" />
        <span>{comp?.bidCount[0].lose}</span>
                    </div>
                </div>
                <div className="mainlowerthird">
                   
                        <div className='head'>
                            <h2>What Other User Think</h2>
                        </div>
                        <div className='votes'>
                            <h4>$1k</h4>
                            <h3>62 Votes</h3>
                        </div>
                        <div className='votes'>
                            <h4>$600</h4>
                            <h3>100 Votes</h3>
                       
                    </div>
                </div>
            </div>
        
            <div className='mainforth' >
                <div>
                    <h2>
                        12
                    </h2>
                    <h4>start</h4>
                </div>
                <div>
                    <h2>
                        14
                    </h2>
                    <h4>current</h4>
                </div>
                <div>
                    <h2>
                        50
                    </h2>
                    <h4>Goal</h4>
                </div>
            </div>
        </div>
        <div className="footWrapper">
        <div className="foot">
           <button    >?</button>
           <span>Insider Information </span>
        </div>
        {/* second-dashboard */}
        </div>
        
        
        </div>
        
        
        
        
            </div>
      );

    })
:""}

</div>
     
            <div class="d-flex flex-row justify-content-end">
              <button
                className=" mt-4 flex items-center justify-center gap-1 bg-primary-700 text-yellow-50 text-7xl font-semibold rounded-full py-3 px-7 sm:px-14 hover:no-underline shadow-7xl"
                style={{ marginRight: "20px" }}
                type="button"
                disabled={startIndex <= 0}
                onClick={() => {
                  setEndingIndex(startIndex);
                  setStartIndex(startIndex - 20);
                  <useScrollReset />;
                }}
              >
                Previous Page
              </button>
              <button
                className=" mt-4 flex items-center justify-center gap-1 bg-primary-700 text-yellow-50 text-7xl font-semibold rounded-full py-3 px-7 sm:px-14 hover:no-underline shadow-7xl"
                type="button"
                disabled={endingIndex >= DataForDisplay?.latest?.length}
                onClick={() => {
                  setStartIndex(endingIndex);
                  setEndingIndex(endingIndex + 20);
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                Next Page
              </button>
            </div>
          </div>
          <div className="competitions__latest">
            <h2>Past Competitions</h2>
            <div className="competitions__competitions">
              {data.past
                ? data.past.map((comp) => {
                    return (
                      <Link to={`/competition/${comp._id}`}>
                        <div className="competitions__competition">
                          <div className="competitions__competition-main competitions__competition-main--inactive">
                            <div className="competitions__competition-info">
                              <p className="competitions__competition-category">
                                {categories[comp.category].name}
                              </p>
                              <p className="competitions__competition-pot">
                                ${comp.participants.length * comp.wager}
                              </p>
                            </div>
                            <img
                              className="competitions__competition-image"
                              src={Bike}
                              alt="bike"
                            />
                          </div>
                          <p className="competitions__competition-name">
                            {comp.name}
                          </p>
                        </div>
                      </Link>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
        <Modal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          style={customStylesModal}
          contentLabel="Place Bet"
        >
          <div className="add-member__modal">
            <h2>Place A Bet</h2>
            <Form>
              <Form.Check
                type="switch"
                disabled
                defaultChecked={isEnabled}
                id="custom-switch"
                label="Will They Win?"
              />
            </Form>
            <Input
              placeholder="Wager ($ USD)"
              type="number"
              id="bid"
              onChange={(value) => setAmount(value.target.value)}
            />
            <div>
              <Elements stripe={stripePromise}>
                <WagePayment handleSubmit={submitWage} />
              </Elements>
            </div>

            {/* <Button
            text="Place Bet"
            type="primary"
            fn={() => {
              setModalOpen(false);
              toast.success("Bet Placed");
              submitWage(amount, currentCompetitions._id, isEnabled);
            }}
          /> */}
          </div>
        </Modal>
        <ToastContainer />
      </PageContent>
    </section>
  );
};

export default Competitions;
