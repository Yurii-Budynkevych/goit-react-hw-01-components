import PropTypes from 'prop-types';
import { Title, StatSection, List } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatSection>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(el => (
          <li key={el.id}>
            <span>{el.label} - </span>
            <span>{el.percentage}%</span>
          </li>
        ))}
      </List>
    </StatSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
