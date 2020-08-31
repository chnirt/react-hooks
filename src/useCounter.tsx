import React, { useState } from 'react'
import { ICounter } from './typings'

/**
 * A custom hook to use `counter` inside a React component
 */
export const useCounter = (): ICounter => {
	const [value, setValue] = useState<number>(0)

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

export const DOMCounter = () => {
	const { value, increment, decrement } = useCounter()

	return (
		<div>
			<h1>{value}</h1>
			<button onClick={increment}>+</button>
			<button onClick={decrement}>-</button>
		</div>
	)
}
