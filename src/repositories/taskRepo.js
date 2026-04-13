import prisma from '../config/db.js';

export async function findAll({completed})
{
  const conditions = {};
  
  if (completed)
  {
    conditions.OR = [{completed: completed == "true"},]
  }
  const posts = prisma.task.findMany({where: conditions});
  return posts;
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
