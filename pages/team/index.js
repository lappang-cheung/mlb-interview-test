import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { getMLBTeam } from '../../store/actions'
import { getMLBRoster } from '../../store/actions'

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
        <h1 className="title">{state.team.team[0] && state.team.team[0].name}</h1>  
      </div>
        
      <div className="card_container">
        {
          state.roster.roster.map(player => {
            return (
              <Link href={{ pathname: '/players', query: {id: player.person.id }}} key={player.person.id }>
                <div className="card">
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img src={`https://content.mlb.com/images/headshots/current/60x60/672640.png`} alt={`${player.person.fullName} image`} />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">{player.person.fullName}</p>
                        <p className="subtitle is-6">@{player.jerseyNumber}_{player.position.name}</p>
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

export default Team
