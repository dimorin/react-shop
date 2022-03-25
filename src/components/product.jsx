import React from "react";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const { title, content, price, id } = props;
  const navigate = useNavigate();
  return (
    <div className="col-sm-6 col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`}
        alt=""
        style={{ width: "100%", cursor: "pointer" }}
        onClick={() => {
          navigate(`/detail/${id}`);
        }}
      />
      <h4>{title}</h4>
      <p>{`${content} ${price}`}</p>
    </div>
  );
};

export default Product;
