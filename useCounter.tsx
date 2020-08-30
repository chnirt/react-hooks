import React, { useState } from 'react'

export const useCounter = () => {
	const [value, setValue] = useState(0)

	const increment = () => {
		if (value >= 5) {
			return
		}
		setValue(value + 1)
	}

	return {
		value,
		increment,
	}
}
