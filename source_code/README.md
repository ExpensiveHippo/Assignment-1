# R.A.P.

 Research. Advise. Prolong. (R.A.P.) is a fictional organisation that aims to prolong humanity from outbreaks in this universe. This website is solely used to track essential information regarding the latest outbreak. In this assignment, the outbreak is FN-9315.

## Design Process

 I am terrible at designing which is why I opted for something that has far less emphasis on "looking attractive to promote x", althought I know I will still get graded on bad design. 
 
As stated in the previous section, this website is mainly used by the public who want to know more about the disease. Users would want to gain easy access to important information and statistics that isn't too difficult to understand, and that's it. The screen shouldn't be cluttered with useless information that wouldn't even understand or use.

COVID-19 has also served as a good reference when I see what my family or other people search for regarding COVID-19.
- As a user, I would like statistical updates.
- As a user, I would like to know the signs and symptoms (S&S) of the disease.
- As a user, I would like to know if this site is trustworthy.
- As a user, I would like to know how to protect myself from this disease.
- As a user, I may be interested to know more about the disease, but not read essays on it.

Since **statistics** are really the only thing changing every interval of time, I figured that should be the first thing on screen. It does not make sense to talk about how the S&S without talking about how you might get them first, which was why I placed the **Description** section ahead of the **Stages** section.

At this point in time, my bad creativity was starting to show. It just felt like a powerpoint slide or word document rather than a webpage. Hence, I decided to make the **Stages**  portion more interactive for the user. 

In terms of wireframe, this was how I imagined the website to be like: 
- [Desktop](https://github.com/ExpensiveHippo/Assignment-1/blob/main/ID-Assignment1-Desktop-Wireframe.pdf)  
- [Mobile](https://github.com/ExpensiveHippo/Assignment-1/blob/main/ID-Assignment1-Mobile-Wireframe.pdf)

## Features

### Existing Features:

1. Stage selection - allows user to filter S&S based on stages.
2. Makeshift S&S - redirect users to credible sources to read up more 

### Features left to implement:

1. S&S should not just be lazy anchors that redirect users. R.A.P. should write the S&S themselves and clicking on the S&S could create a transition that displays a brief description of the S&S.
2. To make it feel less like a word document and more like a webpage, a SVG path can be drawn on scroll using something like ScrollTrigger to mimic telling a story. This could replace the existing feature where S&S is filtered by stages, and make for a less boring background.
3. This can be expanded to not just be a single-scroll page.

## Technologies Used

- [Adobe XD](https://helpx.adobe.com/sg/support/xd.html) 
    - This project uses **Adobe XD** to design the wireframe and create the logo.

## Testing

- Stages:
    1. Stage 1 and its corresponding S&S is shown by default.
    2. When another stage is clicked, it lights up while the current active one dims.
    3. When another stage is clicked, its S&S appear while the current active one disappears.
    4. When hovering above each stage, the mouse cursor changes to a pointer.
    5. When each S&S box is clicked, it is not a deadlink.

## Credits

### Media
- The photo used was obtained from [Unsplash](https://unsplash.com/).
- The icons used were obtained from [Freepik](https://www.freepik.com/) and [Flaticon](https://www.flaticon.com/).

### Acknowlegdements
- I received inspiration for this project from [SCP](https://scp-wiki.wikidot.com/).






