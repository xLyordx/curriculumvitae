export var gFuncs = {
    newID : ( function():string {
        return "Id_" + Math.floor(Math.random() * 999999);
    }),
    isOverflown: function(element:any) {
        return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
    }
}