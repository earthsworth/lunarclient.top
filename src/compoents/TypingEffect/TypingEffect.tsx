import {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';

function TypingEffect() {
    const {t} = useTranslation();
    const messages = useRef([
        t(`home.motd1`),
        t(`home.motd2`),
        t(`home.motd3`),
        t(`home.motd4`)
    ]);
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [cycle, setCycle] = useState(0);

    const getRandomCharacter = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
        return characters.charAt(Math.floor(Math.random() * characters.length));
    };

    useEffect(() => {
        if (cycle < messages.current.length) {
            if (deleting) {
                if (index > 0) {
                    const timeout = setTimeout(() => {
                        setDisplayedText((prev) => prev.slice(0, -1));
                        setIndex(index - 1);
                    }, 100);
                    return () => clearTimeout(timeout);
                } else {
                    setDeleting(false);
                    setCycle((prev) => prev + 1);
                }
            } else {
                if (index < messages.current[cycle].length) {
                    const timeout = setTimeout(() => {
                        setDisplayedText((prev) => prev + getRandomCharacter());
                        setIndex(index + 1);

                        setTimeout(() => {
                            setDisplayedText((prev) => prev.slice(0, -1) + messages.current[cycle][index]); // 替换为正确字符
                        }, 100);
                    }, 100);

                    return () => clearTimeout(timeout);
                } else {
                    setTimeout(() => {
                        if (cycle !== messages.current.length - 1) {
                            setDeleting(true);
                        }
                    }, 500);
                }
            }
        }
    }, [index, deleting, cycle]);

    return (
        <label className={"select-none"}>{displayedText}_</label>
    );
}

export default TypingEffect;
