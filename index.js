function rentPrice(days) {
	if (days <= 3) {
		return days * 25;
	} else if (days > 3 && days <= 7) {
		return 3 * 25 + (days - 3) * 20;
	} else  {
		return 3 * 25 + 4 * 20 + ((days - 7) * 15);
	}
}

module.exports = rentPrice;