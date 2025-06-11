import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

class Animation {
	constructor() {
		this.gsap = gsap;
		gsap.registerPlugin(ScrollTrigger);
	}

	async init() {
		const blocks = document.querySelectorAll(".anim-title");
		blocks.forEach((block) => {
			this.animateIntroOpacity(block);
			this.animateSubLettersOnScroll(block); 

		});

		const blockIntro = document.querySelectorAll(".font-larg");
		blockIntro.forEach((block) => {
			this.textIntro(block);
		});

		const bgBlock = document.querySelectorAll(".anim");
		bgBlock.forEach((bgBlock) => {
			this.bgAnim(bgBlock);
		});

		// await this.initMagicMouse();
	}

	// async initMagicMouse() {
	// 	if (typeof window.magicMouse === 'undefined') {

	// 		await new Promise((resolve, reject) => {
	// 		const script = document.createElement('script');
	// 		script.src = 'https://res.cloudinary.com/veseylab/raw/upload/v1684982764/magicmouse-2.0.0.cdn.min.js';
	// 		script.onload = resolve;
	// 		script.onerror = reject;
	// 		document.head.appendChild(script);
	// 		});
	// 	}

	// 	const options = {
	// 		hoverEffect: "pointer-overlay",
	// 		hoverItemMove: false,
	// 		defaultCursor: false,
	// 		outerWidth: 30,
	// 		outerHeight: 30,
	// 	};

	// 	window.magicMouse(options);
	// }


	destroy() {
		ScrollTrigger.getAll().forEach(trigger => trigger.kill());
	}

	refresh() {
		// Forcer un refresh propre
		setTimeout(() => {
			ScrollTrigger.refresh();
		}, 50);
	}

	
	animateIntroOpacity(block) {
		const introLetters = block.querySelector(".animLetters");
		if (introLetters){
			const splitedIntroLetters = new SplitType(introLetters, {
				types: "words, chars",
				tagName: 'span',
			});

			const tlLetters = this.gsap.timeline();
			tlLetters.to(introLetters, { opacity: 1 });

			
				tlLetters.to(splitedIntroLetters.chars, {
					opacity: 1,
					stagger: 0.06,
					duration: 0.5,
					y: 0,
				});
			
		}

		
	}

	textIntro(block) {
		const introLetters = block.querySelector(".text-intro");
		if (!introLetters) return;

		const splitedIntroLetters = new SplitType(introLetters, {
		types: "words, chars",
		tagName: 'span',
		});

		const tl = this.gsap.timeline({
		scrollTrigger: {
			trigger: introLetters,
			start: "top bottom-=20%",
			end: "top top+=10%",
			scrub: true,
		},
		paused: true,
		});

		splitedIntroLetters.chars.forEach((char) => {
		tl.to(char, { opacity: 1 });
		});
	}

	animateSubLettersOnScroll(block) {
		const SubLetters = block.querySelector(".animSubLetters");
		if (!SubLetters) return;

		const splited = new SplitType(SubLetters, {
		types: "words, chars",
		tagName: 'span',
		});

		this.gsap.fromTo(
		splited.chars,
		{ opacity: 0, y: 100 },
		{
			opacity: 1,
			y: 0,
			stagger: 0.1,
			duration: 0.5,
			ease: "power2.out",
			scrollTrigger: {
			trigger: SubLetters,
			start: "top 80%",
			end: "top 50%",
			toggleActions: "play none none none",
			},
		}
		);
	}

  	bgAnim = (bgBlock) => {
		const bg = bgBlock.querySelectorAll(".background-img");
		const items = bgBlock.querySelectorAll(".anim-blockUP");
		const itemsRight = bgBlock.querySelectorAll(".anim-blockRight");
		const itemsLeft = bgBlock.querySelectorAll(".anim-blockLeft");
		const imgProjects = bgBlock.querySelectorAll(".image-container");
		const titleProjects = bgBlock.querySelectorAll(".project-title");

		titleProjects.forEach((item) => {
            const appearTl = this.gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top center+=15%",
					end: "bottom center-=15%",
					scrub: 1
                }
            });

