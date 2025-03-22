import { useTranslation } from "react-i18next";
import { FaLock } from "react-icons/fa";

function PrivacyPolicy() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-[#222] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <FaLock className="mx-auto h-12 w-12 text-blue-600 dark:text-blue-400 mb-6" />
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                        {t('privacy.title')}
                    </h1>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                        {t('privacy.effective_date')}
                    </p>
                </div>

                <div className="bg-white dark:bg-[#222] shadow-lg rounded-2xl p-8 md:p-12 border dark:border-0 border-gray-100">
                    <div className="prose-lg text-gray-700 dark:text-gray-300 space-y-10">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                <FaLock className="mr-2 text-blue-500" />
                                {t('privacy.data_collection.title')}
                            </h2>
                            <p className="text-lg leading-relaxed">
                                {t('privacy.data_collection.content')}
                                <span className="text-blue-600 font-medium">
                                    {t('privacy.data_collection.highlight')}
                                </span>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white  mb-4 flex items-center">
                                <FaLock className="mr-2 text-blue-500" />
                                {t('privacy.data_usage.title')}
                            </h2>
                            <p className="text-lg leading-relaxed">
                                {t('privacy.data_usage.content')}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white  mb-4 flex items-center">
                                <FaLock className="mr-2 text-blue-500" />
                                {t('privacy.third_party.title')}
                            </h2>
                            <p className="text-lg leading-relaxed">
                                {t('privacy.third_party.content')}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                <FaLock className="mr-2 text-blue-500" />
                                {t('privacy.security.title')}
                            </h2>
                            <p className="text-lg leading-relaxed">
                                {t('privacy.security.content')}
                            </p>
                        </section>

                        <div className="mt-12 p-6 bg-blue-50 dark:bg-gray-800 rounded-xl border border-blue-200 dark:border-0">
                            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-400 mb-4">
                                {t('privacy.contact.title')}
                            </h3>
                            <p className="text-blue-700 dark:text-blue-200">
                                {t('privacy.contact.content')}{' '}
                                <a
                                    href="mailto:support@lunarclient.top"
                                    className="text-blue-600 dark:text-blue-300 underline hover:text-blue-800"
                                >
                                    support@lunarclient.top
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center text-gray-500 text-sm">
                    <p>{t('privacy.last_updated')}</p>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
