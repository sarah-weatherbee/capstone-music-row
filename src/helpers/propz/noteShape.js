import PropTypes from 'prop-types';

const noteShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  buildingId: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
});

export default { noteShape };
