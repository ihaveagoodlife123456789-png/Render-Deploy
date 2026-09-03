import { useState, useEffect } from 'react'

<<<<<<< HEAD
export function Front() {
=======
export function FrontPage() {
>>>>>>> 9b0c2b0c4c311e4abe11c243a7e3d8d1a3695fe5
    const [users, setUsers] = useState([])

    useEffect(() => {

        const fetchUsers = async () => {
    try {
        const response = await fetch('https://render-deploy-9p38.onrender.com/')

        if(!response.ok) {
            throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        console.log(data);
        setUsers(data);
    } catch (error) {
        console.log(error.message);
    }
}

  fetchUsers();
}, []);

    return (
    <div className="size-full bg-slate-950/80 flex justify-center items-center">
      <div className="h-full w-[45%] flex flex-col justify-center">
        {
            users.map((user, id) => {
                return (
                    <div key={id} className="flex flex-col justify-center items-center bg-slate-950/80 border-2 border-slate-950/80 rounded-lg p-4 m-4">
                      <h2>{user.id}</h2>
                      <h2>{user.name}</h2>
                      <h3>{user.message}</h3>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}
