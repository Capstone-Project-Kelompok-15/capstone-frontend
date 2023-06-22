const handleDate = (days) => {
    const currentDate = new Date()
    const futureDate = new Date(currentDate.setDate(currentDate.getDate() + days)).toISOString()
    return futureDate
}

console.log(handleDate('365'));