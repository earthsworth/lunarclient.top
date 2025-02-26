import {Line} from 'react-chartjs-2';
import {
    CategoryScale,
    Chart as ChartJS,
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// Define the data structure
interface UserStat {
    userCount: number;
    webUserCount: number;
    onlineCount: number;
    timestamp: number;
}

interface ApiResponse {
    code: number;
    data: UserStat[];
    message: string;
}

function AnalysisPage() {

    const { t } = useTranslation();

    const [data, setData] = useState<ApiResponse>({
        code: 200,
        data: [],
        message: "Request successful",
    })

    useEffect(() => {
        // load data
        axios.get<ApiResponse>("http://ws.lunarclient.top/api/analysis?after=0").then(response => {
            setData(response.data)
        }).catch(err => {
            console.error(err);
        })
    }, []);

    const formatTimestamp = (timestamp: number): string => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleTimeString();
    };

    const chartData = {
        labels: data.data.map((item) => formatTimestamp(item.timestamp)),
        datasets: [
            {
                label: 'User Count',
                data: data.data.map((item) => item.userCount),
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
            },
            {
                label: 'Online Count',
                data: data.data.map((item) => item.onlineCount),
                borderColor: 'rgba(153, 102, 255, 1)',
                fill: false,
            },
            {
                label: 'Web User Count',
                data: data.data.map((item) => item.webUserCount),
                borderColor: 'rgba(255, 159, 64, 1)',
                fill: false,
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: t('analysis.title'),
            },
        },
    };

    return (
        <div className="dark:text-white flex justify-center items-center">
            <div className={"w-6xl"}>
                <Line data={chartData} options={options}/>
            </div>
        </div>
    );
}

export default AnalysisPage;