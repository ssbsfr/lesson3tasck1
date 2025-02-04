import React from 'react'
import PropTypes from 'prop-types'

import Information from '../Information/Information.jsx'
import Field from '../Field/Field.jsx'

export default function GameLayout({
  currentPlayer,
  isGameEnded,
  isDraw,
  field,
  onCellClick,
  onRestart,
}) {
  return (
    <div>
      <h1>Крестики-Нолики</h1>

      {/* Информация о состоянии игры */}
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />

      {/* Игровое поле */}
      <Field
        field={field}
        onCellClick={onCellClick}
        isGameEnded={isGameEnded}
      />

      {/* Кнопка «Начать заново» */}
      <button onClick={onRestart}>
        Начать заново
      </button>
    </div>
  )
}

GameLayout.propTypes = {
  currentPlayer: PropTypes.oneOf(['X', '0']).isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCellClick: PropTypes.func.isRequired,
  onRestart: PropTypes.func.isRequired,
}
