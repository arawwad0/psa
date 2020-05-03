import axios from "axios";

const instance = axios.create({
  baseURL: "https://poc-api-abdallah.herokuapp.com/",
});

const fetchStats = () => instance.get("/stats");
const fetchReports = (params = {}) =>
  instance.get("/reports", {
    params,
  });

export { fetchStats, fetchReports };
