// Q1=> Create a for loop that iterates up to 100 while outputting "fizz" at multiplies of 3,"buzz" at multiplies of 5 and "fizzbuzz" at multiplies of 3 and 5?
for (let i=1; i<=100; i++){
    if(i%3==0 && i%5==0){
        console.log(i,"fizzbuzz");
    }
    else if(i%3==0) {
        console.log(i,"fizz");
    }
    else if(i%5==0) {
        console.log(i,"buzz")
    }
    else{
        console.log(i)
    }
}