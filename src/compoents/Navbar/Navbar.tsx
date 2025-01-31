import NavbarLink from "./NavbarLink.tsx";
import SocialLinks from "../SocialLinks/SocialLinks.tsx";
import {useTranslation} from "react-i18next";

function Navbar() {
    const {t} = useTranslation();

    return (<>
        <div className={`z-40 flex flex-row justify-between p-4 backdrop-blur-2xl shadow-xl w-screen text-current`}>
            <div className={"flex flex-row justify-start gap-4"}>
                <NavbarLink bold={true} href={"/"}>Celestial</NavbarLink>
                <NavbarLink href={"/"}>{t('nav.home')}</NavbarLink>
                <NavbarLink href={"/download"}>{t('nav.download')}</NavbarLink>
                <NavbarLink href={"/weave"}>{t('nav.weave')}</NavbarLink>
                <NavbarLink href={"https://github.com/CubeWhyMC/celestial/wiki"}>{t('nav.docs')}</NavbarLink>
            </div>
            <SocialLinks/>
        </div>
    </>);
}

export default Navbar;