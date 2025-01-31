import * as React from "react";

interface Props {
    onClick: () => void;
    children?: React.ReactNode;
}

function FloatingButton(props: Props) {
    return (
        <button
            onClick={props.onClick}
            className="fixed bottom-5 right-5 cursor-pointer bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition duration-300"
        >
            {props.children}
        </button>
    );
}

export default FloatingButton;