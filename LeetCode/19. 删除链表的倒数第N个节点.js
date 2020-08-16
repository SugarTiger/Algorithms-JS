
// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    var i = 0;
    var sHead = head;
    var current = head;
    while (head) {
        if (i >= n) {
            current = current.next;
        }
        head = head.next;
        i++;
    }
    current.val = current.next ? current.next.val : null;
    current.next = current.next ? current.next.next : null;
    return sHead;
};

removeNthFromEnd(new ListNode(1), 1)