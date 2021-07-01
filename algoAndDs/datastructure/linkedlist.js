function Node(data,next=null) {
	return {
		data,next
	}
}




class LinkedList {

	  constructor(){
		this.head = null;
		this.size = 0;
	  }

 insertAt(data) {
 	this.head = new Node(data, this.head);
	 this.size++;
 }

 printNode(){
	const data = [];
	 while(this.head!=null){
	 data.push(this.head.data);
		 this.head = this.head.next;
	 }
	 return data;
 }

insertLast(data) {
	if(this.head == null) {
		this.insertAt(data);
	} else {
		let current = this.head;
		while(current.next!=null){
			current = current.next;
		}
		const newNode = new Node(data,null);
		current.next = newNode;
		this.size++;
}}
insertIndex(data,index) {
	if (index == 0){
		this.insertAt(data);
		return;
	}

	let current = this.head, previous, count=0;
	while(count<index){
		previous = current;

		current = current.next;
		++count;
	}
	let newNode = new Node(data);
	previous.next = newNode;
	newNode.next = current;
	this.size++;
}

delete(index) {
	let current= this.head, previous, count=0;
	console.log('hello',current);
	if (index>this.size) {console.log('delete can not be complete');return;}
	if (index == 0) {
		this.head = this.head.next;
		this.size--;
		return;
	}
	while(count<index){
		console.log(current);
		previous = current;
		current = current.next;
		count++;
	}
	previous.next = current.next;
	this.size--;
}
deleteNode(node) {
	
	let current= this.head, previous, count=1;
	if ( node == 1) {

		this.head = this.head.next;
		this.size--;
		return;
	}
	while(count<node){
		console.log(current);
		previous = current;
		current = current.next;
		count++;
	}
	previous.next = current.next;
	this.size--;
}

}

	function addTwoNumber(l1,l2) {
		let l3=null, carry = 0;
		while(l1!=null || l2!=null) {
			let addedNumber = (l1 && l1.data ? l1.data : 0) + (l2 && l2.data ? l2.data : 0) + carry;
	console.log(`l1 data is ${l1.data} and l2 data is ${l2.data} and carry is ${carry}`);	
			let addedString = addedNumber.toString();
			if (addedString.length>1) {
				carry = parseInt(addedString[0]);
				addedNumber = parseInt(addedString[1]);
			} else {
				carry =0;
				addedNumber = parseInt(addedString);
				console.log('else number is', addedNumber);
			}
			l3 = new Node(addedNumber, l3);
			if (l1) l1 = l1.next;
			if (l2) l2=  l2.next;
		}
		if (carry !=0) {
			l3  = new Node(carry,l3);
		}
		return l3;

	}







function mergeTwoSortedAddress(l1,l2) {
	let sorted = null;
	while(l1!=null || l2!=null) {
		
		if(l1 && l2 && l1.data > l2.data) {
			sorted = new Node(l2.data, sorted);
			l2=l2.next
		} else if (l1 && l2 && l1.data < l2.data) {
			sorted = new Node(l1.data, sorted);
			l1=l1.next;
		} else {

			if (l1) {sorted = new Node(l1.data, sorted);l1= l1.next; }
			if (l2) {sorted = new Node(l2.data, sorted);l2 =l2.next;}
		}
	}
	return sorted;

}

function mergeKsorted(list) {
	let sorted = null;
	for (let i = 0;i<list.length;i++) {
		let temp = null;
		while(list[i]!=null || sorted!=null){
		console.log('list of data', list[i].data);
			console.log('list of sorted', sorted);
		if(list[i] && sorted && list[i].data > sorted.data) {
			temp = new Node(sorted.data, temp);
			sorted=sorted.next
		} else if (sorted && sorted && list[i].data < sorted.data) {
			sorted = new Node(list[i], temp);
			list[i]=list[i].next;
		} else {

			if (sorted) {temp = new Node(sorted.data, temp);sorted= sorted.next; }
			if (list[i]) {temp = new Node(list[i].data, temp);list[i] =list[i].next;}
		}
		}
		sorted = temp;	
	
	}
	return sorted;
}


function swapBetweenNode(list) {
	let current = list, 
		next = null, 
		previous = null,
		count=0;
	while(current!=null && count<333 ) {
		next = current.next;
		current.next= previous;
		previous=current;
		current=next;	
		count++;
	}
	let mergeLinkedList = new LinkedList();
	while(previous!=null){
		mergeLinkedList.insertLast(previous.data);
		previous=previous.next;
	}
	console.log(mergeLinkedList.head);
	while(current!=null){
		mergeLinkedList.insertLast(current.data);
		console.log(mergeLinkedList);
		current=current.next;
	}
	

	
	return mergeLinkedList.head.next; 
}


// [1,2,3,4,5] -> kthnode = head ==> 2
function rotateNode(list,k){
	console.log('here i am');
	let c=0;
	while(c < k) {		
		let current= list, kthnode=null,count=1;
		if (k == 0) return list;
		while(current!=null && count<1){
			current =current.next;
			count++; //
		}
		kthnode=current;
		while (current.next!=null){
			current =current.next;
		} // 5 come to tail

		current.next = list; // [5 --> 1,2,3,4,5]
	//console.log('crrent become circular loop',current);
		console.log('kth node', kthnode.next.next.next.next.next);
		list = kthnode.next;
	//console.log('list after node', list);
		kthnode.next= null;
	//console.log('list node', list);
		c++;
	}
	return list;
	
}


function swapPair(list){
	let current = list, previous=null,n=1;
	while(current!=0 && current.next!=0){
		if(n%2 == 0) {
			tmp=current.next || null;
			current.next= previous;
			previous.next= current;
			current = tmp; 	
			console.log('previous', previous.next);
			console.log('current', current);
			console.log('head', list);
			n++;
				
		} else {
			previous=current;
			current=current.next;
			n++
	
		}

	}

	console.log(list);
}

function rotateClockNode(list, k){
	let previous=null, current=list,c=0;
	if ( (!current && !current.next)) return list;
	if(k==0) return list;

	while(current.next!=null ){
		previous=current;
		current = current.next;
		
	}
	
	current.next=list;
	console.log(current);
	previous=null;
	while(current.next!=null && c<k){
		previous=current;
		current = current.next;
		c++;
	}
	previous.next=null;
	console.log('previous',previous);
	console.log('current',current);
	current.next=list;
	list=current;

	

	return list;
	
const sortedL2 = new LinkedList();
const sortedL1 = new LinkedList();
sortedL1.insertLast(1);
console.log('sorted l1', sortedL1.head);
sortedL2.insertLast(2);
//sortedL2.insertLast(3);
//sortedL2.insertLast(4);
//console.log('sorted L2', sortedL2);
//console.log(mergeTwoSortedAddress(sortedL1.head, sortedL2.head));
//console.log(mergeKsorted([sortedL1.head, sortedL2.head ]));
//console.log(sortedL1.head);
//console.log(swapBetweenNode(sortedL1.head));
//console.log(rotateClockNode(sortedL1.head,2))
//console.log(rotateNode(sortedL1.head,4));
//console.log(swapPair(sortedL1.head));
//console.log(removeElements(sortedL1.head, 7));
	console.log(isPalidrome(sortedL1.head));
