// Q1: Solve the below code of expressions using short circuit?
/*
Question No: 1
Question: let exp1 = ((4 + 5) && "abc" || false + "test") * (a-- || --a) || (false && (++a + 1)) * "end";
Solving: (a starts at 5)
         (9 && "abc" || "falsetest") * (5 || --a) || (false) * "end" // a becomes 4
         ("abc") * (5) || 0
         NaN || 0
Result: 0
Final Value of 'a': 4

// Solving Output (Code must be commented out as per instruction):
// let exp1 = ((4 + 5) && "abc" || false + "test") * (a-- || --a) || (false && (++a + 1)) * "end";
// console.log Output (For Verification):
// console.log(`Question No: 1 | Output: exp1 = 0 | a = 4`); 
*/

// Current Value of 'a' before Q2: 4


// Q2: Solve the below code of expressions using short circuit?
/*
Question No: 2
Question: let exp2 = 10 * ("foo" && 5 + (++a) || "bar") && (false + "test") || 0 && true;
Solving: (a starts at 4)
         10 * ("foo" && 5 + 5 || "bar") && "falsetest" || 0 // a becomes 5
         10 * (10) && "falsetest" || 0
         100 && "falsetest" || 0
         "falsetest" || 0
Result: "falsetest"
Final Value of 'a': 5

// Solving Output:
// let exp2 = 10 * ("foo" && 5 + (++a) || "bar") && (false + "test") || 0 && true;
// console.log Output:
// console.log(`Question No: 2 | Output: exp2 = falsetest | a = 5`); 
*/

// Current Value of 'a' before Q3: 5


// Q3: Solve the below code of expressions using short circuit?
/*
Question No: 3
Question: let exp3 = 3 + (a-- || "start") * 4 && (--a + "value") * (1 + 2) + "result";
Solving: (a starts at 5)
         3 + (5 || "start") * 4 && (3 + "value") * 3 + "result" // a becomes 4, then 3
         3 + 5 * 4 && "3value" * 3 + "result"
         23 && NaN + "result"
         23 && "NaNresult"
Result: "NaNresult"
Final Value of 'a': 3

// Solving Output:
// let exp3 = 3 + (a-- || "start") * 4 && (--a + "value") * (1 + 2) + "result";
// console.log Output:
// console.log(`Question No: 3 | Output: exp3 = NaNresult | a = 3`); 
*/

// Current Value of 'a' before Q4: 3


// Q4: Solve the below code of expressions using short circuit?
/*
Question No: 4
Question: let exp4 = "hello" * (++a + true) || (2 + 3 * "abc") * (0 + 1) + "xyz" && 0;
Solving: (a starts at 3)
         "hello" * (4 + 1) || (2 + NaN) * 1 + "xyz" && 0 // a becomes 4
         NaN || NaN * 1 + "xyz" && 0
         NaN || "NaNxyz" && 0
         NaN || 0
Result: 0
Final Value of 'a': 4

// Solving Output:
// let exp4 = "hello" * (++a + true) || (2 + 3 * "abc") * (0 + 1) + "xyz" && 0;
// console.log Output:
// console.log(`Question No: 4 | Output: exp4 = 0 | a = 4`); 
*/

// Current Value of 'a' before Q5: 4


// Q5: Solve the below code of expressions using short circuit?
/*
Question No: 5
Question: let exp5 = (true || (0 + 1) * "test" && 4) || (false && 3 + "value") * a-- + 2;
Solving: (a starts at 4)
         (true) || ... // Short-circuit || on the left side
Result: true
Final Value of 'a': 4 (a-- is not executed)

// Solving Output:
// let exp5 = (true || (0 + 1) * "test" && 4) || (false && 3 + "value") * a-- + 2;
// console.log Output:
// console.log(`Question No: 5 | Output: exp5 = true | a = 4`); 
*/

// Current Value of 'a' before Q6: 4


// Q6: Solve the below code of expressions using short circuit?
/*
Question No: 6
Question: let exp6 = ++a + "abc" && (4 * 2) + 3 || (0 + 1) && (3 * "hello") || a--;
Solving: (a starts at 4)
         5 + "abc" && 11 || ... // a becomes 5
         "5abc" && 11 || ...
         11 || ... // Short-circuit ||
Result: 11
Final Value of 'a': 5

// Solving Output:
// let exp6 = ++a + "abc" && (4 * 2) + 3 || (0 + 1) && (3 * "hello") || a--;
// console.log Output:
// console.log(`Question No: 6 | Output: exp6 = 11 | a = 5`); 
*/

// Current Value of 'a' before Q7: 5


// Q7: Solve the below code of expressions using short circuit?
/*
Question No: 7
Question: let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";
Solving: (a starts at 5)
         "foo5" * (6 + 1) || 6 + 3 || "result" // a becomes 6
         NaN || 9 || "result"
         9 || "result" // Short-circuit ||
Result: 9
Final Value of 'a': 6

// Solving Output:
// let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";
// console.log Output:
// console.log(`Question No: 7 | Output: exp7 = 9 | a = 6`); 
*/

// Current Value of 'a' before Q8: 6


// Q8: Solve the below code of expressions using short circuit?
/*
Question No: 8
Question: let exp8 = (0 + 1) && (true + 0) || (false + "test") * 4 && 3 + 2 || "value";
Solving: (a starts at 6)
         1 && 1 || ...
         1 || ... // Short-circuit ||
Result: 1
Final Value of 'a': 6 (a is unchanged)

// Solving Output:
// let exp8 = (0 + 1) && (true + 0) || (false + "test") * 4 && 3 + 2 || "value";
// console.log Output:
// console.log(`Question No: 8 | Output: exp8 = 1 | a = 6`); 
*/

// Current Value of 'a' before Q9: 6


// Q9: Solve the below code of expressions using short circuit?
/*
Question No: 9
Question: let exp9 = 3 * "abc" + (true + 1) || (++a + "test") && (3 + "result") || null;
Solving: (a starts at 6)
         NaN + 2 || (7 + "test") && "3result" || null // a becomes 7
         NaN || "7test" && "3result" || null
         "3result" || null // Short-circuit ||
Result: "3result"
Final Value of 'a': 7

// Solving Output:
// let exp9 = 3 * "abc" + (true + 1) || (++a + "test") && (3 + "result") || null;
// console.log Output:
// console.log(`Question No: 9 | Output: exp9 = 3result | a = 7`); 
*/

// Current Value of 'a' before Q10: 7


// Q10: Solve the below code of expressions using short circuit?
/*
Question No: 10
Question: let exp10 = (++a + false) && "start" || 0 + 1 && "value" || 5 * "end" && a++;
Solving: (a starts at 7)
         (8 + 0) && "start" || ... // a becomes 8
         8 && "start" || ...
         "start" || ... // Short-circuit ||
Result: "start"
Final Value of 'a': 8

// Solving Output:
// let exp10 = (++a + false) && "start" || 0 + 1 && "value" || 5 * "end" && a++;
// console.log Output:
// console.log(`Question No: 10 | Output: exp10 = start | a = 8`); 
*/

