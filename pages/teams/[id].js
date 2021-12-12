import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

// Pre-rendering pages
export const getStaticPaths = async () => {
    const result = await fetch('https://statsapi.mlb.com/api/v1/teams?sportId=1')
    const MLBData = await result.json()
    const { teams } = MLBData

    const paths = teams.map(team =>({
        params: {id: team.id.toString()},
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (paths)  => {
    const resultTeam = await fetch(`https://statsapi.mlb.com/api/v1/teams/${paths.params.id}`)
    const resultRoster = await fetch(`https://statsapi.mlb.com/api/v1/teams/${paths.params.id}/roster`)
    const teamData = await resultTeam.json()
    const teamRoster = await resultRoster.json()

    return {
        props: {
            teamData, 
            teamRoster
        }
    }
}

const Team = ({ teamData: { teams }, teamRoster: { roster }}) => {

    const [team, setTeam] = useState([])
    const [players, setPlayers] = useState([])

    useEffect(() => {
        setTeam(teams[0])
        setPlayers(roster)
    },[])

    return (
        <div>
            <Head>
                <title>{team.name}</title>
                <meta name="description" 
                      content={
                          `Information about the MLB team, ${team.name}`
                          } 
                />
                <link rel="icon" href={`https://www.mlbstatic.com/team-logos/${team.id}.svg`} />
            </Head>
            <h1>{team.name}</h1>
            <p>Team is {team.name}</p>
            <ul>
                {
                    players.map(player => {
                        return <li key={player.person.id}>{player.person.fullName}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Team
