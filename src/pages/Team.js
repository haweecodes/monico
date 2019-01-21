import React, {Component} from 'react';
import '../styles/Team.css';
import Carousel from '../components/Carousel'

class Team extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <div className="pageHeader">
                    <h1>Our Team Member</h1>
                </div>
                <div className="memberGallery">
                    {
                        this.state.array.map(item => {
                            return <div className="galleryItem">
                                <img src={item.Poster} alt={item.Title}/>

                                <div className="memberName">{item.Title}</div>

                            </div>
                        })
                    }

                </div>

            </div>
        );
    }
}

export default Team;
