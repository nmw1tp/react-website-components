import React from "react";
import { Button } from "react-bootstrap";
import bgImage from "./first.jpeg";

const AnchorButton = () => {
    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{
                height: "100vh",
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <Button
                href="#"
                className="btn btn-outline-light"
            >
                Подробнее
            </Button>
        </div>
    );
};

export default AnchorButton;


