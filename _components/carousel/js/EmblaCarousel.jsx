import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Image from 'next/image'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade(), 
    Autoplay({ playOnInit: true, delay: 3000 })
  ])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla">


      <div >
        <div className='flex'>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} className='col-span-1 pr-4' style={{textAlign: "-webkit-center"}}/>

          <div className="embla__viewport col-span-10" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((item, index) => (
                <div className="embla__slide h-[350px] w-[900px]" key={index}>
                  <Image
                    className="embla__slide__img"
                    src={item}
                    alt="Your alt text"
                    width={1280}
                    height={1000}
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} className='col-span-1 pl-4' style={{textAlign: "-webkit-center"}}/>
        </div>

        <div className="embla__dots pt-3">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
