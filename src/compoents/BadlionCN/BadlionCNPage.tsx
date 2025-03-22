import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faDownload, faShieldAlt, faPaintBrush, faCogs } from '@fortawesome/free-solid-svg-icons';

function BadlionPage() {
    useEffect(() => {
        // 添加动态背景效果
        const interBubble = document.querySelector('.interactive');
        let curX = 0;
        let curY = 0;
        let tgX = 0;
        let tgY = 0;

        function move() {
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;
            interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            requestAnimationFrame(move);
        }

        window.addEventListener('mousemove', (event) => {
            tgX = event.clientX;
            tgY = event.clientY;
        });

        move();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
            {/* 动态背景元素 */}
            <div className="interactive w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 absolute rounded-full blur-2xl opacity-40"></div>

            {/* 导航栏 */}
            <nav className="sticky top-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              BADLION CN
            </span>
                        <div className="space-x-8">
                            <a href="#features" className="hover:text-purple-400 transition-colors">特性</a>
                            <a href="#download" className="hover:text-blue-400 transition-colors">下载</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* 主内容区 */}
            <main className="container mx-auto px-6 relative z-10">
                {/* 标题部分 */}
                <section className="py-20 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-6xl font-bold mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                新一代游戏平台
              </span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            极致优化 · 安全可靠 · 流畅体验
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button className="bg-purple-500 hover:bg-purple-600 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30">
                                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                                立即下载
                            </button>
                        </div>
                    </div>
                </section>

                {/* 特性介绍 */}
                <section id="features" className="py-20 grid md:grid-cols-3 gap-8">
                    <div className="feature-card p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all">
                        <FontAwesomeIcon icon={faRocket} className="text-4xl text-purple-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">极致性能优化</h3>
                        <p className="text-gray-300">采用最新渲染技术，显著提升帧率表现，带来流畅的游戏体验</p>
                    </div>

                    <div className="feature-card p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all">
                        <FontAwesomeIcon icon={faShieldAlt} className="text-4xl text-blue-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">高级安全防护</h3>
                        <p className="text-gray-300">多层反作弊系统保护，确保公平竞技环境</p>
                    </div>

                    <div className="feature-card p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all">
                        <FontAwesomeIcon icon={faPaintBrush} className="text-4xl text-purple-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">个性化定制</h3>
                        <p className="text-gray-300">海量主题皮肤，打造你的专属界面风格</p>
                    </div>
                </section>

                {/* 下载区域 */}
                <section id="download" className="py-20 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6">立即体验</h2>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="download-card p-6 bg-white/10 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all">
                                <FontAwesomeIcon icon={faCogs} className="text-4xl mb-4 text-blue-400" />
                                <h3 className="text-lg font-bold mb-2">Windows 客户端</h3>
                                <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full text-sm transition-all">
                                    下载 (v3.2.1)
                                </button>
                            </div>
                            <div className="download-card p-6 bg-white/10 rounded-xl border border-white/10 hover:border-blue-400/30 transition-all">
                                <FontAwesomeIcon icon={faCogs} className="text-4xl mb-4 text-purple-400" />
                                <h3 className="text-lg font-bold mb-2">macOS 客户端</h3>
                                <button className="bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded-full text-sm transition-all">
                                    下载 (v3.2.1)
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* 页脚 */}
            <footer className="bg-black/30 backdrop-blur-md border-t border-white/10">
                <div className="container mx-auto px-6 py-8 text-center text-gray-400">
                    <p>© 2023 BadlionCN. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default BadlionPage;