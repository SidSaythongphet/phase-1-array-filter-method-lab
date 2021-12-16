const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(collection, string) {
    const result = drivers.filter(collection => collection.toLowerCase() === string.toLowerCase())
    return result
}

function fuzzyMatch(collection, string) {
    const result = drivers.filter(drivers => drivers.startsWith(string))
    return result
}

const driverDirectory = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ]

function matchName(collection, string) {
    const result = driverDirectory.filter(collection => collection.name === string)
    return result
}