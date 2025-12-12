enum orderStatus {
    PENDING = "Pending",
    SHIPPED = "Shipped",
    DELIVERED = "Delivered",
    CANCELLED = "Cancelled"
}

interface Order {
    id: number;
    customerName: string;
    status: orderStatus;
}

let order1: Order = {
    id: 1001,
    customerName: "Alice Johnson",
    status: orderStatus.PENDING
}

let order2: Order = {
    id: 1002,
    customerName: "Bob Smith",
    status: orderStatus.SHIPPED
}

let order3: Order = {
    id: 1003,
    customerName: "Carol Davis",
    status: orderStatus.DELIVERED
}

function displayOrderInfo(order: Order): void {
    console.log(`Order #${order.id} for ${order.customerName} is ${order.status}`); ;
}

displayOrderInfo(order1);
displayOrderInfo(order2);
displayOrderInfo(order3);
console.log(orderStatus.CANCELLED);
console.log(order2.status);