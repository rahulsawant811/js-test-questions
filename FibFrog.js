Lesson 13 - Fibonacci numbers - FibFrog

Task description

The Fibonacci sequence is defined using the following recursive formula:

    F(0) = 0
    F(1) = 1
    F(M) = F(M - 1) + F(M - 2) if M >= 2
A small frog wants to get to the other side of a river. The frog is initially located at one bank of the river (position −1) and wants to get to the other bank (position N). The frog can jump over any distance F(K), where F(K) is the K-th Fibonacci number. Luckily, there are many leaves on the river, and the frog can jump between the leaves, but only in the direction of the bank at position N.

The leaves on the river are represented in a zero-indexed array A consisting of N integers. Consecutive elements of array A represent consecutive positions from 0 to N − 1 on the river. Array A contains only 0s and/or 1s:

0 represents a position without a leaf;
1 represents a position containing a leaf.
The goal is to count the minimum number of jumps in which the frog can get to the other side of the river (from position −1 to position N). The frog can jump between positions −1 and N (the banks of the river) and every position containing a leaf.

For example, consider array A such that:

    A[0] = 0
    A[1] = 0
    A[2] = 0
    A[3] = 1
    A[4] = 1
    A[5] = 0
    A[6] = 1
    A[7] = 0
    A[8] = 0
    A[9] = 0
    A[10] = 0
The frog can make three jumps of length F(5) = 5, F(3) = 2 and F(5) = 5.

Write a function:

function solution(A);

that, given a zero-indexed array A consisting of N integers, returns the minimum number of jumps by which the frog can get to the other side of the river. If the frog cannot reach the other side of the river, the function should return −1.

For example, given:

    A[0] = 0
    A[1] = 0
    A[2] = 0
    A[3] = 1
    A[4] = 1
    A[5] = 0
    A[6] = 1
    A[7] = 0
    A[8] = 0
    A[9] = 0
    A[10] = 0
the function should return 3, as explained above.

Assume that:

N is an integer within the range [0..100,000];
each element of array A is an integer that can have one of the following values: 0, 1.
Complexity:

expected worst-case time complexity is O(N*log(N));
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.

Code:

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)

    var fib = [];
    var N = A.length+1;
    var i = 1;
    var steps = [];
    var arr = [];

    arr[0] = 1;
    for(i=1; i<=A.length; i++) {
        arr[i] = A[i-1];
    }

    //console.log('arr:', arr);

    if(N < 3) {
        return 1;
    }

    fib[0] = 0;
    fib[1] = 1;

    i = 1;

    while(fib[i++] < N) {
        fib[i] = fib[i-1] + fib[i-2];
    }

    steps[0] = 1;
    for(i=1; i<=N; i++) {
        steps[i] = 0;
    }

    var base = 0;
    var nextBase = 1;
    i = 2;

    var result = -1;

    //console.log('fib:', fib);

    while(i < fib.length && base <= N) {
        var nextPos = base + fib[i];

        //console.log('>>> N, base, nextPos, steps:', N, base, nextPos, steps);

        if(steps[base] === 0) {
            base++;
        } else if(nextPos > N) {
            base++;
            i = 2;
        } else {
            if(nextPos === N) {
                if(base === 0) {
                    return 1;
                } else {
                    if(result < 0) {
                        result = steps[base] + 1;
                    } else {
                        result = Math.min(result, steps[base] + 1);
                    }
                }
            } else if(arr[nextPos] === 1) {
                if(steps[nextPos] === 0) {
                    if(base === 0) {
                        steps[nextPos] = 1;
                    } else {
                        steps[nextPos] = steps[base] + 1;
                    }
                } else {
                    steps[nextPos] = Math.min(steps[nextPos], steps[base] + 1);
                }
            }

            i++;
        }

        //console.log('base, nextPos, steps:', base, nextPos, steps);
    }

    return result;
}
