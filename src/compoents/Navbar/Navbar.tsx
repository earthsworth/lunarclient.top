import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import NavbarLink from "./NavbarLink.tsx";
import SocialLinks from "../SocialLinks/SocialLinks.tsx";

function Navbar() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigation = [
        { name: t('nav.home'), href: "/" },
        { name: t('nav.download'), href: "/download" },
        { name: t('nav.weave'), href: "/weave" },
        { name: t('nav.docs'), href: "https://github.com/CubeWhyMC/celestial/wiki" },
        { name: t('nav.sponsor'), href: "/sponsor" },
        { name: t('nav.analysis'), href: "/analysis" }
    ];

    return (
        <nav className={`sticky top-0 z-50 bg-white/90 dark:bg-gray-950/80 backdrop-blur-xl transition-all duration-400 ${
            isScrolled ? "border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg" : "border-b-0"
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* 品牌标识 - 更新后的版本 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center flex-1"
                    >
                        <NavbarLink
                            href="/"
                            className="group relative text-2xl font-black bg-gradient-to-r from-purple-400 via-blue-300 to-purple-400 bg-clip-text text-transparent"
                        >
                            {/* 星光粒子效果 */}
                            <div className="absolute -top-2 -right-3 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_#fff] animate-pulse" />

                            {/* 文字主体 */}
                            <motion.span
                                className="block relative"
                                whileHover={{
                                    scale: 1.05,
                                    textShadow: "0 0 10px rgba(165,180,252,0.5)"
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Celestial
                                {/* 流动光效 */}
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12" />
                            </motion.span>

                            {/* 动态下划线 */}
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-blue-300 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                        </NavbarLink>
                    </motion.div>


                    {/* 桌面导航 */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex space-x-6">
                            {navigation.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <NavbarLink
                                        href={item.href}
                                        className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 text-lg font-medium group"
                                    >
                                        {item.name}
                                        <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                                    </NavbarLink>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="ml-6 border-l border-gray-200 dark:border-gray-700 pl-6"
                        >
                            <SocialLinks
                                iconClass="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                                iconSize={24}
                            />
                        </motion.div>
                    </div>

                    {/* 移动端菜单按钮 */}
                    <motion.div
                        className="md:hidden z-50"
                        whileHover={{ scale: 1.05 }}
                    >
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-3 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 shadow-sm hover:shadow-md transition-all"
                        >
                            {isOpen ? (
                                <XMarkIcon className="h-7 w-7 text-gray-600 dark:text-gray-400" />
                            ) : (
                                <Bars3Icon className="h-7 w-7 text-gray-400 dark:text-gray-400" />
                            )}
                        </button>
                    </motion.div>

                    {/* 移动端菜单 */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-gray-700 shadow-xl rounded-b-2xl mx-4"
                            >
                                <div className="px-6 py-4 space-y-3">
                                    {navigation.map((item) => (
                                        <NavbarLink
                                            key={item.name}
                                            href={item.href}
                                            className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </NavbarLink>
                                    ))}
                                    <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <SocialLinks
                                            containerClass="flex justify-center gap-5"
                                            iconClass="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                                            iconSize={28}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
