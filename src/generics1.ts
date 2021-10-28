//  <T1 , T2> => 제너릭
function merge<T1, T2>(a: T1, b: T2) {
  return {
    ...a,
    ...b,
  };
}

const merged = merge({ foo: 1 }, { bar: 1, foobar: 3 });

function wrap<T>(param: T) {
  return {
    param,
  };
}
const wrapped = wrap(10);
wrapped.param;

/////
/** 
interface Items<T> {
  list: T[];
}
*/
type Items<T, V> = {
  list: T[];
  value: V;
};

const items: Items<number, string> = {
  list: [1, 2, 3, 4],
  value: "aaa",
};

///
