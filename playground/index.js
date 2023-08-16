'Omar'

"Omar"



const name = 'Leonidas'
const lastname = 'Esteban'

const fullname = `${name}${lastname}`

fullname.length
fullname.charAt(3)
const newName = fullname.replace('Leonidas', 'Rivaldo')

fullname.search()
fullname.toUpperCase()

if (name) {
	console.log('la condicion SI se cumplio')
} else {
	console.log ('La condicion NO se cumplio')
}

//falsy Vaules
Boolean()

//truthly Values
Boolean('leonidas')

const user = {
	name: 'Leonidas',
	lastname: 'Esteban'
}

user.name
user['name'] = 'lastname'

user[find] 

user.age = 30
user 

user.married = false
user 

user.course = {
	name: 'javascript',
	classes: 50
}

user.list = ['1', 2, null]


user.fullname = function() { return `${user.name} ${user.lastname}` }
user.fullname()
user.fullname = function() { return `${this.name} ${this.lastname}` }
user.fullname()


function isPrimeNumber(number) {
	for (let i = 2; i < number ; i = i + 1) {
		if(number % i === 0) {
			return false
		}
	}
	return number > 1
}

isPrimeNumber(10)

let primeNumberCountUnder1000 = 0
for (let i = 0; i < 1000; i = i + 1) {
	if (isPrimeNumber(i)) {
		primeNumberCountUnder1000 = primeNumberCountUnder1000 + 1
	}
}

primeNumberCountUnder1000//?