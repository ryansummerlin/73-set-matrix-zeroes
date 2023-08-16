// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.


// This is the first matrix problem I've worked through and I was able to get it done without any outside assistance.
// However, my time complexity is atrocious (basically O(m^2 * n^2)). Space complexity is not much better at
// O(m * n). I'm going to work through another potential solution but might have to go to youtube for a more optimal solution.

var setZeroes = function(matrix) {
    let hash = new Map();

    const setToZero = function(i, j) {
        for (let k = 0; k < matrix[i].length; k++) {
            if (matrix[i][k] !== 0) {
                matrix[i][k] = 0;
                hash[[i, k]] = true;
            }
        }

        for (let k = 0; k < matrix.length; k++) {
            if (matrix[k][j] !== 0) {
                matrix[k][j] = 0;
                hash[[k, j]] = true;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0 && !hash[[i, j]]) {
                setToZero(i, j);
            }
        }
    }
};
