// Part 1: Thinking Functionally


const arrayNumber =[5,25,65,85,65,85,25,62,35,65,125,186,152,325]

//Take an array of numbers and return the sum.

function sumArrayNumbers(arrayNumber) {
    let sum = 0; 
    arrayNumber.forEach(number => {
        sum = sum + number ;
    });
    return  sum 
}
console.log("array of numbers to work with \n") 
console.log(arrayNumber)
console.log("the sum of the array is :"  + sumArrayNumbers(arrayNumber))

console.log("\n")
//Take an array of numbers and return the average.
// I will use a function expression here and not the definition function
const averageArrayNumbers = function(arrayNumber){ 
    // we invoke the function sumaArrayNumbers declared previously 
    let sum = sumArrayNumbers(arrayNumber);
    return average = sum / arrayNumber.length ;    
}

console.log(`the average sum of the array of number
 is : ${averageArrayNumbers(arrayNumber)}`)
 console.log("\n")

 //Take an array of strings and return the longest string

 const stringArray = ["Samir","Luis","Micheal","Tishana","Sinchana","Nesta", "Manara"]

 // the task is not so specific , what if there are two longest stings with same length
 // that's why i will sort the array of string first and return the longest first string

 stringArray.sort();
 //sort first
 console.log("the array of string \n")
 console.log(stringArray)
 console.log("\n")
 // i will use the arrow function here 

 const longestStringInArray = (stringArray)=> {
         let longestString = "";
         stringArray.forEach(string => {
           longestString.length < string.length ? longestString = string : longestString; 
         })
         return longestString
 }

 console.log('Longest string is ;' + longestStringInArray(stringArray))
 console.log("\n")

