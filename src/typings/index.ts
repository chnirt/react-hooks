export interface ICounter {
	/**
	 * A callback that will show current value.
	 */
	value: number
	/**
	 * A callback that will increase.
	 *
	 * @returns {void} void - void
	 */
	increment: () => void
	/**
	 * A callback that will decrease.
	 *
	 * @returns {void} void - void
	 */
	decrement: () => void
}
