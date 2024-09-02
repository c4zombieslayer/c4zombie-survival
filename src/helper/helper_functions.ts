// Helper functions for general use.


/**
 * Clamps value to the given range.
 * 
 * @param value     The value which is being clamped.
 * @param min       The minimum value which can be returned.
 * @param max       The maximum value which can be returned.
 * @returns         The clamped value.
 */
export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}


/**
 * Interpolates the current value towards goto by a specified amount.
 * 
 * @param current   The current value.
 * @param goto      The value to move towards.
 * @param amount    The decimal amount to interpolate by.
 * @returns         The interpolated value.
 */
export function lerp(current: number, goto: number, amount: number): number {
    return current + amount * (goto - current);
}


/**
 * Interpolates the current value towards goto by a specified amount, and will teleport to goto if within tp range.
 * 
 * @param current   The current value.
 * @param goto      The value to move towards.
 * @param amount    The decimal amount to interpolate by.
 * @param tp        The decimal range in which teleportation should occur.
 * @returns         The interpolated value.
 */
export function tpLerp(current: number, goto: number, amount: number, tp: number): number {
    let lerped: number = current + amount * (goto - current);
    return Math.abs(lerped - current) <= tp ? goto : lerped;
}


/**
 * Gets a random value from a given array.
 * 
 * @param array The array to get a random value from.
 * @returns     The random value.
 */
export function getRandomElementFromArray(array: any[]): any {
    return array[Math.floor(Math.random() * array.length)];
}
