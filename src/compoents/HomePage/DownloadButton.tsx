import {useTranslation} from "react-i18next";
import LinkButton from "../LinkButton/LinkButton.tsx";

function DownloadButton() {
    const {t} = useTranslation();

    return (
        <LinkButton href={"/download"}>{t('btn.download')}</LinkButton>
    );
}

export default DownloadButton;