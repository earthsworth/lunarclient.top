import * as React from "react";
import {CiWarning} from "react-icons/ci";

interface Props {
    children?: React.ReactNode;
}

function WarningNotification(props: Props) {
    return (<>
        <div className={"flex flex-row gap-2 shadow w-fit p-4"}>
            <CiWarning fontSize={25} className={"text-yellow-500"}/>
            <div className={"text-gray-500 dark:text-white"}>{props.children}</div>
        </div>
    </>)
}

export default WarningNotification;