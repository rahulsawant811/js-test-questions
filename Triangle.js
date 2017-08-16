#Lesson 6 - Sorting - MinAvgTwoSlice

#Task description

A zero-indexed array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

A[P] + A[Q] > A[R],
A[Q] + A[R] > A[P],
A[R] + A[P] > A[Q].
For example, consider array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 20
Triplet (0, 2, 4) is triangular.

Write a function:

function solution(A);

that, given a zero-indexed array A consisting of N integers, returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.

For example, given array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 20
the function should return 1, as explained above. Given array A such that:

  A[0] = 10    A[1] = 50    A[2] = 5
  A[3] = 1
the function should return 0.

Assume that:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
Complexity:

expected worst-case time complexity is O(N*log(N));
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.

#Code:

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)

    if(A.length < 3) {
        return 0;
    }

    A.sort(function(a, b) {
        return a-b;
    });

    for(var i=2; i<A.length; i++) {
        if(validate(A[i-2], A[i-1], A[i])) {
            return 1;
        }
    }

    return 0;
}

function validate(val0, val1, val2) {
    var result = true;

    result = result && (val0 + val1 > val2);
    result = result && (val0 + val2 > val1);
    result = result && (val1 + val2 > val0);

    return result;
}
