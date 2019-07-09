import * as f from 'fs';

function writef() {
    f.writeFile("/test.txt", "Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
    });
}

export { writef }

