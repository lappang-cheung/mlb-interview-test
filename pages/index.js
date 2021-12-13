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
    <div>
      <h1>MLB Teams</h1>      
      <div className="containerTeam">
        {
          state.teams.teams.map(team => {
            return (
              <Link href={{ pathname: '/team', query: {id: team.id }}} key={team.id}>
                <div className="card">
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img src={`https://www.mlbstatic.com/team-logos/${team.id}.svg`} alt={`${team.name} image`} />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">{team.name}</p>
                        <p className="subtitle is-6">@{team.abbreviation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
