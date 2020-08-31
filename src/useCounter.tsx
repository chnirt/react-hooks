import { useState } from 'react'
import { ICounter } from './typings'

/**
 * A custom hook to use `counter` inside a React component
 */
export const useCounter = (): ICounter => {
	const [value, setValue] = useState(0)

	const increment = () => {
		setValue(value + 1)
	}

	/**
	 * 🥡
	 */
	const decrement = () => {
		setValue(value - 1)
	}

	return {
		value,
		increment,
		decrement,
	}
}
