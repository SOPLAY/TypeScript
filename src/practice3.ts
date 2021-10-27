type Person = {
  name: string;
  age?: number;
};

type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: "사람1",
  age: 20,
  //skills:['javascript']     //오류 발생 위에서 선언이 안되어 있음
};

const expert: Developer = {
  name: "사람1",
  age: 20,
  skills: ["javascript"],
};

type People = Person[];
const people: People = [person, expert];

type Color = "red" | "orange" | "yellow";
const color: Color = "orange";
