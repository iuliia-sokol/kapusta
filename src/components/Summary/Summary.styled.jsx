import styled from 'styled-components';

export const SummaryList = styled.ul`
  padding: 0;
  margin: 0;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  overflow: hidden;
  list-style: none;
  flex-direction: column;
  gap: 2px;
  width: 213px;

  @media screen and (min-width: 768px) {
  }
`;

export const SummaryTitle = styled.li`
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 14px;
  letter-spacing: 0.02em;
  margin-bottom: 2px;
  color: ${p => p.theme.colors.PrimaryBlack};
  background-color: ${p => p.theme.colors.BgGray};
`;

export const SummaryItems = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  height: 38px;
  border-top: 2px solid #ffffff;
  color: ${p => p.theme.colors.PrimaryBlack};
  background-color: ${p => p.theme.colors.BgGray};
  &:last-child {
    border-bottom-right-radius: 30px;
  }
`;

export const SummaryText = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
`;
