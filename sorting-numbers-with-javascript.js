class Sort{

    constructor(sort){
        //the array pass to the class constructor is store in this.sort
        this.sort = sort;
        //we store the maximum number in the this.sort array inside this.maximum
        this.maximum;
        //we create a counter that allow us to confirm if the length of the sorted array is equals to it
        //this will enable us to know the maximum number if it is true
        this.count_all = 0;
        //this is the new list that the sort array will be push to when it is sorted
        this.newsort = [];
    }

    //this method checks if a value pass to it parameter is inside this.sort array

    includes(number){
        //we loop through all the values in this.sort array by using .length
        for(let i = 0; i <= this.sort.length; i++){
            //we check to see if any value in the array is equals to the number pass as argument to the method
            if(this.sort[i] == number){
                //And then we return true if it matches
                return true;
            }
        }
        //otherwise, we return false if we did not find match
        return false;
    }

    //this method checks for the maximum number in this.sort array

    maxNumber(){
        //this for loop takes each value in the this.sort array and loop through each one of them
        for(let largenumber = 0; largenumber <= this.sort.length; largenumber++){
            //this for loop loops through all the elements in this.sort
            for(let checker in this.sort){
                //this if statement checks to see if a single number pass by the largenumber for loop is greater
                //than any of the values inside the same this.sort array
                if(this.sort[largenumber] >= this.sort[checker]){
                    //if a match is found then we increase the value of count_all by 1
                    this.count_all++;
                    //if the value of count_all is equals the length of the this.sort array
                    //it means that all the number pass in the largenumber for loop is greater
                    //than all the other numbers in the this.sort array
                    if(this.count_all == this.sort.length){
                        //We then store the maximum number in the this.maximum property
                        this.maximum = this.sort[largenumber];
                        //and we return the large number in the this.sort array
                        return this.maximum;
                    }
                //else - if any of the numbers in the this.sort array happens to be greater than the 
                //value pass by the largenumber for loop
                }else{
                    //then we set back our counter tracker to 0
                    this.count_all = 0;
                } 
            }
        }
    }

    //this method is used to push the sorted array into a new array

    sortArray(){
        //Here, we set the maximum number to a variable called max
        var max = this.maxNumber();
        //Then, we created a for loop that starts at 0 to the maximum number in the this.sort array
        for(let c = 0; c <= max; c++){
            //The if state here uses the includes() method we created to keep checking as the for loop
            //loops from 0 to the maximum number if it will find the number in the this.sort array
            if(this.includes(c)){
                //And the moment it finds a valid number that exist within the this.sort array,
                //it pushes it to a new array called this.newsort
                this.newsort.push(c);
            }
        }
    }

    //this method is used to output the sorted array

    output(){
        console.log(`maximum number is ${this.maximum}`);
        return this.newsort;
    }

}


let sort = new Sort([14, 1100, 4002, 5, 67, 43, 45, 100, 202, 7, 2, 343, 22, 990, 1, 6]);

sort.sortArray();

console.log(sort.output());