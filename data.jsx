import React from 'react';
import { useState, useEffect } from 'react';
import './data.css';


const  UserData = () => {
    
  const [users, setUsers] = useState([]);
  const [salary, setSalary] = useState([]);
 
  
  const fetchData = () => {
    fetch("http://localhost:8000/data")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
         console.log(data)
      })
  }

  const fetchsalaryData = () => {
    fetch("http://localhost:8001/Salary")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setSalary(data)
         console.log("salary", data)
      })
  }


  useEffect(() => {
    fetchData()
    fetchsalaryData()
  }, []);

  
  



    return (
    <>
        <table className="border-collapse border border-slate-400 min-w-full">
            <thead>
                <tr>
                    <th className="py-2 border border-slate-300">emp_id</th>
                    <th className="py-2 border border-slate-300">Name</th>
                    <th className="py-2 px-9 border border-slate-300">DOB</th>
                    <th className="py-2 px-9 border border-slate-300">Designation</th>
                    <th className="py-2 px-9 border border-slate-300">Country</th>
                    <th className="py-2 px-9 border border-slate-300">Total-salary</th>
                </tr>
            </thead>  

            <tbody>
            {users && users.length > 0 && users.map((userObj, index) => (
                <tr>
                    <td className="text-center py-6 px-3.5 border border-slate-300">{userObj.emp_id}
                    </td>
                    <td className="text-center py-6 px-3.5 border border-slate-300">{userObj.Name}</td>
                    <td className="text-center py-6 px-3.5 border border-slate-300">{userObj.DOB}</td>
                    <td className="text-center py-6 px-9 border border-slate-300">{userObj.Designation}</td>
                    <td className="text-center py-6 px-9 border border-slate-300">{userObj.Country}</td>
                    <td className="text-center py-6 px-9 border border-slate-300"> { userObj.basic_salary + userObj.bonus - userObj.insurance - userObj.professional_tax } </td>
                </tr>
            ))}
     </tbody>
            <thead>
                <tr>
                    <th className="py-2 border border-slate-300">emp_id</th>
                    <th className="py-2 border border-slate-300">salary_id</th>
                    <th className="py-2 px-9 border border-slate-300">date</th>
                    <th className="py-2 px-9 border border-slate-300">basic_salary</th>
                    <th className="py-2 px-9 border border-slate-300">bonus</th>
                    <th className="py-2 px-9 border border-slate-300">insurance</th>
                    <th className="py-2 px-9 border border-slate-300">professional_tax</th>
                    <th className="py-2 px-9 border border-slate-300">Total-salary</th>
                </tr>
            </thead>
            {salary && salary.length > 0 && salary.map((userObj, index ) => (
                     <tr>
                      <td className="py-2 border border-slate-300">{userObj.emp_id}
                      </td>
                      <td className="py-2 border border-slate-300">{userObj.salary_id }</td>
                      <td className="text-center py-6 px-3.5 border border-slate-300">{userObj.date}</td>
                      <td className="text-center py-6 px-9 border border-slate-300">{userObj.basic_salary}</td>
                      <td className="text-center py-6 px-9 border border-slate-300">{userObj.bonus}</td>
                      <td className="text-center py-6 px-9 border border-slate-300"> { userObj.insurance } </td>
                      <td className="text-center py-6 px-9 border border-slate-300">{userObj.professional_tax}</td>
                      <td className="text-center py-6 px-9 border border-slate-300">{ userObj.basic_salary + userObj.bonus - userObj.insurance - userObj.professional_tax}</td>
                 </tr>
            ))}
                
       
         </table>

  </>
    )

}

export default UserData