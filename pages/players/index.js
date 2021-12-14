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
    <div className="content">
      <h1>{state.player.player[0] && state.player.player[0].fullName}</h1>
        <div class="columns is-vcentered">
          <div class="column is-4-desktop">
            <p>SHOW IMAGE</p>
            <p class="bd-notification is-primary">First column</p>
          </div>
          <div class="column is-8-desktop">
            <p>SHOW BASIC STATS</p>
            <p class="bd-notification is-primary">Second column with more content. This is so you can see the vertical alignment.</p>
          </div>
        </div>
        <div className="columns is-vcentered">
          <div class="column is-12-desktop">
            <p>MORE STATS</p>
            <p class="bd-notification is-primary">Second column with more content. This is so you can see the vertical alignment.</p>
          </div>
        </div>
    </div>
  )
}

export default Player
