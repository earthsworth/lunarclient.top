import galaxyImage from '../../assets/galaxy.webp';
import TypingEffect from "../TypingEffect/TypingEffect.tsx";
import DownloadButton from "./DownloadButton.tsx";

import LauncherImage from "../../assets/launcher.webp";
import showcaseTiny from "../../assets/launcher.webp";
import showcaseGitHubReleases from "../../assets/github-releases-screenshot.webp";
import showcaseOpensource from "../../assets/github-repository-screenshot.webp";
import showcaseDiscord from "../../assets/discord-screenshot.webp";
import showcaseNoElectron from "../../assets/no-electron.webp";
import showcaseCrossPlatform from "../../assets/fastfetch-screenshot.webp";
import showcaseAddons from "../../assets/nhd-addon.webp";
import {useTranslation} from "react-i18next";
import Divider from "../Divider/Divider.tsx";
import ShowcaseCard from "./ShowcaseCard.tsx";
import SocialLinks from "../SocialLinks/SocialLinks.tsx";
import {Link, useNavigate} from "react-router";
import { useTitle } from '../../utils.ts';

function HomePage() {
    useTitle("Celestial Launcher");

    const {t} = useTranslation();
    const navigate = useNavigate();

    const handlePineapple = () => {
        navigate("/pineapple");
    }

    return (<>
        <div
            className={"flex flex-col items-center justify-center overflow-hidden shadow-2 h-[100vh] bg-cover bg-center bg-no-repeat"}
            style={{
                backgroundImage: `url(${galaxyImage})`
            }}>
            <div
                className={"flex flex-col text-white bg-[rgba(0,0,0,0.8)] w-screen h-screen items-center justify-center gap-4 font-san"}>
                <div className={"text-4xl font-bold select-none"}>Celestial - <TypingEffect/></div>
                <p className={"text-xl select-none"}>{t('home.subtitle')}</p>
                <DownloadButton/>
            </div>
        </div>
        <div className={"flex flex-col sm:flex-row items-center justify-center m-auto gap-4 p-4"}>
            <img
                alt={"Celestial Launcher"}
                src={LauncherImage}
                className={"sm:size-72 m-10 rounded-xl hover:scale-110 transition shadow-2xl w-full sm:w-auto"}
            />
            <div className={"flex flex-col sm:justify-center items-start justify-start gap-4 w-full sm:w-auto"}>
                <h1 className={"text-3xl sm:text-4xl"}>{t('home.features.title')}</h1>
                <ul className={"text-slate-500 dark:text-slate-300"}>
                    <li>{t("home.features.electron")}</li>
                    <li>{t("home.features.opensource")}</li>
                    <li>{t("home.features.ads")}</li>
                    <li>{t("home.features.weave")}</li>
                    <li>{t("home.features.javaagents")}</li>
                    <li>{t("home.features.tiny")}</li>
                    <li>{t("home.features.downloader")}</li>
                    <li>{t("home.features.login")}</li>
                    <li>{t("home.features.jre")}</li>
                    <li>{t("home.features.cross-platform")}</li>
                    <li>{t("home.features.linux")}</li>
                </ul>
            </div>
        </div>

        <Divider text={t('home.divider1')}/>
        <div className={"flex flex-col items-center justify-center gap-4 p-4"}>
            <h1 className={"text-3xl sm:text-4xl"}>{t('home.showcase.title')}</h1>
            <div className={"flex flex-col sm:flex-row gap-3 sm:gap-6 flex-wrap justify-center"}>
                <ShowcaseCard
                    text={t("home.showcase.opensource")}
                    title={t("home.showcase.opensource.title")} image={showcaseOpensource}/>
                <ShowcaseCard
                    text={t("home.showcase.pages")}
                    title={t("home.showcase.pages.title")} image={showcaseTiny}/>
                <ShowcaseCard
                    text={t("home.showcase.electron")}
                    title={t("home.showcase.electron.title")} image={showcaseNoElectron}/>
                <ShowcaseCard
                    text={t('home.showcase.tiny')}
                    title={t('home.showcase.tiny.title')} image={showcaseGitHubReleases}/>
                <ShowcaseCard
                    text={t('home.showcase.addons')}
                    title={t('home.showcase.addons.title')} image={showcaseAddons}/>
                <ShowcaseCard
                    text={t('home.showcase.cross-platform')}
                    title={t('home.showcase.cross-platform.title')} image={showcaseCrossPlatform}/>
                <ShowcaseCard
                    text={t('home.showcase.community')}
                    title={t('home.showcase.community.title')} image={showcaseDiscord}/>
            </div>
        </div>

        <Divider text={t('home.divider2')}/>
        <div className={"flex flex-col m-auto max-w-fit"}>
            <DownloadButton/>
        </div>

        <div className={"flex flex-row items-center justify-center mt-10"}>
            <SocialLinks border={true}/>
        </div>

        <div className={"flex flex-col items-center justify-center align-bottom mt-10 w-full shadow-xl bg-gray-300 dark:bg-[#1c1e21] rounded-t select-none p-4"}>
            <div className="flex gap-4 mb-2">
                <Link
                    to="/eula"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                    {t('footer.eula')}
                </Link>
            </div>

            <label>The software is <strong className={"text-red-500"}>open source</strong> and has no viruses or backdoors.</label>
            <label className={"text-center"}>
                <span className={"text-yellow-500"}>Disclaimer</span>: Celestial is not
                "<strong className={"text-red-500"}>krocked Lunar Client</strong>",
                we will not develop similar features in the future
            </label>

            <div className={"flex flex-col sm:flex-row w-full items-center justify-between px-4 mt-2 gap-2"}>
                <label className="text-sm">Celestial Launcher by cubewhy & contributors</label>
                <label
                    className={"text-gray-300 dark:text-[#1c1e21] cursor-pointer text-sm"}
                    onClick={handlePineapple}
                >
                    pineapples enhanced.
                </label>
                <label className="text-sm">
                    Not affiliated with <strong className={"text-blue-500"}>Moonsworth</strong>, <strong className={"text-sky-500"}>Solar-Tweaks</strong> or
                    <strong className={"text-red-400"}> Mojang</strong>
                </label>
            </div>
        </div>
    </>);
}

export default HomePage;