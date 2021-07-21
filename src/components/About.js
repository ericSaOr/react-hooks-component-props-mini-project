import React from "react";

function About ({ 
    img = "https://via.placeholder.com/215" ,
    alt = "blog logo" ,
    text 
}) {
    return(

        <aside>

            <img src = {img} alt = {alt}/>

            <p>{text}</p>

        </aside>

    )
}

export default About;

//Make a About component as a child of App. It should return:


// a <img> element, with the src set to an image passed as a prop/ 
// the <img> element should use this placeholder image as a default value for the prop if no prop is passed in: "https://via.placeholder.com/215"
// the image should also be accessible! Give it an alt attribute of "blog logo"
// a <p> element, with the about text for the blog passed in as a prop

//   renders a <img> with the blog logo and alt text of 'blog logo'

// expect(received).toBeInTheDocument()

// received value must be an HTMLElement or an SVGElement.
// Received has value: null

//   11 |   render(<About image="logo.png" />);
//   12 |   const img = screen.queryByAltText("blog logo");
// > 13 |   expect(img).toBeInTheDocument();
//      |               ^
//   14 |   expect(img.src).toContain("logo.png");
//   15 | });
//   16 | 

//   at __EXTERNAL_MATCHER_TRAP__ (node_modules/expect/build/index.js:342:30)
//   at Object.toBeInTheDocument (node_modules/expect/build/index.js:343:15)
//   at Object.<anonymous> (src/__tests__/About.test.js:13:15)

