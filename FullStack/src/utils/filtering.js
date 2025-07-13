export const filterdTasksby = (tasks, filterdBy, howBe) =>
  tasks.filter((task) => task[filterdBy] === howBe);
