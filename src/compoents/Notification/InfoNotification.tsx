import * as React from "react";
import {CiCircleInfo} from "react-icons/ci";

interface Props {
    children?: React.ReactNode;
}

function InfoNotification(props: Props) {
    return (<>
        <div className={"flex flex-row gap-2 shadow w-fit p-4"}>
            <CiCircleInfo fontSize={25} className={"text-blue-500"}/>
            <div className={"text-gray-500 dark:text-white"}>{props.children}</div>
        </div>
    </>)
}

export default InfoNotification;