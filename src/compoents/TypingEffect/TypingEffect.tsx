import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Typed from 'typed.js';

function TypingEffect() {
    const { t } = useTranslation();
    const messages = useRef([
        t(`home.motd1`),
        t(`home.motd2`),
        t(`home.motd3`),
        t(`home.motd4`)
    ]).current;

    const spanRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const typed = new Typed(spanRef.current, {
            strings: messages,
            typeSpeed: 30,
            backSpeed: 35,
            cursorChar: '_',
            fadeOut: true,
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return <span ref={spanRef}></span>
}

export default TypingEffect;
