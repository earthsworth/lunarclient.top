import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const getRandomCharacter = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    return characters.charAt(Math.floor(Math.random() * characters.length));
};

function TypingEffect() {
    const { t } = useTranslation();
    const messages = useRef([
        t(`home.motd1`),
        t(`home.motd2`),
        t(`home.motd3`),
        t(`home.motd4`)
    ]).current;

    const [displayedText, setDisplayedText] = useState('');
    const animationRef = useRef<number>();
    const stateRef = useRef({
        cycle: 0,
        index: 0,
        phase: 'random' as 'random' | 'correct',
        deleting: false,
        currentText: '',
        waitStart: Date.now(),
    });

    useEffect(() => {
        const animate = () => {
            const state = stateRef.current;

            // 处理删除状态
            if (state.deleting) {
                if (state.currentText.length > 0) {
                    if (Date.now() - state.waitStart > 50) {
                        state.currentText = state.currentText.slice(0, -1);
                        setDisplayedText(state.currentText);
                        state.waitStart = Date.now();
                    }
                } else {
                    state.deleting = false;
                    state.cycle = (state.cycle + 1) % messages.length; // 循环周期
                    state.index = 0;
                    state.phase = 'random';
                }
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            const currentMessage = messages[state.cycle];

            // 处理输入完成后的等待
            if (state.index >= currentMessage.length) {
                if (Date.now() - state.waitStart > 1000) { // 等待1秒后开始删除
                    state.deleting = true;
                    state.waitStart = Date.now();
                }
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            // 处理字符输入
            if (Date.now() - state.waitStart > 50) {
                if (state.phase === 'random') {
                    state.currentText += getRandomCharacter();
                    setDisplayedText(state.currentText);
                    state.phase = 'correct';
                } else {
                    state.currentText = state.currentText.slice(0, -1) + currentMessage[state.index];
                    setDisplayedText(state.currentText);
                    state.index++;
                    state.phase = 'random';
                }
                state.waitStart = Date.now();
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current!);
    }, [messages]);

    return <label className="select-none">{displayedText}_</label>;
}

export default TypingEffect;
