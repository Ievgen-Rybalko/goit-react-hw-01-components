import FriendsListItem from './FriendsListItem/FriendsListItem';
import PropTypes from 'prop-types';
import defaultImage from '../../images/default.jpg';
import styles from './FriendsList.module.css';

const FriendsList = ({ friends }) => (
  <div className={styles.container}>
    <ul className={styles.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsListItem
          avatar={avatar}
          name={name}
          id={id}
          isOnLine={isOnline}
        />
      ))}
    </ul>
  </div>
);

FriendsList.defaultProps = {
  avatar: defaultImage,
};
//kglgggiu
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendsList;
