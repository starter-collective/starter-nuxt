export default defineEventHandler(async () => {
  try {
    const data = await $fetch('https://jsonplaceholder.typicode.com/todos')
    return data
  }
  catch {
    return []
  }
})
