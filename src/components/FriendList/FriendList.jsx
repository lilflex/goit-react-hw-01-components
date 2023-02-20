import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <section className={css.friends}>
      <ul className={css.friend__list}>
        <FriendListItem friends={friends} />
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};