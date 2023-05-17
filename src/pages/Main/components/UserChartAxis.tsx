import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";

const app: any = {};
type EChartsOption = echarts.EChartsOption;

const posList = [
  "left",
  "right",
  "top",
  "bottom",
  "inside",
  "insideTop",
  "insideLeft",
  "insideRight",
  "insideBottom",
  "insideTopLeft",
  "insideTopRight",
  "insideBottomLeft",
  "insideBottomRight",
] as const;

app.configParameters = {
  rotate: {
    min: -90,
    max: 90,
  },
  align: {
    options: {
      left: "left",
      center: "center",
      right: "right",
    },
  },
  verticalAlign: {
    options: {
      top: "top",
      middle: "middle",
      bottom: "bottom",
    },
  },
  position: {
    options: posList.reduce(function (map, pos) {
      map[pos] = pos;
      return map;
    }, {} as Record<string, string>),
  },
  distance: {
    min: 0,
    max: 100,
  },
};

app.config = {
  rotate: 90,
  align: "left",
  verticalAlign: "middle",
  position: "insideBottom",
  distance: 15,
};

type BarLabelOption = NonNullable<echarts.BarSeriesOption["label"]>;

const labelOption: BarLabelOption = {
  show: true,
  position: app.config.position as BarLabelOption["position"],
  distance: app.config.distance as BarLabelOption["distance"],
  align: app.config.align as BarLabelOption["align"],
  verticalAlign: app.config.verticalAlign as BarLabelOption["verticalAlign"],
  rotate: app.config.rotate as BarLabelOption["rotate"],
  formatter: "{c}  {name|{a}}",
  fontSize: 16,
  rich: {
    name: {},
  },
};

const option: EChartsOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    data: ["Планируемое", "Среднее", "Фактическое"],
  },
  toolbox: {
    show: true,
    orient: "vertical",
    left: "right",
    top: "center",
    feature: {
      dataView: {
        show: true,
        readOnly: false,
        title: "В текстовой форме",
        lang: [
          "Показатели продуктивности относительно время затрат (часов)",
          "Закрыть",
          "Обновить",
        ],
      },
      magicType: {
        show: true,
        type: ["line", "stack"],
        title: {
          line: "Линейная диаграмма",
          stack: "Поставить в одну колонку",
        },
      },
      restore: { show: true, title: "Вернуться к начальному виду" },
      saveAsImage: { show: true, title: "Скачать как изображение" },
    },
  },
  xAxis: [
    {
      type: "category",
      axisTick: { show: false },
      data: ["Проект 1", "Проект 2", "Проект 3", "Проект 4", "Проект 5"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "Планируемое",
      type: "bar",
      barGap: 0,
      label: labelOption,
      emphasis: {
        focus: "series",
      },
      data: [160, 160, 160, 160, 160],
    },
    {
      name: "Среднее",
      type: "bar",
      label: labelOption,
      emphasis: {
        focus: "series",
      },
      data: [134, 145, 127, 154, 167],
    },
    {
      name: "Фактическое",
      type: "bar",
      label: labelOption,
      emphasis: {
        focus: "series",
      },
      data: [98, 78, 120, 111, 114],
    },
  ],
};

const UserChartAxis = () => {
  return (
    <section className="bg-secondBg w-full h-fit rounded-lg flex items-center justify-center">
      <ReactEcharts
        option={option}
        style={{ height: `${400}px`, width: `100%` }}
      />
    </section>
  );
};

export { UserChartAxis };
