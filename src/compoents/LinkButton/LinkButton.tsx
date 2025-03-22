import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

interface Props {
    children: React.ReactNode;
    href: string;
}

function LinkButton(props: Props) {
    const navigate = useNavigate();
    const [isExternal] = useState(() => props.href.startsWith("http"));
    const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);
    const ref = useRef<HTMLDivElement>(null);

    const handleClick = (e: React.MouseEvent) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            setRipple({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }

        if (isExternal) {
            window.open(props.href, "_blank");
        } else {
            navigate(props.href);
        }

        setTimeout(() => setRipple(null), 600);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            handleClick(e as unknown as React.MouseEvent);
        }
    };

    return (
        <motion.div
            ref={ref}
            role="button"
            tabIndex={0}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer select-none rounded-lg px-6 py-3 shadow-sm hover:shadow-md"
        >
            {/* 简约波纹效果 */}
            {ripple && (
                <motion.div
                    className="absolute w-8 h-8 bg-white/20 rounded-full pointer-events-none"
                    style={{
                        left: ripple.x - 14,
                        top: ripple.y - 14,
                    }}
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: 4, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                />
            )}

            <div className="flex items-center justify-center gap-2 relative z-10">
        <span className="text-gray-100 font-bold">
          {props.children}
        </span>
            </div>

            {/* 极简边框动画 */}
            <motion.div
                className="absolute inset-0 border border-white/10 rounded-lg pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
}

export default LinkButton;