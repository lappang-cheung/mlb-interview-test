import Head from 'next/head'
import Link from 'next/link'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getMLBTeams } from '../store/actions'
import View from '../components/Teams/View'

const Home = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  useEffect(() => {
    dispatch(getMLBTeams())
  }, [dispatch])

  return (
    <div className="content">
      <br />
      <h1 className="title">MLB Teams</h1>      
      <div className="card_container">
        {
          state.teams.teams.map(team => {
            return (
              <View team={team} key={team.id}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
