var first = 5;
var second = 5;
console.log(first + second);
var he = "hello";
var names = " Vova";
var string = he + names;
console.log(string);
var a = "1";
var b = "2";
console.log(Number(a) + Number(b));
var count = 10;
var list = [];
for (var i = 0; i < count; i++) {
    list[i] = Math.random() * (10 - 1) + 1;
}
var sum = 0;
var minimum = list[0];
var maximum = list[0];
for (var i = 0; i < count; i++) {
    if (i % 2 == 0) {
        sum += list[i];
    }
    if (list[i] > maximum) {
        maximum = list[i];
    }
    if (list[i] < minimum) {
        minimum = list[i];
    }
}
console.log(sum);
var sums = maximum + minimum;
console.log("min " + minimum);
console.log("max " + maximum);
console.log("sum " + sums);
console.log("");
var listString = [];
var listWords = ['ДОКУМЕНТАЛЬНОСТЬ', 'ШУТОВСКОЙ', 'ВЫКЛАДЫВАТЬСЯ', 'МЗДА', 'УТРАМБОВЫВАТЬСЯ'];
for (var i = 0; i < 5; i++) {
    var s = Math.floor(Math.random() * (5 - 0) + 0);
    listString[i] = listWords[s];
    console.log(listString[i]);
}
