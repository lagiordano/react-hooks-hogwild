import React from "react";
import Tile from "./Tile";

function TileContainer ({hogs}) {

    const allHogs = hogs.map(hog => <Tile hog={hog} key={hog.name}/>)


    return (
        <div className="ui grid container">
            {allHogs}
        </div>
    )
}

export default TileContainer;