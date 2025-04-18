import NavbarLink from "../Navbar/NavbarLink.tsx";
import {FaDiscord, FaGithub, FaTelegram} from "react-icons/fa";
import {FaBilibili, FaSignalMessenger} from "react-icons/fa6";
import CircleIcon from "../CircleIcon/CircleIcon.tsx";
import matrixLogo from '../../assets/matrix-logo-white.svg';

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
            <NavbarLink href="https://signal.group/#CjQKIGhv4piPU_D32q6mH697zFaUl_XACq6ptxCoP0MwB73EEhDFqo8QLvSlq8P6xSM9PyqE" social={true}>
                <CircleIcon icon={<FaSignalMessenger size={20}/>} border={props.border}/>
            </NavbarLink>
            <NavbarLink href="https://matrix.to/#/#proj-lccn:matrix.org" social={false}>
                <CircleIcon icon={<img src={matrixLogo}/>}/>
            </NavbarLink>
        </div>
    </>);
}

export default SocialLinks;