// Helper functions for general use.

/*
    Clamps value to the given range.

    @param value    The value which is being clamped.
    @param min      The minimum value which can be returned.
    @param max      The maximum value which can be returned.

    @return         The clamped value.
*/
export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}


/*
    Interpolates the current value towards goto by a specified amount.

    @param current  The current value.
    @param goto     The value to move towards.
    @param amount   The decimal amount to interpolate by.

    @return         The interpolated value.
*/
export function lerp(current, goto, amount) {
    return current + amount * (goto - current);
}


/*
    Interpolates the current value towards goto by a specified amount, and will teleport to goto if within tp range.

    @param current  The current value.
    @param goto     The value to move towards.
    @param amount   The decimal amount to interpolate by.
    @param tp       The decimal range in which teleportation should occur.

    @return         The interpolated value.
*/
export function tpLerp(current, goto, amount, tp) {
    let lerped = current + amount * (goto - current);
    return Math.abs(lerped - current) <= tp ? goto : lerped;
}


/*
    Gets a random value from a given array.

    @param array    The array to get a random value from.

    @return the random value.
*/
export function getRandomElementFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
