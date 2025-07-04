import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { FaDiscord, FaDownload, FaGithub } from "react-icons/fa";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import { useTitle } from "../../utils.ts";
import { motion, AnimatePresence } from "framer-motion";


function DownloadPage() {
    useTitle("Download Celestial - LunarCN");
    const { t } = useTranslation();
    const [latestVersion, setLatestVersion] = useState<string | null>(null);
    const [changelog, setChangelog] = useState<string | null>(null);
    const [showChangelog, setShowChangelog] = useState(false);
    // const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // 手动设置最新版本信息
        setLatestVersion("3.2.1-SNAPSHOT");
        setChangelog("Changelog available at the new repository");
    }, []);

    const toggleChangelog = () => {
        setShowChangelog(!showChangelog);
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 to-transparent opacity-30 animate-pulse-slow" />

            <div className="container mx-auto px-4 py-12 relative z-10">
                <motion.div
                    className="max-w-2xl mx-auto text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {/* DMCA 公告 */}
                    <motion.div variants={itemVariants}>
                        <div className="bg-red-900/20 border border-red-700 rounded-lg p-4 mb-6 text-red-300">
                            {t('download.dmca_notice')}
                            <a
                                href="https://git.lunarclient.top/CubeWhyMC/celestial"
                                className="text-red-400 hover:underline ml-1"
                            >
                                {t('download.new_repo_link')}
                            </a>
                        </div>
                    </motion.div>

                    {/* 标题部分 */}
                    <motion.div variants={itemVariants}>
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                            {t('download.title')}
                        </h1>
                    </motion.div>


                    {/* 版本信息 */}
                    <motion.div variants={itemVariants} className="mb-8">
                        {!latestVersion ? (
                            <div className="space-y-4">
                                <div className="h-4 bg-gray-700/50 rounded-full w-48 mx-auto animate-pulse" />
                                <div className="h-3 bg-gray-700/30 rounded-full w-64 mx-auto animate-pulse" />
                            </div>
                        ) : (
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg">
                                <div className="flex items-center justify-center gap-4 mb-4">
                                    <FaDownload className="text-2xl text-purple-400" />
                                    <span className="text-2xl">{t('download.latest')}</span>
                                    <span className="text-2xl font-mono">{latestVersion}</span>
                                </div>
                                <a
                                    // href="https://pub-e7063cdf1d6a48229bdf5a5c3237b970.r2.dev/celestial-3.2.1-SNAPSHOT-fatjar.jar"
                                    href="https://github.com/earthsworth/celestial-bootstrap"
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-purple-500/30"
                                >
                                    <FaDownload />
                                    {t('download.btn')}
                                </a>
                            </div>
                        )}
                    </motion.div>

                    {/* 附加信息 */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <div className="flex justify-center gap-4 text-sm text-gray-300">
                            <a
                                href="https://git.lunarclient.top/CubeWhyMC/celestial"
                                className="flex items-center gap-2 hover:text-purple-300 transition-colors"
                            >
                                <FaGithub />
                                {t('download.new_repo')}
                            </a>
                            <a
                                href="https://discord.lunarclient.top"
                                className="flex items-center gap-2 hover:text-blue-300 transition-colors"
                            >
                                <FaDiscord />
                                Discord Server
                            </a>
                        </div>

                        <button
                            onClick={toggleChangelog}
                            className="mx-auto flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                        >
                            <span className="group-hover:underline">{t('download.changelog')}</span>
                            <span className={`transform transition-transform ${showChangelog ? 'rotate-180' : ''}`}>
                                ▼
                            </span>
                        </button>
                    </motion.div>

                    {/* 更新日志 */}
                    <AnimatePresence>
                        {showChangelog && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-6 bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-white/10 shadow-xl"
                            >
                                {changelog ? (
                                    <Markdown
                                        remarkPlugins={[remarkGfm]}
                                        className="prose prose-invert text-left"
                                    >
                                        {changelog}
                                    </Markdown>
                                ) : (
                                    <div className="space-y-3 animate-pulse">
                                        {[...Array(6)].map((_, i) => (
                                            <div key={i} className="h-4 bg-gray-700/30 rounded-full" style={{ width: `${Math.random() * 40 + 60}%` }} />
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/80 to-transparent pointer-events-none" />
        </div>
    );
}

export default DownloadPage;