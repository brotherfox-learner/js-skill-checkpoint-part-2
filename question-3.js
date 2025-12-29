// เริ่มเขียนโค้ดตรงนี้
const getUsers = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    return data.filter((e) => e.name.length > 17).map((e) => e.name);
  } catch (error) {
    console.log("เกิด Error ดังนี้: ", error);
  }
};

getUsers()
.then((data) => console.log(data));

// แยกเป็น Callback
const getUsersBelow17 = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  return data.filter((e) => e.name.length > 17).map((e) => e.name);
};

const getUsers2 = async () => {
  try {
    let data = await getUsersBelow17();
    console.log(data);
  } catch (error) {
    console.log("เกิด Error ดังนี้: ", error);
  }
};

getUsers2();
