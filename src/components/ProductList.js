import React, {Component} from 'react';
import '../styles/ProductList.css';
import axios from 'axios'
class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            array: [],
            searchValue: '',
            pageNumber: 1
        }
        axios.get('https://jsonplaceholder.typicode.com/photos/?albumId=1').then((response) => {
            let tempArray = response.data
            this.setState({
                array: tempArray
            }, () => {
            })
        })
    }

    pagination=(page)=>{
        console.log(page)
        if(page === 0 || page === 1) {
            this.setState({
                pageNumber: this.state.pageNumber + 1
            },()=>{
                axios.get('https://jsonplaceholder.typicode.com/photos/?albumId=' + this.state.pageNumber).then((response) => {
                    let tempArray = response.data
                    this.setState({
                        array: tempArray
                    }, () => {
                    })
                })
            })
        } else if(page===2){
            this.setState({
                pageNumber: this.state.pageNumber - 1
            },()=>{
                console.log(this.state.pageNumber)
                if(this.state.pageNumber > 0) {
                    axios.get('https://jsonplaceholder.typicode.com/photos/?albumId=' + this.state.pageNumber).then((response) => {
                        let tempArray = response.data
                        this.setState({
                            array: tempArray
                        }, () => {
                        })
                    })
                }{
                    this.setState({
                        pageNumber: 1
                    },()=>{})
                }
            })
        }
    }

    handleSearch = (e) => {
        let value = e.target.value
        this.setState({
            searchValue: value
        })
        if(e.key === 'Enter'){
            axios.get('https://jsonplaceholder.typicode.com/photos/?title='+value).then((response) => {
                let tempArray = response.data
                this.setState({
                    array: tempArray
                },()=>{})
            })
        } else{
            axios.get('https://jsonplaceholder.typicode.com/photos').then((response) => {
                let tempArray = response.data.splice(4990, 5000)
                this.setState({
                    array: tempArray
                },()=>{})
            })
        }
    }
    sortByPrice = (e) =>{
        let price = e.target.value
        axios.get('https://jsonplaceholder.typicode.com/photos/?albumId=' + price).then((response) => {
            let tempArray = response.data
            this.setState({
                array: tempArray
            }, () => {
            })
        })
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <h2>Product</h2>
                    </li>
                    <li className="searchBar">
                        <select id="sel1" className="textBox" onChange={this.sortByPrice}>
                            <option>Sort by Price</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
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
                        <input type="text" placeholder="Search By Name" className="textBox" onKeyPress={this.handleSearch}/>
                    </li>
                </ul>

                <table>
                    <tbody>
                    <tr>
                    {
                        this.state.array.map((item, i) => {
                            return <td className="card" key={i}>
                                <img src={item.thumbnailUrl} alt={item.title}/>
                                <br/>
                                <div style={{marginTop: '10px'}}>
                                    <p>{item.title}</p>
                                    <br/>
                                    <strong>Price: ${item.id}</strong>
                                </div>
                            </td>
                        })
                    }
                    </tr>
                    </tbody>
                </table>
                <div style={{textAlign:'center'}}>
                    <button type="button" aria-label="Left Align" className="pagination" onClick={(e)=>this.pagination(2)}>
                       Previous
                    </button>
                    <button type="button" aria-label="Left Align" className="pagination" onClick={(e)=>this.pagination(1)}>
                        Next
                    </button>
                </div>
            </div>
        )
    }
}

export default ProductList