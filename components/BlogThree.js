import React from 'react'
import { ArticlePageLayout } from './ArticlePageLayout'
import { DisplayCode } from './DisplayCode'

export const BlogThree = () => {
    return (
        <div>
            <ArticlePageLayout header="Optimize Your React App’s Performance using useMemo ">
                <p>
                    In this artile i will discuss about some of the optimize react app.
                    Using things listed below you can speed up your react application.
                </p>
                <h3>But what exactly is it that we optimize?

                </h3>
                <p>
                    We will tell react by using a function that  it is okay to skip rendering a component.
                    BY doing so we can speed up the rendering processed
                </p>

                <h2>useMemo</h2>
                <DisplayCode>
                    useMemo(() ={">"} function, [input_dependency])
                </DisplayCode>
                <p>
                    The func is the function we want to cache/memoize, the input_dependency is the array of inputs to the func that the useMemo will cache against, that is if they change the func will be called.
                    if no array is provided, a new value will be computed on every render.
                    Try writting your code so that it still works without useMemo — and then add it to optimize performance.
                </p>

                <p>
                    React.memo() is also used to memoize/cache functional components.
                    React renders the component and memoizes the result. Before the next render, if the new props are the same, React reuses the memoized result skipping the next rendering.
                </p>
                <DisplayCode>
                    export function Movie({"{"}title, releaseDate{"}"}) {"{"}<br />
                 &nbsp;  &nbsp;  {"return ("}<br />
                 &nbsp; &nbsp; &nbsp;   {" <div>"}<br />
                 &nbsp; &nbsp; &nbsp;  {"<div>"}Movie title: {"{"}title{"}"}{"</div>"}<br />
                 &nbsp; &nbsp; &nbsp;   {"<div>"}Release date: {"{"}releaseDate{"}"}{"</div>"}<br />
                 &nbsp; &nbsp; &nbsp;   {" </div>"}<br />
                 &nbsp; &nbsp; );<br />
                 &nbsp;            {"}"}<br />

export const MemoizedMovie = React.memo(Movie);
                </DisplayCode>

                <p>
                    It outputs the same content as the original Movie component, but with one difference.
                    MemoizedMovie rendered content is memoized. As long as title or releaseDate props are the same between renderings React reuses the memoized content.
            </p>

            </ArticlePageLayout>
        </div>
    )
}
