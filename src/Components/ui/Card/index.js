import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {MovieContext} from "../../../Context"
import Rating from '../Rating';
import { IMG_URL } from '../../../config';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

//Note: Import Style Below
import './style.css'


function Card({id, poster_path}) {
  const history = useHistory();
  const {handelDetails} = useContext(MovieContext);

  const showMovieDetails = (id) => {
    handelDetails(id);
    history.push('/MovieDetails')
  }

  return (
        <React.Fragment>
          <div className="column">
            <div className="card">
              <div className="content">
                <div onClick={() => showMovieDetails(id)}>
                  <img className="profile" width="100%" src={IMG_URL + poster_path} alt="Ronaldo"/>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
    )
}

export default Card
