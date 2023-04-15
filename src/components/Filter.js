import React from "react";

function Filter ({setFilter, setShowOnlyGreased, showOnlyGreased}) {

    function handleClick () {
        setShowOnlyGreased(!showOnlyGreased);
        
    }

    function handleChange (e) {
        setFilter(e.target.value);
    }

    return (
        <div class="filterWrapper">
            <button onClick={handleClick}>{showOnlyGreased ? "Show me all hogs" : "Show greased hogs only"}</button><br/><br/>
            <label for="sort">Sort by:</label>
            <select name="sort" onChange={handleChange}>
                <option name="-" value="-">{setFilter}</option>
                <option name="name" value="name">{setFilter}</option>
                <option name="weight" value="weight">{setFilter}</option>
            </select>
        </div>
    );
}

export default Filter;