let mySet = []

//Adds calue to set
function myset_add(data, new_value) {
  if(!myset_forEach(data, myset_has(data, new_value))) {
    data.push(new_value)
  }
}

//Removes value from set
function myset_remove(data, remove_value) {
  let i= index_of(data, remove_value)
  data.splice(i,1)
}

// Return true if test_value is in the set, false otherwise
function myset_has(data, test_value) {
  for(let i=0; i<data.length; i++){
    if (data[i]===test_value){
  return true}
} return false
  }


function myset_size(data) {
  return data.length
}

//ForEach loop
function myset_forEach(data, callback_function) {
  for(let i = 0; i < data.length; i++) {

    if(callback_function)
      return true
  }
  return false
}

//Gives back index of value in set
function index_of(data, ping_value){
  for(let i=0; i<data.length; i++){
    if(data[i]===ping_value){
      return i
    }
  }
}

//Examples using the functions
myset_add(mySet, 'hi')
myset_add(mySet, 'no')
myset_add(mySet, 'no')
myset_remove(mySet, 'no')

console.log(mySet)
