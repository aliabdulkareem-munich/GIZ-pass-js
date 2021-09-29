
//for I/O related operations
fs = require('fs')

//this function does I/O and it writes its output into output.txt
function sortIntFromFile(filePath)
{
    fs.readFile(filePath, 'ascii', (err,data) => {
    if (err) throw err;
    
    
//copying the const data into a modifiable array.
    let sortedNumbers = data.split(',').map(Number);

//we do have Array.prototy.sort builtin 
//but for the sake of the task we are using bubble sort

    console.log("Original numbers list: ", sortedNumbers)

// m and n are local values to reduces the number of of access for Array.prototype.length
    for(let i = 0, n= sortedNumbers.length -1 ; i < n; ++i)
    {
  
  //each element is checked with its right-adjacent elemtn, so we start from i+1
    for(let j = i+1 , m = sortedNumbers.length ; j < m; ++j)
        {
        if(sortedNumbers[i] > sortedNumbers[j])
            {
            //math hack to avoid temp variable
            sortedNumbers[j] = sortedNumbers[j] + sortedNumbers[i]
            sortedNumbers[i] = sortedNumbers[j] - sortedNumbers[i];
            sortedNumbers[j] = sortedNumbers[j] - sortedNumbers[i];
            }
        }
    }



    console.log("Numbers list After sorting: ", sortedNumbers)


//we can just print it backwards for Desc order.
    console.log("Numbers list After Desc sorting: ", sortedNumbers.reverse())

    fs.writeFile('Output.txt', sortedNumbers, (err) => 
    {
      
    // In case of a error throw err.
    if (err) throw err;
    })
    
})}

sortIntFromFile('data.txt');


