import PropTypes from 'prop-types'
import FieldLayout from './FieldLayout.jsx'

export default function Field({ field, onCellClick, isGameEnded }) {
  return (
    <FieldLayout
      field={field}
      onCellClick={onCellClick}
      isGameEnded={isGameEnded}
    />
  )
}

Field.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCellClick: PropTypes.func.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
}
