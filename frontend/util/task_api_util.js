export const fetchTasks = () => (
  $.ajax({
    method: 'GET',
    url: 'api/tasks'
  })
);
export const receiveListsTasks = (list_payload) => (
  $.ajax({
    method: 'GET',
    url: `api/lists/${listId}`,
    data: list_payload.tasks
  })
);

export const fetchTask = id => (
  $.ajax({
    method: 'GET',
    url: `api/tasks/${id}`
  })
);

export const createTask = task => (
  $.ajax({
    method: 'POST',
    url: 'api/tasks',
    data: {task}
  })
);

export const updateTask = task => {
  return $.ajax({
    method: 'PATCH',
    url: `api/tasks/${task.id}`,
    data: {task}
  })
};

export const deleteTask = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/tasks/${id}`
  })
);
