import "./MoonSection.css";
import { useState, useEffect, useRef } from "react";
import MoonImages from "../../../assets/app/MoonImages/0000index";
import topImageDayNumber from "../../../utilities/app/DayDateFunc/DayDateFunc";


export default function MoonSection({ setIndexForDate, setCurrMoonPhase }) {
    const frameCount = 91;  
    
    // --- Step 1 -- setScrollLocation --triggers--> Step 2 
    // ------------------------------------------------------------------------------------------------
    const [scrollLocation, setScrollLocation] = useState(null);
    
    const handleScroll = () => {
        let scrollPosition = window.scrollY;
        setScrollLocation(scrollPosition);
    };
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollLocation]);
    // ------------------------------------------------------------------------------------------------ Step 1


    // -- Step 2.5 --
    // setScrollLocation -triggers-> setImage via currentFrame()
    // -branch1-> passing data by infoForDisplayComponent
    // -branch2-> returns setImage(MoonImage[frameIDX]);
    // ----------------------------------------------------------------------------------------------------
    const infoForDisplayBoxComponent = (tag) => {
        setIndexForDate(tag);
        let postring = MoonImages[tag].position;
        setCurrMoonPhase(postring);
    };
    
    const currentFrame = function (index) {
        var negativeCheck = topImageDayNumber - index;
        // ie. top image day number in january and we scroll to last year.. we will get a negative index value
        let frameIDX = null;
        if (negativeCheck <= 0) {
            var top = topImageDayNumber + 365;
            frameIDX = top - index
        } else if (negativeCheck > 0) {
            frameIDX = topImageDayNumber - index;
        };
        infoForDisplayBoxComponent(frameIDX);
        return MoonImages[frameIDX].imgRef;
    };
    // ------------------------------------------------------------------------------------------------ Step 2.5
    
    
    // --- Step 2 -- 
    // setScrollLocation -triggers-> setImage via currentFrame()
    // ----------------------------------------------------------------------------------------------------
    const canvasRef = useRef({});
    const holderImg = new Image();
    const [image, setImage] = useState(holderImg);
    
    // --------
    //  Safari ---------------------------------------------------------------------------------------- Safari
    // This is for Safarai drawImage error - canvas loading without image
    useEffect(()=>{
        holderImg.onload = function(){
            console.log("test leak");
            var cvs = canvasRef.current;
            var ctx = cvs.getContext('2d');
            cvs.width = 500;
            cvs.height = 500;
            ctx.drawImage(holderImg, 0, 0,cvs.width, cvs.height)
        };
        holderImg.src = currentFrame(1);
        // eslint-disable-next-line
    },[]);
    //  Safari ---------------------------------------------------------------------------------------- Safari
    // --------

    // as scrolling changes -> setting new image
    useEffect(() => {
        var html = document.documentElement;
        var maxScrollHeight = html.scrollHeight - html.clientHeight;
        var msh = maxScrollHeight;
        var scrollFraction = (scrollLocation / msh);
        const frameIndex = Math.floor(scrollFraction * frameCount);
        
        const updateMoon = new Image();
        updateMoon.src = currentFrame(frameIndex);
        updateMoon.onload = () => setImage(updateMoon);

        // // use to debug/ test incorrect frame rate/ index
        // console.log("*************************");
        // console.log("---scrollLocation", scrollLocation);
        // console.log("---maxscrollHeight----", maxScrollHeight);
        // console.log("---scrollFraction----", scrollFraction);
        // console.log("---scrollFraction * framecount----", scrollFraction * frameCount);
        // console.log("---frameIndex---", frameIndex);
        
        // eslint-disable-next-line
    }, [scrollLocation]);
    // ------------------------------------------------------------------------------------------------ Step 2


    // --- Step 3 (Last) -- 
    // setScrollLocation -triggers-> setImage via currentFrame() -triggers-> drawImage
    // ----------------------------------------------------------------------------------------------------
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        
        canvas.width =  500;
        canvas.height = 500;
        
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
    }, [image]);
    // ------------------------------------------------------------------------------------------------ Step 3
    

    return (
        <canvas className="m-canvas" ref={canvasRef} />

    )
};