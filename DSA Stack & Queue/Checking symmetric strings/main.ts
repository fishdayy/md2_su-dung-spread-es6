import {Stack} from "./Stack";
import {Queue} from "./Queue";

function checkSymmetricStrings(s) {
    let stack = new Stack<string>(s)
    let queue = new Queue<string>(s)

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        queue.enqueue(s[i]);
    }

    if (stack.pop() == queue.dequeue()) {
        return 'symmetric'
    } else {
        return 'not symmetric'
    }
}

console.log(checkSymmetricStrings("aaaaaaa"))
