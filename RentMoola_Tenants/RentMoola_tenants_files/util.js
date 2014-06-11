function clear_form_elements(ele) {
	alert(ele);
	$(ele).find(':input').each(function() {
		switch (this.type) {
		case 'password':
		case 'select-multiple':
		case 'select-one':
		case 'text':
			$(this).val('');
			break;
		case 'textarea':
			$(this).val('');
			break;
		case 'checkbox':
		case 'radio':
			this.checked = false;
		}
	});
}

function Collection() {
	var collection = {};
	var order = [];

	this.add = function(property, value) {
		if (!this.exists(property)) {
			collection[property] = value;
			order.push(property);
		}
	}
	this.remove = function(property) {
		collection[property] = null;
		var ii = order.length;
		while (ii-- > 0) {
			if (order[ii] == property) {
				order[ii] = null;
				break;
			}
		}
	}
	this.toString = function() {
		var output = [];
		for ( var ii = 0; ii < order.length; ++ii) {
			if (order[ii] != null) {
				output.push(collection[order[ii]]);
			}
		}
		return output;
	}
	this.getKeys = function() {
		var keys = [];
		for ( var ii = 0; ii < order.length; ++ii) {
			if (order[ii] != null) {
				keys.push(order[ii]);
			}
		}
		return keys;
	}
	this.update = function(property, value) {
		if (value != null) {
			collection[property] = value;
		}
		var ii = order.length;
		while (ii-- > 0) {
			if (order[ii] == property) {
				order[ii] = null;
				order.push(property);
				break;
			}
		}
	}
	this.exists = function(property) {
		return collection[property] != null;
	}
}
