import React from "react";
import CBooksCard from "../components/CBooksCard";

const MainPart = (props) => {
    const { books, isReady } = props;
    return(
        <div>
            {
            !isReady
            ? 'Загрузка...'
            : <CBooksCard books={books}/>
            }
        </div>
    )
}

export default MainPart;