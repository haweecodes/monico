import React, {Component} from 'react';
import '../styles/Team.css';
import Carousel from '../components/Carousel'
import axios from 'axios'

class Team extends Component {
    constructor(props) {
        super(props)
        this.state = {
            array: []
        }
        axios.get('https://jsonplaceholder.typicode.com/photos/?albumId=100').then((response) => {
            let tempArray = response.data.splice(47, 50)
            this.setState({
                array: tempArray
            }, () => {
            })
        })
    }

    render() {
        return (
            <div>
                <div className="pageHeader">
                    <h1>Our Team Member</h1>
                </div>

                <table>
                    <tbody>
                        <tr className="memberGallery">

                            {
                                this.state.array.map((item, i) => {
                                    return <td className="galleryItem" key={i}>
                                        <img src={item.thumbnailUrl} alt={item.title}/>

                                        <div className="memberName">{item.title}</div>

                                    </td>
                                })
                            }

                        </tr>
                    </tbody>
                </table>


            </div>
        );
    }
}

export default Team;
