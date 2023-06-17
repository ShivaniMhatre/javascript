var start = 656;
var end = 872;
var filteredarray = [];
var result = [];
function twoStage(start, end) {
    for (var i = start; i <= end; i++) {
        if (i % 2 == 0 && i % 5 == 0 && i % 10 == 0) {
            // console.log(i);
            filteredarray.push(i);
        }
    }
    console.log(filteredarray)
    for (var j = 0; j < filteredarray.length; j++) {
        //    console.log(filteredarray[j]);
        result.push(filteredarray[(j += 1)]);
    }
    console.log(result);
}
twoStage(start, end);