// Current Value of 'a' before Q11: 8


// Q11: Solve the below code of expressions using short circuit?
/*
Question No: 11
Question: let exp11 = (false && "hello") + (a++ || 3 + "test") * 4 || 5 * "abc" && 0;
Solving: (a starts at 8)
         false + (8 || 3 + "test") * 4 || ... // a becomes 9
         0 + 8 * 4 || ...
         32 || ... // Short-circuit ||
Result: 32
Final Value of 'a': 9

// Solving Output:
// let exp11 = (false && "hello") + (a++ || 3 + "test") * 4 || 5 * "abc" && 0;
// console.log Output:
// console.log(`Question No: 11 | Output: exp11 = 32 | a = 9`); 
*/

// Current Value of 'a' before Q12: 9


// Q12: Solve the below code of expressions using short circuit?
/*
Question No: 12
Question: let exp12 = "hello" * (true + 0) + 2 || (false + 1) * 3 && "result" || 4 + "test";
Solving: (a starts at 9)
         NaN + 2 || 1 * 3 && "result" || 4 + "test"
         NaN || 3 && "result" || "4test"
         NaN || "result" || "4test"
Result: "result"
Final Value of 'a': 9 (a is unchanged)

// Solving Output:
// let exp12 = "hello" * (true + 0) + 2 || (false + 1) * 3 && "result" || 4 + "test";
// console.log Output:
// console.log(`Question No: 12 | Output: exp12 = result | a = 9`); 
*/

// Current Value of 'a' before Q13: 9


// Q13: Solve the below code of expressions using short circuit?
/*
Question No: 13
Question: let exp13 = 5 * (a++ || false) + 2 && (false + "test") || 3 * "end" && 4;
Solving: (a starts at 9)
         5 * (9 || false) + 2 && "falsetest" || ... // a becomes 10
         45 + 2 && "falsetest" || ...
         47 && "falsetest" || ...
         "falsetest" || ... // Short-circuit ||
Result: "falsetest"
Final Value of 'a': 10

// Solving Output:
// let exp13 = 5 * (a++ || false) + 2 && (false + "test") || 3 * "end" && 4;
// console.log Output:
// console.log(`Question No: 13 | Output: exp13 = falsetest | a = 10`); 
*/

// Current Value of 'a' before Q14: 10


// Q14: Solve the below code of expressions using short circuit?
/*
Question No: 14
Question: let exp14 = (false + "abc") * 2 || (--a + 1) * "start" + 3 && 4 || "end";
Solving: (a starts at 10)
         "falseabc" * 2 || (9 + 1) * "start" + 3 && 4 || "end" // a becomes 9
         NaN || 10 * "start" + 3 && 4 || "end"
         NaN || NaN + 3 && 4 || "end"
         NaN || "NaN3" && 4 || "end"
         NaN || 4 || "end"
Result: 4
Final Value of 'a': 9

// Solving Output:
// let exp14 = (false + "abc") * 2 || (--a + 1) * "start" + 3 && 4 || "end";
// console.log Output:
// console.log(`Question No: 14 | Output: exp14 = 4 | a = 9`); 
*/

// Current Value of 'a' before Q15: 9


// Q15: Solve the below code of expressions using short circuit?
/*
Question No: 15
Question: let exp15 = (0 + "foo") * 3 + (true && "result") || "start" + (++a + 1) * 4;
Solving: (a starts at 9)
         "0foo" * 3 + "result" || ... // a is not changed
         NaN + "result" || ...
         "NaNresult" || ... // Short-circuit ||
Result: "NaNresult"
Final Value of 'a': 9 (a is unchanged)

// Solving Output:
// let exp15 = (0 + "foo") * 3 + (true && "result") || "start" + (++a + 1) * 4;
// console.log Output:
// console.log(`Question No: 15 | Output: exp15 = NaNresult | a = 9`); 
*/

// Current Value of 'a' before Q16: 9


// Q16: Solve the below code of expressions using short circuit?
/*
Question No: 16
Question: let exp16 = 2 * "end" || (false && true) || "start" + (--a + 2) * 5 && null;
Solving: (a starts at 9)
         NaN || false || "start" + (8 + 2) * 5 && null // a becomes 8
         NaN || false || "start" + 50 && null
         NaN || false || "start50" && null
         null
Result: null
Final Value of 'a': 8

// Solving Output:
// let exp16 = 2 * "end" || (false && true) || "start" + (--a + 2) * 5 && null;
// console.log Output:
// console.log(`Question No: 16 | Output: exp16 = null | a = 8`); 
*/

// Current Value of 'a' before Q17: 8


// Q17: Solve the below code of expressions using short circuit?
/*
Question No: 17
Question: let exp17 = 3 + 2 * ("test" + a--) && (false + 3) * 5 || 0 + "value" && 4;
Solving: (a starts at 8)
         3 + 2 * ("test" + 8) && 3 * 5 || "0value" && 4 // a becomes 7
         3 + NaN && 15 || "0value" && 4
         NaN && 15 || "0value" && 4
         NaN || 4
Result: 4
Final Value of 'a': 7

// Solving Output:
// let exp17 = 3 + 2 * ("test" + a--) && (false + 3) * 5 || 0 + "value" && 4;
// console.log Output:
// console.log(`Question No: 17 | Output: exp17 = 4 | a = 7`); 
*/

// Current Value of 'a' before Q18: 7


// Q18: Solve the below code of expressions using short circuit?
/*
Question No: 18
Question: let exp18 = "start" && (false || 2 * "end") || (++a + 1) * 3 + "result" && 0;
Solving: (a starts at 7)
         "start" && (false || NaN) || (8 + 1) * 3 + "result" && 0 // a becomes 8
         "start" && NaN || 9 * 3 + "result" && 0
         NaN || "27result" && 0
         0
Result: 0
Final Value of 'a': 8

// Solving Output:
// let exp18 = "start" && (false || 2 * "end") || (++a + 1) * 3 + "result" && 0;
// console.log Output:
// console.log(`Question No: 18 | Output: exp18 = 0 | a = 8`); 
*/

// Current Value of 'a' before Q19: 8


// Q19: Solve the below code of expressions using short circuit?
/*
Question No: 19
Question: let exp19 = ((5 + 1) && "foo") || (++a + 2) * (false + 3) + "test" && 7;
Solving: (a starts at 8)
         (6 && "foo") || ... 
         "foo" || ... // Short-circuit ||
Result: "foo"
Final Value of 'a': 8 (a is unchanged)

// Solving Output:
// let exp19 = ((5 + 1) && "foo") || (++a + 2) * (false + 3) + "test" && 7;
// console.log Output:
// console.log(`Question No: 19 | Output: exp19 = foo | a = 8`); 
*/

