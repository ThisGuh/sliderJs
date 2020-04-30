class Slider {

    constructor() {
        this.images = ["https://placeimg.com/640/480/0", "https://placeimg.com/640/480/1", "https://placeimg.com/640/480/2", "https://placeimg.com/640/480/3", "https://placeimg.com/640/480/4"];
        this.prevSlide = document.querySelector('.prev');
        this.nextSlide = document.querySelector('.next');
        this.imageSlide = document.querySelector('.image');
        this.slideNumber = 0;
        this.eventListeners();
        this.changeSlide();
    }
    changeSlide = () => {
        this.imageSlide.src = this.images[this.slideNumber];
    }
    eventListeners = () => {
        this.prevSlide.addEventListener("click", () => {
            if (this.slideNumber - 1 === 0) {
                this.prevSlide.classList.add("--disabled")
                this.slideNumber--;
            }
            else if (this.slideNumber - 1 > 0) {
                this.nextSlide.classList.remove("--disabled");
                this.slideNumber--;
            }
            this.changeSlide();
        })
        this.nextSlide.addEventListener("click", () => {
            if (this.slideNumber + 1 === this.images.length - 1) {
                this.nextSlide.classList.add("--disabled")
                this.slideNumber++;
            }
            else if (this.slideNumber + 1 < this.images.length) {
                this.prevSlide.classList.remove("--disabled");
                this.slideNumber++;
            }
            this.changeSlide();
        })

    }

}


const mainSlider = new Slider();


