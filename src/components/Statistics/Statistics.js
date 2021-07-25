import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, userStats }) => {
  const itemQuantity = String(100 / userStats.length);
  const itemWidth = `${itemQuantity}%`;
  const randomColor = () => {
    let n = (Math.random() * 0x999999 * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

  return (
    <div className={styles.container}>
      <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.stat_list}>
          {userStats.map(({ id, label, percentage }) => (
            <li
              className={styles.item}
              key={id}
              style={{
                width: itemWidth,
                backgroundColor: randomColor(),
              }}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  userStats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,

  title: PropTypes.string,
};

export default Statistics;
