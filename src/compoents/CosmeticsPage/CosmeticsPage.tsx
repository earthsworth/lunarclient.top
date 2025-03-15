import imgUnlimitedCosmetics from '../../assets/unlimited-cosmetics.webp';
import {CSSProperties} from "react";
import {useTranslation} from "react-i18next";

function CosmeticsPage() {
    const {t} = useTranslation();
    const style: CSSProperties = {
        backgroundImage: `url(${imgUnlimitedCosmetics})`,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)"
    };

    return <>
        <div className={"w-full h-screen overflow-hidden"}
             style={style}>
            <div className={"w-full h-full backdrop-blur-2xl flex flex-col justify-center items-center gap-3"}>
                <h1 className={"text-3xl font-semibold font-serif uppercase"}>{t('cosmetics.title')}</h1>
                <p className={"text-amber-300"}>{t('cosmetics.source.sorry')}</p>
                <p>{t('cosmetics.tutorial')}</p>
                <p>{t('cosmetics.tip')}</p>
                <div className={"flex flex-row gap-2"}>
                    <a href={"https://files.catbox.moe/e93l2z.zip"} className={"btn btn-soft btn-primary"}>{t('cosmetics.download.catbox')}</a>
                    <a href={"https://github.com/earthsworth/LunarDebugger"} className={"btn btn-soft btn-secondary"}>{t('cosmetics.source')}</a>
                </div>
            </div>
        </div>
    </>;
}

export default CosmeticsPage;