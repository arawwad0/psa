import axios from "axios";

const instance = axios.create({
  baseURL: "https://poc-api-abdallah.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

const fetchStats = () => instance.get("/stats");
const fetchReports = (params = {}) =>
  instance.get("/reports", {
    params,
  });

const postReport = (params) => instance.post("/reports", params);

export { fetchStats, fetchReports, postReport };