//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
 console.log(`Take an array of strings, and a number and return an array of the strings that are longer than the given number.\n`)

 let dummyArray =  ["Samir","Luis","Micheal","Tishana","Sinchana","Nesta", "Manara"]
 console.log(dummyArray)
 const number = 4;
 let stringLongerThanNumberArray = []
 function stringArrayLongerThanNumber(dummyArray,number) {
      dummyArray.forEach(string => {
        string.length > number ?
         stringLongerThanNumberArray.push(string) : null;
      })
      return  stringLongerThanNumberArray
 }


   console.log(`array with strings longer than ${number}`)
    stringArrayLongerThanNumber(dummyArray,number).forEach(string=> {
      console.log(string)
    })
 
    //Take a number, n, and print every number between 1 and n without using loops. Use recursion.


    const numb = 120;
    console.log('print every number between 1 and n without using loops. Use recursion')
    function recursionDisplayNumber(n){
       if(n === 1){  return n }
       console.log(recursionDisplayNumber(n-1))
       return n 
    }
    
    recursionDisplayNumber(numb)


     //Part 2: Thinking Methodically

    const arrayData = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
     { id: "48", name: "Barry", occupation: "Runner", age: "25" },
     { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
      { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
      { id: "7", name: "Bilbo", occupation: "None", age: "111" }];
    
   
     console.log("let's make an array of object here\n")
     console.log(arrayData)
    //sort the array  by age 
    // let's make a copy of arrayData we are intenting to sort by age
    
    // a function that deep copy an array 
    function deepCopyArray(deepArray){
        const newArray = [];
        deepArray.forEach(Object => newArray.push(Object) )
        return newArray ;
    }
   // make copy of arrayData by calling deepCopyArray 
   let  sortByAgeArray = deepCopyArray(arrayData);
    
    function sortArrayByAge (dataArray) {
            dataArray.sort((a,b) => a.age - b.age)
            return dataArray;
    }
    console.log("sorted area by age ascending \n")
    console.log(sortArrayByAge(sortByAgeArray));
    
    //Filter the array to remove entries with an age greater than 50
    
    let filterByAgeGreaterThan50 =[];

    const filterByAge50 = function(filterArray) {
       let result = filterArray.filter(object => object.age < 50);
       return result ;
    }

    filterByAgeGreaterThan50 = filterByAge50(arrayData)
    console.log("Filter Array and removed entries with age > 50 ")
    console.log(filterByAgeGreaterThan50)
     
     
    //Map the array to change 
    //the “occupation” key to “job” and increment every age by 1.
     
    let mapArrayOccupationToJobKey = [];
    let newKey = "Job"
    arrayData.map((object,key)=> {
        object.age++ ;
            if(key === "occupation") {
                object.key = newKey ;
                delete object.key;
                }
        
        mapArrayOccupationToJobKey.push(object)
    })
 
    console.log("Alter the key Occupation to new key Job ")
    console.log(mapArrayOccupationToJobKey)
     

    //Use the reduce method to calculate the sum of the ages.
    //then use the result to calculate the average age.

    const totalAge = arrayData.reduce((sum,object) =>{
         return sum += object.age
    },0)


    console.log(`Total sum of ages is ${totalAge}`)
    console.log(`the average of ages is ${totalAge/arrayData.length}`)
    console.log("\n")
    console.log("\n")
    

    // Part 3: Thinking Critically
     // Take an object and increment its age field.
    // Take an object, make a copy, and increment the age field of the copy. Return the copy.
     
    console.log("Part 3 \n")
    const dummyObjectWithoutAge_UpdatedAt_Key = {
        name: "Will Smith",
        Job : "Actor",  
    }
    
    const dummyObjectWithAge_UpdatedAt_Key = {
        name: "Bruce Willis",
        Job : "Actor",
        age: "58",
        updated_at : new Date(1994, 12, 10)
    }
   

    // let's use arrow function here , why not
    const incrementObjectAge =(obj, date = '') => {
          // we create field age if doest exist here
          obj = testAgeKey(obj,"age") 
          //we create field updated_at here if it does't exist
          obj = testUpDatedAtKey(obj,"updated_at")
          obj["age"] ++; 
          //if a new date is  provided we update the updated_at field
          //if not we keep it
          if (date) obj["updated_at"] = date  
          return obj
          // declare nested funcs here  
          function testAgeKey (x,k) {
            if (!( k in x)) x[k] = 0;
             return x
          }
          function testUpDatedAtKey(x,k) {
            if (!(k in x)) x[k] = new Date(Date.now())
            return x
          }
       }
    // make copy function
     function makeCopy(obj) {
        if(!("age" in obj)) obj["age"] = 0 
        if(!("updated_at")) obj["updated_at"] = new Date(Date.now())
        obj["age"] ++ ;
        return obj ; 
     }  


     console.log("Initial objects to start with\n")
     console.log(dummyObjectWithAge_UpdatedAt_Key)
     console.log("\n")
     console.log(dummyObjectWithoutAge_UpdatedAt_Key)
     console.log("\n")
     console.log("\n")

     console.log("the object without age and updated_at keys , the keys will be added with Values , 0 , today's date\n" )
     console.log( incrementObjectAge(dummyObjectWithoutAge_UpdatedAt_Key) )
     console.log("\n")
     console.log("an object with the age and updated_at keys 'fields' " )
     console.log("\n")
     // delibrately the age argument not added  in function , cause it was declared with default parameter ** const incrementObjectAge =(obj,key ='age') **
     console.log( incrementObjectAge(dummyObjectWithAge_UpdatedAt_Key))
     console.log("\n")


     console.log("we made copy of the objects here\n")
     // make copy using spread operator
     let dummyObjectWithAge_UpdatedAt_Key_Copy = makeCopy(dummyObjectWithAge_UpdatedAt_Key)
     let dummyObjectWithoutAge_UpdatedAt_Key_Copy = makeCopy(dummyObjectWithoutAge_UpdatedAt_Key)

     console.log(dummyObjectWithoutAge_UpdatedAt_Key_Copy)
     console.log("\n")
     console.log(dummyObjectWithAge_UpdatedAt_Key_Copy)
     console.log("\n")
     
   

     //  what would happen if we modified the updated_at date in the copy of the objects created in the second function using setTime()
     const newUpdate1 = new Date(Date.now());
     const newUpdate2 = new Date('July 1, 1999, 12:00:00');
    
     dummyObjectWithAge_UpdatedAt_Key_Copy.updated_at = newUpdate1
     dummyObjectWithoutAge_UpdatedAt_Key_Copy.updated_at = newUpdate2

     //
     console.log(" the updated date in  copies \n")
     console.log(dummyObjectWithoutAge_UpdatedAt_Key_Copy)
     console.log("\n")
     console.log(dummyObjectWithAge_UpdatedAt_Key_Copy)
     console.log("\n")

     //let's check the original copies and see what has changed on them
     console.log("let's see what has changed in the original copies \n")
     console.log(dummyObjectWithoutAge_UpdatedAt_Key)
     console.log("\n")
     console.log(dummyObjectWithAge_UpdatedAt_Key)
     console.log("\n")
     
     // based on the output , the original copies updated_at field has been also updated , not what we want here 
     // we want to use different approach on how to make copy  of an objects , example hard copy

     console.log(` based on the output , the original copies updated_at field has been also updated , not what we want here
     we want to use different approach on how to make copy  of an objects , example hard copy `)
     