import Income from 'components/Income/Income';
import Expenses from 'components/Expenses/Expenses';
import { useState, useEffect } from 'react';
import styledComponents from 'components/Expenses/styleExpenses';
import { useSelector, useDispatch } from 'react-redux';
import { getStatistics } from 'redux/statistics/statsOperations';
import { BackLink } from 'components/BackLink/BackLink';


const { BoxStats } = styledComponents;

const Statistics = () => {

  const token = useSelector(state => state.auth.token);
  const period = useSelector(state => state.statistics.period);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatistics({ token, period }));
  }, [dispatch, period, token]);

  const [toggleStats, setToggleStats] = useState(false);
  const onClick = () => {
    setToggleStats(prev => !prev);
  };

  return (
    <>
      <BoxStats>
        <BackLink />
        {toggleStats ? (
          <Income onClick={onClick} />
        ) : (
          <Expenses onClick={onClick} />
        )}
      </BoxStats>
    </>
  );
};

export default Statistics;