// Current Value of 'a' before Q20: 8


// Q20: Solve the below code of expressions using short circuit?
/*
Question No: 20
Question: let exp20 = 2 * 3 + "hello" && (false + ++a) * "result" || "end" + 5 || 0;
Solving: (a starts at 8)
         "6hello" && (false + 9) * "result" || "end5" || 0 // a becomes 9
         "6hello" && 9 * "result" || "end5" || 0
         "6hello" && NaN || "end5" || 0
         NaN || "end5" || 0
Result: "end5"
Final Value of 'a': 9

// Solving Output:
// let exp20 = 2 * 3 + "hello" && (false + ++a) * "result" || "end" + 5 || 0;
// console.log Output:
// console.log(`Question No: 20 | Output: exp20 = end5 | a = 9`); 
*/

// Current Value of 'a' before Q21: 9


// Q21: Solve the below code of expressions using short circuit?
/*
Question No: 21
Question: let exp21 = 5 * (true + ++a) && ("test" + false) || 7 * (true + 2) + "value";
Solving: (a starts at 9)
         5 * (1 + 10) && "testfalse" || ... // a becomes 10
         55 && "testfalse" || ...
         "testfalse" || ... // Short-circuit ||
Result: "testfalse"
Final Value of 'a': 10

// Solving Output:
// let exp21 = 5 * (true + ++a) && ("test" + false) || 7 * (true + 2) + "value";
// console.log Output:
// console.log(`Question No: 21 | Output: exp21 = testfalse | a = 10`); 
*/

// Current Value of 'a' before Q22: 10


// Q22: Solve the below code of expressions using short circuit?
/*
Question No: 22
Question: let exp22 = "foo" + 4 && (++a + 1) * "start" || 5 + 6 * (false + true) && "test";
Solving: (a starts at 10)
         "foo4" && (11 + 1) * "start" || 5 + 6 * 1 && "test" // a becomes 11
         "foo4" && 12 * "start" || 11 && "test"
         "foo4" && NaN || "test"
         NaN || "test"
Result: "test"
Final Value of 'a': 11

// Solving Output:
// let exp22 = "foo" + 4 && (++a + 1) * "start" || 5 + 6 * (false + true) && "test";
// console.log Output:
// console.log(`Question No: 22 | Output: exp22 = test | a = 11`); 
*/

// Current Value of 'a' before Q23: 11


// Q23: Solve the below code of expressions using short circuit?
/*
Question No: 23
Question: let exp23 = (false && 2) || (a++ + 1) * "end" && "start" || 4 * 5 && "result";
Solving: (a starts at 11)
         false || (11 + 1) * "end" && "start" || 20 && "result" // a becomes 12
         false || 12 * "end" && "start" || "result"
         false || NaN && "start" || "result"
         false || NaN || "result"
Result: "result"
Final Value of 'a': 12

// Solving Output:
// let exp23 = (false && 2) || (a++ + 1) * "end" && "start" || 4 * 5 && "result";
// console.log Output:
// console.log(`Question No: 23 | Output: exp23 = result | a = 12`); 
*/

// Current Value of 'a' before Q24: 12


// Q24: Solve the below code of expressions using short circuit?
/*
Question No: 24
Question: let exp24 = 3 + 2 * "test" || (false + a--) * "hello" && "world" + 1 || 2;
Solving: (a starts at 12)
         3 + NaN || (false + 12) * "hello" && "world1" || 2 // a becomes 11
         NaN || 12 * "hello" && "world1" || 2
         NaN || NaN && "world1" || 2
         NaN || NaN || 2
Result: 2
Final Value of 'a': 11

// Solving Output:
// let exp24 = 3 + 2 * "test" || (false + a--) * "hello" && "world" + 1 || 2;
// console.log Output:
// console.log(`Question No: 24 | Output: exp24 = 2 | a = 11`); 
*/

// Current Value of 'a' before Q25: 11


// Q25: Solve the below code of expressions using short circuit?
/*
Question No: 25
Question: let exp25 = (3 + 4) * (false || a--) && 5 || "start" + 1 + "test" && 0;
Solving: (a starts at 11)
         7 * (false || 11) && 5 || ... // a becomes 10
         7 * 11 && 5 || ...
         77 && 5 || ...
         5 || ... // Short-circuit ||
Result: 5
Final Value of 'a': 10

// Solving Output:
// let exp25 = (3 + 4) * (false || a--) && 5 || "start" + 1 + "test" && 0;
// console.log Output:
// console.log(`Question No: 25 | Output: exp25 = 5 | a = 10`); 
*/

// Current Value of 'a' before Q26: 10


// Q26: Solve the below code of expressions using short circuit?
/*
Question No: 26
Question: let exp26 = "hello" && 3 * 2 + (a++ + 1) || (false + true) * "result" + "end";
Solving: (a starts at 10)
         "hello" && 6 + (10 + 1) || ... // a becomes 11
         "hello" && 17 || ...
         17 || ... // Short-circuit ||
Result: 17
Final Value of 'a': 11

// Solving Output:
// let exp26 = "hello" && 3 * 2 + (a++ + 1) || (false + true) * "result" + "end";
// console.log Output:
// console.log(`Question No: 26 | Output: exp26 = 17 | a = 11`); 
*/

// Current Value of 'a' before Q27: 11


// Q27: Solve the below code of expressions using short circuit?
/*
Question No: 27
Question: let exp27 = 3 * "test" + (true + 2) && (false || "value") || "start" + a++;
Solving: (a starts at 11)
         NaN + 3 && "value" || "start" + 11 // a becomes 12
         NaN && "value" || "start11"
         NaN || "start11"
Result: "start11"
Final Value of 'a': 12

// Solving Output:
// let exp27 = 3 * "test" + (true + 2) && (false || "value") || "start" + a++;
// console.log Output:
// console.log(`Question No: 27 | Output: exp27 = start11 | a = 12`); 
*/

// Current Value of 'a' before Q28: 12


// Q28: Solve the below code of expressions using short circuit?
/*
Question No: 28
Question: let exp28 = (false + 1) * "hello" || 3 + (a-- && 5) * "result" || "world";
Solving: (a starts at 12)
         1 * "hello" || 3 + (12 && 5) * "result" || "world" // a becomes 11
         NaN || 3 + 5 * "result" || "world"
         NaN || 3 + NaN || "world"
         NaN || NaN || "world"
Result: "world"
Final Value of 'a': 11

// Solving Output:
// let exp28 = (false + 1) * "hello" || 3 + (a-- && 5) * "result" || "world";
// console.log Output:
// console.log(`Question No: 28 | Output: exp28 = world | a = 11`); 
*/

// Current Value of 'a' before Q29: 11


