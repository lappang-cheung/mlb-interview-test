import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Pre-rendering pages
export const getStaticProps = async () => {
    const result = await fetch('https://statsapi.mlb.com/api/v1/teams?sportId=1')
    const MLBData = await result.json()

    // Redirect if cannot get MLB data
    if (!MLBData.teams) {
        return {
            // notFound: true,
            redirect: {
                destination: '/error',
                permanent: false
            }
        }
    }

    return {
        props: {
            MLBData
        },
        revalidate: 60 * 60 
    }
}

const Teams = ({ MLBData: { teams } }) => {

    const [teamsData, setTeamsData] = useState([])

    useEffect(() => {
        setTeamsData(teams)
    }, [])

    return (
        <div>
            <Head>
                <title>MLB Teams</title>
                <meta name="description" content="Show all baseball team" />
            </Head>
            <h1>Teams</h1>
            <ul>
                {
                    teamsData.map(team => {
                        return (
                            <li key={team.id}>
                                <Link href={`/teams/${team.id}`}>
                                    {team.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Teams
