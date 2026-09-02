import { useState, useEffect } from 'react'

export async function FrontPage() {
    const [users, setUsers] = useState([])

    useEffect(async () => {
    try {
        const response = await fetch('/')

        if(!response.ok) {
            throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        console.log(data);
        setUsers(data);
    } catch (error) {
        console.log(error.message);
    }
}, []);

    return (
    <div className="size-full bg-slate-950/80 flex justify-center items-center">
      <div className="h-full w-[45%] flex flex-col justify-center">
        {
            users.map((user, id) => {
                return (
                    <>
                      <h2 key={id}>{user.id}</h2>
                      <h2 key={id}>{user.name}</h2>
                      <h3 key={id}>{user.message}</h3>
                    </>
                )
            })
        }
      </div>
    </div>
  )
}