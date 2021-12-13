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
      <div style={{display:'flex'}}>
        <ul className="row column">
          {
            state.teams.teams.map(team => {
              return (
                <li key={team.id} className="column">
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
        </ul>
      </div>
    </div>
  )
}

export default Home
