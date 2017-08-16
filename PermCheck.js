#Lesson 4 - Couting Elements - PermCheck

#Task description

A non-empty zero-indexed array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

function solution(A);

that, given a zero-indexed array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.

#Code:

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var control = new Array(A.length);
    var left = 0;

    //console.log('control:', control);

    for(var i=0; i<A.length; i++) {
        if(i===0) {
            left = A[i];
        }

        left = left < A[i] ? A[i] : left;
    }

    if(left !== A.length) {
        return 0;
    }

    for(var i=0; i<A.length; i++) {
        if(!control[A[i]-1]) {
            control[A[i]-1] = true;
            left--;
        }
    }

    //console.log('control, left:', control, left);

    return left === 0 ? 1 : 0;
}
