import PropTypes from 'prop-types'
import styles from './Field.module.css'

export default function FieldLayout({ field, onCellClick, isGameEnded }) {
  return (
    <div className={styles.fieldContainer}>
      {field.map((cellValue, index) => (
        <button
          key={index}
          className={styles.cell}
          onClick={() => onCellClick(index)}
          disabled={cellValue !== '' || isGameEnded}
        >
          {cellValue}
        </button>
      ))}
    </div>
  )
}

FieldLayout.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCellClick: PropTypes.func.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
}
