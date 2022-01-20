import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {MovieContext} from "../../../Context"
import Rating from '../Rating';
import { IMG_URL } from '../../../config';

//Note: Import Style Below
import './style.css'


function Card(props) {
  const {handelDetails, id} = useContext(MovieContext);
  return (
        <React.Fragment>
          <div className="column">
            <div className="card">
              <div className="content">
                <div classNameName="front" onClick={() => handelDetails(id)}>
                  <img className="profile" width="100%" src={IMG_URL + props.poster_path} alt="Ronaldo"/>
                </div>
              </div>
              <Rating/>
            </div>
          </div>
        </React.Fragment>
    )
}

export default Card
