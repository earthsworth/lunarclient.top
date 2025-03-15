import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {FaStar} from "react-icons/fa";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import {fetchLatestVersion} from "../../utils.ts";
import {NavLink} from "react-router";

interface Props {
    repository: string;
}

function DownloadPage(props: Props) {
    const {t} = useTranslation();

    const [latestVersion, setLatestVersion] = useState<string | null>(null);
    const [changelog, setChangelog] = useState<string | null>(null);
    const [showChangelog, setShowChangelog] = useState(false);

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchLatestVersion(props.repository)
            .then((value) => {
                if (value === null) {
                    setError("Failed to fetch version metadata");
                    return;
                }
                setLatestVersion(value[0])
                setChangelog(value[1])
            });
    }, [props.repository]);

    const toggleChangelog = () => {
        setShowChangelog(!showChangelog);
    }

    const placeholders = [
        56,
        3,
        50,
        8,
        6,
        56
    ]

    return (<>
            <div className={"flex flex-col justify-center items-center h-screen overflow-hidden gap-4 m-auto"}>
                <h1 className={"text-3xl font-semibold"}>{t('download.title')}</h1>
                <NavLink to={"/cosmetics"} className={"text-red-400 underline cursor-pointer hover:text-red-500"}>Get UNLIMITED cosmetics today!</NavLink>
                {!latestVersion ?
                    <>
                        <div className={"flex gap-2 flex-col animate-pulse"}>
                            <div className={"flex flex-row items-center gap-2"}>
                                <div className="h-2 w-10 rounded bg-gray-200"></div>
                                <div className="h-2 w-6 rounded bg-gray-200"></div>
                                <div className="h-2 w-8 rounded bg-gray-200"></div>
                            </div>
                            <div className={"flex flex-row items-center gap-2"}>
                                <div className="h-2 w-28 rounded bg-gray-200"></div>
                            </div>
                        </div>
                        {error && <div className={"text-red-500"}>{error}</div>}
                        <div className={"flex flex-col items-center gap-2"}>
                            <p>{t('download.warn.mirror')}</p>
                            <p>{t('download.warn.mirror.origin-link')} https://github.com/{props.repository}</p>
                        </div>
                    </> :
                    <div className={"flex flex-row items-center gap-2"}>
                        <label>{t('download.latest')}</label>
                        <a href={`https://github.com/${props.repository}/releases/${latestVersion}`} target={"_blank"}
                           className={"underline hover:text-blue-500"}>{latestVersion}</a>
                        <label>({t('download.tip')})</label>
                    </div>
                }
                <div className={"flex flex-row gap-1"}>Please give us <div
                    className={"text-yellow-400 flex flex-row items-center gap-1"}>stars <FaStar/></div></div>
                <a href={"https://discord.lunarclient.top"} className={"underline"}>{t("download.discord")}</a>
                {!showChangelog && <div className={"rounded border px-4 py-2 cursor-pointer select-none"}
                                        onClick={toggleChangelog}>
                    {t('download.changelog')}
                </div>}

                {showChangelog && <div className={"p-2 border rounded w-[33.3%] h-[20%]"}>
                    {changelog ? <Markdown remarkPlugins={[remarkGfm]}>
                            {changelog}
                        </Markdown> :
                        <div className={"flex flex-col animate-pulse gap-2"}>
                            {placeholders.map((width, index) => (
                                <div key={index} className={`h-2 w-${width} rounded bg-gray-200`}></div>
                            ))}
                        </div>
                    }
                </div>
                }
            </div>
        </>
    );
}

export default DownloadPage;