function sum(x, X, y, Y) {
	if (x > X || y > Y || x < 0 || y > 0) {
		return 1;
	}
	return 2;
}
module.exports = sum;
