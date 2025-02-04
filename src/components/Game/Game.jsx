import { useState } from 'react'
import GameLayout from './GameLayout.jsx'
import styles from './Game.module.css'

// Возможные выигрышные комбинации (индексы клеток)
const WIN_PATTERNS = [
  [0, 1, 2], // Горизонтали
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // Вертикали
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // Диагонали
  [2, 4, 6],
]

export default function Game() {
  // Состояния
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [isGameEnded, setIsGameEnded] = useState(false)
  const [isDraw, setIsDraw] = useState(false)
  const [field, setField] = useState(Array(9).fill(''))

  // Проверка победы
  function checkWin(arr, player) {
    return WIN_PATTERNS.some(pattern =>
      pattern.every(index => arr[index] === player),
    )
  }

  // Клик по конкретной клетке
  function handleCellClick(index) {
    // Если игра окончена или клетка уже занята, выходим
    if (isGameEnded || field[index] !== '') return

    const newField = [...field]
    newField[index] = currentPlayer
    setField(newField)

    // Проверяем победу
    if (checkWin(newField, currentPlayer)) {
      setIsGameEnded(true)
      return
    }

    // Проверяем ничью (если нет ни одной пустой клетки)
    if (!newField.includes('')) {
      setIsDraw(true)
      setIsGameEnded(true)
      return
    }

    // Переключаем ход
    setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X')
  }

  // Начать заново
  function handleRestart() {
    setCurrentPlayer('X')
    setIsGameEnded(false)
    setIsDraw(false)
    setField(Array(9).fill(''))
  }

  return (
    <div className={styles.gameContainer}>
      <GameLayout
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
        field={field}
        onCellClick={handleCellClick}
        onRestart={handleRestart}
      />
    </div>
  )
}
