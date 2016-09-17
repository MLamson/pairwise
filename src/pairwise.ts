export class checkPairsForSum {
    static loopThroughArray(array, number) {

        if (array.length === 0) {
            return 0;
        }

        var indices = 0;

        for (var i = 0; i < array.length; i++) {

            for (var j = i + 1; j < array.length; j++) {

                if (this.numbersEqualSum(array, i, j, number)){
                    indices += (i + j);
                    j++;
                    i++;
                }

            }

        }
        return indices;

    };

    private static numbersEqualSum(array, i: number, j: number, number) {
        return array[i] + array[j] === number;
    }
}