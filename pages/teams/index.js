import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Head from 'next/head'
import Link from 'next/link'

import { wrapper } from '../../store/store'
import { getMLBTeams } from '../../store/actions/teamsActions'

const Teams = ({ getMLBTeams, teams}) => {

    const [teamsData, setTeamsData] = useState([])

    useEffect(async () => {
       getMLBTeams()
       setTeamsData(teams.teams)
    }, [null])

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
                               {team.name}
                           </li>
                       )
                   }) 
                }
            </ul>
        </div>
    )
}

export const getStaticProps = wrapper.getStaticProps((store) => () => {
    store.dispatch(getMLBTeams())
})

const mapStateToProps = ({ teams }) => {
    return {
        teams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMLBTeams: bindActionCreators(getMLBTeams, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teams)
