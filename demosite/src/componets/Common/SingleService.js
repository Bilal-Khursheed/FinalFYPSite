import React, { Component } from 'react';


class SingleService extends Component
{
    render()
    {
        return (
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <img height={120} src={this.props.imgSrc} alt=""></img>
            </span>
            <h4 className="service-heading">{this.props.title}</h4>
            <p className="text-muted">
              {this.props.description}
            </p>
          </div>
        );
    }
}
export default SingleService;