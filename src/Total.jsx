import React from "react";
import { AppContext } from "./appContext";
import Container from "./Container";

const Total = () => {
    const { total } = React.useContext(AppContext);
    return (
        <Container>
            <h4>{`Total: ${total}`}</h4>
        </Container>
    );
};

export default Total;
