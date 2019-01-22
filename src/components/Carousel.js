import React, {Component} from 'react';
import '../styles/Carousel.css'

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentImage: 0,
            array: [
                {
                    "Title": "Avatar",
                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
                },
                {
                    "Title": "I Am Legend",
                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg",
                },
                {
                    "Title": "300",
                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg",
                },
                {
                    "Title": "The Avengers",
                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg",
                }
            ]
        }
    }

    handleDot = (value, e) => {

        this.refs.zero.classList.remove('dot-active')
        this.refs.one.classList.remove('dot-active')
        this.refs.two.classList.remove('dot-active')
        this.refs.three.classList.remove('dot-active')

        this.setState({
            currentImage: parseInt(value)
        }, () => {
            switch (value){
                case '0':
                    this.refs.zero.classList.add('dot-active')
                    break;
                case '1':
                    this.refs.one.classList.add('dot-active')
                    break;
                case '2':
                    this.refs.two.classList.add('dot-active')
                    break;
                case '3':
                    this.refs.three.classList.add('dot-active')
                    break;
                default:
                    break;
            }
        })

    }

    render() {
        return (
            <div className="carouselBox">{ /*main carousel div which carries the three contents next and previous button and the picture*/}
                <div className="carouselContent fade"><img src={this.state.array[this.state.currentImage].Poster}
                                                           alt=""/></div> {/*the image box*/}

                <div className="dotBox">
                    <span className="dot dot-dot-active" ref="zero" onClick={(e) => this.handleDot('0')}></span>
                    <span className="dot" ref="one" onClick={(e) => this.handleDot('1')}></span>
                    <span className="dot" ref="two" onClick={(e) => this.handleDot('2')}></span>
                    <span className="dot" ref="three" onClick={(e) => this.handleDot('3')}></span>
                </div>

            </div>
        )
    }
}

export default Carousel