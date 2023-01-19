import "./ASideDatePhase.css";
import topImageDayNumber from "../../../utilities/app/DayDateFunc/DayDateFunc";

export default function ASideDatePhase({indexForDate, currMoonPhase}){  
    // taking the index value, ie. 31 and converting it back to a date = January 31
    const dateFromDay =(index)=>{
        var yyyycusp = topImageDayNumber - 92 + 365 // between years..
        let fromDate = {};
        if (index > yyyycusp) {
            fromDate = new Date(2022, 0);
        } else {
            fromDate = new Date(2023, 0);
        }
        let dayDate = new Date(fromDate.setDate(index));
        return dayDate.toDateString();
    };

    return(
        <div className="a-side-container">
            {dateFromDay(indexForDate)}
            <br/>
            {currMoonPhase}
            
        </div>
    )
};


// animate.css
// import "./DateCard.css"
// import 'animate.css'; 
// import { useEffect, useState } from "react";

// export default function DateCard({displayDate, curMoonPhase}){
//     const [ animation, setAnimation] = useState(null);
    
//     useEffect(() => {
//         if(curMoonPhase !== "Full Moon"){
//             setAnimation(null)
//         } else if(curMoonPhase === "Full Moon"){
//             setAnimation("animate__animated animate__tada")
//         }        
//     }, [curMoonPhase])
    

//     return(
//         <div className="date-card-container"> 
//             <span id="display-date">
//                 {displayDate}
//             </span>
//             <span id="display-moon-phase" className={animation}> {curMoonPhase} </span>
//         </div>
//     )
// }