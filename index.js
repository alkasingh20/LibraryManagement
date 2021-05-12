//-----------------------------------CLASS----------------------------------------
class detail {
    constructor(name, fname, id, pass, books) {
        this.name = name;
        this.fname = fname;
        this.id = id;
        this.pass = pass;
        this.books = books;
    }
    display(data) {
        return data;
    }
};
//--------------------------------------------------------------------------------
function s2obj(id) {
    str = localStorage.getItem(id);
    var pass = str.substr(0, str.indexOf(','))
    str = str.substr(str.indexOf(',') + 1)
    var name = str.substr(0, str.indexOf(','))
    str = str.substr(str.indexOf(',') + 1)
    var fname = str.substr(0, str.indexOf(','))
    str = str.substr(str.indexOf(',') + 1)
    book = str;
    let obj = new detail(name, fname, id, pass, book)
    return obj;

}
var id = localStorage.getItem('local');
if (!id) {
    alert("please Login");
    window.location.href = "login.html";
} else {
    localStorage.removeItem('local');
    let obj = s2obj(id);
    mobj = obj;
    console.log(obj.name);
    console.log(obj.fname);
    console.log(obj.id);
    console.log(obj.pass);
    console.log(obj.books);
    
    tablebody = document.getElementById("tablebody");
    var s = obj.books;
    do {
        var b = s.substr(0, s.indexOf('$'))
        s = s.substr(s.indexOf('$') + 1)
        var a = s.substr(0, s.indexOf(','))
        s = s.substr(s.indexOf(',') + 1)

        tablebody = document.getElementById("tablebody");
        let uiString2 = `<tr>
                            <td>${b}</td>
                            <td>${a}</td>
                        </tr>`;
        tablebody.innerHTML = tablebody.innerHTML + uiString2;
    } while (s)
    
    document.getElementById('libraryForm').addEventListener('submit', function (e) {
        e.preventDefault();
        console.log('YOu have submitted library form');
        var name = document.getElementById('bookname').value;
        var author = document.getElementById('Author').value;
        obj.books = obj.books + name + '$' + author + ',';

        tablebody = document.getElementById("tablebody");
        let uiString = `<tr>
                            <td>${name}</td>
                            <td>${author}</td>
                        </tr>`;
        tablebody.innerHTML = tablebody.innerHTML + uiString;

        localStorage.setItem(obj.id, [obj.pass, obj.name, obj.fname, obj.books])



    })



}
