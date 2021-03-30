import React from 'react'

export const ArticlePageLayout = ({ children, header }) => {
    return (
        <div className="article-page-container" >

            <h1>{header}</h1>
            {children}
        </div>
    )
}

