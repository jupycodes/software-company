function sortArray(array) {
    for (var i= 0; i< array.length -1; i++){
        for (var j= i+1; j<array.length; j++){
            if (array[i] > array[j]) {
                var temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
    }
    return array;
}

function divisibles(array) {
    var sum=0;
    for (var i=0; i<array.length; i++){
        if (array[i] % 5 ==0){
            sum += array[i];
        }
    }
    return sum;
}

function printArray(arr) {
    for(var i=0; i< arr.length; i++){
        console.log(arr[i])
    }
}

arr = [15,3,6,25,1,1000,4]

console.log(sortArray(arr))
console.log(divisibles(arr))
