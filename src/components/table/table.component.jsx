import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;
    width: 100%;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data }) {
   // Use the state and functions returned from useTable to build your UI
   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
   } = useTable({
      columns,
      data,
   })

   // Render the UI for your table
   return (
      <table {...getTableProps()}>
         <thead>
            {headerGroups.map(headerGroup => (
               <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                     <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
               </tr>
            ))}
         </thead>
         <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
               prepareRow(row)
               return (
                  <tr {...row.getRowProps()}>
                     {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                     })}
                  </tr>
               )
            })}
         </tbody>
      </table>
   )
}

function App({ tableRows }) {
   const columns = React.useMemo(
      () => [
         {
            Header: 'Player',
            columns: [
               {
                  Header: 'Name',
                  accessor: 'playerName',
               },
               {
                  Header: 'Number',
                  accessor: 'playerNumber',
               },
            ],
         },
         {
            Header: 'Stats',
            columns: [
               {
                  Header: 'MP',
                  accessor: 'mp',
               },
               {
                  Header: 'FG',
                  accessor: 'fg',
               },
               {
                  Header: 'FGA',
                  accessor: 'fga',
               },
               {
                  Header: 'FG%',
                  accessor: 'fgp',
               },
               {
                  Header: '3P',
                  accessor: 'p3',
               },
               {
                  Header: '3PA',
                  accessor: 'p3a',
               },
               {
                  Header: '3P%',
                  accessor: 'p3p',
               },
               {
                  Header: 'FT',
                  accessor: 'ft',
               },
               {
                  Header: 'FTA',
                  accessor: 'fta',
               },
               {
                  Header: 'FT%',
                  accessor: 'ftp',
               },
               {
                  Header: 'ORB',
                  accessor: 'orb',
               },
               {
                  Header: 'DRB',
                  accessor: 'drb',
               },
               {
                  Header: 'TRB',
                  accessor: 'trb',
               },
               {
                  Header: 'AST',
                  accessor: 'ast',
               },
               {
                  Header: 'STL',
                  accessor: 'stl',
               },
               {
                  Header: 'BLK',
                  accessor: 'blk',
               },
               {
                  Header: 'TOV',
                  accessor: 'tov',
               },
               {
                  Header: 'PF',
                  accessor: 'pf',
               },
               {
                  Header: 'PTS',
                  accessor: 'pts',
               },
               {
                  Header: '+/-',
                  accessor: 'plusMinus',
               },

            ],
         },
      ],
      []
   )

   const test = tableRows.boxScore.map(row => {
      return { playerName: row.playerName, playerNumber: row.playerNumber, ...row.stats }
   })
   // console.log(test)

   return (
      <Styles>
         <Table columns={columns} data={test} />
      </Styles>
   )
}

export default App
