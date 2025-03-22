import {useState} from "react";
import ReactConfetti from "react-confetti";
import { useTitle } from "../../utils";

function PineapplePage() {
    useTitle("You got a pineapple! - LunarCN");
    const [showConfetti, setShowConfetti] = useState(false);

    const handleClick = () => {
        setShowConfetti(true);
    };

    return (<>
        {showConfetti && <ReactConfetti/>}

        <div className={"flex flex-col justify-between items-center gap-2"}>
            <div className={"text-4xl"}>You found an easter egg!</div>
            <div className={"h-3"}></div>
            {!showConfetti ? <div className={"animate-bounce flex flex-col items-center gap-3"}>
                <div className={"text-9xl cursor-crosshair select-none transition"} onClick={handleClick}>🍍</div>
                <div>Click me!</div>
            </div> : <div>Pineapples powered.</div>}
        </div>
    </>);
}

export default PineapplePage;