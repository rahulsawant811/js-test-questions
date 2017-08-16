#Lesson 4 - Couting Elements - MissingInteger

#Task description

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

For another example, given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.

#Code:

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)

    var map = {};
    var min = 1;

    for(var i=0; i<A.length; i++) {
        if(A[i] > 0) {
            map[A[i]] = true;
        }
    }

    if(!map[min]) return 1;

    while(map[min]) min++;

    return min;

}
