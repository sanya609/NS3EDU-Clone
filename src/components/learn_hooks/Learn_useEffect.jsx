import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Learn_useEffect = () => {
    const [name, setName] = useState("Sanya");
    const updateName = () => {
        setName("Deepika");
    }

    const getData = async()=>{
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(response, "data from api");
        } catch (error) {
           console.log(error,"error ==============="); 
        }
        
    }

    useEffect(() => {
        updateName();
        getData();
    }, [])

 
    return (
        <>
            <h1 >user Effect component</h1>
            <h2>{name}</h2>
            <h2 className='text-info'>test bootstrap</h2>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>John</td>
                            <td>Doe</td>
                            <td>@social</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Learn_useEffect