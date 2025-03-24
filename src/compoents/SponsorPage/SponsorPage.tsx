import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import wechatQR from '../../assets/wechat-qr.webp';
import paypalQR from '../../assets/paypal-qr.webp';
import TonQR from '../../assets/TON-qr.webp';
import Divider from '../Divider/Divider.tsx';
import SocialLinks from '../SocialLinks/SocialLinks.tsx';
import { useTitle } from '../../utils.ts';

function SponsorPage() {
    useTitle("Donate us - LunarCN");
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
        return () => AOS.refresh();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900 font-poppins">
            <header className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-600/30" />
                <div className="container mx-auto px-4 relative">
                    <h1
                        className="text-5xl font-bold text-white mb-6 text-center"
                        data-aos="fade-up"
                    >
                        {t('sponsor.title')}
                    </h1>
                    <p
                        className="text-xl text-purple-200 text-center max-w-2xl mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        {t('sponsor.subtitle')}
                    </p>
                </div>
            </header>


            <main className="container mx-auto px-4 pb-24">
                {/* 支付方式区块 */}
                <section className="mb-20" data-aos="fade-up">
                    <Divider text={t('sponsor.paymentMethods')} />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        <PaymentMethod
                            title={t('sponsor.wechat')}
                            img={wechatQR}
                            alt="WeChat QR"
                        />
                        <PaymentMethod
                            title="PayPal"
                            img={paypalQR}
                            alt="PayPal QR"
                            isExternal
                            link="https://paypal.me/hzqme"
                        />
                        <PaymentMethod
                            title="TON"
                            img={TonQR}
                            alt="TON QR"
                        />
                    </div>
                </section>

                {/* 赞助排行榜 */}
                <section data-aos="fade-up">
                    <Divider text={t('sponsor.leaderboard')} />
                    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 mt-12 shadow-2xl border border-slate-700/50">
                        <table className="w-full">
                            <thead className="bg-slate-700/30 rounded-lg">
                            <tr>
                                <th className="px-6 py-4 text-left text-purple-300 font-medium">{t('sponsor.name')}</th>
                                <th className="px-6 py-4 text-left text-purple-300 font-medium">{t('sponsor.amount')}</th>
                                <th className="px-6 py-4 text-left text-purple-300 font-medium">{t('sponsor.message')}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="hover:bg-slate-700/20 transition-colors">
                                <td className="px-6 py-4 text-slate-200">DarkSide</td>
                                <td className="px-6 py-4 text-emerald-400 font-medium">$4.72</td>
                                <td className="px-6 py-4 text-slate-400">Keep the project alive!</td>
                            </tr>
                            <tr className="hover:bg-slate-700/20 transition-colors">
                                <td className="px-6 py-4 text-slate-200">怯珐</td>
                                <td className="px-6 py-4 text-emerald-400 font-medium">￥50</td>
                                <td className="px-6 py-4 text-slate-400">加油!</td>
                            </tr>
                            <tr className="hover:bg-slate-700/20 transition-colors">
                                <td className="px-6 py-4 text-slate-200">甘城猫猫喵</td>
                                <td className="px-6 py-4 text-emerald-400 font-medium">￥10</td>
                                <td className="px-6 py-4 text-slate-400">非常好👍</td>
                            </tr>
                            <tr className="hover:bg-slate-700/20 transition-colors">
                                <td className="px-6 py-4 text-slate-200">rylanz2</td>
                                <td className="px-6 py-4 text-emerald-400 font-medium">$10</td>
                                <td className="px-6 py-4 text-slate-400">BadlionCN works for me, thanks! Just hoping if you could add a setting where it saves my selected cosmetics so i dont have to rec...</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>

            {/* 底部区域 */}
            <footer className="border-t border-slate-700/50">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex justify-center my-6">
                        <SocialLinks border={true} />
                    </div>
                </div>
            </footer>
        </div>
    );
}

type PaymentMethodProps = {
    title: string;
    img: string;
    alt: string;
    isExternal?: boolean;
    link?: string;
};

function PaymentMethod({ title, img, alt, isExternal, link }: PaymentMethodProps) {
    const { t } = useTranslation();

    return (
        <div className="group relative bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700/50 hover:border-purple-500/30">
            <h5 className="text-xl font-semibold text-purple-400 mb-6 text-center">{title}</h5>
            <div className="relative overflow-hidden rounded-lg bg-slate-900/50">
                <img
                    src={img}
                    alt={alt}
                    className="w-full h-64 object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="mt-6">
                {isExternal ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
                        <SponsorButton text={t('sponsor.sponsor')} />
                    </a>
                ) : (
                    <SponsorButton text={t('sponsor.sponsor')} />
                )}
            </div>
        </div>
    );
}

function SponsorButton({ text }: { text: string }) {
    return (
        <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium
      hover:from-purple-500 hover:to-indigo-500 transition-all duration-300
      shadow-lg hover:shadow-purple-500/20">
            {text}
        </button>
    );
}

export default SponsorPage;
