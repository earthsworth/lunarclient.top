import {Line} from 'react-chartjs-2';
import {
    CategoryScale,
    Chart as ChartJS,
    ChartData,
    ChartOptions,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import {useEffect, useState} from "react";
import axios from "axios";
import {useTranslation} from "react-i18next";
import {motion} from 'framer-motion';
import {ApiResponse} from "../../entities.ts";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface UserStat {
    userCount: number;
    webUserCount: number;
    onlineCount: number;
    timestamp: number;
}

function AnalysisPage() {
    const {t} = useTranslation();
    const [data, setData] = useState<UserStat[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [latestData, setLatestData] = useState<UserStat>()

    useEffect(() => {
        // load history
        axios.get<ApiResponse<UserStat[]>>("/api-next/analysis?after=0")
            .then(response => {
                // 按时间戳升序排列（旧 -> 新）
                const sortedData = response.data.data.sort((a, b) => a.timestamp - b.timestamp);


                // load latest
                axios.get<ApiResponse<UserStat>>("/api-next/analysis/now")
                    .then(response => {
                        const responseData = response.data.data
                        setLatestData(responseData)
                        setData([...sortedData, responseData])

                        setLoading(false);
                    })
                    .catch(err => {
                        console.error("API Error:", err);
                        setLoading(false);
                    });
            })
            .catch(err => {
                console.error("API Error:", err);
                setLoading(false);
            });
    }, []);

    const formatTimestamp = (timestamp: number): string => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'Asia/Shanghai'
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div
                        className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-gray-700/30">
                        <div className="h-[600px] animate-pulse">
                            <div className="h-full bg-gray-700/30 rounded-xl"/>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="p-4 rounded-xl bg-gray-700/30 backdrop-blur-sm border border-gray-600/30"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="h-3 w-3 rounded-full bg-gray-600/50"/>
                                        <div className="space-y-2">
                                            <div className="h-4 bg-gray-600/50 rounded w-24"/>
                                            <div className="h-6 bg-gray-600/50 rounded w-12"/>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!data?.length) {
        return (
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center"
            >
                <div className="text-gray-400 text-xl">
                    {t('analysis.no-data') || 'No data available'}
                </div>
            </motion.div>
        );
    }

    const chartData: ChartData<'line'> = {
        labels: data.map((item) => formatTimestamp(item.timestamp)),
        datasets: [
            {
                label: t('analysis.current_users') || 'User Count',
                data: data.map((item) => item.userCount),
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointHoverBorderWidth: 2,
                pointHoverBackgroundColor: 'rgba(255, 255, 255, 0.8)',
                fill: false,
                animation: {
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            },
            {
                label: t('analysis.online_now') || 'Online Count',
                data: data.map((item) => item.onlineCount),
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2,
                borderDash: [5, 5],
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointHoverBorderWidth: 2,
                pointHoverBackgroundColor: 'rgba(255, 255, 255, 0.8)',
                fill: false,
            },
            {
                label: t('analysis.web_users') || 'Web Users',
                data: data.map((item) => item.webUserCount),
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointHoverBorderWidth: 2,
                pointHoverBackgroundColor: 'rgba(255, 255, 255, 0.8)',
                fill: false,
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'nearest',
            intersect: false
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#fff',
                    font: {
                        size: 14
                    },
                    usePointStyle: true,
                }
            },
            title: {
                display: true,
                text: t('analysis.title'),
                color: '#fff',
                font: {
                    size: 20,
                    weight: 600
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: 1,
                cornerRadius: 8,
                usePointStyle: true,
                callbacks: {
                    title: (context) => {
                        const rawData = data[context[0].dataIndex];
                        return rawData ? new Date(rawData.timestamp * 1000).toLocaleString() : '';
                    },
                    label: (context) => {
                        const label = context.dataset.label || '';
                        const value = context.parsed.y.toLocaleString();
                        return `${label}: ${value}`;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: '#fff',
                }
            },
            y: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: '#fff',
                }
            }
        }
    };

    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-6xl mx-auto">
                <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-gray-700/30">
                    <div className="h-[600px]">
                        <Line data={chartData} options={options}/>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <StatCard
                            label={t('analysis.current_users') || 'Current Users'}
                            value={latestData?.userCount || 0}
                            color="rgb(75, 192, 192)"
                        />
                        <StatCard
                            label={t('analysis.online_now') || 'Online Now'}
                            value={latestData?.onlineCount || 0}
                            color="rgb(153, 102, 255)"
                        />
                        <StatCard
                            label={t('analysis.web_users') || 'Web Users'}
                            value={latestData?.webUserCount || 0}
                            color="rgb(255, 159, 64)"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

const StatCard = ({label, value, color}: { label: string; value: number; color: string }) => (
    <motion.div
        whileHover={{scale: 1.03}}
        className="p-4 rounded-xl bg-gray-700/30 backdrop-blur-sm border border-gray-600/30"
    >
        <div className="flex items-center gap-3">
            <div
                className="h-3 w-3 rounded-full"
                style={{backgroundColor: color}}
            />
            <div>
                <p className="text-gray-400 text-sm">{label}</p>
                <p className="text-2xl font-bold text-white">{value.toLocaleString()}</p>
            </div>
        </div>
    </motion.div>
);

export default AnalysisPage;
