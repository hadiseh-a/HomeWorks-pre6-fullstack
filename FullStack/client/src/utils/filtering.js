export const filterdTasksby = (tasks, filterdBy, howBe) =>
  tasks.filter((task) => task[filterdBy] === howBe);

export const sherchingTask = (tasks, searchTerm) => {
  if (!searchTerm) return tasks;

  const term = searchTerm.toLowerCase();

  const filtered = tasks.filter((task) =>
    task.title.toLowerCase().includes(term)
  );

  return filtered.sort((a, b) => {
    const aStarts = a.title.toLowerCase().startsWith(term);
    const bStarts = b.title.toLowerCase().startsWith(term);

    if (aStarts && !bStarts) return -1;
    if (!aStarts && bStarts) return 1;
    
    return 0;
  });
};

export const orderingTask = (tasks, orderBy) => {
  if (!orderBy || orderBy === "Order added") {
    return [...tasks];
  }

  const tasksCopy = [...tasks];

  switch (orderBy.toLowerCase()) {
    case "earlier first":
      return tasksCopy.sort(
        (a, b) => new Date(a.deadline) - new Date(b.deadline)
      );

    case "later first":
      return tasksCopy.sort(
        (a, b) => new Date(b.deadline) - new Date(a.deadline)
      );

    case "completed first":
      return tasksCopy.sort((a, b) => {
        return (b.completed === true) - (a.completed === true);
      });

    case "uncompleted first":
      return tasksCopy.sort((a, b) => {
        return (a.completed === true) - (b.completed === true);
      });

    default:
      return tasks;
  }
};
