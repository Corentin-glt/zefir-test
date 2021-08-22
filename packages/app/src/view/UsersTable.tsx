import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_USERS = gql`
  query GetUsers($input: PaginationDTO!) {
    usersConnection(paginationInput: $input) {
      count
      items {
        id
        email
        fib
        anagram {
          id
        }
      }
    }
  }
`;

interface Anagram {
  id: string;
}
interface User {
  id: string;
  email: string;
  fib: number;
  anagram: Anagram;
}

function UsersTable() {
  const { data } = useQuery(GET_USERS, {
    variables: {
      input: {
        limit: 200,
        offset: 0,
      },
    },
  });

  const count = data?.usersConnection.count || 0;
  const users = data?.usersConnection.items || [];

  return (
    <div className="flex items-center justify-center">
      <div className="col-span-12">
        <div className="font-bold text-left ">Total: {count}</div>
        <table className="table-auto text-gray-400 border-separate space-y-6 text-sm">
          <thead className="bg-blueGray-800 text-gray-500">
            <tr>
              <th className="p-3 text-left font-bold text-white">Email</th>
              <th className="p-3 text-left font-bold text-white">Fib result</th>
              <th className="p-3 text-left font-bold text-white">ID</th>
              <th className="p-3 text-left font-bold text-white">Anagram ID</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: User) => {
              return (
                <tr className="bg-blueGray-800 rounded-lg">
                  <td className="p-3 text-white text-left">{user.email}</td>
                  <td className="p-3 text-white text-left">{user.fib}</td>
                  <td className="p-3 text-white text-left">{user.id}</td>
                  <td className="p-3 text-white text-left">
                    {user.anagram.id}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersTable;
