import styled from "styled-components";

import { capitalzeFirstLetter } from "../shared/utils";

const styledTable = styled.table`
 border: none;
 border-collapse: separate;
 td,
 th{
     border: 1px solid;
 }
 td {
     padding: 5px 10px;
 }
 tbody tr {
     :nth-of-type(even) {
         background-color: ${(props) => props.theme.primary.light};
     }
     :hover {
         background-color: ${(props) =>props.theme.primary.dark};
     }
 }
     thead > tr {
         background-color: ${(props)=>props.theme.primary.main};
     }

     tr > th {
         padding: 0.25em 0.5em;
     }
     tr > td{
         cursor: pointer;
     }
     caption{
         font-size: 0.9em;
         padding: ${(props) => props.theme.spacing(1)};
         font-weight: bold;
     }

`;

const TableMarkup = ({titles, data, handleClick, caption}) => (
    <styledTable>
        <caption>{caption}</caption>
        <colgroup>
        {titles.map((title, index) => (
          <col key = {index} />
         ))}
         </colgroup>
         <thead>
             <tr>
                 {titles.map((title, index) => (
                     <th key = {index} > {capitalzeFirstLetter(title)} </th>
                 ))}
             </tr>
         </thead>
         <tbody>
             {data.map((item, index) => (
                 <tr key = {index} onClick= {() =>handleClick(item.id)}>
                     {titles.map((title, index) => (
                         <td key = {index}> {
                             typeof item[title] === "boolean"
                             ?
                             item[title] 
                             ? "Yes"
                             : "No"
                            :item[title]}
                            </td>
                     
                      ))}
                  </tr>
             ))}
         </tbody>
    </styledTable>
);

const Table = ({data, handleRowClick, instruction}) => 
data ? (
  <TableMarkup 
    titles = {Object.keys(data[0])} 
    data={data}
    handleClick = {handleRowClick ? handleRowClick : () =>{}}
    caption={instruction ? instruction : ""}
/>
 ) : (
     "No data to populate"
);

export default Table;