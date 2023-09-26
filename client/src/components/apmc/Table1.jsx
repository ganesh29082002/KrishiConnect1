import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
const customStyles = {
    rows: {
        style: {
            // override the row height
            minHeight: '48px'

        },
    },
    headRow: {
        style: {
            backgroundColor: '#1c8c59',

        }
    },
    headCells: {
        style: {
            fontSize: "16px",
            fontWeight: "600",
            textTransform: "uppercase",
            borderStyle: 'solid',
            borderWidth: '1px',
            color: 'white'
            
        }
    },
    cells: {
        style: {
            fontSize: "15px",
            wordBreak: 'break-word',
            borderStyle: 'solid',
            borderWidth: '1px',
            color: '#1c8c59'

        }
    }
}
function Table1() {
    const column = [
        {
            name: "State",
            selector: row => row.id,
            sortable: true
        }, {
            name: "APMC's",
            selector: row => row.name,
            sortable: true
        }, {
            name: "Commodity",
            selector: row => row.email,
            sortable: true
        }, {
            name: "Min Price",
            selector: row => row.address.city,
            sortable: true
        }, {
            name: "Max Price",
            selector: row => row.address.city,
            sortable: true
        }, {
            name: "Date",
            selector: row => row.address.city,
            sortable: true
        }
    ]
    useEffect(() => {

        const fetdata = async () => {

            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(res => {
                    setRecords(res.data)
                    setFilterRecords(res.data)
                }
                )
                .catch(err => console.log(err))
        }
        fetdata();
    }, [])
    const [records, setRecords] = useState([]);
    const [filterRecords, setFilterRecords] = useState([]);
    const hendeFilter = (event)=>{
        const newData = filterRecords.filter(row => row.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setRecords(newData);
    }
    return (
        <div style={{ padding: "7% 7%", backgroundColor: "white", backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png");' , color : "#1c8c59"  }}>
           <div style={{display:"flex",justifyContent:"left",padding:"0.2% 0.2% "}}>
           <input type='text ' className=" border-bottom border-success mb-3 bg-white custumShadow p-2 px-2 inputField text-center" style={{width : "270px"}} onChange={hendeFilter} placeholder='Search APMC Market Price' />
           </div>
            <DataTable columns={column}
                data={records} customStyles={customStyles} pagination style={{color : "#1c8c59" }} />
        </div>



    )
}

export default Table1;