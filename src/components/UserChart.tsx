import { Group } from '@visx/group';
import { scaleLinear } from '@visx/scale';
import { Point } from '@visx/point';
import { Line, LineRadial } from '@visx/shape';
import {ComponentsTypes} from "../types";
import {ChartConsts} from "../consts";
import {chartHelper} from "../helpers";


const UserChart = ({ width, height, levels = 5, margin = ChartConsts.defaultMargin }: ComponentsTypes.TUserChart) => {
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;
    const radius = Math.min(xMax, yMax) / 2;

    const radialScale = scaleLinear<number>({
        range: [0, Math.PI * 2],
        domain: [ChartConsts.degrees, 0],
    });

    const yScale = scaleLinear<number>({
        range: [0, radius],
        domain: [0, Math.max(...ChartConsts.data.map(chartHelper.y))],
    });

    const webs = chartHelper.genAngles(ChartConsts.data.length);
    const points = chartHelper.genPoints(ChartConsts.data.length, radius);
    const polygonPoints = chartHelper.genPolygonPoints(ChartConsts.data,
        (d) => yScale(d) ?? 0, chartHelper.y);
    const zeroPoint = new Point({ x: 0, y: 0 });

    return width < 10 ? null : (
        <svg width={width} height={height}>
            {/*<rect fill={ChartConsts.background} width={width} height={height} rx={14} />*/}
            <Group top={height / 2 - margin.top} left={width / 2}>
                {/* Построение сетки/паутины с количеством секций равным уровню [level = 5]*/}
                {[...new Array(levels)].map((_, i) => (
                    <LineRadial
                        key={`web-${i}`}
                        data={webs}
                        angle={(d) => radialScale(d.angle) ?? 0}
                        radius={((i + 1) * radius) / levels}
                        fill="none"
                        stroke={ChartConsts.wire}
                        strokeWidth={2}
                        strokeOpacity={0.8}
                        strokeLinecap="round"
                    />
                ))}
                {/* Построение линий от центра к углам */}
                {ChartConsts.data.map((_, i) => (
                    <>
                        <Line key={`radar-line-${i}`} from={zeroPoint} to={points[i]} stroke={ChartConsts.wire} />
                        <text
                            x={points[i].x}
                            y={points[i].y}
                            fill={ChartConsts.pumpkin}
                            fontWeight={600}
                        >{i+1}</text>
                    </>
                ))}
                {/* Заполнение полигонов между точками*/}
                <polygon
                    points={polygonPoints.pointString}
                    fill={ChartConsts.pumpkin}
                    fillOpacity={0.3}
                    stroke={ChartConsts.pumpkin}
                    strokeWidth={1}
                />
                {/* Расстановка точек */}
                {polygonPoints.points.map((point, i) => (
                    <circle
                        key={`radar-point-${i}`}
                        cx={point.x}
                        cy={point.y}
                        r={4}
                        fill={ChartConsts.pumpkin}
                        className="relative"
                    />
                ))}

            </Group>
        </svg>
    );
}

export {UserChart}