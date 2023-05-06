export async function getData(value) {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/${value}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
