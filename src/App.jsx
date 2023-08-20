import { useState } from "react";
import Employee from "./components/Employee";
import { v4 as uuidv4 } from "uuid";

import "./index.css";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import DeleteEmployee from "./components/DeleteEmployee";
import Header from "./components/Header";

function App() {
  function deleteEmployee(id) {
    const updatedEmployees = employees.filter((employee) => {
      if (employee.id != id) {
        return employee;
      }
    });
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    setEmployee(updatedEmployees);
  }
  function addEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    const updatedEmployees = [...employees, newEmployee];
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    setEmployee(updatedEmployees);
  }
  function updateEmployee(id, name, role, img) {
    const updateEmployees = employees.map((employee) => {
      if (employee.id == id) {
        return { ...employee, name: name, role: role, img: img };
      }
      return employee;
    });
    localStorage.setItem("employees", JSON.stringify(updateEmployees));
    setEmployee(updateEmployees);
  }

  const [employees, setEmployee] = useState([]);
  if (localStorage.getItem("employees")) {
    if (!(localStorage.getItem("employees") === JSON.stringify(employees))) {
      setEmployee(JSON.parse(localStorage.getItem("employees")));
    }
  } else {
    let data = [
      {
        id: uuidv4(),
        name: "Afham Ahmed",
        role: "Developer",
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: uuidv4(),
        name: "John Doe",
        role: "Manager",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: uuidv4(),
        name: "Jake Morris",
        role: "H.R.",
        img: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: uuidv4(),
        name: "Tom Havard",
        role: "Accountant",
        img: "https://images.pexels.com/photos/997472/pexels-photo-997472.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: uuidv4(),
        name: "Drake",
        role: "Senior Developer",
        img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: uuidv4(),
        name: "Louis Jane",
        role: "CEO",
        img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ];

    setEmployee(data);
    localStorage.setItem("employees", JSON.stringify(data));
  }

  return (
    <div className="App">
      <Header />
      <div className="flex flex-wrap flex-col justify-center gap-3 items-center">
        <div className="flex flex-wrap justify-center">
          {employees.map((employee) => {
            const removeEmployee = (
              <DeleteEmployee
                heading="Delete Employee"
                id={employee.id}
                deleteEmployee={deleteEmployee}
              />
            );
            const editEmployee = (
              <EditEmployee
                heading="Update Employee"
                id={employee.id}
                name={employee.name}
                role={employee.role}
                img={employee.img}
                updateEmployee={updateEmployee}
              />
            );
            return (
              <Employee
                key={employee.id}
                id={employee.id}
                name={employee.name}
                role={employee.role}
                img={employee.img}
                editEmployee={editEmployee}
                removeEmployee={removeEmployee}
              />
            );
          })}
        </div>
        <AddEmployee addEmployee={addEmployee} heading="Add Employee" />
      </div>
    </div>
  );
}

export default App;
