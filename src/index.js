// You should implement your task here.

module.exports = function towelSort(matrix) {
    // Return empty array if matrix is empty
    // or no params passed
    if (!matrix || matrix.length === 0) {
        return [];
    }
    // Create empty array
    let array = [];
    // Use callback function forEach
    // with index parameter
    matrix.forEach((element, index) => {
        // Add values to array based on conditions
        array =
            // Check if array is even
            index % 2 === 0
                ? // if even => link together to array the values without reversing
                  array.concat(element)
                : // if odd => reverse and link together to array the values
                  array.concat(element.reverse());
    });
    // Return array with changed order where necessary values
    return array;
};
