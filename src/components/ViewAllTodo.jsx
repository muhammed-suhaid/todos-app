import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAllTodo = () => {
    const [todoData, changeTodoData] = useState(
        []
    )

    const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((response) => { changeTodoData(response.data) })
            .catch()
    }

    useEffect(() => { fetchData() }, {})
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">User ID</th>
                                    <th scope="col">Todo ID</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todoData.map((data, index) => {
                                    return (
                                        <tr>
                                            <td>{data.userId}</td>
                                            <td>{data.id}</td>
                                            <td>{data.title}</td>
                                            <td>{data.completed.toString()}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllTodo