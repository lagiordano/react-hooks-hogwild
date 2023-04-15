import React, {useState} from "react";

function Tile ({hog}) {

    const [isHidden, setIsHidden] = useState(true);

    function handleClick () {
        setIsHidden(isHidden => !isHidden);
    }

    const extraInformation = 
        <div>
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
            <p>Greased: {hog.greased ? "Yes" : "No"}</p>
            <p>Best Medal: {hog["highest medal achieved"]}</p>
        </div>;

    return (
        <div className="ui four wide column" onClick={handleClick}>
            <div className="pigTile ui card">
                <div class="image">
                    <img src={hog.image} alt="image of this pig" />
                </div>
                <div class="content">
                    <h3>{hog.name}</h3>
                    {isHidden ? null : extraInformation}
                </div>
            </div>
        </div>
        
    )
}

export default Tile;