import { Alert, Col } from "react-bootstrap";
import Button from "../../button";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/data/dataActions";
import { connect } from "../../../redux/blockchain/blockchainActions";
import Social from "../../social";

export const BannerContentArea = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const DESCRIPTION_CONTENT =
    "Our goal is to allow our community to receive unlimited benefits from these mind-blowing shoes. The brand provides the holders of these fantasy shoes to bring their Verse-shoe NFTs to life and wear them. The only way to get one of these golden shoes is to own one NFT from our first drop, “VS Character” ( Coming soon). The profits from this collection go to charity. We don’t limit the brand only there; many upcoming Metaverse games (where you play to earn) and events are yet to come.";
  const [isShowMoreText, setIsShowMoreText] = useState(false);

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
    <Col xs={12} lg={7} className="mb-4 mb-lg-0">
      {blockchain.errorMsg ? (
        <Alert variant="danger">{blockchain.errorMsg}</Alert>
      ) : (
        <></>
      )}
      <h1 className="mb-4 banner-title text-left">
        Verseshoe, we design fabulous animated shoe collections in the NFT space
        and the real world.
      </h1>
      <p>{DESCRIPTION_CONTENT}</p>
      <div className="d-flex justify-content-start align-items-center">
        {!blockchain.account || !blockchain.smartContract ? (
          <Button
            label="Connect"
            onClick={(e) => handleConnectMintBox(e)}
            className="me-2"
          />
        ) : (
          <></>
        )}
        <Social />
      </div>
    </Col>
  );
};
