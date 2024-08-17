import React from "react";
import Icon from "../../../../shared/ui/icon/Icon";
import "./evaluation.scss";

interface EvaluationProps {
    rating: number;
}

function checkActiveStars(rating: number) {
    const arr = [];
    const roundRating = Math.floor(rating);
    //let remainder = Math.round((rating%1)*10);
    for (let i = 1; i <= 5; i++) {
        let nameClass = "";
        if (i <= roundRating) nameClass = "active"
        /*; else
            if (i == roundRating + 1) nameClass = `active-${remainder}0`;*/
        arr.push(nameClass);
    }
    return arr;
}

export const Evaluation = ({ rating }: EvaluationProps): JSX.Element => {
    return (
        <div className="evaluation">
            <div className="evaluation__text">{(rating%1==0) ? `${rating}.0` : rating}</div>
            <div className="evaluation__icons">
                {checkActiveStars(rating).map(item => 
                    <Icon icon={{ nameClass: (item == "") ? "evaluation__icon" : `evaluation__icon ${item}`, id: "star" }} />
                )}
            </div>
        </div>
    )
}