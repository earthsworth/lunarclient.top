import NavbarLink from "../Navbar/NavbarLink.tsx";
import {FaDiscord, FaGithub, FaTelegram} from "react-icons/fa";
import {FaBilibili} from "react-icons/fa6";
import CircleIcon from "../CircleIcon/CircleIcon.tsx";

interface Props {
    border?: boolean,
    iconClass?: string,
    containerClass?: string,
    iconSize?: number
}

function SocialLinks(props: Props) {
    return (<>
        <div className={"flex flex-row justify-start items-center gap-4"}>
            <NavbarLink href={"https://discord.lunarclient.top"} social={true}>
                <CircleIcon icon={<FaDiscord size={20}/>} border={props.border}/>
            </NavbarLink>
            <NavbarLink href={"https://t.me/earthsworth"} social={true}>
                <CircleIcon icon={<FaTelegram size={20}/>} border={props.border}/>
            </NavbarLink>
            <NavbarLink href={"https://space.bilibili.com/1106744676"} social={true}>
                <CircleIcon icon={<FaBilibili size={20}/>} border={props.border}/>
            </NavbarLink>
            <NavbarLink href={"https://github.com/CubeWhyMC/celestial"} social={true}>
                <CircleIcon icon={<FaGithub size={20}/>} border={props.border}/>
            </NavbarLink>
        </div>
    </>);
}

export default SocialLinks;