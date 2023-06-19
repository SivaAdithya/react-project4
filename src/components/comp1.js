import Axios from 'axios';
import {useState, useEffect} from 'react';
import './comp1.css';


export function Comp1()
{

    const [data, setData] = useState([]);
    useEffect(()=>{        
        Axios.get('https://dummyjson.com/users')
        .then((res)=>{
            if(res.status===200)
            {
                //console.log(res.data.products);
                setData(res.data.users);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{
            alert(err);
        })
        },[])

    return (
        <div class="mx-2">
            <div class="display-4  py-3">Users Table</div>
            <table class="table table-striped table-dark">
                <thead class="thead-dark">
                <tr>
                <th>Id</th>
                <th>FirstName</th> <th>LirstName</th> <th>Age</th> <th>Gender</th> <th>Email</th> <th>Phone</th> <th>Username</th> 
                <th>Birth Date</th> <th>Image</th> <th>height</th> <th>Weight</th> <th>City</th> <th>Latitude</th> <th>Longitude</th> 
                <th>Card Expire Date</th> <th>Company Name</th>  
                </tr></thead>
                {(data.map((val,ind)=>{
                    return <tr><td>{val.id}</td><td>{val.firstName}</td> <td>{val.lastName}</td> <td>{val.age}</td> <td>{val.gender}</td> <td>{val.email}</td> 
                    <td>{val.phone}</td> <td>{val.username}</td> <td>{val.birthDate}</td> <td><img src={val.image}></img></td> <td>{val.height}</td>
                    <td>{val.weight}</td> <td>{val.address.city}</td> <td>{val.address.coordinates.lat}</td> <td>{val.address.coordinates.lng}</td> 
                    <td>{val.bank.cardExpire}</td> <td>{val.company.name}</td>     
                    </tr>
                }))}
            </table>
        </div>
    )
}