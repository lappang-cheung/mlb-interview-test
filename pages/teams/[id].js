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
    const result = await fetch(`https://statsapi.mlb.com/api/v1/teams/${paths.params.id}`)
    const teamData = await result.json()

    return {
        props: teamData
    }
}

const Team = ({ teams }) => {

    const [teamData, setTeamData] = useState([])

    useEffect(() => {
        setTeamData(teams[0])
    },[])

    return (
        <div>
            <Head>
                <title>TeamID {teamData.id}</title>
                <meta name="description" content="Some baseball team" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <h1>Team</h1>
            <p>TeamID is {teamData.id}</p>
        </div>
    )
}

export default Team
