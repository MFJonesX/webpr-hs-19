const Left = x => f => g => f (x);
const Right = x => f => g => g (x);
const either = e => f => g => e (f) (g);

const id = a => a;

const safeDiv = num => divisor => divisor === 0
    ? Left ("Cannot divide by 0")
    : Right (num / divisor);

//onst result = safeDiv(1)(0);

//either (result)(msg => document.writeln(msg))(val => document.writeln(val === 1));
// either (f)(msg => document.writeln(msg))(val => document.writeln(Result is: " + x_));

const x_ = Math.random();

//const eShow = f => f === "Cannot divide by 0" ? either (f)(msg => document.writeln(msg)) : either (f)(val => document.writeln("Result is: " + x_));
const eShow = f => f(either (f)(msg => document.writeln(msg))(document.writeln("Result is: " + x_)));
//const eShow = f => f(id)(a => "Result is" + a);

eShow(safeDiv(1)(0)) === "Cannot divide by 0" && eShow( safeDiv(x_)(1)) === "Result is: " + x_;
