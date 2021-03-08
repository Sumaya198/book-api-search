import React, {Component} from 'react'
import BookCard from './BookCard';


class OrganiseCard extends Component {
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <BookCard />
                    </div>
                    <div className="col-md-4">
                    <BookCard />
                    </div>
                    <div className="col-md-4">
                    <BookCard />
                    </div>
                </div>
            </div>
        )
    }
}

export default OrganiseCard