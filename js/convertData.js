let convertArr = (function(){
	let sort = function(data, type) {
		type = +type;
		switch (type) {
			case 0:
				data.sort(byField('id', 'ASC'));
				break;
			case 1:
				data.sort(byField('id', 'DESC'));
				break;
			case 2:
				data.sort(byField('name', 'ASC'));
				break;
			case 3:
				data.sort(byField('name', 'DESC'));
				break;
			case 4:
				data.sort(byField('date', 'ASC'));
				break;
			case 5:
				data.sort(byField('date', 'DESC'));
				break;
			default:
				return data;
		}
		return data;
	}

	let search = function(data, query) {
		query = query.toLowerCase();
		return data.filter(isPrime(query))
	}

	function byField(field, order = 'asc') {
		let x, y;
		order = order.toLowerCase();
		x = order == 'asc'? 1:-1;
		y = order == 'asc'? -1:1;
		return (a, b) => a[field] > b[field] ? x : y;
	}

	function isPrime(q){
		return (a) => a.name.toLowerCase().indexOf(q)>=0;
	}

	return {
		sort: sort,
		search: search
	}
}());