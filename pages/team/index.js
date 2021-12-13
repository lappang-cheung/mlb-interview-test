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
    <div>
      <h1>{state.team.team[0] && state.team.team[0].name}</h1>
      <p>Players</p>
      <ul>
        {
          state.roster.roster.map(player => {
            return (
              <li key={player.person.id}>
                <Link href={{
                  pathname: '/players',
                  query: {
                    id: player.person.id
                  }
                }}>
                  {player.person.fullName}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Team
