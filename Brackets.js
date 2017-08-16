Lesson 7 - Stacks and Queues - Brackets

Task description

A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

S is empty;
S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]"", the function should return 0, as explained above.

Assume that:

N is an integer within the range [0..200,000];
string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N) (not counting the storage required for input arguments).

Code:

function solution(S) {
    // write your code in JavaScript (Node.js 4.0.0)

    var i = 0;
    var stack = [];

    if(S.length % 2 === 1) {
        return 0;
    }

    for(i=0; i<S.length; i++) {
        var char = S.charAt(i);
        if(isOpener(char)) {
            stack.push(char);
        } else {
            if(stack.length === 0) {
                return 0;
            } else {
                var lastChar = stack.pop();
                if(!checkCloser(lastChar, char)) {
                    return 0;
                }
            }
        }
    }

    if(stack.length === 0) {
        return 1;
    } else {
        return 0;
    }
}

function isOpener(char) {
    return char === '{' || char === '[' || char === '(' ? true : false;
}

function checkCloser(opener, closer) {
    if(opener === '(' && closer === ')') return true;
    if(opener === '[' && closer === ']') return true;
    if(opener === '{' && closer === '}') return true;

    return false;
}
