import { useEffect } from "react";
import MoonImages from "../../assets/MoonImages/0000index";
import topImageDayNumber from "../DayDateFunc/DayDateFunc";


export default function PreLoadImagesFunc(){
    useEffect(()=>{
        // -- (step 2) preloading the images
        const preloadFrame = (frame, frameIterator) => {
            let preimg = new Image();
            preimg.src = MoonImages[frame].imgRef;
            // preimg.onload = function() {
            //     console.log("preimg", preimg);
            // };
        };

        // -- (step 1) precheck for dates between years
        for(let i = 0; i <= 91; i++){ 
            // 91 is the frameCount, can be found in MoonComponent.jsx
            // precheck = 0 will preload wallpaper, wallpaper set as MoonImages[0]
            
            // Pre-Check is for bewteen years.
            // If today is January 1, the topImage of page being 30 days from today, will be for january 31
            var precheck = topImageDayNumber - i; 
            // --> on the 32nd iteration of this loop, var precheck = 31 - 32 will result in a negative precheck value
            // no 'negative value' in array -> loop back to end of MoonImages array, the 365th day of last year
            // preloadFrame( 31(topImageDayNumber) + 365 - 32(current iteration)) === current frame
            
            if(precheck >= 0){
                preloadFrame(topImageDayNumber - i, i);
            } else if(precheck < 0){
                var preTop = topImageDayNumber + 365;
                preloadFrame(preTop - i, i);
            };
        };
    },[]);
};