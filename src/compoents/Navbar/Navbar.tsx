import { useState, useEffect, useMemo, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import NavbarLink from "./NavbarLink.tsx";

const SocialLinks = lazy(() => import("../SocialLinks/SocialLinks.tsx"));

function Navbar() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // 优化滚动监听
    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 缓存导航数据
    const navigation = useMemo(() => [
        { name: t('nav.home'), href: "/" },
        { name: t('nav.download'), href: "/download" },
        { name: t('nav.weave'), href: "/weave" },
        { name: t('nav.docs'), href: "https://github.com/CubeWhyMC/celestial/wiki" },
        { name: t('nav.sponsor'), href: "/sponsor" },
        { name: t('nav.analysis'), href: "/analysis" }
    ], [t]);

    return (
        <nav className={`sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm md:backdrop-blur-xl transition-all duration-300 ${
            isScrolled ? "border-b border-gray-200/30 dark:border-gray-700/30 shadow-sm" : "border-b-0"
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* 品牌标识 - 优化点击反馈 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center flex-1"
                    >
                        <NavbarLink
                            href="/"
                            className="group relative text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent"
                        >
                            <motion.span
                                className="block relative"
                                initial={{ scale: 0.98 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Celestial
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.span>
                        </NavbarLink>
                    </motion.div>

                    {/* 桌面导航 */}
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex space-x-5">
                            {navigation.map((item) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="transform-gpu"
                                >
                                    <NavbarLink
                                        href={item.href}
                                        className="relative px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 text-[15px] font-medium group"
                                    >
                                        {item.name}
                                        <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full" />
                                    </NavbarLink>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="ml-5 border-l border-gray-200 dark:border-gray-700 pl-5"
                        >
                            <Suspense fallback={<div className="w-6 h-6" />}>
                                <SocialLinks
                                    iconClass="text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                    iconSize={22}
                                />
                            </Suspense>
                        </motion.div>
                    </div>

                    {/* 优化后的移动菜单按钮 */}
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden z-50 p-2.5 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isOpen ? (
                            <XMarkIcon className="h-7 w-7 text-purple-500 dark:text-purple-400" />
                        ) : (
                            <Bars3Icon className="h-7 w-7 text-gray-600 dark:text-gray-300" />
                        )}
                    </motion.button>

                    {/* 优化后的移动端菜单 */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="md:hidden fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-lg pt-20"
                                onClick={() => setIsOpen(false)}
                            >
                                <motion.div
                                    className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl shadow-2xl rounded-2xl mx-4 overflow-hidden"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="divide-y divide-gray-100/80 dark:divide-gray-700/80">
                                        {navigation.map((item) => (
                                            <NavbarLink
                                                key={item.name}
                                                href={item.href}
                                                className="block px-6 py-4 text-gray-700 dark:text-gray-200 hover:bg-purple-50/50 dark:hover:bg-gray-700/50 transition-colors active:bg-purple-100/50"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                <motion.div
                                                    whileTap={{ scale: 0.98 }}
                                                    className="flex items-center space-x-4"
                                                >
                                                    <span className="text-[16px] font-medium tracking-wide">{item.name}</span>
                                                </motion.div>
                                            </NavbarLink>
                                        ))}
                                        <div className="p-4 bg-gray-50/50 dark:bg-gray-700/30">
                                            <Suspense fallback={<div className="h-8" />}>
                                                <SocialLinks
                                                    containerClass="flex justify-center gap-5"
                                                    iconClass="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 p-2 rounded-xl bg-white/80 dark:bg-gray-800/80 hover:bg-gray-100/80 dark:hover:bg-gray-700/80 transition-all shadow-sm hover:shadow-md"
                                                    iconSize={26}
                                                />
                                            </Suspense>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;