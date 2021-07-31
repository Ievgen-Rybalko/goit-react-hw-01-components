//import PropTypes from 'prop-types';
import styles from '../FriendsList.module.css';

const FriendsListItem = ({ id, name, avatar, isOnLine }) => {
  return (
    <li key={id} className={styles.item}>
      {isOnLine && <span className={styles.online}>.....</span>}
      {!isOnLine && <span className={styles.offline}>.....</span>}
      <img
        className={styles.avatar}
        src={avatar}
        alt={'Image of' + { name }}
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendsListItem;

// FriendsListItem.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       avatar: PropTypes.string,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       id: PropTypes.number.isRequired,
//     }),
//   ),
// };