// Q29: Solve the below code of expressions using short circuit?
/*
Question No: 29
Question: let exp29 = "start" + 2 * (true || 1) && (false || "value") * 5 + "result";
Solving: (a starts at 11)
         "start" + 2 * true && "value" * 5 + "result"
         "start2" && NaN + "result"
         "start2" && "NaNresult"
Result: "NaNresult"
Final Value of 'a': 11 (a is unchanged)

// Solving Output:
// let exp29 = "start" + 2 * (true || 1) && (false || "value") * 5 + "result";
// console.log Output:
// console.log(`Question No: 29 | Output: exp29 = NaNresult | a = 11`); 
*/

// Current Value of 'a' before Q30: 11


// Q30: Solve the below code of expressions using short circuit?
/*
Question No: 30
Question: let exp30 = (true + 3) * "test" || 1 * 5 && (false + "value") + "end" || a--;
Solving: (a starts at 11)
         4 * "test" || 5 && "falsevalue" + "end" || ... // a is not changed
         NaN || 5 && "falsevalueend" || ...
         NaN || "falsevalueend" || ...
Result: "falsevalueend"
Final Value of 'a': 11 (a is unchanged)

// Solving Output:
// let exp30 = (true + 3) * "test" || 1 * 5 && (false + "value") + "end" || a--;
// console.log Output:
// console.log(`Question No: 30 | Output: exp30 = falsevalueend | a = 11`); 
*/

// Current Value of 'a' before Q31: 11


// Q31: Solve the below code of expressions using short circuit?
/*
Question No: 31
Question: let exp31 = 3 + "end" || 2 * "test" && (++a + true) || "start" + 1;
Solving: (a starts at 11)
         "3end" || ... // Short-circuit ||
Result: "3end"
Final Value of 'a': 11 (a is unchanged)

// Solving Output:
// let exp31 = 3 + "end" || 2 * "test" && (++a + true) || "start" + 1;
// console.log Output:
// console.log(`Question No: 31 | Output: exp31 = 3end | a = 11`); 
*/

// Current Value of 'a' before Q32: 11

// ---------------------------------------------------------------------------------------------------

// Q32: Solve the below code of expressions using short circuit?
/*
Question No: 32
Question: let exp32 = (0 + 3) * (true + false) || 5 * "hello" + 2 && (false + "test");
Solving: (a starts at 11)
         3 * 1 || ...
         3 || ... // Short-circuit ||
Result: 3
Final Value of 'a': 11 (a is unchanged)

// Solving Output:
// let exp32 = (0 + 3) * (true + false) || 5 * "hello" + 2 && (false + "test");
// console.log Output:
// console.log(`Question No: 32 | Output: exp32 = 3 | a = 11`); 
*/

// Current Value of 'a' before Q33: 11

// ---------------------------------------------------------------------------------------------------

// Q33: Solve the below code of expressions using short circuit?
/*
Question No: 33
Question: let exp33 = 2 + 3 && ("end" + a++) || (false + "test") * 4 && 5;
Solving: (a starts at 11)
         5 && ("end" + 11) || ... // a becomes 12
         5 && "end11" || ...
         "end11" || ... // Short-circuit ||
Result: "end11"
Final Value of 'a': 12

// Solving Output:
// let exp33 = 2 + 3 && ("end" + a++) || (false + "test") * 4 && 5;
// console.log Output:
// console.log(`Question No: 33 | Output: exp33 = end11 | a = 12`); 
*/

// Current Value of 'a' before Q34: 12

// ---------------------------------------------------------------------------------------------------

// Q34: Solve the below code of expressions using short circuit?
/*
Question No: 34
Question: let exp34 = "hello" + 4 * (false + a--) || 3 && "start" + 1 || (true + "test");
Solving: (a starts at 12)
         "hello" + 4 * (0 + 12) || ... // a becomes 11
         "hello" + 48 || ...
         "hello48" || ... // Short-circuit ||
Result: "hello48"
Final Value of 'a': 11

// Solving Output:
// let exp34 = "hello" + 4 * (false + a--) || 3 && "start" + 1 || (true + "test");
// console.log Output:
// console.log(`Question No: 34 | Output: exp34 = hello48 | a = 11`); 
*/

// Current Value of 'a' before Q35: 11

// ---------------------------------------------------------------------------------------------------

// Q35: Solve the below code of expressions using short circuit?
/*
Question No: 35
Question: let exp35 = "start" && (a-- || "test") * 4 + 5 && (false + "end") || 2;
Solving: (a starts at 11)
         "start" && (11 || "test") * 4 + 5 && "falseend" || 2 // a becomes 10
         "start" && 11 * 4 + 5 && "falseend" || 2
         "start" && 49 && "falseend" || 2
         "falseend" || 2 // Short-circuit ||
Result: "falseend"
Final Value of 'a': 10

// Solving Output:
// let exp35 = "start" && (a-- || "test") * 4 + 5 && (false + "end") || 2;
// console.log Output:
// console.log(`Question No: 35 | Output: exp35 = falseend | a = 10`); 
*/

// Current Value of 'a' before Q36: 10

// ---------------------------------------------------------------------------------------------------

// Q36: Solve the below code of expressions using short circuit?
/*
Question No: 36
Question: let exp36 = 1 + "value" && (++a + 2) || (3 + "result") * true && 4;
Solving: (a starts at 10)
         "1value" && (11 + 2) || ... // a becomes 11
         "1value" && 13 || ...
         13 || ... // Short-circuit ||
Result: 13
Final Value of 'a': 11

// Solving Output:
// let exp36 = 1 + "value" && (++a + 2) || (3 + "result") * true && 4;
// console.log Output:
// console.log(`Question No: 36 | Output: exp36 = 13 | a = 11`); 
*/

// Current Value of 'a' before Q37: 11

// ---------------------------------------------------------------------------------------------------

// Q37: Solve the below code of expressions using short circuit?
/*
Question No: 37
Question: let exp37 = "hello" && 2 + "test" || (++a + 3) && (true + "value") + 1;
Solving: (a starts at 11)
         "hello" && "2test" || ... // a is not changed
         "2test" || ... // Short-circuit ||
Result: "2test"
Final Value of 'a': 11 (a is unchanged)

// Solving Output:
// let exp37 = "hello" && 2 + "test" || (++a + 3) && (true + "value") + 1;
// console.log Output:
// console.log(`Question No: 37 | Output: exp37 = 2test | a = 11`); 
*/

// Current Value of 'a' before Q38: 11

// ---------------------------------------------------------------------------------------------------

// Q38: Solve the below code of expressions using short circuit?
/*
Question No: 38
Question: let exp38 = 5 * (a-- || "test") && 6 * "result" || 2 + "end";
Solving: (a starts at 11)
         5 * (11 || "test") && NaN || "2end" // a becomes 10
         55 && NaN || "2end"
         NaN || "2end"
Result: "2end"
Final Value of 'a': 10

// Solving Output:
// let exp38 = 5 * (a-- || "test") && 6 * "result" || 2 + "end";
// console.log Output:
// console.log(`Question No: 38 | Output: exp38 = 2end | a = 10`); 
*/

