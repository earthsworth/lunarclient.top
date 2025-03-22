import {WeaveIndexDeveloper} from "../../entities.ts";
import WeaveMod from "./WeaveMod.tsx";
import * as React from "react";
import {useEffect, useState} from "react";

interface Props {
    dev?: WeaveIndexDeveloper;
}

function WeaveDeveloper(props: Props) {
    const [fakeWeaveMods, setFakeWeaveMods] = useState<React.ReactNode[]>([]);

    useEffect(() => {
        const newWeaveMods = Array.from({length: Math.floor(Math.random() * 10) + 1}, (_, index) => <WeaveMod
            key={index}/>);
        setFakeWeaveMods(newWeaveMods);
    }, []);
    if (!props.dev) {
        return (<>
            <div>
                <div className={"flex flex-col gap-3 animate-pulse"}>
                    <div className={"flex flex-col gap-1"}>
                        <div className={"w-44 bg-gray-200 rounded-xl h-2"}></div>
                        <div className={"w-44 bg-gray-200 rounded-xl h-2"}></div>
                    </div>
                    <div className={"w-full border border-slate-500"}></div>
                    <div className={"flex flex-row flex-wrap gap-3"}>
                        {fakeWeaveMods}
                    </div>
                </div>
            </div>
        </>);
    }
    return (<>
        <div className={"flex flex-col gap-3"}>
            <h2 className={"text-2xl dark:text-gray-300"}>{props.dev.name}</h2>
            <div className={"w-full border border-slate-500"}></div>
            <div className={"flex flex-row flex-wrap gap-3"}>
                {props.dev.projects.map((project) => {
                    return <WeaveMod project={project}/>
                })}
            </div>
        </div>
    </>);
}

export default WeaveDeveloper;