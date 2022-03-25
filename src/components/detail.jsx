import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./detail.scss";

const Detail = (props) => {
  const dispatch = useDispatch();
  let [selectedTab, setSelectedTab] = useState(0);
  let [displaynone, setDisplaynone] = useState(false);
  let { shoes, stock } = props;
  let { id } = useParams();
  let navigate = useNavigate();
  let product = shoes.find((item) => {
    return item.id == id;
  });

  useEffect(() => {    
    let timeId = setTimeout(() => {
      setDisplaynone(true);
    }, 3000);
    return () => {
      //unmounted
      clearTimeout(timeId);
    };
  }, []);

  return (
    <div className="container borderblack">
      <div className={`my-alert ${displaynone && "d-none"}`}>
        재고가 얼마 남지 않았어요
      </div>
      <div className={`my-alert danger ${displaynone && "d-none"}`}>
        재고가 얼마 남지 않았어요
      </div>
      <div className={`my-alert warning ${displaynone && "d-none"}`}>
        재고가 얼마 남지 않았어요
      </div>
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              Number(id) + 1
            }.jpg`}
            width="100%"
            alt=""
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}원</p>
          <Info stock={stock[id]} />
          <button className="btn btn-primary">주문하기</button>
          <button className="btn btn-danger" onClick={() => {
            dispatch({type:'ADDCART', payload:product});
          }}>카트담기</button>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            뒤로가기
          </button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              setSelectedTab(0);
            }}
          >
            상품설명
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              setSelectedTab(1);
            }}
          >
            리뷰
          </Nav.Link>
        </Nav.Item>
      </Nav>    
        <TabContent selectedTab={selectedTab}  />
    </div>
  );
};

function TabContent(props) {    
  let { selectedTab } = props;
  if (selectedTab === 0) {
    return (
      <div className="p-5">독일에서 공수한 소가죽으로 제작되었습니다.</div>
    );
  } else {
    return <div className="p-5">이제껏 운동화 중 최고입니다.</div>;
  }
}

function Info(props) {
  let { stock } = props;

  return <p>재고 {stock}</p>;
}

export default Detail;
