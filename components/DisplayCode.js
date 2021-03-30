import React from 'react'

export const DisplayCode = ({ children }) => {
    return (
        <pre class="chroma" >
            <code class="language-js" data-lang="js">
                {children}
            </code>
        </pre>
    )
}
