import DataTable from "react-data-table-component"
import { useState, useEffect } from "react"
// import  Usersalarys  from "./post";


function UserData(props) {
  const [data, setData] = useState([])
  const [salary, setSalary] = useState([])

  const salarycol =  [
    {
      name: "emp_id",
      selector: (row) =>  row.emp_id,
      default: {sortable: true},
      sortable: true,
    },
    {
      name: "salary_id",
      selector: (row) => row.salary_id,
    },
    {
      name: "date",
      selector: (row) => row.date,
    },
    {
      name: "basic_salary",
      selector: (row) => row.basic_salary,
    },
    {
      name: "bonus",
      selector: (row) => row.bonus,
    },
    {
      name: "insurance",
      selector: (row) => row.insurance,
    },
    {
      name: "professional_tax",
      selector: (row) => row.professional_tax,
    },
    {
      name: "Total-salary",
      selector: (row) =>  <h3>{ row.basic_salary + row.bonus - row.insurance - row.professional_tax}</h3>
    
    },
  ]

  const columns = [
    {
      name: "emp_id",
      selector: (row) => row.emp_id,
    },
    {
      name: "Name",
      selector: (row) => row.Name,
    },
    {
      name: "DOB",
       selector: (row) => (row.DOB ? row.DOB : 18), 
    },
    {
      name: "Designation",
      selector: (row) => row.Designation,
    },
    {
      name: "Country",
      selector: (row) => (row.Country ? row.Country : 'India'),
    },
    {
      name: "Total-salary",
      selector: (row) => row.professional_tax,
    },
  ]
  



  useEffect(() => {
    fetchTableData();
    fetchTableData2();
  }, [])

  

  async function fetchTableData() {
    const URL = "http://localhost:8000/data"

    const response = await fetch(URL)
    const users = await response.json()
   
    console.log(users)
    setData(users)
  }

  async function fetchTableData2() {
    const URL2 = "http://localhost:8001/Salary"
    const response2 = await fetch(URL2)
    const users2 = await response2.json()
    console.log(users2);
    setSalary(users2)
  }


  const Usersalarys = () => {
    return(
    <DataTable
      columns={salarycol}
      data={salary}
    />
    )
  }

  return (
    <div style={{ margin: "20px" }}>
      <DataTable
        columns={columns}
        data={data}
        expandableRows
        highlightOnHover
        expandableRowsComponent={ <Usersalarys />}
      />
      <Usersalarys />
    </div>
  )



}

export default UserData
