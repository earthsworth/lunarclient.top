import InfoNotification from "../Notification/InfoNotification.tsx";
import * as React from "react";
import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {WeaveIndex} from "../../entities.ts";
import {useTranslation} from "react-i18next";
import ErrorNotification from "../Notification/ErrorNotification.tsx";
import WeaveDeveloper from "./WeaveDeveloper.tsx";
import WarningNotification from "../Notification/WarningNotification.tsx";
import FloatingButton from "../FloatingButton/FloatingButton.tsx";
import {FaArrowUp} from "react-icons/fa";
import { useTitle } from "../../utils.ts";


interface Props {
    dataSource: string;
}

function WeaveIndexPage(props: Props) {
    useTitle("Weave Index - LunarCN");
    const {t} = useTranslation();

    const [weaveIndex, setWeaveIndex] = useState<WeaveIndex | null>(null)
    const [error, setError] = useState<string | null>(null)

    const fetchDatasource = async () => {
        try {
            const response: AxiosResponse<WeaveIndex> = await axios.get(props.dataSource);
            // put response data to weave index
            setWeaveIndex(response.data);
        } catch (e) {
            if (axios.isAxiosError(e)) {
                setError(e.toString());
            }
            setError("Unknown Error");
            console.error("Failed to fetch datasource", e);
        }
    }

    const [fakeDevelopers, setFakeDevelopers] = useState<React.ReactNode[]>([]);

    useEffect(() => {
        const newWeaveMods = Array.from({length: Math.floor(Math.random() * 10) + 1}, (_, index) => <WeaveDeveloper
            key={index}/>);
        setFakeDevelopers(newWeaveMods);
    }, []);

    useEffect(() => {
        if (weaveIndex) return; // avoid load twice in strict mode
        fetchDatasource()
    }, [props.dataSource]);

    const handleGoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (<>
        <FloatingButton onClick={handleGoTop}><FaArrowUp/></FloatingButton>
        <div className={"flex flex-col gap-2 m-10"}>
            {/*Notifications*/}
            <InfoNotification>
                <label> View the <a href={props.dataSource} target={"_blank"}
                                    className={"underline cursor-pointer hover:text-blue-500"}>datasource</a></label>
            </InfoNotification>
            <InfoNotification>
                <a href={"https://weave.lunarclient.top"} target={"_blank"}
                   className={"underline hover:text-blue-500"}>{t('weave.old')}</a>
            </InfoNotification>
            {
                weaveIndex && <InfoNotification>{t('weave.update-time')} {weaveIndex.timestamp}</InfoNotification>
            }
            <WarningNotification>{t('weave.disclaimer')}</WarningNotification>
            {error &&
                <div>
                    <ErrorNotification>{t('download.warn.mirror')}</ErrorNotification>
                    <ErrorNotification>{error}</ErrorNotification>
                </div>
            }
            {/*Cards*/}
            {
                weaveIndex ?
                    <div>
                        {weaveIndex.developers.map((developer) => {
                            return <WeaveDeveloper dev={developer}/>
                        })}
                    </div>
                    :
                    <div className={"cursor-wait"}>
                        {t('weave.loading')}
                        {fakeDevelopers}
                    </div>
            }
        </div>
    </>);
}

export default WeaveIndexPage;