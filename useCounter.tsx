import { useState } from 'react'
// import { ICounter } from './type'

interface ICounter {
	/**
	 * A callback that will show current value.
	 */
	value: number
	/**
	 * A callback that will increase.
	 */
	increment: () => void
	/**
	 * A callback that will decrease.
	 */
	decrement: () => void
}

/**
 * A custom hook to use `counter` inside a React component
 */
export const useCounter = (): ICounter => {
	const [value, setValue] = useState(0)

	const increment = () => {
		setValue(value + 1)
	}

	const decrement = () => {
		setValue(value - 1)
	}

	return {
		value,
		increment,
		decrement,
	}
}
