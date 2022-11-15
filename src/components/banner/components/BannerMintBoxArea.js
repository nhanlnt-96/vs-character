import { Alert, Col, ProgressBar } from "react-bootstrap";
import MintBox from "../../mintBox";
import React from "react";
import { useSelector } from "react-redux";
import Image2 from "../../../assets/images/7.png";
import Image3 from "../../../assets/images/1.png";
import Image4 from "../../../assets/images/10.png";
import Image5 from "../../../assets/images/12.png";
import Image6 from "../../../assets/images/16.png";
import Image7 from "../../../assets/images/17.png";
import Image8 from "../../../assets/images/2.png";

export const BannerMintBoxArea = ({ isShowMintBox, countdownTimer }) => {
  const blockchain = useSelector((state) => state.blockchain);

  return (
    <Col xs={12} lg={5}>
      {blockchain.account || blockchain.smartContract ? (
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
              We allow our community to win 50k $ and Airdrops worth 3- 4 ETH
              from the Verseshoe brand simply by selling VS Characters over 5
              ETH. Remember that you will still receive an Airdrop if you listed
              the VS Character 5 ETH or more but couldn’t sell it. If you do not
              list it over 5 ETH, you will miss many significant opportunities
              from the Verseshoe brand.
            </Alert>
          )}
        </>
      ) : (
        <div className="banner-image">
          <div className="banner-image__container">
            <div className="banner-image__wrapper">
              <img src={Image2} alt="" />
            </div>
            <div className="banner-image__wrapper">
              <img src={Image3} alt="" />
            </div>
          </div>

          <div className="banner-image__container">
            <div className="banner-image__wrapper">
              <img src={Image4} alt="" />
            </div>
            <div className="banner-image__wrapper">
              <img src={Image5} alt="" />
            </div>
            <div className="banner-image__wrapper">
              <img src={Image6} alt="" />
            </div>
          </div>

          <div className="banner-image__container">
            <div className="banner-image__wrapper">
              <img src={Image7} alt="" />
            </div>
            <div className="banner-image__wrapper">
              <img src={Image8} alt="" />
            </div>
          </div>
        </div>
      )}
    </Col>
  );
};
