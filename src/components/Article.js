import React from "react";

function Article({ 
    title, 
    date = "January 1, 1970",
    preview
 }) {
    return (
        <article>

            <h3 key= { }>{title}</h3>

            <small>{date}</small>
            <p>{preview}</p>    

        </article>

        

    )
}




// Article
// Make a Article component as a child of ArticleList. It should return:

// a <article> element, with the following elements inside:
// a <h3> element displaying the title of the article, passed as a prop
// a <small> element displaying the date of the article, passed as a prop
// a default value of "January 1, 1970" should be used if no date is passed as a prop
// a <p> element displaying the preview of the article, passed as a prop