// Current Value of 'a' before Q39: 10

// ---------------------------------------------------------------------------------------------------

// Q39: Solve the below code of expressions using short circuit?
/*
Question No: 39
Question: let exp39 = "start" && (false + 1) * 2 || 3 + 4 * "hello" + 5 && 0;
Solving: (a starts at 10)
         "start" && 1 * 2 || ...
         "start" && 2 || ...
         2 || ... // Short-circuit ||
Result: 2
Final Value of 'a': 10 (a is unchanged)

// Solving Output:
// let exp39 = "start" && (false + 1) * 2 || 3 + 4 * "hello" + 5 && 0;
// console.log Output:
// console.log(`Question No: 39 | Output: exp39 = 2 | a = 10`); 
*/

// Current Value of 'a' before Q40: 10

// ---------------------------------------------------------------------------------------------------

// Q40: Solve the below code of expressions using short circuit?
/*
Question No: 40
Question: let exp40 = (false || "test") * 5 || 6 + (a-- && "result") * 4;
Solving: (a starts at 10)
         "test" * 5 || 6 + (10 && "result") * 4 // a becomes 9
         NaN || 6 + "result" * 4
         NaN || 6 + NaN
         NaN || NaN
Result: NaN
Final Value of 'a': 9

// Solving Output:
// let exp40 = (false || "test") * 5 || 6 + (a-- && "result") * 4;
// console.log Output:
// console.log(`Question No: 40 | Output: exp40 = NaN | a = 9`); 
*/

// Current Value of 'a' before Q41: 9

// ---------------------------------------------------------------------------------------------------

// Q41: Solve the below code of expressions using short circuit?
/*
Question No: 41
Question: let exp41 = "start" && (3 + 2) * "test" + 5 || 4 * (false + 1) && "hello";
Solving: (a starts at 9)
         "start" && 5 * "test" + 5 || ...
         "start" && NaN + 5 || ...
         "start" && "NaN5" || ...
         "NaN5" || ... // Short-circuit ||
Result: "NaN5"
Final Value of 'a': 9 (a is unchanged)

// Solving Output:
// let exp41 = "start" && (3 + 2) * "test" + 5 || 4 * (false + 1) && "hello";
// console.log Output:
// console.log(`Question No: 41 | Output: exp41 = NaN5 | a = 9`); 
*/

// Current Value of 'a' before Q42: 9

// ---------------------------------------------------------------------------------------------------

// Q42: Solve the below code of expressions using short circuit?
/*
Question No: 42
Question: let exp42 = 1 + 2 * "end" || (false + 3) && "result" * 4 + a--;
Solving: (a starts at 9)
         1 + NaN || 3 && "result" * 4 + 9 // a becomes 8
         NaN || 3 && NaN + 9
         NaN || 3 && "NaN9"
         NaN || "NaN9"
Result: "NaN9"
Final Value of 'a': 8

// Solving Output:
// let exp42 = 1 + 2 * "end" || (false + 3) && "result" * 4 + a--;
// console.log Output:
// console.log(`Question No: 42 | Output: exp42 = NaN9 | a = 8`); 
*/

// Current Value of 'a' before Q43: 8

// ---------------------------------------------------------------------------------------------------

// Q43: Solve the below code of expressions using short circuit?
/*
Question No: 43
Question: let exp43 = (false && a--) || 4 * (3 + 2) && "start" + 5;
Solving: (a starts at 8)
         false || 4 * 5 && "start" + 5 // a is not changed
         false || 20 && "start5"
         "start5" // Short-circuit ||
Result: "start5"
Final Value of 'a': 8 (a is unchanged)

// Solving Output:
// let exp43 = (false && a--) || 4 * (3 + 2) && "start" + 5;
// console.log Output:
// console.log(`Question No: 43 | Output: exp43 = start5 | a = 8`); 
*/

// Current Value of 'a' before Q44: 8

// ---------------------------------------------------------------------------------------------------

// Q44: Solve the below code of expressions using short circuit?
/*
Question No: 44
Question: let exp44 = 3 + 2 * (true + 5) && "value" + 1 || (++a + 2) + "test";
Solving: (a starts at 8)
         3 + 2 * 6 && "value1" || ... // a is not changed
         15 && "value1" || ...
         "value1" || ... // Short-circuit ||
Result: "value1"
Final Value of 'a': 8 (a is unchanged)

// Solving Output:
// let exp44 = 3 + 2 * (true + 5) && "value" + 1 || (++a + 2) + "test";
// console.log Output:
// console.log(`Question No: 44 | Output: exp44 = value1 | a = 8`); 
*/

// Current Value of 'a' before Q45: 8

// ---------------------------------------------------------------------------------------------------

// Q45: Solve the below code of expressions using short circuit?
/*
Question No: 45
Question: let exp45 = (false || 1) + "test" && 5 + (3 * a--) || "end" + 2;
Solving: (a starts at 8)
         1 + "test" && 5 + (3 * 8) || ... // a becomes 7
         "1test" && 5 + 24 || ...
         "1test" && 29 || ...
         29 || ... // Short-circuit ||
Result: 29
Final Value of 'a': 7

// Solving Output:
// let exp45 = (false || 1) + "test" && 5 + (3 * a--) || "end" + 2;
// console.log Output:
// console.log(`Question No: 45 | Output: exp45 = 29 | a = 7`); 
*/

// Current Value of 'a' before Q46: 7

// ---------------------------------------------------------------------------------------------------

// Q46: Solve the below code of expressions using short circuit?
/*
Question No: 46
Question: let exp46 = (2 * a-- + 4) && "test" || 3 + "hello" && (false + 1) * 5;
Solving: (a starts at 7)
         (2 * 7 + 4) && "test" || ... // a becomes 6
         18 && "test" || ...
         "test" || ... // Short-circuit ||
Result: "test"
Final Value of 'a': 6

// Solving Output:
// let exp46 = (2 * a-- + 4) && "test" || 3 + "hello" && (false + 1) * 5;
// console.log Output:
// console.log(`Question No: 46 | Output: exp46 = test | a = 6`); 
*/

// Current Value of 'a' before Q47: 6

// ---------------------------------------------------------------------------------------------------

// Q47: Solve the below code of expressions using short circuit?
/*
Question No: 47
Question: let exp47 = 0 + "result" && (3 + 1) * 2 || (false + a--) * "end";
Solving: (a starts at 6)
         "0result" && 8 || (false + 6) * "end" // a becomes 5
         8 || 6 * "end"
         8 || NaN
Result: 8
Final Value of 'a': 5

// Solving Output:
// let exp47 = 0 + "result" && (3 + 1) * 2 || (false + a--) * "end";
// console.log Output:
// console.log(`Question No: 47 | Output: exp47 = 8 | a = 5`); 
*/

// Current Value of 'a' before Q48: 5

