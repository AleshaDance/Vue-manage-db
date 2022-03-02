<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <Chart type="bar" :data="multiAxisData" :options="multiAxisOptions"/>
  <Calendar v-model="calendarValue" selectionMode="range" />

</template>

<script>
import Chart from "primevue/chart";
import Calendar from "primevue/calendar"
export default {
  components: {
    Chart, Calendar
  },
  data() {
    return {
      calendarValue: null,
      multiAxisData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Dataset 1",
            backgroundColor: [
              "#EC407A",
              "#AB47BC",
              "#42A5F5",
              "#7E57C2",
              "#66BB6A",
              "#FFCA28",
              "#26A69A",
            ],
            yAxisID: "y-axis-1",
            data: [65, 59, 80, 81, 56, 55, 10],
          },
          {
            label: "Dataset 2",
            backgroundColor: "#78909C",
            yAxisID: "y-axis-2",
            data: [28, 48, 40, 19, 86, 27, 90],
          },
        ],
      },
      multiAxisOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
          tooltips: {
            mode: "index",
            intersect: true,
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#495057",
            },
            grid: {
              color: "#ebedef",
            },
          },
          y: {
            type: "linear",
            display: true,
            position: "left",
            ticks: {
              min: 0,
              max: 100,
              color: "#495057",
            },
            grid: {
              color: "#ebedef",
            },
          },
          y1: {
            type: "linear",
            display: true,
            position: "right",
            grid: {
              drawOnChartArea: false,
              color: "#ebedef",
            },
            ticks: {
              min: 0,
              max: 100,
              color: "#495057",
            },
          },
        },
      },
    };
  },
};
</script>
