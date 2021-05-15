import React from 'react'
import { ArticlePageLayout } from './ArticlePageLayout'
import { Comments } from './Comments'
import { DisplayCode } from './DisplayCode'

export const BlogTwo = () => {
    return (
        <div>
            <ArticlePageLayout header="3 JavaScript Array Methods Every Developer Should Know">

                <p> There exists a special data structure called Array, to store ordered collections. 
                    Arrays in JavaScript allow multiple values to be stored in a single variable. 
                    It stores the same kind of element collection succeeding fixed-size. 
                    The strength of JavaScript arrays lies in the array methods. Array methods are functions built-in to JavaScript
        that we can apply to our arrays — Each method has a unique function that performs a change or calculation to our array and saves us from writing common functions from scratch. I won't discuss all the arrays methods but the three methods I have used the most</p>

                <h3>1. filter( )</h3>
                <p>The filter() method creates an array filled with all array elements that pass a test implemented by the provided function. You cant change the original value using the filter.</p>
                <h4>Syntex</h4>
                <DisplayCode>
                    array.filter(callback[, thisObject]);
</DisplayCode>
                <h4>Parameter Details</h4>

                <b>callback</b> − Function to test each element of the array.<br />

                <b>thisObject</b> − Object to use as this when executing callback.<br />

                <p>Heres an example to understand it batter. <br />
                This method creates a new array with only elements that passes the condition inside the provided function.</p>
                <DisplayCode>
                    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];<br />

                    const result = words.filter(word ={'>'} word.length {'>'} 6);<br />

                    console.log(result);<br /><br />
                    // expected output: Array ["exuberant", "destruction", "present"]<br />
                </DisplayCode>




                <h3>2. forEach( )</h3>
                It allows us to access each element of an array in order. The forEach() method takes a function that operates on each of the elements in that array. Yes, you can also get the same result by for loop. But we favour forEach as the forEach method is a little cleaner than the for loop and less chance of error.
                <h4>Syntax</h4>
                <DisplayCode>
                    array.forEach(callback[, thisObject]);
</DisplayCode>
                <h4>Parameter Details</h4>

                <b>value</b> − the value currently being processed in the array.<br />

                <b>index</b> − this is the index of the value being processed  (optional)<br />
                <b>array</b> − this is the parent array running the forEach method  <br />
                <p>Heres an example to understand it battter. <br />
                This method helps to loop over array by executing a provided callback function for each element in an array.</p>
                <DisplayCode>
                    const avengers = ['thor', 'captain america', 'hulk'];<br />
avengers.forEach((item, index)={">{"}<br />
                        console.log(index, item)<br />
                    {"}"})<br />
                </DisplayCode>


                <h3>3. map()</h3>
                <p>
                    The map() method, similar to the forEach() method, does the provided function once for each element in an array. But unlike the forEach() method, it creates a new array with the results of calling a function for every array element. Hence map() method relies on immutability. Also, map() does not execute/call the function for those array elements without values.</p>
                <h4>Syntax</h4>
                <DisplayCode>
                    let newArray = oldArray.map(callback(element[, index[, array]])[, thisArg])
</DisplayCode>
                <h4>Parameter Details</h4>
                <b>element</b> − This is the element currently being executed<br />
                <b>index</b> − This is the index of the current item<br />





                <p>   This method helps to loop over array by executing a provided callback function for each element in an array.</p>
                <DisplayCode>
                    const sweetArray = [2, 3, 4, 5, 35]<br />
const sweeterArray = sweetArray.map(sweetItem ={">"} {"{"}<br />
    return sweetItem * 2<br />
                    {"}"})<br />

console.log(sweeterArray)
                </DisplayCode>




                <p>

                    <h3>  Conclusion</h3>
To make JavaScript array manipulation easier, we should use array methods to make our work easier and the code cleaner.

                </p>




            </ArticlePageLayout>

        </div >
    )
}
