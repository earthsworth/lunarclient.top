import {WeaveIndexProject} from "../../entities.ts";
import LinkButton from "../LinkButton/LinkButton.tsx";

interface Props {
    project?: WeaveIndexProject;
}

function WeaveMod(props: Props) {
    if (!props.project) {
        return (<div
            className={"flex flex-col justify-center gap-2 items-center rounded-xl shadow-xl backdrop-blur-2xl dark:bg-[rgba(34,34,50,0.4)] p-4 text-wrap w-80 min-h-60"}>
            <div className={"bg-gray-200 w-60 h-2 rounded-xl"}></div>
            <div className={"flex flex-row justify-between gap-2"}>
                <div className={"bg-gray-200 w-40 h-2 rounded-xl"}></div>
                <div className={"bg-gray-200 w-16 h-2 rounded-xl"}></div>
            </div>
            <div className={"flex flex-row justify-between gap-2"}>
                <div className={"bg-gray-200 w-36 h-2 rounded-xl"}></div>
                <div className={"bg-gray-200 w-4 h-2 rounded-xl"}></div>
                <div className={"bg-gray-200 w-16 h-2 rounded-xl"}></div>
            </div>
            <div className={"flex flex-row justify-between gap-2"}>
                <div className={"bg-gray-200 w-36 h-2 rounded-xl"}></div>
                <div className={"bg-gray-200 w-12 h-2 rounded-xl"}></div>
                <div className={"bg-gray-200 w-6 h-2 rounded-xl"}></div>
            </div>
            <div className={"bg-gray-200 w-60 h-2 rounded-xl"}></div>
        </div>);
    }
    return (<>
        {props.project.newWeave && <div className={"absolute z-40 flex items-center justify-center text-amber-200 rounded p-1 overflow-hidden -rotate-45 m-5 font-bold select-none"}>
            <span>Weave 1.0</span>
        </div>}
        <div
            className={"flex flex-col justify-around items-center transition hover:-translate-y-3 rounded-xl shadow-xl backdrop-blur-2xl dark:bg-[rgba(34,34,50,0.4)] p-4 text-wrap w-80 min-h-60"}>
            <label className={"text-xl"}>{props.project.name}</label>
            {props.project.description &&
                <label className={"text-gray-500 dark:text-gray-400"}>{props.project.description}</label>}
            <div className={"mt-2"}>
                <LinkButton href={props.project.url}>GitHub</LinkButton>
            </div>
        </div>
    </>);
}

export default WeaveMod;