            this.gsap.set(item, { opacity: 0.3 });
            appearTl
				.to(item, {
					opacity: 1,
					duration: 0.2,
					ease: "power2.out",
				})
				.to(item, {
					opacity: 0.3,
					duration: 0.2,
					ease: "power2.in",
				});
        });


	
		imgProjects.forEach(imgProject => {
			const img = imgProject.querySelectorAll("img");

			img.forEach((item) => {
				const appearTl = this.gsap.timeline({
					scrollTrigger: {
						trigger: item,
						start: "top-=50% center+=15%",
						end: "bottom+=50% center-=15%",
						scrub: 1, 
					}
				});

				this.gsap.set(item, { opacity: 0, scale: 0.3, filter: "blur(10px)", transform: "skew(10deg, 10deg)" });

				appearTl
					.to(item, {
						opacity: 1,
						scale: 1,
						filter: "blur(0px)",
						transform: "skew(0deg, 0deg)",
						duration: 2,
						ease: "power2.out"
					})
					.to(item, {
						opacity: 0,
						scale: 0.3,
						filter: "blur(10px)",
						transform: "skew(-10deg, -10deg)",
						duration: 2,
						ease: "power2.in"
					});
			})
			
		});

		itemsRight.forEach((item) => {
            const appearTl = this.gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom-=30%",
                    end: "center bottom-=15%",
                }
            });

            this.gsap.set(item, { opacity: 0, x: 100, filter: "blur(8px)" });
            appearTl.to(item, {
                opacity: 1,
                x: 0,
				filter: "blur(0px)",
                duration: 0.75,
            });
        });

		itemsLeft.forEach((item) => {
            const appearTl = this.gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom-=30%",
                    end: "center bottom-=15%",
                }
            });

            this.gsap.set(item, { opacity: 0, x: -100, filter: "blur(8px)" });
            appearTl.to(item, {
                opacity: 1,
                x: 0,
				filter: "blur(0px)",
                duration: 0.75,
            });
        });

		bg.forEach((item) => {
			this.gsap.set(item, { y: 0 }); 
			this.gsap.fromTo(item, 
			{ y: -500 }, 
			{ y: 1000, 

				scrollTrigger: {
					trigger: bgBlock,
					start: "top bottom-=20%",
					end: "bottom top+=10%",
					scrub: true,
				}
			
			}, 0 
			);

		});

	};


}

export default new Animation();



// class Animation {
// 	constructor() {
// 		this.gsap = gsap;
//         gsap.registerPlugin(ScrollTrigger); 

// 		const blocks = document.querySelectorAll(".anim-title");
// 		blocks.forEach((block) => {
// 			this.animateIntroOpacity(block);
//             this.animateSubLettersOnScroll(block); 
// 		});

// 		const blockIntro = document.querySelectorAll(".font-larg");
// 		blockIntro.forEach((block) => {
// 			this.textIntro(block);
// 		});

// 		const bgBlock = document.querySelectorAll(".anim");
// 		bgBlock.forEach((bgBlock) => {
// 			this.bgAnim(bgBlock);
// 		});
// 	}

// 	animateIntroOpacity = (block) => {
// 		const introLetters = block.querySelector(".animLetters");
//         const SubLetters = block.querySelector(".animSubLetters");

// 		///// Title /////
//         const splitedIntroLetters = new SplitType(introLetters, {
//             types: "words, chars",
//             tagName: 'span', 
//         });

//         const tlLetters = this.gsap.timeline();

// 		tlLetters.to(introLetters, {
//             opacity: 1,
//         });

//         window.addEventListener('load', function() {
// 			tlLetters.to(splitedIntroLetters.chars, {
// 			  opacity: 1,
// 			  stagger: 0.06, 
// 			  duration: 0.5,
// 			  y: 0,
// 			  delay: 2.8,
// 			});
// 		});
// 	};

// 	textIntro = (block) => {
// 		const introLetters = block.querySelector(".text-intro");

// 		///// Text intro /////
//         const splitedIntroLetters = new SplitType(introLetters, {
//             types: "words, chars",
//             tagName: 'span', 
//         });


// 		const tl = this.gsap.timeline({
// 			scrollTrigger: {
// 				trigger: introLetters, 
// 				start: "top bottom-=20%", 
// 				end: "top top+=10%",
// 				scrub: true,
// 			},
// 			paused: true,
// 		});

// 		splitedIntroLetters.chars.forEach((char) => {
// 			tl.to(char, {
// 				opacity: 1,
// 			});
// 		});
// 	};


//     animateSubLettersOnScroll = (block) => {
// 		const SubLetters = block.querySelector(".animSubLetters");

// 		if (!SubLetters) return; 