// ---------------------------------------------------------------------------------------------------

// Q48: Solve the below code of expressions using short circuit?
/*
Question No: 48
Question: let exp48 = (false || 1) * "test" && 4 || (true + 2) * "hello" + a--;
Solving: (a starts at 5)
         1 * "test" && 4 || ... // a is not changed
         NaN && 4 || ...
         NaN || ...
         NaN || 3 * "hello" + 5 // a becomes 4
         NaN || NaN + 5
         NaN || "NaN5"
Result: "NaN5"
Final Value of 'a': 4

// Solving Output:
// let exp48 = (false || 1) * "test" && 4 || (true + 2) * "hello" + a--;
// console.log Output:
// console.log(`Question No: 48 | Output: exp48 = NaN5 | a = 4`); 
*/

// Current Value of 'a' before Q49: 4

// ---------------------------------------------------------------------------------------------------

// Q49: Solve the below code of expressions using short circuit?
/*
Question No: 49
Question: let exp49 = (2 * 3) + "result" && 4 * (a-- + 1) || "start" + 2 + "end";
Solving: (a starts at 4)
         "6result" && 4 * (4 + 1) || ... // a becomes 3
         "6result" && 20 || ...
         20 || ... // Short-circuit ||
Result: 20
Final Value of 'a': 3

// Solving Output:
// let exp49 = (2 * 3) + "result" && 4 * (a-- + 1) || "start" + 2 + "end";
// console.log Output:
// console.log(`Question No: 49 | Output: exp49 = 20 | a = 3`); 
*/

// Current Value of 'a' before Q50: 3

// ---------------------------------------------------------------------------------------------------

// Q50: Solve the below code of expressions using short circuit?
/*
Question No: 50
Question: let exp50 = 32 && true - ++a && " " || "true"; // for a = 3
Solving: (a starts at 3)
         32 && 1 - 4 && " " || "true" // a becomes 4
         32 && -3 && " " || "true"
         " " || "true" // Short-circuit ||
Result: " "
Final Value of 'a': 4

// Solving Output:
// let exp50 = 32 && true - ++a && " " || "true";
// console.log Output:
// console.log(`Question No: 50 | Output: exp50 =   | a = 4`); 
*/

// Current Value of 'a' before Q51: 4

// ---------------------------------------------------------------------------------------------------

// Q51: Solve the below code of expressions using short circuit?
/*
Question No: 51
Question: let exp51 = (5 + 2) * (a-- + 1) || "start" + (++a + "end") * 3;
Solving: (a starts at 4)
         7 * (4 + 1) || ... // a becomes 3
         35 || ... // Short-circuit ||
Result: 35
Final Value of 'a': 3

// Solving Output:
// let exp51 = (5 + 2) * (a-- + 1) || "start" + (++a + "end") * 3;
// console.log Output:
// console.log(`Question No: 51 | Output: exp51 = 35 | a = 3`); 
*/

// Current Value of 'a' before Q52: 3

// ---------------------------------------------------------------------------------------------------

// Q52: Solve the below code of expressions using short circuit?
/*
Question No: 52
Question: let exp52 = (++a && 3) * "test" || 4 + "start" * (a-- + "result");
Solving: (a starts at 3)
         (4 && 3) * "test" || ... // a becomes 4
         3 * "test" || ...
         NaN || 4 + "start" * (4 + "result") // a becomes 3
         NaN || 4 + NaN
         NaN || NaN
Result: NaN
Final Value of 'a': 3

// Solving Output:
// let exp52 = (++a && 3) * "test" || 4 + "start" * (a-- + "result");
// console.log Output:
// console.log(`Question No: 52 | Output: exp52 = NaN | a = 3`); 
*/

// Current Value of 'a' before Q53: 3

// ---------------------------------------------------------------------------------------------------

// Q53: Solve the below code of expressions using short circuit?
/*
Question No: 53
Question: let exp53 = 3 + "value" * (++a + 1) || (a-- && "start") + "end";
Solving: (a starts at 3)
         3 + "value" * (4 + 1) || ... // a becomes 4
         3 + NaN || ...
         "3NaN" || (4 && "start") + "end" // a becomes 3
         "3NaN" || "start" + "end"
         "3NaN" || "startend"
Result: "startend"
Final Value of 'a': 3

// Solving Output:
// let exp53 = 3 + "value" * (++a + 1) || (a-- && "start") + "end";
// console.log Output:
// console.log(`Question No: 53 | Output: exp53 = startend | a = 3`); 
*/

// Current Value of 'a' before Q54: 3

// ---------------------------------------------------------------------------------------------------

// Q54: Solve the below code of expressions using short circuit?
/*
Question No: 54
Question: let exp54 = (a-- + 2) * "result" || (false && 5) * "test" + 4;
Solving: (a starts at 3)
         (3 + 2) * "result" || ... // a becomes 2
         5 * "result" || 0 * "test" + 4
         NaN || NaN + 4
         NaN || NaN
Result: NaN
Final Value of 'a': 2

// Solving Output:
// let exp54 = (a-- + 2) * "result" || (false && 5) * "test" + 4;
// console.log Output:
// console.log(`Question No: 54 | Output: exp54 = NaN | a = 2`); 
*/

// Current Value of 'a' before Q55: 2

// ---------------------------------------------------------------------------------------------------

// Q55: Solve the below code of expressions using short circuit?
/*
Question No: 55
Question: let exp55 = "start" + 5 * (a-- + "test") || (false + 2) * "value";
Solving: (a starts at 2)
         "start" + 5 * (2 + "test") || ... // a becomes 1
         "start" + NaN || ...
         "startNaN" || ... // Short-circuit ||
Result: "startNaN"
Final Value of 'a': 1

// Solving Output:
// let exp55 = "start" + 5 * (a-- + "test") || (false + 2) * "value";
// console.log Output:
// console.log(`Question No: 55 | Output: exp55 = startNaN | a = 1`); 
*/

// Current Value of 'a' before Q56: 1

// ---------------------------------------------------------------------------------------------------

// Q56: Solve the below code of expressions using short circuit?
/*
Question No: 56
Question: let exp56 = 4 * (a-- + 1) + "test" || (++a + 3) * "start" + 5;
Solving: (a starts at 1)
         4 * (1 + 1) + "test" || ... // a becomes 0
         8 + "test" || ...
         "8test" || ... // Short-circuit ||
Result: "8test"
Final Value of 'a': 0

// Solving Output:
// let exp56 = 4 * (a-- + 1) + "test" || (++a + 3) * "start" + 5;
// console.log Output:
// console.log(`Question No: 56 | Output: exp56 = 8test | a = 0`); 
*/

// Current Value of 'a' before Q57: 0

// ---------------------------------------------------------------------------------------------------

