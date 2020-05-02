import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3002",
});

const fetchStats = () => instance.get("/stats");
const fetchReports = (params = {}) =>
  instance.get("/reports", {
    params,
  });

export { fetchStats, fetchReports };
