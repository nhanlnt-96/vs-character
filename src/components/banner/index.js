import React, { useEffect, useState } from "react";
import "./Banner.scss";
import { Alert, Col, Container, ProgressBar, Row } from "react-bootstrap";
import Button from "../button";
import { bannerImages } from "./configs";
import { connect } from "../../redux/blockchain/blockchainActions";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/data/dataActions";
import MintBox from "../mintBox";

const Banner = ({ headerHeight }) => {
  const DEFAULT_COUNTDOWN = 3;
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [isShowMintBox, setIsShowMintBox] = useState(false);
  const [countdownTimer, setCountDownTimer] = useState(DEFAULT_COUNTDOWN);

  useEffect(() => {
    if (blockchain.account) {
      setTimeout(() => {
        setIsShowMintBox(true);
      }, 40000);
    }
  }, [blockchain.account]);

  useEffect(() => {
    if (isShowMintBox) {
      setInterval(() => {
        setCountDownTimer((prevState) =>
          prevState > 0 ? prevState - 1 : prevState
        );
      }, 1000);
    }
  }, [isShowMintBox]);

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const handleConnectMintBox = (e) => {
    e.preventDefault();
    dispatch(connect());
    getData();
  };

  return (
    <Container>
      <Row
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
      >
        <Col xs={12} lg={6}>
          <h1 className="mb-4 banner-title text-center text-lg-start">
            Verseshoe, we design fabulous animated shoe collections in the NFT
            space and the real world. Our goal is to allow our community to
            receive unlimited benefits from these mind-blowing shoes. The brand
            provides the holders of these fantasy shoes to bring their
            Verse-shoe NFTs to life and wear them. The only way to get one of
            these golden shoes is to own one NFT from our first drop, “VS
            Character” ( Coming soon). The profits from this collection go to
            charity. We don’t limit the brand only there; many upcoming
            Metaverse games (where you play to earn) and events are yet to come
          </h1>
          {blockchain.account === "" || blockchain.smartContract === null ? (
            <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
              <Button
                label="Connect"
                onClick={(e) => handleConnectMintBox(e)}
              />
            </div>
          ) : (
            <></>
          )}
        </Col>
        <Col xs={12} lg={6}>
          {blockchain.errorMsg ? (
            <Alert variant="danger">{blockchain.errorMsg}</Alert>
          ) : (
            <></>
          )}
          {blockchain.account === "" || blockchain.smartContract === null ? (
            <div className="banner-image">
              {bannerImages.map((image) => (
                <div key={image} className="banner-image__container">
                  <div key={image} className="banner-image__wrapper">
                    <img src={image} alt="vs-character-image" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {isShowMintBox ? (
                <>
                  {countdownTimer === 0 ? (
                    <MintBox />
                  ) : (
                    <div className="text-center">
                      <h6 className="fw-bold fs-1">{countdownTimer}</h6>
                      <ProgressBar now={100 / countdownTimer} />
                    </div>
                  )}
                </>
              ) : (
                <Alert variant="success">
                  We allow our community to win 50k $ and Airdrops worth 3- 4
                  ETH from the Verseshoe brand simply by selling VS Characters
                  over 5 ETH. Remember that you will still receive an Airdrop if
                  you listed the VS Character 5 ETH or more but couldn’t sell
                  it. If you do not list it over 5 ETH, you will miss many
                  significant opportunities from the Verseshoe brand.
                </Alert>
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
