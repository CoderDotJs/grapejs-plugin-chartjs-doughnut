/* global Chart */

import grapesjs from "grapesjs";
import addBlocks from "./addBlocks";
import { addComponents } from "./addComponents";
import { addTraits } from "./addTraits";

export default grapesjs.plugins.add("gjs-charts", (editor, opts = {}) => {
  const script = function (props) {
    if (props.data && props.data.labels) {
      const datasets = [];
      const colors = [
        "#0FC083",
        "#81D065",
        "#35ECB5",
        "#4FC3C7",
        "#A6CACB",
        "#EAFB86",
        "#F7BC24",
        "#EB6C99",
        "#8166AD",
        "#18A1AD",
        "#F1F1F1",
        "#87D5AE",
        "#85C1C8",
        "#4FC3C7",
        "#A6CACB",
        "#EAFB86",
        "#EB6C99",
        "#F7BC24",
        "#0FC083",
        "#8166AD",
        "#18A1AD",
        "#81D065",
        "#35ECB5",
        "#4FC3C7",
        "#A6CACB",
        "#EAFB86",
        "#F7BC24",
        "#EB6C99",
        "#8166AD",
      ];
      props.data?.values?.forEach((dataSet, i) => {
        datasets.push({
          label: dataSet.label,
          backgroundColor: colors,
          borderColor: colors,
          borderRadius: 2,
          data: dataSet.data,
          borderWidth: 1,
          borderSkipped: "start",
        });
      });

      const initLib = function () {
        var data = {
          labels: props.data.labels,
          datasets,
        };
        var options = {
          maintainAspectRatio: false,
          responsive: true,
          cutout: 100,
          plugins: {
            legend: {
              display: true,
              position: "bottom",
              labels: {
                boxWidth: 16,
                boxHeight: 16,
                usePointStyle: true,
                pointStyle: true,
                useBorderRadius: true,
                borderRadius: 100,
              },
            },
            datalabels: {
              display: false,
              color: "#2C5B60",
              anchor: "center",
              align: "center",
              offset: 6,
            },
            tooltip: {
              titleColor: "#fff",
              footerColor: "#fff",
              boxWidth: 0,
              boxHeight: 0,
              displayColors: false,
              callbacks: {
                title: (data) => {
                  const context = data[0];
                  return context.label;
                },
                footer: (data) => {
                  const context = data[0];
                  const sum = context.dataset.data.reduce(
                    (prev, curr) => prev + curr,
                    0
                  );
                  return `Total: ${sum}`;
                },
                label: (context) => {
                  const sum = context.dataset.data.reduce(
                    (prev, curr) => prev + curr,
                    0
                  );
                  let percentage = ((context.raw * 100) / sum).toFixed(1) + "%";
                  return `Amount: ${context.raw} (${percentage})`;
                },
                labelTextColor: function (context) {
                  return "#fff";
                },
              },
            },
          },
        };
        const element = document.getElementById(props.data.id);
        const canvas = element.querySelector(".chartsjs");
        element &&
          new Chart(canvas, {
            type: "doughnut",
            data: data,
            options: options,
          });
      };

      if (typeof someExtLib == "undefined") {
        // const dataLabels = document.createElement("script");
        // dataLabels.setAttribute("type", "text/javascript");
        // dataLabels.src =
        //   "https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.2.0";
        // dataLabels.onload = () => {
        const script = document.createElement("script");
        script.onload = initLib;
        script.setAttribute("type", "text/javascript");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js";
        document.body.appendChild(script);
        // };
        // document.body.appendChild(dataLabels);
      } else {
        initLib();
      }
    }
  };
  const config = {
    chartType: "gjs-charts-bar",
    chartScript: script,
    chartBlockName: "Doughnut Chart",
    ...opts,
  };
  addTraits(editor, config);
  addBlocks(editor, config);
  addComponents(editor, config);
});
