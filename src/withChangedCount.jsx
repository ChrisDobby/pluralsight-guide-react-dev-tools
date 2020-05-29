import React from "react";
import pointlessDelay from "./pointlessDelay";

const withChangedCount = Component => {
    const WithChangedCount = props => {
        const [changedCount, setChangedCount] = React.useState(0);
        const [showingCount, setShowingCount] = React.useState(false);
        const handleHideClick = () => setShowingCount(false);

        const handleShowClick = () => setShowingCount(true);
        const handleSelectChanged = checked => {
            props.onSelectChanged(checked);
            setChangedCount(changedCount + 1);
        };

        const getCountToShow = () => {
            pointlessDelay();
            return changedCount;
        };

        return (
            <div className="with-changed-count">
                <div className="component">
                    <Component {...props} onSelectChanged={handleSelectChanged} />
                </div>
                <div className="counter">
                    {showingCount && (
                        <>
                            {getCountToShow()}
                            <button type="button" onClick={handleHideClick}>
                                Hide count
                            </button>
                        </>
                    )}
                    {!showingCount && (
                        <button type="button" onClick={handleShowClick}>
                            Show count
                        </button>
                    )}
                </div>
            </div>
        );
    };

    WithChangedCount.displayName = `withChangedCount(${Component.name})`;
    return WithChangedCount;
};

export default withChangedCount;
