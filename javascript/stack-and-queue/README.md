# Stack and Queue
## Description
Implement a stack, queue, pseudoqueue, AnimalShelter, and validateBrackets.

[Solution link](./stack-and-queue.js)

## Whiteboard Process
![image](./Whiteboard.png)
![image](./Whiteboard2.png)
![image](./Whiteboard3.png)
![image](./Whiteboard4.png)

## Approach & Efficiency

**Stack**
* Start with a pointer value called top that is set to a new Node.
* push(value)
  * Have top.next set to a new node with the value.
  * Reassign top to the new node.
* pop()
  * Return the value of the top node.
  * Reassign top to be top.next.
* peek()
  * Return the value of the top node.
* isEmpty()
  * Check if the top node is null.

**Queue**
* Start with a pointer value called front and a pointer value called rear, pointing to a node.
* enqueue(value)
  * If front is null, set front to the new node and update rear.
  * Set rear.next to the new node.
  * Update rear to the new node.
* dequeue()
  * Return the node at the front.
  * Update front to front.next.
* peek()
  * Return the value of the node at the front.
* isEmpty()
  * Return if the front is null.

**PseudoQueue**
* We use one Stack to hold the nodes from the "front" of the queue. Then to get the "rear", we use a second auxilary Stack.
* enqueue(value)
  * We simply push the value into the front stack.
* dequeue()
  * While the front stack is not empty:
    * We pop the node from the front stack and push it into the rear stack.
  * We pop the top node from the rear stack and return that value.
  * While the rear stack is not empty:
    * We pop the node from the rear stack and push it back into the front stack.

**AnimalShelter**
* We extend the Queue to have modified functions for AnimalShelter.
  * enqueue(animal)
    * We simply reuse the original Queue's method with an Animal object.
  * dequeue(animal)
    * We iterate through the queue and dequeue an animal each time.
    * We see if the dequeued animal fits the preference passed in.
    * If it does, we break the loop and return the animal.
    * If it doesn't, we put the animal back into the queue and continue the loop.
    * If the preference is not found, we return null.

**validateBrackets**
* We use a Stack for this solution.
* First, we make sure to ignore all non-bracket characters.
* Second, we start iterating through the string.
* Third, we check if each character is a starting bracket.
  * If it is, we push it into the stack.
  * If it isn't, we check if it's a matching closing bracket.
    * If it isn't, we return false.
* If we go through the whole string without finding mismatched brackets, we return whether or not there are still elements in the stack.

**Efficiency**

Both Stacks and Queues and their operations are O(1) time/space complexity as we never traverse the entire Stack/Queue. Instead, our operations are handled by variables with constant values that do not scale depending on the input.

For the PseudoQueue, the enqueue operation is O(1) time/space complexity as we simply push the value into a Stack. However, the dequeue operation is O(N) time complexity and O(1) space complexity. It is O(N) time complexity because we have to pop out the entire front and rear stacks, while it is O(1) space complexity because we are not storing any data, simply moving it from stack to stack.

For the Animal shelter, the enqueue operation still remains remains O(1) time/space complexity as we're just reusing the parent Queue class's enqueue method. For the dequeue operation, it is O(N) time complexity because at worst case, we have to iterate through the whole queue. It is still O(1) space complexity however because we do not have any variables that scale with the size of the queue.

For the validateBracket function, we do iterate through the entire string no matter what. Therefore, the time complexity is O(N) as it scales with the input. The space complexity is O(n) as in the worst case, our stack might be as large as our input (for example, if we only have starting brackets).
