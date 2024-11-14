import axios from 'axios';

axios.defaults.baseURL = 'https://virtserver.swaggerhub.com/SARATHI17/API/1.0.0/';



axios.defaults.headers.common["Authorization"] = `Bearer ${sessionStorage.getItem('token')}`

// let token=null;
// function setToken(value) {
//     axios.defaults.headers.common["Authorization"] = `Bearer ${value}`
//     token=value
// }


export default class Api {

    // dashboard metrics
    static dashboardMetrics = async () => {
        try {
            const res = await axios.post('dashboard/metrics');
            return res.data;
        } catch (error) {
            return error.data;
        }
    }

    // profitable strategies
    static profitableStrategies = async () => {
        try {
            const res = await axios.post('metrics/strategies');
            return res.data;
        } catch (error) {
            return error.data;
        }
    }

    // strategies me
    static strategiesMe = async () => {
        try {
            const res = await axios.post('strategies');
            return res.data;
        } catch (error) {
            return error.data;
        }
    }

    // strategies me
    static marketPlace = async () => {
        try {
            const res = await axios.post('marketplace');
            return res.data;
        } catch (error) {
            return error.data;
        }
    }

    // pending
    static pending = async () => {
        try {
            const res = await axios.post('dashboard/pending');
            return res.data;
        } catch (error) {
            return error.data;
        }
    }

    // profile
    static profile = async () => {
        try {
            const res = await axios.post('profile');
            return res.data;
        } catch (error) {
            return error.data;
        }
    }

    // pnl chart
    static pnlChart = async () => {
        try {
            const res = await axios.post('dashboard/pnlboard');
            return res.data;
        } catch (error) {
            return error.data;
        }
    }
}