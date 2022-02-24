function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

function renderAlerts(color, backgroundColor, alert) {
  return `<p class="alert" style="color:${color}; background-color:${backgroundColor}">
    ${alert}
    </p>`;
}

export default class Alert {
  constructor(path, targetHTML) {
    this.path = path;
    this.targetHTML = targetHTML;
  }

  async init() {
    let alerts = await this.readAlerts();

    if (alerts !== false) {
      const alertSection = document.createElement("section");

      let finishedRender = "";

      alerts.forEach((alert) => {
        let renderedAlert = renderAlerts(
          alert.color,
          alert.backgroundColor,
          alert.message
        );

        finishedRender = finishedRender.concat(renderedAlert);
      });
      alertSection.innerHTML = finishedRender;
      document.querySelector(this.targetHTML).prepend(alertSection);
    }
  }

  getData() {
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => data);
  }

  async readAlerts() {
    const alerts = await this.getData();

    if (Object.keys(alerts).length === 0) {
      return false;
    } else {
      return alerts;
    }
  }
}

// Example of what the json file would look like:
// [
//   {
//     "message": "This is only a test",
//     "backgroundColor": "darkblue",
//     "color": "white"
//   }
// ]
