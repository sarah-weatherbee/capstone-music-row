import PropTypes from 'prop-types';

const buildingShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  mapViewBefore: PropTypes.string.isRequired,
  yearDemolished: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
});

export default { buildingShape };
