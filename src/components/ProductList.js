import React, {Component} from 'react';
import '../styles/ProductList.css';

class ProductList extends Component {
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
                },
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
                <ul>
                    <li>
                        <h2>Product</h2>
                    </li>

                    <li className="searchBar">
                        <select id="sel1" className="textBox">
                            <option>Sort by Price</option>
                            <option>100-200</option>
                            <option>200-500</option>
                            <option>500-1000</option>
                            <option>1000+</option>
                        </select>
                    </li>
                    <li className="searchBar">
                        <select id="sel1" className="textBox">
                            <option>Select Category</option>
                            <option>Mobile</option>
                            <option>Laptop</option>
                            <option>PC</option>
                            <option>Accessories</option>
                        </select>
                    </li>
                    <li className="searchBar">
                        <input type="text" placeholder="Search By Name" className="textBox"/>
                    </li>
                </ul>


                <div className="row">
                    {
                        this.state.array.map((item, i) => {
                            return <div className="card">
                                <img src={item.Poster} alt={item.Title}/>
                                <br/>
                                <div style={{backgroundColor: '#555', color: '#fff'}}>
                                    <strong>{item.Title}</strong>
                                    <br/>
                                    <strong>{item.Title}</strong>
                                </div>

                            </div>
                        })
                    }

                </div>
                <div style={{textAlign:'center'}}>
                    <button type="button" aria-label="Left Align" className="pagination">
                       Previous
                    </button>
                    <button type="button" aria-label="Left Align" className="pagination">
                        Next >>
                    </button>
                </div>
            </div>
        )
    }
}

export default ProductList