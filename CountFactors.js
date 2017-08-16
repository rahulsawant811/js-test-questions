Lesson 10 - Prime and composite numbers - CountFactors

Task description

A positive integer D is a factor of a positive integer N if there exists an integer M such that N = D * M.

For example, 6 is a factor of 24, because M = 4 satisfies the above condition (24 = 6 * 4).

Write a function:

function solution(N);

that, given a positive integer N, returns the number of its factors.

For example, given N = 24, the function should return 8, because 24 has 8 factors, namely 1, 2, 3, 4, 6, 8, 12, 24. There are no other factors of 24.

Assume that:

N is an integer within the range [1..2,147,483,647].
Complexity:

expected worst-case time complexity is O(sqrt(N));
expected worst-case space complexity is O(1).

Code:

function solution(N) {
    // write your code in JavaScript (Node.js 4.0.0)

    var counter = 0;
    var limit = parseInt(Math.sqrt(N));

    for(var i=1; i<=limit; i++) {
        if(N%i === 0) {
            counter++;
            var factor = N/i;
            if(factor !== i) {
                counter++;
            }
        }
    }

    return counter;
}