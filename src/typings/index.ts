export interface ICounter {
	/**
	 * A callback that will show current value.
	 */
	value: number
	/**
	 * A callback that will increase.
	 * @param {String} identity - Identity
	 * @returns {String} token - Access token
	 */
	increment: () => void
	/**
	 * A callback that will decrease.
	 */
	decrement: () => void
}
