import * as React from "react";
import {HiOutlineXMark} from "react-icons/hi2";

interface Props {
    children?: React.ReactNode;
}

function ErrorNotification(props: Props) {
    return (<>
        <div className={"flex flex-row gap-2 shadow w-fit p-4"}>
            <HiOutlineXMark fontSize={25} className={"text-red-500"}/>
            <div className={"text-gray-500 dark:text-white"}>{props.children}</div>
        </div>
    </>)
}

export default ErrorNotification;