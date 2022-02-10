
import { loadHeaderFooter } from "./utils.js";
import Alert from "./alert.js";

loadHeaderFooter();

const alerts = new Alert("json/alert.json", "main");
alerts.init();
