function analyzeBudget(prices, items, budget) {
	// Initialize the results
	let affordableItems = [];
	let totalAffordableCost = 0;
	let unaffordableCount = 0;

	// Iterate over the items
	for (let i = 0; i < items.length; i++) {
		if (prices[i] <= budget) {
			affordableItems.push(items[i]);
			totalAffordableCost += prices[i];
		} else {
			unaffordableCount++;
		}
	}

	// Print the results
	console.log(`Affordable items: ${affordableItems}`);
	console.log(`Total budget needed: ${totalAffordableCost}`);
	console.log(`Items out of budget: ${unaffordableCount}`);
}