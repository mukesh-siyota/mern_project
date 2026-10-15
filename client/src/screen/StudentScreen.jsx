import React from "react";

function StudentScreen() {
  const [students, setStudents] = React.useState([
    {
      id: 1,
      name: "Aarav Sharma",
      dob: "2004-05-12",
      email: "aarav.sharma@example.com",
      phone: "+91-9000000001",
      createdAt: "2026-01-10T09:30:00Z",
      updatedAt: "2026-01-10T09:30:00Z",
    },
    {
      id: 2,
      name: "Priya Verma",
      dob: "2003-08-24",
      email: "priya.verma@example.com",
      phone: "+91-9000000002",
      createdAt: "2026-01-11T10:15:00Z",
      updatedAt: "2026-02-01T12:00:00Z",
    },
    {
      id: 3,
      name: "Rahul Singh",
      dob: "2004-02-17",
      email: "rahul.singh@example.com",
      phone: "+91-9000000003",
      createdAt: "2026-01-12T08:45:00Z",
      updatedAt: "2026-01-12T08:45:00Z",
    },
    {
      id: 4,
      name: "Sneha Patel",
      dob: "2003-11-05",
      email: "sneha.patel@example.com",
      phone: "+91-9000000004",
      createdAt: "2026-01-15T11:20:00Z",
      updatedAt: "2026-02-10T14:30:00Z",
    },
    {
      id: 5,
      name: "Vikram Mehta",
      dob: "2004-07-19",
      email: "vikram.mehta@example.com",
      phone: "+91-9000000005",
      createdAt: "2026-01-18T07:50:00Z",
      updatedAt: "2026-01-18T07:50:00Z",
    },
    {
      id: 6,
      name: "Ananya Gupta",
      dob: "2003-04-28",
      email: "ananya.gupta@example.com",
      phone: "+91-9000000006",
      createdAt: "2026-01-20T13:10:00Z",
      updatedAt: "2026-02-05T09:45:00Z",
    },
    {
      id: 7,
      name: "Rohan Joshi",
      dob: "2004-09-14",
      email: "rohan.joshi@example.com",
      phone: "+91-9000000007",
      createdAt: "2026-01-22T10:00:00Z",
      updatedAt: "2026-01-22T10:00:00Z",
    },
    {
      id: 8,
      name: "Kavya Reddy",
      dob: "2003-12-09",
      email: "kavya.reddy@example.com",
      phone: "+91-9000000008",
      createdAt: "2026-01-25T15:25:00Z",
      updatedAt: "2026-02-12T16:40:00Z",
    },
    {
      id: 9,
      name: "Aditya Kumar",
      dob: "2004-01-30",
      email: "aditya.kumar@example.com",
      phone: "+91-9000000009",
      createdAt: "2026-02-01T09:00:00Z",
      updatedAt: "2026-02-01T09:00:00Z",
    },
    {
      id: 10,
      name: "Meera Shah",
      dob: "2003-06-16",
      email: "meera.shah@example.com",
      phone: "+91-9000000010",
      createdAt: "2026-02-03T12:35:00Z",
      updatedAt: "2026-02-15T11:10:00Z",
    },
    {
      id: 11,
      name: "Arjun Malhotra",
      dob: "2004-03-22",
      email: "arjun.malhotra@example.com",
      phone: "+91-9000000011",
      createdAt: "2026-02-05T08:20:00Z",
      updatedAt: "2026-02-05T08:20:00Z",
    },
    {
      id: 12,
      name: "Ishita Jain",
      dob: "2003-10-11",
      email: "ishita.jain@example.com",
      phone: "+91-9000000012",
      createdAt: "2026-02-08T14:50:00Z",
      updatedAt: "2026-02-18T10:30:00Z",
    },
  ]);

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {students.map((sRow) => (
            <tr>
              <td>{sRow.id}</td>
              <td>{sRow.name}</td>
              <td>{sRow.email}</td>
              <td>{sRow.dob}</td>
              <td>{sRow.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentScreen;
