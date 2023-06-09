import axios from 'axios';

const getAll_apiUrl = "http://localhost:8080/api/v1/employees";
class EmployeeService {
    // this is client who is calling for service
    getEmlployees() {
        return axios.get(getAll_apiUrl);
    }

    createEmployee(employee) {
        return axios.post(getAll_apiUrl, employee);
    }

    getEmployeeById(employeeId) {
        return axios.get(getAll_apiUrl + '/' + employeeId);
    }
    updateEmployee(employee, employeeid) {
        return axios.put(getAll_apiUrl + "/" + employeeid, employee);
    }
    deleteEmployee(employeeid) {
        return axios.delete(getAll_apiUrl + '/' + employeeid);
    }
}
export default new EmployeeService()