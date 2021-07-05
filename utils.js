export default function makeOptionGetter (parameterObject) {
	return function (parameterName, defaultValue) {
		return parameterObject.hasOwnProperty(parameterName) ? parameterObject[parameterName] : defaultValue;
	}
}
