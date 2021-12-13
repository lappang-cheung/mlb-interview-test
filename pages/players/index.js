import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import { getMLBPlayer } from '../../store/actions'

const Player = () => {

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
    dispatch(getMLBPlayer(checkID()))
  }, [dispatch, router])

  return (
    <div>
      <h1>{state.player.player[0] && state.player.player[0].fullName}</h1>
      <ul>
        {
          
        }
      </ul>
    </div>
  )
}

export default Player
