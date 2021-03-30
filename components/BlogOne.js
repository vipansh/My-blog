import React from 'react'
import { ArticlePageLayout } from './ArticlePageLayout'
import { DisplayCode } from './DisplayCode'

export const BlogOne = () => {
    return (
        <div>
            <ArticlePageLayout header="What is async/await?">
                <p>    In this article, I will tell you how to work with promises by using async/await.
 If you are studying why you want to use it then let me show you this will make your code clear and readable.</p>

                <h2> Let’s see what async/await is and how to use it.</h2>


                <h3> How we are using promises.</h3>


                <DisplayCode>
                    fetch("https://api.app/v1/users/cp"); // dummy URL<br />
                    &nbsp;&nbsp;.then(response ={'>'} response.json());<br />
                    &nbsp;&nbsp;.then(console.log);<br />
                </DisplayCode>


                <h3>  What async/await has to offer.</h3>

                <DisplayCode>
                    async function getData() {'{'} <br />
                    &nbsp;&nbsp;const response = await fetch("https://api.app/v1/users/cp/avatar"); <br />
                    &nbsp;&nbsp;const data = response.json(); <br />
                    &nbsp;&nbsp; console.log(data);
                    {'}'}
                </DisplayCode>

                <p>    An async function is a function declared by the async keyword, plus the await keyword is allowed within them.
                It is a new way of writing asynchronous code rather than using promises and callbacks.</p>

                <h3> How to use it?</h3>

                <p> Using async at the beginning of the function indicates it will work as a promise.</p>
                <DisplayCode>
                    async function name([param[, param[, ...param]]]) {'{'}<br />
                    &nbsp;&nbsp;          statements<br />
                    {'}'}


                </DisplayCode>
                <p>
                    <h3>Parameters</h3>
                    <b>name</b>  :  The function’s name.<br />
                    <b>param</b>  : The name of an argument to be passed to the function.<br />
                    <b>statements</b>  : The statements comprising the body of the function.  The await mechanism may be used.
                </p>
                <p> Also if you want to use await inside a function then that function needs to be async.
                    <DisplayCode>
                        const data = async ()  ={'>'} {'{'}<br />
                        &nbsp;&nbsp; const got = await fetch('https://jsonplaceholder.typicode.com/todos/1');<br />

                        &nbsp;&nbsp; console.log(await got.json())<br />
                        {'}'}<br />

data();
                    </DisplayCode>
                </p>


                <h3> Error Handling.</h3>
                <p>  Since async/await is built on top of promises it helps in checking errors.</p>
                <DisplayCode>
                    async function getUserInfo() {'{'}<br />
                    &nbsp;&nbsp;try {'{'}<br />
                    &nbsp;&nbsp;&nbsp; const response = await fetch("https://api.app/v1/users/cp/avatar");<br />
                    &nbsp;&nbsp;&nbsp; const data = response.json();<br />

                    &nbsp;&nbsp;&nbsp;  console.log(data);<br />
                    &nbsp;&nbsp;  {'}'} catch (err) {'{'}<br />
                    &nbsp;  &nbsp;     console.log(err);<br />
                    &nbsp;&nbsp;   {'}'}<br />
                    {'}'}<br />
                </DisplayCode>
                <p> In JavaScript, there is no false dichotomy. Features build on top of each other to use current expertise. Mastering callbacks puts you on the path to master Promises and async/await.</p>
            </ArticlePageLayout>


            
        </div>
    )
}
