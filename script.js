const btn = document.querySelector('button')
const inputDate = document.querySelector('.input-btn input')
const result = document.querySelector('p')

btn.addEventListener('click', () => {
    const dob = new Date(inputDate.value)
    const currentDate = new Date()

    const barthDetails = {
        date: dob.getDate(),
        month: dob.getMonth() + 1,
        year: dob.getFullYear()
    }
    const currentDateDetails = {
        date: currentDate.getDate(),
        month: currentDate.getMonth() + 1,
        year: currentDate.getFullYear()
    } 
    console.log(inputDate.value)
    if (inputDate.value === "" ) {
        alert('Enter Your DOB')
        return
    }
    yearDiff = currentDateDetails.year - barthDetails.year

    if (currentDateDetails.month >= barthDetails.month) {
        monDiff = currentDateDetails.month - barthDetails.month
    } else {
        yearDiff--
        monDiff = 12 + currentDateDetails.month - barthDetails.month
    }

    if (currentDateDetails.date >= barthDetails.date) {
        dayDiff = currentDateDetails.date - barthDetails.date
    } else {
        monDiff--
        lastMonthDay = (year, month) => { return new Date(year, month, 0).getDate() }
        dayDiff = lastMonthDay(barthDetails.year, barthDetails.month) + currentDateDetails.date - barthDetails.date
    }

    if (monDiff < 0) {
        yearDiff--
        monDiff = 11
    }
    result.innerHTML = `Your age is <span>${yearDiff}</span> Year , <span>${monDiff}</span> months and <span>${dayDiff}</span> days`
})