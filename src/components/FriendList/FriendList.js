import PropTypes from 'prop-types';
import defaultImage from '../../images/default.jpg';
import styles from './FriendsList.module.css';

const Friends = ({ friends }) => (
  <div className={styles.container}>
    <ul className={styles.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={styles.item}>
          {isOnline && <span className={styles.online}>.....</span>}
          {!isOnline && <span className={styles.offline}>.....</span>}
          <img
            className={styles.avatar}
            src={avatar}
            alt={'Image of' + { name }}
            width="48"
          />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  </div>
);

Friends.defaultProps = {
  avatar: defaultImage,
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default Friends;
