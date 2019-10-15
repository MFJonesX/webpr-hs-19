const s1 = x => y => z => x;
const s2 = x => y => z => y;
const s3 = x => y => z => z;

const triple = x => y => z => f => f(x)(y)(z);
const a = t => t(s1);
const b = t => t(s2);
const c = t => t(s3);

const person = triple;
const firstname = a;
const lastname = b;
const age = c;

const oneTwoThree = triple(1);

document.writeln(a(oneTwoThree) === 1);
console.log(a(oneTwoThree) === 1);