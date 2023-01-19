import { useEffect, useRef } from "react";

export default function SpikingScrollFunc() {
    const mshRef = useRef(0); //mshRef = maxScrollHeightReference
    const scrollCenterFrameRef = useRef(0);

    const intializeSpikeScrollTwo = () => {
        window.scroll({
            top: mshRef.current,
            left: 0,
        });
        // console.log("Spike2 --- Bottom Out");
        window.scroll({
            top: 0,
            left: 0,
        });
        // console.log("Spike2 --- Top Out");
        setTimeout(() => {
            window.scroll({
                top: scrollCenterFrameRef.current,
                left: 0,
                behavior: "smooth"
            });
            // console.log("SetTimeout - Spike2 - Centered Out");
        }, 1500);
    };

    useEffect(() => {
        var h = document.documentElement;
        mshRef.current = h.scrollHeight - h.clientHeight;
        // how many pixels are each frame separated by? at what rate/ distance
        var scrollFrameRate = Number((mshRef.current / 91).toFixed(2));
        scrollCenterFrameRef.current = scrollFrameRate * 30.5;


        window.scroll({
            top: mshRef.current,
            left: 0,
        });
        // console.log("Spike1 --- Bottom Out");
        window.scroll({
            top: 0,
            left: 0,
        });
        // console.log("Spike1 --- Top Out");
        // console.log("preintialize spike2");
        intializeSpikeScrollTwo();
    }, []);
};