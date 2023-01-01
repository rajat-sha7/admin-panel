import React, { useEffect, useState } from 'react';

import './App.css';
import UserDetail from './UserDetail.js';
import SearchBar from './searchBar';

function App() {
    const [data, setData] = useState([])


    useEffect(() => {
        fetch("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D").then((result) => {
            result.json().then((res) => {

                setData(res)
            })
        })
    }, [])

    const [selectedUser, setSelectedUser] = useState(null);
    const onListItemClick = (user) => {
        setSelectedUser(user);
    };

    const [searchValue, setSearchValue] = useState(" ");

    const onSearchInput = (value) => {
        setSearchValue(value);

        if(value === "") {
            setData(data)
        } else {

            
            const filteredArray= data.filter((i) =>{
         
                return (
                i.firstName.toLowerCase().includes(value.toLowerCase()) || 
                i.lastName.toLowerCase().includes(value.toLowerCase())
                )
                
            })
           
            setData(filteredArray);

        } };


    // console.log(data)

    return (
        <div className="App">

            <SearchBar setSearchValue={onSearchInput}/>
            <div className='mainbox'>
                <div id="table-section">



                    <div id="table-wrapper">

                        <div id="table-headers">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="column1">Id</th>
                                        <th className="column2">FirstName</th>
                                        <th className="column3">LastName</th>
                                        <th className="column4">Email</th>
                                        <th className="column5">Phone</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>


                        <div id="table-data">
                            <table>
                                <tbody>
                                    {data.map((item) =>
                                        <tr className="data-row"

                                            key={"user_item_" + item.id}
                                            onClick={() => onListItemClick(item)}
                                            style={{

                                                backgroundColor: 
                                                // background:
                                                    selectedUser && selectedUser.id === item.id
                                                        ? "salmon"
                                                        : "#f1f1f1"
                                            }}
                                            

                                        >
                                            <td className="column1">{item.id}</td>
                                            <td className="column2">{item.firstName}</td>
                                            <td className="column3">{item.lastName}</td>
                                            <td className="column4">{item.email}</td>
                                            <td className="column5">{item.phone}</td>
                                        </tr>

                                    )}




                                </tbody>
                            </table>
                        </div>



                    </div>

                </div>

                <div id="info-wrapper">
            <h1>Details</h1>
            <p>Click on a table item to get detailed information</p>
                {selectedUser != null && <UserDetail user={selectedUser} />}
                </div>
             


            </div>
            

        </div>
    );
}

export default App;
