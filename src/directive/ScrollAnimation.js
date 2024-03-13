const ScrollAnimation = {
    observer : new IntersectionObserver((entries)=>{
        entries.forEach(entry => {
            console.log(entry)
        })
    }),

    // The Directive Bind Hook
    mounted(el){
        console.log(el)
    }
}




export default ScrollAnimation;