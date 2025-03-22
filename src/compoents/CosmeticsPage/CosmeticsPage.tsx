import imgUnlimitedCosmetics from '../../assets/unlimited-cosmetics.webp';
import {CSSProperties} from "react";
import {useTranslation} from "react-i18next";
import { useTitle } from '../../utils';

function CosmeticsPage() {
    useTitle("Get Free Cosmetics Today - LunarCN");
    const {t} = useTranslation();
    const style: CSSProperties = {
        backgroundImage: `url(${imgUnlimitedCosmetics})`,
    };

    return <>
        <div className={"w-full h-screen overflow-hidden"}
             style={style}>
            <div className={"w-full h-full backdrop-blur-xl flex flex-col justify-center items-center gap-3"}>
                <h1 className={"text-3xl font-semibold font-serif uppercase"}>{t('cosmetics.title')}</h1>
                <p className={"text-amber-300"}>{t('cosmetics.source.sorry')}</p>
                <p>{t('cosmetics.tutorial')}</p>
                <p>{t('cosmetics.tip')}</p>
                <div className={"flex flex-col gap-1"}>
                    <div className={"flex flex-row gap-1"}>
                        <a href={"https://files.catbox.moe/e93l2z.zip"}
                           className={"btn btn-soft btn-primary"}>{t('cosmetics.download.catbox')}</a>
                        <a href={"https://www.123pan.com/s/LseJjv-1WtBA"}
                           className={"btn btn-soft btn-secondary"}>{t('cosmetics.download.123pan')}</a>
                    </div>
                    <a href={"https://github.com/earthsworth/LunarDebugger"} className={"btn btn-soft btn-info w-full"}>{t('cosmetics.source')}</a>
                </div>
            </div>
        </div>
    </>;
}

export default CosmeticsPage;