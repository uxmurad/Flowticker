// BarChart.js
import {useEffect, useState} from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import Api from "../../api/api.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = () => {

    const [labels, setLabels] = useState([]);
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        getPNLData();
    }, []);

    async function getPNLData() {
        try {
            let res = await Api.pnlChart();
            const labelsArray = res?.data?.map(item => item?.run_date);  // extract run_date for labels
            const datasArray = res?.data?.map(item => parseFloat(item?.overall_pnl)); // convert overall_pnl to numbers for datas

            console.log("Labels: ",labelsArray)
            console.log("data: ",datasArray)

            setLabels(labelsArray);
            setDatas(datasArray);
        } catch (error) {
            alert("Error while fetching PNL chart data");
        }
    }

    const data = {
        labels: labels?labels:['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Sales',
                data: datas?datas:[12, 19, 3, 5, 2, 3],
                backgroundColor: '#FFC834',
                borderColor: '#FFC834',
                borderWidth: 0,
                borderRadius: 6,
                maxBarThickness:24,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio:true,
        aspectRatio:  1 / .4,
        plugins: {
            legend: {
                position: 'top',
                display: false
            },
            title: {
                display: false,
                text: 'Monthly Sales Data',
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    display: true,
                },
            },
            y: {
                grid: {
                    display: true,
                    drawBorder: true,
                    color: '#F6F6F5'
                },
                ticks: {
                    display: true,
                },
            }
        }
    };

    return <Bar data={data} options={options} />;
};

export default BarChart;
