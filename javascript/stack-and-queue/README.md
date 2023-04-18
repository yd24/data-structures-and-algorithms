# Stack and Queue
## Description
Implement a stack and a queue.

[Solution link](./stack-and-queue.js)

## Whiteboard Process
![image](./Whiteboard.png)

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

**Efficiency**

Both Stacks and Queues and their operations are O(1) time/space complexity as we never traverse the entire Stack/Queue. Instead, our operations are handled by variables with constant values that do not scale depending on the input.

