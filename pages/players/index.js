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
        <div className="columns is-centered">
          <div className="column is-6-desktop">
            <section class="section">
              <span className="bd-notification is-primary has-text-centered">
                <img src={`https://content.mlb.com/images/headshots/current/60x60/672640@8x.png`} />
              </span>
            </section>
          </div>
          <div className="column is-6-desktop">
          <section class="section">
            <h1 class="title">Information</h1>
            {
              state.player.player[0] && <>
                <p className="bd-notification is-primary"><strong>Name:</strong> {state.player.player[0].fullFMLName}</p>
                <p className="bd-notification is-primary"><strong>Nickname:</strong> {state.player.player[0].nickName}</p>
                <p className="bd-notification is-primary"><strong>Birth Date:</strong> {state.player.player[0].birthDate}</p>
                <p className="bd-notification is-primary"><strong>Age:</strong> {state.player.player[0].currentAge}</p>
                <p className="bd-notification is-primary"><strong>Origin:</strong> {state.player.player[0].birthCity}, {state.player.player[0].birthStateProvince}, {state.player.player[0].birthCountry}</p>
                <p className="bd-notification is-primary"><strong>Gender:</strong> {state.player.player[0].gender}</p>
                <p className="bd-notification is-primary"><strong>Height:</strong> {state.player.player[0].height}</p>
                <p className="bd-notification is-primary"><strong>Weight:</strong> {state.player.player[0].weight} lb</p>
                <p className="bd-notification is-primary"><strong>Debut:</strong> {state.player.player[0].mlbDebutDate}</p>
                <p className="bd-notification is-primary"><strong>Position:</strong> {state.player.player[0].primaryPosition.type}</p>
              </>
            }
            
          </section>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-12-desktop">
            <h1 class="title">Stats</h1>

            <table class="table">
              <thead>
                <tr>
                  <th>Batting</th>
                  <th><abbr title="Played">Zone Top</abbr></th>
                  <th><abbr title="Won">Zone Bottom</abbr></th>
                  
                </tr>
              </thead>
             
              <tbody>
                <tr>
                  <td>Average</td>
                  <td>{state.player.player[0] && state.player.player[0].strikeZoneTop}</td>
                  <td>{state.player.player[0] && state.player.player[0].strikeZoneBottom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

export default Player
