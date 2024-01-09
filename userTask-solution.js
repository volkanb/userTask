const users = [
  { id: 1, name: 'John', email: 'john@test.com', department: 'IT' },
  { id: 2, name: 'Doe', email: 'Doe@test.com', department: 'Marketing' },
  { id: 3, name: 'Morgan', email: 'Morgan@test.com', department: 'IT' },
  { id: 4, name: 'Martha', email: 'Martha@test.com', department: 'Marketing' },
  { id: 5, name: 'Dave', email: 'Dave@test.com', department: 'Sales' },
  { id: 6, name: 'Oslo', email: 'Oslo@test.com', department: 'Sales' },
  { id: 7, name: 'Qiev', email: 'Qiev@test.com', department: 'Product' },
  { id: 8, name: 'Hanzel', email: 'Hanzel@test.com', department: 'Product' },
  { id: 9, name: 'Mats', email: 'Mats@test.com', department: 'Sales' },
  { id: 10, name: 'Yoshimura', email: 'Yoshimura@test.com', department: 'IT' }
]

const tasks = [
  { id: 1, department: 'IT', title: 'Develop company landing page' },
  { id: 2, department: 'IT', title: 'Develop company API' },
  { id: 3, department: 'Product', title: 'Call customers' },
  { id: 4, department: 'Sales', title: 'Sells more!' },
  { id: 5, department: 'IT', title: 'QA' },
]

/**
 * Imagine there are 2 tables of users and tasks.
 * As a User I want to know which user belongs to the task in the same department.
 * 
 * What you need todo:
 * 1. Create a function to map between task and its users.
 *    result:
 *    [
 *      {id: 1, department: 'IT', title: 'Develop company landing page', users: [{ id: 1, ...//omitted }, { id: 3, ...//omitted }] },
 *      ...//omitted
 *    ]
 * 2. Explain the time complexities of your code.
 * 3. Don't send your solution here.
 */


// -----------------------------------------------------------------

/**
 * The mapTasksToUsers function maps users to tasks
 * and returns an array of updated task objects that have
 * 'users' arrays. 
 * 
 * The time complexity of this function is
 * O(N + M), where N is the number of users and M is the 
 * number of tasks.
 * 
 * The initial loop through the users( O(N) ) to build the lookup
 * table has a linear time complexity based on the number
 * of users. The subsequent loop through tasks( O(M) ) accesses the
 * user information directly from the lookup table, which
 * has constant time complexity.
 */

function mapTasksToUsers(users, tasks) {
  const departmentUserMap = {};

  // Build a department-based user lookup table
  users.forEach(user => {
    if (!departmentUserMap[user.department]) {
      departmentUserMap[user.department] = [];
    }
    departmentUserMap[user.department].push(user);
  });

  const taskUsersArray = [];

  // Iterate through tasks and use the lookup table
  tasks.forEach(task => {
    const taskUsers = departmentUserMap[task.department] || [];
    taskUsersArray.push({
      ...task,
      users: taskUsers,
    });
  });

  return taskUsersArray;
}

const taskUsersArray = mapTasksToUsers(users, tasks);
console.log(taskUsersArray);