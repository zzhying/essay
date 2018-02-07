
//数组去重
export default function arrUniq(arr) {
    let res = []
    let json = {}
    for (let i = 0; i < arr.length; i++) {
        if (!json[arr[i]]) {
            res.push(arr[i])
            json[arr[i]] = 1
        }
    }
    return res
}


// js两个数组比较，找到相同的删除掉, obj里面的对象id只要在ary里面，就删除掉
// var ary = [1,2,3,4];
// var obj=[{
//     id:1,
//     name:'luo1'
// },{
//     id:2,
//     name:'luo2'
// },{
//     id:5,
//     name:'luo5'
// }]
//
// //方法一
// const newArr = obj.filter(item => !ary.includes(item.id))
