exports.makeOptionGetter = function(parameterObject) {
	return function (parameterName, defaultValue) {
		return parameterObject.hasOwnProperty(parameterName) ? parameterObject[parameterName] : defaultValue;
	}
}
