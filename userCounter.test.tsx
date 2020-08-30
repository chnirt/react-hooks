import { useCounter } from './useCounter'
import { render, screen, fireEvent } from '@testing-library/react'

it('renders with initial value of 0', () => {
	const counter = useCounter()

	expect(counter.value).toEqual(0)
})