// 		///// SubTitle /////
// 		const splitedSecondLetters = new SplitType(SubLetters, {
// 			types: "words, chars",
// 			tagName: 'span',
// 		});


// 		this.gsap.fromTo(
// 			splitedSecondLetters.chars,
// 			{ opacity: 0, y: 100 },
// 			{ 
// 				opacity: 1, 
// 				y: 0, 
// 				stagger: 0.1, 
// 				duration: 0.5, 
// 				ease: "power2.out",
// 				scrollTrigger: {
// 					trigger: SubLetters, 
// 					start: "top 80%", 
// 					end: "top 50%", 
// 					toggleActions: "play none none none",
// 				},
// 			}
// 		);
// 	};


// 	bgAnim = (bgBlock) => {
// 		const bg = bgBlock.querySelectorAll(".background-img");
// 		const items = bgBlock.querySelectorAll(".anim-blockUP");
// 		const itemsRight = bgBlock.querySelectorAll(".anim-blockRight");
// 		const itemsLeft = bgBlock.querySelectorAll(".anim-blockLeft");
// 		const imgProjects = bgBlock.querySelectorAll(".image-container");
// 		const titleProjects = bgBlock.querySelectorAll(".project-title");

// 		titleProjects.forEach((item) => {
//             const appearTl = this.gsap.timeline({
//                 scrollTrigger: {
//                     trigger: item,
//                     start: "top center+=15%",
// 					end: "bottom center-=15%",
// 					scrub: 1
//                 }
//             });

//             this.gsap.set(item, { opacity: 0.3 });
//             appearTl
// 				.to(item, {
// 					opacity: 1,
// 					duration: 0.2,
// 					ease: "power2.out",
// 				})
// 				.to(item, {
// 					opacity: 0.3,
// 					duration: 0.2,
// 					ease: "power2.in",
// 				});
//         });


	
// 		imgProjects.forEach(imgProject => {
// 			const img = imgProject.querySelectorAll("img");

// 			img.forEach((item) => {
// 				const appearTl = this.gsap.timeline({
// 					scrollTrigger: {
// 						trigger: item,
// 						start: "top-=50% center+=15%",
// 						end: "bottom+=50% center-=15%",
// 						scrub: 1, 
// 					}
// 				});

// 				this.gsap.set(item, { opacity: 0, scale: 0.3, filter: "blur(10px)", transform: "skew(10deg, 10deg)" });

// 				appearTl
// 					.to(item, {
// 						opacity: 1,
// 						scale: 1,
// 						filter: "blur(0px)",
// 						transform: "skew(0deg, 0deg)",
// 						duration: 2,
// 						ease: "power2.out"
// 					})
// 					.to(item, {
// 						opacity: 0,
// 						scale: 0.3,
// 						filter: "blur(10px)",
// 						transform: "skew(-10deg, -10deg)",
// 						duration: 2,
// 						ease: "power2.in"
// 					});
// 			})
			
// 		});

// 		itemsRight.forEach((item) => {
//             const appearTl = this.gsap.timeline({
//                 scrollTrigger: {
//                     trigger: item,
//                     start: "top bottom-=30%",
//                     end: "center bottom-=15%",
//                 }
//             });

//             this.gsap.set(item, { opacity: 0, x: 100, filter: "blur(8px)" });
//             appearTl.to(item, {
//                 opacity: 1,
//                 x: 0,
// 				filter: "blur(0px)",
//                 duration: 0.75,
//             });
//         });

// 		itemsLeft.forEach((item) => {
//             const appearTl = this.gsap.timeline({
//                 scrollTrigger: {
//                     trigger: item,
//                     start: "top bottom-=30%",
//                     end: "center bottom-=15%",
//                 }
//             });

//             this.gsap.set(item, { opacity: 0, x: -100, filter: "blur(8px)" });
//             appearTl.to(item, {
//                 opacity: 1,
//                 x: 0,
// 				filter: "blur(0px)",
//                 duration: 0.75,
//             });
//         });

// 		bg.forEach((item) => {
// 			this.gsap.set(item, { y: 0 }); 
// 			this.gsap.fromTo(item, 
// 			{ y: -500 }, 
// 			{ y: 1000, 

// 				scrollTrigger: {
// 					trigger: bgBlock,
// 					start: "top bottom-=20%",
// 					end: "bottom top+=10%",
// 					scrub: true,
// 				}
			
// 			}, 0 
// 			);

// 		});

// 	};
// }


// export default Animation;
