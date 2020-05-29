import * as React from "react";
import Container from "./Container";
import NumberSelector from "./NumberSelector";
import { AppContext } from "./appContext";

const options = {
    "add one": { value: 1, isSelected: false },
    "add two": { value: 2, isSelected: false },
    "add three": { value: 3, isSelected: false },
    "add four": { value: 4, isSelected: false },
    "add five": { value: 5, isSelected: false },
};
const Selectors = () => {
    const { updateTotal } = React.useContext(AppContext);

    const [numberSelectors, setNumberSelectors] = React.useState(options);

    const handleSelectChanged = (text, value) => isSelected => {
        setNumberSelectors({ ...numberSelectors, [text]: { ...numberSelectors[text], isSelected } });
        updateTotal(isSelected ? value : 0 - value);
    };

    return (
        <Container>
            {Object.entries(numberSelectors).map(([text, { value }]) => (
                <NumberSelector key={text} text={text} onSelectChanged={handleSelectChanged(text, value)} />
            ))}
        </Container>
    );
};

export default Selectors;
