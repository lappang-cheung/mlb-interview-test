import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getMLBTeams } from '../store/actions'

const Home = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  useEffect(() => {
    dispatch(getMLBTeams())
  }, [dispatch])

  return (
    <div style={{display:'flex'}}>
      <h1>MLB Teams</h1>
      <div >
        { 
          state.teams.teams.map(team => {
            return (
              <div className="card" key={team.id} style={{flex:1}}>
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={`https://www.mlbstatic.com/team-logos/${team.id}.svg`} alt={team.name} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src={`https://www.mlbstatic.com/team-logos/${team.id}.svg`} alt={team.name} />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">{team.name}</p>
                      <p className="subtitle is-6">{team.name}</p>
                    </div>
                  </div>
              
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      
      {/* <ul>
        {
          state.teams.teams.map(team => {
            return (
              <li key={team.id}>
                <Link href={{
                  pathname: '/team',
                  query: {
                    id: team.id
                  }
                }}>
                  {team.name}
                </Link>
              </li>
            )
          })
        }
      </ul> */}
    </div>
  )
}

export default Home
