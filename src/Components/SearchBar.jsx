import React from 'react';
import axios from 'axios';


class SearchBar extends React.Component {
    state = { 
        data : '',
        isLaughing: false
     } 

    componentDidMount() {
        axios.get("https://v2.jokeapi.dev/joke/Any?safe-mode")
        .then(res => {
            const data = res.data;
            const setup = data.setup;
            const delivery = data.delivery;
            this.setState({setup, delivery})
            // this.setState({...this.state + this.state.data}
                // )
        })
    }

    myFunction = () =>  {
        this.setState({isLaughing: !this.state.isLaughing})
        // console.log("clicked");
        axios.get("https://v2.jokeapi.dev/joke/Any?safe-mode")
        .then(res => {
            const data = res.data;
            const setup = data.setup;
            const delivery = data.delivery;
            this.setState({setup, delivery})
            // this.setState({...this.state + this.state.data}
                // )
        })
    }

    render() { 
        // let x = this.myFunction();
        return (

            <>
            <div className='dataContainer'>

            <p id='text'>{this.state.setup}</p>
            <p className='text2'>{this.state.delivery}</p>




            </div>
            <div className='buttonContainer'>
                <button onClick={this.myFunction}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className={this.state.isLaughing ? "span_laughing" : "back-rotate"} viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"/>
                        </svg>
                    </span>
                </button>
            </div>
            </>
        );
    }
}
 
export default SearchBar;