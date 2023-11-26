interface ObjectShape {
   readonly id: number;
   username: string;
   age: number;
}

const initialArr: ObjectShape[] = [
   { id: 1, username: 'john', age: 20 },
   { id: 2, username: 'al', age: 30 },
   { id: 3, username: 'stan', age: 40 },
];

function updateObjectInArray<T>(
   arr: T[],
   key: keyof T,
   value: T[keyof T],
   patch: Partial<T>
): T[] {
   return arr.map((elem: T) => {
      if (elem[key] === value) {
         return { ...elem, ...patch };
      }
      return elem;
   });
}

console.log(
   updateObjectInArray<ObjectShape>(initialArr, 'id', 3, {
      age: 25,
   })
);

