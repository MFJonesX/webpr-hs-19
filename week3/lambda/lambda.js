const id = x => x; // Identitätsfunktion
const konst = x => y => x; // Funktion konst: nimmt ein x entgegen und ein y und gibt das x zurück (ignoriert das y).

//const snd = x => y => y; // Funktion kite: nimmt ein x entgegen und ein y und gibt das y zurück (ignoriert das x).
//const snd = x => konst(id)(x); // Die obere Funktion kann mach auch kürzen.
const snd = konst(id); // Eta reduziert die obere Zeile

/** ETA Redouktion **/
/* Wenn der Rechteste Parameter ignoriert wird kann die klammer weg gelassen werden */
//const T = x => y => x;
//const T = x => y => konst(x)(y)
//const T = x => konst(x)
const T = konst; //if Abfrage
//const F = x => y => snd(x)(y) //if Abfrage
//const F = x => snd(x) //if Abfrage
const F = snd; //if Abfrage
const M = f => f(f); // Mockingbird

/*const and = x => y => x(y)(x);
const or = M;*/

/** Was ist Algebra **/
/* Ist eine Art Schlussfolgerungen zu ziehen */
/* Schlussfolgern durch ausgleichen und ergänzen */
/* Das ist genau das was wir mit der Eta Reduktion machen. Unser Code wird als algebrarischer Term behandelt. */

// const and = x => y => x ( y (T)(F) ) ( y(F)(F));
// const and = x => y => x ( y (T)(F) ) (x);
const and = x => y => x (y)(x);

// const or = x => y => x ( y(T)(T) ) ( y(T)(F) );
// const or = x => y => x (x) (y);
// const or = x => y => x (x)(y);
// const or = x => x (x);
const or = M;


const Pair = first => last => selector => selector (first) (last);
const firstname = konst;
const lastname = snd;

const Left   = x => fl => fr => fl(x);
const Right  = x => fl => fr => fr(x);
const either = id;