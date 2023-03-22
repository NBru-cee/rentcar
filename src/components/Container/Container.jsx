import React from "react";

const Container = (props) => {
    document.title = `RentCar - ${props.title}`;
    return <div className="w-screen">{props.children}</div>;
};

export default Container;
