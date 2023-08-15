// let age = 25; //Number

// console.log(age === 25); // value와 type이 다 같음
// console.log(age === '25'); // '25' string
// console.log(age == '25'); // value만 확인하기 때문에 true

let score = 60;

// if (score === 100) {
//   console.log('축하합니다 A 입니다.')
// } else if (score === 80) {
//   console.log('축하합니다 B 입니다.')
// } else {
//   console.log('분발하세요.')
// }


//Server 데이터 값을 분류
//용량이 Number < String 이기 때문에 인덱싱 하는게
//검색이 훨씬 용이하고 속도도 빠르게 올릴수가 있음

let category = 1;

function Category(category) {
  switch (category) {
    case 0:
      console.log('청바지')
      break;
    case 1:
      console.log('치마')
      break;
    case 2:
      console.log('반팔')
      break;
  }
}

console.log(Category(category));