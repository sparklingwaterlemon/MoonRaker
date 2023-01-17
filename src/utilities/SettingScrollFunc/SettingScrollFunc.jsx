import { useEffect } from "react";

export default function SettingScrollFunc() {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
        });
        window.scroll({
            top: 6000,
            left: 0,
        });
    }, []);
};
