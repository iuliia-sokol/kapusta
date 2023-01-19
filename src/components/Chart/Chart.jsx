import styled from 'styled-components';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from 'recharts';

const Container = styled.div`
  padding: 40px;
  width: 800px;
  height: 300px;
`;

const customLabel = ({ x, y, width, value }) => {
  return (
    <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>
      {`${value} UAH`}
    </text>
  );
};
export const Chart = ({ data }) => {
  // console.log(data);
  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <CartesianGrid vertical={false} />
          <Bar dataKey="cost" fill="#FF751D" label={customLabel} />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};
