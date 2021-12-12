import { useState, useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'

import Head from 'next/head'
import Link from 'next/link'

import { wrapper } from '../../store/store'
import { getMLBTeam } from '../../store/actions/teamActions'
import { getMLBRoster } from '../../store/actions/rosterActions'


const Team = ({ getMLBTeam, team: { team } }) => {

    const router = useRouter()
    const { id } = router.query

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    const [teamData, setTeamData] = useState([])
    // const [players, setPlayers] = useState([])

    useEffect(() => {
        getMLBTeam(id)
        setTeamData(team[0])
    },[null])

    return (
        <div>
            <Head>
                <title>{teamData.name}</title>
                <meta name="description" 
                      content={
                          `Information about the MLB team, ${teamData.name}`
                          } 
                />
                <link rel="icon" href={`https://www.mlbstatic.com/team-logos/${teamData.id}.svg`} />
            </Head>
            <h1>{teamData.name}</h1>
            <p>Team is {teamData.name}</p>
            <ul>
                {/* {
                    players.map(player => {
                        return <li key={player.person.id}>{player.person.fullName}</li>
                    })
                } */}
            </ul>
        </div>
    )
}

// NextJS static props
export const getStaticPaths = async () => {
    const result = await fetch('https://statsapi.mlb.com/api/v1/teams?sportId=1')
    const MLBData = await result.json()
    const { teams } = MLBData

    const paths = teams.map(team =>({
        params: {id: team.id.toString()},
    }))

    return {
        paths,
        fallback: true
    }
}


export const getStaticProps = wrapper.getStaticProps((store) => async(paths) => {
    store.dispatch(getMLBTeam(paths))
})

// Dispatch props
const mapStateToProps = (state) => {
    return {
        team: state.team
    }
}

// Dispatch actions
const mapDispatchToProps = (dispatch) => {
    return {
        getMLBTeam: bindActionCreators(getMLBTeam, dispatch),
        getMLBRoster: bindActionCreators(getMLBRoster, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Team)
