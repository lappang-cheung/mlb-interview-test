import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import { getMLBTeam } from '../../store/actions'
import { getMLBRoster } from '../../store/actions'

import View from '../../components/Team/View'

const Team = () => {

  const router = useRouter()
  const { id } = router.query

  const dispatch = useDispatch()
  const state = useSelector(state => state)

  // Temp fix due to NextJS losing query ID params
  const checkID = (id) => {
    if (!id) {
      const urlSearchParams = new URLSearchParams(window.location.search)
      const params = Object.fromEntries(urlSearchParams.entries());
      return params.id
    } else {
      return id
    }
  }

  useEffect(() => {
    dispatch(getMLBTeam(checkID()))
    dispatch(getMLBRoster(checkID()))
  }, [dispatch, router])

  return (
    <div className="content">
      <br />
      <div className="card_title">
      <button onClick={() => router.back()}>Back</button> 
        <h1 className="title">{state.team.team[0] && state.team.team[0].name}</h1>  
      </div>
        
      <div className="card_container">
        {
          state.roster.roster.map(player => {
            return (
              <View player={player} key={player.person.id }/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Team
