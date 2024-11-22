// localStorage.clear()


const employees = [
  {
    "id": 1,
    "firstName": "Virat",
    "email": "e@e.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Complete the report",
        "taskDate": "2024-10-20",
        "taskCategory": "Work",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Attend meeting",
        "taskDate": "2024-10-22",
        "taskCategory": "Meeting",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Task 3",
        "taskDescription": "Prepare presentation",
        "taskDate": "2024-10-25",
        "taskCategory": "Work",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Rohit",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 2,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Submit project proposal",
        "taskDate": "2024-10-19",
        "taskCategory": "Work",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Team building activity",
        "taskDate": "2024-10-21",
        "taskCategory": "Event",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 3",
        "taskDescription": "Client meeting",
        "taskDate": "2024-10-23",
        "taskCategory": "Meeting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 4",
        "taskDescription": "Code review",
        "taskDate": "2024-10-22",
        "taskCategory": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Dhoni",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": {
      "active": 0,
      "newTask": 1,
      "completed": 2,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Update project timeline",
        "taskDate": "2024-10-20",
        "taskCategory": "Work",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Submit timesheet",
        "taskDate": "2024-10-22",
        "taskCategory": "Admin",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Task 3",
        "taskDescription": "Fix critical bug",
        "taskDate": "2024-10-21",
        "taskCategory": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Sachin",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Prepare marketing plan",
        "taskDate": "2024-10-25",
        "taskCategory": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Email clients",
        "taskDate": "2024-10-20",
        "taskCategory": "Communication",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Task 3",
        "taskDescription": "Plan product launch",
        "taskDate": "2024-10-30",
        "taskCategory": "Planning",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Yuvi",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 0,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Test new feature",
        "taskDate": "2024-10-20",
        "taskCategory": "QA",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Update documentation",
        "taskDate": "2024-10-22",
        "taskCategory": "Work",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Task 3",
        "taskDescription": "Deploy updates",
        "taskDate": "2024-10-23",
        "taskCategory": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  }
];


const admin = [
  {
    "id": 1,
    // "firstName": "Debojeet",
    "email": "admin@example.com",
    "password": "123",
  },
];


export const setLocalStorage = () => {
    localStorage.setItem('employee', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
    
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employee'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    
    return {employees, admin} 
}