function Table (props) {
    return (
        <>
        {props.countries.map(country=>
            <table>
            <thead>
                <tr>
                    <th>
                        <h1>High Scores :{country.name} </h1>
                    </th>
                </tr>
            </thead>
            <tbody>
                {country.scores.map(player=>{
                    return <tr>
                    <td>{player.n}</td>
                    <td>{player.s}</td>
                    </tr>
                }
                    )}
            </tbody>
        </table>
    )}
        </>
    )
}

export default Table
