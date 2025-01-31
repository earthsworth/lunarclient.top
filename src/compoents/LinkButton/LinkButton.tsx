import {useNavigate} from "react-router";
import * as React from "react";

interface Props {
    children: React.ReactNode;
    href: string;
}

function LinkButton(props: Props) {
    const navigate = useNavigate();
    const handleClick = () => {
        const link = props.href;
        if (link.startsWith("http")) {
            // it is an external link
            window.open(link);
        } else {
            navigate(link);
        }
    }

    return (
        <div
            onClick={handleClick}
            className="relative inline-block border-2 p-2 px-5 hover:bg-[#4b4b4b] transition-colors duration-300 cursor-pointer select-none rounded font-mono overflow-hidden"
        >
            {props.children}
        </div>
    );
}

export default LinkButton;