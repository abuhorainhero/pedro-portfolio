import React, { useState } from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

import '../Styles/projectsStyle.css'






export default function ProjectCarousel({imagePath1, imagePath2, imagePath3}) {
    const carouselItems = [{ src: imagePath1 }, { src: imagePath2 }, { src: imagePath3 }];
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === carouselItems.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? carouselItems.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = carouselItems.map((item) => {
        return (
            <CarouselItem
                className="carouselImg"
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.src} />
                <CarouselCaption captionText={''} captionHeader={''} />
            </CarouselItem>
        );
    });

    return (
        <>
            <div className="container-fluid">
                <div className="row text-center justify-content-center">
                    <div className="col carouselHeight">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}>
                            <CarouselIndicators items={carouselItems} activeIndex={activeIndex} onClickHandler={goToIndex} />
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}
