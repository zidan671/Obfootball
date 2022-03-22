function Tournaments(props) {
  let teams = props.tournamentsPage.teamsName.map((el) => {
    return (
      <tr>
        <td>{el.name} </td>
        <td>0</td>
        <td>0</td>
      </tr>
    )
  })
  console.log(teams)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Команда</th>
            <th>Игры</th>
            <th>Очки</th>
          </tr>
        </thead>
        <tbody>
          {teams}
        </tbody>
      </table>
    </div>
  )
}

export default Tournaments
