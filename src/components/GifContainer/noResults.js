import React, {Component} from 'react'
import notFound from '../../assets/notFound.gif'

class NoResults extends Component{
    render(){
        return <div>
                <img key='not-found' alt='not found' src={notFound}/>
                <br/>
                <label>No results</label>
            </div>
    }
}

export default NoResults