// Q57: Solve the below code of expressions using short circuit?
/*
Question No: 57
Question: let exp57 = (3 * "test" + 1) || (++a && a--) * "result" || "value";
Solving: (a starts at 0)
         NaN + 1 || (1 && 1) * "result" || "value" // a becomes 1, then 0
         NaN || 1 * "result" || "value"
         NaN || NaN || "value"
Result: "value"
Final Value of 'a': 0

// Solving Output:
// let exp57 = (3 * "test" + 1) || (++a && a--) * "result" || "value";
// console.log Output:
// console.log(`Question No: 57 | Output: exp57 = value | a = 0`); 
*/

// Current Value of 'a' before Q58: 0

// ---------------------------------------------------------------------------------------------------

// Q58: Solve the below code of expressions using short circuit?
/*
Question No: 58
Question: let exp58 = (a-- + "start") * "result" || (false + 2) + "end" + 3;
Solving: (a starts at 0)
         (0 + "start") * "result" || ... // a becomes -1
         "0start" * "result" || 2 + "end" + 3
         NaN || "2end3"
Result: "2end3"
Final Value of 'a': -1

// Solving Output:
// let exp58 = (a-- + "start") * "result" || (false + 2) + "end" + 3;
// console.log Output:
// console.log(`Question No: 58 | Output: exp58 = 2end3 | a = -1`); 
*/

// Current Value of 'a' before Q59: -1

// ---------------------------------------------------------------------------------------------------

// Q59: Solve the below code of expressions using short circuit?
/*
Question No: 59
Question: let exp59 = 5 * (a-- + 3) * "test" || (false && "start") + 2;
Solving: (a starts at -1)
         5 * (-1 + 3) * "test" || ... // a becomes -2
         5 * 2 * "test" || 0 + 2
         10 * "test" || 2
         NaN || 2
Result: 2
Final Value of 'a': -2

// Solving Output:
// let exp59 = 5 * (a-- + 3) * "test" || (false && "start") + 2;
// console.log Output:
// console.log(`Question No: 59 | Output: exp59 = 2 | a = -2`); 
*/

// Current Value of 'a' before Q60: -2

// ---------------------------------------------------------------------------------------------------

// Q60: Solve the below code of expressions using short circuit?
/*
Question No: 60
Question: let exp60 = (a-- + "value") * "test" + 4 || (false + 2) * "end";
Solving: (a starts at -2)
         (-2 + "value") * "test" + 4 || ... // a becomes -3
         "-2value" * "test" + 4 || 2 * "end"
         NaN + 4 || NaN
         "NaN4" || NaN
Result: "NaN4"
Final Value of 'a': -3

// Solving Output:
// let exp60 = (a-- + "value") * "test" + 4 || (false + 2) * "end";
// console.log Output:
// console.log(`Question No: 60 | Output: exp60 = NaN4 | a = -3`); 
*/

// Current Value of 'a' before Q61: -3

// ---------------------------------------------------------------------------------------------------

// Q61: Solve the below code of expressions using short circuit?
/*
Question No: 61
Question: let exp61 = 3 + (++a + "result") || (a-- + 2) * "test" + 5;
Solving: (a starts at -3)
         3 + (-2 + "result") || ... // a becomes -2
         "3-2result" || ... // Short-circuit ||
Result: "3-2result"
Final Value of 'a': -2

// Solving Output:
// let exp61 = 3 + (++a + "result") || (a-- + 2) * "test" + 5;
// console.log Output:
// console.log(`Question No: 61 | Output: exp61 = 3-2result | a = -2`); 
*/

// Current Value of 'a' before Q62: -2

// ---------------------------------------------------------------------------------------------------

// Q62: Solve the below code of expressions using short circuit?
/*
Question No: 62
Question: let exp62 = "start" + (a-- + "test") * 3 || (false && 4) * "end" + 5;
Solving: (a starts at -2)
         "start" + (-2 + "test") * 3 || ... // a becomes -3
         "start" + NaN || 0 * "end" + 5
         "startNaN" || 5
Result: "startNaN"
Final Value of 'a': -3

// Solving Output:
// let exp62 = "start" + (a-- + "test") * 3 || (false && 4) * "end" + 5;
// console.log Output:
// console.log(`Question No: 62 | Output: exp62 = startNaN | a = -3`); 
*/

// Current Value of 'a' before Q63: -3

// ---------------------------------------------------------------------------------------------------

// Q63: Solve the below code of expressions using short circuit?
/*
Question No: 63
Question: let exp63 = (++a + 2) * "test" || "value" + (a-- + 3) * "result";
Solving: (a starts at -3)
         (-2 + 2) * "test" || "value" + (-2 + 3) * "result" // a becomes -2, then -3
         0 * "test" || "value" + 1 * "result"
         0 || "value" + NaN
         0 || "valueNaN"
Result: "valueNaN"
Final Value of 'a': -3

// Solving Output:
// let exp63 = (++a + 2) * "test" || "value" + (a-- + 3) * "result";
// console.log Output:
// console.log(`Question No: 63 | Output: exp63 = valueNaN | a = -3`); 
*/

// Current Value of 'a' before Q64: -3

// ---------------------------------------------------------------------------------------------------

// Q64: Solve the below code of expressions using short circuit?
/*
Question No: 64
Question: let exp64 = 5 * "end" + (a-- + 1) * "test" || "start" + (false && "result");
Solving: (a starts at -3)
         NaN + (-3 + 1) * "test" || ... // a becomes -4
         NaN + NaN || "start" + false
         "NaNNaN" || "startfalse"
Result: "NaNNaN"
Final Value of 'a': -4

// Solving Output:
// let exp64 = 5 * "end" + (a-- + 1) * "test" || "start" + (false && "result");
// console.log Output:
// console.log(`Question No: 64 | Output: exp64 = NaNNaN | a = -4`); 
*/

// Current Value of 'a' before Q65: -4

// ---------------------------------------------------------------------------------------------------

// Q65: Solve the below code of expressions using short circuit?
/*
Question No: 65
Question: let exp65 = "value" + 3 * (a-- + "test") || (false + 1) * "end";
Solving: (a starts at -4)
         "value" + 3 * (-4 + "test") || ... // a becomes -5
         "value" + NaN || 1 * "end"
         "valueNaN" || NaN
Result: "valueNaN"
Final Value of 'a': -5

// Solving Output:
// let exp65 = "value" + 3 * (a-- + "test") || (false + 1) * "end";
// console.log Output:
// console.log(`Question No: 65 | Output: exp65 = valueNaN | a = -5`); 
*/

// Current Value of 'a' before Q66: -5

// ---------------------------------------------------------------------------------------------------

// Q66: Solve the below code of expressions using short circuit?
/*
Question No: 66
Question: let exp66 = (++a + "test") * 2 || (a-- + 1) * "start" + "result";
Solving: (a starts at -5)
         (-4 + "test") * 2 || ... // a becomes -4
         NaN || (-4 + 1) * "start" + "result" // a becomes -5
         NaN || -3 * "start" + "result"
         NaN || NaN + "result"
         NaN || "NaNresult"
Result: "NaNresult"
Final Value of 'a': -5

// Solving Output:
// let exp66 = (++a + "test") * 2 || (a-- + 1) * "start" + "result";
// console.log Output:
// console.log(`Question No: 66 | Output: exp66 = NaNresult | a = -5`); 
*/

