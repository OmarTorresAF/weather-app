
const defaultDateOptions = {
	day: 'numeric',
	weekday: 'long',
	month: 'long',
}

const defaultTempOptions = {
	Celsius: 'Celsius'
}

export function formatDate(date, options = defaultDateOptions) {
	return new Intl.DateTimeFormat('es', options ).format(date)
}

export function formatTemp(value) { //, options = defaultTempOptions){
	return `${Math.floor(value)}°`
	// return `${value-}` new Intl.TempFormat('Celsius', options).format(temp)
}

export function formatWeeklyList (rawData) {
	
	// const = weekList = [[],[],[],[],[],[],[]]
	let dayList = []
	const weekList = []
	rawData.forEach((item, index) => {
		dayList.push(item)
		if ((index + 1) % 8 === 0){
			weekList.push(dayList)
			dayList = []
		}
	})
	return weekList

}