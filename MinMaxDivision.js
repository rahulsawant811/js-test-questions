#Lesson 14 - Binary search algorithm - MinMaxDivision

#Task description

You are given integers K, M and a non-empty zero-indexed array A consisting of N integers. Every element of the array is not greater than M.

You should divide this array into K blocks of consecutive elements. The size of the block is any integer between 0 and N. Every element of the array should belong to some block.

The sum of the block from X to Y equals A[X] + A[X + 1] + ... + A[Y]. The sum of empty block equals 0.

The large sum is the maximal sum of any block.

For example, you are given integers K = 3, M = 5 and array A such that:

  A[0] = 2
  A[1] = 1
  A[2] = 5
  A[3] = 1
  A[4] = 2
  A[5] = 2
  A[6] = 2
The array can be divided, for example, into the following blocks:

[2, 1, 5, 1, 2, 2, 2], [], [] with a large sum of 15;
[2], [1, 5, 1, 2], [2, 2] with a large sum of 9;
[2, 1, 5], [], [1, 2, 2, 2] with a large sum of 8;
[2, 1], [5, 1], [2, 2, 2] with a large sum of 6.
The goal is to minimize the large sum. In the above example, 6 is the minimal large sum.

Write a function:

function solution(K, M, A);

that, given integers K, M and a non-empty zero-indexed array A consisting of N integers, returns the minimal large sum.

For example, given K = 3, M = 5 and array A such that:

  A[0] = 2
  A[1] = 1
  A[2] = 5
  A[3] = 1
  A[4] = 2
  A[5] = 2
  A[6] = 2
the function should return 6, as explained above.

Assume that:

N and K are integers within the range [1..100,000];
M is an integer within the range [0..10,000];
each element of array A is an integer within the range [0..M].
Complexity:

expected worst-case time complexity is O(N*log(N+M));
expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.

#Code:

function solution(K, M, A) {
    // write your code in JavaScript (Node.js 4.0.0)

    var sum = 0;
    var min = 0;
    var max = 0;
    var mid = 0;
    var i = 0;

    for(i=0; i<A.length; i++) {
        max += A[i];
        min = Math.max(min, A[i]);
    }

    if(K === 1) {
        return max;
    } else if(K >= A.length) {
        return min;
    }

    while(min <= max) {
        var temp = mid;
        mid = parseInt((max + min) / 2);

        if(mid === temp) {
            break;
        }

        var blocks = neededBlocks(A, mid);

        //console.log('max, min, mid, blocks, K:', max, min, mid, blocks, '<', K);

        if(blocks > K) {
            min = mid+1;
        } else {
            max = mid;
        }
    }

    return max;
}

function neededBlocks(arr, maxValue) {
    var count = 1;
    var sum = arr[0];

    for(var j=1; j<arr.length; j++) {
        if(sum + arr[j] > maxValue) {
            sum = arr[j];
            count++;
        } else {
            sum += arr[j];
        }
    }

    return count;
}
