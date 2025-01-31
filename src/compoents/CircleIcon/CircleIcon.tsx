import * as React from "react";

interface Props {
    icon: React.ReactElement;
    border?: boolean;
}

function CircleIcon(props: Props) {
    return (<>
        <div className={`${props.border ? 'bg-white dark:bg-gray-900 shadow text-black dark:text-white p-2': ''} rounded-full`}>
            {props.icon}
        </div>
    </>);
}

export default CircleIcon;