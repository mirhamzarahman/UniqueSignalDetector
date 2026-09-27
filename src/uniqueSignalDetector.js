/**
 * UniqueSignalDetector
 *
 * Detects the single anomalous value among three redundant signals,
 * where exactly two values are identical.
 */

/**
 * Returns the unique signal.
 *
 * @param {number} firstSignal
 * @param {number} secondSignal
 * @param {number} thirdSignal
 * @returns {number}
 */
function detectUniqueSignal(firstSignal, secondSignal, thirdSignal) {
    if (firstSignal === secondSignal) {
        return thirdSignal;
    }

    if (firstSignal === thirdSignal) {
        return secondSignal;
    }

    return firstSignal;
}

// Example usage
const sensorReadings = [5, 7, 7];

const uniqueSignal = detectUniqueSignal(
    sensorReadings[0],
    sensorReadings[1],
    sensorReadings[2]
);

console.log("Detected Unique Signal:", uniqueSignal);

module.exports = detectUniqueSignal;
