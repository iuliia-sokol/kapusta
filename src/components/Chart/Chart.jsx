import { useMediaQuery } from '@react-hook/media-query';
import { useSelector } from 'react-redux';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import { getLang } from 'redux/lang/langSelectors';
import { getMode } from 'redux/theme/themeSelector';

export const Chart = ({ data }) => {
  const lang = useSelector(getLang).lang;
  const mode = useSelector(getMode);

  const modeColor = mode.mode === 'light' ? '#52555F' : '#FFFFFF';

  const customLabelHorizontal = ({ x, y, width, value }) => {
    return lang === 'en' ? (
      <text
        x={x + width / 2}
        y={y}
        textAnchor="middle"
        dy={-6}
        style={{
          fill: modeColor,
        }}
      >
        {`${value} UAH`}
      </text>
    ) : (
      <text
        x={x + width / 2}
        y={y}
        textAnchor="middle"
        dy={-6}
        style={{
          fill: modeColor,
        }}
      >
        {`${value} ГРН`}
      </text>
    );
  };

  const customLabelVertical = ({ x, y, value }) => {
    return lang === 'en' ? (
      <text x={x} y={y} textAnchor="start" style={{ fill: modeColor }}>
        {`${value} UAH`}
      </text>
    ) : (
      <text x={x} y={y} textAnchor="start" style={{ fill: modeColor }}>
        {`${value} ГРН`}
      </text>
    );
  };

  const matches = useMediaQuery('only screen and (min-width: 420px)');

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        {matches ? (
          <BarChart
            layout="horizontal"
            data={data}
            margin={{ top: 30, right: 15, bottom: 15, left: 15 }}
            barCategoryGap={1}
          >
            <XAxis dataKey="name" type="category" />
            <CartesianGrid vertical={false} />
            <Bar
              dataKey="cost"
              fill="#FF751D"
              label={customLabelHorizontal}
              barSize={50}
              radius={[15, 15, 0, 0]}
            >
              {data.map((_, index) => {
                switch (index % 3) {
                  case 0:
                    return <Cell key={`cell-${index}`} fill="#FF751D" />;
                  case 1:
                  case 2:
                    return <Cell key={`cell-${index}`} fill="#FED9BF" />;
                  default:
                    return <Cell key={`cell-${index}`} fill="#FF751D" />;
                }
              })}
            </Bar>
          </BarChart>
        ) : (
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 15, right: 30, bottom: 15, left: 15 }}
            barCategoryGap={1}
          >
            <XAxis axisLine={false} type="number" hide />
            <YAxis dataKey="name" type="category" />
            <CartesianGrid vertical={false} />
            <Bar
              dataKey="cost"
              fill="#FF751D"
              label={customLabelVertical}
              barSize={20}
              radius={[0, 15, 15, 0]}
            >
              {data.map((_, index) => {
                switch (index % 3) {
                  case 0:
                    return <Cell key={`cell-${index}`} fill="#FF751D" />;
                  case 1:
                  case 2:
                    return <Cell key={`cell-${index}`} fill="#FED9BF" />;
                  default:
                    return <Cell key={`cell-${index}`} fill="#FF751D" />;
                }
              })}
            </Bar>
          </BarChart>
        )}
      </ResponsiveContainer>
    </>
  );
};
