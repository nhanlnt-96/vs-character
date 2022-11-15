import React, { useEffect, useState } from "react";
import "./Banner.scss";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  BannerContentArea,
  BannerFooter,
  BannerHeader,
  BannerMintBoxArea,
} from "./components";

const Banner = ({ headerHeight }) => {
  const DEFAULT_COUNTDOWN = 3;
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

  return (
    <Container
      style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
      className="py-4 py-lg-5 d-flex justify-content-center align-items-center"
    >
      <Row className="d-flex justify-content-center align-items-center py-3">
        <BannerContentArea />
        <BannerMintBoxArea
          isShowMintBox={isShowMintBox}
          countdownTimer={countdownTimer}
        />
      </Row>
    </Container>
  );
};

export default Banner;