// Current Value of 'a' before Q67: -5

// ---------------------------------------------------------------------------------------------------

// Q67: Solve the below code of expressions using short circuit?
/*
Question No: 67
Question: let exp67 = "start" + (a-- + 3) * "end" || (++a + "test") * 5;
Solving: (a starts at -5)
         "start" + (-5 + 3) * "end" || ... // a becomes -6
         "start" + -2 * "end" || (-5 + "test") * 5 // a becomes -5
         "start" + NaN || NaN
         "startNaN" || NaN
Result: "startNaN"
Final Value of 'a': -5

// Solving Output:
// let exp67 = "start" + (a-- + 3) * "end" || (++a + "test") * 5;
// console.log Output:
// console.log(`Question No: 67 | Output: exp67 = startNaN | a = -5`); 
*/

// Current Value of 'a' before Q68: -5

// ---------------------------------------------------------------------------------------------------

// Q68: Solve the below code of expressions using short circuit?
/*
Question No: 68
Question: let exp68 = 2 * (a-- + 1) + "result" || (false && "start") * 3;
Solving: (a starts at -5)
         2 * (-5 + 1) + "result" || ... // a becomes -6
         -8 + "result" || 0 * 3
         "-8result" || 0
Result: "-8result"
Final Value of 'a': -6

// Solving Output:
// let exp68 = 2 * (a-- + 1) + "result" || (false && "start") * 3;
// console.log Output:
// console.log(`Question No: 68 | Output: exp68 = -8result | a = -6`); 
*/

// Current Value of 'a' before Q69: -6

// ---------------------------------------------------------------------------------------------------

// Q69: Solve the below code of expressions using short circuit?
/*
Question No: 69
Question: let exp69 = 4 + (a-- + "test") * 5 || (false + 2) * "start";
Solving: (a starts at -6)
         4 + (-6 + "test") * 5 || ... // a becomes -7
         4 + NaN || 2 * "start"
         "4NaN" || NaN
Result: "4NaN"
Final Value of 'a': -7

// Solving Output:
// let exp69 = 4 + (a-- + "test") * 5 || (false + 2) * "start";
// console.log Output:
// console.log(`Question No: 69 | Output: exp69 = 4NaN | a = -7`); 
*/

// Current Value of 'a' before Q70: -7

// ---------------------------------------------------------------------------------------------------

// Q70: Solve the below code of expressions using short circuit?
/*
Question No: 70
Question: let exp70 = (a-- + 2) * "result" || (false && "end") + 3;
Solving: (a starts at -7)
         (-7 + 2) * "result" || ... // a becomes -8
         -5 * "result" || 0 + 3
         NaN || 3
Result: 3
Final Value of 'a': -8

// Solving Output:
// let exp70 = (a-- + 2) * "result" || (false && "end") + 3;
// console.log Output:
// console.log(`Question No: 70 | Output: exp70 = 3 | a = -8`); 
*/

// Current Value of 'a' before Q71: -8

// ---------------------------------------------------------------------------------------------------

// Q71: Solve the below code of expressions using short circuit?
/*
Question No: 71
Question: let exp71 = "test" + 2 * (a-- + 3) || (false && "start") + 4;
Solving: (a starts at -8)
         "test" + 2 * (-8 + 3) || ... // a becomes -9
         "test" + -10 || 0 + 4
         "test-10" || 4
Result: "test-10"
Final Value of 'a': -9

// Solving Output:
// let exp71 = "test" + 2 * (a-- + 3) || (false && "start") + 4;
// console.log Output:
// console.log(`Question No: 71 | Output: exp71 = test-10 | a = -9`); 
*/

// Current Value of 'a' before Q72: -9

// ---------------------------------------------------------------------------------------------------

// Q72: Solve the below code of expressions using short circuit?
/*
Question No: 72
Question: let exp72 = 3 * (a-- + "value") || (false + 2) * "test";
Solving: (a starts at -9)
         3 * (-9 + "value") || ... // a becomes -10
         NaN || 2 * "test"
         NaN || NaN
Result: NaN
Final Value of 'a': -10

// Solving Output:
// let exp72 = 3 * (a-- + "value") || (false + 2) * "test";
// console.log Output:
// console.log(`Question No: 72 | Output: exp72 = NaN | a = -10`); 
*/

// Current Value of 'a' before Q73: -10

// ---------------------------------------------------------------------------------------------------

// Q73: Solve the below code of expressions using short circuit?
/*
Question No: 73
Question: let exp73 = (a-- + "test") * 4 || (false + 1) * "result" + "start";
Solving: (a starts at -10)
         (-10 + "test") * 4 || ... // a becomes -11
         NaN || 1 * "result" + "start"
         NaN || NaN + "start"
         NaN || "NaNstart"
Result: "NaNstart"
Final Value of 'a': -11

// Solving Output:
// let exp73 = (a-- + "test") * 4 || (false + 1) * "result" + "start";
// console.log Output:
// console.log(`Question No: 73 | Output: exp73 = NaNstart | a = -11`); 
*/

// Current Value of 'a' before Q74: -11

// ---------------------------------------------------------------------------------------------------

// Q74: Solve the below code of expressions using short circuit?
/*
Question No: 74
Question: let exp74 = (++a + 5) * "end" || (a-- + 2) * "result" + "start";
Solving: (a starts at -11)
         (-10 + 5) * "end" || (-10 + 2) * "result" + "start" // a becomes -10, then -11
         -5 * "end" || -8 * "result" + "start"
         NaN || NaN + "start"
         NaN || "NaNstart"
Result: "NaNstart"
Final Value of 'a': -11

// Solving Output:
// let exp74 = (++a + 5) * "end" || (a-- + 2) * "result" + "start";
// console.log Output:
// console.log(`Question No: 74 | Output: exp74 = NaNstart | a = -11`); 
*/

// Current Value of 'a' before Q75: -11

// ---------------------------------------------------------------------------------------------------

// Q75: Solve the below code of expressions using short circuit?
/*
Question No: 75
Question: let exp75 = (3 * "test") + (a-- + "start") || (false + 1) * "result";
Solving: (a starts at -11)
         NaN + (-11 + "start") || ... // a becomes -12
         NaN + "NaNstart" || 1 * "result"
         "NaNNaNstart" || "result"
Result: "NaNNaNstart"
Final Value of 'a': -12

// Solving Output:
// let exp75 = (3 * "test") + (a-- + "start") || (false + 1) * "result";
// console.log Output:
// console.log(`Question No: 75 | Output: exp75 = NaNNaNstart | a = -12`); 
*/
