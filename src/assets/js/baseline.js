import { gsap } from 'gsap';

export default class BlockBaseline {

    constructor(el, options = {}){

        this.el = el;
        this.reverse = options.reverse || false;
    
        this.lastScroll = 0;
        this.lastDate = new Date().getTime();
        this.scrollDirection = 0;  
    
        this.elms = {
            title : this.el.querySelectorAll('[data-blockbaseline-title]'),
            lines : this.el.querySelectorAll('[data-blockbaseline-line]')
        } 
    }
    
    init(){  

        this.loop = this.getLoop(); 
    
        gsap.to(this.loop, {timeScale: 1, overwrite: true });
    
        window.addEventListener("scroll", (e) => {

        const delayInMs = e.timeStamp - this.lastDate;
        const offset = window.scrollY - this.lastScroll;
        const speedInpxPerMs = offset / delayInMs;
        const scrollSpeed = Math.abs(speedInpxPerMs.toFixed(2))*100;
    
        let time = (scrollSpeed <= 9) ? 1 : ( (scrollSpeed * 0.05 >= 9 ) ? 9 : scrollSpeed * 0.05 );   
        
        // let direction = (window.scrollY > this.lastScroll) ? time * -1 : time; 
        let direction = this.updateDirection(time);
        if (direction !== this.scrollDirection) {  
            gsap.to(this.loop, {timeScale: direction, overwrite: true });
            this.scrollDirection = direction;
        }  
        
        this.lastDate = e.timeStamp;
        this.lastScroll = window.scrollY;
        }); 

        this.scrollStop(function () {
        let direction = (this.scrollDirection > 0) ? 1 : -1; 
        if (direction !== this.scrollDirection) {   
            gsap.to(this.loop, {timeScale: direction, overwrite: true });
            this.scrollDirection = direction; 
        }  
        }.bind(this)); 
    }  


    updateDirection(time) {
        let direction;
        if (this.reverse) {
            direction = (window.scrollY > this.lastScroll) ? time : time * -1;
        } else {
            direction = (window.scrollY > this.lastScroll) ? time * -1 : time;
        }
        return direction;
    }

    getLoop(){  
        return this.horizontalLoop(this.elms.lines, {
        repeat: -1, 
        speed: 1,
        reversed: false,
        paddingRight: parseFloat(gsap.getProperty(this.elms.lines[0], "marginRight", "px"))
        }); 
    } 
    
    /*!
    * Run a callback function after scrolling has stopped
    * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
    * @param  {Function} callback The callback function to run after scrolling
    * @param  {Integer}  refresh  How long to wait between scroll events [optional]
    */
    scrollStop (callback, refresh = 66) {

        // Make sure a valid callback was provided
        if (!callback || typeof callback !== 'function') return;

        // Setup scrolling variable
        let isScrolling;

        // Listen for scroll events
        window.addEventListener('scroll', function (event) {

            // Clear our timeout throughout the scroll
            window.clearTimeout(isScrolling);

            // Set a timeout to run after scrolling ends
            isScrolling = setTimeout(callback, refresh);

        }, false);

    } 

    /*
    This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.

    Features:
    - Uses xPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
    - When each item animates to the left or right enough, it will loop back to the other side
    - Optionally pass in a config object with values like "speed" (default: 1, which travels at roughly 100 pixels per second), paused (boolean),  repeat, reversed, and paddingRight.
    - The returned timeline will have the following methods added to it:
    - next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
    - previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
    - toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
    - current() - returns the current index (if an animation is in-progress, it reflects the final index)
    - times - an Array of the times on the timeline where each element hits the "starting" spot. There's also a label added accordingly, so "label1" is when the 2nd element reaches the start.
    */
    horizontalLoop(items, config) {
        items = gsap.utils.toArray(items);
        config = config || {};
        let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
        totalWidth, curX, distanceToStart, distanceToLoop, item, i;
        gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i, el) => {
            let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
            xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
            return xPercents[i];
        }
        });
        gsap.set(items, {x: 0});
        totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
        for (i = 0; i < length; i++) {
        item = items[i];
        curX = xPercents[i] / 100 * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        tl.fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
            .to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
            .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
        }
        function toIndex(index, vars) {
        vars = vars || {};
        (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
        if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
            vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
            time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
        }
        tl.next = vars => toIndex(curIndex+1, vars);
        tl.previous = vars => toIndex(curIndex-1, vars);
        tl.current = () => curIndex;
        tl.toIndex = (index, vars) => toIndex(index, vars);
        tl.times = times;
        tl.progress(1, true).progress(0, true); // pre-render for performance
        if (!config.reversed) {
        tl.reverse();
        }
        return tl;
    }
    }